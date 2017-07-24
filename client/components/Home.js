
// Import external
import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

// Import internal
import ObjContainer from './ObjContainer'
import NoteModal from './NoteModal'
import Note from './Note'
import ProjectModal from './ProjectModal'
import Project from './Project'
import BlogModal from './BlogModal'
import Blog from './Blog'

export default class Home extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        const { admin, accentColor} = this.props
        return (
            <div>
                <ObjContainer admin={admin} ObjModal={NoteModal} Obj={Note} objName='notes' accentColor={accentColor} renderMode='latest' />
                <Container>
                    <Divider />
                </Container>
                <ObjContainer admin={admin} ObjModal={ProjectModal} Obj={Project} objName='projects' accentColor={accentColor} />
                <Container>
                    <Divider />
                </Container>
                <ObjContainer admin={admin} ObjModal={BlogModal} Obj={Blog} objName='blogs' accentColor={accentColor} />
                <Divider hidden />
            </div>
        )
    }
}