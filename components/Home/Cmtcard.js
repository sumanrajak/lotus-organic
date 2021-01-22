import React from 'react'
import style from "../../styles/cmtcard.module.css"
import Image from 'next/image'



const Cmtcard = () => {
    return (
        <div>
            <div className={style.card}>
            <div className={style.cardimg}>
                <Image src="/images/testi.png" width="120px" height="120px"/>
            </div>
            <div className={style.cardinf}>
                <p>
                I absolutely love Lotus Organics+ Divine Nourish Face Wash, my face feels amazing after using it, so soft. 
                Definately recommend if you have congested skin.
                 You don't need to use a lot either so it's lasted me a while.
                </p>
                <div className={style.cardnme}>
                    <span style={{fontSize:"20px"}}>Aakansha Arora</span>
                </div>

            </div>
            </div>
            
            <div className=""></div>
        </div>
    )
}

export default Cmtcard
