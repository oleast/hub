import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'

export default class Main extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={(props) => (<Home admin={this.props.admin} />)}/>
                    <Route path='/projects' render={(props) => (<Projects admin={this.props.admin} renderMode='all'/>)}/>
                    <Route path='/blogs' render={(props) => (<Blogs admin={this.props.admin} renderMode='all' />)}/>
                    <Route path='/notes' render={(props) => (<Notes admin={this.props.admin} renderMode='all' />)}/>
                </Switch>
            </main>
        )
    }
}
