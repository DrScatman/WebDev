(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/~milleja1/myvuefirebase/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1085:function(e,t,n){},"452d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("Vuetify")]),n("span",{staticClass:"font-weight-light"},[e._v("MATERIAL DESIGN")])]),n("v-spacer"),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!0===e.isLoggedIn,expression:"isLoggedIn === true"}],on:{click:e.doSignOut}},[e._v("SignOut")])],1),n("v-content",[n("router-view")],1)],1)},o=[],i=n("59ca"),s=n.n(i),u=(n("66ce"),n("ea7b"),{apiKey:"AIzaSyBMaDFYoItgvT2Up1GQ-7lleU_-PCUmoSI",authDomain:"webdevtutorial-67a26.firebaseapp.com",databaseURL:"https://webdevtutorial-67a26.firebaseio.com",projectId:"webdevtutorial-67a26",storageBucket:"webdevtutorial-67a26.appspot.com",messagingSenderId:"388305785199",appId:"1:388305785199:web:e961fe88d2012640c4989a"});s.a.initializeApp(u);var c=s.a.database(),l=s.a.auth(),d={name:"App",components:{},data:function(){return{isLoggedIn:!1}},methods:{doSignOut:function(){var e=this;l.signOut().then((function(){e.$router.back()}))}},mounted:function(){var e=this;l.onAuthStateChanged((function(t){e.isLoggedIn=null!==t}))}},p=d,f=n("2877"),v=n("6544"),b=n.n(v),h=n("7496"),m=n("40dc"),g=n("8336"),y=n("a75b"),x=n("2fa4"),w=n("2a7f"),_=Object(f["a"])(p,a,o,!1,null,null,null),O=_.exports;b()(_,{VApp:h["a"],VAppBar:m["a"],VBtn:g["a"],VContent:y["a"],VSpacer:x["a"],VToolbarTitle:w["a"]});var S=n("f309");r["a"].use(S["a"]);var k=new S["a"]({icons:{iconfont:"mdi"}}),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"expenseform"}},[n("h2",[e._v("Jake Miller")]),n("v-text-field",{attrs:{label:"Description",type:"text"},model:{value:e.expenseDesc,callback:function(t){e.expenseDesc=t},expression:"expenseDesc"}}),n("v-text-field",{attrs:{label:"Amount",type:"number"},model:{value:e.expenseAmt,callback:function(t){e.expenseAmt=e._n(t)},expression:"expenseAmt"}}),n("v-date-picker",{attrs:{label:"Date",type:"date"},model:{value:e.expenseDate,callback:function(t){e.expenseDate=t},expression:"expenseDate"}}),n("v-text-field",{attrs:{label:"Category",type:"text"},model:{value:e.expenseCat,callback:function(t){e.expenseCat=t},expression:"expenseCat"}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.yourButtonHandler}},[e._v("Add")]),n("v-btn",{attrs:{color:"primary",disabled:0==e.userSelections.length},on:{click:e.theDelButton}},[e._v("Remove Selection(s)")]),n("v-simple-table",{attrs:{id:"table"}},[n("thead",{attrs:{id:"thead"}},[n("tr",[n("th",[e._v("Date")]),n("th",[e._v("Description")]),n("th",[e._v("Category")]),n("th",[e._v("Amount")]),n("th",[e._v("Select")])])]),n("tbody",[e._l(e.myExpense,(function(t,r){return n("tr",{key:r,attrs:{id:"data"}},[n("td",[e._v(e._s(t.date))]),n("td",[e._v(e._s(t.description))]),n("td",[e._v(e._s(t.category))]),n("td",{attrs:{id:"amnt"}},[e._v(e._s(t.amount))]),n("td",[n("input",{attrs:{type:"checkbox",id:t.mykey},on:{change:e.selectionHandler}})])])})),n("tr",[n("td",{attrs:{id:"total",colspan:"3"}},[e._v("Total")]),n("td",[e._v(e._s(e.totalExpense.toFixed(2)))])])],2)])],1)},j=[],D=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("e25e"),n("159b"),n("2fa7"));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(D["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={data:function(){return{myExpense:[],totalExpense:0,expenseDate:"",expenseDesc:"",expenseCat:"",expenseAmt:0,userSelections:[]}},methods:{fbAddHandler:function(e){var t=e.val();this.myExpense.push(A({},t,{mykey:e.key})),this.totalExpense+=parseInt(t.amount)},yourButtonHandler:function(){c.ref("budget").push().set({date:this.expenseDate,description:this.expenseDesc,category:this.expenseCat,amount:this.expenseAmt})},selectionHandler:function(e){var t=e.target.id;e.target.checked?this.userSelections.push(t):this.userSelections=this.userSelections.filter((function(e){return e!=t}))},theDelButton:function(){this.userSelections.forEach((function(e){c.ref("budget").child(e).remove()}))},fbRemoveListener:function(e){this.myExpense=this.myExpense.filter((function(t){return t.mykey!=e.key}))}},mounted:function(){c.ref("budget").on("child_removed",this.fbRemoveListener),c.ref("budget").on("child_added",this.fbAddHandler)},beforeDestroy:function(){c.ref("budget").off("child_added",this.fbAddHandler),c.ref("budget").off("child_removed",this.fbRemoveListener)}},V=I,C=(n("b0e4"),n("2e4b")),L=n("1f4f"),T=n("8654"),B=Object(f["a"])(V,E,j,!1,null,"0994952b",null),U=B.exports;b()(B,{VBtn:g["a"],VDatePicker:C["a"],VSimpleTable:L["a"],VTextField:T["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loginForm"}},[n("v-text-field",{attrs:{label:"Email",type:"text"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),n("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),n("v-container",{directives:[{name:"show",rawName:"v-show",value:!1===e.isLoggedIn,expression:"isLoggedIn === false"}]},[n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{color:"primary"},on:{click:e.doSignIn}},[e._v("SignIn")]),n("v-btn",{attrs:{color:"primary"},on:{click:e.doSignUp}},[e._v("SignUp")])],1)],1)],1)},M=[],R={data:function(){return{userEmail:"",userPassword:"",isLoggedIn:!1}},methods:{doSignIn:function(){var e=this;l.signInWithEmailAndPassword(this.userEmail,this.userPassword).then((function(t){alert("You logged in as "+t.user.email),e.$router.push({path:"/budget"})})).catch((function(e){alert("Error "+e)}))},doSignUp:function(){l.createUserWithEmailAndPassword(this.userEmail,this.userPassword).then((function(e){alert("User created with UID "+e.user.uid)})).catch((function(e){alert("Error "+e)}))}},mounted:function(){var e=this;l.onAuthStateChanged((function(t){e.isLoggedIn=null!==t}))}},$=R,F=(n("aa25"),n("a523")),J=n("0fd9"),N=Object(f["a"])($,H,M,!1,null,"3434669f",null),z=N.exports;b()(N,{VBtn:g["a"],VContainer:F["a"],VRow:J["a"],VTextField:T["a"]});var G=n("8c4f");r["a"].use(G["a"]);var W=[{path:"/",component:z},{path:"/budget",component:U}],Y=new G["a"]({routes:W,mode:"history",base:"/~milleja1/myvuefirebase/"});r["a"].config.productionTip=!1,new r["a"]({vuetify:k,render:function(e){return e(O)},router:Y}).$mount("#app")},aa25:function(e,t,n){"use strict";var r=n("1085"),a=n.n(r);a.a},b0e4:function(e,t,n){"use strict";var r=n("452d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1ca59280.js.map