(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(278)),i={id:"getters",title:"Handle Getters",sidebar_label:"Getters"},s={id:"usages/features/getters",title:"Handle Getters",description:"`@nartc/automapper` can also map **public getters**.",source:"@site/docs/usages/features/getters.md",permalink:"/docs/next/usages/features/getters",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/getters.md",version:"next",sidebar_label:"Getters",sidebar:"docs",previous:{title:"Naming Convention",permalink:"/docs/next/usages/features/naming-convention"},next:{title:"Handle DateTime objects",permalink:"/docs/next/usages/features/date-time"}},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can also map ",Object(o.b)("strong",{parentName:"p"},"public getters"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n  private _firstName: string;\n  @AutoMap()\n  public get firstName() {\n    return this._firstName;\n  }\n\n  public set firstName(value: string) {\n    this._firstName = value;\n  }\n\n  private _lastName: string;\n  @AutoMap()\n  public get lastName() {\n    return this._lastName;\n  }\n\n  public set lastName(value: string) {\n    this._lastName = value;\n  }\n}\n\nclass UserVm {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n}\n")),Object(o.b)("p",null,"To iterate once more, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works based a lot on ",Object(o.b)("strong",{parentName:"p"},"conventions"),". This core-concept applies greatly to the case of ",Object(o.b)("strong",{parentName:"p"},"public getters")," so\ntry to keep your ",Object(o.b)("inlineCode",{parentName:"p"},"private fields")," and ",Object(o.b)("inlineCode",{parentName:"p"},"public getters")," somewhat aligned with each other. Eg: ",Object(o.b)("inlineCode",{parentName:"p"},"private _firstName")," and ",Object(o.b)("inlineCode",{parentName:"p"},"public get firstName()")))}u.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(f,s({ref:t},p,{components:n})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);