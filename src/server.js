import koa from 'koa'
import koaStatic from 'koa-static'
// import markdown from 'koa-markdown'
import logger from 'koa-logger'
import koaBody from 'koa-body'
import compress from 'koa-compress'
import favicon from 'koa-favicon'
import router from './routes/router'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import routes from './routes/routes.jsx'
import { match, RouterContext } from 'react-router'

import { template } from './template'
import config from './config/main'

const app = koa();

app
	.use(logger())
	.use(koaBody(config.bodyparser))
	.use(compress())
	.use(router.routes())
	// .use(markdown(config.markdown))
	.use(koaStatic(config.static))
	.use(favicon(config.favicon))
	// react server render
	.use(function* (next){
		match({routes, location: this.url}, (err, redirect, props) => {
			// const store = createStore();
			if(err){
				console.log('error: ' + error);
			}else if(redirect){
				console.log('302');
			}else if(props){
				console.log(this.url + ' 200');

				this.body = template(
					renderToString(
						
							<RouterContext {...props}/>
						),
					'initialState'
				);
			}else {
				console.log(this.url + ' 404');
			}
		})
	});

app.listen(config.port, function(){
	console.log('Blog server running at http://localhost:' + config.port);
});