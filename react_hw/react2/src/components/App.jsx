import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

function App() {
  const myName = "Serjio"
  const shoppingList= []
  const orders = [
    { orderId: 1, status: 'в пути' },
    { orderId: 2, status: 'обработан' },
    { orderId: 3, status: 'в пути' },
    { orderId: 4, status: 'обработан' },
    { orderId: 5, status: 'в пути' },
    { orderId: 6, status: 'доставлен' },
  ]
  
  return (
    <>
    <Greeting name={myName} />
    <ShoppingList items={shoppingList} />
    <OrderStatus orders={orders} />
    </>
  ) 
}

export default App
