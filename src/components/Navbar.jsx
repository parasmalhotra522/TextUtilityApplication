import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // console.log(props.mode, props.toggleMode);


  const handleChangeColor = (e) => {
    // console.log('selected color code', e.target.value);
    const colorCode = e.target.value;
    props.updateColorCode(colorCode);
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/about'>{props.aboutText}</Link>
          </li>
         
         
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

          
          <div className="color-picker" style={{ fontSize: '2rem', padding:'1.2rem'}}>
            <label htmlFor="colorPicker" style={{ display: 'none' }} >
              <i className='bx bx-palette'></i>
          </label>
            <input type="color"
              onInput={handleChangeColor}
              id="colorPicker" />
      </div>





        <div className="form-check form-switch">
          <input className="form-check-input"
            onChange={props.toggleMode}
          type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">

            Enable Dark Mode
         
      
         
         
          </label>
        </div>




      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title:"Default NavbaR Title",
  aboutText: "Default about Text"
}

