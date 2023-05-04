import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
function Layout() {
  return (
    <div>
        <NavbarComponent />
        <Outlet />
    </div>
  )
}

export default Layout