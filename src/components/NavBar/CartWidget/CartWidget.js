import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../Context/cartContext";
import CartWidgetImg from "../../../products/logo.png";
import "./cartWidget.css"

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Link to="/cart"
      className={`containerCartWidget ${isClicked ? "scale-effect" : ""}`}
      onClick={handleClick}
    >
      <img src={CartWidgetImg} alt="Cart Widget" className="shoppingBagLogo" />
      <span className="itemCountSpan">
        {getTotalItemCount() > 0 && getTotalItemCount()}
      </span>
    </Link> 
  );
}

export default CartWidget;
 