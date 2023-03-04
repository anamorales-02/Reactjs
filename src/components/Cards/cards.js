import React from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

const Button = (props) => {
  return <button>{props.children}</button>;
};

const Card = (props) => {
  return (
    <article>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <p>
          {props.offer ? <p></p> : <></>}$ {props.price}
        </p>
      </div>
      <Link to={`/item/${props.id}`}>
        <Button>Ver +</Button>
      </Link>
    </article>
  );
};

export default Card;
