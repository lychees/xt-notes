(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+if1":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("登录成功")]),this._v(" "),e("van-button",{attrs:{id:"backToHome",size:"large"},on:{click:this.backToHome}},[this._v("回到首页")])],1)},a=[]},0:function(t,e,n){t.exports=n("MDog")},"0nu6":function(t,e,n){"use strict";n.r(e);var i=n("Mg7r"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("lP92"),o=n("JFUb");var u=function(t){n("gilp")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-37148740",null);e.default=c.exports},"2RbH":function(t,e,n){"use strict";n.r(e);var i=n("giVQ"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("+if1"),o=n("JFUb");var u=function(t){n("B65C")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-6ecb59f7",null);e.default=c.exports},"2lLy":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{goToLogin:function(){this.$router.push({path:"/login"})}}}},"4EGB":function(t,e,n){"use strict";!function(t,e){var n=e.documentElement,i=t.devicePixelRatio||1;function a(){var t=n.clientWidth/10;n.style.fontSize=t+"px"}if(function t(){e.body?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",t)}(),a(),t.addEventListener("resize",a),t.addEventListener("pageshow",function(t){t.persisted&&a()}),i>=2){var r=e.createElement("body"),s=e.createElement("div");s.style.border=".5px solid transparent",r.appendChild(s),n.appendChild(r),1===s.offsetHeight&&n.classList.add("hairlines"),n.removeChild(r)}}(window,document)},"4oiO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AllMyNots",data:function(){return{listOfNotes:[]}},methods:{getAllNotes:function(){var t=this;this.axios.get("/api/listallnotes").then(function(e){t.listOfNotes=e.data})},onClickLight:function(){window.history.go(-1)}},created:function(){this.getAllNotes()}}},"7fvF":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[]},"9YyY":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("van-nav-bar",{attrs:{title:"注册","left-text":"返回","right-text":"登录","left-arrow":""},on:{"click-right":t.onClickRight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("注册")])],1)},a=[]},"9vCR":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},a=[]},B65C:function(t,e){},Bftn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{seeMyNotes:function(){this.$router.push({path:"/allmynotes"})},goToHome:function(){this.$router.push({path:"/"})}}}},CNRE:function(t,e,n){"use strict";n.r(e);var i=n("wqCG"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("7fvF"),o=n("JFUb");var u=function(t){n("TEFr")},c=Object(o.a)(a.a,s.a,s.b,!1,u,null,null);e.default=c.exports},GJvR:function(t,e){},I4Dg:function(t,e,n){"use strict";n.r(e);var i=n("oJj8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("9vCR"),o=n("JFUb");var u=function(t){n("pL8M")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-14075a32",null);e.default=c.exports},IvlK:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"all-my-notes"}},[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLight}}),t._v(" "),t._l(t.listOfNotes,function(e){return n("div",{attrs:{id:"panel-wrap"}},[n("van-panel",{staticClass:"panel",attrs:{title:e.date}},[n("div",{staticClass:"panel-content"},[t._v(t._s(e.content))])])],1)})],2)},a=[]},MDog:function(t,e,n){"use strict";var i=f(n("oCYn")),a=f(n("L2JU")),r=f(n("CNRE")),s=f(n("SEu5"));n("4EGB");var o=f(n("zOZW"));n("9d8Q"),n("hZCq");var u=f(n("vDqi")),c=f(n("p/7L")),l=f(n("Kyfw"));function f(t){return t&&t.__esModule?t:{default:t}}i.default.use(a.default),i.default.use(l.default),i.default.use(c.default,u.default),i.default.use(o.default),i.default.config.productionTip=!1,i.default.axios.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 401:sessionStorage.isLogin=!1,d.commit("logout"),s.default.push({path:"/login",query:{redirect:s.default.currentRoute.fullPath}})}return Promise.reject(t.response.data)});var d=new a.default.Store({state:{isLogin:null},mutations:{logout:function(t){t.isLogin=!1},isLogin:function(t){t.isLogin=!0}}});new i.default({el:"#app",router:s.default,store:d,components:{App:r.default},template:"<App/>",created:function(){}})},Mg7r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Login",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/user/login",data:{user:{username:this.username,password:this.password}}}).then(function(e){var n=e.data;if(n.userid){localStorage.isLogin=!0,t.$store.commit("isLogin"),sessionStorage.userid=n.userid,t.$router.push({path:"/"})}else alert(n.error)})},onClickRight:function(){this.$router.push({path:"/register"})},onClickLight:function(){window.history.go(-1)}}}},POfS:function(t,e){},SEu5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(n("oCYn")),a=d(n("jE9Z")),r=d(n("rQwl")),s=d(n("nXPv")),o=d(n("0nu6")),u=(d(n("2RbH")),d(n("yJkN"))),c=d(n("qndQ")),l=d(n("hMor")),f=d(n("I4Dg"));function d(t){return t&&t.__esModule?t:{default:t}}i.default.use(a.default),e.default=new a.default({routes:[{path:"/",name:"Isinput",component:r.default},{path:"/register",name:"Register",component:s.default},{path:"/login",name:"Login",component:o.default},{path:"/submitsuccess",name:"SubmitSuccess",component:c.default,meta:{requiresAuth:!0}},{path:"/registersuccess",name:"RegisterSuccess",component:u.default,meta:{requiresAuth:!0}},{path:"/allmynotes",name:"AllMyNotes",component:l.default,meta:{requiresAuth:!0}},{path:"*",name:"PageNotFound",component:f.default}]})},TEFr:function(t,e){},TEKk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Register",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/user/register",data:{user:{username:t.username,password:t.password}}}).then(function(e){var n=e.data;n.isRegister?t.$router.push({path:"/registersuccess"}):alert(n.error)})},onClickRight:function(){this.$router.push({path:"/login"})}}}},VbCC:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"submit-success"}},[n("van-icon",{attrs:{name:"success"}}),t._v(" "),n("p",[t._v("提交成功")]),t._v(" "),n("van-button",{attrs:{id:"see-my-notes",size:"large"},on:{click:t.seeMyNotes}},[t._v("查看我的notes")]),t._v(" "),n("van-button",{attrs:{id:"go-to-home",size:"large"},on:{click:t.goToHome}},[t._v("再写一条note")])],1)},a=[]},giVQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{backToHome:function(){this.$router.push({path:"/"})}}}},gilp:function(t,e){},hMor:function(t,e,n){"use strict";n.r(e);var i=n("4oiO"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("IvlK"),o=n("JFUb");var u=function(t){n("y2+j")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-4af2c2cc",null);e.default=c.exports},"k1r/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Isinput",data:function(){return{input:""}},methods:{isLogin:function(){var t=this;this.axios.get("/user/isLogin").then(function(e){var n=e.data;if(localStorage.isLogin=n.loginStatus,1==n.loginStatus)return t.$store.commit("isLogin");t.$store.commit("logout")})},logout:function(){var t=this;this.axios.get("/user/logout").then(function(e){var n=e.data;localStorage.isLogin=n.loginStatus,t.$store.commit("logout")})},submit:function(){var t=this;this.axios({method:"post",url:"/api/submitpost",data:{content:t.input}}).then(function(e){e.data.status&&t.$router.push({path:"/SubmitSuccess"})})}},created:function(){this.isLogin()},computed:{login:function(){return this.$store.state.isLogin}}}},lP92:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","right-text":"注册","left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.onClickLight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("登录")])],1)},a=[]},nXPv:function(t,e,n){"use strict";n.r(e);var i=n("TEKk"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("9YyY"),o=n("JFUb");var u=function(t){n("oYpv")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-6d006945",null);e.default=c.exports},oJj8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"404"}},oYpv:function(t,e){},pL8M:function(t,e){},qndQ:function(t,e,n){"use strict";n.r(e);var i=n("Bftn"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("VbCC"),o=n("JFUb");var u=function(t){n("POfS")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-65a673fa",null);e.default=c.exports},rQwl:function(t,e,n){"use strict";n.r(e);var i=n("k1r/"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("sbG/"),o=n("JFUb");var u=function(t){n("uTN7")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-400f1852",null);e.default=c.exports},"sbG/":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"is-input"}},[n("h1",[t._v("notes")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("van-cell-group",[n("van-field",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"4",autosize:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),n("div",{staticClass:"small-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"AllMyNotes"}}},[t._v("我的notes")])],1),t._v(" "),t.login?n("div",{staticClass:"user-btn-wrap"},[n("a",{staticClass:"small-btn",on:{click:t.logout}},[t._v("登出")])]):n("div",{staticClass:"user-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Login"}}},[t._v("登录")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Register"}}},[t._v("注册")])],1)],1)])},a=[]},uTN7:function(t,e){},uXpn:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"register-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("注册成功")]),this._v(" "),e("van-button",{attrs:{id:"goToLogin",size:"large"},on:{click:this.goToLogin}},[this._v("前往登录")])],1)},a=[]},wqCG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App"}},"y2+j":function(t,e){},yJkN:function(t,e,n){"use strict";n.r(e);var i=n("2lLy"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("uXpn"),o=n("JFUb");var u=function(t){n("GJvR")},c=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-5a2f764c",null);e.default=c.exports}},[[0,0,1]]]);