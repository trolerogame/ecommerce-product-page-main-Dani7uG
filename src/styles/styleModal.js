import styled from 'styled-components'


export const ModalStyle = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display:grid;
    place-content: center center;
    z-index:10px;
    background-color:rgba(0,0,0,0.7);
    #close{
        display:flex;
        cursor: pointer;
        justify-content: center;
        position: absolute;
        right:0;
        top:0px;
    }
    #contain{
        position: relative;
    }


`