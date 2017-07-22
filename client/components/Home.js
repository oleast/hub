import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Notes from './Notes'
import Projects from './Projects'
import Blogs from './Blogs'

export default class Home extends Component {
    render () {
        return (
            <div>
                <Notes accentColor={ACCENT_COLOR}/>
                <Container>
                    <Divider />
                </Container>
                <Projects accentColor={ACCENT_COLOR}/>
                <Container>
                    <Divider />
                </Container>
                <Blogs accentColor={ACCENT_COLOR}/>
                <Divider hidden />
            </div>
        )
    }
}