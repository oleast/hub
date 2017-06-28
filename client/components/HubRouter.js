import React, {Component} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import { Divider, Container } from 'semantic-ui-react'

import Notes from './Notes'
import Projects from './Projects'
import Blogs from './Blogs'
import NotFound from './NotFound'

export default class HubRouter extends Component {

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={ () =>
                        <div>
                            <Notes accentColor={this.props.accentColor}/>
                            <Container>
                                <Divider />
                            </Container>
                            <Projects accentColor={this.props.accentColor}/>
                            <Container>
                                <Divider />
                            </Container>
                            <Blogs accentColor={this.props.accentColor}/>
                        </div>
                    } />
                    <Route path='/notes' component={ () =>
                        <Notes accentColor={this.props.accentColor}/>
                    } />
                    <Route path='/projects' component={ () =>
                        <Projects accentColor={this.props.accentColor}/>
                    } />
                    <Route path='/blogs' component={ () =>
                        <Blogs accentColor={this.props.accentColor}/>
                    } />
                    <Route path='/about' component={ () =>
                        <div></div>
                    } />
                    <Route path='*' component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}