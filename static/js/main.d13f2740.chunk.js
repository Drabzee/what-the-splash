(this["webpackJsonpreact-redux-saga"]=this["webpackJsonpreact-redux-saga"]||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(15),s=n.n(c),i=(n(41),n(18)),o=n(4);var u=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"What the Splash!"})})},d=n(8),l="IMAGES_LOAD",b="IMAGES_SUCCESS",f="IMAGES_FAIL",j="STATS_LOAD",p="STATS_SUCCESS",h="STATS_FAIL",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:case b:return"";case f:return t.error;default:return e}},O=n(24),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return[].concat(Object(O.a)(e),Object(O.a)(t.images));default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return!0;case b:case f:return!1;default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e+1;default:return e}},w=n(13),S=n(12),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(S.a)(Object(S.a)({},e),{},Object(w.a)({},t.id,{isLoading:!0,downloads:null,error:!1}));case p:return Object(S.a)(Object(S.a)({},e),{},Object(w.a)({},t.id,{isLoading:!1,downloads:t.downloads,error:!1}));case h:return Object(S.a)(Object(S.a)({},e),{},Object(w.a)({},t.id,{isLoading:!1,downloads:null,error:!0}));default:return e}},k=Object(d.c)({images:v,error:g,isLoading:x,page:m,imageStats:L}),y=n(36),A=n(5),I=n.n(A),C=n(11),E=function(e){return{type:b,images:e}},N=function(e){return{type:j,id:e}},T=function(e,t){return{type:p,id:e,downloads:t}},_=function(e){return{type:h,id:e}},F=n(22),M=n(23),D=n.n(M),G="?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02",J="https://api.unsplash.com/photos/",B=function(){var e=Object(F.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat(J).concat(G,"&per_page=3&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(F.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat(J,"/").concat(t,"/statistics").concat(G));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=I.a.mark(q),W=I.a.mark(z);function q(){var e,t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.d)((function(e){return e.page}));case 3:return e=n.sent,n.next=6,Object(C.b)(B,e);case 6:return t=n.sent,n.next=9,Object(C.c)(E(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(C.c)((r=n.t0.toString(),{type:f,error:r}));case 15:case"end":return n.stop()}var r}),U,null,[[0,11]])}function z(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)(l,q);case 2:case"end":return e.stop()}}),W)}var H=z,K=n(35),Q=n(10),R=I.a.mark(X),V=I.a.mark(Y);function X(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Q.d)(N(e));case 3:return n.next=5,Object(Q.b)(P,e);case 5:return t=n.sent,n.next=8,Object(Q.d)(T(e,t.downloads));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(Q.d)(_(e));case 14:case"end":return n.stop()}}),R,null,[[0,10]])}function Y(){var e,t,n,r,a;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object(Q.f)(b);case 3:e=c.sent,t=e.images,n=Object(K.a)(t),c.prev=6,n.s();case 8:if((r=n.n()).done){c.next=14;break}return a=r.value,c.next=12,Object(Q.c)(X,a.id);case 12:c.next=8;break;case 14:c.next=19;break;case 16:c.prev=16,c.t0=c.catch(6),n.e(c.t0);case 19:return c.prev=19,n.f(),c.finish(19);case 22:c.next=0;break;case 24:case"end":return c.stop()}}),V,null,[[6,16,19,22]])}var Z=Y,$=I.a.mark(ee);function ee(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([H(),Z()]);case 2:case"end":return e.stop()}}),$)}var te=ee,ne=Object(y.a)(),re=Object(d.e)(k,Object(d.d)(Object(d.a)(ne)));ne.run(te);var ae=re,ce=function(e){var t=e.stats;return t?Object(o.jsxs)("span",{className:"stats",children:[t.error&&"\ud83e\udd2f Error!",t.isLoading&&"\ud83d\ude44 Loading...",null!==t.downloads&&"\ud83e\udd18 ".concat(t.downloads.total)]}):Object(o.jsx)("span",{className:"stats",children:"Loading..."})},se=Object(i.b)((function(e){return{images:e.images,isLoading:e.isLoading,error:e.error,imageStats:e.imageStats}}),(function(e){return{loadImages:function(){return e({type:l})}}}))((function(e){var t=e.images,n=e.isLoading,a=e.error,c=e.loadImages,s=e.imageStats;return Object(r.useEffect)((function(){c()}),[c]),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("section",{className:"grid",children:t.map((function(e){return Object(o.jsxs)("div",{className:"item item-".concat(Math.ceil(e.height/e.width)),children:[Object(o.jsx)(ce,{stats:s[e.id]}),Object(o.jsx)("img",{src:e.urls.small,alt:e.user.username})]},e.id)}))}),a&&Object(o.jsx)("div",{className:"error",children:JSON.stringify(a)}),Object(o.jsx)("button",{onClick:function(){return!n&&c()},children:"Load Images"})]})}));var ie=function(){return Object(o.jsx)(i.a,{store:ae,children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(se,{})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[70,1,2]]]);
//# sourceMappingURL=main.d13f2740.chunk.js.map