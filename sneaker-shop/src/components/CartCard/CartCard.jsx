import deleteIcon from '../../assets/delete.svg'
import { useContext } from 'react';
import { Card, Image, Title, Actions, Price, Amount, AddButton } from './CartCard.styles';
import { CartContext } from '../../context/CartContext';


export default function CartCard({ product }) {
    const { image, name, price, id } = product;
    const { deleteToCart } = useContext(CartContext);
    console.log(product);
    console.log(image, name, price);



    return (
        <Card>
            <Image src={image} alt={name} />
            <Title>{name}</Title>
            <Actions>
                <div>
                    <Price>PRICE:</Price>
                    <Amount>{price}</Amount>
                </div>
                <AddButton onClick={() => deleteToCart(id)}><img src={deleteIcon} alt="deleteIcon" /></AddButton>
            </Actions>
        </Card>
    )
}