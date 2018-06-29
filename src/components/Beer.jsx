import React from "react";

function Beer(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        <p>Brewer: {props.brewer}</p>
        <p>Description: {props.description}</p>
        <p>Abv: {props.abv}</p>
        <p>Price: {props.price}</p>
        <p>Remainig: {props.remaining}</p>
      </div>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  abv: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  remaining: propTypes.string,
};

export default Beer;
