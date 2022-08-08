import React from 'react'

function NavbarComp(props) {
  return (
    <div style={{display:"flex"}}>
      <img src={props.navitem.icon}></img>
      <p>{props.navitem.title}</p>
    </div>
  )
}

export default NavbarComp