import React from 'react';
import PropTypes from "prop-types";

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
  name: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string,
};

export default Beer;
