import{u as h,d as j,r as D,j as e,B as d,F as a,e as C,g as f,x as E,m as p,H as V,T as P,c as N,y as x}from"./main-BjWuY3kc.js";import{F as c,I as u}from"./chunk-6CVSDS6C-Bt5hlBmp.js";const y=()=>{const{t:o}=h(),m=j(),[n,l]=D.useState({name:"",email:"",subject:"",message:""}),g=async s=>{s.preventDefault();try{const i="https://api.example.com/contact",t=new URLSearchParams;t.append("name",n.name),t.append("email",n.email),t.append("subject",n.subject),t.append("message",n.message);const b=await fetch(i,{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!b.ok)throw new Error("Network response was not ok");const v=await b.json();console.log("Contact form submitted successfully:",v),l({name:"",email:"",subject:"",message:""})}catch(i){console.error("Error submitting contact form:",i)}},r=s=>{l({...n,[s.target.name]:s.target.value})};return e.jsxDEV(d,{minWidth:350,p:4,borderWidth:"1px",borderRadius:"md",background:m.colors.black[500],children:e.jsxDEV("form",{onSubmit:g,children:[e.jsxDEV(a,{mb:4,children:[e.jsxDEV(c,{children:o("formData.common.nameLabel")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV(u,{type:"text",name:"name",value:n.name,onChange:r,required:!0,placeholder:o("formData.common.namePlaceholder")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:78,columnNumber:9},void 0),e.jsxDEV(a,{mb:4,children:[e.jsxDEV(c,{children:o("formData.common.emailLabel")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV(u,{type:"email",name:"email",value:n.email,onChange:r,required:!0,placeholder:o("formData.common.emailPlaceholder")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:91,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:89,columnNumber:9},void 0),e.jsxDEV(a,{mb:4,children:[e.jsxDEV(c,{children:o("formData.contactForm.subjectLabel")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:101,columnNumber:11},void 0),e.jsxDEV(u,{type:"text",name:"subject",value:n.subject,onChange:r,required:!0,placeholder:"Enquiry regarding..."},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:102,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:100,columnNumber:9},void 0),e.jsxDEV(a,{mb:4,children:[e.jsxDEV(c,{children:o("formData.contactForm.messageLabel")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:112,columnNumber:11},void 0),e.jsxDEV(C,{name:"message",value:n.message,onChange:r,rows:4,required:!0,placeholder:o("formData.contactForm.messagePlaceholder")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:113,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV(f,{mr:3,type:"submit",children:o("common.action.submit")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV(f,{type:"button",onClick:()=>l({name:"",email:"",subject:"",message:""}),children:o("common.action.clear")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:125,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:77,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/forms/ContactForm.tsx",lineNumber:76,columnNumber:5},void 0)},T=()=>{const o=E(),m=j(),{t:n}=h();return e.jsxDEV(p,{maxW:"100vw",minH:"100vh",children:[e.jsxDEV(p,{pb:o.type!=="desktop"?"150px":"15px",flexDir:o&&o.type!=="desktop"?"column":"row",spacing:8,align:"flex-start",margin:"auto",zIndex:2,children:[e.jsxDEV(d,{px:"15px",pb:"30px",minW:"min-content",w:o&&o.type!=="desktop"?"calc(100vw - 30px)":"25vw",children:[e.jsxDEV(V,{as:"h1",size:"xl",mt:3,mb:1,children:n("contactPage.title")},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:45,columnNumber:11},void 0),e.jsxDEV(P,{fontSize:"md",children:[n("contactPage.body.part1"),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:50,columnNumber:13},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:51,columnNumber:13},void 0),n("contactPage.body.part2"),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:54,columnNumber:13},void 0),e.jsxDEV("b",{style:{color:m.colors.blue[600]},children:"phone: "},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:55,columnNumber:13},void 0),N.phoneNumber,e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("b",{style:{color:m.colors.orange[200],whiteSpace:"nowrap"},children:"email: "},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:58,columnNumber:13},void 0),N.email,e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:60,columnNumber:13},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:61,columnNumber:13},void 0),n("contactPage.body.part3")]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:48,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:33,columnNumber:9},void 0),e.jsxDEV(y,{},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:66,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:25,columnNumber:7},void 0),e.jsxDEV(x.svg,{style:{fill:m.colors.black[500],position:"fixed",left:"15",bottom:`${o.type!=="desktop"?"-10%":"-30%"}`},width:o.type!=="desktop"?"100vw":"50vw",height:"auto",viewBox:"0 0 892 589",children:e.jsxDEV(x.path,{d:F,preserveAspectRatio:"none"},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:79,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:68,columnNumber:7},void 0),e.jsxDEV(d,{style:{width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:`15px solid ${m.colors.orange[200]}`,position:"fixed",left:o.type!=="desktop"?"50%":"25.5%",bottom:o.type!=="desktop"?"49.5%":"29.5%",zIndex:1}},void 0,!1,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:81,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/bjc/repos/me/client/src/pages/ContactPage.tsx",lineNumber:24,columnNumber:5},void 0)},F="m 695.34034,572.18119 c -2.475,-2.22884 -4.98816,-5.46698 -5.58481,-7.19588 -0.78319,-2.26946 -1.9818,-3.40071 -4.31099,-4.06871 -1.77441,-0.50889 -5.2547,-2.98283 -7.73399,-5.49764 l -4.50779,-4.57238 -1.91469,2.48454 c -1.05307,1.36649 -2.17744,3.27203 -2.49859,4.23453 -0.92303,2.76633 -2.97151,2.05209 -5.01907,-1.75 -1.64487,-3.05433 -2.39246,-3.58088 -4.94055,-3.47974 -0.28076,0.0112 -1.81953,-0.65668 -3.41949,-1.48404 -2.58487,-1.3367 -3.38134,-1.33767 -7.14801,-0.009 -3.7987,1.34026 -4.41802,1.33359 -5.96262,-0.0643 -1.04922,-0.94953 -4.55019,-1.79683 -8.94774,-2.1655 -9.01002,-0.75503 -13.01166,-3.50715 -13.01166,-8.94842 0,-1.91026 -0.61987,-5.58276 -1.37749,-8.1611 -4.07795,-13.87815 -3.9559,-15.14052 1.46697,-15.17259 1.74798,-0.0103 2.94188,-0.78872 3.67386,-2.39524 0.89921,-1.97355 0.67049,-2.98899 -1.33949,-5.94694 -1.33312,-1.96186 -2.42999,-4.3784 -2.4375,-5.37008 -0.0307,-4.04639 -1.34577,-6.16309 -4.82355,-7.76356 -2.1829,-1.00456 -5.45931,-4.08031 -8.10921,-7.61255 -2.44553,-3.25982 -4.86893,-5.92694 -5.38533,-5.92694 -1.64801,0 -5.44509,-4.78702 -6.50433,-8.20006 -0.56327,-1.81497 -1.31063,-5.15612 -1.66078,-7.42478 -0.59956,-3.88451 -0.4761,-4.16513 2.1191,-4.81649 1.51567,-0.38041 3.97767,-1.56173 5.47113,-2.62516 1.49345,-1.06343 3.5742,-1.93351 4.6239,-1.93351 1.0497,0 3.10598,-1.24986 4.56951,-2.77746 2.31106,-2.41222 2.64621,-3.56285 2.5487,-8.75 -0.0922,-4.90177 -0.56311,-6.45919 -2.62691,-8.68698 -1.38305,-1.49295 -2.85801,-2.50223 -3.27769,-2.24285 -0.41968,0.25938 -1.89456,0.0414 -3.27751,-0.4844 -3.46896,-1.31889 -19.87981,-1.39327 -27.15338,-0.12306 -4.14292,0.72349 -6.97287,0.72781 -9.14323,0.014 -2.7077,-0.89059 -3.66235,-0.68157 -6.88955,1.50847 -4.29829,2.9169 -5.23041,3.03601 -7.90835,1.01052 -3.24597,-2.45513 -5.48189,-1.70491 -12.01609,4.0318 -4.73616,4.15811 -7.02739,5.5 -9.39111,5.5 -2.87052,0 -3.4171,-0.57701 -6.67519,-7.0467 -3.61979,-7.18796 -5.21241,-16.20507 -3.28993,-18.62697 1.49474,-1.88305 -0.8468,-8.81258 -3.42842,-10.14601 -1.24197,-0.64149 -4.27387,-1.86096 -6.73755,-2.70992 -2.46368,-0.84896 -6.00265,-2.4423 -7.86438,-3.54075 -2.18731,-1.29054 -4.82389,-1.91227 -7.45185,-1.75721 -2.23678,0.13198 -4.20997,-0.19032 -4.38487,-0.71624 -0.32649,-0.98178 -9.63344,-1.06328 -12.31948,-0.10787 -1.44158,0.51276 -4.44079,0.89955 -17.5,2.25689 -3.3,0.34299 -6.81267,1.33966 -7.80594,2.21481 -1.29405,1.14018 -2.28611,1.31555 -3.5,0.6187 -1.02891,-0.59065 -4.04988,-0.65331 -7.69406,-0.15957 -3.3,0.4471 -8.81392,1.05565 -12.25316,1.35234 -6.54103,0.56427 -9.24684,2.51035 -9.24684,6.65055 0,1.01037 -1.67029,3.83524 -3.71176,6.27749 -2.86575,3.42836 -4.40426,4.44972 -6.75,4.4811 -1.87675,0.0251 -4.36181,1.17197 -6.50047,3 -4.10371,3.50768 -4.46801,3.55269 -7.7649,0.95936 -1.39842,-1.1 -3.74589,-2 -5.2166,-2 -1.47071,0 -3.49588,-0.60096 -4.50038,-1.33548 -1.00451,-0.73451 -2.85148,-1.13951 -4.10438,-0.9 -1.93265,0.36945 -2.35517,1.21622 -2.78702,5.58547 -0.66689,6.74735 -1.48814,11.28618 -2.89078,15.97647 -0.79064,2.64386 -0.8211,4.03463 -0.0985,4.5 1.25963,0.81127 4.32479,6.62157 4.32479,8.19808 0,2.25028 -11.24567,12.97542 -13.60517,12.97542 -5.53337,0 -10.60371,5.40732 -8.99683,9.59478 0.34417,0.89689 -0.22386,3.04247 -1.26229,4.76796 -1.03843,1.7255 -2.90544,6.28726 -4.14893,10.13726 -1.61051,4.98638 -3.17612,7.76903 -5.44259,9.67342 -1.82021,1.52941 -3.71077,4.43922 -4.41805,6.7999 -1.33681,4.46186 -2.06516,4.58432 -8.32648,1.39999 -1.48519,-0.75532 -3.81839,-1.37331 -5.1849,-1.37331 -1.36651,0 -3.75136,-0.50774 -5.29966,-1.12831 -3.84002,-1.53911 -12.82586,-1.98658 -19.30995,-0.96159 -2.9495,0.46626 -6.60883,0.49036 -8.13183,0.0536 -1.98873,-0.57036 -3.11553,-0.37675 -3.99838,0.68702 -0.6761,0.81465 -2.51165,2.14432 -4.07899,2.95483 -4.49923,2.32664 -9.15548,0.46997 -15.49177,-6.17732 -4.4181,-4.63494 -5.83932,-5.55906 -7.93371,-5.15869 -1.4033,0.26826 -3.98497,0.0478 -5.73705,-0.48994 -2.61031,-0.80113 -4.34067,-0.50834 -9.58191,1.62137 -7.53435,3.06148 -9.05022,3.20361 -9.05525,0.84906 -0.002,-0.9625 -0.82613,-3.1 -1.83128,-4.75 -1.00515,-1.65 -2.10543,-5.03221 -2.44507,-7.51603 -0.5944,-4.34702 -0.41922,-4.7503 4.68068,-10.77563 2.914,-3.44277 5.8084,-7.96251 6.43198,-10.04385 0.62359,-2.08135 2.26636,-4.84826 3.65061,-6.14869 1.38425,-1.30044 2.51682,-2.98499 2.51682,-3.74346 0,-0.75847 2.51846,-4.49608 5.59657,-8.3058 5.51709,-6.82839 5.58699,-6.99648 4.92157,-11.83464 -0.45096,-3.27885 -0.25869,-5.57449 0.57927,-6.91627 1.13606,-1.81913 0.52122,-2.72499 -6.52404,-9.61202 -4.44254,-4.34275 -8.6993,-7.65299 -9.92584,-7.71876 -4.36906,-0.23428 -6.18116,0.2909 -7.5195,2.1793 -1.78207,2.5145 -2.92017,2.44113 -7.19522,-0.46384 -4.33751,-2.94741 -8.36099,-2.4658 -10.67592,1.27792 -2.85178,4.61192 -6.57029,8.11944 -8.69398,8.20072 -1.1346,0.0434 -1.51799,0.30006 -0.85197,0.57031 0.7474,0.30327 0.996,1.56606 0.64943,3.29888 -0.30883,1.54414 -0.023,3.81378 0.63523,5.04364 1.041,1.94512 0.78974,2.77436 -1.93075,6.37217 -5.26497,6.96284 -5.56826,8.03044 -3.2035,11.27678 2.18062,2.99356 2.42406,5.5967 1.50651,16.10927 -0.32986,3.77936 -1.00452,6.24388 -1.70668,6.23452 -0.63865,-0.009 -2.77932,1.86558 -4.75704,4.16467 -3.5164,4.08779 -3.64836,4.14337 -5.9725,2.51548 -3.18425,-2.23033 -4.6111,-2.10995 -10.1896,0.85971 -2.60812,1.38842 -4.74204,2.2668 -4.74204,1.95196 0,-0.31483 -2.025,0.82082 -4.5,2.52366 -2.56835,1.76707 -4.5,3.88226 -4.5,4.92758 0,3.29352 -13.11669,12.58176 -16.77329,11.87756 -0.90146,-0.1736 -1.90114,-1.43828 -2.2215,-2.81039 -0.46834,-2.00584 -1.88049,-2.95283 -7.20582,-4.83222 l -6.62332,-2.33747 -0.65895,-6.16253 c -0.36242,-3.38939 -1.52703,-8.75182 -2.58803,-11.91651 -1.061,-3.16472 -1.92909,-6.63695 -1.92909,-7.7161 0,-1.07916 -0.6425,-3.43986 -1.42778,-5.24602 -2.39372,-5.50561 -4.57222,-13.48793 -4.57222,-16.75321 0,-4.19019 -1.87551,-4.67205 -9.84584,-2.52958 -9.16959,2.46484 -17.77632,2.91957 -22.654157,1.19691 -3.51296,-1.24064 -4.40095,-1.22234 -7.29291,0.15033 -3.11752,1.47972 -3.52143,1.43813 -7.58318,-0.78069 -4.187276,-2.28739 -6.541599,-2.40088 -12.206343,-0.58837 -1.849769,0.59186 -2.503974,-0.33895 -5.855499,-8.3313 -2.129176,-5.07742 -3.441942,-9.53338 -3.013063,-10.22732 0.479672,-0.77612 0.346054,-0.97388 -0.362247,-0.53613 -0.700303,0.43282 -2.429325,-1.9019 -4.59864,-6.20958 -4.661965,-9.25743 -8.3754,-12.34107 -14.405486,-11.96234 -4.544373,0.28542 -4.583386,0.26045 -5.802035,-3.71265 -0.674794,-2.2 -1.261481,-6.73406 -1.303749,-10.07569 -0.06491,-5.13199 -0.46516,-6.44048 -2.576852,-8.42431 -1.375,-1.29175 -2.5,-2.78108 -2.5,-3.30964 0,-1.39161 -4.865774,-5.68883 -7.632645,-6.74079 -1.897619,-0.72147 -2.367355,-1.62994 -2.367355,-4.57843 0,-3.00929 -0.727574,-4.35005 -4,-7.37114 -4.647128,-4.2902 -5.052594,-6.64931 -1.382654,-8.04461 1.43954,-0.54732 3.870085,-2.33618 5.40121,-3.97525 1.531125,-1.63908 3.432457,-2.98014 4.225183,-2.98014 2.753307,0 5.086177,-6.2147 4.52504,-12.05457 -0.442493,-4.60511 -0.143586,-5.94554 2.097889,-9.40785 1.437647,-2.22067 3.146163,-4.37807 3.796704,-4.79423 0.871876,-0.55774 0.545841,-2.38197 -1.240286,-6.93961 -2.966534,-7.56968 -2.966512,-7.5671 -0.0966,-11.75547 2.252821,-3.28778 2.268654,-3.45313 0.5,-5.22178 -1.004565,-1.00457 -1.826486,-3.20031 -1.826486,-4.87942 0,-2.91798 -4.38472,-19.79538 -5.964797,-22.95935 -1.029644,-2.06176 0.505682,-5.83288 3.507261,-8.61465 l 2.488179,-2.30597 -4.515322,-4.71245 c -4.621811,-4.82359 -5.190824,-6.72714 -3.916105,-13.10073 l 0.599216,-2.99608 9.650784,-0.54948 c 5.307931,-0.30222 6.712309,1.6516 8.774809,1.03205 3.20998,-0.96422 3.75,-1.54319 3.75,-4.02042 0,-1.59169 -0.41675,-3.15154 -0.926112,-3.46634 -0.509362,-0.31481 -3.365958,-4.05429 -6.347991,-8.30997 l -5.421878,-7.7376 -5.146501,0.34709 c -6.349612,0.42823 -2.910832,-4.07456 0.149571,-9.47545 2.992437,-5.28094 3.5839,-8.73022 1.943171,-11.33214 -0.778819,-1.23507 -1.718215,-3.25808 -2.087547,-4.49558 -0.529223,-1.77324 -0.2734,-2.25 1.207313,-2.25 1.033354,0 2.873166,-0.92637 4.088471,-2.0586 l 2.209645,-2.0586 2.923587,2.3086 c 3.368178,2.65967 3.842225,6.26709 1.64275,12.50107 -1.400448,3.96929 -0.916498,6.39001 1.76582,8.8326 1.147825,1.04525 3.508169,5.10479 6.747268,11.60459 2.080127,4.17412 4.18217,5.3221 6.777443,3.70132 2.026788,-1.26575 2.097344,-0.79716 -2.481511,-16.48078 -2.504801,-8.57952 -2.569897,-9.29457 -1.04441,-11.47251 1.966587,-2.80769 2.047407,-7.4901 0.187273,-10.85003 -1.219538,-2.20284 -1.110131,-2.96589 1.003664,-7 1.304823,-2.49021 3.666455,-6.05613 5.248071,-7.92427 l 2.875667,-3.3966 -4.784664,-6.94548 c -2.631565,-3.82001 -5.086246,-8.31857 -5.454846,-9.9968 -0.904719,-4.11915 -5.213871,-7.74938 -8.448279,-7.11722 -4.206734,0.8222 -7.112908,-0.93904 -8.600157,-5.21198 -2.024195,-5.81562 -1.769342,-6.65789 2.978453,-9.84349 5.128326,-3.44093 6.899328,-7.48653 7.044357,-16.09182 0.05562,-3.3 0.454082,-6.5532 0.885478,-7.22933 1.269545,-1.98978 -1.122848,-5.270669 -3.843315,-5.270669 -1.497968,0 -2.464816,-0.57459 -2.464816,-1.46482 0,-2.51417 -3.407277,-3.63864 -5.847148,-1.92969 -1.185998,0.8307 -2.604749,1.23325 -3.152779,0.89455 -0.54803,-0.3387 -2.038622,0.59581 -3.312426,2.0767 -1.977821,2.299349 -2.625585,2.526839 -4.436086,1.557889 -1.166043,-0.624049 -3.109027,-1.134629 -4.317742,-1.134629 -1.241022,0 -3.725122,-1.61958 -5.706644,-3.7206 l -3.508978,-3.72061 2.418676,-1.02939 c 1.330271,-0.56617 4.021234,-2.26506 5.979917,-3.7753 1.958682,-1.51025 4.983684,-3.241774 6.722226,-3.847834 2.01522,-0.70251 3.160984,-1.77399 3.160984,-2.95606 0,-1.07308 1.902087,-3.1628 4.51534,-4.96077 6.043578,-4.15809 7.874624,-7.09722 7.075439,-11.35724 -0.615505,-3.28093 -0.481241,-3.45109 4.737553,-6.00441 2.954056,-1.44529 6.338659,-2.62779 7.52134,-2.62779 2.508903,0 2.776683,-1.23529 0.650328,-3 -1.899275,-1.57626 -1.909249,-3.4479 -0.0284,-5.32875 1.295469,-1.29547 1.235147,-1.93238 -0.503995,-5.32143 -1.086578,-2.1174 -2.434136,-5.64982 -2.994574,-7.84982 -0.740861,-2.90826 -1.986911,-4.61411 -4.565346,-6.25 -1.950502,-1.2375 -3.965165,-2.25 -4.477027,-2.25 -1.376051,0 -1.130033,-1.76114 0.31934,-2.28602 1,-0.36214 1,-0.87609 0,-2.56976 -2.740863,-4.64211 -2.278656,-4.79167 14.573188,-4.71563 15.538228,0.0701 15.898134,0.12101 19.984842,2.82556 l 4.161655,2.75416 1.464131,-3.50416 c 0.9703,-2.32225 2.1278,-3.50415 3.43182,-3.50415 1.08223,0 2.11987,-0.45652 2.30586,-1.01448 0.20802,-0.62409 2.19839,-0.7595 5.17225,-0.35189 3.6864,0.50528 5.07935,1.20085 5.86708,2.92972 1.51711,3.32971 4.303677,3.61593 7.386657,0.75872 1.78544,-1.65469 3.38177,-2.29311 4.82688,-1.93041 1.18756,0.29806 4.84039,0.84504 8.11741,1.21551 8.8194,0.99706 12.58805,3.26489 15.39911,9.26661 2.16168,4.61528 2.71872,5.10259 6.47716,5.6662 5.61449,0.84194 6.99741,0.37893 7.58644,-2.53998 0.4158,-2.06048 1.1691,-2.55493 4.28473,-2.81244 3.60905,-0.29829 3.7511,-0.19641 3.13709,2.25 -0.59881,2.38587 -0.40094,2.56244 2.87166,2.56244 2.9252,0 3.43378,-0.30978 3.03187,-1.8467 -0.57792,-2.20997 4.80861,-7.1533 7.79463,-7.1533 1.08407,0 3.01206,-1.1233 4.28444,-2.49621 l 2.31341,-2.49622 4.63884,3.54202 c 4.97604,3.79949 5.95925,7.12425 3.18811,10.78066 -1.20491,1.58983 -1.12207,2.27947 0.63058,5.25 2.32933,3.94792 3.90095,4.17134 10.23724,1.45528 4.47912,-1.91997 4.58291,-1.92144 4.58291,-0.0651 0,1.04465 -0.45967,3.1084 -1.0215,4.5861 -0.71307,1.87552 -0.69246,3.08319 0.0682,3.99978 0.59934,0.72217 0.94652,2.80493 0.77149,4.62836 -0.27439,2.85856 -1.12485,3.7909 -6.17283,6.76717 -5.80411,3.42207 -5.85006,3.48563 -5.32893,7.37095 0.33926,2.52935 1.61058,5.03846 3.58509,7.07565 1.68269,1.73609 3.34946,4.60666 3.70394,6.37904 1.10184,5.50923 6.38018,3.67495 6.40981,-2.22748 0.026,-5.18702 1.30268,-6.17183 4.78566,-3.69172 1.65432,1.17794 3.2585,2.14172 3.5649,2.14172 0.30639,0 1.02857,-1.75096 1.60482,-3.89102 1.12675,-4.18443 3.77976,-6.46887 9.11941,-7.85251 2.58752,-0.6705 3.50088,-1.53894 4.00957,-3.81238 0.36232,-1.61925 1.32643,-4.46355 2.14246,-6.32066 0.88103,-2.00501 1.29565,-5.0515 1.02073,-7.5 -0.33682,-2.99988 0.2305,-5.6902 2.08208,-9.87343 2.75458,-6.22342 2.81347,-6.2708 5.80403,-4.6703 1.55941,0.83457 2.41375,0.72105 3.763,-0.5 3.7346,-3.37977 9.01188,-0.98207 17.03769,7.74094 5.4151,5.88552 10.56311,8.95052 18.88711,11.24494 6.0433,1.66576 6.30616,1.86676 5.6764,4.34053 -0.36319,1.42664 -1.03805,8.44389 -1.49969,15.59389 -0.92888,14.38661 -3.01789,23.010254 -8.47476,34.984573 -3.40668,7.47545 -3.44851,7.71042 -1.28022,7.18999 1.23285,-0.29591 3.89962,-0.8383 5.92617,-1.20531 2.02655,-0.36702 4.45879,-1.52274 5.40499,-2.56828 3.36263,-3.71566 4.75226,-2.46693 4.03606,3.62681 -0.60104,5.11391 -0.48032,5.59196 1.61232,6.38484 1.30999,0.49634 2.74565,0.46833 3.41117,-0.0666 2.33766,-1.8788 6.56815,3.48297 9.26733,11.74553 2.06942,6.33474 3.01148,7.9694 4.7343,8.21495 2.40148,0.34228 9.3492,-5.1503 9.3492,-7.39109 0,-1.76491 3.87576,-2.73274 8.99026,-2.245 3.58909,0.34228 4.00974,0.14977 4.00974,-1.83502 0,-3.71056 1.73902,-3.58815 5.42982,0.38219 4.00303,4.30621 4.44228,6.24155 1.58613,6.98845 -2.46308,0.64411 -4.38449,6.73677 -2.96249,9.39382 1.316,2.45897 3.83082,3.74312 6.14513,3.13792 1.31455,-0.34377 1.69775,-1.00789 1.22279,-2.11924 -1.76907,-4.13937 -1.05048,-5.60795 2.90323,-5.93339 3.21281,-0.26446 3.98947,-0.78772 4.85519,-3.27111 0.56681,-1.62596 1.95133,-3.44908 3.07671,-4.05136 1.74726,-0.93511 2.53,-0.5822 5.35861,2.41598 2.98674,3.16579 4.01319,3.58142 10.4382,4.22665 8.22454,0.82596 10.69365,-0.31458 6.55358,-3.02726 -1.43379,-0.93946 -2.6069,-2.45923 -2.6069,-3.37726 0,-0.91803 1.69696,-5.54396 3.19279,-9.55986 1.72483,-4.63073 4.59762,-6.76497 7.21374,-8.59198 3.66401,-2.55881 6.74737,-4.12703 8.13357,-1.8841 1.37691,2.22787 -0.74421,8.20588 -4.10357,11.56525 -3.58665,3.58665 -4.08953,5.2812 -2.46699,8.31294 0.78217,1.46151 3.20215,2.05209 12.52245,3.05606 l 11.55291,1.24445 2.26047,-2.43908 c 1.50426,-1.62312 4.35474,-2.88352 8.52066,-3.76759 6.21416,-1.31874 6.28049,-1.30905 9.0218,1.31729 2.48226,2.37816 3.51675,2.64579 10.22683,2.64579 h 7.46522 l 4.25333,6.89276 c 3.07875,4.98929 4.86826,6.93 6.48006,7.0276 4.44234,0.26899 9.27977,0.23141 11.70897,-0.091 2.0595,-0.2733 2.6738,0.25391 3.60703,3.09564 1.46824,4.47089 4.78012,5.81336 6.89449,2.79468 2.19027,-3.12705 4.61745,-1.27066 6.13948,4.69569 0.667,2.61464 1.47173,5.0129 1.7883,5.32946 0.75784,0.75784 8.33775,-1.5302 9.08734,-2.74307 0.32057,-0.51868 -0.13881,-2.33861 -1.02084,-4.04427 -1.25161,-2.42035 -1.34348,-3.41474 -0.41842,-4.52936 1.81058,-2.18162 5.33026,-1.70651 7.94038,1.07183 1.29175,1.375 3.40964,2.5 4.70643,2.5 1.2968,0 3.99803,0.68533 6.00274,1.52295 4.49357,1.87753 6.18366,0.73202 4.46978,-3.02954 -0.9567,-2.09974 -0.8978,-2.66407 0.32713,-3.13412 2.47172,-0.94849 4.49392,0.42514 4.49392,3.05262 0,1.42671 0.94508,3.13664 2.2317,4.03783 1.22744,0.85973 2.69074,3.1992 3.25178,5.19883 1.43348,5.10916 3.86732,6.44507 6.65792,3.65447 l 2.1692,-2.16919 7.94911,3.99673 c 8.26857,4.15736 8.55226,4.59624 6.37939,9.86942 -1.15187,2.7954 1.03428,4.22439 7.49212,4.89727 3.50283,0.36499 6.93128,1.01397 7.61878,1.44219 1.58623,0.988 1.61287,3.89767 0.05,5.46054 -0.93333,0.93333 -0.87778,1.22559 0.25,1.31515 2.87114,0.22802 5.34072,-0.32492 7.37684,-1.65168 1.36812,-0.89148 3.55966,-1.1497 6.44415,-0.75928 3.61845,0.48975 4.71635,1.17696 6.37701,3.99156 1.91521,3.24604 2.23795,3.38648 7.12901,3.1021 4.72398,-0.27465 5.23631,-0.55542 6.57794,-3.60482 1.19507,-2.71631 1.86565,-3.20389 3.75441,-2.72984 1.31277,0.32948 3.31478,-0.0881 4.66561,-0.97322 3.85203,-2.52386 22.62503,-0.80319 22.62503,2.07382 0,0.27133 -1.37618,3.21953 -3.05818,6.55155 -2.87648,5.69828 -2.96467,6.20093 -1.48434,8.4602 0.86561,1.32109 3.92929,3.73292 6.80818,5.35962 8.94413,5.05383 8.45752,4.46589 6.55712,7.92261 l -1.67721,3.05076 4.42543,2.79578 c 2.43398,1.53768 4.42623,3.06354 4.42721,3.39079 9.9e-4,0.32726 -0.94428,1.4512 -2.10059,2.49764 -3.02668,2.73911 -4.89762,6.80575 -4.89762,10.64539 0,3.24745 0.16786,3.38233 6.23107,5.00689 5.95347,1.59515 6.32102,1.58736 8.25,-0.17485 1.11041,-1.01441 3.92216,-2.79958 6.24832,-3.96704 2.32617,-1.16746 4.89519,-3.41017 5.70895,-4.9838 1.11177,-2.14994 2.65187,-3.15633 6.19578,-4.0487 2.59393,-0.65315 6.02193,-2.28623 7.61778,-3.62905 4.1216,-3.46809 6.29565,-3.13047 8.65241,1.34369 1.00566,1.9092 1.74382,2.18386 4.48643,1.66934 2.55879,-0.48003 4.1457,-0.0314 7.19599,2.0346 2.1523,1.45774 4.51614,3.79367 5.25299,5.19094 0.98186,1.8619 1.63629,2.24393 2.45,1.43022 1.7902,-1.7902 4.87395,-1.35836 4.56824,0.63972 -0.14726,0.9625 0.30568,2.79127 1.00654,4.06392 0.98939,1.7966 1.00783,2.63499 0.0824,3.75 -0.92317,1.11235 -0.91973,1.76395 0.0153,2.89055 0.92936,1.11981 2.67264,1.31761 7.57653,0.85968 l 6.36942,-0.59478 3.19539,5.14031 c 1.75747,2.82718 3.59397,5.14032 4.08111,5.14032 0.48714,0 1.9914,-0.72448 3.3428,-1.60995 3.84441,-2.51895 5.62789,-1.21372 4.86453,3.56007 -0.5939,3.71404 -0.41702,4.12787 2.46848,5.77529 4.07369,2.32581 4.64605,4.10653 2.1678,6.7445 -1.11555,1.18745 -2.02827,2.40378 -2.02827,2.70296 0,1.16321 10.93647,7.72625 15.40009,9.24169 3.47889,1.18111 5.22082,1.32351 6.67437,0.54559 2.66982,-1.42884 3.58192,-0.6446 4.39693,3.78058 1.34374,7.29595 0.97346,10.66793 -1.62073,14.75927 -3.69538,5.82806 -2.47619,8.78129 4.26787,10.338 5.8083,1.34072 6.88147,0.97611 6.88147,-2.338 0,-3.68301 1.9191,-4.02017 4.94133,-0.86813 4.85778,5.06641 8.84622,8.36813 10.10862,8.36813 0.67626,0 1.77341,-0.74375 2.4381,-1.65278 2.33519,-3.19355 3.79217,-0.54071 3.0937,5.63294 -0.70592,6.23951 -0.10827,7.34762 4.60025,8.52938 1.46894,0.36868 3.44867,1.52986 4.39939,2.5804 1.80279,1.99205 6.86493,2.54703 9.27931,1.01732 2.24278,-1.421 4.99002,-0.0849 7.20956,3.50642 2.35167,3.80507 5.92975,4.6416 5.92975,1.38632 0,-2.6883 1.37515,-2.53056 8.87657,1.01819 4.88312,2.31008 6.69527,2.75212 7.73727,1.88733 0.74838,-0.6211 2.15392,-0.80293 3.12343,-0.40408 0.9695,0.39886 3.33773,0.8392 5.26273,0.97853 1.925,0.13934 5.13599,0.94386 7.13554,1.78783 3.72791,1.57348 4.1309,2.54724 5.14061,12.42123 0.21157,2.06893 0.57202,2.15652 6.56992,1.59642 4.85324,-0.4532 6.5551,-0.26243 7.23469,0.81097 1.43727,2.27019 1.16138,2.6521 -4.01991,5.56464 -2.71654,1.52704 -5.41654,3.82417 -6,5.10474 -2.68716,5.89767 0.16054,14.08289 5.91646,17.00582 4.09081,2.07736 4.86533,3.82616 2.08533,4.7085 -1.1261,0.35741 -4.2309,2.37576 -6.89957,4.48522 -4.77275,3.77264 -12.20012,8.03466 -14.00191,8.03466 -0.50519,0 -1.48694,-1.3723 -2.18168,-3.04955 -0.69475,-1.67725 -3.12945,-4.33359 -5.41046,-5.90296 -3.50999,-2.41494 -5.3214,-2.90241 -11.7879,-3.17228 -7.14673,-0.29826 -7.79665,-0.1505 -10.05474,2.28602 -1.32777,1.43269 -3.38439,2.91284 -4.57025,3.28922 -1.18587,0.37638 -2.15613,1.36476 -2.15613,2.19639 0,2.67844 -10.19322,-0.27085 -11.88931,-3.44002 -0.55601,-1.03891 -3.69447,-3.09322 -6.97436,-4.56515 l -5.96343,-2.67623 -3.50447,2.06768 c -4.80514,2.8351 -6.66843,6.06168 -6.66843,11.54739 0,4.45335 -0.29728,4.93546 -7,11.352 -3.85,3.68562 -7,7.21331 -7,7.83932 0,0.626 -4.27811,5.54593 -9.50691,10.93318 -7.13872,7.35503 -10.50161,11.75438 -13.5,17.66079 -2.1962,4.32618 -3.99309,8.71368 -3.99309,9.75 0,1.03631 -0.52844,1.8842 -1.17431,1.8842 -0.64588,0 -0.18316,1.05504 1.02827,2.34454 1.25885,1.33999 1.9473,3.00979 1.60679,3.89716 -0.32769,0.85393 -0.11071,5.04021 0.48216,9.30284 1.21723,8.75154 2.74775,10.75313 7.69156,10.05887 2.84505,-0.39953 3.44523,0.0314 6.5,4.66675 1.85104,2.80881 3.6458,5.51854 3.98836,6.02163 0.36501,0.53607 1.50947,0.44018 2.76483,-0.23167 1.78534,-0.95548 2.2499,-0.84779 2.7899,0.64676 0.35634,0.98621 1.52318,3.05572 2.59298,4.5989 1.62159,2.33914 2.42608,2.70013 4.83727,2.17054 3.18845,-0.7003 3.55731,0.0613 1.40585,2.90263 -1.24804,1.64825 -1.18274,2.34938 0.5318,5.71017 1.075,2.10716 1.95454,4.04155 1.95454,4.29864 0,0.25709 -2.71745,2.1182 -6.03878,4.1358 l -6.03879,3.66837 2.53221,4.32087 2.5322,4.32088 -6.7768,5.84711 c -6.4514,5.56635 -11.63646,8.05012 -20.50094,9.82047 -1.53499,0.30655 -2.53489,0.9716 -2.22199,1.47788 0.3129,0.50628 -0.29636,1.38359 -1.35392,1.94958 -1.05755,0.56598 -2.40138,2.40185 -2.98628,4.0797 -0.88627,2.54235 -1.45766,2.95169 -3.42939,2.45682 -1.51988,-0.38147 -2.83017,-0.0344 -3.66417,0.97047 -0.71403,0.86036 -2.12078,1.56429 -3.1261,1.56429 -1.00533,0 -2.24759,0.75 -2.76058,1.66667 -0.97851,1.74849 -4.76723,2.15237 -9.36527,0.99833 -2.20632,-0.55375 -3.02928,-0.15372 -4.80022,2.33334 -1.98771,2.79149 -2.57022,2.99879 -8.31927,2.96065 -5.79381,-0.0384 -6.46442,-0.29543 -10.68191,-4.09345 z M 252.4679,408.56565 c 1.24387,-1.58606 1.2085,-1.62143 -0.37756,-0.37756 -0.9625,0.75485 -1.75,1.54235 -1.75,1.75 0,0.82304 0.82119,0.29331 2.12756,-1.37244 z";export{T as default};
