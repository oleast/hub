
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider } from 'semantic-ui-react'

import axios from 'axios'

import NoteModal from './NoteModal'

export default class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false,
            accentColor: props.accentColor
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
    }

    deleteItem () {
        axios.post('/api/notes/delete', { id:this.props.obj._id })
        this.props.getObj()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
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
                                <Grid columns={2} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <NoteModal accentColor={this.state.accentColor} getObj={this.props.getObj} trigger={
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