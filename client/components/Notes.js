import React, { Component } from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'

import axios from 'axios'

import Note from './Note'

export default class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'latest',
            headerColor: props.headerColor || 'black',
            notes: [
                {
                    name: 'Why i made this page',
                    id: '6',
                    date: "2016-05-25",
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                }
            ]
        }

        this.getNotes = this.getNotes.bind(this)
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        axios
			.get('/api/notes/' + this.state.rederMode)
			.then(request => {
                console.log(request.data)
				this.setState({
                    projects: request.data
                })
        	})
			.catch(err => {
				console.log(err)
			})
    }

    render() {
        return (
            <div id="notes">
                <Divider hidden/>
                <Container text>
                    <Header color={this.state.headerColor} as='h1'>Latest Note</Header>
                    {this.state.notes.map((note) => <Note note={note}/>)}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
