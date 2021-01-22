import React from 'react'
import style from "../../styles/cmtcard.module.css"
import  Cmtcard from "./Cmtcard.js"


const Whathapen = () => {
    return (
        <div>
            
            <div className="" style={{ display:"flex" ,justifyContent:"center",padding:"30px", flexWrap:"wrap"}}>
            <button className="" style={{
                 backgroundColor: "#fff",
    textTransform: "uppercase",
    color: "#7b1562",
    padding:" 11px 20px 8px"}}>testimonials</button>
            <button className="" style={{
                 backgroundColor: "#fff",
    textTransform: "uppercase",
    color: "#7b1562",
    padding:" 11px 20px 8px",marginLeft:"2px"}}>influencers reviews</button>


            </div>
            <div className={style.container} style={{display:"flex",justifyContent:"center"}}>

                    <Cmtcard/>
                    <Cmtcard/>
                    <Cmtcard/>


            </div>
        </div>
    )
}

export default Whathapen
