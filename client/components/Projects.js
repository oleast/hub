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

        this.getObjs = this.getObjs.bind(this)
        this.setApiMethod = this.setApiMethod.bind(this)
    }

    componentWillMount () {
        this.getObjs()
    }

    getObjs () {
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
            this.getObjs()
        })
    }

    render() {
        return (
            <div id="projects">
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Row only='computer'>
                            <Grid.Column width={11}>
                                <Header color={this.state.accentColor} as='h1'>Featured Projects</Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Dropdown
                                    fluid
                                    icon='exchange'
                                    labeled
                                    button
                                    className='icon'
                                    options={apiMethods}
                                    onChange={this.setApiMethod}
                                    value={this.state.apiSelected}
                                />
                            </Grid.Column>
                            <Grid.Column width={1} floated='left'>
                                <ProjectModal accentColor={this.state.accentColor} getObjs={this.getObjs} trigger={
                                    <Icon circular name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                                }/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={16}>
                                <Header color={this.state.accentColor} as='h1'>Featured Projects</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={6}>
                                <Dropdown
                                    fluid
                                    icon='exchange'
                                    labeled
                                    button
                                    className='icon'
                                    options={apiMethods}
                                    onChange={this.setApiMethod}
                                    value={this.state.apiSelected}
                                />
                            </Grid.Column>
                            <Grid.Column width={10} floated='left' textAlign='right'>
                                <ProjectModal accentColor={this.state.accentColor} getObjs={this.getObjs} trigger={
                                    <Icon circular name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                                }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {this.state.projects.map((project) => 
                        <Project
                            key={project._id}
                            obj={project}
                            getObjs={this.getObjs}
                            accentColor={this.state.accentColor}
                        />
                    )}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
