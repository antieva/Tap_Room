import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewBeerForm(props) {
  var imgStyle = {
    width: '830px',
  }
  var inputStyle =  {
  outline: 'none',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '20px',
  width: '300px',
  backgroundColor: '#dddddd',
  margin: '10px 30% 10px 37%',
  textAlign: 'center',
  }
  var button = {
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '320px',
    backgroundColor: '#dddddd',
    height: '45px',
    margin: '30px 30% 0 37%'
  }

  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let remaining = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, id: v4()});
    _name.value = ' ';
    _brewer.value = ' ';
    _description.value = ' ';
    _abv.value = ' ';
    _price.value = ' ';
    _remaining.value = ' ';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer name'
          ref={(input) => {_name = input;}} />
        <input
          style={inputStyle}
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}  />
        <input
          style={inputStyle}
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}  />
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='Abv'
          ref={(input) => {_abv = input;}}  />
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}  />
        <input
          style={inputStyle}
          type='text'
          id='remaining'
          placeholder='Remaing'
          ref={(input) => {_remaining = input;}}  />
        <button
          style={button}
          type='submit'>Add</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
