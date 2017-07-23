import React, { Component } from 'react'
import { Button, Menu, Icon, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor (props) {
        super(props)

        this.state = {
            pageName: 'Hub',
            activeItem: 'home'
        }

        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick (e, { name }) {
        console.log(name)
        this.setState({ activeItem: name })
    }

    render() {
    const { activeItem } = this.state
    return (
        <Menu>
            <Container>
            <Menu.Item as={Link} to='/' active={activeItem === 'home'} color='blue' onClick={this.handleItemClick}>
                <Icon disabled name='home' /> {this.props.pageName}
            </Menu.Item>
            <Menu.Item
                name='projects'
                active={activeItem === 'projects'}
                as={Link}
                to='/projects'
                color='blue'
                onClick={this.handleItemClick}
                >
                Projects
            </Menu.Item>
            <Menu.Item
                name='blogs'
                active={activeItem === 'blogs'}
                as={Link}
                to='/blogs'
                color='blue'
                onClick={this.handleItemClick}
                >
                Blogs
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item 
                    as='a'
                    href='/cv'
                    name='cv'
                    active={activeItem === 'cv'}
                    color='blue'
                    onClick={this.handleItemClick}
                    >
                    CV
                </Menu.Item>
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

