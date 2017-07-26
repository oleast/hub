
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import BlogModal from './BlogModal'

export default class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
        this.feature = this.feature.bind(this)
        this.unFeature = this.unFeature.bind(this)
    }

    deleteItem () {
        const requestUrl = '/api/blogs/delete'
        const requestPayload = { id:this.props.obj._id }
        console.log('[Blog](deleteItem) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    feature () {
        const requestUrl = '/api/blogs/feature'
        const requestPayload = { id:this.props.obj._id, featured: true}
        console.log('[Blog](feature) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    unFeature () {
        const requestUrl = '/api/blogs/feature'
        const requestPayload = { id:this.props.obj._id, featured: false}
        console.log('[Blog](feature) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    render () {
        const { showOptions } = this.state
        const { admin, obj, accentColor } = this.props
        const link = '/blog/' + obj._id

        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={obj.image} />

                    <Item.Content>
                        <Item.Header><Link to={link}>{obj.title}</Link></Item.Header>
                        <Item.Meta>
                            { admin ? 
                                <Icon size='large' name='settings' onClick={this.toggleShowOptions}/> : undefined
                            }
                            {obj.date.getFormattedDate()}
                        </Item.Meta>
                        <Item.Description>
                            {obj.content}
                        </Item.Description>
                        <Item.Extra></Item.Extra>

                        { admin && showOptions ?
                            <div>
                                <Divider />
                                <Grid columns={3} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <BlogModal accentColor={accentColor} getObjs={getObjs} trigger={
                                            <Icon size='large' name='pencil' color='blue' onClick={this.handleOpen}/>
                                        } />
                                    </Grid.Column>
                                    <Grid.Column>
                                        {obj.featured ?
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
