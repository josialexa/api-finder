import React from 'react'
import './ApiCard.css'

export default function ApiCard(props) {
    return (
        <div className='api-card' onClick={() => props.click('info', props.api)}>
            <div>
                <span>{props.api.name}</span>
            </div>
            <div className='api-description'>
                <span>{props.api.description}</span>
            </div>
        </div>
    )
}