import React from 'react'
import logo from '../../logo.png'
import './Header.css'

export default function Header(props) {
    return (
        <header>
            <div className='image-container'>
                <img src={logo} alt='API Finder Logo' />
            </div>
            <div className='menu-items'>
                <div className='menu-item' onClick={() => props.setDisplay('home', false)}>
                    <span>Home</span>
                </div>
                <div className='menu-item' onClick={() => props.setDisplay('categories', false)}>
                    <span>Categories</span>
                </div>
                <div className='menu-item' onClick={() => props.setDisplay('search', true)}>
                    <span>Search</span>
                </div>
            </div>
        </header>
    )
}