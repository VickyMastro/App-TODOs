(this["webpackJsonpapp-todo"]=this["webpackJsonpapp-todo"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),r=n.n(a),s=(n(12),n(6)),l=n(2);var i=n(0),u=o.a.createContext();function d(e){var t=function(e,t){var n=o.a.useState(!0),c=Object(l.a)(n,2),a=c[0],r=c[1],s=o.a.useState(!1),i=Object(l.a)(s,2),u=i[0],d=i[1],j=o.a.useState(t),m=Object(l.a)(j,2),b=m[0],O=m[1];return setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),r(!1)}catch(u){d(!0)}}),1e3),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(u){d(!0)}},loading:a,error:u}}("TODOS_V1",[]),n=t.item,c=t.saveItem,a=t.loading,r=t.error,d=o.a.useState(""),j=Object(l.a)(d,2),m=j[0],b=j[1],O=o.a.useState(!1),h=Object(l.a)(O,2),x=h[0],f=h[1],p=[];p=!m.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=m.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{error:r,loading:a,todos:n,searchValue:m,setSearchValue:b,searchedTodos:p,addTodo:function(e){var t=Object(s.a)(n);t.push({complete:!1,text:e}),c(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);o[t].complete=!o[t].complete,c(o)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);o.splice(t,1),c(o)},openModal:x,setOpenModal:f},children:e.children})}n(14);function j(){var e=o.a.useContext(u).todos,t=e.filter((function(e){return!!e.complete})).length,n=e.length;return Object(i.jsxs)("h2",{className:"todoCounter",children:["Completaste ",t," de ",n," TODOs"]})}n(15);function m(){var e=o.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"InputSearch",placeholder:"Busca tu tarea...",value:t,onChange:function(e){n(e.target.value)}})}n(16);function b(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(17);function O(e){return Object(i.jsxs)("li",{className:"Item",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u2714"}),Object(i.jsx)("p",{className:"Item-p ".concat(e.completed&&"Item-p--completed"),children:e.texts}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(18);function h(e){var t=o.a.useContext(u).setOpenModal;return Object(i.jsx)("button",{className:"Button",onClick:function(){t((function(e){return!e}))},children:"+"})}n(19);function x(e){var t=e.children,n=o.a.useContext(u).setOpenModal;return r.a.createPortal(Object(i.jsx)("div",{className:"modalBackground",id:"modalBackground",onClick:function(e){"modalBackground"===e.target.id&&n(!1)},children:t}),document.getElementById("modal"))}n(20);function f(){var e=o.a.useState(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=o.a.useContext(u),r=a.addTodo,s=a.setOpenModal,d=function(e){e.preventDefault(),n?(r(n),s(!1)):alert("No podes agregar un TODO vacio")};return Object(i.jsx)("form",{onSubmit:d,className:"formulario",children:Object(i.jsxs)("div",{className:"form-container",children:[Object(i.jsx)("label",{children:"Escribe tu tarea"}),Object(i.jsx)("hr",{}),Object(i.jsx)("textarea",{value:n,onChange:function(e){c(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),d(e))},placeholder:"Escribe aqu\xed",className:"textarea",rows:"6",cols:"18"}),Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",onClick:function(){s(!1)},className:"cancel",children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",className:"submit",children:"A\xf1adir"})]})]})})}function p(){var e=o.a.useContext(u),t=e.error,n=e.loading,c=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(m,{}),Object(i.jsxs)(b,{children:[t&&Object(i.jsx)("p",{style:{color:"white"},children:"DESESPERATE"}),n&&Object(i.jsx)("p",{style:{color:"white"},children:"Estamos cargando todo"}),!n&&!c.length&&Object(i.jsx)("p",{style:{color:"white"},children:"Crea tu primer todo"}),c.map((function(e){return Object(i.jsx)(O,{texts:e.text,completed:e.complete,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),s&&Object(i.jsx)(x,{children:Object(i.jsx)(f,{})}),Object(i.jsx)(h,{})]})}var v=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(p,{})})};r.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.54de2ba0.chunk.js.map