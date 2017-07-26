
// Import external
import React, { Component } from 'react'
import { Segment, Container, Header, Divider, Icon, Dropdown, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Declare methods for API get requests
const apiMethods = [
    {key:'featured', text: 'Featured', value: 'featured'},
    {key:'all', text: 'All', value: 'all'},
    {key:'latest', text: 'Latest', value: 'latest'}
]

export default class ObjContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            objName: props.objName || 'notes',
            renderMode: props.renderMode || 'featured',
            accentColor: props.accentColor || undefined,
            apiSelected: props.renderMode || 'featured',
            objs: []
        }

        this.getObjs = this.getObjs.bind(this)
        this.setApiMethod = this.setApiMethod.bind(this)
    }

    componentWillMount () {
        this.getObjs()
    }

    getObjs () {
        const requestUrl = '/api/' + this.state.objName + '/' + this.state.apiSelected
        console.log('[ObjContainer](getObjs) Getting: ' + requestUrl)
        axios
			.get(requestUrl)
			.then(request => {
                console.log('[ObjContainer](getObjs) Got: ')
                console.log(request.data)
				this.setState({
                    objs: request.data
                })
        	})
			.catch(err => {
				console.log(err)
			})
    }

    setApiMethod (event, { value }) {
        console.log('[ObjContainer](setApiMethod) Selecting: ' + value)
        this.setState({
            apiSelected: value
        }, () => {
            this.getObjs()
        })
    }

    render() {

        // Get state and props
        const { objName, renderMode, apiSelected, accentColor, objs } = this.state
        const { ObjModal, Obj, admin } = this.props

        return (
            <div id={objName}>
                { this.props.children }
                <Divider hidden/>
                <Container text>
                    <Grid>
                        <Grid.Row only='computer'>
                            <Grid.Column width={11}>
                                <Header color={accentColor} as='h1'><Link to={'/' + objName}>{ objName.capitalizeOnlyFirstLetter() }</Link></Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Dropdown fluid icon='exchange' labeled button className='icon' options={apiMethods}
                                            onChange={this.setApiMethod} value={apiSelected} />
                            </Grid.Column>
                            <Grid.Column width={1} floated='left'>
                                { admin ?
                                    <ObjModal accentColor={accentColor} getObjs={this.getObjs} trigger={
                                        <Icon circular name='plus' color={accentColor} onClick={this.handleOpen}/>
                                    }/> : undefined
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={16}>
                                <Header color={accentColor} as='h1'>{ objName.capitalizeOnlyFirstLetter() }</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile tablet'>
                            <Grid.Column width={6}>
                                <Dropdown fluid icon='exchange' labeled button className='icon' options={apiMethods}
                                            onChange={this.setApiMethod} value={apiSelected} />
                            </Grid.Column>
                            <Grid.Column width={10} floated='left' textAlign='right'>
                                { admin ?
                                    <ObjModal accentColor={accentColor} getObjs={this.getObjs} trigger={
                                        <Icon circular name='plus' color={accentColor} onClick={this.handleOpen}/>
                                    }/> : undefined
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {this.state.objs.map((obj) => 
                        <Obj
                            admin={admin}
                            key={obj._id}
                            obj={obj}
                            getObjs={this.getObjs}
                            accentColor={accentColor}
                        />
                    )}
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
