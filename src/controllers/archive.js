import fs from 'co-fs'

export function* list(next){

	const linkReg = /(.+)\.md$/,
		infoReg = /---([^]+)---\n([^]+)/m,
		timeReg = /(\d{4}-\d{2}-\d{2})/i,
		titleReg = /title\s*:\s*(.+)/i;

	let paths = yield fs.readdir(__dirname + '/../docs');

	// only need markdown file
	paths = paths.filter( path => {
		return /\.md$/.test(path);
	});

	// read markdown files
	let files = yield paths.map( path => {
		return {
			path,
			content: fs.readFile(__dirname + '/../docs/' + path, 'utf8')
		}
	});

	let list = files.map( file => {

		let i = file.content.match(infoReg),
			info = i && i[1],
			ti = file.path.match(timeReg),
			time = ti && ti[1],
			t = info.match(titleReg),
			title =  t && t[1],
			h = file.path.match(linkReg),
			href = h && '/blog/' + h[1].trim();

		return {
			title
			, time
			, href
		};	
	}).reverse();

	this.body = {
		list
	};
}