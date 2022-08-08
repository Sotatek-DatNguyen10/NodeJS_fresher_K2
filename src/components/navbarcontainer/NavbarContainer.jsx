import React from 'react'
import icon_home from './../../images/Fill 1.png';
import icon_watch from './../../images/Play.png';
import icon_marketplace from './../../images/Buy.png';
import icon_groups from './../../images/groups.png'
import NavbarComp from './../navbar/Navbar';

const NAVBAR_DATA = [{
  icon: icon_home,
  title: "Homepage",
  path: "home"
}, {
  icon: icon_watch,
  title: "Watch",
  path: "watch"
}, {
  icon: icon_marketplace,
  title: "Marketplace",
  path: 'marketplace'
}, {
  icon: icon_groups,
  title: "Groups",
  path: 'groups'
}
]

function NavbarContainer() {

  return (
    <div style={{display:"flex"}}>
      {
        NAVBAR_DATA.map(e => <NavbarComp navitem={e}/>) 
      }
    </div>
  )
}

export default NavbarContainer