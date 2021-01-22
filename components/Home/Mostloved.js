import React from 'react'
import Card from './ProCard'
import style from "../../styles/cards.module.css"

const Mostloved = () => {
    return (
        <div >
            <div className="heading" style={{textAlign:"center" ,margin:"20px"}}>
            <h3 style={{position: "relative",
    fontFamily: "humanist521bt-roman",
    fontSize: "25px",
    color:" #43693c"}}>MOST LOVED</h3>
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

export default Mostloved
