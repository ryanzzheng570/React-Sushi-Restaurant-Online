(this["webpackJsonpreact-sushi-restaurant-online"]=this["webpackJsonpreact-sushi-restaurant-online"]||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),r=n.n(c),s=(n(112),n(113),n(69)),o=n(41),l=n(182),j=n(183),d=n(65),u=n(191),b=n(180),h=n(170),p=n.p+"static/media/Maki.ee51170e.svg",O=n(2),x=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"maki",src:p,height:30,width:30})})},m=n.p+"static/media/Pizza.0148e47b.svg",g=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"pizza",src:m,height:30,width:30})})},f=n.p+"static/media/Spicy.5c3bf697.svg",y=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"spicy",src:f,height:30,width:30})})},v=n.p+"static/media/Vegetarian.e768e9a8.svg",k=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"vegetarian",src:v,height:30,width:25})})},S=n.p+"static/media/Teriyaki.2b9e3978.svg",C=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"teriyaki",src:S,height:30,width:30})})},w=n.p+"static/media/AburiOshi.ff9a3d29.svg",N=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"ab",src:w,height:30,width:25})})},I=n.p+"static/media/Party.bd89e88f.svg",P=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"party",src:I,height:30,width:25})})},T=n.p+"static/media/Special.594ccc5d.svg",q=function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("img",{alt:"spcial",src:T,height:30,width:30})})},B="Maki Rolls",M="Classic Spicy Maki",z="Vegetable Roll",A="Sushi Pizza",R="Teriyaki Maki Roll (Cooked)",F="Aburi Oshi Sushi",W="Maki & Sushi Party",_="Special Roll",H=[B,M,z,A,R,F,W,_],L=new Map([[B,Object(O.jsx)(x,{})],[M,Object(O.jsx)(y,{})],[z,Object(O.jsx)(k,{})],[A,Object(O.jsx)(g,{})],[R,Object(O.jsx)(C,{})],[F,Object(O.jsx)(N,{})],[W,Object(O.jsx)(P,{})],[_,Object(O.jsx)(q,{})]]),E=n(175),U=n(184),D=n(178),G=n(179),V=n(174),$=n(185),J=n(176),K=n(93),Y=n.n(K),Q=n(94),X=n.n(Q),Z=n(95),ee=n.n(Z),te=n(181),ne=n(189),ae=n(173),ie=n(60),ce=n.n(ie),re=n(61),se=n.n(re),oe=n(17),le=n(70),je=n.n(le),de=n(91),ue=n(92),be=n.n(ue),he="SET_AVAILABLE_SUSHI",pe=function(e){return{type:he,availableSushi:e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return t.availableSushi;default:return e}},xe=n(63),me=function(e,t){return Math.round(e*t*100)/100},ge=function(e,t,n){var a=Object(xe.a)(e),i=a.findIndex((function(e){return e.checkoutItemId===t}));return a[i].quantity=n,a[i].totalPrice=me(a[i].singlePrice,n),a},fe="CHECKOUT_ADD_SUSHI",ye="CHECKOUT_MODIFY_SUSHI",ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return[].concat(Object(xe.a)(e),[t.sushi]);case ye:return ge(e,t.payload.checkoutItemId,t.payload.quantity);default:return e}},ke=function(e){return function(t){t({type:fe,sushi:e})}},Se=function(e,t){return function(n){n(function(e,t){return{type:ye,payload:{checkoutItemId:e,quantity:t}}}(e,t))}},Ce=Object(ae.a)((function(e){return{text:{wordWrap:"break-word"},total:{float:"right"},quantityContainer:{display:"flex",border:"1px solid",marginRight:e.spacing(1)},quantity:{padding:e.spacing(.8,.2,0,.2)},icon:{fontSize:15}}})),we=Object(oe.b)(null,(function(e){return{modifyCartSushi:function(t,n){e(Se(t,n))}}}))((function(e){var t=Ce(),n=e.modifyCartSushi,a=e.items;return Object(O.jsx)(O.Fragment,{children:a.map((function(e,a){return Object(O.jsxs)(V.a,{button:!0,disableRipple:!0,children:[Object(O.jsxs)(ne.a,{className:t.quantityContainer,children:[Object(O.jsx)(E.a,{onClick:function(){return t=e.checkoutItemId,a=e.quantity,void n(t,a-1);var t,a},disabled:!(e.quantity>1),children:Object(O.jsx)(ce.a,{className:t.icon})}),Object(O.jsx)(d.a,{className:t.quantity,children:e.quantity}),Object(O.jsx)(E.a,{onClick:function(){return t=e.checkoutItemId,a=e.quantity,void n(t,a+1);var t,a},children:Object(O.jsx)(se.a,{className:t.icon})})]}),Object(O.jsx)(J.a,{className:t.text,children:Object(O.jsxs)(d.a,{children:[e.name,Object(O.jsxs)("span",{className:t.total,children:[" $",e.totalPrice]})]})})]},a)}))})})),Ne=n(11),Ie=Object(ae.a)((function(e){return{paper:{width:450},cartTitle:{justifyContent:"center",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},title:{fontWeight:"bold",fontSize:25},middlePush:{position:"fixed",top:"25%",paddingBottom:e.spacing(1),width:450},bottomPush:{position:"fixed",bottom:0,textAlign:"center",width:450},emptyCart:{textAlign:"center",color:e.palette.grey[700],fontSize:22},subtotal:{paddingTop:e.spacing(2.5),paddingRight:e.spacing(7.5)},price:{float:"right"},btn:{marginBottom:e.spacing(3),padding:e.spacing(1,2)}}})),Pe=Object(oe.b)((function(e){return{checkout:e.checkout}}))((function(e){var t=Ie(),n=e.open,i=e.close,c=e.checkout,r=Object(Ne.f)(),s=Object(a.useMemo)((function(){return function(e){var t=0;return e.forEach((function(e){t+=e.totalPrice})),t}(c)}),[c]);return Object(O.jsxs)(u.a,{anchor:"right",open:n,onClose:i,classes:{paper:t.paper},children:[Object(O.jsx)(D.a,{}),Object(O.jsx)(G.a,{children:Object(O.jsx)(V.a,{className:t.cartTitle,children:Object(O.jsx)(d.a,{className:t.title,children:"SHOPPING CART"})})}),Object(O.jsx)(b.a,{}),Object(O.jsx)(G.a,{children:c&&c.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(we,{items:c}),Object(O.jsxs)("div",{className:t.bottomPush,children:[Object(O.jsx)(b.a,{}),Object(O.jsxs)(d.a,{gutterBottom:!0,className:t.subtotal,variant:"h4",children:["Subtotal:",Object(O.jsxs)("span",{className:t.price,children:["$",s]})]}),Object(O.jsx)(d.a,{color:"textSecondary",paragraph:!0,variant:"body1",children:"Taxes and shipping calculated at checkout"}),Object(O.jsx)(te.a,{color:"primary",variant:"contained",className:t.btn,onClick:function(){i(),r.push("/checkout")},children:"Confirm Cart"})]})]}):Object(O.jsx)(V.a,{className:t.middlePush,children:Object(O.jsx)(J.a,{disableTypography:!0,className:t.emptyCart,children:" Your cart is currently empty. "})})})]})})),Te=Object(ae.a)((function(e){return{navDrawer:{width:250,flexShrink:0},drawerPaper:{width:250,marginTop:70},root:{flexGrow:1},appBar:{backgroundColor:"rgb(255,166,0)"},toolbar:{minHeight:70},content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},icon:{paddingLeft:11},sushi_type_icon:{paddingLeft:11,paddingBottom:1},cartButton:{marginLeft:"auto",color:"white"}}})),qe=Object(oe.b)((function(e){return{checkout:e.checkout}}))((function(e){var t=Te(),n=e.checkout,i=Object(a.useState)(!1),c=Object(o.a)(i,2),r=c[0],s=c[1],h=Object(Ne.f)();return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(l.a,{position:"static",className:t.appBar,children:Object(O.jsxs)(j.a,{className:t.toolbar,children:[Object(O.jsx)(d.a,{variant:"h6",children:"Ryan's Sushi Restaurant"}),Object(O.jsx)(E.a,{className:t.cartButton,onClick:function(){s(!0)},children:Object(O.jsx)(U.a,{badgeContent:n.length,color:"secondary",children:Object(O.jsx)(Y.a,{style:{fontSize:32}})})})]})}),Object(O.jsx)(Pe,{open:r,close:function(){s(!1)}}),Object(O.jsxs)(u.a,{className:t.navDrawer,variant:"permanent",anchor:"left",classes:{paper:t.drawerPaper},children:[Object(O.jsx)(D.a,{}),Object(O.jsx)(G.a,{children:Object(O.jsxs)(V.a,{onClick:function(){h.push("/")},button:!0,children:[Object(O.jsx)($.a,{className:t.icon,children:Object(O.jsx)(X.a,{})}),Object(O.jsx)(J.a,{primary:"MainMenu"})]},"MainMenu")}),Object(O.jsx)(b.a,{}),Object(O.jsx)(G.a,{children:H.map((function(e){return Object(O.jsxs)(V.a,{button:!0,children:[Object(O.jsx)($.a,{className:t.sushi_type_icon,children:(n=e,L.get(n))}),Object(O.jsx)(J.a,{primary:e})]},e);var n}))}),Object(O.jsx)(b.a,{}),Object(O.jsx)(G.a,{children:Object(O.jsxs)(V.a,{button:!0,children:[Object(O.jsx)($.a,{className:t.icon,children:Object(O.jsx)(ee.a,{})}),Object(O.jsx)(J.a,{primary:"Info"})]},"Info")})]})]})})),Be=n(187),Me=n(98),ze=Object(Me.a)({spacing:10,typography:{fontFamily:"Open Sans, sans-serif",fontSize:15,textAlign:"left",button:{textTransform:"none",letterSpacing:0,padding:0},h4:{fontSize:27}},overrides:{MuiInput:{input:{fontWeight:"bold"}}},palette:{primary:{main:"rgb(255, 166, 0)"},secondary:{main:"#B0B0B0"}}}),Ae=Object(Me.a)({spacing:10,typography:{fontFamily:"Open Sans, sans-serif",fontSize:15,textAlign:"center",button:{textTransform:"none",fontSize:25,color:"white"},h6:{color:"white"}},palette:{primary:{main:"rgb(255,166,0)"}}}),Re=n(64),Fe=n(96),We=Object(Re.b)({availableSushi:Oe,checkout:ve}),_e=Object(Re.c)((function(e,t){return We(e,t)}),Object(Re.a)(Fe.a)),He=n(186),Le=n(144),Ee=n(190),Ue=n(177),De=n(188),Ge=n(97),Ve=n.n(Ge),$e=Object(ae.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{maxWidth:750,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},closeButton:{marginLeft:"auto"},name:{paddingTop:e.spacing(1)},quantityContainer:{display:"flex",border:"1px solid"},quantity:{padding:e.spacing(1.3,1,0,1)},submit:{marginTop:e.spacing(4)},btn:{padding:e.spacing(1.2,3)}}})),Je=Object(oe.b)((function(e){return{checkout:e.checkout}}),(function(e){return{addSushiToCart:function(t){e(ke(t))}}}))((function(e){var t=$e(),n=e.name,i=e.description,c=e.labels,r=e.open,s=e.handleClose,l=e.price,j=e.addSushiToCart,u=e.checkout,b=Object(a.useState)(""),h=Object(o.a)(b,2),p=h[0],x=h[1],m=Object(a.useState)(1),g=Object(o.a)(m,2),f=g[0],y=g[1],v=Object(a.useMemo)((function(){return function(e,t){return me(e,t)}(l,f)}),[l,f]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Ee.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",open:r,className:t.modal,onClose:s,closeAfterTransition:!0,children:Object(O.jsx)(Ue.a,{in:r,children:Object(O.jsx)("div",{className:t.paper,children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={checkoutItemId:u.length+1,name:e.name,quantity:f,specialRequest:p,singlePrice:l,totalPrice:v};s(),j(n),x(""),y(1)},children:[Object(O.jsxs)(He.a,{container:!0,children:[Object(O.jsx)(d.a,{gutterBottom:!0,className:t.name,id:"spring-modal-title",variant:"h4",children:n}),Object(O.jsx)(E.a,{onClick:s,className:t.closeButton,children:Object(O.jsx)(Ve.a,{})})]}),c&&c.length>0?Object(O.jsx)(ne.a,{}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(d.a,{id:"spring-modal-description",paragraph:!0,children:i}),Object(O.jsx)(De.a,{label:"Special Requests",placeholder:"Please leave down any special request(e.g. allergy)",multiline:!0,row:10,fullWidth:!0,color:"secondary",value:p,onChange:function(e){x(e.target.value)}}),Object(O.jsxs)(He.a,{className:t.submit,container:!0,justifyContent:"space-between",alignItems:"flex-end",children:[Object(O.jsxs)(ne.a,{className:t.quantityContainer,children:[Object(O.jsx)(E.a,{disabled:!(f>1),onClick:function(){y(f-1)},children:Object(O.jsx)(ce.a,{})}),Object(O.jsx)(d.a,{className:t.quantity,children:f}),Object(O.jsx)(E.a,{onClick:function(){y(f+1)},children:Object(O.jsx)(se.a,{})})]}),Object(O.jsx)(ne.a,{children:Object(O.jsxs)(te.a,{type:"submit",color:"primary",variant:"contained",className:t.btn,children:["Add to my order $",v]})})]})]})})})})})})),Ke=Object(Le.a)((function(e){return{root:{minWidth:500,maxHeight:200,margin:e.spacing(2,2,1,0)},info:{maxWidth:"70%",minWidth:0,padding:20,"& p":{textAlign:"left"}},name:{fontWeight:"bold"},noPadding:{padding:0},img:{backgroundColor:"rgba(96, 96, 96, 0.2)"},description:{height:50,textOverflow:"ellipsis",overflow:"hidden",WebkitLineClamp:2,WebkitBoxOrient:"vertical",display:"-webkit-box",width:300}}})),Ye=function(e){var t=Ke(),n=Object(a.useState)(!1),i=Object(o.a)(n,2),c=i[0],r=i[1],s=e.name,l=e.description,j=e.labels,u=e.price;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(te.a,{variant:"outlined",className:t.root,onClick:function(){r(!0)},classes:{root:t.noPadding},children:Object(O.jsxs)(He.a,{xl:"auto",container:!0,children:[Object(O.jsxs)(He.a,{container:!0,direction:"column",className:t.info,children:[Object(O.jsx)(d.a,{className:t.name,paragraph:!0,children:s}),Object(O.jsx)(d.a,{className:t.description,paragraph:!0,children:l}),j&&j.length>0?Object(O.jsx)("div",{}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(d.a,{children:u})]}),Object(O.jsx)(ne.a,{width:"30%",style:{backgroundColor:"lightgrey"},children:Object(O.jsx)("img",{className:t.img,alt:""})})]})}),Object(O.jsx)(Je,{open:c,handleClose:function(){r(!1)},name:s,description:l,price:u})]})},Qe=function(e){var t=e.sushi;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)(Ye,{name:e.name,description:e.description,labels:e.labels,price:e.price,imageUrl:e.imageUrl},e.id)}))})},Xe=Object(Le.a)((function(e){return{root:{padding:20,borderRadius:12,border:"1px solid rgb(224, 224, 224)",minWidth:600},description:{marginTop:10}}})),Ze=function(e){var t=e.name,n=e.description,a=e.sushi,i=Xe();return Object(O.jsxs)(He.a,{className:i.root,children:[Object(O.jsx)(d.a,{variant:"h4",children:t}),Object(O.jsx)(d.a,{className:i.description,children:n}),Object(O.jsx)(He.a,{container:!0,children:Object(O.jsx)(Qe,{sushi:a})})]})},et=Object(ae.a)((function(e){return{root:{marginTop:"auto",marginLeft:e.spacing(25),padding:e.spacing(2),fontFamily:"inherit",backgroundColor:"white"}}})),tt=Object(oe.b)((function(e){return{sushi:e.availableSushi}}))((function(e){var t=et(),n=e.sushi;return Object(O.jsx)(He.a,{className:t.root,children:Object(O.jsx)(Ze,{name:"Maki Rolls",description:"Sushi Made in rolls and sliced into round bite-size pieces",sushi:n})})})),nt=function(){var e=et();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(d.a,{variant:"h4",children:"Page on the way"})})},at=Object(Ne.g)(Object(oe.b)(null,(function(e){return{fetchSushi:function(){e(function(){var e=Object(de.a)(je.a.mark((function e(t){var n,a,i;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.a.get("api/sushi");case 2:n=e.sent,a=n.data,i=a.filter((function(e){return!0===e.isAvail})),t(pe(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.fetchSushi;return Object(a.useEffect)((function(){t()}),[t]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(Ne.c,{children:[Object(O.jsx)(Ne.a,{path:"/",exact:!0,component:tt}),Object(O.jsx)(Ne.a,{path:"/checkout",component:nt})]})})}))),it=function(){return Object(O.jsx)(oe.a,{store:_e,children:Object(O.jsx)(Be.a,{theme:ze,children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(Be.a,{theme:Ae,children:Object(O.jsx)(qe,{})}),Object(O.jsx)(at,{})]})})})};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(it,{})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.1ba61b60.chunk.js.map