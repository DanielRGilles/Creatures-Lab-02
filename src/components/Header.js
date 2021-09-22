import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
             <header className='header-class'>
                 Amazing creatures of the World
                 <nav className='nav-link'><a href='/'>Link to Home</a> <a  href='/Gallery'>Link to Gallery</a></nav>
            </header>   
            </>
        )
    }
}
