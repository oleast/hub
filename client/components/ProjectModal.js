import React, {Component} from 'react'
import { Header, Image, Modal, Icon, Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

import axios from 'axios'

export default class ProjectModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accentColor: props.accentColor || undefined,
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
        console.log('[ProjectModal](handleCheckbox) Toggle ' + name + ' to ' + checked)
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
        if (form.tags) { form.tags = form.tags.split(',') }
        axios.post('/api/projects/create/', form)
        this.props.getObjs()
        this.handleClose()
    }

    handleOpen (event) {
        this.setState({
            modalOpen: true
        })
    }

    handleClose (event) {
        this.setState({
            modalOpen: false
        })
    }

    render () {
        const { name, image, source, tags, description, featured, url } = this.state

        return (
            <Modal 
                open={this.state.modalOpen}
                onClose={this.handeClose}
                closeOnDimmerClick
                closeIcon='close'
                trigger={this.props.trigger}>
                <Modal.Header>Create a Project</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <Form.Input
                                        label='Name'
                                        name='name'
                                        placeholder='Project name...'
                                        value={name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Image'
                                        name='image'
                                        placeholder='Project image URL...'
                                        value={image}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <Form.Input
                                        label='Source Code'
                                        name='source'
                                        placeholder='Link to source code...'
                                        value={source}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Url'
                                        name='url'
                                        placeholder='Project URL...'
                                        value={url}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <Form.Input
                                    label='Tags'
                                    name='tags'
                                    placeholder='Tags corresponding to this project...'
                                    value={tags}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextArea
                                    name='description'
                                    label='Description'
                                    placeholder='Description of the project, its purpose and technologies...'
                                    value={description}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Featured' name='featured' onChange={this.handleCheckbox} defaultChecked />
                            </Form.Field>
                            <Form.Field>
                                <Button color={this.state.accentColor}>Submit</Button>
                                {/*<Button color='red' floated='right' onClick={this.handleClose}>Close</Button>*/}
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}