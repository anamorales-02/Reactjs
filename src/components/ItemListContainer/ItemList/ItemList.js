import React from "react";
import Card from "../../Cards/cards";
import FlexWrapper from "../../FlexWrapper/FlexWrapper";


const ItemList = (props) => {
  return (
    <>
    <FlexWrapper rows={true}>
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
      </FlexWrapper>
    </>
  );
};

export default ItemList;
