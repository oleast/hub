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
            notes: []
        }

        this.getNotes = this.getNotes.bind(this)
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        axios
			.get('/api/notes/' + this.state.renderMode)
			.then(request => {
                console.log(request.data)
				this.setState({
                    notes: request.data
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
                    {this.state.notes.map((note) => <Note key={note.id} note={note}/>)}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
