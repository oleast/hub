import React, { Component } from 'react'
import { Segment, Container, Header, Divider, Icon, Dropdown, Grid } from 'semantic-ui-react'

import axios from 'axios'

import Note from './Note'
import NoteModal from './NoteModal'

const apiMethods = [
    {key:'all', text: 'All', value: 'all'},
    {key:'latest', text: 'Latest', value: 'latest'}
]


export default class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'latest',
            accentColor: props.accentColor || undefined,
            apiSelected: props.renderMode || 'latest',
            notes: []
        }

        this.getNotes = this.getNotes.bind(this)
        this.setApiMethod = this.setApiMethod.bind(this)
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        axios
			.get('/api/notes/' + this.state.apiSelected)
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

    setApiMethod (event, selected) {
        console.log(selected)
        this.setState({
            apiSelected: selected.value
        }, () => {
            this.getNotes()
        })
    }

    render() {
        return (
            <div id="notes">
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Column width={12}>
                            <Header color={this.state.accentColor} as='h1'>Featured Notes </Header>
                        </Grid.Column>
                        <Grid.Column width={3} floated='right'>
                            <Dropdown
                                icon='exchange'
                                labeled
                                button
                                className='icon'
                                options={apiMethods}
                                onChange={this.setApiMethod}
                                value={this.state.apiSelected.value}
                            />
                        </Grid.Column>
                        <Grid.Column width={1} floated='right'>
                            <NoteModal accentColor={this.state.accentColor} getObj={this.getNotes} trigger={
                                <Icon size='large' name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                            }/>
                        </Grid.Column>
                    </Grid>
                    {this.state.notes.map((note) => 
                        <Note
                            key={note._id}
                            obj={note}
                            getObj={this.getNotes}
                            accentColor={this.state.accentColor}
                        />
                    )}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
