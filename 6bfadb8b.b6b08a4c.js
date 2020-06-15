(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(278)),p={id:"create-map",title:"CreateMap",sidebar_label:"CreateMap"},i={id:"version-5.x/usages/init/create-map",title:"CreateMap",description:"First of all, let's take a look at how you can create a `Mapping` between two classes. `AutoMapper` exposes an `instance method` named `createMap()` for this purpose.",source:"@site/versioned_docs/version-5.x/usages/init/create-map.md",permalink:"/docs/5.x/usages/init/create-map",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.x/usages/init/create-map.md",version:"5.x",sidebar_label:"CreateMap",sidebar:"version-5.x/docs",previous:{title:"Basic concepts",permalink:"/docs/5.x/guides/basic-concept"},next:{title:"Profile",permalink:"/docs/5.x/usages/init/add-profile"}},c=[],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First of all, let's take a look at how you can create a ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," between two classes. ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," exposes an ",Object(o.b)("inlineCode",{parentName:"p"},"instance method")," named ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," for this purpose."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Mapper } from '@nartc/automapper'\n\nclass Source { ... } //  can also be imported from other file\nclass Destination { ... } // can also be imported from other file\n\nMapper.createMap(Source, Destination);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," will create a ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," between ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Destination")," (",Object(o.b)("inlineCode",{parentName:"p"},"Mapping<Source, Destination>")," as its type-definition)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Source {\n  @AutoMap()\n  foo: string;\n  @AutoMap()\n  bar: number;\n}\n\nclass Destination {\n  @AutoMap()\n  foo: string;\n  @AutoMap()\n  bar: number;\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," ",Object(o.b)("strong",{parentName:"p"},"auto-configures")," some ",Object(o.b)("strong",{parentName:"p"},"conventionally matching")," members between ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Destination"),". Here, ",Object(o.b)("inlineCode",{parentName:"p"},"Destination.foo")," will be configured to be mapped from ",Object(o.b)("inlineCode",{parentName:"p"},"Source.foo"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"Destination.bar")," will be configured to be mapped from ",Object(o.b)("inlineCode",{parentName:"p"},"Source.bar"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works based on ",Object(o.b)("strong",{parentName:"p"},"convention")," so you need to make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," of ",Object(o.b)("strong",{parentName:"p"},"matching")," members match as well as their ",Object(o.b)("inlineCode",{parentName:"p"},"name"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," can be called multiple times to create as many ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," as needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Source { ... }\nclass DestinationOne { ... }\nclass DestinationTwo { ... }\n\nclass OtherSource { ... }\nclass OtherDestination { ... }\n\nMapper.createMap(Source, DestinationOne);\nMapper.createMap(Source, DestinationTwo);\nMapper.createMap(OtherSource, OtherDestination);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," for each pair of classes is ",Object(o.b)("strong",{parentName:"p"},"unique"),". ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will throw an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," if you're trying to create a ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," for the same pair twice.")),Object(o.b)("p",null,"Take note here that ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"OtherSource")," usually represent ",Object(o.b)("strong",{parentName:"p"},"Domain Models")," (data that go in the database). While ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," works well as intended, sometimes you want to separate the concern for each\nof the ",Object(o.b)("strong",{parentName:"p"},"Domain Model"),". To help achieve that, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," has a concept of ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," to organize your ",Object(o.b)("inlineCode",{parentName:"p"},"Mappings")," (Read more about it from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.automapper.org/en/stable/Configuration.html#profile-instances"}),"C# AutoMapper"),")"))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=b(n),m=a,d=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return n?r.a.createElement(d,i({ref:t},s,{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);