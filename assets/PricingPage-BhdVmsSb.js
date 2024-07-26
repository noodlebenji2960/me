import{r as x,j as o,B as g,H as w,T as P,f as z,U as L,L as C,F,C as T,b as U,s as Y,d as W,u as Q,t as R,v as _,w as b,x as t,y as e,z as q,i as J,g as K}from"./main-oT4xNV1O.js";import{G as X,A as Z}from"./AddOns-BPqdj0SL.js";import{F as E,I as S}from"./chunk-6CVSDS6C-DpgN64uF.js";import"./chunk-5MKCW436-Bc2h0xgh.js";const ee=({pricingTiers:n,selectedTier:s,isChecked:a,setIsChecked:j})=>{var d,c,p,N;const[l,u]=x.useState({name:"",email:"",phone:""}),i=m=>{const{name:f,value:v}=m.target;u({...l,[f]:v})};return o.jsxDEV(g,{textAlign:"left",children:[o.jsxDEV(w,{as:"h3",size:"md",mb:2,children:(d=n[s])==null?void 0:d.title},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:40,columnNumber:7},void 0),o.jsxDEV(P,{fontWeight:"bold",fontSize:"2xl",mb:4,children:(c=n[s])==null?void 0:c.price},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:43,columnNumber:7},void 0),o.jsxDEV(z,{spacing:0,mb:4,align:"left",children:o.jsxDEV(L,{children:(p=n[s])==null?void 0:p.features.map((m,f)=>o.jsxDEV(C,{fontSize:"sm",children:m},f,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:49,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:47,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:46,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(E,{htmlFor:"name",children:"Name"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:56,columnNumber:9},void 0),o.jsxDEV(S,{id:"name",name:"name",type:"text",value:l.name,onChange:i},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:57,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:55,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(E,{htmlFor:"email",children:"Email"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:66,columnNumber:9},void 0),o.jsxDEV(S,{id:"email",name:"email",type:"email",value:l.email,onChange:i},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:65,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(E,{htmlFor:"phone",children:"Phone"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:76,columnNumber:9},void 0),o.jsxDEV(S,{id:"phone",name:"phone",type:"tel",value:l.phone,onChange:i},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:75,columnNumber:7},void 0),o.jsxDEV(T,{isChecked:a,onChange:m=>j(m.target.checked),colorScheme:"blue",mb:4,children:["I have read and agree to the"," ",o.jsxDEV(U,{to:(N=n[s])==null?void 0:N.termsUrl,target:"newWindow",style:{color:"blue",textDecoration:"underline"},children:"terms and conditions"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:92,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:85,columnNumber:7},void 0),o.jsxDEV(P,{textAlign:"right",fontSize:"xs",children:["*",n[s].finePrint]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:101,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:39,columnNumber:5},void 0)},oe=Y(g),me=()=>{const n=W(),[s]=Q(),a=R(),[j]=_("(min-width: 768px)"),[l,u]=x.useState(!1),[i,d]=x.useState("basic"),[c,p]=x.useState(!1),N=r=>{d(r),u(!0)},m=()=>{i!==null&&c&&(console.log("Selected tier:",a.packages[i]),u(!1))},f=()=>{u(!1),d(null)},v=r=>{r.stopPropagation()},A=b(n.colors.grey[100],n.colors.grey[700]);b(n.colors.orange[100],n.colors.blue[700]);const I=b(n.colors.blue[500],n.colors.orange[200]),M=b(n.colors.black[500],n.colors.blue[600]),y=b(n.colors.orange[300],n.colors.orange[200]),$=t`
    @keyframes moveDiagonalLine {
      0% {
        transform: translateY(100%) rotate(35deg); /* Start from the bottom */
      }
      100% {
        transform: translateY(-400%) rotate(35deg); /* End at the top */
      }
    }
  `,B=t`
    border-width: 1px;
    border-radius: 0.5rem;
    border-color: ${A};
    box-shadow: ${n.shadows.sm};
    text-align: center;
    cursor: pointer;
    min-height: ${j?"calc(100vh - 170px)":"calc(100vh - 140px)"};
    position: relative; /* Important for absolute positioning of the line */
    overflow: hidden; /* Ensures the line doesn't go outside the box */
    transition: 0.5s box-shadow ease-in-out, 0.5s border-color ease-in-out;

    &:hover .diagonal-line {
      animation: moveDiagonalLine 0.75s ease-in-out forwards 0.75s; /* Start animation on hover */
    }

    &:hover p {
      mix-blend-mode: difference;
    }
  `,O=t`
    margin-bottom: 1rem;
    padding: 1.5rem;
    color: ${M};
    z-index: 0;
  `,G=t`
    font-size: 4rem; /* Chakra's '6xl' font size */
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: shorter;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${y};
    z-index: 0;
  `,H=t`
    position: absolute;
    bottom: 0;
    left: -150%;
    width:300%; /* Ensure the line can cover the entire box */
    transform: translateY(100%) rotate(15deg);
    border-top: 200px solid ${I}; /* Adjust the color to your liking */
    z-index: -1;
    pointer-events: none; /* Ensure the line does not interfere with clicks */
  `,V=t`
    color: ${y};
    z-index: 0;
  `;return e(g,{children:[e(g,{py:8,children:[e(q,{columns:{base:1,md:3},spacing:"2vw",userSelect:"none",children:a.packages.length>0&&a.packages.map((r,k)=>e(oe,{css:[B,$],onClick:()=>N(k),whileHover:{scale:1},children:[e("div",{className:"diagonal-line",css:H},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:164,columnNumber:17},void 0),e(w,{as:"h2",size:"md",css:O,children:r.title},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:165,columnNumber:17},void 0),e(P,{css:G,children:r.price},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:168,columnNumber:17},void 0),e(J,{flexDir:"column",justifyContent:"space-between",h:"66%",children:[e(z,{spacing:0,align:"left",overflow:"auto",px:5,children:e(L,{spacing:2,textAlign:"left",fontSize:"sm",children:[r.features.map((h,D)=>e(C,{css:V,children:h},D,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:173,columnNumber:25},void 0)),r.addOns.map((h,D)=>e(C,{css:V,children:h.description},D,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:178,columnNumber:25},void 0))]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:171,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:170,columnNumber:19},void 0),e(K,{mt:1,onClick:h=>v(h),children:s("pricingPage.see_example")},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:184,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:169,columnNumber:17},void 0)]},k,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:158,columnNumber:15},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:151,columnNumber:9},void 0),e(X,{isOpen:l,onClose:f,onConfirm:m,title:"Add to order",body:e(ee,{packages:a.packages,selectedTier:i,isChecked:c,setIsChecked:p},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:197,columnNumber:13},void 0),confirmText:"Add to order",confirmButtonProps:{isDisabled:!c}},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:191,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:150,columnNumber:7},void 0),e(Z,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:208,columnNumber:7},void 0),e(g,{ml:10,children:e(P,{textAlign:"right",fontSize:"2xs",mb:5,children:[e("b",{children:[s("pricingPage.disclaimer.title"),":"]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:211,columnNumber:11},void 0)," ",s("pricingPage.disclaimer.body")]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:210,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:209,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:149,columnNumber:5},void 0)};export{me as default};
