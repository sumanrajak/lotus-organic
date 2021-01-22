import React, { memo } from 'react'
import NavTab from 'react-storefront/nav/NavTab'
import NavTabs from 'react-storefront/nav/NavTabs'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import style from "../styles/nav.module.css"
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Link from "next/link"
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  link: {
    display: 'block',
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0,
    },
  },
}))

function NavBar({ tabs }) {
  const classes = useStyles()
  const [navbar, setnavbar] = useState(true);
    const click=()=>{
        setnavbar(!navbar)
    }

  return (
   <div>
<div  style={{width:"100%", zIndex:"1000",}}>
            <div className={style.upper} style={{}}>
                <div className={style.menubt}>
                <MenuIcon onClick={click} style={{cursor:"pointer"}}/>
                </div>
                <div className="logo">
                    
                    <Image src="/images/logo.png" width="100%" height="60"/>
                    
                    
                </div>
                <div className={style.optn}>
                <SearchIcon style={{marginRight:"2rem"}}/>
                    <ShoppingCartIcon style={{marginRight:"10px"}}/>
                </div>
            </div>
            <div className={style.lower}  >
                <ul style={{display:"flex", justifyContent:"space-between",listStyle:"none",fontFamily:"Myriad Pro",fontSize:"17px",cursor: "pointer",  padding:" 0 95px 5px" , color: "#444"}}>
                    <li>Skin Care</li>
                    <li>Gifting</li>
                    <li>Our Story</li>
                    <li>Our Ingrediant</li>
                    <li>Wishlist</li>
                    <li>My Order</li>
                </ul>
            </div>
            <div  className={navbar?style.dn:style.lay}>
            <div className={navbar?style.dn:style.sidebar}>
            <div className={style.user}>
                <div className="">
                <AccountCircleRoundedIcon className={style.useri} fontSize="large" style={{cursor:"pointer"}}/>
                </div>
                <div className="">
                    <p>Welcome Guest</p>
                </div>
            </div>
            <div className={style.navul}>
            <ul  style={{padding:"4px"}} >
                    <li className={style.navli}>
                        <div className="">Skin Care </div><div className="">+</div></li>
                    <li className={style.navli}><div className="">Giftinge </div><div className="">+</div></li>
                    <li className={style.navli}>Our Storye</li>
                    <li className={style.navli}>Our Ingrediante</li>
                    <li className={style.navli}>Wishliste</li>
                    <li className={style.navli}>My Ordere</li>
                </ul>
                </div>
            </div>
            <div className={style.cross}>
            <ClearIcon onClick={click} style={{cursor:"pointer" ,color:"white"}}/>

                </div></div>
            <div  style={{backgroundColor: "#78a442", textAlign:"center" ,width:"100%"  ,height:"auto"}}><p style={{color:"white",height:"auto", width:"100%", fontSize:"15px", fontFamily:"myriadpro-regular"}}>Get 5% Additional Off on All Prepaid Orders | Free shipping on all orders |
</p></div>
        </div>



   </div>  
  )
}

NavBar.defaultProps = {
  tabs: [],
}

export default memo(NavBar)
