import React, {Component} from 'react'
import './ApiControls.css'

export default class ApiControls extends Component {
    render() {
        return (
            <div className='api-buttons'>
                <button className='api-control' onClick={this.props.button1Fn} >{this.props.button1Str}</button>
                <button className='api-control' onClick={this.props.button2Fn} >{this.props.button2Str}</button>
                <button className='api-control' onClick={this.props.button3Fn} hidden={this.props.hidden} >{this.props.button3Str}</button>
            </div>
        )
    }
}