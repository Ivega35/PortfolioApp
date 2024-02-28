import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import '../styles/NavBar.css'


export const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link"  href="#"> <CodeIcon/> Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <PersonIcon/> Sobre mí</a>
            </li>
            <li classname="nav-item">
              <a className="nav-link" href="#"> <CallIcon/> Contacto</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}


