(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[6],{104:function(e,t,c){},105:function(e,t,c){"use strict";c(0),c(104);var n=c.p+"static/media/trading.c31da198.jpg",s=c(2);t.a=function(e){return e.isOpen,e.onClose,Object(s.jsx)("div",{className:"trading container d-flex justify-content-center align-items-center vh-100",children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("img",{src:n,width:"50%",alt:"Image",className:"img-fluid"}),Object(s.jsx)("h2",{className:"mt-3",children:"Trading has not yet started!!"}),Object(s.jsx)("p",{className:"lead",children:"Please be advised that trading has not yet begun for the day. If you are attempting to place a trade, please wait until trading commences before doing so. Thank you for your patience and understanding."})]})})}},123:function(e,t,c){},130:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(4),a=c(9),r=c.n(a),i=c(1),l=c.n(i),d=c(6),o=c(5),j=c(94),b=c(10),u=c(7),m=c(17),h=c(105),O=c(97),x=c(25),f=c(102),p=c(128),v=(c(123),c(2)),g=function(e){var t=function(t){27===(t.charCode||t.keyCode)&&e.onClose()};return Object(n.useEffect)((function(){return document.body.addEventListener("keydown",t),function(){document.body.removeEventListener("keydown",t)}}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(p.a,{in:e.show,unmountOnExit:!0,timeout:{enter:0,exit:300},children:Object(v.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(v.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(v.jsx)("div",{className:"modal-header",children:Object(v.jsx)("h4",{className:"modal-title",children:e.title})}),Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("table",{className:"modaltable table-bordered",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Lot"}),Object(v.jsx)("th",{scope:"col",children:"Factory"}),Object(v.jsx)("th",{scope:"col",children:"Price"}),Object(v.jsx)("th",{scope:"col",children:"Bidder"}),Object(v.jsx)("th",{scope:"col",children:"Status"})]})}),Object(v.jsx)("tbody",{children:e.filteredData.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("h4",{children:t+1})}),Object(v.jsx)("td",{children:Object(v.jsx)("h4",{children:e.lot})}),Object(v.jsx)("td",{children:Object(v.jsx)("h4",{children:e.factory_name})}),Object(v.jsx)("td",{children:Object(v.jsx)("h4",{children:e.maximum_bid})}),Object(v.jsx)("td",{children:Object(v.jsx)("h4",{children:e.buyer_name})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:1===e.sold_status?"hname":(e.sold_status,"rname"),children:1===e.sold_status?"Sold":2===e.sold_status?"Unsold":"Pending"})})]},t)}))})]})}),Object(v.jsx)("div",{className:"modal-footer",children:Object(v.jsx)("button",{onClick:e.onClose,className:"btn btn-danger",children:"Close"})})]})})})})},N=c(109),y=c.n(N),k=c(103),S=c(46),_=function(e){var t=e.sl,c=e.index,n=e.time,s=e.el,a=e.users,r=e.formatTime,i=e.manualmode,l=e.selectedIndex,d=e.handleInputChange,o=e.addBid,j=e.handleInc,b=e.disabledButtons,u=e.setSelectedIndex,m=e.setManualmode;return Object(v.jsx)("div",{className:"col-md-3 col-sm-12 col-xs-12 list",children:Object(v.jsxs)("div",{className:"card mb-4",children:[Object(v.jsxs)("div",{className:"badge",children:["Lot- ",s.lot]}),Object(v.jsxs)("div",{className:"red-digit",children:[" ",t]})," ",Object(v.jsxs)("div",{className:"card-body ",children:[Object(v.jsxs)("span",{className:"text-white bg-l px-2 py-1 rounded-pill animate__animated animate__flash animate__infinite",children:["Live ",r(n),Object(v.jsx)("span",{className:"dot"})]}),Object(v.jsxs)("div",{className:"mt-3 row",children:[Object(v.jsxs)("div",{className:"col-md-7 col-sm-7 col-xs-7 border-right",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col custom-bg-1 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"FACTORY"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.factory_name})]}),Object(v.jsxs)("div",{className:"col custom-bg-2 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"INVOICE"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.invoice})]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col custom-bg-3 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"LOT"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.lot})]}),Object(v.jsxs)("div",{className:"col custom-bg-4 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"PRICE"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.price})]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col custom-bg-5 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"QTY"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.pkgs})]}),Object(v.jsxs)("div",{className:"col custom-bg-6 custom-padding",children:[Object(v.jsx)("p",{className:"header-text text-center",children:"GRADE"}),Object(v.jsx)("p",{className:"card-text text-center",children:s.grade})]})]}),Object(v.jsx)("div",{className:"row mxcom",children:!0===i&&l===c||0===s.maximum_bid?Object(v.jsxs)("div",{className:"mn-bid col-12",children:[Object(v.jsxs)("h5",{className:"card-price",children:["Max.",s.maximum_bid]}),Object(v.jsx)("input",{className:"form-control m_bid",autoComplete:"off",type:"number",id:"name".concat(s.id),name:"name",value:s.name,onChange:function(e){return d(e,c)}})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h5",{className:"card-price",children:["Max.",s.maximum_bid]}),Object(v.jsxs)("span",{className:s.buyer===a.link_id?"hname":"rname",children:[s.buyer_name,"(",s.maximum_bid-s.price,")"]}),Object(v.jsx)("br",{})]})})]}),Object(v.jsx)("div",{className:"col-md-5 d-flex justify-content-center align-items-center col-sm-5 col-xs-5 b-bg",children:0===s.maximum_bid?Object(v.jsx)("button",{disabled:"BIDDER"!==a.type,onClick:function(){return o(s,c)},className:"btn btn-danger square-circle",children:Object(v.jsx)(S.a,{className:"bid"})},s.id+10):Object(v.jsx)("div",{className:"col-12 b-bg",children:Object(v.jsx)("div",{className:"bidcont mb-2",children:1===s.sold_status?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:"SOLD"})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("button",{disabled:b.includes(c),onClick:function(){return j(s,c)},className:"btn btn-danger square-circle bidbtn",children:[Object(v.jsx)(S.a,{className:"bid"})," +1"]},s.id+11),Object(v.jsxs)("button",{onClick:function(){!0===i&&l===c?o(s,c):(m(!0),u(c))},className:"btn btn-primary square-circle bidbtn",children:[Object(v.jsx)(S.a,{className:"bid"})," BID"]},s.id)]})})})})]})]})]})})},I=function(e){var t=e.time,c=e.list,n=e.startIndex,s=e.endIndex,a=e.users,r=e.formatTime,i=e.manualmode,l=e.selectedIndex,d=e.handleInputChange,o=e.addBid,j=e.handleInc,b=e.disabledButtons,u=e.setManualmode,m=e.setSelectedIndex;return Object(v.jsx)("div",{className:"con",children:Object(v.jsx)("div",{className:"row g-1",children:c.slice(n,s+3).map((function(e,c){return Object(v.jsx)(_,{sl:n+c+1,time:t,el:e,index:c,setManualmode:u,setSelectedIndex:m,users:a,formatTime:r,manualmode:i,selectedIndex:l,handleInputChange:d,addBid:o,handleInc:j,disabledButtons:b},e.id+9)}))})})},w=f.a.connect("http://68.183.81.28:3009"),C=function(){Object(s.n)();var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],i="http://68.183.81.28:3009",f=Object(m.b)(),p=Object(m.c)((function(e){return e.auction})).auction_data,N=localStorage.getItem("users"),S=JSON.parse(N),_=Object(n.useState)([]),C=Object(u.a)(_,2),E=C[0],D=C[1],P=Object(n.useState)(""),B=Object(u.a)(P,2),L=(B[0],B[1]),F=Object(n.useState)(""),T=Object(u.a)(F,2),R=T[0],M=T[1],A=Object(n.useState)(""),q=Object(u.a)(A,2),U=q[0],J=q[1],V=Object(n.useState)(),Y=Object(u.a)(V,2),G=Y[0],K=Y[1],z=Object(n.useState)([]),Q=Object(u.a)(z,2),W=Q[0],H=Q[1],X=Object(n.useState)([]),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ce=Object(u.a)(te,2),ne=(ce[0],ce[1]),se=Object(n.useState)([]),ae=Object(u.a)(se,2),re=ae[0],ie=ae[1],le=Object(n.useState)(null),de=Object(u.a)(le,2),oe=de[0],je=de[1],be=Object(n.useState)(0),ue=Object(u.a)(be,2),me=ue[0],he=ue[1],Oe=Object(n.useState)(1),xe=Object(u.a)(Oe,2),fe=xe[0],pe=xe[1],ve=Object(n.useState)(0),ge=Object(u.a)(ve,2),Ne=ge[0],ye=ge[1],ke=Object(n.useState)(!1),Se=Object(u.a)(ke,2),_e=(Se[0],Se[1]),Ie=Object(n.useState)(!0),we=Object(u.a)(Ie,2),Ce=we[0],Ee=we[1],De=Object(n.useState)(0),Pe=Object(u.a)(De,2),Be=Pe[0],Le=Pe[1],Fe=Object(n.useState)(!1),Te=Object(u.a)(Fe,2),Re=Te[0],Me=Te[1],Ae=Object(n.useState)(!1),qe=Object(u.a)(Ae,2),Ue=qe[0],Je=qe[1],Ve=Object(n.useState)(!1),Ye=Object(u.a)(Ve,2),Ge=Ye[0],Ke=Ye[1],ze=Object(n.useState)(!1),Qe=Object(u.a)(ze,2),We=Qe[0],He=Qe[1],Xe=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("".concat(i,"/getselectbroker")).then((function(e){w.emit("user",e.data[0].current_brokers)})).catch((function(e){console.log(e)}));case 2:f(x.c),a(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,a,d,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.maximum_bid,a=s+.5*s,null==(d=(null===(n=E[c])||void 0===n?void 0:n.name)||null)){e.next=26;break}if(!(0===s||d<=a)){e.next=25;break}if(!(0!==s&&d<s)){e.next=10;break}alert("Bid value should be greater than or equal to the maximum bid."),e.next=23;break;case 10:return e.prev=10,o={id:t.id,bid:d,buyer:S.link_id},e.next=14,r.a.put("".concat(i,"/manualbid"),o);case 14:return e.next=16,r.a.get("".concat(i,"/getselectbroker"));case 16:j=e.sent,w.emit("user",j.data[0].current_brokers),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),console.log(e.t0);case 23:e.next=26;break;case 25:alert("You can only bid up to 50% of the maximum bid.");case 26:He(!1);case 27:case"end":return e.stop()}}),e,null,[[10,20]])})));return function(t,c){return e.apply(this,arguments)}}(),$e=function(){"visible"===document.visibilityState&&r.a.get("".concat(i,"/getselectbroker")).then((function(e){0===e.data[0].auction?Ee(!0):Ee(!1)})).catch((function(e){console.error("Error fetching data:",e)}))},et=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie((function(e){return[].concat(Object(b.a)(e),[c])})),Ke(!0),n=new Audio(O.a),s=W.map((function(e,c){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{maximum_bid:e.maximum_bid+1,buyer:S.link_id,key:c}):Object(j.a)(Object(j.a)({},e),{},{key:c})})),a=s.filter((function(e){return e.id===t.id})),e.prev=5,e.next=8,r.a.put("".concat(i,"/updateauction"),a);case 8:w.emit("user",G),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:return e.prev=14,H(s),n.play(),ne(!1),Ke(!1),ie((function(e){return e.filter((function(e){return e!==c}))})),e.finish(14);case 21:case"end":return e.stop()}}),e,null,[[5,11,14,21]])})));return function(t,c){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=function(e){ye(e)},t=function(e){he(e)},c=function(e){pe(e)};return w.on("activeUsers",e),w.on("startIndex",t),w.on("endIndex",c),w.emit("getObjects"),function(){w.off("activeUsers",e),w.off("startIndex",t),w.off("endIndex",c)}}),[]);var tt=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,s,a,d,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,e.prev=1,e.next=4,r.a.get("".concat(i,"/getselectbroker"));case 4:c=e.sent,t&&(n=c.data[0],s=n.auction,a=n.current_brokers,d=n.name,o=n.id,Ee(0===s),Promise.all([M(d),J(o),K(a)]).then((function(){w.emit("user",a),w.on("user_toggle",(function(e){_e(e===S.link_id)}))}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=!0;Je(!0),setTimeout((function(){Je(!1)}),1e3);var t=function(){Me(!0)},c=function(){Me(!1)},n=function(e){Le(e)};return w.on("visibility",$e),w.on("start",t),w.on("stop",c),w.on("time",n),tt(),w.on("users",(function(t){if(e){t.filter((function(e){return 0===e.sold_status}));H(t),ee(t)}})),w.on("checkname",(function(t){e&&M(t)})),function(){e=!1,w.off("visibility",$e),w.off("start",t),w.off("stop",c),w.off("time",n),w.off("users"),w.off("checkname"),w.off("user_toggle")}}),[w]),Object(n.useEffect)((function(){var e=function(){Me(!0)},t=function(){Me(!1)},c=function(e){Le(e)};return w.on("visibility",$e),w.on("start",e),w.on("stop",t),w.on("time",c),document.addEventListener("visibilitychange",$e),function(){!1,document.removeEventListener("visibilitychange",$e),w.off("visibility",$e),w.off("start",e),w.off("stop",t),w.off("time",c)}}),[]),Object(n.useEffect)((function(){var e;if(Re){var t=Object(k.throttle)((function(){w.emit("tick")}),1e3);e=setInterval(t,1e3)}else clearInterval(e);return function(){return clearInterval(e)}}),[Re]);var ct=function(e){var t=Math.floor(e/60).toString().padStart(2,"0"),c=(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(c)},nt=$.filter((function(e){return e.buyer===S.link_id})),st=$.filter((function(e){return e.brokers===U&&0!=e.buyer}));return Object(v.jsxs)(v.Fragment,{children:[Ge?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"overlay",children:Object(v.jsxs)("div",{className:"spinner-container",children:[Object(v.jsx)("div",{className:"spinner"}),Object(v.jsx)("span",{children:"Verifying data..."})]})})}):"",Ue&&""!==S.type?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(v.jsx)(y.a,{type:"spin",color:"#007bff",height:50,width:50}),Object(v.jsx)("div",{style:{marginTop:"20px",fontSize:"16px",fontWeight:"bold"},children:"Verifying Data..."})]})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{title:"My Lot",onClose:function(){return a(!1)},show:c,filteredData:"BROKERS"===S.type?st:nt}),Object(v.jsxs)("div",{className:"section-head sec-h",children:[Object(v.jsxs)("p",{className:"br-n",children:["=",R,"="]}),Object(v.jsxs)("div",{className:"row newc",children:[Object(v.jsxs)("div",{className:"col-7 col-md-9 card-btn leftCard",children:[Object(v.jsxs)("h2",{children:["Auction Date:"," ",0===p.length?"":p[0].date," "]}),Object(v.jsxs)("p",{children:["SALE NO - #",0===p.length?"":p[0].sale_no," ",Ne," "]}),Object(v.jsxs)("p",{children:["Season - #",0===p.length?"":p[0].season," "]}),Object(v.jsxs)("p",{children:["CURRENT BROKER :"," ",Object(v.jsx)("span",{className:"c_brokers",children:R})," "]}),Object(v.jsx)("div",{className:" row margin-left",children:Object(v.jsx)("button",{type:"button",onClick:Xe,className:"col-5 buttonGroup btn btn-success my-btn",children:"My Lot"})})]}),Object(v.jsx)("div",{className:"col-5 col-md-3 align-items-center justify-content-center mt-5 rCard",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"row rightCard",children:Object(v.jsxs)("div",{className:" ",children:[Object(v.jsx)("div",{className:"col-md-6 count-t",children:Object(v.jsx)("h2",{className:"text-center mh2",children:ct(Be)})}),Object(v.jsx)("div",{className:"col-md-6 name-t",children:Object(v.jsx)("h2",{className:"mh2 text-center",children:S.short_name})})]})}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"col-md-12 name-t mh3",children:Object(v.jsxs)("h4",{className:" text-center",children:["Total : ",W.length," Lot"]})})})]})})})]})]}),Ce&&"BIDDER"===S.type?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"text-center  p-h",children:["-=",S.type," PANEL=-"]}),Object(v.jsx)(h.a,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{className:"text-center p-h",children:["-=",S.type," PANEL=-"]}),Object(v.jsx)("hr",{className:"hr-h"}),Object(v.jsx)(I,{time:Be,list:W,startIndex:me,endIndex:fe,users:S,formatTime:ct,manualmode:We,selectedIndex:oe,handleInputChange:function(e,t){var c=e.target,n=c.name,s=c.value;D((function(e){var c=Object(b.a)(e);return c[t]=Object(j.a)(Object(j.a)({},c[t]),{},Object(o.a)({},n,s)),c})),L(t)},addBid:Ze,handleInc:et,disabledButtons:re,setManualmode:He,setSelectedIndex:je})]})]})]})};t.default=function(){var e=Object(s.n)();return Object(n.useEffect)((function(){var t=sessionStorage.getItem("token");e(t?"/bidders":"/")}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("section",{className:"content-header"}),Object(v.jsx)("section",{className:"content",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-xs-12",children:Object(v.jsx)(C,{})})})})]})}},94:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(5);function s(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?s(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},97:function(e,t,c){"use strict";t.a=c.p+"static/media/message.17f316c9.mp3"}}]);
//# sourceMappingURL=6.f7152324.chunk.js.map