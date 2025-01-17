function OrderStatus(props) {
    return (
      <div>
        {props.orders.map(item => (
          <p>
            Заказ {item.orderId} {item.status}.
          </p>
        ))}
      </div>
    )
  }
  
  export default OrderStatus