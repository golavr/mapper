/*! For license information please see 144.967258a2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144,145],{276:function(e,t,n){"use strict";n.r(t);n(25),n(20),n(21),n(54),n(303);var r=n(0),o=n.n(r),a=n(278),i=n(279),s=n(61),c=n(283),l=n(1),u=n(280),f=n.n(u),d=n(281),p=n(291),h=n(282),y=n(284),m=n(150),g=n.n(m);function v(e){var t=e.item,n=e.onItemClick,a=e.collapsible,i=t.items,s=t.href,c=t.label,u=t.type,d=Object(r.useState)(t.collapsed),p=d[0],m=d[1],g=Object(r.useState)(null),b=g[0],k=g[1];t.collapsed!==b&&(k(t.collapsed),m(t.collapsed));var E=Object(r.useCallback)((function(e){e.preventDefault(),m((function(e){return!e}))}));switch(u){case"category":return i.length>0&&o.a.createElement("li",{className:f()("menu__list-item",{"menu__list-item--collapsed":p}),key:c},o.a.createElement("a",{className:f()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!t.collapsed}),href:"#!",onClick:a?E:void 0},c),o.a.createElement("ul",{className:"menu__list"},i.map((function(e){return o.a.createElement(v,{key:e.label,item:e,onItemClick:n,collapsible:a})}))));case"link":default:return o.a.createElement("li",{className:"menu__list-item",key:c},o.a.createElement(h.a,Object(l.a)({className:"menu__link",to:s},Object(y.a)(s)?{activeClassName:"menu__link--active",exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"}),c))}}var b=function(e){var t=Object(r.useState)(!1),n=t[0],a=t[1],s=Object(i.a)().siteConfig,c=(s=void 0===s?{}:s).themeConfig.navbar,l=(c=void 0===c?{}:c).title,u=c.logo,h=void 0===u?{}:u,y=Object(d.a)(h.src),m=e.docsSidebars,b=e.path,k=e.sidebar,E=e.sidebarCollapsible;if(Object(p.a)(n),!k)return null;var w=m[k];if(!w)throw new Error('Cannot find the sidebar "'+k+'" in the sidebar config!');return E&&w.forEach((function(e){return function e(t,n){var r=t.items,o=t.href;switch(t.type){case"category":var a=r.map((function(t){return e(t,n)})).filter((function(e){return e})).length>0;return t.collapsed=!a,a;case"link":default:return o===n}}(e,b)})),o.a.createElement("div",{className:g.a.sidebar},o.a.createElement("div",{className:g.a.sidebarLogo},null!=h&&o.a.createElement("img",{src:y,alt:h.alt}),null!=l&&o.a.createElement("strong",null,l)),o.a.createElement("div",{className:f()("menu","menu--responsive",g.a.menu,{"menu--show":n})},o.a.createElement("button",{"aria-label":n?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){a(!n)}},n?o.a.createElement("span",{className:f()(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement("svg",{className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement("ul",{className:"menu__list"},w.map((function(e){return o.a.createElement(v,{key:e.label,item:e,onItemClick:function(){a(!1)},collapsible:E})})))))},k=n(308),E=n(9),w=(n(152),n(153)),x=n.n(w),O=function(e){return function(t){var n,r=t.id,a=Object(E.a)(t,["id"]),s=Object(i.a)().siteConfig,c=(s=void 0===s?{}:s).themeConfig,l=(c=void 0===c?{}:c).navbar,u=(l=void 0===l?{}:l).hideOnScroll,d=void 0!==u&&u;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:f()("anchor",(n={},n[x.a.enhancedAnchor]=!d,n)),id:r}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),a.children):o.a.createElement(e,a)}},S=n(154),j=n.n(S),T={code:function(e){var t=e.children;return"string"==typeof t?o.a.createElement(k.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(h.a,e)},pre:function(e){return o.a.createElement("div",Object(l.a)({className:j.a.mdxCodeBlock},e))},h1:O("h1"),h2:O("h2"),h3:O("h3"),h4:O("h4"),h5:O("h5"),h6:O("h6")},_=n(285),C=n(290),A=n(155),P=n.n(A);t.default=function(e){var t=e.route,n=e.docsMetadata,r=e.location,l=t.routes.find((function(e){return Object(C.a)(r.pathname,e)}))||{},u=n.permalinkToSidebar,f=n.docsSidebars,d=n.version,p=u[l.path],h=Object(i.a)(),y=h.siteConfig,m=(y=void 0===y?{}:y).themeConfig,g=void 0===m?{}:m,v=h.isClient,k=g.sidebarCollapsible,E=void 0===k||k;return 0===Object.keys(l).length?o.a.createElement(_.default,e):o.a.createElement(c.a,{version:d,key:v},o.a.createElement("div",{className:P.a.docPage},p&&o.a.createElement("div",{className:P.a.docSidebarContainer},o.a.createElement(b,{docsSidebars:f,path:l.path,sidebar:p,sidebarCollapsible:E})),o.a.createElement("main",{className:P.a.docMainContainer},o.a.createElement(a.a,{components:T},Object(s.a)(t.routes)))))}},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},f=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,h=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return n?o.a.createElement(h,s({ref:t},l,{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(283);t.default=function(){return o.a.createElement(a.a,{title:"Page Not Found"},o.a.createElement("div",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},"Page Not Found"),o.a.createElement("p",null,"We could not find what you were looking for."),o.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},303:function(e,t,n){"use strict";var r=n(17),o=n(304)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(73)("find")},304:function(e,t,n){var r=n(24),o=n(74),a=n(51),i=n(36),s=n(305);e.exports=function(e,t){var n=1==e,c=2==e,l=3==e,u=4==e,f=6==e,d=5==e||f,p=t||s;return function(t,s,h){for(var y,m,g=a(t),v=o(g),b=r(s,h,3),k=i(v.length),E=0,w=n?p(t,k):c?p(t,0):void 0;k>E;E++)if((d||E in v)&&(m=b(y=v[E],E,g),e))if(n)w[E]=m;else if(m)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:w.push(y)}else if(u)return!1;return f?-1:l||u?u:w}}},305:function(e,t,n){var r=n(306);e.exports=function(e,t){return new(r(e))(t)}},306:function(e,t,n){var r=n(11),o=n(307),a=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},307:function(e,t,n){var r=n(18);e.exports=Array.isArray||function(e){return"Array"==r(e)}},309:function(e,t,n){"use strict";var r=n(17),o=n(77)(!0);r(r.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(73)("includes")},310:function(e,t,n){"use strict";var r=n(17),o=n(288);r(r.P+r.F*n(289)("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},311:function(e,t,n){"use strict";var r=n(8),o=n(51),a=n(36),i=n(38),s=n(70),c=n(71),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(72)("replace",2,(function(e,t,n,h){return[function(r,o){var a=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,a,o):n.call(String(a),r,o)},function(e,t){var o=h(n,e,this,t);if(o.done)return o.value;var f=r(e),d=String(this),p="function"==typeof t;p||(t=String(t));var m=f.global;if(m){var g=f.unicode;f.lastIndex=0}for(var v=[];;){var b=c(f,d);if(null===b)break;if(v.push(b),!m)break;""===String(b[0])&&(f.lastIndex=s(d,a(f.lastIndex),g))}for(var k,E="",w=0,x=0;x<v.length;x++){b=v[x];for(var O=String(b[0]),S=l(u(i(b.index),d.length),0),j=[],T=1;T<b.length;T++)j.push(void 0===(k=b[T])?k:String(k));var _=b.groups;if(p){var C=[O].concat(j,S,d);void 0!==_&&C.push(_);var A=String(t.apply(void 0,C))}else A=y(O,d,S,j,_,t);S>=w&&(E+=d.slice(w,S)+A,w=S+O.length)}return E+d.slice(w)}];function y(e,t,r,a,i,s){var c=r+e.length,l=a.length,u=p;return void 0!==i&&(i=o(i),u=d),n.call(s,u,(function(n,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):n}s=a[u-1]}return void 0===s?"":s}))}}))},312:function(e,t,n){"use strict";var r=n(8),o=n(36),a=n(70),i=n(71);n(72)("match",1,(function(e,t,n,s){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=s(n,e,this);if(t.done)return t.value;var c=r(e),l=String(this);if(!c.global)return i(c,l);var u=c.unicode;c.lastIndex=0;for(var f,d=[],p=0;null!==(f=i(c,l));){var h=String(f[0]);d[p]=h,""===h&&(c.lastIndex=a(l,o(c.lastIndex),u)),p++}return 0===p?null:d}]}))},313:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var a=0,i=r.length;a<i;a++)r[a].fn!==t&&r[a].fn._!==t&&o.push(r[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var i=a.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,a)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),l=n.n(c),u=n(2),f=n.n(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(l.a);function y(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=h}]).default},e.exports=r()},314:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var a=[],i=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=i);for(var s=n;s!=o;s+=i)a.push(s);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},315:function(e,t){!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,n){return"(?:"+t[+n]+")"}))}function n(e,n,r){return RegExp(t(e,n),r||"")}function r(e,t){for(var n=0;n<t;n++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",a="class enum interface struct",i="add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var l=c(a),u=RegExp(c(o+" "+a+" "+i+" "+s)),f=c(a+" "+i+" "+s),d=c(o+" "+a+" "+s),p=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=r(/\((?:[^()]|<<self>>)*\)/.source,2),y=/@?\b[A-Za-z_]\w*\b/.source,m=t(/<<0>>(?:\s*<<1>>)?/.source,[y,p]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[f,m]),v=/\[\s*(?:,\s*)*\]/.source,b=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[p,h,v]),k=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[b]),E=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[k,g,v]),w={keyword:u,punctuation:/[<>()?,.:[\]]/},x=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,O=/"(?:\\.|[^\\"\r\n])*"/.source,S=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[S]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[O]),lookbehind:!0,greedy:!0},{pattern:RegExp(x),greedy:!0,alias:"character"}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[y,E]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[y]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[l,m]),lookbehind:!0,inside:w},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:w},{pattern:n(/(\bwhere\s+)<<0>>/.source,[y]),lookbehind:!0},{pattern:n(/(\b(?:is|as)\s+)<<0>>/.source,[E]),lookbehind:!0,inside:w},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+in))/.source,[E,d,y]),inside:w}],keyword:u,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[y]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[y]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:w},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[E,g]),inside:w,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[E]),lookbehind:!0,inside:w,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[y,p]),inside:{function:n(/^<<0>>/.source,[y]),generic:{pattern:RegExp(p),alias:"class-name",inside:w}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,m,y,E,u.source]),lookbehind:!0,inside:{keyword:u,"class-name":{pattern:RegExp(E),greedy:!0,inside:w},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var j=O+"|"+x,T=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*[\s\S]*?\*\/|<<0>>/.source,[j]),_=r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),C=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,A=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,_]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[C,A]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[C]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[_]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var P=/:[^}\r\n]+/.source,N=r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[T]),2),M=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[N,P]),L=r(t(/[^"'/()]|\/(?!\*)|\/\*.*?\*\/|<<0>>|\(<<self>>*\)/.source,[j]),2),I=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[L,P]);function F(t,r){return{interpolation:{pattern:n(/([^{](?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[r,P]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[M]),lookbehind:!0,greedy:!0,inside:F(M,N)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[I]),lookbehind:!0,greedy:!0,inside:F(I,L)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp},316:function(e,t,n){"use strict";t.a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},317:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(52),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:r.a,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=c({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=c({},p(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=r[i]++)<o[i];){var d=void 0,p=t[i],h=n[i][a];if("string"==typeof h?(p=i>0?p:["plain"],d=h):(p=f(p,h.type),h.alias&&(p=f(p,h.alias)),d=h.content),"string"==typeof d){var y=d.split(l),m=y.length;s.push({types:p,content:y[0]});for(var g=1;g<m;g++)u(s),c.push(s=[]),s.push({types:p,content:y[g]})}else i++,t.push(p),n.push(d),r.push(0),o.push(d.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return u(s),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=h}}]);