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
            filteredApis: this.props.apis,
            selectedCategory: '',
            text: '',
            clearCat: this.props.clearCat
        }
    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.clearCat)
    //     if(this.props.clearCat) this.setState({filteredApis: this.state.apis})

    // }

    openCategory = (category) => {
        let filtered = [...this.state.apis].filter(v => v.category == category)

        this.setState({
            filteredApis: filtered,
            selectedCategory: category
        })
        this.props.setDisplay('search', false)
    }

    handleChange = (e) => {
        const newText = e.target.value
        const rgx = new RegExp(newText, 'i')
        this.state.selectedCategory ?
            this.setState({
                text: newText,
                filteredApis: this.state.apis.filter(v => (rgx.test(v.name) || rgx.test(v.description)) && v.category == this.state.selectedCategory)
            })
        :
            this.setState({
                text: newText,
                filteredApis: this.state.apis.filter(v => rgx.test(v.name) || rgx.test(v.description))
            })
            
            
        console.log(this.state.filteredApis)
    }

    render() {
        return (
            <div id='card-display-container'>
                <div id='search-display'>
                    <input placeholder='Search APIs' value={this.state.text} onChange={this.handleChange} hidden={!this.props.apiFlag}></input>
                </div>
                <div id='card-display'>
                    {this.props.apiFlag ? 
                        this.state.filteredApis.map((v, i) => <ApiCard key={v.id} api={v} click={this.props.setDisplay} />) 
                    : 
                        this.state.categories.map((v, i) => <CategoryCard key={i} category={v} click={this.openCategory} />)
                    }
                </div>
            </div>
        )
    }
}