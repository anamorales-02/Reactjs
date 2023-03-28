import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";
import "./styles.scss";
import { getProds, getProdsByCategory } from "../../services/firebase";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    setProductsList([]);
    if (categoryID === undefined) {
      getProds().then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    } else {
      getProdsByCategory(categoryID).then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Productos</h1>
      {isLoading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
}

export default ItemListContainer; 