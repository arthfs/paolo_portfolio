import Image from 'next/image';
import styles from "../styles/Home.module.css";
import About from './components/about';
import Page from './components/content';





import { useContext } from 'react';
import {context} from "./components/context"
export default function Home() {
const {info} = useContext(context);


  return ( 
   
      
      <div>
          <div className={styles.body}>
      
              <div id='about' className={styles.ab}>
                      <About/>
                      
              </div>
              <Page info ={info}></Page>
        </div>
  
    </div>  
  );
}

