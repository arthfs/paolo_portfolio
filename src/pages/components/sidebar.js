import React from 'react'
import Styles from "../../styles/sidebar.module.css"
import { useContext } from 'react'
import {context} from './context'






export default function Sidebar() {
  const {info,changeinfo} = useContext(context);
  return (
        
    <div className={Styles.sidebar}>
    <div >
         <button className={Styles.link} onClick={()=>{
        
       changeinfo("/")
        console.log(info);
    
               
  }

         } >Bracelets</button>
    </div>

    <div >
    <button className={Styles.link} onClick={()=>{
        
      changeinfo( "/anklechains")
        console.log(info);
    
               
  }

         } >Anklechains</button>
    </div>

    <div >
    <button className={Styles.link} onClick={()=>{
        
     changeinfo( "/waistchains")
        console.log(info);
    
               
  }

         } >Waistchains</button>
    </div>

    <div >
    <button className={Styles.link} onClick={()=>{
        
     changeinfo( "/necklaces")
        console.log(info);
    
               
  }

         } >Necklaces</button>
    </div>


  
    </div>
  )
}

/*

  <div >
    <button className={Styles.link} onClick={()=>{
        
     changeinfo( "/keyholders")
        console.log(info);
    
               
  }

         } >Key holders</button>
    </div>

*/