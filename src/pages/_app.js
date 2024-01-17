import '@/styles/globals.css'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Context from './components/context'
import { useContext, useEffect, useState } from 'react'



export default function App({ Component, pageProps }) {

//  try {console.log(window.screen.width);
//  }
//  catch(e) {console.log(e)}

  return( 
  <Context >
    <Header/>
      <Sidebar/>
           <div style={{display:"flex",flexDirection:"row"}}>
 
      <div   style={{flex:"1",marginLeft:"80px" }}> 
          <Component 
        {...pageProps}
            />
      
      </div>
    </div> 
    <Footer/>
</Context>
  
  )
}
