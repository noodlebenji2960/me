import{U as O,W as J,h as k,i as h,g as E,v as A,r as m,X,Y as Z,Z as _,_ as C,$ as ee,a0 as ne,P as oe,a1 as V,a2 as D,a3 as se,s as te,a4 as ie,j as p,p as Q,B as ae,u as re,c as ce,R as le,a5 as de,a6 as ue,a7 as me,C as pe,V as fe,H as he,T as ge}from"./main-Crqhcu5o.js";var[be,S]=O({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[ye,F]=O({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[ve,Fe,xe,we]=J(),B=k(function(o,t){const{getButtonProps:s}=F(),r=s(o,t),n={display:"flex",alignItems:"center",width:"100%",outline:0,...S().button};return h.jsx(E.button,{...r,className:A("chakra-accordion__button",o.className),__css:n})});B.displayName="AccordionButton";function Ne(e){const{onChange:o,defaultIndex:t,index:s,allowMultiple:r,allowToggle:i,...n}=e;Pe(e),Ie(e);const a=xe(),[l,d]=m.useState(-1);m.useEffect(()=>()=>{d(-1)},[]);const[c,f]=X({value:s,defaultValue(){return r?t??[]:t??-1},onChange:o});return{index:c,setIndex:f,htmlProps:n,getAccordionItemProps:u=>{let v=!1;return u!==null&&(v=Array.isArray(c)?c.includes(u):c===u),{isOpen:v,onChange:b=>{if(u!==null)if(r&&Array.isArray(c)){const j=b?c.concat(u):c.filter(P=>P!==u);f(j)}else b?f(u):i&&f(-1)}}},focusedIndex:l,setFocusedIndex:d,descendants:a}}var[Ae,W]=O({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function je(e){const{isDisabled:o,isFocusable:t,id:s,...r}=e,{getAccordionItemProps:i,setFocusedIndex:n}=W(),a=m.useRef(null),l=m.useId(),d=s??l,c=`accordion-button-${d}`,f=`accordion-panel-${d}`;Ce(e);const{register:x,index:u,descendants:v}=we({disabled:o&&!t}),{isOpen:g,onChange:b}=i(u===-1?null:u);De({isOpen:g,isDisabled:o});const j=()=>{b==null||b(!0)},P=()=>{b==null||b(!1)},q=m.useCallback(()=>{b==null||b(!g),n(u)},[u,n,g,b]),M=m.useCallback(I=>{const N={ArrowDown:()=>{const y=v.nextEnabled(u);y==null||y.node.focus()},ArrowUp:()=>{const y=v.prevEnabled(u);y==null||y.node.focus()},Home:()=>{const y=v.firstEnabled();y==null||y.node.focus()},End:()=>{const y=v.lastEnabled();y==null||y.node.focus()}}[I.key];N&&(I.preventDefault(),N(I))},[v,u]),T=m.useCallback(()=>{n(u)},[n,u]),K=m.useCallback(function(w={},N=null){return{...w,type:"button",ref:Z(x,a,N),id:c,disabled:!!o,"aria-expanded":!!g,"aria-controls":f,onClick:_(w.onClick,q),onFocus:_(w.onFocus,T),onKeyDown:_(w.onKeyDown,M)}},[c,o,g,q,T,M,f,x]),U=m.useCallback(function(w={},N=null){return{...w,ref:N,role:"region",id:f,"aria-labelledby":c,hidden:!g}},[c,g,f]);return{isOpen:g,isDisabled:o,isFocusable:t,onOpen:j,onClose:P,getButtonProps:K,getPanelProps:U,htmlProps:r}}function Pe(e){const o=e.index||e.defaultIndex,t=o!=null&&!Array.isArray(o)&&e.allowMultiple;C({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof o},`})}function Ie(e){C({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Ce(e){C({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function De(e){C({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function H(e){const{isOpen:o,isDisabled:t}=F(),{reduceMotion:s}=W(),r=A("chakra-accordion__icon",e.className),i=S(),n={opacity:t?.4:1,transform:o?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...i.icon};return h.jsx(ee,{viewBox:"0 0 24 24","aria-hidden":!0,className:r,__css:n,...e,children:h.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}H.displayName="AccordionIcon";var R=k(function(o,t){const{children:s,className:r}=o,{htmlProps:i,...n}=je(o),l={...S().container,overflowAnchor:"none"},d=m.useMemo(()=>n,[n]);return h.jsx(ye,{value:d,children:h.jsx(E.div,{ref:t,...i,className:A("chakra-accordion__item",r),__css:l,children:typeof s=="function"?s({isExpanded:!!n.isOpen,isDisabled:!!n.isDisabled}):s})})});R.displayName="AccordionItem";var ke=e=>e!=null&&parseInt(e.toString(),10)>0,z={exit:{height:{duration:.2,ease:D.ease},opacity:{duration:.3,ease:D.ease}},enter:{height:{duration:.3,ease:D.ease},opacity:{duration:.4,ease:D.ease}}},Ee={exit:({animateOpacity:e,startingHeight:o,transition:t,transitionEnd:s,delay:r})=>{var i;return{...e&&{opacity:ke(o)?1:0},height:o,transitionEnd:s==null?void 0:s.exit,transition:(i=t==null?void 0:t.exit)!=null?i:V.exit(z.exit,r)}},enter:({animateOpacity:e,endingHeight:o,transition:t,transitionEnd:s,delay:r})=>{var i;return{...e&&{opacity:1},height:o,transitionEnd:s==null?void 0:s.enter,transition:(i=t==null?void 0:t.enter)!=null?i:V.enter(z.enter,r)}}},$=m.forwardRef((e,o)=>{const{in:t,unmountOnExit:s,animateOpacity:r=!0,startingHeight:i=0,endingHeight:n="auto",style:a,className:l,transition:d,transitionEnd:c,...f}=e,[x,u]=m.useState(!1);m.useEffect(()=>{const P=setTimeout(()=>{u(!0)});return()=>clearTimeout(P)},[]),C({condition:Number(i)>0&&!!s,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const v=parseFloat(i.toString())>0,g={startingHeight:i,endingHeight:n,animateOpacity:r,transition:x?d:{enter:{duration:0}},transitionEnd:{enter:c==null?void 0:c.enter,exit:s?c==null?void 0:c.exit:{...c==null?void 0:c.exit,display:v?"block":"none"}}},b=s?t:!0,j=t||s?"enter":"exit";return h.jsx(ne,{initial:!1,custom:g,children:b&&h.jsx(oe.div,{ref:o,...f,className:A("chakra-collapse",l),style:{overflow:"hidden",display:"block",...a},custom:g,variants:Ee,initial:s?"exit":!1,animate:j,exit:"exit"})})});$.displayName="Collapse";var G=k(function(o,t){const{className:s,motionProps:r,...i}=o,{reduceMotion:n}=W(),{getPanelProps:a,isOpen:l}=F(),d=a(i,t),c=A("chakra-accordion__panel",s),f=S();n||delete d.hidden;const x=h.jsx(E.div,{...d,__css:f.panel,className:c});return n?x:h.jsx($,{in:l,...r,children:x})});G.displayName="AccordionPanel";var Y=k(function({children:o,reduceMotion:t,...s},r){const i=se("Accordion",s),n=te(s),{htmlProps:a,descendants:l,...d}=Ne(n),c=m.useMemo(()=>({...d,reduceMotion:!!t}),[d,t]);return h.jsx(ve,{value:l,children:h.jsx(Ae,{value:c,children:h.jsx(be,{value:i,children:h.jsx(E.div,{ref:r,...a,className:A("chakra-accordion",s.className),__css:i.root,children:o})})})})});Y.displayName="Accordion";const Se=({perRow:e,children:o,...t})=>{const r=((i,n)=>i.reduce((a,l,d)=>(d%n===0&&a.push(i.slice(d,d+n)),a),[]))(ie.Children.toArray(o),e);return p.jsxDEV(Q,{flexWrap:"wrap",...t,children:r.map((i,n)=>p.jsxDEV(Q,{flexWrap:"wrap",width:"100%",children:i.map((a,l)=>p.jsxDEV(ae,{flexBasis:`calc(100% / ${e})`,maxWidth:`calc(100% / ${e})`,flexGrow:1,flexShrink:1,children:a},l,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:25,columnNumber:13},void 0))},n,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:23,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:21,columnNumber:5},void 0)},L=()=>(re(),[{question:"What web development services do you offer?",answer:"We offer a wide range of web development services including front-end development, back-end development, full-stack development, e-commerce development, custom web applications, and more. Whether you need a simple website or a complex web solution, we can tailor our services to meet your needs."},{question:"How do you approach web design projects?",answer:"Our web design process focuses on understanding your brand, target audience, and objectives. We create visually appealing designs that are user-friendly, responsive, and optimized for performance. We collaborate closely with you throughout the design process to ensure we exceed your expectations."},{question:"What technologies do you specialize in?",answer:"We specialize in modern web technologies such as HTML5, CSS3 JavaScript, Node.js, MongoDB, MySQL, and more. Our goal is to leverage the latest tools and technologies to deliver robust and scalable web solutions.",children:()=>p.jsxDEV(Se,{perRow:7,children:ce.techStacks.map((e,o)=>p.jsxDEV(le,{size:40,title:e.name,iconName:e.name},o,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:45,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:43,columnNumber:9},void 0)},{question:"Do you provide maintenance and support services?",answer:"Yes, we offer maintenance and support services to ensure your website runs smoothly post-launch. Our services include regular updates, security audits, performance optimization, bug fixes, and technical support."},{question:"Can you integrate third-party services or APIs?",answer:"Absolutely! We have experience integrating various third-party services and APIs such as payment gateways, social media APIs, analytics tools, and more. Let us know your requirements, and we'll find the best solutions for your project."},{question:"How long does it take to complete a typical project?",answer:"Project timelines vary based on complexity and requirements. We provide detailed project timelines during the planning phase, taking into account design, development, testing, and revisions. We strive to deliver projects efficiently without compromising quality."},{question:"What is your approach to website security?",answer:"Security is a top priority for us. We implement industry best practices to secure websites, including HTTPS encryption, data validation, input sanitization, and regular security audits. We also stay updated with the latest security threats and mitigation techniques to protect your website and data."},{question:"Can you help with SEO (Search Engine Optimization)?",answer:"Yes, we offer SEO services to improve your website's visibility in search engines. Our SEO strategies include keyword research, on-page optimization, content strategy, and technical SEO. We help you attract more organic traffic and achieve better search engine rankings."},{question:"What is your pricing structure?",answer:"Our pricing depends on the scope and complexity of the project. We provide customized quotes based on your specific requirements and goals. Contact us to discuss your project details, and we'll provide a transparent pricing estimate."},{question:"Do you offer website hosting services?",answer:"While we focus on web development and design, we can recommend reliable hosting providers and assist with setting up your website on the hosting platform of your choice. We ensure compatibility and performance optimization for your chosen hosting environment."},{question:"Do you provide business email addresses?",answer:"Yes, we can assist in setting up professional business email addresses for your domain (e.g., yourname@yourcompany.com). This includes configuring email hosting, setting up mail clients, and ensuring reliable email delivery."}]),_e=()=>{const{index:e}=de(),o=ue(),t=me(),[s,r]=m.useState(()=>e?e.split("-").map(a=>parseInt(a,10)).filter(a=>!isNaN(a)):[]);m.useEffect(()=>{if(console.log("Current index:",e),e){const n=e.split("-").map(a=>parseInt(a,10));console.log("Parsed indices:",n),r(n.filter(a=>!isNaN(a)))}},[e]);const i=n=>{const a=s.includes(n);let l;a?l=s.filter(d=>d!==n):l=[...s,n],console.log("New open indices:",l),r(l),l.length>0?o(`/frequently-asked-questions/${l.join("-")}${t.search}`):o(`/frequently-asked-questions${t.search}`)};return p.jsxDEV(pe,{maxW:"container.md",mt:8,children:p.jsxDEV(fe,{spacing:8,align:"start",children:p.jsxDEV(Y,{allowMultiple:!0,w:"container.md",defaultIndex:s,children:L().map((n,a)=>p.jsxDEV(R,{p:2,children:[p.jsxDEV(B,{onClick:()=>i(a),children:[p.jsxDEV(he,{as:"h2",size:"md",flex:"1",textAlign:"left",children:n.question},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:155,columnNumber:17},void 0),p.jsxDEV(H,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:158,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:154,columnNumber:15},void 0),p.jsxDEV(G,{pb:4,display:s.includes(a)?"block":"none",children:[p.jsxDEV(ge,{children:n.answer},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:164,columnNumber:17},void 0),n.children&&p.jsxDEV(n.children,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:165,columnNumber:35},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:160,columnNumber:15},void 0)]},a,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:153,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:151,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:150,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:149,columnNumber:5},void 0)},We=Object.freeze(Object.defineProperty({__proto__:null,FAQData:L,default:_e},Symbol.toStringTag,{value:"Module"}));export{Y as A,L as F,R as a,B as b,H as c,G as d,We as e};
