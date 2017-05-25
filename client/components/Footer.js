
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
        <Menu stackable widths={3}>
            <Container>
            <Menu.Item>
                Footer 1
            </Menu.Item>
            <Menu.Item>
                Footer 2
            </Menu.Item>
            <Menu.Item>
                Footer 3
            </Menu.Item>
            </Container>
        </Menu>
    )
  }
}
