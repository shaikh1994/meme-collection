(this["webpackJsonpmy-react-ap"]=this["webpackJsonpmy-react-ap"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(18),o=n(33),s=n(63),l=n(71),u="CREATE",d="DELETE",p="FETCH_ALL",b=Object(o.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),j=n(47),f=n(141),m=n(144),x=n(114),h=(n(85),n(6)),O=Object(f.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:"#ADEFD1FF",backgroundColor:"transparent"}}}));function g(){var e=O();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(m.a,{item:!0,xs:12,children:Object(h.jsxs)(x.a,{className:e.paper,children:[Object(h.jsx)("h1",{children:"MEME Gallery"}),Object(h.jsx)("h3",{children:"Save your meme to cherish forever"})]})})})}var v=n(151),y=n(38),k=n(152),C=n(153),w=n(68),E=n.n(w),N=n(24),I=n.n(N),S=n(48),A=n(49),D=n.n(A),F="https://meme-collection.herokuapp.com/posts",T=function(e){return D.a.delete("".concat(F,"/").concat(e))},B=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)},backgroundColor:"#872657",paddingTop:"10px"},paper:{padding:e.spacing(2),color:"black"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"50%",margin:"10px 0"},linkSubmit:{marginBottom:10,marginLeft:20,backgroundColor:"#E77EB3"},picSubmit:{marginTop:15,marginLeft:20},file:{backgroundColor:"#E77EB3"}}}));function L(e){e.currentId,e.setCurrentId;var t=Object(a.useState)({link:"",selectedFile:""}),n=Object(j.a)(t,2),r=n[0],c=n[1],o=Object(i.b)(),s=B();return Object(h.jsx)(x.a,{className:s.root,children:Object(h.jsxs)("form",{autoComplete:"off",noValidate:!0,className:s.form,onSubmit:function(e){var t;e.preventDefault(),o((t=r,function(){var e=Object(S.a)(I.a.mark((function e(n){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c=t,D.a.post(F,c);case 3:a=e.sent,r=a.data,n({type:u,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}var c}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(h.jsx)(k.a,{className:s.fileInput,name:"link",label:"Link",fullwidth:"true",value:r.link,onChange:function(e){return c(Object(y.a)(Object(y.a)({},r),{},{link:e.target.value}))}}),Object(h.jsx)("div",{className:s.picSubmit,children:Object(h.jsx)(E.a,{className:s.file,type:"file",multiple:!1,onDone:function(e){var t=e.base64;return c(Object(y.a)(Object(y.a)({},r),{},{selectedFile:t}))}})}),Object(h.jsx)(C.a,{className:s.linkSubmit,variant:"contained",type:"submit",children:"UploadPic "})]})})}var M=n(150),_=n(70),z=n.n(_),G=n(146),H=n(147),J=n(148),R=n(149),P=n(69),U=n.n(P),V=Object(f.a)({media:{height:0,paddingTop:"70.25%",backgroundColor:"rgba(0, 0, 0, 0.1)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"center",backgroundColor:"black"}}),W=function(e){var t=e.post,n=(e.setCurrentId,V()),a=Object(i.b)();return Object(h.jsxs)(G.a,{className:n.card,children:[Object(h.jsx)(H.a,{className:n.media,image:t.link||t.selectedFile,title:t.title}),Object(h.jsxs)("div",{className:n.overlay,children:[Object(h.jsx)(J.a,{variant:"h6",children:t.creator}),Object(h.jsx)(J.a,{variant:"body2",children:U()(t.createdAt).fromNow()})]}),Object(h.jsx)(R.a,{className:n.cardActions,children:Object(h.jsxs)(C.a,{size:"small",color:"primary",onClick:function(){return a((e=t._id,function(){var t=Object(S.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:n({type:d,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(h.jsx)(z.a,{fontSize:"small"})," Delete"]})})]})},q=Object(f.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),K=function(e){var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=q();return n.length?Object(h.jsx)(m.a,{className:a.container,container:!0,alignItems:"stretch",spacing:6,children:n.map((function(e){return Object(h.jsx)(m.a,{item:!0,xs:12,sm:6,md:6,children:Object(h.jsx)(W,{post:e,setCurrentId:t})},e._id)}))}):Object(h.jsx)(M.a,{})},Q=function(){var e=Object(i.b)(),t=Object(a.useState)(null),n=Object(j.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){e(function(){var e=Object(S.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get(F);case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[r,e]),Object(h.jsxs)(v.a,{maxwidth:"lg",children:[Object(h.jsx)(g,{}),Object(h.jsx)(m.a,{style:{marginTop:20,marginBottom:20},children:Object(h.jsx)(L,{currentId:c,setCurrentId:c})}),Object(h.jsx)(m.a,{children:Object(h.jsx)(K,{setCurrentId:c})})]})},X=(n(111),Object(o.d)(b,Object(o.c)(Object(o.a)(s.a))));c.a.render(Object(h.jsx)(i.a,{store:X,children:Object(h.jsx)(Q,{})}),document.getElementById("root"))},85:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.54250077.chunk.js.map