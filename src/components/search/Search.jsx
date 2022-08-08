import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon_home from './../../images/Home_icon.png'

function Search() {
  return (
    <div style={{display:"flex", paddingLeft:"7%"}}>
      <Link style={{paddingRight:"3%"}} to={'/home'}> <img src={icon_home} alt='home-icon'/> </Link>
        <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </div>
  )
}

export default Search 