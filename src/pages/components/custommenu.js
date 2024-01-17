import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Styles from "../../styles/header.module.css"
import { Dancing_Script } from 'next/font/google';
import BasicMenu from './menu';


export const font = Dancing_Script ({weight:["400","500"],subsets:["latin"]})

export default function CustomMenu({menuname}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div    >
      <div
      
       className={'Styles.contact'}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        
        <img width={40} height ={40} style={{borderRadius:"20px"}} src='/icons/menu-icon.png'></img>
      </div>

      <Menu 
    
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuItem className={Styles.contact_link} onClick={handleClose}><a href='/' style={{textDecoration:"none",color:"black"}}> Home </a> </MenuItem>
        <MenuItem className={Styles.contact_link} onClick={handleClose} > <a href='#./about' style={{textDecoration:"none",color:"black"}}> About </a> </MenuItem>
       <BasicMenu menuname={"Contact"}></BasicMenu>    
       
      </Menu>
      
    </div>
  );
}
//      <MenuItem className={Styles.contact_link} onClick={handleClose}>  <a href='' style={{textDecoration:"none",color:"black"}} >Contact</a></MenuItem>
   