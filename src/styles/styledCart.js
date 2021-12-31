import styled from 'styled-components'

export const ContainCart = styled.div`
    position: absolute;
    width:330px;
    height: 200px;
    background-color: #fff;
    bottom: -210px;
    /* right:0px; */
    left:50%;
    transform:translateX(-50%);
    z-index:2;
    border-radius:10px;
    box-shadow: -1px 8px 18px -4px rgba(0,0,0,0.39);
    -webkit-box-shadow: -1px 8px 18px -4px rgba(0,0,0,0.39);
    -moz-box-shadow: -1px 8px 18px -4px rgba(0,0,0,0.39);
    #cart_title p{
        margin:0;
        margin-bottom:15px;
        padding-left:15px;
        font-weight: bold;
    }
    #cart_title{
        border-bottom:1px solid gray;
        margin:20px 0;
        display:flex;
        align-items: center;
    }
    img{
        width: 20px;
        height: 25px;
        object-fit: cover;
        cursor:pointer;
    }
    img:first-child{
        width:30px;
        height: 30px;
    }
    button{
        width:calc(100% - 40px);
        height:40px;
        margin:0 20px;
        margin-top:15px;
    }
    @media (min-width: 400px) {
        left:unset;
        right: -160px;
    }
`

export const ContainProduct = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0px 15px;
    align-items:center;
    p{
        margin:5px 0;
    }
`

export const EmptyCart = styled.p`
    text-align:center;
    margin:0;
    font-weight: bold;
    margin-top:60px;
    height: calc(100% - 75px);
    width: 100%;
    display:flex;
    justify-content: center;
`