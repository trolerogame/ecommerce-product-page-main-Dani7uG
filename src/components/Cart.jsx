import React from 'react'
import { ContainCart,ContainProduct,EmptyCart } from '../styles/styledCart'
import { AddCart } from '../styles/styledBody'
const Cart = ({cart,setCart}) => {
    return (
        <ContainCart>
            <div id='cart_title'>
                <p>Cart</p>
            </div>
            {cart ? 
                <>
                    <ContainProduct>
                        <img src='./image-product-1-thumbnail.jpg' alt="" />
                        <div>
                            <p>Fall Limited Edition Sneakers</p>
                            <div>
                                <span>$125.00 x {cart}</span>
                                <b>{`$`}{125 * cart}.00</b>
                            </div>
                        </div>
                        <img src='./icon-delete.svg' alt="" onClick={() => setCart(0)}/>
                    </ContainProduct>
                    <AddCart>Checkout</AddCart>
                </>
            :
            <EmptyCart>Your cart is empty</EmptyCart>
            }
        </ContainCart>
    )
}

export default Cart
