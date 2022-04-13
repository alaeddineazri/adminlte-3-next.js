import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'


const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar   />
      <div className="content-wrapper">
        <Breadcrumb />
        <section className="content">
          {children}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Layout