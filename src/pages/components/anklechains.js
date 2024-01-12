import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"
import {width,height} from "../components/dimensions"

export default function Anklechains() {
  return (
    <div className={Styles.bracelets}>
        <Image className = {Styles.card}  src='/anklechains/pic1.webp' height={height} width={width} alt='pic1'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic2.webp' height={height} width={width} alt='pic2'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic3.webp' height={height} width={width} alt='pic3'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic4.webp' height={height} width={width} alt='pic4'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic5.jpg' height={height} width={width} alt='pic5'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic6.webp' height={height} width={width} alt='pic6'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic7.webp' height={height} width={width} alt='pic7'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic8.jpg' height={height} width={width} alt='pic8'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic9.jpg' height={height} width={width} alt='pic9'></Image>
    </div>
  )
}
