import React, {Component} from 'react'
import { Header, Image, Modal, Icon, Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

import axios from 'axios'

export default class BlogModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accentColor: props.accentColor || 'standard',
            form: {
                featured: true,
            }
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleCheckbox (event, {name, checked}) {
        console.log('toggle ' + name + ' to ' + checked)
        let form = this.state.form
        form[name] = checked
        console.log(form)
        this.setState({
            form: form
        })
    }

    handleChange (event, {name, value}) {
        console.log([name] + ' - ' + name + ' : ' + value)
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
        form.tags = form.tags.split(',')
        axios.post('/api/blogs/create/', form)
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
        const { title, image, content, featured } = this.state

        return (
            <Modal 
                open={this.state.modalOpen}
                onClose={this.handeClose}
                closeOnDimmerClick={true}
                trigger={
                    <Button
                        floated='right'
                        color={this.state.accentColor}
                        onClick={this.handleOpen}>
                        <h3>+</h3>
                    </Button>
                }>
                <Modal.Header>Create a Project</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <Form.Input
                                        label='Title'
                                        name='title'
                                        placeholder='Blog post title...'
                                        value={title}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Image'
                                        name='image'
                                        placeholder='Blog post image URL...'
                                        value={image}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <TextArea
                                    name='content'
                                    label='Content'
                                    placeholder='Blog content, write the entire blog post here...'
                                    value={content}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Featured' name='featured' onChange={this.handleCheckbox} defaultChecked />
                            </Form.Field>
                            <Form.Field>
                                <Button color={this.state.accentColor}>Submit</Button>
                                <Button color='red' floated='right' onClick={this.handleClose}>Close</Button>
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}