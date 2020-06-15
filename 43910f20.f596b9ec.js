(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(1),r=t(9),o=(t(0),t(278)),i={id:"naming-convention",title:"Naming Convention",sidebar_label:"Naming Convention"},p={id:"usages/features/naming-convention",title:"Naming Convention",description:"`@nartc/automapper` provides a way to map between two models with different naming conventions. The following conventions are supported:",source:"@site/docs/usages/features/naming-convention.md",permalink:"/docs/next/usages/features/naming-convention",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/naming-convention.md",version:"next",sidebar_label:"Naming Convention",sidebar:"docs",previous:{title:"Handle plain JavaScript object",permalink:"/docs/next/usages/features/plain-object"},next:{title:"Handle Getters",permalink:"/docs/next/usages/features/getters"}},c=[],s={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," provides a way to map between two models with different naming conventions. The following conventions are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PascalCaseNamingConvention")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CamelCaseNamingConvention")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SnakeCaseNamingConvention"))),Object(o.b)("p",null,"By default, every models will have ",Object(o.b)("inlineCode",{parentName:"p"},"CamelCaseNamingConvention"),". You can modify the naming conventions for ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Destination"),"\non a ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," by providing the third argument, which is an ",Object(o.b)("inlineCode",{parentName:"p"},"CreateMapOptions"),", for ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")," instance method"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Address {\n  @AutoMap()\n  Street: string;\n  @AutoMap()\n  City: string;\n  @AutoMap()\n  State: string;\n}\n\nclass Company {\n  @AutoMap()\n  Name: string;\n  @AutoMap()\n  Description: string;\n  @AutoMap()\n  YearEstablished: number;\n  @AutoMap(() => Address)\n  Address: Address;\n}\n\nclass CompanyVm {\n  @AutoMap()\n  name: string;\n  @AutoMap()\n  description: string;\n  @AutoMap()\n  addressStreet: string;\n}\n\nMapper.createMap(Company, CompanyVm, {\n  sourceMemberNamingConvention: PascalCaseNamingConvention,\n});\n")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"map()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Company.Name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Company.Description")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Company.Address.Street")," will be mapped automatically to ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.description")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.addressStreet"),". ",Object(o.b)("strong",{parentName:"p"},"Map by conventions")," and ",Object(o.b)("strong",{parentName:"p"},"flattening")," are still being applied."),Object(o.b)("p",null,"You can set the naming conventions as ",Object(o.b)("strong",{parentName:"p"},"global settings")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"Mapping.withGlobalSettings({\n  sourceNamingConvention: PascalCaseNamingConvention,\n});\n")),Object(o.b)("p",null,"Now all ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," models will have ",Object(o.b)("inlineCode",{parentName:"p"},"PascalCaseNamingConvention")," applied to their ",Object(o.b)("inlineCode",{parentName:"p"},"properties"),"."))}l.isMDXComponent=!0},278:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},m=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return t?r.a.createElement(d,p({ref:n},s,{components:t})):r.a.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);