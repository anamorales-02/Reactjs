//contador con botones de incremento y decremento
import React, { useState } from "react";

const ItemCount = ({ stock, initial, text }) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div>
      <h2>Compra</h2>
      <div>
        <button onClick={handleSubstract}> - </button>
        <p id="counter">{count}</p>
        <button onClick={handleAdd}> + </button>
      </div>
      <button>{text}</button>
    </div>
  );
};

export default ItemCount;