import styles from "./scrollCard.module.css"

import { useState, useRef, useEffect } from "react"
import Card from "../card/card"


export default function ScrollCard(props){

    const scrollRef = useRef(null)

    const[scrollCardL, setScrollCardL] = useState(true)
    const[scrollCardR, setScrollCardR] = useState(true)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current
            const isAtStart = scrollLeft === 0
            const isAtEnd = scrollLeft + clientWidth >= scrollWidth
            const isInMiddle = !isAtStart && !isAtEnd
            
            if (isAtStart) {
                setScrollCardL(true)
            } else if (isAtEnd) {
                setScrollCardR(false)
            } else if (isInMiddle) {
                setScrollCardL(false)
                setScrollCardR(true)
            }
        }
    }

    useEffect(() => {
        const container = scrollRef.current
        container.addEventListener('scroll', handleScroll)

        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const ribbonCardL = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        }
    }

    const ribbonCardR = () => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current
            scrollRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' })
        }
    }
    return(
        <>
            <div className={styles.scroll}>
                <div className={styles.scrollMarginL}>
                    <button onClick={ribbonCardL} className={scrollCardL ? styles.scrollArrowLNot : styles.scrollArrowL}><ion-icon name="arrow-back"></ion-icon></button>
                </div>

                <div ref={scrollRef} className={styles.scrollCont}>
                    <Card data={props.data1} text={props.text1} />
                    <Card data={props.data2} text={props.text2} />
                    <Card data={props.data3} text={props.text3} />
                    <Card data={props.data4} text={props.text4} />
                    <Card data={props.data5} text={props.text5} />
                    <Card data={props.data6} text={props.text6} />
                </div>

                <div className={styles.scrollMarginR}>
                    <button onClick={ribbonCardR} className={scrollCardR ? styles.scrollArrowR : styles.scrollArrowRNot}><ion-icon name="arrow-forward"></ion-icon></button>
                </div> 
            </div>
        </>
    )
}