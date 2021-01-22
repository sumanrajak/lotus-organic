import React from 'react'
import Card from './ProCard'
import style from "../../styles/cards.module.css"

const Collection = () => {
    return (
        <div  style={{backgroundColor:"lavenderblush",marginTop:"20px"}}>
            <div className="heading" style={{textAlign:"center" ,margin:"20px"}}>
            <h3 style={{position: "relative",
    fontFamily: "humanist521bt-roman",
    fontSize: "25px",
    color:" #43693c"}}>WINTER COLLECTION
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

export default Collection
