(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+if1":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("登录成功")]),this._v(" "),e("van-button",{attrs:{id:"backToHome",size:"large"},on:{click:this.backToHome}},[this._v("回到首页")])],1)},a=[]},0:function(t,e,n){t.exports=n("MDog")},"0nu6":function(t,e,n){"use strict";n.r(e);var i=n("Mg7r"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("xvu6"),r=n("JFUb");var u=function(t){n("i0oo")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-0db03f85",null);e.default=c.exports},"2RM9":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"is-input"}},[n("h1",[t._v("notes")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("xt-panel",{attrs:{inputContent:t.input,type:1},on:{inputContent:t.getInput}}),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),n("div",{staticClass:"small-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"AllMyNotes"}}},[t._v("我的notes")])],1),t._v(" "),t.login?n("div",{staticClass:"user-btn-wrap"},[n("a",{staticClass:"small-btn",on:{click:t.logout}},[t._v("登出")])]):n("div",{staticClass:"user-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Login"}}},[t._v("登录")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Register"}}},[t._v("注册")])],1)],1)])},a=[]},"2RbH":function(t,e,n){"use strict";n.r(e);var i=n("giVQ"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("+if1"),r=n("JFUb");var u=function(t){n("B65C")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-6ecb59f7",null);e.default=c.exports},"2lLy":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{goToLogin:function(){this.$router.push({path:"/login"})}}}},"2u4M":function(t,e,n){"use strict";n.r(e);var i=n("y0ES"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("LyT3"),r=n("JFUb");var u=function(t){n("5iRm")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-18cbf558",null);e.default=c.exports},"3Qhf":function(t,e){},"4EGB":function(t,e,n){"use strict";!function(t,e){var n=e.documentElement,i=t.devicePixelRatio||1;function a(){var t=n.clientWidth/10;n.style.fontSize=t+"px"}if(function t(){e.body?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",t)}(),a(),t.addEventListener("resize",a),t.addEventListener("pageshow",function(t){t.persisted&&a()}),i>=2){var o=e.createElement("body"),s=e.createElement("div");s.style.border=".5px solid transparent",o.appendChild(s),n.appendChild(o),1===s.offsetHeight&&n.classList.add("hairlines"),n.removeChild(o)}}(window,document)},"4VJn":function(t,e){},"4oiO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("KybE"),o=(i=a)&&i.__esModule?i:{default:i};e.default={name:"AllMyNots",components:{xtPanel:o.default},data:function(){return{listOfNotes:[]}},methods:{getAllNotes:function(){var t=this;this.axios.get("/api/listallnotes").then(function(e){t.listOfNotes=e.data})},onClickLight:function(){window.history.go(-1)}},created:function(){this.getAllNotes()}}},"5iRm":function(t,e){},"7fvF":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[]},"9vCR":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},a=[]},B65C:function(t,e){},Bftn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{seeMyNotes:function(){this.$router.push({path:"/allmynotes"})},goToHome:function(){this.$router.push({path:"/"})}}}},CNRE:function(t,e,n){"use strict";n.r(e);var i=n("wqCG"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("7fvF"),r=n("JFUb");var u=function(t){n("TEFr")},c=Object(r.a)(a.a,s.a,s.b,!1,u,null,null);e.default=c.exports},ESl7:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"all-my-notes"}},[e("van-nav-bar",{attrs:{title:"我的notes","left-text":"返回","left-arrow":""},on:{"click-left":this.onClickLight}}),this._v(" "),e("div",{staticClass:"xt-content-wrap"},this._l(this.listOfNotes,function(t){return e("div",{attrs:{id:"panel-wrap"}},[e("xt-panel",{attrs:{type:2,listItem:t}})],1)}))],1)},a=[]},GJvR:function(t,e){},I4Dg:function(t,e,n){"use strict";n.r(e);var i=n("oJj8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("9vCR"),r=n("JFUb");var u=function(t){n("pL8M")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-14075a32",null);e.default=c.exports},KybE:function(t,e,n){"use strict";n.r(e);var i=n("f5rT"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("mq6m"),r=n("JFUb");var u=function(t){n("xzxX")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-f076db8e",null);e.default=c.exports},LLyB:function(t,e){},LyT3:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loading"}},[e("van-loading",{attrs:{color:"black"}})],1)},a=[]},MDog:function(t,e,n){"use strict";var i=f(n("oCYn")),a=f(n("L2JU")),o=f(n("CNRE")),s=f(n("SEu5"));n("4EGB");var r=f(n("zOZW"));n("9d8Q"),n("hZCq");var u=f(n("vDqi")),c=f(n("p/7L")),l=f(n("Kyfw"));function f(t){return t&&t.__esModule?t:{default:t}}i.default.use(a.default),i.default.use(l.default),i.default.use(c.default,u.default),i.default.use(r.default),i.default.config.productionTip=!1,i.default.axios.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 401:sessionStorage.isLogin=!1,d.commit("logout"),s.default.push({path:"/login",query:{redirect:s.default.currentRoute.fullPath}})}return Promise.reject(t.response.data)});var d=new a.default.Store({state:{isLogin:null},mutations:{logout:function(t){t.isLogin=!1},isLogin:function(t){t.isLogin=!0}}});new i.default({el:"#app",router:s.default,store:d,components:{App:o.default},template:"<App/>",created:function(){}})},Mg7r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("2u4M"),o=(i=a)&&i.__esModule?i:{default:i};e.default={name:"Login",components:{Loading:o.default},data:function(){return{username:"",password:"",ifLoad:!0}},methods:{submit:function(){var t=this;this.ifLoad=!1;this.axios({method:"post",url:"/user/login",data:{user:{username:this.username,password:this.password}}}).then(function(e){t.ifLoad=!0;var n=e.data;if(n.userid){localStorage.isLogin=!0,t.$store.commit("isLogin"),sessionStorage.userid=n.userid,t.$router.push({path:"/"})}else t.$toast(n.error)})},onClickRight:function(){this.$router.push({path:"/register"})},onClickLight:function(){this.$router.go(-1)}}}},NTBK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("KybE"),o=(i=a)&&i.__esModule?i:{default:i};e.default={name:"MyNoteDetail",components:{xtPanel:o.default},data:function(){return{noteId:"",noteData:null,title:"",noteCon:""}},methods:{onClickLight:function(){window.history.go(-1)},getTitle:function(t){return t.indexOf("\n")>-1?t.split("\n")[0]:t},getNote:function(){var t=this;this.axios({method:"post",url:"/api/notedetail",data:{id:this.noteId}}).then(function(e){t.noteData=e.data,t.title=t.getTitle(t.noteData.content),t.noteCon=t.noteData.content})},deleteNote:function(){var t=this;this.$dialog.confirm({message:"确认删除吗"}).then(function(){t.axios({method:"post",url:"/api/deletenote",data:{id:t.noteId}}).then(function(e){1===e.data.ok&&t.$router.go(-1)})}).catch(function(){})},editNote:function(){this.noteCon&&this.$router.push({name:"EditNote",params:{con:this.noteCon,id:this.noteId}})}},created:function(){this.noteId=this.$route.params.id,this.getNote()}}},POfS:function(t,e){},Riwz:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"edit-note"}},[e("van-nav-bar",{attrs:{title:"编辑","left-text":"取消","left-arrow":""},on:{"click-left":this.onClickLight}}),this._v(" "),e("xt-panel",{attrs:{inputContent:this.input,type:1},on:{inputContent:this.getInput}}),this._v(" "),e("van-button",{attrs:{id:"submit",size:"large"},on:{click:this.submit}},[this._v("提交")])],1)},a=[]},SEu5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(n("oCYn")),a=p(n("jE9Z")),o=p(n("rQwl")),s=p(n("nXPv")),r=p(n("0nu6")),u=(p(n("2RbH")),p(n("yJkN"))),c=p(n("qndQ")),l=p(n("hMor")),f=p(n("wEv5")),d=p(n("mqKQ")),v=p(n("I4Dg"));function p(t){return t&&t.__esModule?t:{default:t}}i.default.use(a.default),e.default=new a.default({routes:[{path:"/",name:"Isinput",component:o.default},{path:"/register",name:"Register",component:s.default},{path:"/login",name:"Login",component:r.default},{path:"/submitsuccess",name:"SubmitSuccess",component:c.default,meta:{requiresAuth:!0}},{path:"/registersuccess",name:"RegisterSuccess",component:u.default,meta:{requiresAuth:!0}},{path:"/allmynotes",name:"AllMyNotes",component:l.default},{path:"/editnote/:con/:id",name:"EditNote",component:d.default},{path:"/mynotedetail/:id",name:"MyNoteDetail",component:f.default},{path:"*",name:"PageNotFound",component:v.default}]})},Sllv:function(t,e){},TEFr:function(t,e){},TEKk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Register",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/user/register",data:{user:{username:t.username,password:t.password}}}).then(function(e){var n=e.data;n.isRegister?t.$router.push({path:"/registersuccess"}):alert(n.error)})},onClickRight:function(){this.$router.push({path:"/login"})},onClickLight:function(){this.$router.go(-1)}}}},TgEj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("KybE"),o=(i=a)&&i.__esModule?i:{default:i};e.default={name:"EditNote",components:{xtPanel:o.default},data:function(){return{input:"",noteId:""}},methods:{onClickLight:function(){window.history.go(-1)},getInput:function(t){this.input=t},submit:function(){var t=this;""!=this.input?this.axios({method:"post",url:"/api/editnote",data:{id:this.noteId,content:this.input}}).then(function(e){1==e.data.ok&&(sessionStorage.inputContent="",t.$router.go(-1))}):this.$toast("请输入内容")}},created:function(){this.input=this.$route.params.con,this.noteId=this.$route.params.id}}},VbCC:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"submit-success"}},[n("van-icon",{attrs:{name:"success"}}),t._v(" "),n("p",[t._v("提交成功")]),t._v(" "),n("van-button",{attrs:{id:"see-my-notes",size:"large"},on:{click:t.seeMyNotes}},[t._v("查看我的notes")]),t._v(" "),n("van-button",{attrs:{id:"go-to-home",size:"large"},on:{click:t.goToHome}},[t._v("再写一条note")])],1)},a=[]},f5rT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"XtPanel",props:{type:Number,listItem:Object,inputContent:{type:String,default:""}},data:function(){return{input:this.inputContent}},methods:{keyUp:function(){sessionStorage.inputContent=this.input,this.$emit("inputContent",this.input)},getTitle:function(t){return t.indexOf("\n")>-1?t.split("\n")[0]:t},ifDot:function(t){return t.split("\n").length-1>2},goToDetail:function(t){this.$router.push({name:"MyNoteDetail",params:{id:t}})}}}},fntd:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("van-nav-bar",{attrs:{title:"注册","left-text":"返回","right-text":"登录","left-arrow":""},on:{"click-right":t.onClickRight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("注册")])],1)},a=[]},giVQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{backToHome:function(){this.$router.push({path:"/"})}}}},hMor:function(t,e,n){"use strict";n.r(e);var i=n("4oiO"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("ESl7"),r=n("JFUb");var u=function(t){n("Sllv")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-ac5b22c8",null);e.default=c.exports},hq9x:function(t,e){},i0oo:function(t,e){},"k1r/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("KybE"),o=(i=a)&&i.__esModule?i:{default:i};e.default={name:"Isinput",components:{xtPanel:o.default},data:function(){return{input:sessionStorage.inputContent||""}},methods:{getInput:function(t){this.input=t},isLogin:function(){var t=this;this.axios.get("/user/isLogin").then(function(e){var n=e.data;if(localStorage.isLogin=n.loginStatus,1==n.loginStatus)return t.$store.commit("isLogin");t.$store.commit("logout")})},logout:function(){var t=this;this.axios.get("/user/logout").then(function(e){var n=e.data;localStorage.isLogin=n.loginStatus,t.$store.commit("logout")})},submit:function(){var t=this;""!=this.input?this.axios({method:"post",url:"/api/submitpost",data:{content:t.input}}).then(function(e){e.data.status&&(sessionStorage.inputContent="",t.$router.push({path:"/SubmitSuccess"}))}):this.$toast("请输入内容")}},created:function(){this.isLogin()},computed:{login:function(){return this.$store.state.isLogin}}}},mq6m:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xt-panel"},[1==t.type?[n("van-cell-group",{staticClass:"xt-field xt-panel-1"},[n("van-field",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"4",autosize:""},on:{keyup:t.keyUp},model:{value:t.input,callback:function(e){t.input="string"==typeof e?e.trim():e},expression:"input"}})],1)]:t._e(),t._v(" "),t.listItem&&2==t.type||t.listItem&&3==t.type?[n("div",{class:{"xt-panel-2":2==t.type},on:{click:function(e){t.goToDetail(t.listItem._id)}}},[n("div",{staticClass:"xt-panel-title"},[t._v(t._s(t.getTitle(t.listItem.content)))]),t._v(" "),n("div",{staticClass:"xt-panel-content"},[n("pre",[t._v(t._s(t.listItem.content))]),2==t.type&&t.ifDot(t.listItem.content)?n("p",[t._v("....")]):t._e()]),t._v(" "),n("div",{staticClass:"xt-panel-sub"},[t._v(t._s(new Date(t.listItem.date).toLocaleString()))])])]:t._e()],2)},a=[]},mqKQ:function(t,e,n){"use strict";n.r(e);var i=n("TgEj"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("Riwz"),r=n("JFUb");var u=function(t){n("4VJn")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-066c68a6",null);e.default=c.exports},nXPv:function(t,e,n){"use strict";n.r(e);var i=n("TEKk"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("fntd"),r=n("JFUb");var u=function(t){n("LLyB")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-d16da5fa",null);e.default=c.exports},oJj8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"404"}},pL8M:function(t,e){},q1Va:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my-note-detail"}},[n("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","right-text":"编辑","left-arrow":""},on:{"click-left":t.onClickLight,"click-right":t.editNote}}),t._v(" "),n("div",{attrs:{id:"panel-wrap"}},[n("xt-panel",{attrs:{type:3,listItem:t.noteData}})],1),t._v(" "),n("van-button",{attrs:{id:"delete",type:"danger",size:"large"},on:{click:t.deleteNote}},[t._v("删除")])],1)},a=[]},qndQ:function(t,e,n){"use strict";n.r(e);var i=n("Bftn"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("VbCC"),r=n("JFUb");var u=function(t){n("POfS")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-65a673fa",null);e.default=c.exports},rQwl:function(t,e,n){"use strict";n.r(e);var i=n("k1r/"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("2RM9"),r=n("JFUb");var u=function(t){n("hq9x")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-49ca77ac",null);e.default=c.exports},uXpn:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"register-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("注册成功")]),this._v(" "),e("van-button",{attrs:{id:"goToLogin",size:"large"},on:{click:this.goToLogin}},[this._v("前往登录")])],1)},a=[]},wEv5:function(t,e,n){"use strict";n.r(e);var i=n("NTBK"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("q1Va"),r=n("JFUb");var u=function(t){n("3Qhf")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-3416d106",null);e.default=c.exports},wqCG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App"}},xvu6:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","right-text":"注册","left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.onClickLight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("登录")]),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:!t.ifLoad,expression:"!ifLoad"}]})],1)},a=[]},xzxX:function(t,e){},y0ES:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Loding"}},yJkN:function(t,e,n){"use strict";n.r(e);var i=n("2lLy"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("uXpn"),r=n("JFUb");var u=function(t){n("GJvR")},c=Object(r.a)(a.a,s.a,s.b,!1,u,"data-v-5a2f764c",null);e.default=c.exports}},[[0,0,1]]]);