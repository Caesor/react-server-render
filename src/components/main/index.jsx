import React, { Component } from 'react'
import NavLink from '../navlink'

if(typeof window !== 'undefined'){
    // require('./index.scss'); 
}

export default class Main extends Component {
    render() {
        return (
            <div className="">
                <nav className="nav">
                    <div className="nav-container">
                        <NavLink className="nav-logo" to="/" onlyActiveOnIndex><strong><i className="logo-txt">Z</i>ekai</strong>.Liao</NavLink>
                        <NavLink className="nav-item" to="/">blog</NavLink>
                        <NavLink className="nav-item" to="/about">projects</NavLink>
                        <NavLink className="nav-item" to="/about">about me</NavLink>
                        <NavLink className="nav-item" to="/category">contact me</NavLink>
                    </div>
                </nav>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
