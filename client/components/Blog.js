
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
                    <Item.Image size='tiny' src={this.props.blog.picture} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.blog.name}</Item.Header>
                        <Item.Meta>{this.props.blog.date.getFormattedDate()}</Item.Meta>
                        <Item.Description>
                            <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />
                        </Item.Description>
                        <Item.Extra></Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}