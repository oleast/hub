
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import NoteModal from './NoteModal'

export default class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
    }

    deleteItem () {
        const requestUrl = '/api/notes/delete'
        const requestPayload = { id:this.props.obj._id }
        console.log('[Note](deleteItem) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    render () {
        const { showOptions } = this.state
        const { obj, admin, accentColor } = this.props
        const link = '/note/' + obj._id

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
                                <Grid columns={2} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <NoteModal accentColor={accentColor} getObj={getObj} trigger={
                                            <Icon size='large' name='pencil' color='blue' onClick={this.handleOpen}/>
                                        } />
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