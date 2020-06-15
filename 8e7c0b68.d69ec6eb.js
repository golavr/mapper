(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(278)),i={id:"nested-model",title:"Nested Model",sidebar_label:"Nested Model"},p={id:"version-6.0.0/usages/features/nested-model",title:"Nested Model",description:"When you call `createMap()` for a pair of `Source` and `Destination`, **primitives** that have the same `propertyName` will be **auto-configured**.",source:"@site/versioned_docs/version-6.0.0/usages/features/nested-model.md",permalink:"/docs/usages/features/nested-model",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/features/nested-model.md",version:"6.0.0",sidebar_label:"Nested Model",sidebar:"version-6.0.0/docs",previous:{title:"MapDefer",permalink:"/docs/usages/mapping-configuration/map-defer"},next:{title:"Flattening",permalink:"/docs/usages/features/flattening"}},c=[],l={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you call ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," for a pair of ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Destination"),", ",Object(o.b)("strong",{parentName:"p"},"primitives")," that have the same ",Object(o.b)("inlineCode",{parentName:"p"},"propertyName")," will be ",Object(o.b)("strong",{parentName:"p"},"auto-configured"),".\n",Object(o.b)("strong",{parentName:"p"},"Nested model")," will also be ",Object(o.b)("strong",{parentName:"p"},"auto-configured")," by modifying the ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator a little"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"{13,29}","{13,29}":!0}),"class Profile {\n  @AutoMap()\n  bio: string;\n  @AutoMap()\n  age: number;\n}\n\nclass User {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap(() => Profile)\n  profile: Profile;\n}\n\nclass ProfileVm {\n  @AutoMap()\n  bio: string;\n  @AutoMap()\n  isAdult: boolean;\n}\n\nclass UserVm {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap(() => ProfileVm)\n  profile: ProfileVm;\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," can take in a ",Object(o.b)("inlineCode",{parentName:"p"},"typeFunction")," as an optional argument. This ",Object(o.b)("inlineCode",{parentName:"p"},"typeFunction")," will help ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," to locate the correct ",Object(o.b)("inlineCode",{parentName:"p"},"Model")," to map for that ",Object(o.b)("inlineCode",{parentName:"p"},"member"),".\nNow, when ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," is called for ",Object(o.b)("inlineCode",{parentName:"p"},"User")," and ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm"),", ",Object(o.b)("inlineCode",{parentName:"p"},"User.profile")," will be mapped to ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm.profile")," with the correct ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping"),". Please take note that you would also\nneed to call ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," for ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ProfileVm")," as well."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In ",Object(o.b)("strong",{parentName:"p"},"C# AutoMapper")," version 9, nested ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," is not created implicitly anymore and requires the consumers to ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," for nested models explicitly.",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," also requires the consumers to do the same.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Profile, ProfileVm);\nMapper.createMap(User, UserVm);\n")))}s.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,p({ref:t},l,{components:n})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);