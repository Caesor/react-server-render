import router from 'koa-router'

import * as archive from '../controllers/archive'
import * as blog from '../controllers/blog'

const koarouter = router()

koarouter
	.get('/bloglist', archive.list)
	.get('/blog', blog.view)


export default koarouter;