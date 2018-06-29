import React from 'react';
// import reallyAdorablePuppy from '../assets/images/puppy.jpeg';

function NewBeerForm() {
  var imgStyle = {
    width: '830px',
  }
  var inputStyle =  {
  transition: 'width .35s linear',
  outline: 'none',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '20px',
  width: '200px',
  backgroundColor: '#dddddd',
  margin: '10px 60% 10px 20px',
  }
  var button = {
    transition: 'width .35s linear',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '220px',
    backgroundColor: '#dddddd',
    height: '45px',
    margin: '30px 60% 0 20px'
  }

  return (
    <div>
      <form>
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Beer name' />
        <input
          style={inputStyle}
          type='text'
          id='brewer'
          placeholder='Brewer' />
        <input
          style={inputStyle}
          type='text'
          id='description'
          placeholder='Description' />
        <input
          style={inputStyle}
          type='text'
          id='abv'
          placeholder='Abv' />
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price' />
        <input
          style={inputStyle}
          type='text'
          id='remaining'
          placeholder='Remaing' />
        <button
          style={button}
          type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
