import styled,{createGlobalStyle,css} from 'styled-components'


export const StyleGlobal = createGlobalStyle`
    html{
        margin: auto;
        max-width:150ch;
        height: 100vh;
    }
    body{
        padding: 0;
        margin:0;
        overflow-x: hidden;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
    }

`

export const Main = styled.main`
    @media (min-width: 762px){
        display:flex;
        margin-top:150px;
        gap: 120px;
    }
`


export const ImageContain = styled.div`
    width: 100%;
    height: 350px;
    margin-top:30px;
    object-fit: cover;
    position: relative;
    .image{
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
    .arrow{
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
    .arrow:first-child{
        left:15px;
    }
    .arrow:nth-child(2){
        right:15px;
    }
    @media (min-width: 762px) {
        .arrow{
            display:${props => props.modal ? 'block' : 'none'};
            
        }
        ${props => props.modal && css`
            .arrow:first-child {
                left:-18px;
            }    
            .arrow:nth-child(2) {
                right:-18px;
            }
            .arrow{
                top:250px;
            }

        `}
        .image{
            height:500px;
            border-radius:30px;
            cursor: pointer;
        }
    }
`

export const ContainInfoImage = styled.div`
    padding:60px 30px 15px 30px;
    b{
        color:hsl(26, 100%, 55%);
    }
    h2{
        font-size:26px;
        margin:10px 0;
    }
    p{
        line-height:25px;
    }
    @media (min-width: 762px) {
        padding-top:100px;
        b{
            font-size:20px;
        }
        h2{
            font-size:45px;
            margin:20px 0;
        }
        p{
            font-size:20px;
        }
    }
`

export const Prices = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:30px;
    p{
        display:inline;
        margin:0;
    }
    p:first-child{
        font-size:25px;
        font-weight: bold;
    }
    p:nth-child(2){
        font-size:20px;
        color:gray;
        text-decoration: line-through;
    }
    span{
        font-size:18px;
        margin:0 20px;
        color:hsl(26, 100%, 55%);
        font-weight: 600;
        background-color:hsl(25, 100%, 94%);
        padding:2px 7px;
        border-radius:5px;
    }
    @media (min-width: 762px) {
        flex-direction: column;
        p{
            margin:10px 0;
        }
        p:nth-child(1){
            font-size:30px!important;
        }
    }
`

export const ContainCount = styled.div`
    @media (min-width: 762px) {
        display:grid;
        grid-template-columns: 35% 65%;
        place-items: center;
        grid-gap:20px;
        margin-top:20px;
    }
`

export const Count = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    width: calc(100% - 40px);
    margin-top:25px;
    height: 60px;
    padding:0 20px;
    background:hsl(223, 64%, 98%);
    border-radius:10px;
    img{
        cursor:pointer;
        padding:10px;
    }
    p{
        font-size:20px;
        font-weight: bold;
    }
    @media (min-width: 762px) {
        margin-top:0;
    }
`

export const AddCart = styled.button`
    border:none;
    outline:none;
    width:100%;
    height: 60px;
    background: hsl(26, 100%, 55%);
    text-align:center;
    border-radius:10px;
    margin-top:10px;
    color:#fff;
    font-size:20px;
    cursor: pointer;
    img{
        margin-right: 10px;
        width: 20px;
        height: 18px;
        filter: brightness(1000%);
    }
    @media (min-width: 762px) {
        margin-top:0;
        width: calc(100% - 20px);
        margin-right: 20px;
    }
`

export const ContainImgs = styled.div`
    width: 100%;
    @media (min-width: 762px) {
        height: 700px;
        display:flex;
        flex-direction: column;
    }
`

export const ImgsStyle = styled.div`
    display:none;
    @media (min-width: 762px){
        width: 100%;
        height:100%;
        margin-top:120px;
        display: flex;
        align-items: center;
        justify-content:space-between;
        img{
            width: 100px;
            border-radius:12px;
            cursor: pointer;
            transition: all .1s linear;
        }
        img:hover{
            outline:3px solid hsl(26, 100%, 55%);
            opacity:.5;
        }
    }
`