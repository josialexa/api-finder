import React, {Component} from 'react'

export default class ApiControls extends Component {
    render() {
        return (
            <div className='api-buttons'>
                <button onClick={() => this.props.edit(this.props.id)}>Edit</button>
                <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}