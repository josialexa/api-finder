import React from 'react'
import './ApiCard.css'

export default function ApiCard(props) {
    return (
        <div className='api-card' onClick={() => props.click(props.api.id)}>
            <div>
                <span>{props.api.name}</span>
            </div>
            <div className='api-description'>
                <span>{props.api.description}</span>
            </div>
        </div>
    )
}