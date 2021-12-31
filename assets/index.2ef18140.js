var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))k.call(t,n)&&f(e,n,t[n]);return e};import{s,W as j,j as g,r as l,a as S,R as z,b as M}from"./vendor.0809a557.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};L();var $="/ecommerce-product-page-main-Dani7uG/assets/image-avatar.88751761.png",b="/ecommerce-product-page-main-Dani7uG/assets/icon-cart.987a9f06.svg",I="/ecommerce-product-page-main-Dani7uG/assets/logo.5efe6b0e.svg",D="/ecommerce-product-page-main-Dani7uG/assets/icon-menu.cd0a0bcb.svg",P="/ecommerce-product-page-main-Dani7uG/assets/icon-close.22a11be2.svg";const E=s.div`
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
`,G=s.div`
    display:flex;
    justify-content:space-between;
    padding:0px 15px;
    align-items:center;
    p{
        margin:5px 0;
    }
`,N=s.p`
    text-align:center;
    margin:0;
    font-weight: bold;
    margin-top:60px;
    height: calc(100% - 75px);
    width: 100%;
    display:flex;
    justify-content: center;
`,A=j`
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

`,F=s.main`
    @media (min-width: 762px){
        display:flex;
        margin-top:150px;
        gap: 120px;
    }
`,R=s.div`
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
            display:none;
        }
        .image{
            height:500px;
            border-radius:30px;
            cursor: pointer;
        }
    }
`,O=s.div`
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
`,W=s.div`
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
`,B=s.div`
    @media (min-width: 762px) {
        display:grid;
        grid-template-columns: 35% 65%;
        place-items: center;
        grid-gap:20px;
        margin-top:20px;
    }
`,H=s.div`
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
`,w=s.button`
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
`,Y=s.div`
    width: 100%;
    @media (min-width: 762px) {
        height: 700px;
        display:flex;
        flex-direction: column;
    }
`,_=s.div`
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
`,i=g.exports.jsx,o=g.exports.jsxs,x=g.exports.Fragment,q=({cart:e,setCart:t})=>o(E,{children:[i("div",{id:"cart_title",children:i("p",{children:"Cart"})}),e?o(x,{children:[o(G,{children:[i("img",{src:"../../public/image-product-1-thumbnail.jpg",alt:""}),o("div",{children:[i("p",{children:"Fall Limited Edition Sneakers"}),o("div",{children:[o("span",{children:["$125.00 x ",e]}),o("b",{children:["$",125*e,".00"]})]})]}),i("img",{src:"../../public/icon-delete.svg",alt:"",onClick:()=>t(0)})]}),i(w,{children:"Checkout"})]}):i(N,{children:"Your cart is empty"})]}),K=s.header`
    display:flex;
    justify-content:space-between;
    width: 100%;
    padding:0px 30px 0 30px;
    height:60px;
    margin:0 -30px;
    position:relative;
    img{
        margin:0 8px;
        cursor:pointer;
    }
    #infoCard{
        display:flex;
        align-items: center;
    }
    @media (min-width: 762px) {
        border-bottom:4px solid hsl(223, 64%, 98%);
        padding:0;
        margin:0;
        #Menu,#close{
            display:none;
        }
        
        #logo{
            width:140px;
            height:20px;
        }
    }
`,Q=s.div`
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    z-index:${e=>e.close?"2":"-1"};
    background-color:${e=>e.close?"rgba(0,0,0,0.5)":"none"};
    transition: all .22s ease-out;
    #slide{
        width:${e=>e.close?"60%":"0"};
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
            background: none;
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
`,T=s.div`
    display: flex;
    align-items: center;
    /* position: relative; */
    img{
        display:inline;
        object-fit: cover;
        width: 27px;
        height: 25px;
    }
    #cart{
        position:relative;      
    }
    #cart::after{
        content:'${e=>e.cart}';
        color:#fff;
        font-size:12px;
        font-weight: bold;
        display:${e=>e.cart?"flex":"none"};
        align-items: center;
        justify-content: center;
        width:20px;
        height: 15px;
        background: orange;
        position:absolute;
        right:5px;
        top:-5px;
        border-radius:50%;
    }
    #avatar{
        width:25px;
        height:25px;
    }
