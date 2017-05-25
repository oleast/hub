import React, { Component } from 'react'
import { Divider, Container } from 'semantic-ui-react'

import axios from 'axios'

// Import React Components
import Notes from './Notes'
import Header from './Header'
import Projects from './Projects'
import Blogs from './Blogs'
import Footer from './Footer'

export default class Hub extends Component {

	constructor (props) {
        super(props)

		this.state = {
			accentColor: 'blue',
			projects: [],
			blogs: []
		}
	}

	render () {
		return (
			<div id="main">
				<Header />
				<Divider />
				<Notes headerColor={this.state.accentColor}/>
				<Divider hidden />
				<Projects headerColor={this.state.accentColor}/>
				<Container>
					<Divider />
				</Container>
				<Blogs headerColor={this.state.accentColor}/>
				<Divider hidden />
				<Footer />
			</div>
		)
	}
}