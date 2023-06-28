import React from 'react'
import { Headers as Header } from './Header'
import { Footers as Footer } from './Footer'
import"../style/Layout.css"

const Layout = ({children}) => {
  return (
    <div className='main '>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout