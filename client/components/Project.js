
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
                    <Item.Image size='tiny' src={this.props.project.image} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.project.name}</Item.Header>
                        <Item.Meta>
                            {this.props.project.source ? <a href={this.props.project.source}><Icon name='github'/></a> : "This projects' source code is not available"}
                            {this.props.project.url ? <a href={this.props.project.url}>{this.props.project.url.replace('https://', '').replace('http://', '')}</a> : 'This project does not have its own web page'}
                        </Item.Meta>
                        <Item.Description>
                            {this.props.project.description}
                        </Item.Description>
                        {this.props.project.tags ? <Item.Extra>Tags: {this.props.project.tags.map((tag) => ' ' + tag + ', ') }</Item.Extra> : ''}
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}