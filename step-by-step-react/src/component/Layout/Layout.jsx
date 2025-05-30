import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}
