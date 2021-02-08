import React from 'react'
import style from "../../styles/cmtcard.module.css"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.uperft} >
            <a  className={style.uperftl} href="https://www.lotus-organics.com/store-locator">Store Locator</a>
<a className={style.uperftl} href="https://www.lotus-organics.com/contact-us">Contact Us</a>
<a className={style.uperftl} href="https://www.lotus-organics.com/page/faqs" title="FAQ's">FAQ's</a>
<a className={style.uperftl} href="https://www.lotus-organics.com/page/csr-policy" title="CSR Policy">CSR Policy</a>
<a className={style.uperftl} href="https://www.lotus-organics.com/page/return-policy" title="Return Policy">Return Policy</a>
<a  className={style.uperftl}href="https://www.lotus-organics.com/page/privacy-policy" title="Privacy Policy">Privacy Policy</a>
<a  className={style.uperftl} href="https://www.lotus-organics.com/page/terms-conditions" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
            </div>
            <div className={style.lowerft}>
            <div className={style.midft} >
                <div className="">
                <a href="tel:1800-1200-6231" title="1800-1200-6231" className={style.midtl}> <PhoneIcon/>+91-9311262211</a>

                </div>
                <div className="">
                <a href="mailto:care@lotus-organics.com" className={style.midftl} title="care@lotus-organics.com" >
                <MailIcon/> care@lotus-organics.com</a>
                </div>
               
                

            </div>
            <div className={style.btmft}>
            <a href="https://www.instagram.com/lotus_organicsplus/"  className={style.lrl}> Follow us on <InstagramIcon/> </a>
                
            </div>
            </div>
            
        </div>
    )
}

export default Footer
