import React from 'react';
import logo from '../images/Carrubas.png'

const Navbar = () => {
  return (
    <nav className="bg-blue">
      <div className="flex content-between items-center container">
        <img src={logo} alt="carrubas" className='logo pt-3 pb-3 mb-5 mt-5' />
        <div >
          <ul className="flex">
            <a href="about"><li>About</li></a>
            <a href="menu"><li>Menu</li></a>
            <a href="gallery"><li>Gallery</li></a>
            <a href="access"><li>Access</li></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
