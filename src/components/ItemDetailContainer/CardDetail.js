import React, { useState } from "react";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./styles.css";

function CardDetail({ prod }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(prod, count);
    setCount(count);
  }

  if (prod.title)
    return (
      <div className="cardDetail">
        <div className="cardDetail_image_detail">
        <h2>{prod.title}</h2>
          <img src={prod.image} alt={prod.title} />
        </div>

          <div>
            <h3>$ {prod.price}</h3>
            <p>{prod.detail}</p>
          </div>
          {count === 0 ? (
            <ItemCount
              onAddToCart={handleAddToCart}
              text="Add to Cart"
              initial={1}
            />
          ) : (
            <Link to="/cart" id="viewCartBtn">Ver carrito</Link>
          )}

          <button onClick={() => removeItem(prod.id)} className="DeleteBtn">Eliminar</button>

      </div>
    );

  return <Loader />;
}

export default CardDetail;