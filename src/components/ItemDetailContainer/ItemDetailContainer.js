import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './styles.css';
import { getUnProd } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";


function ItemDetailContainer(props) {
  const [prod, setProd] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  console.log("Item id", itemID );
  useEffect(() => {
    getUnProd(itemID)
      .then((data) => {
        setProd(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);

  return (
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <CardDetail prod={prod} />
      )}
    </FlexWrapper>
  );
}



export default ItemDetailContainer