import React,{useState} from 'react'
import iconNext from '../../public/icon-next.svg'
import iconPrevious from '../../public/icon-previous.svg'
import iconMinus from '../../public/icon-minus.svg'
import iconPlus from '../../public/icon-plus.svg'
import iconCart from '../../public/icon-cart.svg'
import { ImageContain } from '../styles/styledBody'
const Body = () => {
    const [image,setImage] = useState(1)
    return (
        <div>
            <ImageContain num={`${image}`}>
                <img src={iconPrevious} alt="" />
                <img src={iconNext} alt="" />
            </ImageContain>
            <div>
                <p>SNEAKER COMPANY</p>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber oter sole they'll withstand everything the weather can offer.</p>
                <div>
                    <p>$125.00</p>
                    <span>50%</span>
                    <span>$250.00</span>
                </div>
                <div>
                    <img src={iconMinus} alt="" />
                    <p>0</p>
                    <img src={iconPlus} alt="" />
                </div>
                <button>
                    <img src={iconCart} alt="" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Body
