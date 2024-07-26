import{r as m,j as n,B as x,H as W,T as w,f as Q,U as _,L,F,C as te,b as ce,t as H,d as ue,u as O,v as de,w as fe,x as h,y as u,s as G,z as o,A as be,V as he,m as C,n as U,g as Y}from"./main-CeSmQDeQ.js";import{G as ge,A as pe}from"./AddOns-Ddh5asvV.js";import{F as V,I as z}from"./chunk-6CVSDS6C-Cxji38oU.js";import{I as Ne}from"./chunk-QINAG4RG-ex9OFbZZ.js";import"./chunk-5MKCW436-CxbI860X.js";const xe=({pricingTiers:e,selectedTier:s,isChecked:d,setIsChecked:y})=>{var b,P,v,j;const[i,g]=m.useState({name:"",email:"",phone:""}),f=l=>{const{name:p,value:D}=l.target;g({...i,[p]:D})};return n.jsxDEV(x,{textAlign:"left",children:[n.jsxDEV(W,{as:"h3",size:"md",mb:2,children:(b=e[s])==null?void 0:b.title},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:40,columnNumber:7},void 0),n.jsxDEV(w,{fontWeight:"bold",fontSize:"2xl",mb:4,children:(P=e[s])==null?void 0:P.price},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:43,columnNumber:7},void 0),n.jsxDEV(Q,{spacing:0,mb:4,align:"left",children:n.jsxDEV(_,{children:(v=e[s])==null?void 0:v.features.map((l,p)=>n.jsxDEV(L,{fontSize:"sm",children:l},p,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:49,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:47,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:46,columnNumber:7},void 0),n.jsxDEV(F,{mb:4,children:[n.jsxDEV(V,{htmlFor:"name",children:"Name"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:56,columnNumber:9},void 0),n.jsxDEV(z,{id:"name",name:"name",type:"text",value:i.name,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:57,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:55,columnNumber:7},void 0),n.jsxDEV(F,{mb:4,children:[n.jsxDEV(V,{htmlFor:"email",children:"Email"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:66,columnNumber:9},void 0),n.jsxDEV(z,{id:"email",name:"email",type:"email",value:i.email,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:65,columnNumber:7},void 0),n.jsxDEV(F,{mb:4,children:[n.jsxDEV(V,{htmlFor:"phone",children:"Phone"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:76,columnNumber:9},void 0),n.jsxDEV(z,{id:"phone",name:"phone",type:"tel",value:i.phone,onChange:f},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:75,columnNumber:7},void 0),n.jsxDEV(te,{isChecked:d,onChange:l=>y(l.target.checked),colorScheme:"blue",mb:4,children:["I have read and agree to the"," ",n.jsxDEV(ce,{to:(j=e[s])==null?void 0:j.termsUrl,target:"newWindow",style:{color:"blue",textDecoration:"underline"},children:"terms and conditions"},void 0,!1,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:92,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:85,columnNumber:7},void 0),n.jsxDEV(w,{textAlign:"right",fontSize:"xs",children:["*",e[s].finePrint]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:101,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/forms/PuchasePlanForm.tsx",lineNumber:39,columnNumber:5},void 0)},De=()=>{H();const e=ue(),[s]=O(),d=de();fe("(min-width: 768px)");const[y,i]=m.useState(!1),[g,f]=m.useState("basic"),[b,P]=m.useState(!1),v=r=>{f(r),i(!0)},j=()=>{g!==null&&b&&(console.log("Selected tier:",d.packages[g]),i(!1))},l=()=>{i(!1),f(null)},p=r=>{r.stopPropagation()},D=h(e.colors.black[600],e.colors.white[50]),q=h(e.colors.grey[100],e.colors.black[500]);h(e.colors.orange[100],e.colors.orange[900]);const J=h(e.colors.white[100],e.colors.orange.darkAlpha),K=h(e.colors.black[500],e.colors.white[300]),X=h(e.colors.orange[300],e.colors.orange[500]),Z=u`
    border-radius: 0.5rem;
    outline: 1px solid ${q};
    box-shadow: ${e.shadows.sm};
    text-align: center;
    cursor: pointer;
    min-height: calc(100vh - 70px);
    position: relative;
    overflow: hidden;
    transition: 0.5s box-shadow ease-in-out, 0.5s border-color ease-in-out,
      0.5s color ease-in-out, 0.4s color ease-in-out;

    &:hover P {
      color: ${e.colors.orange[200]};
      transition: 0.3s color ease-in-out;
    }
    &:hover button:first-child {
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
  `,oe=u`
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
  `,ne=G(x),re=({index:r,tier:t,handleSelectTier:se,handleGoToExample:I})=>{const T=H(),{t:A}=O(),[M,S]=m.useState(!1),k=m.useRef(null),E=m.useRef(null),B=()=>{clearTimeout(k.current),clearInterval(E.current),T.type!="desktop"&&(k.current=setInterval(()=>{S(c=>!c),E.current=setTimeout(()=>{S(!1)},5e3)},5e4))},a=()=>{S(!0),B()};m.useEffect(()=>(window.addEventListener("mousemove",a),window.addEventListener("keypress",a),window.addEventListener("touchstart",a),B(),()=>{clearTimeout(k.current),clearInterval(E.current),window.removeEventListener("mousemove",a),window.removeEventListener("keypress",a),window.removeEventListener("touchstart",a)}),[T]);const ie=()=>{a(),se(r)},R=()=>{a()},ae=(c,N)=>u`
      position: absolute;
      bottom: 0;
      left: -150%;
      width: 500%;
      transform: translateY(300%) rotate(35deg);
      border-top: 200px solid ${J};
      z-index: -1;
      pointer-events: none;
      ${N?`animation: moveDiagonalLine 3s ease-in-out forwards ${c*.75}s;`:""};
    `,me=u`
      @keyframes moveDiagonalLine {
        0% {
          transform: translateY(300%) rotate(35deg);
        }
        100% {
          transform: translateY(-500%) rotate(35deg);
        }
      }
    `,le=u`{
      background: ${e.colors.orange[200]};
      margin-top:1px;
      z-index: 1;
    `;return o(ne,{css:Z,onClick:ie,onTouchStart:R,onMouseDown:R,transition:{transform:{delay:M?r*.75:0}},children:[o(G.div,{className:"diagonal-line",css:[ae(r,M),me],whileHover:{transform:"translateY(300%) rotate(35deg)"},transition:{duration:3}},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:245,columnNumber:9},void 0),o(he,{children:[o(Ne,{width:"30%",mt:"15px",src:t.icon},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:252,columnNumber:11},void 0),o(W,{as:"h2",size:"md",css:ee,children:t.title},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:253,columnNumber:11},void 0),o(C,{children:[o(w,{css:oe,children:t.price},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:257,columnNumber:13},void 0),o(U,{style:{position:"absolute",top:"10px",right:"-15px"},title:"Payment is structured to accommodate you. See terms and conditions.",iconName:"info outline",size:15,color:e.colors.grey[500]},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:258,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:256,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:251,columnNumber:9},void 0),o(C,{css:le,flexDir:"column",justifyContent:"space-between",h:"100%",maxH:"56%",children:[o(Q,{spacing:0,align:"left",overflow:"auto",px:5,children:o(_,{spacing:2,textAlign:"left",fontSize:"sm",children:[t.features.map((c,N)=>o(L,{css:$,children:c},N,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:271,columnNumber:17},void 0)),t.addOns.map((c,N)=>o(L,{css:$,children:c.description},N,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:276,columnNumber:17},void 0))]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:269,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:268,columnNumber:11},void 0),o(C,{flexDir:"column",boxShadow:e.shadows.sm,children:[o(Y,{onClick:I,borderRadius:0,color:e.colors.grey[600],children:A("pricingPage.see_example")},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:283,columnNumber:13},void 0),o(Y,{onClick:I,borderRadius:0,children:[o(U,{iconName:"shopping cart",size:20},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:291,columnNumber:15},void 0),A("common.addToCart")]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:290,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:282,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:261,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:236,columnNumber:7},void 0)};return o(x,{children:[o(x,{p:3,children:[o(be,{columns:{base:1,md:3},spacing:"15px",userSelect:"none",margin:0,padding:0,children:d.packages.length>0&&d.packages.map((r,t)=>o(re,{index:t,tier:r,handleSelectTier:v,handleGoToExample:p},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:312,columnNumber:15},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:303,columnNumber:9},void 0),o(ge,{isOpen:y,onClose:l,onConfirm:j,title:"Add to order",body:o(xe,{packages:d.packages,selectedTier:g,isChecked:b,setIsChecked:P},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:326,columnNumber:13},void 0),confirmText:"Add to order",confirmButtonProps:{isDisabled:!b}},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:320,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:302,columnNumber:7},void 0),o(pe,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:337,columnNumber:7},void 0),o(x,{p:"25px",pb:"0",w:"100vw",children:o(w,{fontSize:e.fontSizes.xxs,color:e.colors.black[300],my:5,children:[o("b",{style:{color:e.colors.orange[200]},children:[s("pricingPage.disclaimer.title"),":"]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:340,columnNumber:11},void 0)," ",s("pricingPage.disclaimer.body")]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:339,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:338,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/PricingPage.tsx",lineNumber:301,columnNumber:5},void 0)};export{De as default};
