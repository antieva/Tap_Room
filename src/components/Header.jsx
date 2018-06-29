import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle = {
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#5b5b59',
    height: '50px',
    paddingBottom: '30px'
  }

  var linkStyle = {
    margin: '0px 30px 0 30px',
    fontSize: '20px',
    color: 'grey'
  }
  return (
    <div>
      <Link style={linkStyle} to="/">Home</Link>  <Link style={linkStyle} to="/newbeer">Add Beer</Link>
      <h1 style={headerStyle}>Tap Room</h1>
    </div>
  );
}

export default Header;
