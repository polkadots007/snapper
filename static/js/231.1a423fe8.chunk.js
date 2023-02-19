"use strict";(self.webpackChunkinsta_clone=self.webpackChunkinsta_clone||[]).push([[231],{9231:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(4165),a=t(5861),s=t(9439),u=t(2791),o=t(7689),c=t(1087),i=t(2303),l=t(8155),p=t(7606),f=t(184);function d(){var e=(0,o.s0)(),r=(0,u.useContext)(i.Z).firebase,t=(0,u.useState)(""),d=(0,s.Z)(t,2),m=d[0],h=d[1],x=(0,u.useState)(""),w=(0,s.Z)(x,2),y=w[0],Z=w[1],v=(0,u.useState)(""),b=(0,s.Z)(v,2),g=b[0],k=b[1],I=(0,u.useState)(""),j=(0,s.Z)(I,2),N=j[0],C=j[1],L=(0,u.useState)(""),P=(0,s.Z)(L,2),S=P[0],E=P[1],U=""===N||""===g,G=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,(0,p.$K)(m);case 3:if(t.sent){t.next=25;break}return t.prev=5,t.next=8,r.auth().createUserWithEmailAndPassword(g,N);case 8:return s=t.sent,t.next=11,s.user.updateProfile({displayName:m});case 11:return t.next=13,r.firestore().collection("users").add({userId:s.user.uid,username:m.toLocaleLowerCase(),fullName:y,emailAddress:g.toLocaleLowerCase(),following:[],dateCreated:Date.now()});case 13:e(l.h1),t.next=23;break;case 16:t.prev=16,t.t0=t.catch(5),h(""),Z(""),k(""),C(""),E(t.t0.message);case 23:t.next=26;break;case 25:E("This username already exists! Please try another.");case 26:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){document.title="Sign Up - Instagram"}),[]),(0,f.jsxs)("div",{className:"container flex mx-auto max-w-screen-md items-center h-screen",children:[(0,f.jsx)("div",{className:"flex w-3/5 justify-end",children:(0,f.jsx)("img",{src:"/images/iphone-with-profile.jpg",alt:"iPhone with Instagram on it",className:"max-h-96"})}),(0,f.jsxs)("div",{className:"flex flex-col w-2/5",children:[(0,f.jsxs)("div",{className:"flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded",children:[(0,f.jsx)("h1",{className:"flex justify-center w-full",children:(0,f.jsx)("img",{src:"/images/logo.png",alt:"Instagram",className:"mt-2 w-6/12 mb-4"})}),S&&(0,f.jsx)("p",{className:"mb-4 text-xs text-red-primary",children:S}),(0,f.jsxs)("form",{onSubmit:G,method:"POST",children:[(0,f.jsx)("input",{"aria-label":"Enter your username",type:"text",placeholder:"Username",className:"text-sm text-gray-base w-full mr-3 py-5 px-5 h-2 \r border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return h(r.value)},value:m}),(0,f.jsx)("input",{"aria-label":"Enter your full name",type:"text",placeholder:"Full Name",className:"text-sm text-gray-base w-full mr-3 py-5 px-5 h-2 \r border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return Z(r.value)},value:y}),(0,f.jsx)("input",{"aria-label":"Enter your email address",type:"text",placeholder:"Email address",className:"text-sm text-gray-base w-full mr-3 py-5 px-5 h-2 \r border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return k(r.value)},value:g}),(0,f.jsx)("input",{"aria-label":"Enter your password",type:"password",placeholder:"Password",className:"text-sm text-gray-base w-full mr-3 py-5 px-5 h-2 \r border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return C(r.value)},value:N}),(0,f.jsx)("button",{disabled:U,type:"submit",className:"bg-blue-medium text-white w-full rounded h-8 font-bold ".concat(U&&"opacity-50","\n            "),children:"Sign Up"})]})]}),(0,f.jsx)("div",{className:"flex justify-center items-center flex-col w-full by-white p-4 border border-gray-primary rounded",children:(0,f.jsxs)("p",{className:"text-sm",children:["Have an account?"," ",(0,f.jsx)(c.rU,{to:l.ym,className:"font-bold text-blue-medium",children:"Login"})]})})]})]})}},7606:function(e,r,t){t.d(r,{$K:function(){return o},Gm:function(){return P},IU:function(){return C},OY:function(){return b},Oi:function(){return k},dQ:function(){return i},f2:function(){return w},fW:function(){return p},oJ:function(){return j},sd:function(){return Z},ve:function(){return h},xD:function(){return d}});var n=t(1413),a=t(4165),s=t(5861),u=t(942);function o(e){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",r.toLowerCase()).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data().length>0})).length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",r.toLowerCase()).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)((0,a.Z)().mark((function e(r){var t,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").get();case 2:return t=e.sent,s=t.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.username.includes(r.toLowerCase())})),e.abrupt("return",s.length>0?s:[{docId:0,username:"No results found"}]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,a.Z)().mark((function e(r){var t,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("userId","==",r).get();case 2:return t=e.sent,s=t.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,r){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,a.Z)().mark((function e(r,t){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").limit(10).get();case 2:return s=e.sent,e.abrupt("return",s.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.userId!==r&&!t.includes(e.userId)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r,t){return y.apply(this,arguments)}function y(){return(y=(0,s.Z)((0,a.Z)().mark((function e(r,t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.w.firestore().collection("users").doc(r).update({followers:n?u.G.arrayRemove(t):u.G.arrayUnion(t)}).then((function(e){return console.info("Success")})).catch((function(e){console.error("Error adding followers",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r,t){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,a.Z)().mark((function e(r,t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.w.firestore().collection("users").doc(r).update({following:n?u.G.arrayRemove(t):u.G.arrayUnion(t)}).then((function(e){return console.info("Success")})).catch((function(e){console.error("Error adding following",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,r){return g.apply(this,arguments)}function g(){return g=(0,s.Z)((0,a.Z)().mark((function e(r,t){var o,c,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("photos").where("userId","in",t).get();case 2:return o=e.sent,c=o.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(c.map(function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var s,u,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,t.likes.includes(r)&&(s=!0),e.next=4,d(t.userId);case 4:return u=e.sent,o=u[0].username,e.abrupt("return",(0,n.Z)((0,n.Z)({username:o},t),{},{userLikedPhoto:s}));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function k(e,r){return I.apply(this,arguments)}function I(){return I=(0,s.Z)((0,a.Z)().mark((function e(r,t){var o,c,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("photos").where("photoId","==",r).get();case 2:return o=e.sent,c=o.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(c.map(function(){var e=(0,s.Z)((0,a.Z)().mark((function e(r){var s,u,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,t&&r.likes.includes(t)&&(s=!0),e.next=4,d(r.userId);case 4:return u=e.sent,o=u[0].username,e.abrupt("return",(0,n.Z)((0,n.Z)({username:o},r),{},{userLikedPhoto:s}));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function j(e,r){return N.apply(this,arguments)}function N(){return(N=(0,s.Z)((0,a.Z)().mark((function e(r,t){var s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("photos").where("userId","==",r).get();case 2:return s=e.sent,o=s.docs.map((function(e){var r,a=!1;return null!==e&&void 0!==e&&null!==(r=e.data().likes)&&void 0!==r&&r.includes(t)&&(a=!0),(0,n.Z)((0,n.Z)({},e.data()),{},{userLikedPhoto:a,docId:e.id})})),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r){return L.apply(this,arguments)}function L(){return(L=(0,s.Z)((0,a.Z)().mark((function e(r,t){var s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",r.toLowerCase()).where("following","array-contains",t).get();case 2:return s=e.sent,o=s.docs.map((function(e){return(0,n.Z)((0,n.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",o.length>0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r,t,n,a){return S.apply(this,arguments)}function S(){return(S=(0,s.Z)((0,a.Z)().mark((function e(r,t,n,s,u){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(t,s,r);case 2:return e.next=4,w(n,u,r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=231.1a423fe8.chunk.js.map