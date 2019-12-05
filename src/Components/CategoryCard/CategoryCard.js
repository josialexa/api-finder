import React from 'react'

export default function CategoryCard(props) {
    return (
        <div className='category-name'
            onClick={() => props.click(props.category)}>
            <span>{props.category}</span>
        </div>
    )
}