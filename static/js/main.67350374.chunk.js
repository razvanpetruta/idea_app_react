(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{36:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),r=n.n(c);var o=function(){const[e,t]=Object(a.useState)((new Date).toLocaleDateString()),[n,c]=Object(a.useState)((new Date).toLocaleTimeString());return setInterval(()=>{c((new Date).toLocaleTimeString())},1e3),setInterval(()=>{t((new Date).toLocaleDateString())},1e3),l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright ",e," ",n))},i=n(29),u=n.n(i);var m=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null)," Idea"))},s=n(31),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{className:"delete-button",onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},d=n(32),f=n.n(d),v=n(65),h=n(66);var g=function(e){const[t,n]=Object(a.useState)(!1),[c,r]=Object(a.useState)({title:"",content:""});function o(e){const{value:t,name:n}=e.target;r(e=>({...e,[n]:t}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},t&&l.a.createElement("input",{name:"title",onChange:o,value:c.title,placeholder:"Title"}),l.a.createElement("textarea",{onClick:function(){n(!0)},name:"content",value:c.content,onChange:o,placeholder:"Write an idea...",rows:t?3:1}),l.a.createElement(h.a,{in:t},l.a.createElement(v.a,{onClick:function(t){e.onAdd(c),t.preventDefault(),r({title:"",content:""})}},l.a.createElement(f.a,null)))))};var b=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement("div",{className:"main"},l.a.createElement(m,null),l.a.createElement(g,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement("div",{className:"push"})),l.a.createElement(o,null))};r.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.67350374.chunk.js.map