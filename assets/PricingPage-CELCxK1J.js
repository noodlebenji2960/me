import{r as a,j as o,B as x,H as I,T as w,f as J,U as Q,L,F,C as te,b as me,x as H,d as ue,u as O,z as de,D as fe,E as h,G as u,y as U,I as n,J as be,R as he,V as ge,m as C,n as Y,g as W}from"./main-BjWuY3kc.js";import{G as pe,A as Ne}from"./AddOns-B14r1xMk.js";import{F as V,I as z}from"./chunk-6CVSDS6C-Bt5hlBmp.js";import{I as xe}from"./chunk-QINAG4RG-BgnAUvKR.js";import"./chunk-5MKCW436-DhnCUTFn.js";const Pe=({pricingTiers:e,selectedTier:s,isChecked:d,setIsChecked:y})=>{var b,P,v,j;const[i,g]=a.useState({name:"",email:"",phone:""}),f=t=>{const{name:p,value:D}=t.target;g({...i,[p]:D})};return o.jsxDEV(x,{textAlign:"left",children:[o.jsxDEV(I,{as:"h3",size:"md",mb:2,children:(b=e[s])==null?void 0:b.title},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:40,columnNumber:7},void 0),o.jsxDEV(w,{fontWeight:"bold",fontSize:"2xl",mb:4,children:(P=e[s])==null?void 0:P.price},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:43,columnNumber:7},void 0),o.jsxDEV(J,{spacing:0,mb:4,align:"left",children:o.jsxDEV(Q,{children:(v=e[s])==null?void 0:v.features.map((t,p)=>o.jsxDEV(L,{fontSize:"sm",children:t},p,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:49,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:47,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:46,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(V,{htmlFor:"name",children:"Name"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:56,columnNumber:9},void 0),o.jsxDEV(z,{id:"name",name:"name",type:"text",value:i.name,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:57,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:55,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(V,{htmlFor:"email",children:"Email"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:66,columnNumber:9},void 0),o.jsxDEV(z,{id:"email",name:"email",type:"email",value:i.email,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:65,columnNumber:7},void 0),o.jsxDEV(F,{mb:4,children:[o.jsxDEV(V,{htmlFor:"phone",children:"Phone"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:76,columnNumber:9},void 0),o.jsxDEV(z,{id:"phone",name:"phone",type:"tel",value:i.phone,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:75,columnNumber:7},void 0),o.jsxDEV(te,{isChecked:d,onChange:t=>y(t.target.checked),colorScheme:"blue",mb:4,children:["I have read and agree to the"," ",o.jsxDEV(me,{to:(j=e[s])==null?void 0:j.termsUrl,target:"newWindow",style:{color:"blue",textDecoration:"underline"},children:"terms and conditions"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:92,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:85,columnNumber:7},void 0),o.jsxDEV(w,{textAlign:"right",fontSize:"xs",children:["*",e[s].finePrint]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:101,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/PuchasePlanForm.tsx",lineNumber:39,columnNumber:5},void 0)},Ee=()=>{H();const e=ue(),[s]=O(),d=de();fe("(min-width: 768px)");const[y,i]=a.useState(!1),[g,f]=a.useState("basic"),[b,P]=a.useState(!1),v=r=>{f(r),i(!0)},j=()=>{g!==null&&b&&(console.log("Selected tier:",d.packages[g]),i(!1))},t=()=>{i(!1),f(null)},p=r=>{r.stopPropagation()},D=h(e.colors.black[600],e.colors.white[50]),_=h(e.colors.grey[100],e.colors.black[500]);h(e.colors.orange[100],e.colors.orange[900]);const q=h(e.colors.white[100],e.colors.orange.darkAlpha),K=h(e.colors.black[500],e.colors.white[300]),X=h(e.colors.orange[300],e.colors.orange[500]),Z=u`
    border-radius: 0.5rem;
    outline: 1px solid ${_};
    box-shadow: ${e.shadows.sm};
    text-align: center;
    cursor: pointer;
    min-height: calc(100vh - 125px);
    position: relative;
    overflow: hidden;
    transition: 0.5s box-shadow ease-in-out, 0.5s border-color ease-in-out,
      0.5s color ease-in-out, 0.4s color ease-in-out;

    &:hover P {
      color: ${e.colors.orange[200]};
      transition: 0.3s color ease-in-out;
    }
    &:hover button:first-of-type {
      font-weight: 1000;
      color: ${e.colors.orange[200]};
      transition: 0.3s color ease-in-out;
    }
        &:hover button {
      font-weight: 1000;
      color: ${e.colors.blue[600]};
      transition: 0.3s color ease-in-out;
    }
  `,ee=u`
    position: relative;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    vertical-align: center;
    margin-bottom: 1rem;
    padding: 1.5rem;
    width: 100%;
    border-radius: 0;
    color: ${K};
    background: ${e.colors.black[500]};
    box-shadow: 0 2px 10px ${e.colors.black[700]};
    margin-top: 0.5rem;
    z-index: 0;
  `,ne=u`
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: shorter;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${X};
    z-index: 0;
  `,$=u`
    color: ${D};
    font-size: ${e.fontSizes.xs},
    z-index: 0;
  `,oe=U(x),re=({index:r,tier:l,handleSelectTier:se,handleGoToExample:T})=>{const A=H(),{t:M}=O(),[R,E]=a.useState(!1),S=a.useRef(null),k=a.useRef(null),B=()=>{clearTimeout(S.current),clearInterval(k.current),A.type!="desktop"&&(S.current=setInterval(()=>{E(m=>!m),k.current=setTimeout(()=>{E(!1)},5e3)},5e4))},c=()=>{E(!0),B()};a.useEffect(()=>(window.addEventListener("mousemove",c),window.addEventListener("keypress",c),window.addEventListener("touchstart",c),B(),()=>{clearTimeout(S.current),clearInterval(k.current),window.removeEventListener("mousemove",c),window.removeEventListener("keypress",c),window.removeEventListener("touchstart",c)}),[A]);const ie=()=>{c(),se(r)},G=()=>{c()},le=(m,N)=>u`
      position: absolute;
      bottom: 0;
      left: -150%;
      width: 500%;
      transform: translateY(300%) rotate(35deg);
      border-top: 200px solid ${q};
      z-index: -1;
      pointer-events: none;
      ${N?`animation: moveDiagonalLine 3s ease-in-out forwards ${m*.75}s;`:""};
    `,ce=u`
      @keyframes moveDiagonalLine {
        0% {
          transform: translateY(300%) rotate(35deg);
        }
        100% {
          transform: translateY(-500%) rotate(35deg);
        }
      }
    `,ae=u`{
      background: ${e.colors.orange[200]};
      margin-top:1px;
      z-index: 1;
    `;return n(oe,{css:Z,onClick:ie,onTouchStart:G,onMouseDown:G,transition:{transform:{delay:R?r*.75:0}},children:[n(U.div,{className:"diagonal-line",css:[le(r,R),ce],whileHover:{transform:"translateY(300%) rotate(35deg)"},transition:{duration:3}},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:245,columnNumber:9},void 0),n(ge,{children:[n(xe,{width:"30%",mt:"15px",src:l.icon},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:252,columnNumber:11},void 0),n(I,{as:"h2",size:"md",css:ee,children:l.title},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:253,columnNumber:11},void 0),n(C,{children:[n(w,{css:ne,children:l.price},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:257,columnNumber:13},void 0),n(Y,{style:{position:"absolute",top:"10px",right:"-15px"},title:"Payment plans available. See terms and conditions.",iconName:"info outline",size:15,color:e.colors.grey[500]},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:258,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:256,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:251,columnNumber:9},void 0),n(C,{css:ae,flexDir:"column",justifyContent:"space-between",h:"100%",maxH:"56%",children:[n(J,{spacing:0,align:"left",overflow:"auto",px:5,children:n(Q,{spacing:2,textAlign:"left",fontSize:"sm",children:[l.features.map((m,N)=>n(L,{css:$,children:m},N,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:271,columnNumber:17},void 0)),l.addOns.map((m,N)=>n(L,{css:$,children:m.description},N,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:276,columnNumber:17},void 0))]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:269,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:268,columnNumber:11},void 0),n(C,{flexDir:"column",boxShadow:e.shadows.sm,children:[n(W,{onClick:T,borderRadius:0,color:e.colors.grey[600],children:M("pricingPage.see_example")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:283,columnNumber:13},void 0),n(W,{onClick:T,borderRadius:0,children:[n(Y,{iconName:"shopping cart",size:20},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:291,columnNumber:15},void 0),M("common.addToCart")]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:290,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:282,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:261,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:236,columnNumber:7},void 0)};return n(x,{children:[n(x,{p:3,children:[n(I,{as:"h1",children:"Bundles"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:303,columnNumber:9},void 0),n(be,{columns:{base:1,md:3},spacing:"15px",userSelect:"none",margin:0,padding:0,children:d.packages.length>0&&d.packages.map((r,l)=>n(he.Fragment,{children:n(re,{index:l,tier:r,handleSelectTier:v,handleGoToExample:p},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:316,columnNumber:15},void 0)},l,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:315,columnNumber:15},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:306,columnNumber:9},void 0),n(pe,{isOpen:y,onClose:t,onConfirm:j,title:"Add to order",body:n(Pe,{packages:d.packages,selectedTier:g,isChecked:b,setIsChecked:P},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:331,columnNumber:13},void 0),confirmText:"Add to order",confirmButtonProps:{isDisabled:!b}},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:325,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:302,columnNumber:7},void 0),n(Ne,{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:342,columnNumber:7},void 0),n(x,{p:"25px",pb:"0",w:"100vw",children:n(w,{fontSize:e.fontSizes.xxs,color:e.colors.black[300],my:5,children:[n("b",{style:{color:e.colors.orange[200]},children:[s("pricingPage.disclaimer.title"),":"]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:345,columnNumber:11},void 0)," ",s("pricingPage.disclaimer.body")]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:344,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:343,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/PricingPage.tsx",lineNumber:301,columnNumber:5},void 0)};export{Ee as default};
