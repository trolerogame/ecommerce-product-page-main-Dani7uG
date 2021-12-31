import React from 'react'
import {ImageContain,ContainImgs} from '../styles/styledBody'
import Imgs from './Imgs'
const ImgProduct = ({image,setImage,setModal,modal}) => {
    return (
        <ContainImgs>
            <ImageContain num={`${image}`} modal={modal}>
                <img src='./icon-previous.svg' className="arrow" alt="icon-Minus" onClick={() => image > 1 && setImage(image - 1)} />
                <img src='./icon-next.svg' className="arrow" alt="icon-Plus" onClick={() => image < 4 && setImage(image + 1)}/>
                <img 
                    className='image' 
                    src={`./image-product-${image}.jpg`} 
                    onClick={() => window.innerWidth > 762 && setModal && setModal(true)}
                />
            </ImageContain>
            <Imgs setImage={setImage}/>
        </ContainImgs>
    )
}

export default ImgProduct
