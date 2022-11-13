import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import './styles.css'
import { useContext } from 'react'
import { cartContext } from './Context'

const Nav = () => {
  const{cart, setCart} = useContext(cartContext)

  return (
    <>
    <div className='navbar'>
        <p className='heading'>React-Context</p>
        <div className='inside-nav'>
             <div className='home'>
                <Link to={"/"}> Home </Link>
             </div>
             <div className='cart'>
                 <Link to={"/cart"}>Cart({cart.length})</Link> 
             </div>
        </div>

    </div>
    </>
  )
}

export default Nav