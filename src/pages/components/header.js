import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/header.module.css"
import BasicMenu from "../components/menu" ;
import CustomMenu from '../components/custommenu';

export default function Header() {
  const [width,setwidth] = useState(0)
  const  update_width = ()=>{setwidth(window.innerWidth)}
  
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      update_width()
      console.log(window.innerWidth)
    })
  },)
  
  return (   
   
    <div className={styles.menu} > 
  {
  parseFloat(width)>500 ?
  <>
    <Link href = '/' className={styles.menuitem} > Home </Link>  
    <Link href = '../#about' className={styles.menuitem} > About</Link>  
    <BasicMenu menuname='contact'> </BasicMenu> 
  </> :  <div className={styles.menu2}> <CustomMenu menuname={'menu'}> </CustomMenu> </div>
 
}
    </div>    
    
    
    
      )
}
