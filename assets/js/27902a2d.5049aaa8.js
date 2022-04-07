"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[40],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),y=s,d=m["".concat(u,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(7462),s=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"unity-event-system",title:"Unity Event System",hide_title:!0},u="Unity Event System",l={unversionedId:"systems/runtime/unity-event-system",id:"systems/runtime/unity-event-system",title:"Unity Event System",description:"ClientSim uses two classes to translate actions into Unity\u2019s EventSystem. These classes decouple Unity\u2019s old input system into values based on ClientSim\u2019s current bindings and match VRChat\u2019s interactive UI object filtering.",source:"@site/docs/systems/runtime/unity-event-system.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/unity-event-system",permalink:"/systems/runtime/unity-event-system",tags:[],version:"current",frontMatter:{id:"unity-event-system",title:"Unity Event System",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UdonManager",permalink:"/systems/runtime/udon-manager"},next:{title:"Script Execution Order",permalink:"/systems/script-execution-order"}},c={},p=[{value:"BaseInput",id:"baseinput",level:2},{value:"InputModule",id:"inputmodule",level:2}],m={toc:p};function y(e){var t=e.components,n=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unity-event-system"},"Unity Event System"),(0,i.kt)("p",null,"ClientSim uses two classes to translate actions into Unity\u2019s EventSystem. These classes decouple Unity\u2019s old input system into values based on ClientSim\u2019s current bindings and match VRChat\u2019s interactive UI object filtering. "),(0,i.kt)("h2",{id:"baseinput"},"BaseInput"),(0,i.kt)("p",null,"The ClientSimBaseInput system extends Unity\u2019s BaseInput class. Unity\u2019s BaseInput is responsible for passing mouse position and button input into the EventSystem. The ClientSim BaseInput system overrides these methods to instead pass values based on the current ClientSim input bindings and last ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/player#raycaster"},"PlayerRaycaster")," results. Mouse input is replaced with the current binding\u2019s ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/input"},"Use Input"),". Since Use input is a handed action, only the value of the last activated hand is passed as mouse input. The mouse position sent to the Event System ignores the actual mouse position, and instead calculates the screen position of the last interact raycast. Using the raycast position abstracts out the real mouse\u2019s position, allowing Desktop and VR to use Unity UI through the same system.\nThe BaseInput system is also responsible for providing the current mouse position to the rest of ClientSim. It controls if the mouse pointer is hidden and locked to the center of the screen, or visible and free to move. This mouse position is used for displaying the ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/player#reticle"},"Desktop Reticle")," as well as using the mouse to create the ray direction for ",(0,i.kt)("a",{parentName:"p",href:"/systems/runtime/player#rayprovider"},"DesktopRayProvider"),"."),(0,i.kt)("h2",{id:"inputmodule"},"InputModule"),(0,i.kt)("p",null,"The ClientSimInputModule extends Unity\u2019s StandaloneInputModule. This system processes Unity mouse events and filters out any UI objects that are not currently interactable. UI objects are interactable when all of the following conditions have been met:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/systems/runtime/player#playerraycaster"},"PlayerRaycaster")," last hit an object with a VRC_UIShape component. This data is provided through ClientSimBaseInput."),(0,i.kt)("li",{parentName:"ol"},"The UI object has a UIShape component in its parent"),(0,i.kt)("li",{parentName:"ol"},"The layer of the parent UIShape object is on a currently interactive layer. Interactive layers are determined by the ",(0,i.kt)("a",{parentName:"li",href:"/systems/runtime/interactive-layer-provider"},"InteractiveLayerProvider"),"."),(0,i.kt)("li",{parentName:"ol"},"The hit point of the UI Object raycast is contained within the collider of the UIShape. If any of those conditions fail, then the UI cannot be interacted with.")))}y.isMDXComponent=!0}}]);