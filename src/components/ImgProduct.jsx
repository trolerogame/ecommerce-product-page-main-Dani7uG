import React from 'react'
import {ImageContain,ContainImgs} from '../styles/styledBody'
import Imgs from './Imgs'
const ImgProduct = ({image,setImage,setModal}) => {
    return (
        <ContainImgs>
            <ImageContain num={`${image}`}>
                <img src='../../public/icon-previous.svg' className="arrow" alt="icon-Minus" onClick={() => image > 1 && setImage(image - 1)} />
                <img src='../../public/icon-next.svg' className="arrow" alt="icon-Plus" onClick={() => image < 4 && setImage(image + 1)}/>
                <img 
                    className='image' 
                    src={`../../public/image-product-${image}.jpg`} 
                    onClick={() => window.innerWidth > 762 && setModal && setModal(true)}
                />
            </ImageContain>
            <Imgs setImage={setImage}/>
        </ContainImgs>
    )
}

export default ImgProduct
