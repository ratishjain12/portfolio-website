import React from 'react'
import { motion } from "framer-motion"
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <motion.div className='nav-bar sticky'>
            <div >
                <Link to='/' className='title'>Developedbyrj</Link>
            </div>
            <div >
                <ul className='nav-links'>
                    <Link className='item' to="/"><li >Home</li></Link>
                    <Link className='item' to="/projects"><li >Projects</li></Link>
                    <Link className='item' to="/blogs"><li >Blogs</li></Link>
                    <Link className='item' to="/resume"><li >Resume</li></Link>
                    <Link className='item' to="/contact"><li >Let's Work</li></Link>
                </ul>

            </div>

        </motion.div>
    )
}

export default Header