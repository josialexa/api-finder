import React from 'react'
import './CategoryCard.css'

export default function CategoryCard(props) {
    return (
        <div className='category-card'
            onClick={() => props.click(props.category)}>
            <span>{props.category}</span>
        </div>
    )
}