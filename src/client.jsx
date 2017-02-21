import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes/routes.jsx'
import { browserHistory, Router } from 'react-router'

// const store = createStore(window.__DATA__);

render(
    
    	<Router history={browserHistory}>
    		{routes}
    	</Router>
    ,
	document.getElementById('app')
);
