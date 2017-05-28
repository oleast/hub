
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider, Label  } from 'semantic-ui-react'

import axios from 'axios'

import BlogModal from './BlogModal'

export default class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false,
            accentColor: props.accentColor
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
        this.feature = this.feature.bind(this)
        this.unFeature = this.unFeature.bind(this)
    }

    deleteItem () {
        axios.post('/api/blogs/delete', { id:this.props.obj._id })
        this.props.getObj()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    feature () {
        axios.post('/api/blogs/feature', { id:this.props.obj._id, featured: true})
        this.props.getObj()
    }

    unFeature () {
        axios.post('/api/blogs/feature', { id:this.props.obj._id, featured: false})
        this.props.getObj()
    }

    render () {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={this.props.obj.image} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.obj.title}</Item.Header>
                        <Item.Meta>
                            <Icon size='large' name='settings' onClick={this.toggleShowOptions}/>
                            {this.props.obj.date.getFormattedDate()}
                        </Item.Meta>
                        <Item.Description>
                            {this.props.obj.content}
                        </Item.Description>
                        <Item.Extra></Item.Extra>

                        {this.state.showOptions ?
                            <div>
                                <Divider />
                                <Grid columns={3} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <BlogModal accentColor={this.state.accentColor} getObj={this.props.getObj} trigger={
                                            <Icon size='large' name='pencil' color='blue' onClick={this.handleOpen}/>
                                        } />
                                    </Grid.Column>
                                    <Grid.Column>
                                        {this.props.obj.featured ?
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
