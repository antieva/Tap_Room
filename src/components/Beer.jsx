import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
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
        <p>Remainig: {props.remaining}</p>
      </div>
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
