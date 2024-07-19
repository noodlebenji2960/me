import{X as _,Y as X,h as D,i as x,g as Q,v as y,r as m,Z,_ as J,$ as k,a0 as I,a1 as ee,a2 as ne,R as se,a3 as T,a4 as C,x as oe,s as te,a5 as ae,j as f,p as R,B as ie,u as re,c as ce,W as le,a6 as ue,a7 as de,a8 as me,C as fe,V as pe,H as xe,T as he}from"./main-DqpSIu6l.js";var[ge,E]=_({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Ae,S]=_({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[be,Se,Ne,ve]=X(),$=D(function(s,t){const{getButtonProps:o}=S(),r=o(s,t),n={display:"flex",alignItems:"center",width:"100%",outline:0,...E().button};return x.jsx(Q.button,{...r,className:y("chakra-accordion__button",s.className),__css:n})});$.displayName="AccordionButton";function we(e){const{onChange:s,defaultIndex:t,index:o,allowMultiple:r,allowToggle:a,...n}=e;Fe(e),Pe(e);const i=Ne(),[l,u]=m.useState(-1);m.useEffect(()=>()=>{u(-1)},[]);const[c,p]=Z({value:o,defaultValue(){return r?t??[]:t??-1},onChange:s});return{index:c,setIndex:p,htmlProps:n,getAccordionItemProps:d=>{let b=!1;return d!==null&&(b=Array.isArray(c)?c.includes(d):c===d),{isOpen:b,onChange:g=>{if(d!==null)if(r&&Array.isArray(c)){const j=g?c.concat(d):c.filter(F=>F!==d);p(j)}else g?p(d):a&&p(-1)}}},focusedIndex:l,setFocusedIndex:u,descendants:i}}var[ye,q]=_({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function je(e){const{isDisabled:s,isFocusable:t,id:o,...r}=e,{getAccordionItemProps:a,setFocusedIndex:n}=q(),i=m.useRef(null),l=m.useId(),u=o??l,c=`accordion-button-${u}`,p=`accordion-panel-${u}`;Ie(e);const{register:N,index:d,descendants:b}=ve({disabled:s&&!t}),{isOpen:h,onChange:g}=a(d===-1?null:d);Ce({isOpen:h,isDisabled:s});const j=()=>{g==null||g(!0)},F=()=>{g==null||g(!1)},M=m.useCallback(()=>{g==null||g(!h),n(d)},[d,n,h,g]),O=m.useCallback(P=>{const w={ArrowDown:()=>{const A=b.nextEnabled(d);A==null||A.node.focus()},ArrowUp:()=>{const A=b.prevEnabled(d);A==null||A.node.focus()},Home:()=>{const A=b.firstEnabled();A==null||A.node.focus()},End:()=>{const A=b.lastEnabled();A==null||A.node.focus()}}[P.key];w&&(P.preventDefault(),w(P))},[b,d]),V=m.useCallback(()=>{n(d)},[n,d]),L=m.useCallback(function(v={},w=null){return{...v,type:"button",ref:J(N,i,w),id:c,disabled:!!s,"aria-expanded":!!h,"aria-controls":p,onClick:k(v.onClick,M),onFocus:k(v.onFocus,V),onKeyDown:k(v.onKeyDown,O)}},[c,s,h,M,V,O,p,N]),U=m.useCallback(function(v={},w=null){return{...v,ref:w,role:"region",id:p,"aria-labelledby":c,hidden:!h}},[c,h,p]);return{isOpen:h,isDisabled:s,isFocusable:t,onOpen:j,onClose:F,getButtonProps:L,getPanelProps:U,htmlProps:r}}function Fe(e){const s=e.index||e.defaultIndex,t=s!=null&&!Array.isArray(s)&&e.allowMultiple;I({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof s},`})}function Pe(e){I({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Ie(e){I({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Ce(e){I({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function W(e){const{isOpen:s,isDisabled:t}=S(),{reduceMotion:o}=q(),r=y("chakra-accordion__icon",e.className),a=E(),n={opacity:t?.4:1,transform:s?"rotate(-180deg)":void 0,transition:o?void 0:"transform 0.2s",transformOrigin:"center",...a.icon};return x.jsx(ee,{viewBox:"0 0 24 24","aria-hidden":!0,className:r,__css:n,...e,children:x.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}W.displayName="AccordionIcon";var H=D(function(s,t){const{children:o,className:r}=s,{htmlProps:a,...n}=je(s),l={...E().container,overflowAnchor:"none"},u=m.useMemo(()=>n,[n]);return x.jsx(Ae,{value:u,children:x.jsx(Q.div,{ref:t,...a,className:y("chakra-accordion__item",r),__css:l,children:typeof o=="function"?o({isExpanded:!!n.isOpen,isDisabled:!!n.isDisabled}):o})})});H.displayName="AccordionItem";var De=e=>e!=null&&parseInt(e.toString(),10)>0,B={exit:{height:{duration:.2,ease:C.ease},opacity:{duration:.3,ease:C.ease}},enter:{height:{duration:.3,ease:C.ease},opacity:{duration:.4,ease:C.ease}}},Qe={exit:({animateOpacity:e,startingHeight:s,transition:t,transitionEnd:o,delay:r})=>{var a;return{...e&&{opacity:De(s)?1:0},height:s,transitionEnd:o==null?void 0:o.exit,transition:(a=t==null?void 0:t.exit)!=null?a:T.exit(B.exit,r)}},enter:({animateOpacity:e,endingHeight:s,transition:t,transitionEnd:o,delay:r})=>{var a;return{...e&&{opacity:1},height:s,transitionEnd:o==null?void 0:o.enter,transition:(a=t==null?void 0:t.enter)!=null?a:T.enter(B.enter,r)}}},G=m.forwardRef((e,s)=>{const{in:t,unmountOnExit:o,animateOpacity:r=!0,startingHeight:a=0,endingHeight:n="auto",style:i,className:l,transition:u,transitionEnd:c,...p}=e,[N,d]=m.useState(!1);m.useEffect(()=>{const F=setTimeout(()=>{d(!0)});return()=>clearTimeout(F)},[]),I({condition:Number(a)>0&&!!o,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const b=parseFloat(a.toString())>0,h={startingHeight:a,endingHeight:n,animateOpacity:r,transition:N?u:{enter:{duration:0}},transitionEnd:{enter:c==null?void 0:c.enter,exit:o?c==null?void 0:c.exit:{...c==null?void 0:c.exit,display:b?"block":"none"}}},g=o?t:!0,j=t||o?"enter":"exit";return x.jsx(ne,{initial:!1,custom:h,children:g&&x.jsx(se.div,{ref:s,...p,className:y("chakra-collapse",l),style:{overflow:"hidden",display:"block",...i},custom:h,variants:Qe,initial:o?"exit":!1,animate:j,exit:"exit"})})});G.displayName="Collapse";var z=D(function(s,t){const{className:o,motionProps:r,...a}=s,{reduceMotion:n}=q(),{getPanelProps:i,isOpen:l}=S(),u=i(a,t),c=y("chakra-accordion__panel",o),p=E();n||delete u.hidden;const N=x.jsx(Q.div,{...u,__css:p.panel,className:c});return n?N:x.jsx(G,{in:l,...r,children:N})});z.displayName="AccordionPanel";var K=D(function({children:s,reduceMotion:t,...o},r){const a=oe("Accordion",o),n=te(o),{htmlProps:i,descendants:l,...u}=we(n),c=m.useMemo(()=>({...u,reduceMotion:!!t}),[u,t]);return x.jsx(be,{value:l,children:x.jsx(ye,{value:c,children:x.jsx(ge,{value:a,children:x.jsx(Q.div,{ref:r,...i,className:y("chakra-accordion",o.className),__css:a.root,children:s})})})})});K.displayName="Accordion";const Ee=({perRow:e,children:s,...t})=>{const r=((a,n)=>a.reduce((i,l,u)=>(u%n===0&&i.push(a.slice(u,u+n)),i),[]))(ae.Children.toArray(s),e);return f.jsxDEV(R,{flexWrap:"wrap",...t,children:r.map((a,n)=>f.jsxDEV(R,{flexWrap:"wrap",width:"100%",children:a.map((i,l)=>f.jsxDEV(ie,{flexBasis:`calc(100% / ${e})`,maxWidth:`calc(100% / ${e})`,flexGrow:1,flexShrink:1,children:i},l,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:25,columnNumber:13},void 0))},n,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:23,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/components/SvgGrid.tsx",lineNumber:21,columnNumber:5},void 0)},Y=()=>{const{t:e}=re();return[{question:e("FAQ.1.question"),answer:e("FAQ.1.answer")},{question:e("FAQ.2.question"),answer:e("FAQ.2.answer")},{question:e("FAQ.3.question"),answer:e("FAQ.3.answer"),children:()=>f.jsxDEV(Ee,{perRow:7,children:ce.techStacks.map((s,t)=>f.jsxDEV(le,{size:40,title:s.name,iconName:s.name},t,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:43,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:41,columnNumber:9},void 0)},{question:e("FAQ.4.question"),answer:e("FAQ.4.answer")},{question:e("FAQ.5.question"),answer:e("FAQ.5.answer")},{question:e("FAQ.6.question"),answer:e("FAQ.6.answer")},{question:e("FAQ.7.question"),answer:e("FAQ.7.answer")},{question:e("FAQ.8.question"),answer:e("FAQ.8.answer")},{question:e("FAQ.9.question"),answer:e("FAQ.9.answer")},{question:e("FAQ.10.question"),answer:e("FAQ.10.answer")},{question:e("FAQ.11.question"),answer:e("FAQ.11.answer")}]},ke=()=>{const{index:e}=ue(),s=de(),t=me(),[o,r]=m.useState(()=>e?e.split("-").map(i=>parseInt(i,10)).filter(i=>!isNaN(i)):[]);m.useEffect(()=>{if(console.log("Current index:",e),e){const n=e.split("-").map(i=>parseInt(i,10));console.log("Parsed indices:",n),r(n.filter(i=>!isNaN(i)))}},[e]);const a=n=>{const i=o.includes(n);let l;i?l=o.filter(u=>u!==n):l=[...o,n],console.log("New open indices:",l),r(l),l.length>0?s(`/frequently-asked-questions/${l.join("-")}${t.search}`):s(`/frequently-asked-questions${t.search}`)};return f.jsxDEV(fe,{maxW:"container.md",mt:8,children:f.jsxDEV(pe,{spacing:8,align:"start",children:f.jsxDEV(K,{allowMultiple:!0,w:"container.md",defaultIndex:o,children:Y().map((n,i)=>f.jsxDEV(H,{p:2,children:[f.jsxDEV($,{onClick:()=>a(i),children:[f.jsxDEV(xe,{as:"h2",size:"md",flex:"1",textAlign:"left",children:n.question},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:145,columnNumber:17},void 0),f.jsxDEV(W,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:148,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:144,columnNumber:15},void 0),f.jsxDEV(z,{pb:4,display:o.includes(i)?"block":"none",children:[f.jsxDEV(he,{children:n.answer},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:154,columnNumber:17},void 0),n.children&&f.jsxDEV(n.children,{},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:155,columnNumber:35},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:150,columnNumber:15},void 0)]},i,!0,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:143,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:141,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:140,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/src/pages/FAQPage.tsx",lineNumber:139,columnNumber:5},void 0)},qe=Object.freeze(Object.defineProperty({__proto__:null,FAQData:Y,default:ke},Symbol.toStringTag,{value:"Module"}));export{K as A,Y as F,H as a,$ as b,W as c,z as d,qe as e};
