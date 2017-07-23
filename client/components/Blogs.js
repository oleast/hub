import React, { Component } from 'react'
import { Segment, Container, Header, Divider, Icon, Dropdown, Grid } from 'semantic-ui-react'

import axios from 'axios'

import Blog from './Blog'
import BlogModal from './BlogModal'

const apiMethods = [
    {key:'featured', text: 'Featured', value: 'featured'},
    {key:'all', text: 'All', value: 'all'},
    {key:'latest', text: 'Latest', value: 'latest'}
]

export default class Blogs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'featured',
            accentColor: props.accentColor || undefined,
            apiSelected: props.renderMode || 'featured',
            blogs: []
        }

        this.getBlogs = this.getBlogs.bind(this)
        this.setApiMethod = this.setApiMethod.bind(this)
    }

    componentWillMount() {
        this.getBlogs ()
    }

    getBlogs () {
        axios
			.get('/api/blogs/' + this.state.apiSelected)
			.then(request => {
                console.log(request.data)
				this.setState({
                    blogs: request.data
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
            this.getBlogs ()
        })
    }

    render () {
        const { admin } = this.props
        console.log('Admin: ' + admin)
        return (
            <div id="blogs">
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Row only='computer'>
                            <Grid.Column width={11}>
                                <Header color={this.state.accentColor} as='h1'>Featured Blogs </Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Dropdown
                                    fluid
                                    icon='exchange'
                                    labeled
                                    button
                                    className='icon'
                                    options={apiMethods}
                                    onChange={this.setApiMethod}
                                    value={this.state.apiSelected}
                                />
                            </Grid.Column>
                            { admin ?
                                <Grid.Column width={1} floated='right'>
                                    <BlogModal accentColor={this.state.accentColor} getObj={this.getBlogs} trigger={
                                        <Icon circular name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                                    }/>
                                </Grid.Column> : undefined
                            }
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={16}>
                                <Header color={this.state.accentColor} as='h1'>Featured Blogs </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={6}>
                                <Dropdown
                                    fluid
                                    icon='exchange'
                                    labeled
                                    button
                                    className='icon'
                                    options={apiMethods}
                                    onChange={this.setApiMethod}
                                    value={this.state.apiSelected}
                                />
                            </Grid.Column>
                            <Grid.Column width={10} floated='right' textAlign='right'>
                                <BlogModal accentColor={this.state.accentColor} getObj={this.getBlogs} trigger={
                                    <Icon circular name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                                }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {this.state.blogs.map((blog) => 
                        <Blog
                            admin={admin}
                            key={blog._id}
                            obj={blog}
                            getObj={this.getBlogs}
                            accentColor={this.state.accentColor}
                        />
                    )}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
 