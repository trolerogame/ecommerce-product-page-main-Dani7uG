import React,{useState} from 'react'
import Modal from './Modal'
import ImgProduct from './ImgProduct'
import iconNext from '../../public/icon-next.svg'
import iconPrevious from '../../public/icon-previous.svg'
import iconMinus from '../../public/icon-minus.svg'
import iconPlus from '../../public/icon-plus.svg'
import iconCart from '../../public/icon-cart.svg'
import { ContainInfoImage,Prices,Count,AddCart,Main,ContainCount } from '../styles/styledBody'
const Body = ({cart,setCart,setOpenCart}) => {
    const [image,setImage] = useState(1)
    const [quantity,setQuantity] = useState(0)
    const [modal,setModal] = useState(false)
    return (
        <Main>
            <ImgProduct image={image} setImage={setImage} setModal={setModal} />
            <ContainInfoImage>
                <b>SNEAKER COMPANY</b>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber oter sole they'll withstand everything the weather can offer.</p>
                <Prices>
                    <div>
                        <p>$125.00</p>
                        <span>50%</span>
                    </div>
                    <p>$250.00</p>
                </Prices>
                <ContainCount>
                    <Count>
                        <img src={iconMinus} alt="" onClick={() => quantity && setQuantity(quantity - 1)} />
                        <p>{quantity}</p>
                        <img src={iconPlus} alt="" onClick={() => setQuantity(quantity + 1)}/>
                    </Count>
                    <AddCart onClick={() => cart !== quantity && [setCart(quantity),setOpenCart(false)]}>
                        <img src={iconCart} alt="" />
                        Add to cart
                    </AddCart>
                </ContainCount>
                {window.innerWidth > 762 && modal && <Modal setModal={setModal}/>}
            </ContainInfoImage>
        </Main>
    )
}

export default Body
