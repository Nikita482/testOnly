import styles from "./Spinner.module.css"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

import ScrollCard from "../scrollCard/scrollCard"


export default function Spinner(){

    const[rotate, setRotate] = useState(0)

    const[point1, setPoint1] = useState(0)
    const[point2, setPoint2] = useState(-60)
    const[point3, setPoint3] = useState(-120)
    const[point4, setPoint4] = useState(-180)
    const[point5, setPoint5] = useState(-240)
    const[point6, setPoint6] = useState(-300)
    
    const[counterBtns, setCounterBtns] = useState(6)

    const[scrollRibbonConter, setScrollRibbonConter] = useState(6)
    
    const[scrollRibbon1, setScrollRibbon1] = useState(true)
    const[scrollRibbon2, setScrollRibbon2] = useState(true)
    const[scrollRibbon3, setScrollRibbon3] = useState(true)
    const[scrollRibbon4, setScrollRibbon4] = useState(true)
    const[scrollRibbon5, setScrollRibbon5] = useState(true)
    const[scrollRibbon6, setScrollRibbon6] = useState(true)
    
    const[pointVisibl1, setPointVisibl1] = useState(true)
    const[pointVisibl2, setPointVisibl2] = useState(true)
    const[pointVisibl3, setPointVisibl3] = useState(true)
    const[pointVisibl4, setPointVisibl4] = useState(true)
    const[pointVisibl5, setPointVisibl5] = useState(true)
    const[pointVisibl6, setPointVisibl6] = useState(true)
    
    const[textCounter1, setTextCounter1] = useState(true)
    const[textCounter2, setTextCounter2] = useState(true)
    const[textCounter3, setTextCounter3] = useState(true)
    const[textCounter4, setTextCounter4] = useState(true)
    const[textCounter5, setTextCounter5] = useState(true)
    const[textCounter6, setTextCounter6] = useState(true)

    const[mobuleWidht, setMobuleWidht] = useState(true)
    
    const scrollRight = () => {
        setRotate(rotate - 60)

        setPoint1(point1 + 60)
        setPoint2(point2 + 60)
        setPoint3(point3 + 60)
        setPoint4(point4 + 60)
        setPoint5(point5 + 60)
        setPoint6(point6 + 60)
        
        setMobuleWidht(false)
        setTimeout(() => {
            setMobuleWidht(true)
        }, 1000)

        if(scrollRibbonConter >= 6){
            setScrollRibbonConter(1)
        }else{
            setScrollRibbonConter(scrollRibbonConter + 1)
        }
        
        if(scrollRibbonConter === 1){//6
            setScrollRibbon1(true)
            pointMobule2()

            setTextCounter1(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(false), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(false), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl1(true) 

            setTimeout(() => {
                setPointVisibl1(true)
                setPointVisibl2(false)
                setPointVisibl3(true)
                setPointVisibl4(true)
                setPointVisibl5(true)
                setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 2){//1
            setScrollRibbon2(true)
            pointMobule3()

            setTextCounter2(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(false), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(false), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl2(true)

            setTimeout(() => {
                setPointVisibl1(true)
                setPointVisibl2(true)
                setPointVisibl3(false)
                setPointVisibl4(true)
                setPointVisibl5(true)
                setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 3){//2
            setScrollRibbon3(true)
            pointMobule4()

            setTextCounter3(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(false), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(false), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl3(true)

            setTimeout(() => {
                setPointVisibl1(true)
                setPointVisibl2(true)
                setPointVisibl3(true)
                setPointVisibl4(false)
                setPointVisibl5(true)
                setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 4){//3
            setScrollRibbon4(true)
            pointMobule5()

            setTextCounter4(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(false), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(false), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl4(true)

            setTimeout(() => {
                setPointVisibl1(true)
                setPointVisibl2(true)
                setPointVisibl3(true)
                setPointVisibl4(true)
                setPointVisibl5(false)
                setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 5){//4
            setScrollRibbon5(true)
            pointMobule6()

            setTextCounter5(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(true) 
            }, 1000)
            
            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(true)
            }, 1000)

            setPointVisibl5(true)

            setTimeout(() => {
                setPointVisibl1(true)
                setPointVisibl2(true)
                setPointVisibl3(true)
                setPointVisibl4(true)
                setPointVisibl5(true)
                setPointVisibl6(true)
            }, 1200)
        }else if(scrollRibbonConter === 6){//5
            setScrollRibbon6(false)
            pointMobule1()
            setTextCounter1("Технологии")
            
            setTextCounter6(false)
            setTimeout(() => {
                setTextCounter1(false), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(false), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)
            
            setPointVisibl6(false)

            setTimeout(() => {
                setPointVisibl1(false)
                setPointVisibl2(true)
                setPointVisibl3(true)
                setPointVisibl4(true)
                setPointVisibl5(true)
                setPointVisibl6(false)
            }, 1200)
        }

        if(counterBtns >= 6){
            setCounterBtns(1)
        }else{
            setCounterBtns(counterBtns + 1)
        }
        
        dataPlus()
    }
    const scrollLift = () => {
        setRotate(rotate + 60)

        setPoint1(point1 - 60)
        setPoint2(point2 - 60)
        setPoint3(point3 - 60)
        setPoint4(point4 - 60)
        setPoint5(point5 - 60)
        setPoint6(point6 - 60)

        setMobuleWidht(false)
        setTimeout(() => {
            setMobuleWidht(true)
        }, 1000)

        
        if(counterBtns <= 1){
            setCounterBtns(6)
        }else{
            setCounterBtns(counterBtns - 1)
        }

        if(scrollRibbonConter <= 1){
            setScrollRibbonConter(6)
        }else{
            setScrollRibbonConter(scrollRibbonConter - 1)
        }

        if(scrollRibbonConter === 1){//6
            setScrollRibbon1(true)
            pointMobule6()

            setTextCounter1(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(true) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(true)
            }, 1000)
            
            setPointVisibl1(true) 

            setTimeout(() => {
                setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(true)
            }, 1200)
        }else if(scrollRibbonConter === 2){//1
            setScrollRibbon2(true)
            pointMobule1()

            setTextCounter2(true)
            setTimeout(() => {
                setTextCounter1(false), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(false), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl2(true) 

            setTimeout(() => {
                setPointVisibl1(false), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 3){//2
            setScrollRibbon3(true)
            pointMobule2()

            setTextCounter3(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(false), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(false), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl3(true) 

            setTimeout(() => {
                setPointVisibl1(true), setPointVisibl2(false), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 4){//3
            setScrollRibbon4(true)
            pointMobule3()

            setTextCounter4(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(false), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(false), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)

            setPointVisibl4(true) 

            setTimeout(() => {
                setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(false), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 5){//4
            setScrollRibbon5(true)
            pointMobule4()

            setTextCounter5(true)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(false), setTextCounter5(true), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(false), setScrollRibbon5(true), setScrollRibbon6(false)
            }, 1000)
            
            setPointVisibl5(true) 

            setTimeout(() => {
                setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(false), setPointVisibl5(true), setPointVisibl6(false)
            }, 1200)
        }else if(scrollRibbonConter === 6){//5
            setScrollRibbon6(false)
            pointMobule5()
            
            setTextCounter6(false)
            setTimeout(() => {
                setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(false), setTextCounter6(false) 
            }, 1000)

            setTimeout(() => {
                setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(false), setScrollRibbon6(false)
            }, 1000)
            
            setPointVisibl6(false) 

            setTimeout(() => {
                setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(false), setPointVisibl6(false)
            }, 1200)
        }

        dataMinus()

    }

    
    
    const[pointVis1, setPointVis1] = useState(true)
    const[pointVis2, setPointVis2] = useState(true)
    const[pointVis3, setPointVis3] = useState(true)
    const[pointVis4, setPointVis4] = useState(true)
    const[pointVis5, setPointVis5] = useState(true)
    const[pointVis6, setPointVis6] = useState(true)
    useEffect(() => {
        
        const number = ((rotate % 360) + 360) % 360;

        if(number === 0){
            setPointVis1(true)
            setPointVis2(true)
            setPointVis3(true)
            setPointVis4(true)
            setPointVis5(true)
            setPointVis6(false)
        }else if(number === 60){
            setPointVis1(true)
            setPointVis2(true)
            setPointVis3(true)
            setPointVis4(true)
            setPointVis5(false)
            setPointVis6(true)
        }else if(number === 120){
            setPointVis1(true)
            setPointVis2(true)
            setPointVis3(true)
            setPointVis4(false)
            setPointVis5(true)
            setPointVis6(true)
        }else if(number === 180){
            setPointVis1(true)
            setPointVis2(true)
            setPointVis3(false)
            setPointVis4(true)
            setPointVis5(true)
            setPointVis6(true)
        }else if(number === 240){
            setPointVis1(true)
            setPointVis2(false)
            setPointVis3(true)
            setPointVis4(true)
            setPointVis5(true)
            setPointVis6(true)
        }else if(number === 300){
            setPointVis1(false)
            setPointVis2(true)
            setPointVis3(true)
            setPointVis4(true)
            setPointVis5(true)
            setPointVis6(true)
        }

    }, [rotate]);



    const points = [point1, point2, point3, point4, point5, point6]
    const setPoints = [setPoint1, setPoint2, setPoint3, setPoint4, setPoint5, setPoint6]
    const kurg = Math.floor(rotate / 360) * 360
    const spinnerBtn1 = () => {

        setCounterBtns(1)

        updateData(1980, 1986)

        if(rotate >= 0 + kurg && rotate <= 120 + kurg){
            setRotate(-60 + kurg)
        }else{
            setRotate(300 + kurg)
        }

        if(rotate === 0 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 60 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 120 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 180)
            })
        }else if(rotate === 180 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + -120)
            })
        }else if(rotate === 240 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + -60)
            })
        }

        setScrollRibbonConter(1)
        
        setScrollRibbon6(false)
        setScrollRibbon2(true)
        setScrollRibbon3(true)
        setScrollRibbon4(true)
        setScrollRibbon5(true)

        setTimeout(() => {
            setScrollRibbon1(false)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)


        setTimeout(() => {
            setPointVisibl1(false), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
        }, 1200)
    }
    const spinnerBtn2 = () => {

        setCounterBtns(2)

        updateData(1987, 1991)

        if(rotate >= -60 + kurg && rotate <= 60 + kurg){
            setRotate(-120 + kurg)
        }else{
            setRotate(240 + kurg)
        }

        if(rotate === 0 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 300 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 60 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 180)
            })
        }else if(rotate === 120 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 120)
            })
        }else if(rotate === 180 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 60)
            })
        }

        setScrollRibbonConter(2)

        setScrollRibbon6(false)
        setScrollRibbon1(true)
        setScrollRibbon3(true)
        setScrollRibbon4(true)
        setScrollRibbon5(true)

        setTimeout(() => {
            setScrollRibbon2(false)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)

        setTimeout(() => {
            setPointVisibl1(true), setPointVisibl2(false), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
        }, 1200)
    }
    const spinnerBtn3 = () => {

        setCounterBtns(3)

        updateData(1992, 1997)

        if(rotate >= -120 + kurg && rotate <= 0 + kurg){
            setRotate(-180 + kurg)
        }else{
            setRotate(180 + kurg)
        }

        if(rotate === 0 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 180)
            })
        }else if(rotate === 240 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 300 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 120 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 60)
            })
        }else if(rotate === 60 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 120)
            })
        }

        setScrollRibbonConter(3)

        setScrollRibbon6(false)
        setScrollRibbon2(true)
        setScrollRibbon1(true)
        setScrollRibbon4(true)
        setScrollRibbon5(true)

        setTimeout(() => {
            setScrollRibbon3(false)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)

        setTimeout(() => {
            setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(false), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)
        }, 1200)
    }
    const spinnerBtn4 = () => {
        
        setCounterBtns(4)

        updateData(1999, 2004)

        const kurg = Math.floor(rotate / 360) * 360

        if(rotate >= -180 + kurg && rotate <= -60 + kurg){
            setRotate(-240 + kurg)
        }else{
            setRotate(120 + kurg)
        }

        if(rotate === 0 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 120)
            })
        }else if(rotate === 60 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 60)
            })
        }else if(rotate === 180 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 240 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 300 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 180)
            })
        }

        setScrollRibbonConter(4)

        setScrollRibbon6(false)
        setScrollRibbon2(true)
        setScrollRibbon3(true)
        setScrollRibbon1(true)
        setScrollRibbon5(true)

        setTimeout(() => {
            setScrollRibbon4(false)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)

        setTimeout(() => {
            setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(false), setPointVisibl5(true), setPointVisibl6(false)
        }, 1200)
    }
    const spinnerBtn5 = () => {

        setCounterBtns(5)

        updateData(2006, 2014)

        if(rotate >= 120 + kurg && rotate <= 240 + kurg){
            setRotate(60 + kurg)
        }else if(rotate >= 300 + kurg && rotate <= 420 + kurg){
            setRotate(420 + kurg)
        }else{
            setRotate(60 + kurg)
        }

        if(rotate === 0 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 60)
            })
        }else if(rotate === 300 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 120)
            })
        }else if(rotate === 120 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 180 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 240 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 180)
            })
        }

        setScrollRibbonConter(5)

        setScrollRibbon6(false)
        setScrollRibbon2(true)
        setScrollRibbon3(true)
        setScrollRibbon4(true)
        setScrollRibbon1(true)

        setTimeout(() => {
            setScrollRibbon5(false)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)

        setTimeout(() => {
            setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(false), setPointVisibl6(false)
        }, 1200)
    }
    const spinnerBtn6 = () => {

        setCounterBtns(6)

        updateData(2015, 2022)

        if(rotate >= 60 + kurg && rotate <= 180 + kurg){
            setRotate(0 + kurg)
        }else if(rotate >= 240 + kurg && rotate <= 300 + kurg){
            setRotate(360 + kurg)
        }

        if(rotate === 60 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 60)
            })
        }else if(rotate === 120 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point + 120)
            })
        }else if(rotate === 180 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 180)
            })
        }else if(rotate === 240 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 120)
            })
        }else if(rotate === 300 + kurg){
            points.forEach((point, index) => {
                setPoints[index](point - 60)
            })
        }

        setScrollRibbonConter(6)

        setScrollRibbon1(true)
        setScrollRibbon2(true)
        setScrollRibbon3(true)
        setScrollRibbon4(true)
        setScrollRibbon5(true)

        setTimeout(() => {
            setScrollRibbon6(true)
        }, 1000)

        setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(false)

        setTimeout(() => {
            setPointVisibl1(true), setPointVisibl2(true), setPointVisibl3(true), setPointVisibl4(true), setPointVisibl5(true), setPointVisibl6(true)
        }, 1200)
    }



    const[dataL, setDataL] = useState(2015)
    const[dataR, setDataR] = useState(2022)
    const updateData = (newL, newR) => {
        gsap.fromTo(
            `#dataL`,
            { innerText: dataL },
            {
                duration: 1,
                innerText: newL,
                roundProps: "innerText",
                overwrite: true,
            }
        )
    
        gsap.fromTo(
            `#dataR`,
            { innerText: dataR },
            {
                duration: 1,
                innerText: newR,
                roundProps: "innerText",
                overwrite: true,
            }
        )
    
        setDataL(newL)
        setDataR(newR)
    }
    const dataPlus = () => {
        if(dataL === 1980 && dataR === 1986){
            updateData(1987, 1991)
        }else if(dataL === 1987 && dataR === 1991){
            updateData(1992, 1997)
        }else if(dataL === 1992 && dataR === 1997){
            updateData(1999, 2004)
        }else if(dataL === 1999 && dataR === 2004){
            updateData(2006, 2014)
        }else if(dataL === 2006 && dataR === 2014){
            updateData(2015, 2022)
        }else{
            updateData(1980, 1986)
        }
    }
    const dataMinus = () => {
        if(dataL === 1980 && dataR === 1986){
            updateData(2015, 2022)
        }else if(dataL === 2015 && dataR === 2022){
            updateData(2006, 2014)
        }else if(dataL === 2006 && dataR === 2014){
            updateData(1999, 2004)
        }else if(dataL === 1999 && dataR === 2004){
            updateData(1992, 1997)
        }else if(dataL === 1992 && dataR === 1997){
            updateData(1987, 1991)
        }else{
            updateData(1980, 1986)
        }
    }



    const[pointMobuleBtn1, setPointMobuleBtn1] = useState(true)
    const[pointMobuleBtn2, setPointMobuleBtn2] = useState(true)
    const[pointMobuleBtn3, setPointMobuleBtn3] = useState(true)
    const[pointMobuleBtn4, setPointMobuleBtn4] = useState(true)
    const[pointMobuleBtn5, setPointMobuleBtn5] = useState(true)
    const[pointMobuleBtn6, setPointMobuleBtn6] = useState(true)
    const pointMobule1 = () => {
        setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false)
        setTimeout(() => {
            setTextCounter1(false), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
        }, 1000)

        updateData(1980, 1986)

        setScrollRibbonConter(1)

        setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        setTimeout(() => {
            setScrollRibbon1(false), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        }, 1000)

        setCounterBtns(1)

        setPointMobuleBtn1(false), setPointMobuleBtn2(true), setPointMobuleBtn3(true), setPointMobuleBtn4(true), setPointMobuleBtn5(true), setPointMobuleBtn6(false)

        if(pointMobuleBtn1 != false){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    }
    const pointMobule2 = () => {
        setTextCounter1(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false)
        setTimeout(() => {
            setTextCounter1(true), setTextCounter2(false), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
        }, 1000)

        updateData(1987, 1991)

        setScrollRibbonConter(2)

        setScrollRibbon1(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        setTimeout(() => {
            setScrollRibbon1(true), setScrollRibbon2(false), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        }, 1000)

        setCounterBtns(2)

        setPointMobuleBtn1(true), setPointMobuleBtn2(false), setPointMobuleBtn3(true), setPointMobuleBtn4(true), setPointMobuleBtn5(true), setPointMobuleBtn6(false)
    
        if(pointMobuleBtn2 != false){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    }
    const pointMobule3 = () => {
        setTextCounter1(true), setTextCounter2(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false)
        setTimeout(() => {
            setTextCounter1(true), setTextCounter2(true), setTextCounter3(false), setTextCounter4(true), setTextCounter5(true), setTextCounter6(false) 
        }, 1000)

        updateData(1992, 1997)

        setScrollRibbonConter(3)

        setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        setTimeout(() => {
            setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(false), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(false)
        }, 1000)

        setCounterBtns(3)

        setPointMobuleBtn1(true), setPointMobuleBtn2(true), setPointMobuleBtn3(false), setPointMobuleBtn4(true), setPointMobuleBtn5(true), setPointMobuleBtn6(false)
    
        if(pointMobuleBtn3 != false){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    }
    const pointMobule4 = () => {
        setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter5(true), setTextCounter6(false)
        setTimeout(() => {
            setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(false), setTextCounter5(true), setTextCounter6(false) 
        }, 1000)

        updateData(1999, 2004)

        setScrollRibbonConter(4)

        setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon5(true), setScrollRibbon6(false)
        setTimeout(() => {
            setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(false), setScrollRibbon5(true), setScrollRibbon6(false)
        }, 1000)

        setCounterBtns(4)
        
        setPointMobuleBtn1(true), setPointMobuleBtn2(true), setPointMobuleBtn3(true), setPointMobuleBtn4(false), setPointMobuleBtn5(true), setPointMobuleBtn6(false)
        
        if(pointMobuleBtn4 != false){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    
    }
    const pointMobule5 = () => {
        setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter6(false)
        setTimeout(() => {
            setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(false), setTextCounter6(false) 
        }, 1000)


        updateData(2006, 2014)

        setScrollRibbonConter(5)

        setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon6(false)
        setTimeout(() => {
            setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(false), setScrollRibbon6(false)
        }, 1000)

        setCounterBtns(5)

        setPointMobuleBtn1(true), setPointMobuleBtn2(true), setPointMobuleBtn3(true), setPointMobuleBtn4(true), setPointMobuleBtn5(false), setPointMobuleBtn6(false)
        
        if(pointMobuleBtn5 != false){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    }
    const pointMobule6 = () => {
        setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true)
        setTimeout(() => {
            setTextCounter1(true), setTextCounter2(true), setTextCounter3(true), setTextCounter4(true), setTextCounter5(true), setTextCounter6(true) 
        }, 1000)

        updateData(2015, 2022)

        setScrollRibbonConter(6)

        setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true)
        setTimeout(() => {
            setScrollRibbon1(true), setScrollRibbon2(true), setScrollRibbon3(true), setScrollRibbon4(true), setScrollRibbon5(true), setScrollRibbon6(true)
        }, 1000)

        setCounterBtns(6)

        setPointMobuleBtn1(true), setPointMobuleBtn2(true), setPointMobuleBtn3(true), setPointMobuleBtn4(true), setPointMobuleBtn5(true), setPointMobuleBtn6(true)
        
        if(pointMobuleBtn6 != true){
            setMobuleWidht(false)
            setTimeout(() => {
                setMobuleWidht(true)
            }, 1000)
        }
    }


    
    return(
        <>
            <div className={styles.wrappweMarginTop}></div>

            <div className={styles.wrapper}>

                <div className={styles.wrepperName}>
                    <h1>Исторические</h1>
                    <h1 className={styles.wrepperNameMargin}>даты</h1>
                    
                    <div className={styles.wrapperGrad}>

                    </div>
                </div>

                <div className={mobuleWidht ? styles.wrapperWidht : styles.wrapperWidhtNot}></div>

                <div className={styles.wrapperData}>
                    <div className={styles.wrapperDataL}>
                        <h1 id="dataL" className={styles.dataNum}>{dataL}</h1>
                        <div className={textCounter1 ? styles.dataTextNot1 : styles.dataText1}>Технологии</div>
                        <div className={textCounter2 ? styles.dataTextNot2 : styles.dataText2}>Кино</div>
                        <div className={textCounter3 ? styles.dataTextNot3 : styles.dataText3}>Литература</div>
                        <div className={textCounter4 ? styles.dataTextNot4 : styles.dataText4}>Искусство</div>
                        <div className={textCounter5 ? styles.dataTextNot5 : styles.dataText5}>Спорт</div>
                        <div className={textCounter6 ? styles.dataText6 : styles.dataTextNot6}>Наука</div>
                    </div>

                    <div className={styles.wrapperDataR}><h1 id="dataR" className={styles.dataNum}>{dataR}</h1></div>
                </div>

                <div className={styles.spinner} style={{transform: `rotate(${rotate}deg)`}}>
                    <div onClick={spinnerBtn1} className={styles.boxPoint}><div className={pointVis1 ? styles.point : styles.pointVis}><div className={pointVis1 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point1}deg)` }}>1 <p className={pointVisibl1 ? styles.pointNameNot : styles.pointName}>Технологии</p></div></div></div>
                    <div onClick={spinnerBtn2} className={styles.boxPoint}><div className={pointVis2 ? styles.point : styles.pointVis}><div className={pointVis2 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point2}deg)` }}>2 <p className={pointVisibl2 ? styles.pointNameNot : styles.pointName}>Кино</p></div></div></div>
                    <div onClick={spinnerBtn3} className={styles.boxPoint}><div className={pointVis3 ? styles.point : styles.pointVis}><div className={pointVis3 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point3}deg)` }}>3 <p className={pointVisibl3 ? styles.pointNameNot : styles.pointName}>Литература</p></div></div></div>
                    <div onClick={spinnerBtn4} className={styles.boxPoint}><div className={pointVis4 ? styles.point : styles.pointVis}><div className={pointVis4 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point4}deg)` }}>4 <p className={pointVisibl4 ? styles.pointNameNot : styles.pointName}>Искусство</p></div></div></div>
                    <div onClick={spinnerBtn5} className={styles.boxPoint}><div className={pointVis5 ? styles.point : styles.pointVis}><div className={pointVis5 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point5}deg)` }}>5 <p className={pointVisibl5 ? styles.pointNameNot : styles.pointName}>Спорт</p></div></div></div>
                    <div onClick={spinnerBtn6} className={styles.boxPoint}><div className={pointVis6 ? styles.point : styles.pointVis}><div className={pointVis6 ? styles.pointNum : styles.pointNumVis} style={{transform: `rotate(${point6}deg)` }}>6 <p className={pointVisibl6 ? styles.pointName : styles.pointNameNot}>Наука</p></div></div></div>
                </div>

                <div className={styles.wrapperBtn}>
                    <div className={styles.wrapperNumber}>0{counterBtns}/06</div>

                    <div className={styles.wrapperBtnNum}>
                        <button onClick={scrollLift} className={styles.wrapperBtnNumLeft}><ion-icon name="arrow-back"></ion-icon></button>
                        <button onClick={scrollRight} className={styles.wrapperBtnNumRight}><ion-icon name="arrow-forward"></ion-icon></button>
                    </div>
                </div>

                <div className={styles.pointMobule}>
                    <div onClick={pointMobule1} className={pointMobuleBtn1 ? styles.pointMobuleNot1 : styles.pointMobule1}></div>
                    <div onClick={pointMobule2} className={pointMobuleBtn2 ? styles.pointMobuleNot2 : styles.pointMobule2}></div>
                    <div onClick={pointMobule3} className={pointMobuleBtn3 ? styles.pointMobuleNot3 : styles.pointMobule3}></div>
                    <div onClick={pointMobule4} className={pointMobuleBtn4 ? styles.pointMobuleNot4 : styles.pointMobule4}></div>
                    <div onClick={pointMobule5} className={pointMobuleBtn5 ? styles.pointMobuleNot5 : styles.pointMobule5}></div>
                    <div onClick={pointMobule6} className={pointMobuleBtn6 ? styles.pointMobule6 : styles.pointMobuleNot6}></div>
                </div>
            </div>

            <div className={styles.wrappweMarginBottom}>
                <div className={scrollRibbon1 ? styles.wrapRibbonNot1 : styles.wrapRibbonVis1}>
                    <ScrollCard data1="1980"text1="(12 сентября) - IBM выпустил первый персональный компьютер IBM 5150, изменив индустрию ПК." 
                        data2="1981" text2="(1 августа) - Начало вещания музыкального телеканала MTV, революционизировавшего индустрию развлечений." 
                        data3="1982" text3="(19 января) - ARPANET перешел на протокол TCP/IP, что стало основой для интернета." 
                        data4="1983" text4="(2 марта) - Sony представила первые CD-плееры, что привело к распространению цифровой музыки." 
                        data5="1984" text5="(24 января) - Apple выпустила Macintosh, первый коммерчески успешный компьютер с графическим интерфейсом." 
                        data6="1985" text6="(20 ноября) - Microsoft представил Windows 1.0, заложив основу для будущих операционных систем." 
                     />
                </div>

                <div className={scrollRibbon2 ? styles.wrapRibbonNot2 : styles.wrapRibbonVis2}>
                    <ScrollCard data1="1987"text1="(12 июня) - Премьера фильма 'Хищник' с Арнольдом Шварценеггером, ставшего культовым боевиком." 
                        data2="1988" text2="(16 декабря) - Вышел фильм 'Крепкий орешек' с Брюсом Уиллисом, ставший классикой экшн-кинематографа." 
                        data3="1989" text3="(21 июля) - Релиз фильма 'Бэтмен' Тима Бертона с Майклом Китоном в главной роли." 
                        data4="1990" text4="(16 ноября) - Премьера фильма 'Один дома' с Маколеем Калкиным, ставшего рождественской классикой." 
                        data5="1991" text5="(24 мая) - Выход фильма 'Тельма и Луиза' с Сьюзен Сарандон и Джиной Дэвис." 
                        data6="1991" text6="(15 ноября) - Премьера анимационного фильма 'Красавица и Чудовище' от Disney." 
                     />
                </div>

                <div className={scrollRibbon3 ? styles.wrapRibbonNot3 : styles.wrapRibbonVis3}>
                    <ScrollCard data1="1992"text1="(15 октября) - Вышла книга 'Снеговик' Джо Несбо, ставшая началом популярной серии детективов." 
                        data2="1993" text2="(27 января) - Публикация романа 'Пеликан' Джона Гришэма, ставшего бестселлером." 
                        data3="1994" text3="(8 сентября) - Выпуск книги 'Интервью с вампиром' Энн Райс, положившей начало серии 'Вампирские хроники'." 
                        data4="1995" text4="(15 июля) - Публикация романа 'Алая буква' Натаниэля Готорна, переиздание классики." 
                        data5="1996" text5="(16 августа) - Вышла книга 'Игра Эндера' Орсона Скотта Карда, ставшая культовым научно-фантастическим романом." 
                        data6="1997" text6="(26 июня) - Публикация 'Гарри Поттер и философский камень' Дж.К. Роулинг, начавшего феноменальную серию." 
                     />
                </div>

                <div className={scrollRibbon4 ? styles.wrapRibbonNot4 : styles.wrapRibbonVis4}>
                    <ScrollCard data1="1999"text1="(1 марта) - Дэмиан Херст представил свою знаменитую инсталляцию 'Любовь Бога' с черепом, покрытым бриллиантами." 
                        data2="2000" text2="(20 мая) - Уильям Кентридж завершил цикл анимационных фильмов 'Живой мертвец', исследующих темы памяти и истории." 
                        data3="2001" text3="(4 ноября) - Бэнкси провёл выставку 'Turf War' в Лондоне, привлекая внимание к своей стрит-арт деятельности." 
                        data4="2002" text4="(10 сентября) - Мэрилин Минтер представила серию фотографий 'Влажные мечты', исследующих красоту и гламур." 
                        data5="2003" text5="(15 июня) - Такаси Мураками представил выставку 'Superflat', влияющую на современное японское искусство и поп-культуру." 
                        data6="2004" text6="(5 октября) - Криста Вольф создала скульптуру 'Врата прошлого', исследующую темы памяти и коллективной истории." 
                     />
                </div>

                <div className={scrollRibbon5 ? styles.wrapRibbonNot5 : styles.wrapRibbonVis5}>
                    <ScrollCard data1="2006"text1="(9 июля) - Финал ЧМ по футболу: Италия победила Францию, Зинедин Зидан ударил Марко Матерацци." 
                        data2="2007" text2="(13 октября) - Юсейн Болт установил мировой рекорд на 100 м (9.72 сек) на турнире в Риети." 
                        data3="2008" text3="(8 августа) - Начало Олимпийских игр в Пекине, известных своими грандиозными церемониями." 
                        data4="2010" text4="(11 июля) - Испания выиграла ЧМ по футболу, победив Нидерланды в финале." 
                        data5="2012" text5="(27 июля) - Открытие Олимпийских игр в Лондоне, запомнившихся выступлением Джеймса Бонда и королевы." 
                        data6="2014" text6="(13 июля) - Германия выиграла ЧМ по футболу, победив Аргентину в финале." 
                     />
                </div>

                <div className={scrollRibbon6 ? styles.wrapRibbonVis6 : styles.wrapRibbonNot6}>
                    <ScrollCard data1="2015"text1="(14 июля) - Космический аппарат 'Новые горизонты' достиг Плутона, сделав первые четкие снимки." 
                        data2="2016" text2="(11 февраля) - Обнаружены гравитационные волны, подтверждая теорию Эйнштейна о гравитации." 
                        data3="2017" text3="(26 октября) - Учёные обнаружили звездную систему TRAPPIST-1 с семью землеподобными планетами." 
                        data4="2018" text4="(28 ноября) - Китайский ученый объявил об успешной генетической модификации близнецов CRISPR." 
                        data5="2019" text5="(10 апреля) - Впервые получено изображение черной дыры в галактике M87." 
                        data6="2021" text6="(5 августа) - Запуск марсохода 'Персеверанс', начавшего поиск жизни на Марсе." 
                     />
                </div>
            </div>
        </>
    )
}