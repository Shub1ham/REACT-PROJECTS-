import './Navbar.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
const Navbar=()=>{
    const [sticky,setsticky]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false)
        })
    },[])
    return(
        <nav className={`container ${sticky ? 'dark-nav':''}`}>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-200} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-120} duration={500}>About us</Link></li>
                <li><Link to='campus'smooth={true} offset={-200} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-200} duration={500}>Contact us</Link></li>
        
            </ul>
        </nav>

    )
}

export default Navbar;