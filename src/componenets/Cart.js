import Singlecolor from './Singlecolor'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { cartContext } from './Context'

const Cart = () => {
  const{cart} = useContext(cartContext)
  const [total, setTotal] = useState();

  useEffect(() => {
     setTotal(cart.reduce((tot, curr) =>  tot + Number(curr.price),0))
  }, [cart])

  return (
    <div className='cart-component'>
     <h2>My Cart</h2>
     {cart.length == 0 && <h2>Add something to Cart!</h2>}
      {cart.length > 0 && <h3>Total: Rs.{total}/-</h3>}
     <div className='container'>{
      cart.map((color) =>(
        <Singlecolor color = {color} key = {color.id}/>
      ))
     }</div>
    </div>
  )
}

export default Cart