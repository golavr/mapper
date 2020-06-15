(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),i=(a(0),a(278)),c={id:"callbacks",title:"Map Callbacks",sidebar_label:"Map Callbacks"},o={id:"usages/features/callbacks",title:"Map Callbacks",description:"`@nartc/automapper` provides `beforeMap` and `afterMap` callbacks which will be executed **before** and/or **after** a mapping operation occurs, if said callbacks are provided.",source:"@site/docs/usages/features/callbacks.md",permalink:"/docs/next/usages/features/callbacks",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/callbacks.md",version:"next",sidebar_label:"Map Callbacks",sidebar:"docs",previous:{title:"Handle DateTime objects",permalink:"/docs/next/usages/features/date-time"},next:{title:"NestJS Integration",permalink:"/docs/next/nest"}},l=[{value:"Map level",id:"map-level",children:[]},{value:"Mapping level",id:"mapping-level",children:[]},{value:"Notes",id:"notes",children:[]}],p={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," provides ",Object(i.b)("inlineCode",{parentName:"p"},"beforeMap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterMap")," callbacks which will be executed ",Object(i.b)("strong",{parentName:"p"},"before")," and/or ",Object(i.b)("strong",{parentName:"p"},"after")," a mapping operation occurs, if said callbacks are provided.\nYou can provide ",Object(i.b)("inlineCode",{parentName:"p"},"callbacks")," at two different levels: ",Object(i.b)("strong",{parentName:"p"},"Map")," and ",Object(i.b)("strong",{parentName:"p"},"Mapping"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/guides/basic-concept"}),"Basic concepts"))),Object(i.b)("h3",{id:"map-level"},"Map level"),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," methods have an optional argument (usually the last argument) which is a ",Object(i.b)("inlineCode",{parentName:"p"},"MapActionOptions: { beforeMap: Function, afterMap: Function }"),". If any of the callbacks is provided, it will be called in correct chronological order."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const userVm = Mapper.map(user, UserVm, {\n  beforeMap: (source, destination, mapping) => {},\n  afterMap: (source, destination, mapping) => {},\n});\n")),Object(i.b)("h3",{id:"mapping-level"},"Mapping level"),Object(i.b)("p",null,"Callbacks on ",Object(i.b)("strong",{parentName:"p"},"Mapping")," will be called for ",Object(i.b)("strong",{parentName:"p"},"ALL")," map operations that occur between the two models unless you provide ",Object(i.b)("strong",{parentName:"p"},"Map level")," callbacks when you invoke a certain ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," operation."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination)\n  .beforeMap((source, destination, mapping) => {})\n  .afterMap((source, destination, mapping) => {});\n")),Object(i.b)("h3",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"callbacks")," are called with ",Object(i.b)("inlineCode",{parentName:"li"},"source"),", ",Object(i.b)("inlineCode",{parentName:"li"},"destination"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"mapping")," values. ",Object(i.b)("strong",{parentName:"li"},"ANYTHING")," you do to the ",Object(i.b)("inlineCode",{parentName:"li"},"source")," and ",Object(i.b)("inlineCode",{parentName:"li"},"destination")," will be carried over to the ",Object(i.b)("inlineCode",{parentName:"li"},"source")," and ",Object(i.b)("inlineCode",{parentName:"li"},"destination"),"\nbeing mapped (",Object(i.b)("strong",{parentName:"li"},"mutation"),") so please be cautious. Mutability in this case might be handy and dangerous at the same time given the dynamic characteristic of ",Object(i.b)("strong",{parentName:"li"},"JavaScript"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Map level")," callbacks will override ",Object(i.b)("strong",{parentName:"li"},"Mapping level")," callbacks if both are provided."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mapArray()")," will ignore ",Object(i.b)("strong",{parentName:"li"},"Mapping level")," callbacks because it would be a performance issue if callbacks were to be called on every single item in an array. Provide ",Object(i.b)("strong",{parentName:"li"},"Map level")," callbacks instead.")))}b.isMDXComponent=!0},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return a?r.a.createElement(m,o({ref:t},p,{components:a})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);