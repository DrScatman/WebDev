(function(e){function t(t){for(var s,o,n=t[0],l=t[1],u=t[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/~milleja1/fitnessApp/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00e4":function(e,t,r){},"039a":function(e,t,r){"use strict";var s=r("d563"),a=r.n(s);a.a},"4ea1":function(e,t,r){e.exports=r.p+"img/workout.996c4c88.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",[r("span",[e._v("YouFIT")]),r("span",{staticClass:"font-weight-light"},[e._v(" Your Fitness Journey Starts HERE")])]),r("v-spacer"),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!0===e.isLoggedIn,expression:"isLoggedIn === true"}],on:{click:function(t){e.dialog=!0}}},s),[e._v("SignOut")])]}}])},[r("span",[e._v("Sign out of your account.")])]),r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Sign Out")]),r("v-card-text",[e._v("Are you sure you want to sign out?")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{on:{click:e.doSignOut}},[e._v("Yes")]),r("v-btn",{on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")])],1)],1)],1)],1),r("v-content",[r("router-view")],1)],1)},i=[],o=r("59ca"),n=r.n(o),l=(r("66ce"),r("ea7b"),{apiKey:"AIzaSyAWA_ThPsCdTdtQ9I97jAIRQ4yDvKD4P3A",authDomain:"fitnessapp-7784e.firebaseapp.com",databaseURL:"https://fitnessapp-7784e.firebaseio.com",projectId:"fitnessapp-7784e",storageBucket:"fitnessapp-7784e.appspot.com",messagingSenderId:"1058218214265",appId:"1:1058218214265:web:2c764a6d42f49e18d925a8",measurementId:"G-MZVXNS44BD"});n.a.initializeApp(l);var u=n.a.database(),c=n.a.auth(),d=r("2f62");s["a"].use(d["a"]);var p=new d["a"].Store({state:{userEmail:"",setUserEmail:function(e){this.userEmail=e}}}),h={store:p,name:"App",components:{},data:function(){return{userEmail:"",isLoggedIn:!1,dialog:!1}},methods:{doSignOut:function(){var e=this;c.signOut().then((function(){e.$router.back(),e.dialog=!1}))}},mounted:function(){var e=this;c.onAuthStateChanged((function(t){e.isLoggedIn=null!==t}))}},v=h,f=r("2877"),b=r("6544"),m=r.n(b),g=r("7496"),y=r("40dc"),_=r("8336"),P=r("b0af"),k=r("99d9"),w=r("a75b"),x=r("169a"),E=r("2fa4"),S=r("2a7f"),O=r("3a2f"),j=Object(f["a"])(v,a,i,!1,null,null,null),C=j.exports;m()(j,{VApp:g["a"],VAppBar:y["a"],VBtn:_["a"],VCard:P["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VContent:w["a"],VDialog:x["a"],VSpacer:E["a"],VToolbarTitle:S["a"],VTooltip:O["a"]});var I=r("f309");s["a"].use(I["a"]);var V=new I["a"]({icons:{iconfont:"mdi"}}),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page"}},[r("div",{attrs:{id:"workoutForm"}},[r("v-select",{attrs:{items:e.pushCategories,label:"Push Exercise"},model:{value:e.pushExercise,callback:function(t){e.pushExercise=t},expression:"pushExercise"}}),r("v-select",{attrs:{items:e.pullCategories,label:"Pull Exercise"},model:{value:e.pullExercise,callback:function(t){e.pullExercise=t},expression:"pullExercise"}}),r("v-select",{attrs:{items:e.legCategories,label:"Leg Exercise"},model:{value:e.legExercise,callback:function(t){e.legExercise=t},expression:"legExercise"}}),r("v-text-field",{attrs:{label:"Sets",type:"number",step:"1.0"},model:{value:e.sets,callback:function(t){e.sets=e._n(t)},expression:"sets"}}),r("v-text-field",{attrs:{label:"Reps",type:"number",step:"1.0"},model:{value:e.reps,callback:function(t){e.reps=e._n(t)},expression:"reps"}}),r("v-select",{attrs:{items:e.privacyCategories,label:"Privacy"},model:{value:e.privacy,callback:function(t){e.privacy=t},expression:"privacy"}}),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({attrs:{color:"primary",disabled:0==e.userSelections.length},on:{click:e.remove}},s),[e._v("Remove Selection(s)")])]}}])},[r("span",[e._v("Remove the selected items from the table.")])]),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({attrs:{color:"primary"},on:{click:e.yourButtonHandler}},s),[e._v("Add")])]}}])},[r("span",[e._v("Add item to the table.")])])],1),r("p",{attrs:{id:"one"}},[e._v(' Enter your workout into the form and it will show up in both the "Your workouts" table and the "All users workouts" table. Comparing your workouts to other users can help you craft a workout routine that best suits your needs. '),r("img",{attrs:{src:e.image,height:"300px",width:"500px"}})]),r("v-simple-table",{attrs:{id:"publicTable","fixed-header":""}},[r("div",{attrs:{id:"th"}},[e._v("| Your workouts |")]),r("table",[r("thead",[r("tr",[r("th",{attrs:{id:"th"}},[e._v("Push Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Pull Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Leg Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Sets")]),r("th",{attrs:{id:"th"}},[e._v("Reps")]),r("th",{attrs:{id:"th"}},[e._v("Selection")])])]),r("tbody",e._l(e.myWorkoutPrivate,(function(t,s){return r("tr",{key:s,attrs:{id:"dataRows"}},[r("td",[e._v(e._s(t.Push))]),r("td",[e._v(e._s(t.Pull))]),r("td",[e._v(e._s(t.Legs))]),r("td",{attrs:{id:"sets"}},[e._v(e._s(t.Sets))]),r("td",{attrs:{id:"reps"}},[e._v(e._s(t.Reps))]),r("td",[r("input",{attrs:{type:"checkbox",id:t.mykey},on:{change:e.selectionHandler}})])])})),0)])]),r("v-simple-table",{attrs:{id:"publicTable","fixed-header":""}},[r("div",{attrs:{id:"th"}},[e._v("| All users workouts |")]),r("table",[r("thead",[r("tr",[r("th",{attrs:{id:"th"}},[e._v("User")]),r("th",{attrs:{id:"th"}},[e._v("Push Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Pull Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Leg Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Sets")]),r("th",{attrs:{id:"th"}},[e._v("Reps")])])]),r("tbody",e._l(e.myWorkoutPublic,(function(t,s){return r("tr",{key:s,attrs:{id:"dataRows"}},[r("td",[e._v(" "+e._s(null!=t.Email?t.Email:"example.gmail.com")+" ")]),r("td",[e._v(e._s(t.Push))]),r("td",[e._v(e._s(t.Pull))]),r("td",[e._v(e._s(t.Legs))]),r("td",{attrs:{id:"sets"}},[e._v(e._s(t.Sets))]),r("td",{attrs:{id:"reps"}},[e._v(e._s(t.Reps))])])})),0)])])],1)},A=[],L=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),R=r("4ea1"),D=r.n(R);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(r,!0).forEach((function(t){Object(L["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={data:function(){return{email:"",pushCategories:["Bench press","Shoulder press","Chest-Fly","Triceps","Push-ups"],pullCategories:["Row","Pull-ups","Pull-downs","Shrug","Dead lift"],legCategories:["Squat","Romanian deadlift","Lunge","Calf-raises","Leg press"],privacyCategories:["Private","Public"],userSelections:[],myWorkoutPrivate:[],myWorkoutPublic:[],pushExercise:"",pullExercise:"",legExercise:"",privacy:"",userEmail:"",sets:0,reps:0,image:D.a}},methods:{removeItemPublic:function(e){this.myWorkoutPublic=this.myWorkoutPublic.filter((function(t){return t.mykey!=e.key})),this.userSelections=[]},removeItemPrivate:function(e){this.myWorkoutPrivate=this.myWorkoutPrivate.filter((function(t){return t.mykey!=e.key})),this.userSelections=[]},dataHandlerPublic:function(e){var t=e.val();this.myWorkoutPublic.push(H({},t,{mykey:e.key}))},dataHandlerPrivate:function(e){var t=e.val();t.Email==p.state.userEmail&&this.myWorkoutPrivate.push(H({},t,{mykey:e.key}))},yourButtonHandler:function(){"Private"==this.privacy?u.ref("workoutPrivate").push().set({Email:p.state.userEmail,Push:this.pushExercise,Pull:this.pullExercise,Legs:this.legExercise,Sets:this.sets,Reps:this.reps}):(u.ref("workoutPrivate").push().set({Email:p.state.userEmail,Push:this.pushExercise,Pull:this.pullExercise,Legs:this.legExercise,Sets:this.sets,Reps:this.reps}),u.ref("workoutPublic").push().set({Email:p.state.userEmail,Push:this.pushExercise,Pull:this.pullExercise,Legs:this.legExercise,Sets:this.sets,Reps:this.reps}))},remove:function(){this.userSelections.forEach((function(e){u.ref("workoutPrivate").child(e).remove()})),this.userSelections.forEach((function(e){u.ref("workoutPublic").child(e).remove()}))},selectionHandler:function(e){var t=e.target.id;e.target.checked?this.userSelections.push(t):this.userSelections=this.userSelections.filter((function(e){return e!=t}))}},mounted:function(){u.ref("workoutPrivate").on("child_added",this.dataHandlerPrivate),u.ref("workoutPrivate").on("child_removed",this.removeItemPrivate),u.ref("workoutPublic").on("child_added",this.dataHandlerPublic),u.ref("workoutPublic").on("child_removed",this.removeItemPublic)},beforeDestroy:function(){u.ref("workoutPrivate").off("child_added",this.dataHandlerPrivate),u.ref("workoutPrivate").off("child_removed",this.removeItemPrivate),u.ref("workoutPublic").off("child_added",this.dataHandlerPublic),u.ref("workoutPublic").off("child_removed",this.removeItemPublic)}},U=B,F=(r("8fd5"),r("b974")),$=r("1f4f"),Y=r("8654"),M=Object(f["a"])(U,T,A,!1,null,null,null),J=M.exports;m()(M,{VBtn:_["a"],VSelect:F["a"],VSimpleTable:$["a"],VTextField:Y["a"],VTooltip:O["a"]});var N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page"}},[r("v-container",{directives:[{name:"show",rawName:"v-show",value:!1===e.isLoggedIn,expression:"isLoggedIn === false"}],attrs:{id:"loginForm"}},[r("v-row",[r("v-text-field",{attrs:{label:"Username/Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-row",[r("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}})],1),r("v-row",{attrs:{justify:"end"}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({on:{click:e.doSignUp}},s),[e._v("SignUp")]),r("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text)+" "),r("v-btn",{attrs:{color:"red"},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)]}}])},[r("span",[e._v("Create an account by entering your preferred email and password.")])]),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({on:{click:e.doSignIn}},s),[e._v("SignIn")])]}}])},[r("span",[e._v("Sign into an existing account that you've already created.")])])],1)],1),r("p",{attrs:{id:"one"}},[e._v(" The table below shows all users workouts entered into the YouFit App. To enter your workout information in, log in and enter your workout into the form on the next page. ")]),r("v-container",[r("v-simple-table",{attrs:{id:"publicTable","fixed-header":""}},[r("div",{attrs:{id:"th"}},[e._v("| All users workouts |")]),r("table",[r("thead",[r("tr",[r("th",{attrs:{id:"th"}},[e._v("Push Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Pull Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Leg Exercise")]),r("th",{attrs:{id:"th"}},[e._v("Sets")]),r("th",{attrs:{id:"th"}},[e._v("Reps")])])]),r("tbody",e._l(e.myWorkout,(function(t,s){return r("tr",{key:s,attrs:{id:"dataRows"}},[r("td",[e._v(e._s(t.Push))]),r("td",[e._v(e._s(t.Pull))]),r("td",[e._v(e._s(t.Legs))]),r("td",{attrs:{id:"sets"}},[e._v(e._s(t.Sets))]),r("td",{attrs:{id:"reps"}},[e._v(e._s(t.Reps))])])})),0)])])],1)],1)},q=[];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(L["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={data:function(){return{email:"",userPassword:"",isLoggedIn:!1,snackbar:!1,text:"",pushCategories:["Bench press","Shoulder press","Chest-Fly","Triceps","Push-ups"],pullCategories:["Row","Pull-ups","Pull-downs","Shrug","Dead lift"],legCategories:["Squat","Romanian deadlift","Lunge","Calf-raises","Leg press"],userSelections:[],myWorkout:[],pushExercise:"",pullExercise:"",legExercise:"",sets:0,reps:0}},methods:{doSignUp:function(){var e=this;c.createUserWithEmailAndPassword(this.email,this.userPassword).then((function(){e.$router.push({path:"/budget"})})).catch((function(t){e.snackbar=!0,e.text=t})),p.state.setUserEmail(this.email)},doSignIn:function(){var e=this;c.signInWithEmailAndPassword(this.email,this.userPassword).then((function(){e.$router.push({path:"/budget"})})).catch((function(t){e.snackbar=!0,e.text=t})),p.state.setUserEmail(this.email)},dataHandler:function(e){var t=e.val();this.myWorkout.push(K({Email:this.email},t,{mykey:e.key}))}},mounted:function(){var e=this;u.ref("workoutPublic").on("child_added",this.dataHandler),c.onAuthStateChanged((function(t){e.isLoggedIn=null!==t}))},beforeDestroy:function(){u.ref("workoutPublic").off("child_added",this.dataHandler)}},G=Q,X=(r("039a"),r("a523")),Z=r("0fd9b"),ee=r("2db4"),te=Object(f["a"])(G,N,q,!1,null,null,null),re=te.exports;m()(te,{VBtn:_["a"],VContainer:X["a"],VRow:Z["a"],VSimpleTable:$["a"],VSnackbar:ee["a"],VTextField:Y["a"],VTooltip:O["a"]});var se=r("8c4f");s["a"].use(se["a"]);var ae=[{path:"/",component:re},{path:"/budget",component:J}],ie=new se["a"]({routes:ae,mode:"history",base:"/~milleja1/fitnessApp/"});s["a"].use(d["a"]),s["a"].config.productionTip=!1,new s["a"]({store:p,vuetify:V,render:function(e){return e(C)},router:ie}).$mount("#app")},"8fd5":function(e,t,r){"use strict";var s=r("00e4"),a=r.n(s);a.a},d563:function(e,t,r){}});
//# sourceMappingURL=app.6262b3ac.js.map