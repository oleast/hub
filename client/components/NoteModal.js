import React, {Component} from 'react'
import { Header, Image, Modal, Icon, Button, Form, Input, Select, TextArea } from 'semantic-ui-react'

import axios from 'axios'

export default class NoteModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accentColor: props.accentColor || undefined,
            form: {}
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleChange (event, {name, value}) {
        console.log('[NoteModal](handleChange) ' + [name] + ' - ' + name + ' : ' + value)
        if (value === '') { value = undefined }
        let form = this.state.form
        form[name] = value
        console.log(form)
        this.setState({
            form: form
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        let form = this.state.form
        axios.post('/api/notes/create/', form)
        this.props.getObjs()
        this.handleClose()
    }

    handleOpen (e) {
        this.setState({
            modalOpen: true
        })
    }

    handleClose (e) {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        const { title, image, content} = this.state

        return (
            <Modal 
                open={this.state.modalOpen}
                onClose={this.handeClose}
                closeOnDimmerClick
                closeIcon='close'
                trigger={this.props.trigger}>
                <Modal.Header>Create a Note</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <Form.Input
                                        label='Title'
                                        name='title'
                                        placeholder='Title of the note...'
                                        value={title}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Image'
                                        name='image'
                                        placeholder='Note image URL...'
                                        value={image}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <TextArea
                                    name='content'
                                    label='Content'
                                    placeholder='Write the content of the note here...'
                                    value={content}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button color={this.state.accentColor}>Submit</Button>
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
} 