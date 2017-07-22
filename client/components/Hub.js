import React, { Component } from 'react'
import { Divider, Container } from 'semantic-ui-react'

import axios from 'axios'

// Import React Components
import Notes from './Notes'
import Header from './Header'
import Projects from './Projects'
import Blogs from './Blogs'
import Footer from './Footer'

const style = {
	content: {
		flex: '1'
	},
	site: {
		display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    }
}

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
			<div id="main" style={style.site}>
				<div style={style.content}>
				<Header pageName={this.state.pageName}/>
				<Notes accentColor={this.state.accentColor}/>
				<Container>
					<Divider />
				</Container>
				<Projects accentColor={this.state.accentColor}/>
				<Container>
					<Divider />
				</Container>
				<Blogs accentColor={this.state.accentColor}/>
				<Divider hidden />
				</div>
				<Footer />
			</div>
		)
	}
}