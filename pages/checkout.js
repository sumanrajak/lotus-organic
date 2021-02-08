import React from 'react'
import { Container, Input, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CheckoutItem from '../components/cart/CheckoutItem'
import style from "../styles/checkout.module.css"
import style2 from "../styles/cart.module.css"
import Image from 'next/image'



const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
}))

export default function Checkout() {
  const classes = useStyles()

  return (
    <>
    <div className={style2.buttombar}>
        <div className={style2.cardbutton2}>
               2000

                </div>
            <div className={style2.cardbutton1}>
                PLACE ORDER

                </div>

        </div>
    <div className={style.box}>
    <div className={style.head}> checkout</div>
    <div className={style.container}>
        <div className={style.leftcontainer}>

            <div className={style.upper}>
            <div className={style.layer}>
            <div className={style.part}>
              <label>Solutions</label>
              <select id="salutation" name="salutation" className={style.dQlmoN}s placeholder="Salutation *">
<option value="Mrs.">Mrs.</option>
<option value="Mr.">Mr.</option>
<option value="Ms.">Ms.</option>
</select>
            </div>
            <div className={style.part}>
            <label>Name*</label>
              <input className={style.dQlmoN}></input>
            </div>
            </div>
            <div className={style.layer}>
            <div className={style.part}>
            <label>Email* </label>
              <input className={style.dQlmoN}></input>
                </div>
                <div className={style.part}>
                <label>Mobile*</label>
              <input className={style.dQlmoN}></input>
            </div>
            </div>
            </div>
            <div className={style.upper}>
            <div className={style.layer2}>
            <div className={style.part2}>
            <label>Pincode*</label>
              <input className={style.dQlmoN}></input>
                </div>
                <div className={style.part2}>
            <label>City/District*</label>
              <input className={style.dQlmoN}></input>
                </div>
                <div className={style.part2}>
                <label>State*</label>
                <select id="state" name="state" className={style.dQlmoN} placeholder="State *">
<option value="">State *</option>
<option value="1">Andaman Nicobar</option>
<option value="2">Andhra Pradesh</option>
<option value="3">Arunachal Pradesh</option>
<option value="4">Assam</option>
<option value="5">Bihar</option>
<option value="6">Chandigarh</option>
<option value="7">Chhattisgarh</option>
<option value="8">Dadra Nagar Haveli</option>
<option value="9">Daman Diu</option>
<option value="10">Delhi</option>
<option value="11">Goa</option>
<option value="12">Gujarat</option>
<option value="13">Haryana</option>
<option value="14">Himachal Pradesh</option>
<option value="15">Jammu Kashmir</option>
<option value="16">Jharkhand</option>
<option value="17">Karnataka</option>
<option value="18">Kerala</option>
<option value="20">Ladakh</option>
<option value="19">Lakshadweep</option>
<option value="21">Madhya Pradesh</option>
<option value="22">Maharashtra</option>
<option value="23">Manipur</option>
<option value="24">Meghalaya</option>
<option value="25">Mizoram</option>
<option value="26">Nagaland</option>
<option value="27">Odisha</option>
<option value="28">Puducherry</option>
<option value="29">Punjab</option>
<option value="30">Rajasthan</option>
<option value="31">Sikkim</option>
 <option value="32">Tamil Nadu</option>
<option value="33">Telangana</option>
<option value="34">Tripura</option>
<option value="35">Uttar Pradesh</option>
<option value="36">Uttarakhand</option>
<option value="37">West Bengal</option>
</select>
            </div>
            </div>
            <div className={style.layer3}>
            <div className={style.part3}>
            <label>Address 1 (House No, Building, Street, Area)*</label>
              <input className={style.dQlmoN}></input>
                </div>
               
            </div>
            <div className={style.layer3}>
            <div className={style.part3}>
            <label>Address 2 (Locality, Landmark, Town)*</label>
              <input className={style.dQlmoN}></input>
                </div>
               
            </div>
            <div className={style.layer}>
            <div className={style.part}>
            <label>Date of Birth</label>
              <input className={style.dQlmoN} type="date"></input>
                </div>
                <div className={style.part}>
                <label>Anniversary</label>
              <input className={style.dQlmoN} type="date"></input>
            </div>
            </div>

            </div>
            <div className={style.upper}>
            <div className={style.radio}>
<input type="radio" id="online" name="payment" value="online" ></input>
<label for="online">
Pay Online
<small>(Additional 5% prepaid discount on order above Rs.100)</small> </label>
<div className="">
<Image src="/images/card.png" height={70} width={200} layout="responsive" />
</div>

<div class="check"></div>
</div>

            </div>
            <div className={style.upper}>
            <div className={style.radio}>
<input type="radio" id="cash" name="payment" value="cash" ></input>
<label for="online">
Cash On Deleiver </label>
<div class="check"></div>
</div>
            </div>



        </div>
        <div className={style.rightcontainer}>
        <div className={style.checkoutitems}>
          <CheckoutItem/>
          <CheckoutItem/>

        </div>
        <div className={style.billpanal}>
                        <div className={style.bill}>
                      <div className={style2.billlevel}>
                <div>MRP</div>
                <div><span>2560</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Item Discount</div>
                <div>-  <span>423</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Net Price</div>
                <div> <span>2137</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Coupon discount </div>
                <div>-  <span>0</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Offer discount</div>
                <div>-<span>0</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Order total</div>
                <div><span>2137</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Delivery charges</div>
                <div><span>0</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Prepaid Discount</div>
                <div><span>106.85</span></div>
                </div>
                <div className={style2.billlevel}>
                <div>Total</div>
                <div> <span>2030.15</span></div>
                </div>
                

                                

                      </div>
        </div>

        </div>



    </div>

      

    </div>
    
    
    </>
  )
}
