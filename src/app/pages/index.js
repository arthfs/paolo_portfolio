import Footer from './footer'
import Header from './header';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
        <div> 
         
   
      
      <div className='drawings' >
      <Image className = 'picture' src='/pic1.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture' src='/pic2.jpeg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic3.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic4.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic5.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic6.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic7.jpg' height={300} width={400} alt='pic1'></Image>
      <Image className = 'picture'  src='/pic8.jpg' height={300} width={400} alt='pic1'></Image>

      
      </div>

    </div>
  )
}
