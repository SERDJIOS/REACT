import {} from "./Total.styles"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Total() {
 const { cartItems } = useContext(CartContext);
 return (
  <div>
    <h3>Total</h3>
      {cartItems.length === 0
            ?
            <p>Cart is empty</p>
            :
            
              cartItems.map((product) => {
                return (<CartCard product={product} key={product.id} />)
                
              }
            )
          }
          <div>
           <p>Price:</p> 
           <p>{}Quantity:</p>
          </div>
  </div>
 )
}