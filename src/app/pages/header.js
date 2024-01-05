import './globals.css'

import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='menu' > 
     
    <Link href = '/' className='menuitem' > Home </Link>  
    <Link href = '/about' className='menuitem' > About</Link>  
     <Link href='' className='menuitem' > Contact</Link> 
  
  </div>
  )
}
