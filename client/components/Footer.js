
import React, { Component } from 'react'
import { Button, Menu, Icon, Container, Grid, Segment, Divider } from 'semantic-ui-react'

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
        <Segment basic inverted>
            <Container>
                <Grid columns={3} relaxed>
                    <Grid.Column>
                        <Segment basic inverted>
                            <p>
                                I don't really know what I should put here yet, do you?
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic inverted>
                            <p>
                                Made with <Icon size='small' name='heart'/> by Ole Anders Stokker (oleast).
                                Feel free to contact me at olestokk(at)gmail(dot)com
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic inverted>
                            <p>
                                <a href="https://github.com/oleast/hub"><Icon size='large' name='github'></Icon></a> | This project is open source and available on Github for any and everyone to look at and contribute to.
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>
    )
  }
}
