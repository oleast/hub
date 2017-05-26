
import React, { Component } from 'react'
import { Item, Image, Icon } from 'semantic-ui-react'

export default class Project extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={this.props.project.picture} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.project.name}</Item.Header>
                        <Item.Meta>
                            <a href={this.props.project.repo}><Icon name='github'/></a>
                            <a href={this.props.project.url}>{this.props.project.url.replace('https://', '').replace('http://', '')}</a></Item.Meta>
                        <Item.Description>
                            {this.props.project.description}
                        </Item.Description>
                        <Item.Extra>Tags: {this.props.project.tags.map((tag) => ' ' + tag + ', ') }</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}