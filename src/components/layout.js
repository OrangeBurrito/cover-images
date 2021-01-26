import React from 'react'

import Header from './header'

export default function Layout(props) {
	return (
		<div className="wrap" className={props.wrapClass}>
			<Header headerText={props.title} headerStyle={props.headerStyle}/>
			<main>{props.children}</main>
			<footer className="box" style={props.footerStyle}>Copyright © OrangeBurrito {new Date().getFullYear()}</footer>
		</div>
	)
}