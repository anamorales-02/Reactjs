import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./cards.scss";
import Button from "../Button/button";

function CardComponent(props) {
  const [isExpired, setIsExpired] = useState(props.expired);

  const cardStyles = {
    margin: "10px 15px",
    minHeight: "420px",
    width: "280px",
    height: "100%",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    backgroundColor: isExpired ? "#f6f6f6" : "#fff",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  };

  const imgStyle = {
    filter: isExpired ? "grayscale(100%) blur(1px)" : "none",
  };

  function handleCardClick() {
    setIsExpired(!isExpired);
  }

  return (
    <div onClick={handleCardClick} className="card" style={cardStyles}>
      <div className="card-img">
        <img style={imgStyle} src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
      </div>
      <Link to={`/prod/${props.id}`}>
      <Button>Agregar al Carrito</Button>
    </Link>
    </div >
);
}

export default CardComponent;
