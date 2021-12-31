var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(i,t,n)=>t in i?y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,h=(i,t)=>{for(var n in t||(t={}))C.call(t,n)&&f(i,n,t[n]);if(u)for(var n of u(t))k.call(t,n)&&f(i,n,t[n]);return i};import{s,W as j,C as S,j as g,r as l,a as z,R as $,b as M}from"./vendor.64ecd57f.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};L();var I="/ecommerce-product-page-main-Dani7uG/assets/image-avatar.88751761.png",b="/ecommerce-product-page-main-Dani7uG/assets/icon-cart.987a9f06.svg",D="/ecommerce-product-page-main-Dani7uG/assets/logo.5efe6b0e.svg",P="/ecommerce-product-page-main-Dani7uG/assets/icon-menu.cd0a0bcb.svg",E="/ecommerce-product-page-main-Dani7uG/assets/icon-close.22a11be2.svg";const G=s.div`
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
`,N=s.div`
    display:flex;
    justify-content:space-between;
    padding:0px 15px;
    align-items:center;
    p{
        margin:5px 0;
    }
`,A=s.p`
    text-align:center;
    margin:0;
    font-weight: bold;
    margin-top:60px;
    height: calc(100% - 75px);
    width: 100%;
    display:flex;
    justify-content: center;
`,R=j`
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
`,O=s.div`
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
            display:${i=>i.modal?"block":"none"};
            
        }
        ${i=>i.modal&&S`
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
`,W=s.div`
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
`,B=s.div`
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
`,H=s.div`
    @media (min-width: 762px) {
        display:grid;
        grid-template-columns: 35% 65%;
        place-items: center;
        grid-gap:20px;
        margin-top:20px;
    }
`,Y=s.div`
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
`,_=s.div`
    width: 100%;
    @media (min-width: 762px) {
        height: 700px;
        display:flex;
        flex-direction: column;
    }
`,q=s.div`
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
`,e=g.exports.jsx,o=g.exports.jsxs,x=g.exports.Fragment,K=({cart:i,setCart:t})=>o(G,{children:[e("div",{id:"cart_title",children:e("p",{children:"Cart"})}),i?o(x,{children:[o(N,{children:[e("img",{src:"./image-product-1-thumbnail.jpg",alt:""}),o("div",{children:[e("p",{children:"Fall Limited Edition Sneakers"}),o("div",{children:[o("span",{children:["$125.00 x ",i]}),o("b",{children:["$",125*i,".00"]})]})]}),e("img",{src:"./icon-delete.svg",alt:"",onClick:()=>t(0)})]}),e(w,{children:"Checkout"})]}):e(A,{children:"Your cart is empty"})]}),Q=s.header`
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
`,T=s.div`
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    z-index:${i=>i.close?"2":"-1"};
    background-color:${i=>i.close?"rgba(0,0,0,0.5)":"none"};
    transition: all .22s ease-out;
    #slide{
        width:${i=>i.close?"60%":"0"};
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
`,X=s.div`
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
        content:'${i=>i.cart}';
        color:#fff;
        font-size:12px;
        font-weight: bold;
        display:${i=>i.cart?"flex":"none"};
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
`,Z=({cart:i,setCart:t,openCart:n,setOpenCart:d})=>{const[r,a]=l.exports.useState(!1);return o(Q,{children:[o("div",{id:"infoCard",children:[e("img",{src:P,id:"Menu",onClick:()=>a(!0)}),e("img",{src:D,alt:"",id:"logo"}),e(T,{close:r,children:o("div",{id:"slide",children:[e("img",{src:E,id:"close",onClick:()=>a(!1)}),["Collections","Men","Women","About","Contact"].map((c,p)=>e("p",{children:c},p))]})})]}),o(X,{cart:i,children:[e("div",{id:"cart",children:e("img",{src:b,alt:"",onClick:()=>d(!n)})}),e("img",{src:I,alt:"",id:"avatar",onClick:()=>d(!n)}),n&&e(K,{cart:i,setCart:t,setOpenCart:d})]})]})},J=s.div`
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


`,U=({setImage:i})=>e(q,{children:[1,2,3,4].map(t=>e("img",{src:`./image-product-${t}-thumbnail.jpg`,onClick:()=>i(+t)},t))}),v=({image:i,setImage:t,setModal:n,modal:d})=>o(_,{children:[o(O,{num:`${i}`,modal:d,children:[e("img",{src:"./icon-previous.svg",className:"arrow",alt:"icon-Minus",onClick:()=>i>1&&t(i-1)}),e("img",{src:"./icon-next.svg",className:"arrow",alt:"icon-Plus",onClick:()=>i<4&&t(i+1)}),e("img",{className:"image",src:`./image-product-${i}.jpg`,onClick:()=>window.innerWidth>762&&n&&n(!0)})]}),e(U,{setImage:t})]});var V=({color:i,setModal:t})=>e("svg",{onClick:()=>t(!1),id:"close",width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fill:i||"#69707D",fillRule:"evenodd"})});const ii=({setModal:i})=>{const[t,n]=l.exports.useState(1);return e(x,{children:z.exports.createPortal(e(J,{children:o("div",{id:"contain",children:[e(V,{color:"#fff",setModal:i}),e(v,{modal:!0,setImage:n,image:t})]})}),document.getElementById("portal"))})};var ei="/ecommerce-product-page-main-Dani7uG/assets/icon-minus.7f289c13.svg",ti="/ecommerce-product-page-main-Dani7uG/assets/icon-plus.fd8d372c.svg";const ni=({cart:i,setCart:t,setOpenCart:n})=>{const[d,r]=l.exports.useState(1),[a,c]=l.exports.useState(0),[p,m]=l.exports.useState(!1);return o(F,{children:[e(v,{image:d,setImage:r,setModal:m}),o(W,{children:[e("b",{children:"SNEAKER COMPANY"}),e("h2",{children:"Fall Limited Edition Sneakers"}),e("p",{children:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber oter sole they'll withstand everything the weather can offer."}),o(B,{children:[o("div",{children:[e("p",{children:"$125.00"}),e("span",{children:"50%"})]}),e("p",{children:"$250.00"})]}),o(H,{children:[o(Y,{children:[e("img",{src:ei,alt:"",onClick:()=>a&&c(a-1)}),e("p",{children:a}),e("img",{src:ti,alt:"",onClick:()=>c(a+1)})]}),o(w,{onClick:()=>i!==a&&[t(a),n(!1)],children:[e("img",{src:b,alt:""}),"Add to cart"]})]}),window.innerWidth>762&&p&&e(ii,{setModal:m})]})]})};function oi(){const[i,t]=l.exports.useState(0),[n,d]=l.exports.useState(!1),r={cart:i,setCart:t,openCart:n,setOpenCart:d};return o(x,{children:[e(R,{}),o("div",{children:[e(Z,h({},r)),e(ni,h({},r))]})]})}$.render(e(M.StrictMode,{children:e(oi,{})}),document.getElementById("root"));
