import React, { Component } from 'react'

if(typeof window !== 'undefined'){
    // require('./index.scss'); 
}

export default class Guide extends Component {
    render() {
        return (
            <div className="">
                <div className="guide-images">
                    <div className="guide-image-1"></div>
                    <div className="guide-image-2"></div>
                    <div className="guide-image-3"></div>
                    <div className="guide-image-4"></div>
                </div>
            </div>
        )
    }
}
