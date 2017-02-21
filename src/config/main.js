import path from 'path'

const config = {
	name: "Nemo's blog",
	keys: ['zekai'],
	port: process.env.PORT || 8008,
	bodyparser: { strict: false },
	markdown: {
		root: path.resolve(__dirname, '../docs'),
		baseUrl: '/docs',
		layout: path.resolve(__dirname, '../public/blog.html'),
		cache: false
	},
	static: path.resolve(__dirname, '../public'),
	favicon: path.resolve(__dirname, '../favicon.ico')
}

export default config;