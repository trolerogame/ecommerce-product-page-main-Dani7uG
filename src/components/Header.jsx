import React,{useState} from 'react'
import avatar from '../../public/image-avatar.png'
import iconCart from '../../public/icon-cart.svg'
import logo from '../../public/logo.svg'
import iconMenu from '../../public/icon-menu.svg'
import iconClose from '../../public/icon-close.svg'
import { HeaderStyle,CardHeader,ContainSlide } from '../styles/styledHeader'
const Header = () => {
    const [close,setClose] = useState(false)
    return (
        <HeaderStyle>
            <div id="containHeader">
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
                <CardHeader>
                    <img src={iconCart} alt="" />
                    <img src={avatar} alt="" id='avatar' />    
                </CardHeader>     
            </div>  
        </HeaderStyle>
    )
}

export default Header
