(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(9),o=(t(0),t(278)),i={id:"plain-object",title:"Handle plain JavaScript object",sidebar_label:"Plain Object"},c={id:"version-5.x/usages/features/plain-object",title:"Handle plain JavaScript object",description:"`@nartc/automapper` works on real **instances** of models. However, there are cases where **TypeScript** is _tricked_ to see",source:"@site/versioned_docs/version-5.x/usages/features/plain-object.md",permalink:"/docs/5.x/usages/features/plain-object",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.x/usages/features/plain-object.md",version:"5.x",sidebar_label:"Plain Object",sidebar:"version-5.x/docs",previous:{title:"Inheritance",permalink:"/docs/5.x/usages/features/inheritance"},next:{title:"Naming Convention",permalink:"/docs/5.x/usages/features/naming-convention"}},p=[],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works on real ",Object(o.b)("strong",{parentName:"p"},"instances")," of models. However, there are cases where ",Object(o.b)("strong",{parentName:"p"},"TypeScript")," is ",Object(o.b)("em",{parentName:"p"},"tricked")," to see\na ",Object(o.b)("inlineCode",{parentName:"p"},"plain object")," as an ",Object(o.b)("inlineCode",{parentName:"p"},"instance"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Mapper.map()")," (and all other ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," variations) has an overload where you can also pass\nin a ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," model so you can help ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," which model the ",Object(o.b)("inlineCode",{parentName:"p"},"plain object")," belongs to"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class User2 {\n  // some properties\n}\n\nMapper.createMap(User2, UserVm); // assumed you already have a Mapping created between User and UserVm.\nconst userVm = Mapper.map(user, UserVm);\n\n/**\n * If "user" is truly an instance of User2, then it\'s fine. But if "user" is just a Plain JS object\n * and TS is tricked to see "user" as User2, then AutoMapper will have trouble looking for\n * the correct Mapping (User2 and UserVm).\n *\n * In that case, the "Source" argument will help AutoMapper to look for the correct Mapping\n */\nconst userVm = Mapper.map(user, UserVm, User2);\n')))}l.isMDXComponent=!0},278:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c({ref:n},s,{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);