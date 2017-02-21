import fs from 'co-fs'

export function* view(next){

	const { bid } = this.query;
	const re = /^(.+)\n=+/m,
		linkReg = /(.+)\.md$/,
		infoReg = /---([^]+)---\n([^]+)/m,
		titleReg = /title\s*:\s*(.+)/i,
		categoryReg = /categories\s*:\s*(.+)/i,
		tagReg = /tags\s*:\s*(.+)/i;

	// read markdown files
	const file = yield fs.readFile(__dirname + '/../docs/' + bid + '.md', 'utf8');

	// console.log(file);

	let i = file.match(infoReg),
		info = i && i[1],
		t = info.match(titleReg),
		title =  t && t[1],
		c = info.match(categoryReg),
		category = c && c[1],
		t1 = info.match(tagReg),
		tags = t1 && t1[1],
		tagArr = tags && tags.trim().split(' '),
		content = i && i[2];

	this.body = {
		title,
		category,
		tags: tagArr,
		content
	};
}