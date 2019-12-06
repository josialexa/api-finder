import React, {Component} from 'react'
import axios from 'axios'
import CategoryCard from '../CategoryCard/CategoryCard.js'
import ApiCard from '../ApiCard/ApiCard.js'
import './CardDisplay.css'

export default class CardDisplay extends Component {
    constructor() {
        super()

        this.state = {
            apis: [],
            categories: [],
            filteredApis: []
        }
    }

    componentDidMount() {
        axios.get('/api/apis')
            .then(response => {
                this.setState({
                        apis: response.data,
                        categories: Array.from(new Set(response.data.map(v => v.category))),
                        filteredApis: response.data
                    })
            })
    }

    openCategory = (category) => {
        let filtered = [...this.state.apis].filter(v => v.category == category)

        this.setState({filteredApis: filtered})
        this.props.setDisplay('search')
    }

    render() {
        return (
            <div id='card-display'>
                {this.props.apiFlag ? 
                    this.state.filteredApis.map((v, i) => <ApiCard key={v.id} api={v} click={this.props.setDisplay} />) 
                : 
                    this.state.categories.map((v, i) => <CategoryCard key={i} category={v} click={this.openCategory} />)
                }
            </div>
        )
    }
}