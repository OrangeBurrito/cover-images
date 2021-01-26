import React from 'react'
import {Link} from 'gatsby'

export default (props) => {
	return (
		<div className="header">
			<h1 className="box" style={props.headerStyle}>{props.headerText}</h1>
			<nav className="box">
				<Link to="/" activeClassName="active">Home</Link>
				<Link to="/about" activeClassName="active">About</Link>
			</nav>
		</div>
	)
}