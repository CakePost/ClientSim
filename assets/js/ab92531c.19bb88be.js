"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[5570],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,y=m["".concat(c,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"scene-manager",title:"Scene Manager",hide_title:!0},c="Scene Manager",u={unversionedId:"systems/runtime/scene-manager",id:"systems/runtime/scene-manager",title:"Scene Manager",description:"The SceneManager system is mainly a wrapper for the VRC_SceneDescriptor. It provides an interface into VRC scene details such as getting a spawn point and respawn height. This system also handles copying over reference camera settings to the player camera.",source:"@site/docs/systems/runtime/scene-manager.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/scene-manager",permalink:"/systems/runtime/scene-manager",tags:[],version:"current",frontMatter:{id:"scene-manager",title:"Scene Manager",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"RuntimeLoader",permalink:"/systems/runtime/runtime-loader"},next:{title:"Settings",permalink:"/systems/runtime/settings"}},p={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scene-manager"},"Scene Manager"),(0,i.kt)("p",null,"The SceneManager system is mainly a wrapper for the VRC_SceneDescriptor. It provides an interface into VRC scene details such as getting a spawn point and respawn height. This system also handles copying over reference camera settings to the player camera."))}f.isMDXComponent=!0}}]);