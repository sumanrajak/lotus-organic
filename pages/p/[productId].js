import React, { useContext, useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import qs from 'qs'
import style from "../../styles/product.module.css"
import useLazyState from 'react-storefront/hooks/useLazyState'
import Breadcrumbs from 'react-storefront/Breadcrumbs'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

import CmsSlot from 'react-storefront/CmsSlot'
import MediaCarousel from 'react-storefront/carousel/MediaCarousel'
import PWAContext from 'react-storefront/PWAContext'
import { Container, Grid, Typography, Hidden, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Row from 'react-storefront/Row'
import { Hbox } from 'react-storefront/Box'
import Label from 'react-storefront/Label'
import Rating from 'react-storefront/Rating'
import get from 'lodash/get'
import fetch from 'react-storefront/fetch'
import { fetchLatest, StaleResponseError } from 'react-storefront/utils/fetchLatest'
import SessionContext from 'react-storefront/session/SessionContext'
import AddToCartConfirmation from '../../components/product/AddToCartConfirmation'
import SuggestedProducts from '../../components/product/SuggestedProducts'
import Lazy from 'react-storefront/Lazy'
import TabPanel from 'react-storefront/TabPanel'
import QuantitySelector from 'react-storefront/QuantitySelector'
import ProductOptionSelector from 'react-storefront/option/ProductOptionSelector'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
import createLazyProps from 'react-storefront/props/createLazyProps'

const fetchVariant = fetchLatest(fetch)

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      func()
    } else {
      didMount.current = true
    }
  }, deps)
}

const styles = theme => ({
  carousel: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -2),
      width: '100vw',
    },
  },
  lightboxCarousel: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100%',
    },
  },
  confirmation: {
    padding: '2px 0',
  },
  dockedSnack: {
    [theme.breakpoints.down('xs')]: {
      left: '0',
      bottom: '0',
      right: '0',
    },
  },
  docked: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      padding: `${theme.spacing(2)}px`,
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 10,
      borderRadius: '0',
    },
  },
  noShadow: {
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none',
    },
  },
})

const useStyles = makeStyles(styles)




