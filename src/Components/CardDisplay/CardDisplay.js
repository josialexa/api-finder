import React, {Component} from 'react'
import CategoryCard from '../CategoryCard/CategoryCard.js'
import ApiCard from '../ApiCard/ApiCard.js'
import './CardDisplay.css'

export default class CardDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apis: this.props.apis,
            categories: Array.from(new Set(this.props.apis.map(v => v.category))),
            filteredApis: this.props.apis
        }
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