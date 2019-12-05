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
                <div className='menu-item' onClick={() => props.setDisplay('home')}>
                    <span>Home</span>
                </div>
                <div className='menu-item' onClick={() => props.setDisplay('categories')}>
                    <span>Categories</span>
                </div>
                <div className='menu-item' onClick={() => props.setDisplay('search')}>
                    <span>Search</span>
                </div>
            </div>
        </header>
    )
}