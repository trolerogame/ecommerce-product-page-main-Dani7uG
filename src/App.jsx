import React,{useState} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {StyleGlobal} from './styles/styledBody'
function App() {
  const [cart,setCart] = useState(0)
  const [openCart,setOpenCart] = useState(false)
  const states = {cart,setCart,openCart,setOpenCart}
  return (
    <>
    <StyleGlobal/>
    <div>
      <Header {...states} />
      <Body {...states} />
    </div>
    </>
  )
}

export default App
