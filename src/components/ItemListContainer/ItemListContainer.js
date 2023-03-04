import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../products/products";
import { useParams } from "react-router-dom";
import "./styles.scss";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
      });
    } else {
      getProductsByCategory(categoryID).then((data) => {
        setProductsList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Articulos destacados:</h1>
      <ItemList productsList={productsList} />
      <hr />
    </div>
  );
};

export default ItemListContainer;
