(this.webpackJsonphu_test=this.webpackJsonphu_test||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),o=t(6),r=t(3),u=t(1),s=t(0),i=function(e){var n=e.name,t=e.number,c=e.onClick;return Object(s.jsxs)("li",{className:"person",children:[n," ",t," ",Object(s.jsx)("button",{className:"deletebutton",onClick:c,children:"delete"})]})},l=function(e){var n=e.text,t=e.search,c=e.updateSearch;return Object(s.jsxs)("div",{className:"input",children:[n," ",Object(s.jsx)("input",{value:t,onChange:c})]})},d=function(e){var n=e.name,t=e.value,c=e.onChange;return Object(s.jsxs)("div",{className:"input",children:[n,Object(s.jsx)("input",{value:t,onChange:c})]})},m=function(e){var n=e.newN,t=e.newN2,c=e.handlenew,a=e.handlenew2,o=e.addName,r=e.name1,u=e.name2;return Object(s.jsxs)("form",{onSubmit:o,children:[Object(s.jsx)(d,{name:r,value:n,onChange:c}),Object(s.jsx)(d,{name:u,value:t,onChange:a}),Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("button",{className:"button",type:"submit",children:"add to phonebook"})})]})},b=t(4),j=t.n(b),f="/api/persons",h=function(){return j.a.get(f).then((function(e){return e.data}))},O=function(e){return j.a.post(f,e).then((function(e){return e.data}))},p=function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){j.a.delete("".concat(f,"/").concat(e))},x=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"success",children:n})},w=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"error",children:n})},g=function(){Object(u.useEffect)((function(){console.log("effect"),h().then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]);var e=Object(u.useState)([{name:"Arto Hellas",number:"040-123456"},{name:"Ada Lovelace",number:"39-44-5323523"},{name:"Dan Abramov",number:"12-43-234345"},{name:"Mary Poppendieck",number:"39-23-6423122"}]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=t.map((function(e){return e.name})),d=Object(u.useState)(""),b=Object(r.a)(d,2),j=b[0],f=b[1],g=Object(u.useState)(null),N=Object(r.a)(g,2),S=N[0],k=N[1],C=Object(u.useState)(null),y=Object(r.a)(C,2),A=y[0],J=y[1],T=Object(u.useState)(""),L=Object(r.a)(T,2),D=L[0],E=L[1],M=Object(u.useState)(""),P=Object(r.a)(M,2),_=P[0],B=P[1],H=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(_.toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Welcome to the Phonebook"}),Object(s.jsx)(x,{message:S}),Object(s.jsx)(w,{message:A}),Object(s.jsx)(l,{text:"filter shown with",search:_,updateSearch:function(e){B(e.target.value)}}),Object(s.jsx)("h2",{children:"Add a new entry"}),Object(s.jsx)(m,{addName:function(e){e.preventDefault();var n={name:j,number:D};if(a.includes(j))if(window.confirm("".concat(j," is already added to phonebook, replace the old number with new one?"))){var r=t.find((function(e){return e.name===j})),u=Object(o.a)(Object(o.a)({},r),{},{number:D});console.log(r.id),p(r.id,u).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e}))),k("Added ".concat(j)),setTimeout((function(){k(null)}),5e3)})).catch((function(e){var n="".concat(JSON.stringify(e.response.data.error));J(n),setTimeout((function(){J(null)}),5e3)})),f(""),E("")}else f(""),E("");else O(n).then((function(e){c(t.concat(e)),k("Added ".concat(j)),setTimeout((function(){k(null)}),5e3)})).catch((function(e){var n="".concat(JSON.stringify(e.response.data.error));J(n),console.log(e.response),setTimeout((function(){J(null)}),5e3)})),f(""),E("")},newN:j,newN2:D,handlenew:function(e){f(e.target.value)},handlenew2:function(e){E(e.target.value)},name1:"name : ",name2:"number : "}),Object(s.jsx)("h2",{children:"Numbers"}),H.map((function(e){return Object(s.jsx)(i,{name:e.name,number:e.number,onClick:function(){return function(e){if(window.confirm("Are you sure, you want to delete ".concat(e.name))){console.log("it works!!!"),v(e.id);var n=H.filter((function(n){return n.id!==e.id}));c(n)}console.log(t)}(e)}},Math.random())}))]})};t(39);a.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3feb63b2.chunk.js.map