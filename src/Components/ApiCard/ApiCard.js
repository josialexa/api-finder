import React from 'react'

export default function ApiCard(props) {
    return (
        <div className='api-card'>
            <span onClick={() => props.click(props.api.id)}>{props.api.name}</span>
        </div>
    )
}