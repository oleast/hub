import React, { Component } from 'react'
import { Divider, Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import axios from 'axios'

// Import React Components
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Home from './Home'

import Projects from './Projects'
import Blogs from './Blogs'
import Notes from './Notes'

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
			admin: false,
			displayName: undefined,
			username: undefined
		}
	}

	getUser () {
		console.log('[Hub](getUser) Getting user..')
		axios.get('/user')
			.then((res) => {
				if (res.data.user) {
					console.log('[Hub](getUser) Got user')
					this.setState({
						admin: res.data.user.admin,
						username: res.data.user.username,
						displayName: res.data.user.displayName
					})
				} else if (!res.data.success) {
					console.log('[Hub](getUser) Not logged in')
				} else {
					console.log('[Hub](getUser) Login Failure')
				}
			})
			.catch((err) => {
				console.error(err)
			}) 
	}

	render () {
		const { pageName, admin, username, displayName } = this.state
		return (
			<div id="main" style={style.site}>
				<div style={style.content}>
				<Header pageName={pageName} admin={admin} displayName={displayName} getUser={this.getUser}/>
				<Main admin={admin}/>
				</div>
				<Footer />
			</div>
		)
	}
}

