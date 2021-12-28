import styled,{createGlobalStyle} from 'styled-components'


export const StyleGlobal = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow-x: hidden;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
    }
`


export const ImageContain = styled.div`
    /* width: 100%; */
    height: 350px;
    margin-top:30px;
    object-fit: cover;
    background:url(${props => `../../public/image-product-${props.num}-thumbnail.jpg`}) no-repeat;
    background-position:50% 50%;
    background-size:100% 350px;
    position: relative;
    img{
        position: absolute;
        background:#fff;
        top:50%;
        transform: translateY(-50%);
        width: 18px;
        height: 18px;
        padding:10px;
        border-radius: 50%;
        cursor: pointer;
    }
    img:first-child{
        left:15px;
    }
    img:nth-child(2){
        right:15px;
    }
`
