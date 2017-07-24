
// Import external
import React, { Component } from 'react'
import { Item, Image, Icon, Button, Grid, Divider, Label } from 'semantic-ui-react'
import axios from 'axios'

// Import internal
import ProjectModal from './ProjectModal'

export default class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showOptions: false
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.toggleShowOptions = this.toggleShowOptions.bind(this)
        this.feature = this.feature.bind(this)
        this.unFeature = this.unFeature.bind(this)
    }

    deleteItem () {
        const requestUrl = '/api/projects/delete'
        const requestPayload = { id:this.props.obj._id }
        console.log('[Project](deleteItem) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    toggleShowOptions () {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    feature () {
        const requestUrl = '/api/projects/feature'
        const requestPayload = { id:this.props.obj._id, featured: true}
        console.log('[Project](feature) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    unFeature () {
        const requestUrl = '/api/projects/feature'
        const requestPayload = { id:this.props.obj._id, featured: false}
        console.log('[Project](feature) Posting: ' + requestUrl + ' With payload: ')
        //console.log(requestPayload)
        axios.post(requestUrl, requestPayload)
        this.props.getObjs()
    }

    render() {
        const { showOptions } = this.state
        const { obj, admin, accentColor } = this.props

        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={obj.image} />
                    <Item.Content>
                        <Item.Header as='a'>{obj.name}</Item.Header>
                        <Item.Meta>
                            { admin ?
                                <Icon size='large' name='settings' onClick={this.toggleShowOptions}/> : undefined
                            }
                            {obj.source ? <a href={obj.source}><Icon size='large' name='github'/></a> : ''}
                            {obj.url ? <a href={obj.url}>{obj.url.replace('https://', '').replace('http://', '')}</a> : ''}
                        </Item.Meta>
                        <Item.Description>
                            {obj.description}
                        </Item.Description>
                        {obj.tags ? <Item.Extra>{obj.tags.map((tag) => <Label key={tag}>{tag}</Label>) }</Item.Extra> : ''}
                        
                        { admin && showOptions ?
                            <div>
                                <Divider />
                                <Grid columns={3} centered divided>
                                    <Grid.Column>
                                        <Icon size='large' name='remove circle' color='red' onClick={this.deleteItem} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <ProjectModal accentColor={accentColor} getObjs={this.props.getObjs} trigger={
                                            <Icon size='large' name='pencil' color='blue' onClick={this.handleOpen}/>
                                        } />
                                    </Grid.Column>
                                    <Grid.Column>
                                        {obj.featured ?
                                            <Icon size='large' name='star' color='purple' onClick={this.unFeature} /> :
                                            <Icon size='large' name='empty star' color='purple' onClick={this.feature} />
                                        }
                                    </Grid.Column>
                                </Grid>
                            </div>
                        : ''}
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}