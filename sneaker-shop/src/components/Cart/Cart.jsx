import { useContext } from "react"
import CartCard from "../CartCard/CartCard"
import { CartContext } from "../../context/CartContext"

export default function Cart() {
  const {cartItems} = useContext(CartContext);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', gap:"64px"}}>
      {cartItems.length === 0
        ?
        <p>Cart is empty</p>
        :
        (
          cartItems.map((product) => {
            return (<CartCard product={product} key={product.id} />)
            
          })
        )
      }
    </div>
  )
}