const Product = React.memo(lazyProps => {
  const theme = useTheme()
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [addToCartInProgress, setAddToCartInProgress] = useState(false)
  const [state, updateState] = useLazyState(lazyProps, {
    pageData: { quantity: 1, carousel: { index: 0 } },
  })
  const scrollupdate=()=>{
    console.log(window.scrollY)
    
   };
const [scrolll, setscrolll] = useState('false')

  useEffect(() => {
    const scrollupdate2=()=>{
     
      if(window.scrollY<=1319){
        setscrolll(true);
        console.log(scrolll)
      }else{
        setscrolll(false);
        console.log(scrolll)
      }
     };
  
    window.addEventListener('scroll', scrollupdate2);
  }, )
   
   

  const classes = useStyles()
  const product = get(state, 'pageData.product') || {}
  const color = get(state, 'pageData.color') || {}
  const size = get(state, 'pageData.size') || {}
  const quantity = get(state, 'pageData.quantity')
  const { actions } = useContext(SessionContext)
  const { loading } = state

  // This is provided when <ForwardThumbnail> is wrapped around product links
  const { thumbnail } = useContext(PWAContext)

  // Adds an item to the cart
  const handleSubmit = async event => {
    event.preventDefault() // prevent the page location from changing
    setAddToCartInProgress(true) // disable the add to cart button until the request is finished

    try {
      // send the data to the server
      await actions.addToCart({
        product,
        quantity,
        color: color.id,
        size: size.id,
      })

      // open the confirmation dialog
      setConfirmationOpen(true)
    } finally {
      // re-enable the add to cart button
      setAddToCartInProgress(false)
    }
  }

  const header = (
    <Row>
      <Typography variant="h6" component="h1" gutterBottom>
        {product ? product.name : <Skeleton style={{ height: '1em' }} />}
      </Typography>
      <Hbox>
        <Typography style={{ marginRight: theme.spacing(2) }}>{product.priceText}</Typography>
        <Rating value={product.rating} reviewCount={10} />
      </Hbox>
    </Row>
  )

  // Fetch variant data upon changing color or size options
  useDidMountEffect(() => {
    const query = qs.stringify({ color: color.id, size: size.id }, { addQueryPrefix: true })
    fetchVariant(`/api/p/${product.id}${query}`)
      .then(res => res.json())
      .then(data => {
        return updateState({ ...state, pageData: { ...state.pageData, ...data.pageData } })
      })
      .catch(e => {
        if (!StaleResponseError.is(e)) {
          throw e
        }
      })
  }, [color.id, size.id])

  return (
    <>
      <Breadcrumbs items={!loading && state.pageData.breadcrumbs} />
      <div >
        <form onSubmit={handleSubmit} method="post" action-xhr="/api/cart">
        <div className={style.buttombar}>
        <div className={style.cardbutton2}>
                <button className={style.buttonadd}>ADD TO CART</button>

                </div>
            <div className={style.cardbutton2}>
                <button className={style.button}>BUY NOW</button>

                </div>

        </div>
        <div className={style.container}>
            <div className={style.upper}>
            <div  className={style.slider} >
            <div className={scrolll?style.slideriner:style.slideriner2}>
            <Carousel style={{}}>
  <Carousel.Item interval={800}>
  <Image src="/images/mobslid.png" width="450px" height="450px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={800}>
  <Image src="/images/mobslid2.png" width="450px" height="450px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item interval={800}>
   <Image src="/images/mobslid3.png"  width="450px" height="450px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
<div className="" style={{ display:"flex", justifyContent:"space-between"}}>
<div className={style.cardbutton}>
                <button className={style.buttonadd} onClick={scrollupdate}>ADD TO CART</button>

                </div><div className={style.cardbutton}>
                <button className={style.button}>BUY NOW</button>

                </div>
        </div>
        </div>
        </div>
        
            <div className={style.side}>
                <div className="">
                {product ? product.name : <Skeleton style={{ height: '1em' }} />}
                </div>
                <div className="">
                <Rating value={product.rating} reviewCount={10} />
                </div>
                <div className="">
                {product.description}
                <br></br>
                {product.specs}
                </div>
                <div className={style.cardprice}>
            <h4 className={style.oldr}> ₹</h4><h4 className={style.old}>{product.priceText}</h4>
            <h4 className={style.new}>₹{product.priceText}</h4>
            </div>
            <div class={style.offers_strip}>Offers Available
        <div class={style.offers_value}>
        <ul class={style.offers_value_table}>
        <li class={style.offers_value_list}>Get 8% EXTRA Discount on prepaid orders</li>
        <li class={style.offers_value_list}>Get Complimentary Divine Soothing Hand Creme on Purchase Value of more than Rs 2000</li>
        </ul>
        </div>
        </div>
        <div className={style.product_cnt}>
        <div className={style.head}>
          <span>KEY BENIFITS</span>
        </div>
        <div className={style.key_benifit}>

          <div className={style.card}>
          <Image src="/images/face.png"width="310px" height="300px"/>

            <strong>Exfoliate dead skin cells</strong><br></br>
            This unique formulation removes dead skin cells and draws out deep rooted impurities , 
            thereby unclogging pores and revealing a cleaner and smoother skin.


          </div>
          <div className={style.card}>
            
          <Image src="/images/face.png"width="310px" height="300px"/>

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
          <Image src="/images/face.png"width="310px" height="300px"/>
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
                
            </div>

            </div>
            
        </div>
        
          {/* <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
              <Hidden implementation="css" smUp>
                {header}
              </Hidden>
             
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Hidden implementation="css" xsDown>
                    <div style={{ paddingBottom: theme.spacing(1) }}>{header}</div>
                  </Hidden>
                  {product ? (
                    <>
                      <Hbox style={{ marginBottom: 10 }}>
                        <Label>COLOR: </Label>
                        <Typography>{color.text}</Typography>
                      </Hbox>
                      <ProductOptionSelector
                        options={product.colors}
                        value={color}
                        onChange={value =>
                          updateState({ ...state, pageData: { ...state.pageData, color: value } })
                        }
                        strikeThroughDisabled
                        optionProps={{
                          showLabel: false,
                        }}
                      />
                    </>
                  ) : (
                    <div>
                      <Skeleton style={{ height: 14, marginBottom: theme.spacing(2) }}></Skeleton>
                      <Hbox>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                      </Hbox>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {product ? (
                    <>
                      <Hbox style={{ marginBottom: 10 }}>
                        <Label>SIZE: </Label>
                        <Typography>{size.text}</Typography>
                      </Hbox>
                      <ProductOptionSelector
                        options={product.sizes}
                        value={size}
                        strikeThroughDisabled
                        onChange={value =>
                          updateState({ ...state, pageData: { ...state.pageData, size: value } })
                        }
                      />
                    </>
                  ) : (
                    <div>
                      <Skeleton style={{ height: 14, marginBottom: theme.spacing(2) }}></Skeleton>
                      <Hbox>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                      </Hbox>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Hbox>
                    <Label>QTY:</Label>
                    <QuantitySelector
                      value={quantity}
                      onChange={value =>
                        updateState({ ...state, pageData: { ...state.pageData, quantity: value } })
                      }
                    />
                  </Hbox>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    key="button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    data-th="add-to-cart"
                    className={clsx(classes.docked, classes.noShadow)}
                    disabled={addToCartInProgress}
                  >
                    Add to Cart
                  </Button>
                  <AddToCartConfirmation
                    open={confirmationOpen}
                    setOpen={setConfirmationOpen}
                    product={product}
                    color={color}
                    size={size}
                    quantity={quantity}
                    price={product.priceText}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid item xs={12}>
            <TabPanel>
              <CmsSlot label="Description">{product.description}</CmsSlot>
              <CmsSlot label="Specs">{product.specs}</CmsSlot>
            </TabPanel>
          </Grid> */}
          <Grid item xs={12}>
            <Lazy style={{ minHeight: 285 }}>
              <SuggestedProducts product={product} />
            </Lazy>
          </Grid>
        </form>
      </div>
    </>
  )
})

Product.getInitialProps = createLazyProps(fetchFromAPI)

export default Product
