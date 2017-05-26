import React, { Component } from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'

import axios from 'axios'

import Project from './Project'

export default class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'featured',
            headerColor: props.headerColor || 'black',
            projects: []
        }

        this.getProjects = this.getProjects.bind(this)
    }

    componentWillMount() {
        this.getProjects()
    }

    getProjects() {
        axios
			.get('/api/projects/' + this.state.renderMode)
			.then(request => {
                console.log(request.data)
				this.setState({
                    projects: request.data
                })
        	})
			.catch(err => {
				console.log(err)
			})
    }

    render() {
        return (
            <div id="projects">
                <Divider hidden/>
                <Container text>
                    <Header color={this.state.headerColor} as='h1'>Featured Projects</Header>
                    {this.state.projects.map((project) => <Project key={project.id} project={project}/>)}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
