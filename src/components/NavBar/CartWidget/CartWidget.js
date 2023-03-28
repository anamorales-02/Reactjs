import React, { useContext, useState } from "react";
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
    <a
      className={`containerCartWidget ${isClicked ? "scale-effect" : ""}`}
      href="/cart"
      onClick={handleClick}
    >
      <img src={CartWidgetImg} alt="Cart Widget" className="shoppingBagLogo" />
      <span className="itemCountSpan">
        {getTotalItemCount() > 0 && getTotalItemCount()}
      </span>
    </a>
  );
}

export default CartWidget;
 