import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Home/ProCard'
import Footer from '../Home/Footer'
import style2 from "../../styles/cards.module.css"

import Carousel from 'react-bootstrap/Carousel'
import style from '../../styles/product.module.css'
import Rating from '@material-ui/lab/Rating';

const Product = () => {
    return (
        <div>
            
            <div className={style.buttombar}>
        <div className={style.cardprice2}>
            <h4 className={style.oldr}> ₹</h4><h4 className={style.old}>845.00</h4>
            <h4 className={style.new}>₹718.00</h4>
            </div>
            <div className={style.cardbutton2}>
                <button className={style.button}>ADD TO CART</button>

                </div>

        </div>
            <div className={style.container}>
            <div className={style.upper}>
            <div  className={style.slider} >
            
            <Carousel style={{height:"100%"}}>
  <Carousel.Item interval={800}>
  <Image src="/images/mobslid.png"width="700px" height="700px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={800}>
  <Image src="/images/mobslid2.png" width="700px" height="700px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item interval={800}>
   <Image src="/images/mobslid3.png"  width="700px" height="700px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
        </div>
        
            <div className={style.side}>
                <div className="">
                  <p>Blissful Perfecting Mask - 50 GM</p>
                </div>
                <div className="">
                <Rating name="read-only" value="4"  fontSize="inharit" readOnly />

                </div>
                <div className="">
                Lotus Organics+ Blissful Perfecting Mask is made using freshly squeezed 100% Certified Organic Acai 
                Berries to provide utmost nutrition to the skin. Acai berries are rich in antioxidants that nurtures your
                 skin and protects it from free radicals. This perfecting mask helps to nourish, moisturise and brighten up dull,
                  dehydrated and tired looking skin. It purifies the skin and removes impurities imparting a warm glow and flawless finish.
                </div>
                <div className={style.cardprice}>
            <h4 className={style.oldr}> ₹</h4><h4 className={style.old}>845.00</h4>
            <h4 className={style.new}>₹718.00</h4>
            </div>
                
                <div className={style.cardbutton}>
                <button className={style.button}>ADD TO CART</button>

                </div>
            </div>

            </div>
            <div class={style.offers_strip}>Offers Available
        <div class={style.offers_value}>
        <ul class={style.offers_value_table}>
        <li class={style.offers_value_list}>Get 8% EXTRA Discount on prepaid orders</li>
        <li class={style.offers_value_list}>Get Complimentary Divine Soothing Hand Creme on Purchase Value of more than Rs 2000</li>
        </ul>
        </div>
        </div>
        </div>
        <div className={style.product_cnt}>
        <div className={style.head}>
          <span>KEY BENIFITS</span>
        </div>
        <div className={style.key_benifit}>

          <div className={style.card}>
          <Image src="/images/face.png"width="300px" height="300px"/>

            <strong>Exfoliate dead skin cells</strong><br></br>
            This unique formulation removes dead skin cells and draws out deep rooted impurities , 
            thereby unclogging pores and revealing a cleaner and smoother skin.


          </div>
          <div className={style.card}>
            
          <Image src="/images/face.png"width="300px" height="300px"/>

          <strong>Nourishing and Moisturising in Nature</strong><br></br>
          The potent ingredients of this mask deeply penetrate the skin to ensure moisture is
          retained for longer periods of time, thus nourishing and reviving it.
                    </div>
          <div className={style.card}>
          <Image src="/images/face.png"width="300px" height="300px"/>

            <strong>Promotes Blood circulation</strong><br></br>
            Massaging and gently removing of this mask from the face leads to the expansion of the face blood vessels and thus stimulating blood circulation
                      </div>
        




        </div>
        <div className={style.head}>
          <span>KEY INGREDIENTS</span>
        </div>
        <div className={style.key_benifit}>
          <div className="">
          <Image src="/images/face.png"width="300px" height="300px"/>
          <br></br>
            <strong>Exfoliate dead skin cells</strong><br></br>
            This unique formulation removes dead skin cells and draws out deep rooted impurities , 
            thereby unclogging pores and revealing a cleaner and smoother skin.


          </div></div>
          <div className={style.head}>
          <span>HOW TO USE</span>
        </div>
        <div className={style.key_benifit}>
          <div className={style.card}>
          <Image src="/images/face.png"width="300px" height="300px"/>

            <strong>Step 1</strong><br></br>
            Cleanse your face using Divine Nourish Facewash


          </div>
          <div className={style.card}>
            
          <Image src="/images/face.png"width="300px" height="300px"/>

          <strong>Step 2</strong><br></br>
          Apply a thick layer of Blissful Perfecting Mask smoothly over face, avoiding the eye and lip areas.
                    </div>
          <div className={style.card}>
          <Image src="/images/face.png"width="300px" height="300px"/>

            <strong>Step 3</strong><br></br>
            Wash with lukewarm water after 10-15 minutes for a healthy, glowing and flawless skin.                      </div>
        




        </div></div>
        <div className="">
        <div className={style2.products} style={{    
    }}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>

        <Footer/>
        </div>
    )
}

export default Product
