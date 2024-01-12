import Link from 'next/link'
import React from 'react'
import styles from "../../styles/header.module.css"
import BasicMenu from "../components/menu" ;


export default function Header() {
    

  return (
    <div className={styles.menu} > 
  
    <Link href = '/' className={styles.menuitem} > Home </Link>  
    <Link href = '../#about' className={styles.menuitem} > About</Link>  
   
    <BasicMenu menuname='contact'> </BasicMenu> 
    <div className={styles.menu2} >arthur</div>
    <div>
      
    {
      
       
        
        
      
   
    }  
    </div>    
   
  </div>
  )
}
