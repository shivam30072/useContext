import { useContext } from "react"
import { cartContext } from "./Context"

const Singlecolor = ({ color }) => {
 
  const{cart, setCart} = useContext(cartContext)

  return (
    <div className='colors'>
      <div className='clr' style = {{height: '300px', width: '300px', backgroundColor: `${color.colour}`}}>{color.colour}
      </div>
      <div className='details'>
        <div className='name'>name: {color.name}</div>
        <div className='price'>price: {color.price}</div>
        {cart.includes(color) ? (
        <button style={{cursor: 'pointer'}} onClick={() =>{
          setCart(cart.filter((c) => c.id !== color.id))
        }}>Remove from Cart
        </button>
        ) : (
        <button style={{cursor: 'pointer'}} onClick={() =>{
          setCart([...cart, color])
        }}>Add to Cart
        </button>
      )}

      </div>
    
    </div>
  )
}

export default Singlecolor