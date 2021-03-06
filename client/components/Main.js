
// Import external
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Import internal
import Home from './Home'
import ObjContainer from './ObjContainer'
import ObjSingle from './ObjSingle'
import NoteModal from './NoteModal'
import Note from './Note'
import ProjectModal from './ProjectModal'
import Project from './Project'
import BlogModal from './BlogModal'
import Blog from './Blog'

export default class Main extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        const { admin, accentColor } = this.props
        return (
            <main>
                <Switch>
                    <Route accentColor={accentColor} admin={admin} exact path='/' render={(props) => (<Home admin={admin} accentColor={accentColor} />)}/>
                    <Route accentColor={accentColor} admin={admin} path='/projects' render={ProjectWrapper}/>
                    <Route accentColor={accentColor} admin={admin} path='/blogs' render={BlogWrapper}/>
                    <Route accentColor={accentColor} admin={admin} path='/notes' render={NoteWrapper}/>
                    <Route accentColor={accentColor} admin={admin} path='/project/:slug' render={ProjectWrapperS}/>
                    <Route accentColor={accentColor} admin={admin} path='/blog/:slug' render={BlogWrapperS}/>
                    <Route accentColor={accentColor} admin={admin} path='/note/:slug' render={NoteWrapperS}/>
                </Switch>
            </main>
        )
    }
}

const ProjectWrapper = (props) => (
    <ObjContainer admin={props.admin} renderMode='all' ObjModal={ProjectModal} Obj={Project} key='projects' objName='projects' accentColor={props.accentColor}>
        <div className='ProjectHack' />
    </ObjContainer>
)

const BlogWrapper = (props) => (
    <ObjContainer admin={props.admin} renderMode='all' ObjModal={BlogModal} Obj={Blog} key='blogs' objName='blogs' accentColor={props.accentColor}>
        <div className='BlogHack' />
    </ObjContainer>
)

const NoteWrapper = (props) => (
    <ObjContainer admin={props.admin} renderMode='all' ObjModal={NoteModal} Obj={Note} key='notes' objName='notes' accentColor={props.accentColor}>
        <div className='NoteHack' />
    </ObjContainer>
)

const ProjectWrapperS = ({ admin, accentColor, match }) => (
    <ObjSingle admin={admin} Obj={Project} key='note' objName='projects' accentColor={accentColor} slug={match.params.slug} showAll={true} />
)

const BlogWrapperS = ({ admin, accentColor, match }) => (
    <ObjSingle admin={admin} Obj={Blog} key='blog' objName='blogs' accentColor={accentColor} slug={match.params.slug} showAll={true} />
)

const NoteWrapperS = ({ admin, accentColor, match }) => (
    <ObjSingle admin={admin} Obj={Note} key='note' objName='notes' accentColor={accentColor} slug={match.params.slug} showAll={true} />
)