import React, { Component } from 'react'
import { Divider, Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import axios from 'axios'

// Import React Components
import Header from './Header'
import Footer from './Footer'
//import Main from './Main'
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
		}
	}

	render () {
		return (
			<div id="main" style={style.site}>
				<div style={style.content}>
				<Header pageName={this.state.pageName}/>
				<Main />
				</div>
				<Footer />
			</div>
		)
	}
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={() => (<Home />)}/>
      <Route path='/projects' render={() => (<Projects renderMode='all'/>)}/>
	  <Route path='/blogs' render={() => (<Blogs renderMode='all' />)}/>
	  <Route path='/notes' render={() => (<Notes renderMode='all' />)}/>
    </Switch>
  </main>
)
