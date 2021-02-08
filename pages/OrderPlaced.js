import React from 'react'
import style from "../styles/cart.module.css"


const OrderPlaced = () => {
    return (
        <div   className={style.container} style={{alignItems:"center", textAlign:"center",
    }}>
            <div className={style.head}> ORDER</div>
            <div className=""><h3>thanks for placing your oredr your order id 0d1234
                </h3>
                <h3>expected dilivery 21.2.2021</h3></div>
            <div className={style.buttonspace}>
            <div className={style.cntbt}>
                CONTINUE  SHOPPING
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced
