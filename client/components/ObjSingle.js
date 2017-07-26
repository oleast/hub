
// Import external
import React, { Component } from 'react'
import { Segment, Container, Header, Divider, Icon, Dropdown, Grid } from 'semantic-ui-react'
import axios from 'axios'

export default class ObjSingle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            objName: props.objName || 'notes',
            obj: undefined
        }

        this.getObj = this.getObj.bind(this)
    }

    componentWillMount () {
        this.getObj()
    }

    getObj () {
        const { objName } = this.state
        const { id } = this.props
        const requestUrl = '/api/' + objName + '/single/' + id
        console.log('[ObjSingle](getObj) Getting: ' + requestUrl)
        axios
			.get(requestUrl)
			.then(request => {
                console.log('[ObjSingle](getObjs) Got: ')
                console.log(request.data)
				this.setState({
                    obj: request.data
                })
        	})
			.catch(err => {
				console.log(err)
			})
    }

    render() {

        // Get state and props
        const { objName, obj } = this.state
        const { Obj, accentColor, admin, id } = this.props

        return ( 
            <div id={id}>
                <Divider hidden/>
                <Container text>
                    { obj ?
                        <Obj admin={admin} key={obj._id} obj={obj} getObjs={this.getObj} accentColor={accentColor} /> : undefined
                    }
                </Container>
                <Divider hidden/>
            </div>
        )
    }
}
