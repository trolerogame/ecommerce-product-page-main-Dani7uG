import React,{useState} from 'react'
import { createPortal } from 'react-dom'
import { ModalStyle } from '../styles/styleModal.js'
import ImgProduct from './ImgProduct'
import IconClose from './IconClose'
const Modal = ({setModal}) => {
    const [image,setImage] = useState(1)
    return (
        <>
           {createPortal(
                <ModalStyle>
                    <div id='contain'>
                        <IconClose color={'#fff'} setModal={setModal}/>
                        <ImgProduct modal setImage={setImage} image={image} />
                    </div>
                </ModalStyle>
            ,document.getElementById('portal')
           )}
        </>
    )
}

export default Modal
