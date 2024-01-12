import Image from 'next/image';
import styles from "../styles/Home.module.css";
import About from './components/about';
import Page from './components/content';





import { useContext, useEffect } from 'react';
import {context} from "./components/context"
import { useState } from 'react';
export default function Home() {
const {info} = useContext(context);



  return ( 
   
      
      <div style={{overflowX:"hidden"}}>
          <div className={styles.body}>
      
              <div id='about' className={styles.ab}>
                      <About/>
                      
              </div>
         
              <Page info ={info}></Page>
        </div>
  
    </div>  
  );
}

