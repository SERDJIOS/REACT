function ShoppingList({items}) {
    if (items.length === 0) {
    return 
    <p>Shopping list is empty</p>
       
    
} else {
    return (
        <ul>
        {items.map((item) => <li>{item}</li>)}
    </ul>
    )
}
}


export default ShoppingList