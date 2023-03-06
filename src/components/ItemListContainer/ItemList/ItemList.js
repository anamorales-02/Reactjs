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
            image={product.image}
            price={product.price}
            detail={product.detail}
          />
        );
      })}
    </>
  );
};

export default ItemList;
