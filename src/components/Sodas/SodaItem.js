import React from "react";
import ProductItem from "../UI/ProductItem";
import classes from "./SodaItem.module.css";

const SodaItem = (props) => {
  return (
    <ProductItem>
      <a className={classes.productBox}>
        <img src={props.image} alt={props.description}></img>
        <div className={classes.details}>
          <h2>{props.name}</h2>
          <p>{props.description} and a lot of random text that describes this drink.</p>
        </div>
        <button>Add to Cart</button>
      </a>
    </ProductItem>
  );
};

export default SodaItem;
