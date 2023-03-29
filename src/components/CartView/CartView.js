import React, { useContext } from "react";
import "./CartView.css";
import UserForm from "../UserForm/UserForm";
import { cartContext } from "../../Context/cartContext";

function CartView() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);

  if (cart.length === 0) {
    return <h2>Tu carrito esta vacío! Explora nuestra tienda.</h2>;
  }

  return (
    <>
      {cart.map((prod) => (
        <div key={prod.id} className="containerProduct">
          <h2>{prod.title}</h2>
          <h4>${prod.price}</h4>
          <h4>{prod.count}</h4>
          <h4>Precio Total: ${prod.price * prod.count}</h4>
          <button onClick={() => removeItem(prod.id)} className="DeleteBtnS">
            Eliminar
          </button>
        </div>
      ))}

      <UserForm cart={cart} getTotalPrice={getTotalPrice} />
    </>
  );
}

export default CartView;