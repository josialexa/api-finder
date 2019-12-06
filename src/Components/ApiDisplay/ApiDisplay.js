import React, {Component} from 'react'
import CommentDisplay from '../CommentDisplay/CommentDisplay.js'
import './ApiDisplay.css'

export default class ApiDisplay extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        // console.log(this.props)
        return (
            <section className='api-display-container'>
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

                    <CommentDisplay apiID={this.props.api.id} />
                </div>
            </section>
        )
    }
}