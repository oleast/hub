
import React, { Component } from 'react'
import { Item, Image } from 'semantic-ui-react'

export default class Blog extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src='https://openclipart.org/download/247324/abstract-user-flat-1.svg' />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.note.name}</Item.Header>
                        <Item.Meta>{this.props.note.date.getFormattedDate()}</Item.Meta>
                        <Item.Description>
                            {this.props.note.text}
                        </Item.Description>
                        <Item.Extra></Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}