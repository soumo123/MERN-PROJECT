import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { UserContext } from '../App'

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext)

  const RenderMenu = () => {

    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/registration">Registration</NavLink>
          </li>

        </>
      )
    }
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink class="navbar-brand" to="#">
            <img src={logo} height="200px" width="130px" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <RenderMenu />
              <li className="nav-item">
                <NavLink className="nav-link active" to="/check">Check out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
