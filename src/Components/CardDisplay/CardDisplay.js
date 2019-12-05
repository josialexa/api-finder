import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard.js'
import ApiCard from '../ApiCard/ApiCard.js'

export default function CardDisplay(props) {
    return (
        <div>
            {props.items.map(v => props.apiFlag ? <ApiCard click={props.click} api={v} /> : <CategoryCard click={props.click} category={v} />)}
        </div>
    )
}