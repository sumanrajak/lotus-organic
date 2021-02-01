import { useState, useEffect, useContext } from 'react'
import { Paper, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import Row from 'react-storefront/Row'
import Link from 'react-storefront/link/Link'
import QuantitySelector from 'react-storefront/QuantitySelector'
import { Hbox } from 'react-storefront/Box'
import Image from 'react-storefront/Image'
import SessionContext from 'react-storefront/session/SessionContext'
import RemoveDialog from './RemoveDialog'
import style from "../../styles/cart.module.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(2, 5, 2, 2),
    marginBottom: theme.spacing(2),
    position: 'relative',
  },
  thumb: {
    marginRight: theme.spacing(2),
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
  label: {
    marginRight: theme.spacing(0.6),
  },
  remove: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
})
const useStyles = makeStyles(styles)

export default function CartItem({ product, updateQuantity, remove }) {
  const [qnt, setQnt] = useState(1)
  const classes = useStyles()
  const incre=()=>{
    setQnt(qnt+1)
  }
  const decre=()=>{
    setQnt(qnt-1)
  }

  return (
    <>
    <div className={style.cartproduct}>
        <div className={style.cartuper}>
        <div className={style.imagepro}>
          <Image src="/images/categories.png" layout="responsive" />
          </div>
          <div className={style.proinfo}>
            <h3>Lotus Organics+ Sheer Brightening Mineral Sunscreen SPF 50 PA+++ (100 GM)</h3>
            <h5>345</h5>
            <div className={style.quantity}><div className={style.decre} onClick={decre} >-</div><div className={style.decre}>{qnt}</div><div className={style.decre} onClick={incre}>+</div></div>
          </div>
        </div>
        <div className={style.lower}>
            <div className={style.lowerbox}>
            <FavoriteBorderIcon/>
              <div className=""> wishlist</div></div>
            <div className={style.lowerbox}>
            <DeleteIcon></DeleteIcon><div className="">remove</div> </div>

        </div>


          
        </div>



      {/* <Paper className={classes.root} elevation={3}>
        <Hbox alignItems="flex-start">
          <div className={classes.thumb}>
            <Image src={product.thumbnail.src} fill aspectRatio={1} quality={50} />
          </div>
          <div className={classes.info}>
            <Link as={product.url} href="/p/[productId]" prefetch="visible" pageData={{ product }}>
              <a>
                <Typography variant="subtitle1">{product.name}</Typography>
              </a>
            </Link>
            <Typography className={classes.price}>{product.priceText}</Typography>
            {product.size && product.size.selected && (
              <Hbox>
                <Typography className={classes.label}>Size:</Typography>
                <Typography>{product.size.selected.text}</Typography>
              </Hbox>
            )}
            <Row>
              <Typography>Quantity:</Typography>
              <QuantitySelector
                value={product.quantity}
                onChange={quantity => updateQuantity(product, quantity)}
              />
            </Row>
          </div>
        </Hbox>
        <IconButton className={classes.remove} onClick={() => setOpen(true)}>
          <CloseIcon />
        </IconButton>
      </Paper>
      <RemoveDialog
        open={open}
        setOpen={setOpen}
        name={product.name}
        action={() => remove(product)}
      /> */}
    </>
  )
}
