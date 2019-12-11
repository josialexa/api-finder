import React, {Component} from 'react'
import axios from 'axios'
import ApiControls from '../ApiControls/ApiControls'
import './ApiForm.css'

export default class ApiForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.api.name || '',
            description: this.props.api.description || '',
            link: this.props.api.link || '',
            auth: this.props.api.auth || '',
            https: this.props.api.https || '',
            cors: this.props.api.cors || ''
        }
    }

    handleChange = (e, field) => {
        const updated = {}
        updated[field] = e.target.value

        this.setState(updated)
    }

    submit = () => {
        let api = {...this.state}
        this.props.submit(api)
    }

    render() {
        return (
            <div className='api-form'>
                <div>
                    <span className='bold'>API Name: </span>
                    <input placeholder='API Name' value={this.state.name} disabled={this.props.api.name ? true : false} onChange={e => this.handleChange(e, 'name')}></input>
                </div>
                <div>
                    <span className='bold'>Description: </span>
                    <input value={this.state.description} onChange={e => this.handleChange(e, 'description')}></input>
                </div>
                <div>
                    <span className='bold'>Link: </span>
                    <input value={this.state.link} onChange={e => this.handleChange(e, 'link')} placeholder='Link'></input>
                </div>
                <div className='security-options'>
                    <div>
                        <span className='bold'>Auth:</span>
                        <input value={this.state.auth} onChange={e => this.handleChange(e, 'auth')} placeholder='Auth type'></input>
                    </div>
                    <div>
                        <span className='bold'>HTTPS:</span>
                        <input value={this.state.https} onChange={e => this.handleChange(e, 'https')} placeholder='HTTPS Supported?'></input>
                    </div>
                    <div>
                        <span className='bold'>CORS:</span>
                        <input value={this.state.cors} onChange={e => this.handleChange(e, 'cors')} placeholder='CORS Supported?'></input>
                    </div>
                </div>
                <ApiControls 
                    button1Fn={this.submit}
                    button1Str='Submit'
                    button2Fn={this.props.cancel}
                    button2Str='Cancel'
                    hidden={true} />
            </div>
        )
    }
}