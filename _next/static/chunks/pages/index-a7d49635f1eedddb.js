(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2717:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(i=n(1585))&&i.__esModule?i:{default:i},u=n(8e3),s=n(5850),l=n(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var y=function(e){var t=e.children,n=a.useContext(u.AmpStateContext),r=a.useContext(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=y},1585:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var f=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},4976:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(9008),o=n(214),i=n.n(o),a="/mc-bot/_next/static/media/favicon.9f3f2c06.ico",c=n(3645),u=n(7294);function s(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}var f=n(7757),d=n.n(f),p=function(){var e=l(d().mark((function e(t,n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{mode:"cors",headers:{Authorization:"Bearer ".concat(n)}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=l(d().mark((function e(t,n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{mode:"cors",method:"POST",headers:{Authorization:"Bearer ".concat(n)}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(5893),g="771328302406-20bclmqpedec3gja99lpb89lg66t7vls.apps.googleusercontent.com",m=function(){var e=(0,u.useState)(""),t=e[0],n=e[1],o=function(e){e.error&&(console.error(e.error),console.info(e.details)),n(e.tokenId)},s=function(e){var t=(0,u.useState)(!1),n=t[0],r=t[1],o=(0,u.useState)(!1),i=o[0],a=o[1],c=(0,u.useState)(""),s=c[0],f=c[1];return{getInfo:(0,u.useCallback)(l(d().mark((function t(){var o,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&!n){t.next=2;break}return t.abrupt("return");case 2:return r(!0),a(!1),t.next=7,p("https://us-central1-kawarahouse.cloudfunctions.net/info",e);case 7:if(o=t.sent,r(!1),!o.ok){t.next=16;break}return t.next=12,o.text();case 12:i=t.sent,f(i),t.next=17;break;case 16:a(!0);case 17:case"end":return t.stop()}}),t)}))),[e,n]),info:s,loading:n,error:i}}(t),f=s.getInfo,m=s.info,b=s.loading,v=function(e){var t=(0,u.useState)(""),n=t[0],r=t[1],o=(0,u.useState)(!1),i=o[0],a=o[1];return{startServer:(0,u.useCallback)(l(d().mark((function t(){var o,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&!n){t.next=2;break}return t.abrupt("return");case 2:return r("start"),a(!1),t.next=7,h("https://us-central1-kawarahouse.cloudfunctions.net/start-mc",e);case 7:if(o=t.sent,r(""),!o.ok){t.next=16;break}return t.next=12,o.text();case 12:i=t.sent,a("ok"!==i),t.next=17;break;case 16:a(!0);case 17:case"end":return t.stop()}}),t)}))),[e,n]),stopServer:(0,u.useCallback)(l(d().mark((function t(){var o,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&!n){t.next=2;break}return t.abrupt("return");case 2:return r("stop"),a(!1),t.next=7,h("https://us-central1-kawarahouse.cloudfunctions.net/stop-mc",e);case 7:if(o=t.sent,r(""),!o.ok){t.next=16;break}return t.next=12,o.text();case 12:i=t.sent,a("ok"!==i),t.next=17;break;case 16:a(!0);case 17:case"end":return t.stop()}}),t)}))),[e,n]),operating:n,error:i}}(t),x=v.startServer,S=v.stopServer,j=v.operating;return(0,y.jsxs)("div",{className:i().container,children:[(0,y.jsxs)(r.default,{children:[(0,y.jsx)("title",{children:"Minecraft Launcher"}),(0,y.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,y.jsx)("link",{rel:"icon",href:a})]}),(0,y.jsx)("header",{children:(0,y.jsx)("h1",{children:"Minecraft Launcher"})}),(0,y.jsxs)("div",{className:i().main,children:[t?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("p",{children:"Authorized."}),(0,y.jsx)(c.GoogleLogout,{clientId:g,onLogoutSuccess:function(){n("")}})]}):(0,y.jsx)(c.GoogleLogin,{clientId:g,buttonText:"Login",onSuccess:o,onFailure:o,cookiePolicy:"single_host_origin",isSignedIn:!0}),(0,y.jsx)("div",{children:m}),(0,y.jsx)("button",{onClick:f,disabled:b,children:"getInfo"}),(0,y.jsx)("button",{onClick:x,disabled:""!==j,children:"start"}),(0,y.jsx)("button",{onClick:S,disabled:""!==j,children:"stop"})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4976)}])},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ"}},9008:function(e,t,n){e.exports=n(2717)},3645:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){return r={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function r(){}function o(){}var i=n(3);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,o,i){var a=e.getElementsByTagName(t)[0],c=a,u=a;(u=e.createElement(t)).id=n,u.src=r,c&&c.parentNode?c.parentNode.insertBefore(u,c):e.head.appendChild(u),u.onerror=i,u.onload=o}function d(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function p(e){return m.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function h(e){return m.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},m.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("g",{fill:"#000",fillRule:"evenodd"},m.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),m.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),m.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),m.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),m.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function y(e){var t=i(Object(g.useState)(!1),2),n=t[0],r=t[1],o=i(Object(g.useState)(!1),2),a=o[0],c=o[1],u=e.tag,s=e.type,l=e.className,f=e.disabledStyle,d=e.buttonText,y=e.children,v=e.render,x=e.theme,S=e.icon,j=e.disabled,O=b({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),k=O.signIn,_=j||!O.loaded;if(v)return v({onClick:k,disabled:_});var w={backgroundColor:"dark"===x?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===x?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},M={cursor:"pointer",backgroundColor:"dark"===x?"#3367D6":"#eee",color:"dark"===x?"#fff":"rgba(0, 0, 0, .54)",opacity:1},I=_?Object.assign({},w,f):a?Object.assign({},w,M):n?Object.assign({},w,{cursor:"pointer",opacity:.9}):w;return m.a.createElement(u,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:k,style:I,type:s,disabled:_,className:l},[S&&m.a.createElement(h,{key:1,active:a}),m.a.createElement(p,{icon:S,key:2},y||d)])}n.r(t),n.d(t,"default",(function(){return x})),n.d(t,"GoogleLogin",(function(){return x})),n.d(t,"GoogleLogout",(function(){return j})),n.d(t,"useGoogleLogin",(function(){return b})),n.d(t,"useGoogleLogout",(function(){return S}));var g=n(0),m=n.n(g),b=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function n(e){if(e&&e.preventDefault(),T){var n=window.gapi.auth2.getAuthInstance(),r={prompt:C};p(),"code"===I?n.grantOfflineAccess(r).then((function(e){return i(e)}),(function(e){return s(e)})):n.signIn(r).then((function(e){return t(e)}),(function(e){return s(e)}))}}var o=e.onSuccess,i=void 0===o?function(){}:o,a=e.onAutoLoadFinished,c=void 0===a?function(){}:a,u=e.onFailure,s=void 0===u?function(){}:u,l=e.onRequest,p=void 0===l?function(){}:l,h=e.onScriptLoadFailure,y=e.clientId,m=e.cookiePolicy,b=e.loginHint,v=e.hostedDomain,x=e.autoLoad,S=e.isSignedIn,j=e.fetchBasicProfile,O=e.redirectUri,k=e.discoveryDocs,_=e.uxMode,w=e.scope,M=e.accessType,I=e.responseType,P=e.jsSrc,A=void 0===P?"https://apis.google.com/js/api.js":P,C=e.prompt,E=r(Object(g.useState)(!1),2),T=E[0],L=E[1];return Object(g.useEffect)((function(){var e=!1,n=h||s;return f(document,"script","google-login",A,(function(){var r={client_id:y,cookie_policy:m,login_hint:b,hosted_domain:v,fetch_basic_profile:j,discoveryDocs:k,ux_mode:_,redirect_uri:O,scope:w,access_type:M};"code"===I&&(r.access_type="offline"),window.gapi.load("auth2",(function(){var o=window.gapi.auth2.getAuthInstance();o?o.then((function(){e||(S&&o.isSignedIn.get()?(L(!0),c(!0),t(o.currentUser.get())):(L(!0),c(!1)))}),(function(e){s(e)})):window.gapi.auth2.init(r).then((function(n){if(!e){L(!0);var r=S&&n.isSignedIn.get();c(r),r&&t(n.currentUser.get())}}),(function(e){L(!0),c(!1),n(e)}))}))}),(function(e){n(e)})),function(){e=!0,d(document,"google-login")}}),[]),Object(g.useEffect)((function(){x&&n()}),[T]),{signIn:n,loaded:T}});function v(e){var t=s(Object(g.useState)(!1),2),n=t[0],r=t[1],o=s(Object(g.useState)(!1),2),i=o[0],a=o[1],c=e.tag,u=e.type,l=e.className,f=e.disabledStyle,d=e.buttonText,y=e.children,b=e.render,v=e.theme,x=e.icon,j=e.disabled,O=S({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),k=O.signOut,_=j||!O.loaded;if(b)return b({onClick:k,disabled:_});var w={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},M={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},I=_?Object.assign({},w,f):i?Object.assign({},w,M):n?Object.assign({},w,{cursor:"pointer",opacity:.9}):w;return m.a.createElement(c,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:k,style:I,type:u,disabled:_,className:l},[x&&m.a.createElement(h,{key:1,active:i}),m.a.createElement(p,{icon:x,key:2},y||d)])}y.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var x=y,S=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,r=e.onFailure,o=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,u=e.loginHint,s=e.hostedDomain,l=e.fetchBasicProfile,p=e.discoveryDocs,h=e.uxMode,y=e.redirectUri,m=e.scope,b=e.accessType,v=e.onLogoutSuccess,x=c(Object(g.useState)(!1),2),S=x[0],j=x[1],O=Object(g.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return r(e)}))}}),[v]);return Object(g.useEffect)((function(){var e=o||r;return f(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:a,login_hint:u,hosted_domain:s,fetch_basic_profile:l,discoveryDocs:p,ux_mode:h,redirect_uri:y,scope:m,access_type:b};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?j(!0):window.gapi.auth2.init(t).then((function(){return j(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){d(document,"google-login")}}),[]),{signOut:O,loaded:S}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var j=v}],t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n,r}(n(7294))}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);