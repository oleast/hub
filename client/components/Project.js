
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider, Label } from 'semantic-ui-react'

import axios from 'axios'

import ProjectModal from './ProjectModal'

export default class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false,
            showEditModal: false
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
        this.feature = this.feature.bind(this)
        this.unFeature = this.unFeature.bind(this)
        //this.toggleShowEditModal = toggleShowEditModal.bind(this)
    }

    deleteItem () {
        axios.post('/api/projects/delete', { id:this.props.project._id })
        this.props.getProjects()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    feature () {
        axios.post('/api/projects/feature', { id:this.props.project._id, featured: true})
        this.props.getProjects()
    }

    unFeature () {
        axios.post('/api/projects/feature', { id:this.props.project._id, featured: false})
        this.props.getProjects()
    }

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={this.props.project.image} />
                    <Item.Content>
                        <Item.Header as='a'>
                            {this.props.project.name}
                        </Item.Header>
                        <Item.Meta>
                            <Icon size='large' name='settings' onClick={this.toggleShowOptions}/>
                            {this.props.project.source ? <a href={this.props.project.source}><Icon size='large' name='github'/></a> : "This projects' source code is not available"}
                            {this.props.project.url ? <a href={this.props.project.url}>{this.props.project.url.replace('https://', '').replace('http://', '')}</a> : 'This project does not have its own web page'}
                        </Item.Meta>
                        <Item.Description>
                            {this.props.project.description}
                        </Item.Description>
                        {this.props.project.tags ? <Item.Extra>{this.props.project.tags.map((tag) => <Label key={tag}>{tag}</Label>) }</Item.Extra> : ''}
                        
                        {this.state.showOptions ?
                            <div>
                                <Divider />
                                <Grid columns={3} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <ProjectModal accentColor={this.state.accentColor} getProjects={this.props.getProjects} trigger={
                                            <Icon size='large' name='pencil' color='blue' onClick={this.handleOpen}/>
                                        } />
                                    </Grid.Column>
                                    <Grid.Column>
                                        {this.props.project.featured ?
                                            <Icon size='large' name='star' color='purple' onClick={this.unFeature} /> :
                                            <Icon size='large' name='empty star' color='purple' onClick={this.feature} />
                                        }
                                    </Grid.Column>
                                </Grid>
                            </div>
                        : ''}
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}