import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import './ItemDetail.css'


const ItemDetail = ({ product }) => {
  return (
    <>
    <div className="detail">
      <article>
        <h1>{product.title}</h1>
        <img src={product.image} className= "imgCard" alt={product.title}/>
        <p>$ {product.price}</p>
        <h2 className="description">{product.description} </h2>
      </article>
    </div>
    <ItemCount stock={product.stock} initial={1} text="Agregar al Carrito" />
    </>
  );
};

export default ItemDetail;