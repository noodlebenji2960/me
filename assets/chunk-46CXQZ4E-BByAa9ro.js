import{_ as x,n as r,A as S,w as f,a8 as g,o as i,m as c,a4 as v}from"./main-RCGwKUbc.js";var[h,d]=x({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),o=r(function(s,e){const t=S("List",s),{children:a,styleType:y="none",stylePosition:m,spacing:l,...L}=f(s),u=g(a),p=l?{["& > *:not(style) ~ *:not(style)"]:{mt:l}}:{};return i.jsx(h,{value:t,children:i.jsx(c.ul,{ref:e,listStyleType:y,listStylePosition:m,role:"list",__css:{...t.container,...p},...L,children:u})})});o.displayName="List";var j=r((n,s)=>{const{as:e,...t}=n;return i.jsx(o,{ref:s,as:"ol",styleType:"decimal",marginStart:"1em",...t})});j.displayName="OrderedList";var I=r(function(s,e){const{as:t,...a}=s;return i.jsx(o,{ref:e,as:"ul",styleType:"initial",marginStart:"1em",...a})});I.displayName="UnorderedList";var _=r(function(s,e){const t=d();return i.jsx(c.li,{ref:e,...s,__css:t.item})});_.displayName="ListItem";var C=r(function(s,e){const t=d();return i.jsx(v,{ref:e,role:"presentation",...s,__css:t.icon})});C.displayName="ListIcon";export{_ as L,j as O,I as U,o as a};