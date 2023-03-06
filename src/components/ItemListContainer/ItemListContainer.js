 import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../products/products";
import { useParams } from "react-router-dom";
import "./styles.scss";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {
    if (id === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
      });
    } else {
      getProductsByCategory(id).then((data) => {
        setProductsList(data);
      });
    }
  }, [id]);

  return (
    <div className="container">
      <h1>Articulos destacados:</h1>
      <ItemList productsList={productsList} />
      <hr />
    </div>
  );
};

export default ItemListContainer;
