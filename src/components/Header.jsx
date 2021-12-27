import React from 'react'
import avatar from '../../public/image-avatar.svg'
const Header = () => {
    return (
        <header>
            <div>
                <img src="" alt="" />
                <img src='' alt="" />
                <div>
                    {['Collections','Men','Women','About','Contact'].map((elem,i) => 
                        <p key={i}>{elem}</p>
                    )}
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />    
            </div>   
        </header>
    )
}

export default Header
