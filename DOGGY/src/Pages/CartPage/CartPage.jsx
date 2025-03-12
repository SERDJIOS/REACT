import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./CartPage.module.css";
import { removeFromCart, updateQuantity, clearCart } from "../Features/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const onSubmit = async (data) => {
    try {
      // Отправляем заказ на сервер
      await axios.post("http://localhost:3333/order/send", {
        ...data,
        items: cartItems,
      });
      // При успехе — очищаем корзину и переходим на страницу success
      dispatch(clearCart());
      navigate("/cart/success");
    } catch (error) {
      console.error("Order error:", error);
      // Обработка ошибки
    }
  };

  if (cartItems.length === 0) {
    // Если корзина пуста — перенаправляем на страницу "CartEmpty"
    return navigate("/cart/empty");
  }

  return (
    <main className={styles.cart}>
      <h1>Shopping Cart</h1>
      <div className={styles.items}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>{item.price}$</p>
              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  dispatch(updateQuantity({ productId: item.id, quantity: +e.target.value }))
                }
              />
              <button onClick={() => dispatch(removeFromCart({ productId: item.id }))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <p>Total: {totalPrice}$</p>
      </div>

      {/* Форма оформления заказа */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.checkoutForm}>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <p className={styles.error}>Name is required</p>}

        <input
          {...register("phone", { required: true })}
          placeholder="Phone"
        />
        {errors.phone && <p className={styles.error}>Phone is required</p>}

        <input
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p className={styles.error}>Email is required</p>}

        <button type="submit">Order</button>
      </form>
    </main>
  );
}
