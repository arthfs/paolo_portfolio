import Image from 'next/image';
import styles from "../styles/Home.module.css";
import About from './components/about';
import Link from 'next/link';


var width = 300 ,height = 300;
export default function Home() {
  return ( 
  <div className={styles.body}>
  
          <div id='about' className={styles.ab}>
              <About/>
          </div>
   
          <div className={styles.bracelets}>
            <Image className = {styles.card}  src='/bracelets/pic1.jpeg' height={height} width={width} alt='pic1'></Image>
            <Image className = {styles.card}  src='/bracelets/pic2.jpeg' height={height} width={width} alt='pic2'></Image>
            <Image className = {styles.card}  src='/bracelets/pic3.jpeg' height={height} width={width} alt='pic3'></Image>
            <Image className = {styles.card}  src='/bracelets/pic4.jpeg' height={height} width={width} alt='pic4'></Image>
            <Image className = {styles.card}  src='/bracelets/pic5.jpeg' height={height} width={width} alt='pic5'></Image>
            <Image className = {styles.card}  src='/bracelets/pic6.jpeg' height={height} width={width} alt='pic6'></Image>
            <Image className = {styles.card}  src='/bracelets/pic7.jpeg' height={height} width={width} alt='pic7'></Image>
            <Image className = {styles.card}  src='/bracelets/pic8.jpeg' height={height} width={width} alt='pic8'></Image>
            <Image className = {styles.card}  src='/bracelets/pic9.jpeg' height={height} width={width} alt='pic9'></Image>
            </div>
           
    </div>
  );
}

