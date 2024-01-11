import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"
import {width,height} from "../components/dimensions"

export default function Necklaces() {
  return (
    <div className={Styles.bracelets}>
        <Image className = {Styles.card}  src='/necklaces/pic1.webp' height={height} width={width} alt='pic1'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic2.webp' height={height} width={width} alt='pic2'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic3.webp' height={height} width={width} alt='pic3'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic4.webp' height={height} width={width} alt='pic4'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic5.jpg' height={height} width={width} alt='pic5'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic6.webp' height={height} width={width} alt='pic6'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic7.jpg' height={height} width={width} alt='pic7'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic8.webp' height={height} width={width} alt='pic8'></Image>
        <Image className = {Styles.card}  src='/necklaces/pic9.webp' height={height} width={width} alt='pic9'></Image>
</div> 

)
}
