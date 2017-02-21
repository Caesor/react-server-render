import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router'

if(typeof window !== 'undefined'){
    // require('./index.scss')
}

export default class Archive extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1>Archive</h1>
                <ul className="bloglist">
                {
                    data.map( (item, index) => {
                        return (
                            <li className="bloglist-item" key={index}>
                                <Link to={item.href}><span className="bloglist-item-title">{item.title}</span><span className="bloglist-item-time">{item.time}</span></Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

    componentDidMount() {

        fetch('/bloglist')
            .then(response =>response.json())
            .then(data => {
                this.setState({
                    data: data.list
                });
            }); 
    }
}