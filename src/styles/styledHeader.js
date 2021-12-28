import styled from 'styled-components'


export const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    background-color: #fff;
    height:60px;
    margin:0px -20px;
    img{
        margin:0 8px;
        cursor:pointer;
    }
    #containHeader{
        display:flex;
        justify-content:space-between;
        width: 100%;
        max-width: 1000px;
        padding:20px 30px 0 30px;
        height:100%;
    }
    #infoCard{
            display:flex;
            align-items:center;
        }
    @media (min-width: 762px) {
        #containHeader{
            border-bottom:4px solid hsl(223, 64%, 98%);
            padding:0;
            padding-top:20px;
        }
        #Menu,#close{
            display:none;
        }
        #logo{
            width:140px;
            height:20px;
        }
    }
`

export const ContainSlide = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    z-index:${props => props.close ? '2' : '-1'};
    background-color:${props => props.close ? 'rgba(0,0,0,0.5)' : 'none'};
    transition: all .22s ease-out;
    #slide{
        width:${props => props.close ? '60%' : '0'};
        overflow: hidden;
        height:100vh;
        background-color:#fff;
        padding:15px 0 0 0;
        transition: all .22s ease-out;
    }
    p{
        margin:15px 0;
        font-weight: 600;
    }
    img{
        margin:10px 0;
        margin-bottom:25px;
    }
    img,p{
        padding-left:25px;
    }
    @media (min-width: 762px) {
        position: static;
        height: auto;
        z-index: 2;
        background-color:none;
        #slide{
            width:100%;
            height:auto;
            display:flex;
            padding:0;
        }
        p{
            display:flex;
            position: relative;
            align-items: center;
            padding:0;
            margin:0 20px;
            color:hsl(219, 9%, 45%);
            font-weight: 300;
            width: 100%;
            height: 60px;
            cursor: pointer;
        }
        p::after{
            content: '';
            width:0;
            height: 3px;
            background-color:hsl(26, 100%, 55%);
            display:block;
            position:absolute;
            bottom:0;
            transition: all .1s linear;
        }
        p:hover{
            &::after{
                width: 100%;
            }
        }
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    img{
        display:inline;
        object-fit: cover;
        width: 27px;
        height: 25px;
    }
    #avatar{
        width:25px;
        height:25px;
    }
`