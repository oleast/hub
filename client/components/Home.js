import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Notes from './Notes'
import Projects from './Projects'
import Blogs from './Blogs'

export default class Home extends Component {
    render () {
        const { admin } = this.props
        return (
            <div>
                <Notes admin={admin} accentColor={ACCENT_COLOR}/>
                <Container>
                    <Divider />
                </Container>
                <Projects admin={admin} accentColor={ACCENT_COLOR}/>
                <Container>
                    <Divider />
                </Container>
                <Blogs admin={admin} accentColor={ACCENT_COLOR}/>
                <Divider hidden />
            </div>
        )
    }
}