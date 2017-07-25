import React, { Component } from 'react'
import { Button, Menu, Icon, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Signin from './Signin'

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
        console.log('[Header](handleItemClick) Name: ' + name)
        this.setState({ activeItem: name })
    }

    componentDidMount () {
        this.props.getUser()
    }

    render() {
    const { activeItem } = this.state
    const { pageName, displayName, admin } = this.props

    console.log(displayName)
    return (
        <Menu>
            <Container>
            <Menu.Item as={Link} to='/' active={activeItem === 'home'} color='blue' onClick={this.handleItemClick}>
                <Icon disabled name='home' /> {pageName}
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
            <Menu.Item
                name='notes'
                active={activeItem === 'notes'}
                as={Link}
                to='/notes'
                color='blue'
                onClick={this.handleItemClick}
                >
                Notes
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
                { displayName ?
                    <Menu.Item>
                        { admin ? 'Admin | ' + displayName : displayName }
                    </Menu.Item> : undefined
                }
                <Menu.Item>
                    { !displayName ?
                        <Signin getUser={ this.props.getUser.bind(this) }/> : <Button color='blue'>Sign out</Button>
                    }
                </Menu.Item>
            </Menu.Menu>
            </Container>
        </Menu>
    )
  }
}

