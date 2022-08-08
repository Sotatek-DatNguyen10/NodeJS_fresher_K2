import React from 'react'
import { Link } from 'react-router-dom';
import icon_home from './../../images/Home_icon.png'

function ProfileTitle() {
  return (
    <div>
       <Link to={'/profile'} style={{display:'flex'}}> 
        <img src={icon_home} alt='user imgaes'/>
        <h1> User Name</h1>
      </Link>
    </div>
  )
}

export default ProfileTitle 