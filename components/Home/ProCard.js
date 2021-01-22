import React from 'react'
import style from "../../styles/cards.module.css"
import Image from 'next/image'
import Rating from '@material-ui/lab/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const ProCard = () => {
    return (
        <div className={style.cardbody}>
            <div className={style.wishlist}>
                <FavoriteBorderIcon style={{float:"right", opacity: "0.6",margin:"5px"}}> </FavoriteBorderIcon>
            </div>
            <div className={style.cardimg}>
            <Image src="/images/product_2.png" width="200px" height="200px"/>
            </div>
            <div className={style.cardinfo}>
                <p className={style.name}>    Precious Brightening Creme SPF 20</p>
            <Rating name="read-only" value="4"  fontSize="inharit" readOnly />

            </div>
            <div className={style.cardprice}>
            <h4 className={style.oldr}> ₹</h4><h4 className={style.old}>845.00</h4>
            <h4 className={style.new}>₹718.00</h4>
            </div>
            <div className={style.cardbutton}>
            <button className={style.button}>ADD TO CART</button>
            </div>






        </div>
    )
}

export default ProCard
