import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"
import {width,height} from "../components/dimensions"

export default function Anklechains() {
  return (
    <div className={Styles.bracelets}>
        <Image className = {Styles.card}  src='/anklechains/pic1.jpeg' height={height} width={width} alt='pic1'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic2.jpeg' height={height} width={width} alt='pic2'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic3.jpeg' height={height} width={width} alt='pic3'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic4.jpeg' height={height} width={width} alt='pic4'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic5.jpeg' height={height} width={width} alt='pic5'></Image>
        <Image className = {Styles.card}  src='/anklechains/pic6.jpeg' height={height} width={width} alt='pic6'></Image>
    </div>
  )
}
