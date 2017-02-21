import path from 'path'
import fs from 'fs'

var filelist = [];

const re = /(-{3}[^]+?-{3}\n)/,
	titleReg = /title\s*:(.+?)\n/,
	h1Reg = /#\s{3}/g;

fs.readdir(path.resolve(__dirname, 'src/docs'), (err, data) => {
	filelist = data.filter( filename => {
		return /\.md$/.test(filename);
	});

	filelist.forEach( item => {
		let filepath = path.resolve(__dirname, 'src/docs/' + item);
		let content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'rs'}),
			info = content && content.match(re) && content.match(re)[1],
			title = info && info.match(titleReg) && info.match(titleReg)[1].trim();
		
		if(info && title){
			content = content.replace(info, title + '\n======================\n\n');
		}
		content = content.replace(h1Reg, '# ');
		fs.writeFileSync(filepath, content, {encoding: 'utf8', flag: 'w'});	
	});
});

