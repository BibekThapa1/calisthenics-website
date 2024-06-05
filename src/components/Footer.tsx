import React from 'react'
import logo from "../images/logo.png"
import "../App.css"

const Footer = () => {
  return (
    <>
         <div className="footer">
        <div className="upper-footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="links">
            <li>Skills</li>
            <li>Benefits</li>
            <li>Hire</li>
            <li></li>
          </ul>
        </div>
        <p>
          <span>&copy;Copyright rights reserved.</span>
          <span>Created by Bibek</span>
        </p>
      </div>
    </>
  )
}

export default Footer