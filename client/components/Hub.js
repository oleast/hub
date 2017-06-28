import React, { Component } from 'react'
import { Divider, Container } from 'semantic-ui-react'

import axios from 'axios'

// Import React Components
import Notes from './Notes'
import Header from './Header'
import Projects from './Projects'
import Blogs from './Blogs'
import Footer from './Footer'
import HubRouter from './HubRouter'

export default class Hub extends Component {

	constructor (props) {
        super(props)

		this.state = {
			pageName: 'Hub',
			accentColor: 'blue',
			projects: [],
			blogs: []
		}
	}

	render () {
		return (
			<div id="main">
				<Header pageName={this.state.pageName}/>
				<HubRouter accentColor={this.state.accentColor}/>
				<Divider hidden />
				<Footer />
			</div>
		)
	}
}