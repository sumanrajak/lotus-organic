import React from 'react'
import Card from './ProCard'
import style from "../../styles/cards.module.css"

const Endof = () => {
    return (
        <div  style={{backgroundColor:"lightcyan",marginTop:"20px"}}>
            <div className="heading" style={{textAlign:"center" ,margin:"20px"}}>
            <h3 style={{position: "relative",
    fontFamily: "humanist521bt-roman",
    fontSize: "25px",
    color:" #43693c"}}>END OF 2020 SALE
    </h3>
            </div>
            <div className={style.products} style={{    
    }}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
            <div className={style.cardbutton} >
                <button className={style.buttonV}>VIEW ALL</button>
            </div>
            
        </div>
    )
}

export default Endof
