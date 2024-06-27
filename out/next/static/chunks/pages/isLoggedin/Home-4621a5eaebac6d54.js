(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{5517:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/isLoggedin/Home",function(){return s(3295)}])},647:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(7066);function l(e){(0,n.Z)({method:"get",maxBodyLength:1/0,url:"https://api.upstox.com/v2/portfolio/long-term-holdings",headers:{Authorization:"Bearer ".concat(e),Accept:"application/json"}}).then(e=>e.data).catch(e=>{console.log(e)})}s(7294)},7341:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(5893);function l(){let e=()=>{chrome.tabs.create({url:"".concat("https://stock-monitor-backend-theta.vercel.app","/login")})};return(0,n.jsx)("div",{className:"h-[200px] flex",children:(0,n.jsx)("button",{className:"bg-[#41246E] text-white w-1/3 h-[40px] p-2 rounded-md hover:w-[40%] hover:h-[50px] transition-all m-auto text-sm active:w-[37%] active:h-[45px] hover:text-lg hover:bg-[#6c48a3]",onClick:e,children:"Login"})})}s(7294)},6616:function(e,t,s){"use strict";s.r(t),s.d(t,{AccessContext:function(){return o},default:function(){return i}});var n=s(5893),l=s(7294),a=s(3295),c=s(7341),r=s(7066);let o=l.createContext();function i(){let[e,t]=(0,l.useState)(!1),[s,i]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=new Date().getTime(),s=JSON.parse(localStorage.getItem("accessData"));s&&(e-s.token_creation_time)/1e3<3e4?(i(s.access_token),t(!0)):r.Z.get("https://stock-monitor-backend-theta.vercel.app/getLogin").then(s=>{if(s.data){let n={access_token:s.data,token_creation_time:e};localStorage.setItem("accessData",JSON.stringify(n)),i(s.data),t(!0)}}).catch(e=>console.error("Error:",e))}),(0,n.jsx)(o.Provider,{value:s,children:(0,n.jsx)("div",{className:"h-5/6",children:e?(0,n.jsx)(a.default,{}):(0,n.jsx)(c.default,{})})})}},3295:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(5893),l=s(7294),a=s(6307),c=s(8619);function r(){let[e,t]=(0,l.useState)("holding");return(0,n.jsxs)("div",{className:"h-full ",children:[(0,n.jsxs)("div",{className:"bg-[#5A298B] flex flex-row justify-around w-full m-auto h-",children:[(0,n.jsx)("button",{className:"headerButton text-sm text-white p-3 tracking-widest",onClick:()=>{t("holding")},children:"Holding"}),(0,n.jsx)("button",{className:"headerButton text-sm text-white p-3 tracking-widest",onClick:()=>{t("portfoliolist")},children:"Portfolio"})]}),(0,n.jsx)("div",{className:"bg-white",children:"holding"==e?(0,n.jsx)(c.default,{}):(0,n.jsx)(a.default,{})})]})}},8619:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n=s(5893),l=s(7294);function a(e){return console.log(e.props.company_name),(0,n.jsxs)("div",{className:"border rounded-xl  m-2 w-3/4 p-3 flex flex-row justify-between",children:[(0,n.jsxs)("span",{className:"flex flex-col",children:[(0,n.jsx)("h1",{className:"text-md",children:e.props.company_name}),(0,n.jsx)("h1",{className:"text-[12px]",children:"Current ₹"+e.props.last_price})]}),(0,n.jsxs)("span",{className:"m-auto",children:[(0,n.jsx)("p",{className:"text-[10px] text-center w-1/2 m-auto",children:"P/L"}),(0,n.jsx)("h2",{className:"text-sm m-auto ".concat(e.props.pnl>0?"text-green-600":"text-red-600"),children:"₹"+e.props.pnl})]})]})}var c=s(6616),r=s(647),o=s(1664),i=s.n(o);function x(){let e=(0,l.useContext)(c.AccessContext),[t,s]=(0,l.useState)(null),[o,x]=(0,l.useState)(!0);(0,l.useEffect)(()=>{let t=new Date;t.getHours<16&&8<t.getHours?setInterval(()=>{s((0,r.default)(e)),x(!1)},1810):(s((0,r.default)(e)),x(!1))},[]);let d=0;return(0,n.jsxs)("div",{className:"flex flex-row",children:[o?(0,n.jsx)("p",{className:"m-auto",children:"Loading..."}):(0,n.jsx)("div",{className:"flex flex-col",children:null==t?void 0:t.data.map(e=>(d+=e.pnl,(0,n.jsx)(a,{props:e})))}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("span",{className:"flex flex-col mt-10",children:[(0,n.jsx)("p",{className:"text-center font-sm]",children:"Net P/L"}),(0,n.jsx)("p",{className:"text-sm m-auto ".concat(d>0?"text-green-600":"text-red-600"),children:"₹"+d.toFixed(2)})]}),(0,n.jsx)(i(),{className:"bg-[#41246E] text-white w-full   h-[40px] p-2 rounded-md transition-all m-auto text-sm active:bg-[#986bdb] hover:bg-[#6c48a3] text-center",href:"https://pro.upstox.com/",children:"Open Upstox"})]})]})}},6307:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(5893),l=s(7294),a=s(6616),c=s(647);function r(){let e=(0,l.useContext)(a.AccessContext),[t,s]=(0,l.useState)(null),[r,o]=(0,l.useState)(!0);(0,l.useEffect)(()=>{let t=new Date;t.getHours<16&&8<t.getHours?(console.log("in else"),setInterval(()=>{s((0,c.default)(e)),o(!1)},1810)):(console.log("in else"),console.log((0,c.default)(e)),o(!1))},[]);let i=0,x=0;null==t||t.forEach(e=>{x+=e.pnl,i+=e.last_price*e.quantity});let d=i+x;return(0,n.jsxs)("div",{children:[r&&(0,n.jsx)("p",{className:"w-1/2 text-center m-auto",children:"Loading..."}),(0,n.jsxs)("div",{className:" flex flex-row ",children:[(0,n.jsxs)("span",{className:"flex flex-col flex-auto border rounded-xl m-3",children:[(0,n.jsx)("h1",{className:"text-[12px] text-center",children:"Invested Amount"}),(0,n.jsx)("h1",{className:"text-md text-center",children:i})]}),(0,n.jsxs)("span",{className:"flex flex-col flex-auto border rounded-xl m-3",children:[(0,n.jsx)("h1",{className:"text-[12px] text-center",children:"Portfolio"}),(0,n.jsx)("h1",{className:"text-md text-center ".concat(d>i?"text-green-600":"text-red-600"),children:d})]})]}),(0,n.jsxs)("span",{className:"flex flex-col  border rounded-xl m-3",children:[(0,n.jsx)("p",{className:"text-center font-sm",children:"Net P/L"}),(0,n.jsx)("p",{className:"text-sm m-auto ".concat(d>0?"text-green-600":"text-red-600"),children:"₹"+d.toFixed(2)})]})]})}}},function(e){e.O(0,[66,664,774,888,179],function(){return e(e.s=5517)}),_N_E=e.O()}]);