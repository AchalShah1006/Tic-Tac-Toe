(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),a=t.n(n),i=t(6),j=t.n(i),l=(t(13),t(7)),r=t(2);t(14);function b(){var e=Object(n.useState)(Array(9).fill(null)),c=Object(r.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(0),j=Object(r.a)(i,2),b=j[0],O=j[1],d=Object(n.useState)(0),o=Object(r.a)(d,2),u=o[0],h=o[1],x=Object(n.useState)(!1),p=Object(r.a)(x,2),m=p[0],f=p[1],v=Object(n.useState)(!1),N=Object(r.a)(v,2),y=N[0],S=N[1],T=Object(n.useState)(1),P=Object(r.a)(T,2),g=P[0],k=P[1],w=Object(n.useState)(0),X=Object(r.a)(w,2),B=X[0],C=X[1],J=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],R=function(e){if(!m){var c=Object(l.a)(t);null===c[e]&&(c[e]=y?"X":"O",a(c),S(!y)),function(e){for(var c=0;c<J.length;c++){var s=Object(r.a)(J[c],3),n=s[0],i=s[1],j=s[2];e[n]&&e[n]===e[i]&&e[n]===e[j]&&("O"===e[n]?(O((function(e){return e+1})),C(1)):"X"===e[n]&&(h((function(e){return e+1})),C(2)),f(!0),setTimeout((function(){k((function(e){return e+1})),C(0),a(t.fill(null,0)),S(!1),f(!1)}),2e3))}}(c)}};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("nav",{children:Object(s.jsx)("div",{id:"logoName",children:Object(s.jsx)("h3",{children:"Tic Tac Toe"})})}),Object(s.jsxs)("main",{children:[Object(s.jsxs)("div",{className:"pointTable",children:[Object(s.jsx)("h2",{children:"Points Table"}),Object(s.jsxs)("div",{className:"points",children:[Object(s.jsxs)("div",{className:"player p1",children:["Player1: ",Object(s.jsx)("span",{id:"point1",children:b})]}),Object(s.jsxs)("div",{className:"player p2",children:["Player2: ",Object(s.jsx)("span",{id:"point2",children:u})]})]}),Object(s.jsxs)("div",{className:"round",children:["Round: ",g]}),Object(s.jsx)("div",{className:"player",children:Object(s.jsx)("button",{className:"reset",onClick:function(){O(0),h(0),k(0),a(t.fill(null,0)),S(!1),f(!1)},children:"Reset"})})]}),Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"board",children:[0,1,2,3,4,5,6,7,8].map((function(e){return Object(s.jsx)("button",{className:"row",value:e,onClick:function(){R(e)},children:null!==t[e]?"O"===t[e]?Object(s.jsx)("span",{className:"p1",children:"O"}):Object(s.jsx)("span",{className:"p2",children:"X"}):Object(s.jsx)("span",{})},e)}))})})]}),Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"alertBox",children:0!==B?1===B?Object(s.jsx)("span",{className:"p1",children:"Player 1 Wins!"}):Object(s.jsx)("span",{className:"p2",children:"Player 2 Wins!"}):Object(s.jsx)("span",{})})})]})}j.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.de323015.chunk.js.map