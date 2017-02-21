import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import showdown from 'showdown'
import { Link } from 'react-router'

if(typeof window !== 'undefined'){
    // require('./index.scss')
}

const converter = new showdown.Converter();

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
    }

    render() {
        let rawHtml = converter.makeHtml(this.state.content.toString());
        return (
            <div className="blog" dangerouslySetInnerHTML={{__html: rawHtml}}></div>
        )
    }

    componentDidMount() {
        const bid = encodeURIComponent(this.props.params.blogId);
        
        fetch('/blog?bid=' + bid)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    content: data.content
                })
            })
    }
}
