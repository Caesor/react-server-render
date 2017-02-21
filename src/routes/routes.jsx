import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../components/main'
import Guide from '../components/guide'
import Archive from '../components/archive'
import Blog from '../components/blog'
import Category from '../components/Category.jsx'
import About from '../components/about'
import Resume from '../components/resume'


const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Archive}/>
        <Route path="/category/:category" component={Category} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Archive} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog/:blogId" component={Blog} />
    </Route>
);


export default routes;