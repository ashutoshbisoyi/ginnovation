(this.webpackJsonpginnovation=this.webpackJsonpginnovation||[]).push([[17],{128:function(t,e,n){"use strict";e.a=function(t,e){for(var n=Object.assign({},t),r=0;r<e.length;r+=1){delete n[e[r]]}return n}},129:function(t,e,n){var r=n(201),c="object"==typeof self&&self&&self.Object===Object&&self,o=r||c||Function("return this")();t.exports=o},143:function(t,e,n){var r=n(184),c=n(333),o=n(334),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?c(t):o(t)}},144:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},145:function(t,e,n){"use strict";var r=n(0),c=Object(r.createContext)({});e.a=c},152:function(t,e,n){"use strict";var r=n(9),c=n.n(r),o=n(3),a=n.n(o),i=n(46),s=n.n(i),l=n(0),u=n(7),f=n.n(u),d=n(145),b=n(109),p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};var h=["xs","sm","md","lg","xl","xxl"],A=l.forwardRef((function(t,e){var n,r=l.useContext(b.b),o=r.getPrefixCls,i=r.direction,u=l.useContext(d.a),A=u.gutter,v=u.wrap,m=t.prefixCls,j=t.span,g=t.order,x=t.offset,O=t.push,y=t.pull,w=t.className,T=t.children,N=t.flex,E=t.style,q=p(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),V=o("col",m),C={};h.forEach((function(e){var n,r={},o=t[e];"number"===typeof o?r.span=o:"object"===s()(o)&&(r=o||{}),delete q[e],C=a()(a()({},C),(n={},c()(n,"".concat(V,"-").concat(e,"-").concat(r.span),void 0!==r.span),c()(n,"".concat(V,"-").concat(e,"-order-").concat(r.order),r.order||0===r.order),c()(n,"".concat(V,"-").concat(e,"-offset-").concat(r.offset),r.offset||0===r.offset),c()(n,"".concat(V,"-").concat(e,"-push-").concat(r.push),r.push||0===r.push),c()(n,"".concat(V,"-").concat(e,"-pull-").concat(r.pull),r.pull||0===r.pull),c()(n,"".concat(V,"-rtl"),"rtl"===i),n))}));var S=f()(V,(n={},c()(n,"".concat(V,"-").concat(j),void 0!==j),c()(n,"".concat(V,"-order-").concat(g),g),c()(n,"".concat(V,"-offset-").concat(x),x),c()(n,"".concat(V,"-push-").concat(O),O),c()(n,"".concat(V,"-pull-").concat(y),y),n),w,C),P=a()({},E);return A&&(P=a()(a()(a()({},A[0]>0?{paddingLeft:A[0]/2,paddingRight:A[0]/2}:{}),A[1]>0?{paddingTop:A[1]/2,paddingBottom:A[1]/2}:{}),P)),N&&(P.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(N),"auto"!==N||!1!==v||P.minWidth||(P.minWidth=0)),l.createElement("div",a()({},q,{style:P,className:S,ref:e}),T)}));A.displayName="Col",e.a=A},161:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},179:function(t,e,n){"use strict";var r=n(180);e.a=r.a},180:function(t,e,n){"use strict";var r=n(3),c=n.n(r),o=n(9),a=n.n(o),i=n(46),s=n.n(i),l=n(21),u=n.n(l),f=n(0),d=n(7),b=n.n(d),p=n(109),h=n(145),A=n(47),v=n(39),m=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n},j=(Object(A.a)("top","middle","bottom","stretch"),Object(A.a)("start","end","center","space-around","space-between"),f.forwardRef((function(t,e){var n,r=t.prefixCls,o=t.justify,i=t.align,l=t.className,d=t.style,A=t.children,j=t.gutter,g=void 0===j?0:j,x=t.wrap,O=m(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),y=f.useContext(p.b),w=y.getPrefixCls,T=y.direction,N=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=u()(N,2),q=E[0],V=E[1],C=f.useRef(g);f.useEffect((function(){var t=v.a.subscribe((function(t){var e=C.current||0;(!Array.isArray(e)&&"object"===s()(e)||Array.isArray(e)&&("object"===s()(e[0])||"object"===s()(e[1])))&&V(t)}));return function(){return v.a.unsubscribe(t)}}),[]);var S=w("row",r),P=function(){var t=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(e,n){if("object"===s()(e))for(var r=0;r<v.b.length;r++){var c=v.b[r];if(q[c]&&void 0!==e[c]){t[n]=e[c];break}}else t[n]=e||0})),t}(),W=b()(S,(n={},a()(n,"".concat(S,"-no-wrap"),!1===x),a()(n,"".concat(S,"-").concat(o),o),a()(n,"".concat(S,"-").concat(i),i),a()(n,"".concat(S,"-rtl"),"rtl"===T),n),l),z=c()(c()(c()({},P[0]>0?{marginLeft:P[0]/-2,marginRight:P[0]/-2}:{}),P[1]>0?{marginTop:P[1]/-2,marginBottom:P[1]/2}:{}),d);return f.createElement(h.a.Provider,{value:{gutter:P,wrap:x}},f.createElement("div",c()({},O,{className:W,style:z,ref:e}),A))})));j.displayName="Row",e.a=j},181:function(t,e,n){"use strict";var r=n(152);e.a=r.a},182:function(t,e,n){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEEBAMAAADZuJJVAAAAIVBMVEXm6Of////8/Pzt7+79/v309fX4+Pjq7Ovo6unx8vH6+vq8bzazAAACY0lEQVR42u3aTWsTYRTF8YMhTdKVd5gEMitTqNbdxIYqrowVqrukKmhXCSi4TKWIy0GKiqtkIeiuQcWvaTIzSfqWpTAX/j8IeZaHM28Pd0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/MwtGyuxtzd2O5YiZ3VHqg2WikfwwszDNW+la7kB+9Bd5N20hkB/lRf1tWxrLj3n9+5KmtnRLfqT1xyrZSlOOTMzs2e5DWwl25+7LhZqtcVcOxJrYGu9UeBvN9fVHKry29Wa/CzzdQYdWV8nWGKjoWmaxOnaepwdAyxpSqWtz4duf39/YOY9UdC1rSln90QNJ1T1n7deV1z9Q6p6v+GFcGqT115WqDl3Ft2jayHb7PX1JJJV9xZ8Z6MTMGofdx88lDb3Fz+vPdwqn3uLbmd5bJkhUcxc/UiVf2ZnU8hbfxvpkmbrUdxc/VjVfhomOvcWfZda35YE49RY/kJLq1FI9bXqLH0mvFvUPtOEw/uGoOvUaP5AmB9rwevKEidrhKNsuxP4uXYt1w/L6R2q7i99TzfL6dxw+tp5qFn0/rT/42HUXvy59tjBO6992t2VLh+QvZvWXvU0acjtS5ehJrL7P+I1E0tdEZZ/x7a8yfZ/xw7FSZZ/xLfohqTrSxGd8C/+8fvm7qZqjIeH0mqn4xE/7fbtsVr+fAfmxXbF6X1H8zxtqdkVdpcWi+CbX1d/J/4uvcrR12XY2MP8ltzreXq5fVOo6OXnW6Di5dNeoOK//xMxuyq1K13V8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZP4BTU+Iai6oLU4AAAAASUVORK5CYII="},184:function(t,e,n){var r=n(129).Symbol;t.exports=r},201:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(48))},330:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(348)),o=n(12),a=n(182);e.a=function(t){var e=t.content.slice(0,100)+"...",n=t.title.slice(0,30)+"...",i={backgroundImage:"url(".concat(null!==t.cover?t.cover:a.a,")")};return Object(r.jsxs)("div",{className:"blog-card-two",children:[Object(r.jsx)("div",{className:"card-top",style:i,children:Object(r.jsx)("span",{className:"tag",children:"About"})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("div",{className:"dp",style:{backgroundImage:'url("https://thumbs.dreamstime.com/b/face-young-handsome-bearded-indian-man-wearing-hoodie-isolated-against-white-background-169863540.jpg")'}}),Object(r.jsx)("h5",{children:n}),Object(r.jsx)("p",{className:"sub-heading",children:t.subTitle}),Object(r.jsx)("p",{className:"content",children:e}),Object(r.jsx)("em",{className:"author",children:"By Ashutosh Bisoyi"}),Object(r.jsxs)("div",{className:"card-bottom",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(c.a,{className:"icon"}),"6 mins ago"]}),Object(r.jsx)(o.b,{to:{pathname:"/readblog",state:{title:t.title,subtitle:t.subTitle,content:t.content}},children:Object(r.jsx)(o.b,{to:{pathname:"/readblog",state:{title:t.title,subtitle:t.subTitle,content:t.content}},children:Object(r.jsx)("button",{children:"Full Article"})})})]})]})]})}},331:function(t,e){var n,r,c=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,l=[],u=!1,f=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&b())}function b(){if(!u){var t=i(d);u=!0;for(var e=l.length;e;){for(s=l,l=[];++f<e;)s&&s[f].run();f=-1,e=l.length}s=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||u||i(b)},p.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=h,c.addListener=h,c.once=h,c.off=h,c.removeListener=h,c.removeAllListeners=h,c.emit=h,c.prependListener=h,c.prependOnceListener=h,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},333:function(t,e,n){var r=n(184),c=Object.prototype,o=c.hasOwnProperty,a=c.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(s){}var c=a.call(t);return r&&(e?t[i]=n:delete t[i]),c}},334:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},348:function(t,e,n){"use strict";var r=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"}},{tag:"path",attrs:{d:"M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z"}}]},name:"field-time",theme:"outlined"},o=n(6),a=function(t,e){return r.createElement(o.a,Object.assign({},t,{ref:e,icon:c}))};a.displayName="FieldTimeOutlined";e.a=r.forwardRef(a)},424:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(33),o=n(142),a=n.n(o),i=n(0),s=n(421),l=n(179),u=n(181),f=n(330),d=n(159);e.default=function(){var t=Object(i.useState)(),e=Object(c.a)(t,2),n=e[0],o=e[1],b=Object(i.useState)(!1),p=Object(c.a)(b,2),h=p[0],A=p[1];return Object(i.useEffect)((function(){A(!0),a.a.get("https://ginnovation-server.herokuapp.com/api/blog").then((function(t){A(!1),o(t.data[0].blogs)})).catch((function(t){A(!1),console.log(t)}))}),[]),Object(r.jsxs)("div",{className:"all-blogs",children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)("title",{children:"Blogs of Ginnovation"}),Object(r.jsx)("meta",{name:"description",content:"Tech Blogs, Creative Writtings | Here is a list of creative blogs written by the ginnovation club members that will open up your thinking"})]}),h&&Object(r.jsx)("div",{className:"modal-container",children:Object(r.jsx)(s.a,{size:"large"})}),Object(r.jsx)("div",{className:"page-top-secondVarient",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:"Our Blogs"}),Object(r.jsx)("p",{children:"Creative writtings from the creative people"})]})}),Object(r.jsx)("div",{className:"container blog-container",children:n&&Object(r.jsx)(l.a,{gutter:8,children:n.map((function(t,e){return Object(r.jsx)(u.a,{md:8,children:Object(r.jsx)(f.a,{cover:t.coverpic,title:t.blogTitle,subTitle:t.subTitle,content:t.blogContent})},e)}))})})]})}}}]);
//# sourceMappingURL=17.7fe39257.chunk.js.map