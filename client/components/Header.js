import React, { Component } from 'react'
import { Button, Menu, Icon, Container } from 'semantic-ui-react'

export default class Header extends Component {

    constructor (props) {
        super(props)

        this.state = {
            pageName: 'Hub'
        }
    }

    render() {
    const { activeItem } = this.state

    return (
        <Menu stackable>
            <Container>
            <Menu.Item>
                <Icon disabled name='home' /> {this.props.pageName}
            </Menu.Item>
            <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
                >
                <a href="/cv">CV</a>
            </Menu.Item>
            <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
                >
                Projects
            </Menu.Item>

            <Menu.Item
                name='testimonials'
                active={activeItem === 'testimonials'}
                onClick={this.handleItemClick}
                >
                Blogs
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='sign-in'
                    active={activeItem === 'sign-in'}
                    onClick={this.handleItemClick}
                    >
                    <Button primary>
                        Sign in
                    </Button>
                </Menu.Item>
            </Menu.Menu>
            </Container>
        </Menu>
    )
  }
}

