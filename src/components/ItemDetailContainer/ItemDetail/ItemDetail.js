import React from "react";
import ItemCount from "../../ItemCount/ItemCount";


const ItemDetail = ({ product }) => {
  return (
    <div>
      <article>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title}/>
        <p>$ {product.price}</p>
        <h2>{product.description} </h2>
      </article>
      <ItemCount stock={product.stock} initial={1} text="Agregar al Carrito" />
    </div>
  );
};

export default ItemDetail;