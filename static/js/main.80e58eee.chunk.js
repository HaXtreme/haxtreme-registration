(this.webpackJsonphax_reg=this.webpackJsonphax_reg||[]).push([[0],{181:function(e,s,t){},183:function(e,s,t){},188:function(e,s,t){"use strict";t.r(s);var c=t(1),l=t.n(c),a=t(37),r=t.n(a),m=(t(76),t(4)),i=(t(77),t(38)),n=t.n(i),b=t(65),j=t(2),d=(t(81),t(190)),o=(t(187),t(181),t(0)),h=function(){return Object(o.jsx)("div",{id:"notfound",children:Object(o.jsxs)("div",{className:"notfound",children:[Object(o.jsx)("div",{className:"notfound-404",children:Object(o.jsx)("h1",{children:"Oops!"})}),Object(o.jsx)("h2",{children:"404 - Page not found"}),Object(o.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(o.jsx)("a",{href:"http://127.0.0.1:5500/index.html#",children:"Go To Homepage"})]})})},x=(t(64),function(){var e=Object(c.useState)(!1),s=Object(m.a)(e,2);s[0],s[1];return Object(o.jsx)("section",{class:"h-100 gradient-form",style:{},children:Object(o.jsx)("div",{class:"container py-5 h-100",children:Object(o.jsx)("div",{class:"row d-flex justify-content-center align-items-center h-100",children:Object(o.jsx)("div",{class:"col-xl-10",children:Object(o.jsx)("div",{class:"card rounded-3 text-black",children:Object(o.jsxs)("div",{class:"row g-0",children:[Object(o.jsx)("div",{class:"col-lg-6  right-font d-flex align-items-center text-center gradient-custom-2",children:Object(o.jsxs)("div",{class:"text-white  px-3 py-4 p-md-5 mx-md-4",children:[Object(o.jsx)("h3",{class:"mb-4",children:"Thank you for registering for HaXtreme 1.0V competition."}),Object(o.jsx)("p",{class:"medium mb-0",children:"Stay Tuned !!"})]})}),Object(o.jsx)("div",{class:"col-lg-6",children:Object(o.jsxs)("div",{class:"card-body p-md-5 mx-md-4",children:[Object(o.jsxs)("div",{class:"text-center",children:[Object(o.jsx)("img",{src:"https://haxtreme.github.io/hackathon/assets/img/HaxTreme_logo.png",style:{width:185},alt:"logo"}),Object(o.jsx)("h4",{class:"mt-1 mb-5 pb-1",children:"HaXtreme 1.0v Hackathon Registration"})]}),Object(o.jsxs)("div",{class:"text-center pt-1 mb-5 pb-1",children:[Object(o.jsx)("p",{children:" Visit Our Page"}),Object(o.jsxs)("button",{class:"btn btn-primary btn-block fa-lg gradient-custom-2 mb-3",type:"button",children:[" ",Object(o.jsx)("a",{href:"https://haxtreme.github.io/hackathon/"}),"For More Details"]})]})]})})]})})})})})})}),O=(t(183),t(184),function(){return Object(o.jsx)("div",{class:"loader body-loader",children:"Uploading"})}),p=function(){var e=Object(c.useState)(!1),s=Object(m.a)(e,2),t=(s[0],s[1]),l=Object(c.useState)(!0),a=Object(m.a)(l,2),r=a[0],i=a[1],p=Object(c.useState)(!1),g=Object(m.a)(p,2),u=g[0],f=g[1],v=Object(c.useState)(!1),N=Object(m.a)(v,2),M=N[0],y=N[1],_=Object(c.useState)(0),F=Object(m.a)(_,2),w=F[0],k=F[1],T=function(e){k(Number(e.target.value)),console.log(e.target.value)};return Object(o.jsx)(d.a.div,{exit:{opacity:0},animate:{opacity:1},initial:{opacity:0},children:Object(o.jsxs)("div",{children:[1==M&&Object(o.jsx)(x,{}),1==u&&Object(o.jsx)(h,{}),0==M&&0==r&&Object(o.jsx)(O,{}),0==M&&1==r&&Object(o.jsx)(j.d,{initialValues:{teamMemberCount:2,faculty:"",indexNo:"",teamName:"",teamLeader:"",teamMembers:{member_1:"",member_2:"",member_3:"",member_4:""},teamMembersPhone:{member_1:"",member_2:"",member_3:"",member_4:""},email:{member_1:"",member_2:"",member_3:"",member_4:""},preferedLanguage:"",participation:""},onSubmit:function(){var e=Object(b.a)(n.a.mark((function e(s){var c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:return console.log(s),t(!0),i(!1),e.next=7,fetch("https://haxreg.herokuapp.com/api/v1/users/reg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s,null,2)});case 7:return 0==(c=e.sent).ok&&(f(!0),console.log(l)),e.next=11,c.json();case 11:l=e.sent,i(!0),y(!0),console.log("data",l);case 15:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),children:Object(o.jsx)("div",{className:"d-lg-flex half",children:Object(o.jsx)("div",{className:"contents order-2 order-md-1",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(o.jsxs)("div",{className:"col-md-7 py-5",children:[Object(o.jsx)("h3",{className:"text-center mb-5",style:{fontSize:"45px",color:"rgb(255, 195, 0)"},children:"HaXtreme 1.0v Hackathon Registration"}),Object(o.jsxs)(j.c,{children:[Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"form-group mb-3",children:[Object(o.jsx)("label",{htmlFor:"teamName",children:"Team Name"}),Object(o.jsx)(j.b,{id:"teamName",name:"teamName",placeholder:"Team_Name",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group mb-3",children:[Object(o.jsx)("label",{htmlFor:"teamLeader",children:"Team Leader Name"}),Object(o.jsx)(j.b,{id:"teamLeader",name:"teamLeader",placeholder:"team_Leader_Name",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamLeader"})})]}),Object(o.jsxs)("div",{class:"col-lg-12 mb-3",children:[Object(o.jsx)("div",{id:"gender-group",children:"Team Members"}),Object(o.jsxs)("div",{role:"group","aria-labelledby":"gender-group",className:"form-group",children:[Object(o.jsx)(j.b,{type:"radio",name:"teamMemberCount",value:"2",id:"male",className:"form-check-input",onClick:T}),Object(o.jsx)("label",{class:"form-check-label ms-1",for:"2",children:"2"}),Object(o.jsx)(j.b,{type:"radio",name:"teamMemberCount",value:"3",id:"female",className:"form-check-input ms-3",onClick:T}),Object(o.jsx)("label",{class:"form-check-label  ms-1",for:"3",children:"3"}),Object(o.jsx)(j.b,{type:"radio",name:"teamMemberCount",value:"4",id:"female",className:"form-check-input ms-3",onClick:T}),Object(o.jsx)("label",{class:"form-check-label  ms-1",for:"4",children:"4"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamMemberCount"})})]})]}),Object(o.jsxs)("div",{className:"team-details",children:[2===w&&Object(o.jsxs)("div",{class:"mt-5 mb-5",children:[" ",Object(o.jsx)("h2",{children:" Team Details"}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_1",children:"Member 1 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_1",name:"teamMembers.member_1",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_1",children:"Member 1 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_1",placeholder:"sample@gmail.com",type:"email",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 1 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_1",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_2",children:"Member 2 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_2",name:"teamMembers.member_2",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_2",children:"Member 2 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_2",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 2 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_2",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]})]}),3===w&&Object(o.jsxs)("div",{class:"mt-5 mb-5",children:[" ",Object(o.jsx)("h2",{children:" Team Details"}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_1",children:"Member 1 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_1",name:"teamMembers.member_1",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_1",children:"Member 1 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_1",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 1 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_1",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_2",children:"Member 2 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_2",name:"teamMembers.member_2",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_2",children:"Member 2 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_2",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 2 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_2",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_3",children:"Member 3 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_3",name:"teamMembers.member_3",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_3",children:"Member 3 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_3",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 3 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_3",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]})]}),4===w&&Object(o.jsxs)("div",{class:"mt-5 mb-5",children:[" ",Object(o.jsx)("h2",{children:" Team Details"}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_1",children:"Member 1 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_1",name:"teamMembers.member_1",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_1",children:"Member 1 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_1",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 1 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_1",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_2",children:"Member 2 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_2",name:"teamMembers.member_2",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_2",children:"Member 2 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_2",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 2 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_2",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_3",children:"Member 3 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_3",name:"teamMembers.member_3",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_3",children:"Member 3 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_3",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 3 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_3",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col-md-6 mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"teamMembers.member_4",children:"Member 4 Name"}),Object(o.jsx)(j.b,{id:"teamMembers.member_4",name:"teamMembers.member_4",placeholder:"Mr. Jane",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"teamName"})})]}),Object(o.jsxs)("div",{class:"form-group col-lg-6 mb-3",children:[Object(o.jsx)("label",{htmlFor:"email.member_4",children:"Member 4 Email"}),Object(o.jsx)(j.b,{id:"email",name:"email.member_4",placeholder:"sample@gmail.com",type:"text",class:"form-control"}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"email"})})]}),Object(o.jsxs)("div",{class:" mb-3",children:[Object(o.jsxs)("div",{class:"form-group first",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Member 4 whatsApp Number"}),Object(o.jsx)(j.b,{id:"phone",name:"teamMembersPhone.member_4",placeholder:"0770000000",type:"text",class:"form-control"})]}),Object(o.jsx)("div",{className:"text-danger small",children:Object(o.jsx)(j.a,{name:"phone"})})]})]})]})]}),Object(o.jsx)("div",{class:"row",children:Object(o.jsxs)("div",{class:"form-group mb-3",children:[Object(o.jsx)("label",{htmlFor:"faculty",children:"Faculty"}),Object(o.jsxs)(j.b,{name:"faculty",as:"select",id:"faculty",class:"form-control",children:[Object(o.jsx)("option",{selected:!0,children:"Faculty"}),Object(o.jsx)("option",{value:"Engineering",children:"Faculty of Engineering"}),Object(o.jsx)("option",{value:"Science",children:"Faculty of Science"}),Object(o.jsx)("option",{value:"Technology",children:"Faculty of Technology"})]})]})}),Object(o.jsxs)("div",{class:"form-group mb-3",children:[Object(o.jsx)("label",{htmlFor:"participate",children:"Did you participate for Workshops?"}),Object(o.jsxs)(j.b,{name:"participation",as:"select",id:"participation",class:"form-control",children:[Object(o.jsx)("option",{selected:!0}),Object(o.jsx)("option",{value:"Yes",children:"Yes"}),Object(o.jsx)("option",{value:"No",children:"No"})]})]}),Object(o.jsxs)("div",{class:"form-group",children:[Object(o.jsx)("label",{htmlFor:"preferedLanguage",children:"Prefered Programming Language"}),Object(o.jsx)(j.b,{id:"preferedLanguage",name:"preferedLanguage",placeholder:"Ex - Python",class:"form-control"})]}),Object(o.jsx)("div",{className:"d-grid",children:Object(o.jsx)("button",{type:"submit",disabled:0==r,className:"btn btn-warning mt-4",children:"Submit"})})]})]})})})})})})]})})},g=function(){var e=Object(c.useState)(!1),s=Object(m.a)(e,2),t=s[0],l=s[1];return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)(p,{}),!t&&Object(o.jsx)("section",{class:"h-100 gradient-form",style:{},children:Object(o.jsx)("div",{class:"container py-5 h-100",children:Object(o.jsx)("div",{class:"row d-flex justify-content-center align-items-center h-100",children:Object(o.jsx)("div",{class:"col-xl-10",children:Object(o.jsx)("div",{class:"card rounded-3 text-black",children:Object(o.jsxs)("div",{class:"row g-0",children:[Object(o.jsx)("div",{class:"col-lg-6",children:Object(o.jsxs)("div",{class:"card-body p-md-5 mx-md-4",children:[Object(o.jsxs)("div",{class:"text-center",children:[Object(o.jsx)("img",{src:"https://haxtreme.github.io/hackathon/assets/img/HaxTreme_logo.png",style:{width:185},alt:"logo"}),Object(o.jsx)("h4",{class:"mt-1 mb-5 pb-1",children:"HaXtreme 1.0v Hackathon Registration"})]}),Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{children:"Before Registration Please read the given instructions"}),Object(o.jsx)("div",{class:"text-center pt-1 mb-5 pb-1",children:Object(o.jsx)("button",{class:"btn btn-primary btn-block fa-lg gradient-custom-2 mb-3",type:"button",onClick:function(e){e.preventDefault(),l(!0)},children:"Register Now"})})]})]})}),Object(o.jsx)("div",{class:"col-lg-6 right-font d-flex align-items-center gradient-custom-2",children:Object(o.jsxs)("div",{class:"text-white px-3 py-4 p-md-5 mx-md-4",children:[Object(o.jsx)("h4",{class:"mb-4",children:"Welcome to HaXtreme 1.0V competition registrations."}),Object(o.jsxs)("p",{class:"small mb-0",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"A team should consist of at least 2 members and not more than 4 members."}),Object(o.jsx)("li",{children:"The team members should be from the same faculty"}),Object(o.jsx)("li",{children:"Only undergraduates of University of Ruhuna are eligible for the competition."})]}),Object(o.jsx)("p",{class:"mb-0 me-2",children:"For More Details "}),Object(o.jsx)("button",{type:"button",class:"btn btn-outline-danger",children:Object(o.jsx)("a",{href:"https://haxtreme.github.io/hackathon/",target:"blank",children:"Click Here"})})]})]})})]})})})})})})]})};var u=function(){var e=Object(c.useState)(!1),s=Object(m.a)(e,2),t=s[0];return s[1],Object(o.jsx)("div",{className:"App",children:0==t&&Object(o.jsx)(g,{})})};t(186);r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))},64:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){}},[[188,1,2]]]);
//# sourceMappingURL=main.80e58eee.chunk.js.map