import React, { Component } from 'react'
import { Modal, Form, Button, Icon, Header, Message } from 'semantic-ui-react'
import axios from 'axios'

export default class Skeleton extends Component {

    constructor (props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            failed: false
        }

        this.postSignIn = this.postSignIn.bind(this)
        this.onFormChange = this.onFormChange.bind(this)
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.loginFailed = this.loginFailed.bind(this)

    }

    open () {
        this.setState({ open: true })
    }

    close () {
        this.setState({ open: false })
    }

    loginFailed () {
        this.setState({
            username: '',
            password: '',
            failed: true
        })
    }

    postSignIn () {
        axios.post('/login', this.state)
            .then((res) => {
                if (res.data.success) {
                    this.close()
                    this.props.getUser()
                } else {
                    this.loginFailed()
                }
            })
            .catch((err) => {
                this.loginFailed()
                console.error(err)
            }) 
    }
    
    onUnmount () {
        this.setState({
            username: '',
            password: '',
            failed: false
        })
    }
    
    onFormChange (event, {name, value}) {
        if (value === '') { value = undefined }
        let form = this.state
        form[name] = value
        this.setState(form)
    }

    render() {
        const { failed } = this.state
        return (
            <Modal open={this.state.open} onClose={this.close} size='small' trigger={<Button onClick={this.open} color='blue'>Sign in</Button>} closeIcon='close'>
                <Header icon='user' content='Sign in' />
                <Modal.Content>
                    { failed ? 
                        <Message
                            error
                            header='Login failed'
                            content='Your login attempt failed, try checking your username and/or password'
                        /> : undefined
                    }
                    <Form>
                        <Form.Field>
                            <Form.Input label='Username: ' name='username' placeholder='Username' onChange={this.onFormChange} required />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='Password: ' name='password' type='password' placeholder='********' onChange={this.onFormChange} required />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='blue' onClick={this.postSignIn}>
                        <Icon name='checkmark' /> Sign in
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}