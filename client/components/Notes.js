import React, { Component } from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'

import axios from 'axios'

import Note from './Note'
import NoteModal from './NoteModal'

export default class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'latest',
            accentColor: props.accentColor || 'black',
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
                    <Header color={this.state.accentColor} as='h1'>Latest Note
                        <NoteModal accentColor={this.state.accentColor}/>
                    </Header>
                    {this.state.notes.map((note) => <Note key={note._id} note={note}/>)}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
