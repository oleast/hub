import React, { Component } from 'react'
import { Segment, Container, Header, Divider, Icon, Dropdown, Grid } from 'semantic-ui-react'

import axios from 'axios'

import Project from './Project'
import ProjectModal from './ProjectModal'

const apiMethods = [
    {key:'featured', text: 'Featured', value: 'featured'},
    {key:'all', text: 'All', value: 'all'},
    {key:'latest', text: 'Latest', value: 'latest'}
]

export default class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'featured',
            accentColor: props.accentColor || undefined,
            apiSelected: props.renderMode || 'featured',
            projects: []
        }

        this.getProjects = this.getProjects.bind(this)
        this.setApiMethod = this.setApiMethod.bind(this)
    }

    componentWillMount () {
        this.getProjects()
    }

    getProjects () {
        axios
			.get('/api/projects/' + this.state.apiSelected)
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

    setApiMethod (event, selected) {
        console.log(selected)
        this.setState({
            apiSelected: selected.value
        }, () => {
            this.getProjects()
        })
    }

    render() {
        return (
            <div id="projects">
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Column width={12}>
                            <Header color={this.state.accentColor} as='h1'>Featured Projects</Header>
                        </Grid.Column>
                        <Grid.Column width={3} floated='right'>
                            <Dropdown
                                icon='exchange'
                                labeled
                                button
                                className='icon'
                                options={apiMethods}
                                onChange={this.setApiMethod}
                                value={this.state.apiSelected.value
                            }/>
                        </Grid.Column>
                        <Grid.Column width={1} floated='right'>
                            <ProjectModal accentColor={this.state.accentColor} getProjects={this.getProjects} trigger={
                                <Icon size='large' name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                            }/>
                        </Grid.Column>
                    </Grid>
                    {this.state.projects.map((project) => 
                        <Project
                            key={project._id}
                            project={project}
                            getProjects={this.getProjects}
                            accentColor={this.state.accentColor}
                        />
                    )}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
