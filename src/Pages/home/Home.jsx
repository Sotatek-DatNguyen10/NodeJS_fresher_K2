import React from 'react'
import './Home.css'
import NavbarContainer from './../../components/navbarcontainer/NavbarContainer';
import NavScrollExample from '../../components/react_navbar_boostrapp/Navbarboostrap'
import Search from './../../components/search/Search';
import ProfileTitle from '../../components/ProfileTitle/ProfileTitle';

function Home() {
  return (
    <div className='home'>
      {/* <NavScrollExample/> */}
      <div className='menu' id='post-page'>
        <Search />
        <NavbarContainer />
        <ProfileTitle />
      </div>

      <div className='body'>
        <div style={{ width: "20%" }}>
          <div className='profile' id='post-page' > profile </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className='post' id='post-page'> post </div>
          <div className='upload' id='post-page'> upload </div>
        </div>
        <div style={{ width: "20%" }}>
          <div className='friendrequest' id='post-page'> friendrequest </div>
          <div className='birthday' id='post-page'> birthday </div>
        </div>
      </div>
    </div>
  )
}

export default Home 