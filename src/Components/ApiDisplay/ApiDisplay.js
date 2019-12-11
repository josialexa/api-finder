import React, {Component} from 'react'
import axios from 'axios'
import ApiForm from '../ApiForm/ApiForm'
import ApiControls from '../ApiControls/ApiControls'
import CommentDisplay from '../CommentDisplay/CommentDisplay.js'
import './ApiDisplay.css'

export default class ApiDisplay extends Component {
    constructor() {
        super()

        this.state = {
            formFlag: false,
            newFlag: false
        }
    }

    edit = () => {
        this.setState({formFlag: true})
    }

    new = () => {
        this.setState({
            formFlag: true,
            newFlag: true
        })
    }

    cancel = () => {
        this.setState({
            formFlag: false,
            newFlag: false
        })
    }

    delete = () => {
        console.log('delete',this.props.api.id)
        axios.delete(`/api/apis/${this.props.api.id}`)
            .then(response => this.props.update(response.data))
            .catch(error => console.log('Delete Api:', error))
    }

    submit = (updated) => {
        this.state.newFlag ?
            axios.post(`/api/apis`, updated)
                .then(response => this.props.update(response.data))
                .catch(error => console.log('New API:', error))
        :
            axios.put(`/api/apis/${this.props.api.id}`, updated)
                .then(response => this.props.update(response.data))
                .catch(error => console.log('Update API:', error))
    }

    render() {
        return (
            <section className='api-display-container'>
                {this.state.formFlag ? 
                    <ApiForm api={this.state.newFlag ? {} : this.props.api} submit={this.submit} cancel={this.cancel} /> 
                : 
                    <ApiInfo api={this.props.api} delete={this.delete} new={this.new} edit={this.edit} />}
                <CommentDisplay apiID={this.props.api.id} />
            </section>
        )
    }
}

class ApiInfo extends Component {
    render() {
        return (
            <div className='api-display'>
                <div>
                    <h1>{this.props.api.name}</h1>
                </div>
                <div>
                    <span>{this.props.api.description}</span>
                </div>
                <div>
                    <a href={this.props.api.link} target='_blank'>{this.props.api.link}</a>
                </div>
                <div className='security-options'>
                    <div>
                        <span className='bold'>Auth:</span><span>{this.props.api.auth ? this.props.api.auth : 'None'}</span>
                    </div>
                    <div>
                        <span className='bold'>HTTPS:</span><span>{this.props.api.https ? 'Yes' : 'Unknown'}</span>
                    </div>
                    <div>
                        <span className='bold'>CORS:</span><span>{this.props.api.cors || this.props.api.cors == 'unknown' ? this.props.api.cors : 'Unknown'}</span>
                    </div>
                </div>
                <ApiControls 
                    button1Fn={this.props.new}
                    button1Str='New'
                    button2Fn={this.props.edit}
                    button2Str='Edit'
                    button3Fn={this.props.delete}
                    button3Str='Delete'
                    hidden={false} />
            </div>
        )
    }
}