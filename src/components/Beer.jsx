import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  function handleChangRemainings(event) {
   event.preventDefault();
   props.onBeerSelection(props.beerId);
 }
  return (
    <div className='color-toggle'>
      <style jsx global>{`
        .color-toggle {
          background-color: inherit;
        }
        .color-toggle:hover {
          background-color: orange;
          border: none;
          border-radius: 50px;
          padding: 10px 0 0 30px;
        }
      `}</style>
      <h3>{props.name}</h3>
      <div>
        <p>Brewer: {props.brewer}</p>
        <p>Description: {props.description}</p>
        <p>Abv: {props.abv}</p>
        <p>Price: ${props.price}</p>
        <p>Remainig: {props.remaining} <button type='button' onClick={handleChangRemainings}>Sell pint</button></p>
      </div>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string,
  onBeerSelection: PropTypes.func,
  beerId:  PropTypes.string.isRequired
  //onSellingPint: PropTypes.func.isRequired
};

export default Beer;
