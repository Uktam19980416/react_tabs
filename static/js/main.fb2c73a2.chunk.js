(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),b=n(1),d=n(0),o=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected;return Object(d.jsxs)("div",{children:[n.map((function(t){return Object(d.jsx)("button",{type:"button",onClick:function(){c!==t.id&&i(t)},children:t.title},t.id)})),Object(d.jsx)("div",{"data-cy":"tab-content",children:Object(d.jsx)("p",{children:null===(e=n.find((function(t){return c===t.id})))||void 0===e?void 0:e.content})})]})},s=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),r=function(){var t=Object(b.useState)(s[0]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Selected tab is ".concat(n.title)}),Object(d.jsx)(o,{tabs:s,selectedTabId:n.id,onTabSelected:function(t){c(t)}})]})};i.a.render(Object(d.jsx)(r,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.fb2c73a2.chunk.js.map