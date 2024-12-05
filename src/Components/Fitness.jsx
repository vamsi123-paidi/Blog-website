import React from 'react'
import Logo from '../common/logo'
import { NavbarCollapse } from 'react-bootstrap'
import NavbarComp from '../common/NavbarComp'

const Fitness = () => {
  return (
    <>
      <div className="navbar-container">
        <Logo />
        <NavbarComp />
      </div>
      <h1>Fitness</h1>
    </>

  )
}

export default Fitness