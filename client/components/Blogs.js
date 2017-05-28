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
        return (
            <div id="blogs">
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Column width={12}>
                            <Header color={this.state.accentColor} as='h1'>Featured Blogs </Header>
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
                            <BlogModal accentColor={this.state.accentColor} getObj={this.getBlogs} trigger={
                                <Icon size='large' name='plus' color={this.state.accentColor} onClick={this.handleOpen}/>
                            }/>
                        </Grid.Column>
                    </Grid>
                    {this.state.blogs.map((blog) => 
                        <Blog
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
 