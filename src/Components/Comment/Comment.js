import React, {Component} from 'react'
import './Comment.css'

export default class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: props.comment,
            editFlag: false
        }
    }

    handleChange = e => {
        this.setState({text: e.target.value})
    }

    handleClick = () => {
        console.log(this.state.text)
        this.setState({editFlag: !this.state.editFlag})
    }

    handleSubmitEdit = () => {
        this.props.edit(this.props.id, this.state.text)
        this.setState({editFlag: false})
    }

    handleCancelEdit = () => {
        this.setState({editFlag: false})
    }

    render() {
        return (
            <div className='comment-row'>
                {this.state.editFlag ?
                    (<div className='comment-edit'>
                        <input type='text' value={this.state.text} onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmitEdit}>Submit</button>
                        <button onClick={this.handleCancelEdit}>Cancel</button>
                    </div>)
                :    
                    (<div className='comment-content'>
                        <span>{this.props.comment}</span>

                        <div className='comment-button-container'>
                            <span className='comment-button' onClick={() => this.props.delete(this.props.id)}>delete</span>
                            <span className='comment-button' onClick={this.handleClick}>edit</span>
                        </div>
                    </div>)}
            </div>
        )
    }
}