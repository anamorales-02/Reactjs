import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ onAddToCart }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount(count + 1);
  const handleSubstract = () => count > 1 && setCount(count - 1);
  const handleCart = () => onAddToCart(count);

  
  return (
      <div className="container">
        <div className="count">     
          <button className="button" onClick={handleSubstract}>-</button>
          <div>{count}</div>
          <button className="button" onClick={handleAdd}>+</button>
        </div>   
        <div>
          <button className="addToCartBtn" onClick={handleCart} >Agregar al Carrito</button>
        </div>
      </div>  
  )
}

export default ItemCount