import React, { Component } from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'

import axios from 'axios'

import Blog from './Blog'
import BlogModal from './BlogModal'

export default class Blogs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            renderMode: props.renderMode || 'featured',
            accentColor: props.accentColor || 'black',
            blogs: []
        }

        this.getProjects = this.getProjects.bind(this)
    }

    componentWillMount() {
        this.getProjects()
    }

    getProjects() {
        axios
			.get('/api/blogs/' + this.state.renderMode)
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

    render() {
        return (
            <div id="projects">
                <Divider hidden/>
                <Container text>
                    <Header color={this.state.accentColor} as='h1'>Featured Blogs
                        <BlogModal accentColor={this.state.accentColor}/>
                    </Header>
                    {this.state.blogs.map((blog) => <Blog key={blog.id} blog={blog}/>)}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
