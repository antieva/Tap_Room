import React from 'react';
// import reallyAdorablePuppy from '../assets/images/puppy.jpeg';

function NewBeerForm() {
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
  margin: '10px 60% 10px 20px',
  textAlign: 'center'
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
