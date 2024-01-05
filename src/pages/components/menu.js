import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Styles from "../../styles/header.module.css"
import { Dancing_Script } from 'next/font/google';


export const font = Dancing_Script ({weight:["400","500"],subsets:["latin"]})

export default function BasicMenu({menuname}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  style={{"font-size":"25px" }  }>
      <Button 
        className= {Styles.contact}
          
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {menuname}
      </Button>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuItem className={Styles.contact_link} onClick={handleClose}><a href='https://wa.me/c/50939950754' style={{textDecoration:"none",color:"black"}}> Whatsapp </a> </MenuItem>
        <MenuItem className={Styles.contact_link} onClick={handleClose} > <a href='mailto:paoloarthaiti@gmail.com' style={{textDecoration:"none",color:"black"}}> Gmail </a> </MenuItem>
        <MenuItem className={Styles.contact_link} onClick={handleClose}>  <a href='https://www.instagram.com/heispaolo/' style={{textDecoration:"none",color:"black"}} >Instagram</a></MenuItem>
       
       
      </Menu>
      
    </div>
  );
}