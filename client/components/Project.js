
import React, { Component } from 'react'
import { Item, Image } from 'semantic-ui-react'

export default class Project extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.project.name}</Item.Header>
                        <Item.Meta>{this.props.project.id}</Item.Meta>
                        <Item.Description>
                            <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />
                        </Item.Description>
                        <Item.Extra><a href={this.props.project.url}>{this.props.project.url.replace('https://', '').replace('http://', '')}</a></Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}