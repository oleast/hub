import React, {Component} from 'react'
import { Header, Image, Modal, Icon, Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

import axios from 'axios'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class  extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accentColor: props.accentColor || 'standard'
        }
    }

    render() {
        return (
            <Modal trigger={<Button floated='right' color={this.state.accentColor}><h3>+</h3></Button>}>
                <Modal.Header>Create a Project</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} name='name' label='Name' placeholder='Project name...' />
                                <Form.Field control={Input} name='image' label='Image' placeholder='Project Image URL' />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} name='git' label='Git' placeholder='Git Repository URL' />
                                <Form.Field control={Input} tags='tags' label='Tags' placeholder='Tags Corresponding To This Project' />
                            </Form.Group>
                            <Form.Field control={TextArea} label='Description' placeholder='Tell us more about you...' />
                            <Form.Field control={Checkbox} label='Featured' />
                            <Form.Field control={Button}>Submit</Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}