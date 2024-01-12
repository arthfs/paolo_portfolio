import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"
import {width,height} from "../components/dimensions"

export default function Keyholders() {
  return (
    <div className={Styles.bracelets}>
        <Image className = {Styles.card}  src='/keyholders/pic1.jpeg' height={height} width={width} alt='pic1'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic2.jpeg' height={height} width={width} alt='pic2'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic3.jpeg' height={height} width={width} alt='pic3'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic4.jpeg' height={height} width={width} alt='pic4'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic5.jpeg' height={height} width={width} alt='pic5'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic6.jpeg' height={height} width={width} alt='pic6'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic7.jpeg' height={height} width={width} alt='pic7'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic8.jpeg' height={height} width={width} alt='pic8'></Image>
        <Image className = {Styles.card}  src='/keyholders/pic9.jpeg' height={height} width={width} alt='pic9'></Image>
</div> 

)
}
