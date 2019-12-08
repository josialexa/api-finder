//this needs to get comments for a specific api in the list and display them
//also needs a form for adding new comments
//also need to be able to delete and edit comments

import React, {Component} from 'react'
import Comment from '../Comment/Comment.js'
import axios from 'axios'
import './CommentDisplay.css'

export default class CommentDisplay extends Component {
    constructor() {
        super()

        this.state = {
            comments: [],
            text: '',
        }
    }

    delete = id => {
        axios.delete(`/api/comments/${id}`)
            .then(response => this.setState({comments: response.data}))
            .catch(error => console.log('Comment delete:', error))
    }

    edit = (id, text) => {
        axios.put(`/api/comments/${id}`, {text: text})
            .then(response => this.setState({comments: response.data}))
            .catch(error => console.log('Comment edit:', error))
    }

    new = () => {
        let newComment = {
            text: this.state.text,
            apiID: this.props.apiID,
        }

        this.setState({text: ''})

        axios.post('/api/comments', newComment)
            .then(response => this.setState({comments: response.data}))
            .catch(error => console.log('Comment new:', error))
    }

    handleChange = e => {
        this.setState({text: e.target.value})
    }

    componentDidMount() {
        axios.get('/api/comments')
            .then(response => this.setState({comments: response.data}))
            .catch(error => console.log('Comment load:', error))
    }

    render() {
        let filteredComments = this.state.comments.filter(v => v.apiID == this.props.apiID)
        return (
            <section id='comments'>
                <div>
                    {filteredComments.map((v, i) => (<Comment key={v.id} 
                        comment={v.text} 
                        id={v.id} 
                        delete={this.delete} 
                        edit={this.edit} />))}
                </div>
                <div id='new-comment'>
                    <input value={this.state.text} onChange={this.handleChange} placeholder='Add a comment...' ></input>
                        <button onClick={this.new}>Post</button>
                    
                </div>
            </section>
        )
    }
}