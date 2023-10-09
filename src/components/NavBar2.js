import React from 'react'
import './NavBar2.css'
import { Navbar } from 'reactstrap'

const NavBar2 = () => {

    return (
        <>
        <Navbar>
        <div class="container">
            <p class="tags">
                <span>Menu</span>
                <a href="/" class="tag">Home</a>
                <a href="/" class="tag">Gallery</a>
                <a href="/contact" class="tag active">Contact</a>
                <a href="/about" class="tag">About</a>
                <a href="/blog" class="tag">Testimonial</a>
                <a href="/" class="tag">Localtions</a>

            </p>
            <label>
                <input type="search" class="tag-search" placeholder="Search now" />
            </label>
        </div>
        </Navbar>
        </>
    )
}

export default NavBar2