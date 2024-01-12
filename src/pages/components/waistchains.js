import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"
import {width,height} from "../components/dimensions"

export default function Waistchains() {
  return (
    <div className={Styles.bracelets}>
        <Image className = {Styles.card}  src='/waistchains/pic1.webp' height={height} width={width} alt='pic1'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic2.jpg' height={height} width={width} alt='pic2'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic3.webp' height={height} width={width} alt='pic3'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic4.webp' height={height} width={width} alt='pic4'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic5.webp' height={height} width={width} alt='pic5'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic6.jpg' height={height} width={width} alt='pic6'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic7.jpg' height={height} width={width} alt='pic7'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic8.jpg' height={height} width={width} alt='pic8'></Image>
        <Image className = {Styles.card}  src='/waistchains/pic9.jpg' height={height} width={width} alt='pic9'></Image>
</div> 

)
}
