import React,{useState} from 'react'
import avatar from './image-avatar.png'
import iconCart from './icon-cart.svg'
import logo from './logo.svg'
import iconMenu from './icon-menu.svg'
import iconClose from './icon-close.svg'
import Cart from './Cart'
import { HeaderStyle,CardHeader,ContainSlide } from '../styles/styledHeader'
const Header = ({cart,setCart,openCart,setOpenCart}) => {
    const [close,setClose] = useState(false)
    return (
        <HeaderStyle>
            <div id="infoCard">
                <img src={iconMenu} id='Menu' onClick={() => setClose(true)} />
                <img src={logo} alt="" id='logo' />
                <ContainSlide close={close}>
                    <div id='slide'>
                        <img src={iconClose} id='close' onClick={() => setClose(false)} />
                        {['Collections','Men','Women','About','Contact'].map((elem,i) => 
                            <p key={i}>{elem}</p>
                        )}
                    </div>
                </ContainSlide>
            </div>
            <CardHeader cart={cart}>
                <div id='cart'>
                    <img src={iconCart} alt="" onClick={() => setOpenCart(!openCart)} />
                </div>
                <img src={avatar} alt="" id='avatar' onClick={() => setOpenCart(!openCart)} />    
                { openCart && <Cart cart={cart} setCart={setCart} setOpenCart={setOpenCart}/>}
            </CardHeader>     
        </HeaderStyle>
    )
}

export default Header
