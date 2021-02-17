import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/download.png'
export const Navbar = () => {
    return (
        <div className ='navbox'>
            <div className ='leftside'></div>
              <img src={logo} alt=""/>
            <div className ='righttside'>
           <link to='/signup' className='navlinks'>SIGN UP</link>
           <link to='/login' className='navlinks'>LOGIN</link>
           </div>
        </div>
    )
}
