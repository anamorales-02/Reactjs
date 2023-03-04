import React from "react";
import Card from "../../Cards/cards";

const ItemList = (props) => {
  return (
    <>
      {props.productsList.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
            detail={product.detail}
          />
        );
      })}
    </>
  );
};

export default ItemList;
