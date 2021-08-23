(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(14),n(7)),s=n(2),u=n(3),l=n(5),b=n(4),h=n(18),j=n(9),d=n(0),m=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInput=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state)?t.setState({name:"",number:""}):alert("".concat(t.state.name," is already in contacts."))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInput,value:this.state.name})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInput,value:this.state.number})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),f=function(t){var e=t.contacts,n=t.onDelete,a=function(t){n(t.target.id)};return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(d.jsxs)("li",{children:[n," ",c,Object(d.jsx)("button",{type:"button",id:e,onClick:a,children:"Delete"})]},e)}))})},O=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{value:e,onChange:n})]})},p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onSubmit=function(e){var n=e.name,a=e.number;return!t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))&&(t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{id:Object(h.a)(),name:n,number:a}])}})),!0)},t.onDelete=function(e){var n=t.state.contacts.findIndex((function(t){return t.id===e}));t.setState((function(t){return t.contacts.splice(n,1),{contacts:Object(o.a)(t.contacts)}}))},t.onFilterChange=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(m,{onSubmit:this.onSubmit}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(O,{value:this.state.filter,onChange:this.onFilterChange}),Object(d.jsx)(f,{contacts:this.state.contacts.filter((function(e){return e.name.includes(t.state.filter)})),onDelete:this.onDelete})]})}}]),n}(c.a.Component);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b7a1e50c.chunk.js.map