`,X=({cart:e,setCart:t,openCart:n,setOpenCart:c})=>{const[r,a]=l.exports.useState(!1);return o(K,{children:[o("div",{id:"infoCard",children:[i("img",{src:D,id:"Menu",onClick:()=>a(!0)}),i("img",{src:I,alt:"",id:"logo"}),i(Q,{close:r,children:o("div",{id:"slide",children:[i("img",{src:P,id:"close",onClick:()=>a(!1)}),["Collections","Men","Women","About","Contact"].map((d,p)=>i("p",{children:d},p))]})})]}),o(T,{cart:e,children:[i("div",{id:"cart",children:i("img",{src:b,alt:"",onClick:()=>c(!n)})}),i("img",{src:$,alt:"",id:"avatar",onClick:()=>c(!n)}),n&&i(q,{cart:e,setCart:t,setOpenCart:c})]})]})},Z=s.div`
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


`,J=({setImage:e})=>i(_,{children:[1,2,3,4].map(t=>i("img",{src:`../../public/image-product-${t}-thumbnail.jpg`,onClick:()=>e(+t)},t))}),v=({image:e,setImage:t,setModal:n})=>o(Y,{children:[o(R,{num:`${e}`,children:[i("img",{src:"../../public/icon-previous.svg",className:"arrow",alt:"icon-Minus",onClick:()=>e>1&&t(e-1)}),i("img",{src:"../../public/icon-next.svg",className:"arrow",alt:"icon-Plus",onClick:()=>e<4&&t(e+1)}),i("img",{className:"image",src:`../../public/image-product-${e}.jpg`,onClick:()=>window.innerWidth>762&&n&&n(!0)})]}),i(J,{setImage:t})]});var U=({color:e,setModal:t})=>i("svg",{onClick:()=>t(!1),id:"close",width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fill:e||"#69707D","fill-rule":"evenodd"})});const V=({setModal:e})=>{const[t,n]=l.exports.useState(1);return i(x,{children:S.exports.createPortal(i(Z,{children:o("div",{id:"contain",children:[i(U,{color:"#fff",setModal:e}),i(v,{setImage:n,image:t})]})}),document.getElementById("portal"))})};var ii="/ecommerce-product-page-main-Dani7uG/assets/icon-minus.7f289c13.svg",ei="/ecommerce-product-page-main-Dani7uG/assets/icon-plus.fd8d372c.svg";const ti=({cart:e,setCart:t,setOpenCart:n})=>{const[c,r]=l.exports.useState(1),[a,d]=l.exports.useState(0),[p,m]=l.exports.useState(!1);return o(F,{children:[i(v,{image:c,setImage:r,setModal:m}),o(O,{children:[i("b",{children:"SNEAKER COMPANY"}),i("h2",{children:"Fall Limited Edition Sneakers"}),i("p",{children:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber oter sole they'll withstand everything the weather can offer."}),o(W,{children:[o("div",{children:[i("p",{children:"$125.00"}),i("span",{children:"50%"})]}),i("p",{children:"$250.00"})]}),o(B,{children:[o(H,{children:[i("img",{src:ii,alt:"",onClick:()=>a&&d(a-1)}),i("p",{children:a}),i("img",{src:ei,alt:"",onClick:()=>d(a+1)})]}),o(w,{onClick:()=>e!==a&&[t(a),n(!1)],children:[i("img",{src:b,alt:""}),"Add to cart"]})]}),window.innerWidth>762&&p&&i(V,{setModal:m})]})]})};function ni(){const[e,t]=l.exports.useState(0),[n,c]=l.exports.useState(!1),r={cart:e,setCart:t,openCart:n,setOpenCart:c};return o(x,{children:[i(A,{}),o("div",{children:[i(X,h({},r)),i(ti,h({},r))]})]})}z.render(i(M.StrictMode,{children:i(ni,{})}),document.getElementById("root"));
