import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
  render() {
    return (
    	<div>
    		<p>Caesor is coder concentrated on Web Front-end Development.</p>
    		<p>He is also a new guy contributed to Github.</p>
            <p>My <Link to="/resume">resume</Link></p>
    		<p>You can contact with him by E-mail : <a href="mailto:liaozksysu@gmail.com">liaozksysu@gmail.com</a></p>
    	</div>
    )
  }
}
