import React from 'react'
import {ImgsStyle} from '../styles/styledBody'
const Imgs = ({setImage}) => {
    return (
        <ImgsStyle>
            {[1,2,3,4].map(elem => 
                <img 
                    src={`../../public/image-product-${elem}-thumbnail.jpg`} 
                    key={elem}
                    onClick={() => setImage(+elem)}
                />
            )}
        </ImgsStyle>
    )
}

export default Imgs
