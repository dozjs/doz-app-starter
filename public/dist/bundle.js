parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"F6m0":[function(require,module,exports) {
var define;
var define;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Doz",[],t):"object"==typeof exports?exports.Doz=t():e.Doz=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";e.exports={ROOT:"__DOZ_GLOBAL_COMPONENTS__",INSTANCE:"__DOZ_INSTANCE__",CMP_INSTANCE:"__DOZ_CMP_INSTANCE__",NS:{SVG:"http://www.w3.org/2000/svg"},TAG:{ROOT:"doz-root",EACH:"doz-each-root",APP:"doz-app",EMPTY:"doz-empty",MOUNT:"doz-mount",SUFFIX_ROOT:"-root"},REGEX:{IS_CUSTOM_TAG:/^\w+-[\w-]+$/,IS_CUSTOM_TAG_STRING:/<\w+-[\w-]+/,IS_BIND:/^d-bind$/,IS_REF:/^d-ref$/,IS_ALIAS:/^d:alias$/,IS_STORE:/^d:store$/,IS_COMPONENT_LISTENER:/^d:on-(\w+)$/,IS_LISTENER:/^on/,IS_ID_SELECTOR:/^#[\w-_:.]+$/,IS_PARENT_METHOD:/^parent.(.*)/,IS_STRING_QUOTED:/^"\w+"/,GET_LISTENER:/^this.(.*)\((.*)\)/,TRIM_QUOTES:/^["'](.*)["']$/},ATTR:{BIND:"d-bind",REF:"d-ref",ALIAS:"d:alias",STORE:"d:store",LISTENER:"d:on",ID:"d:id",FORCE_UPDATE:"forceupdate"}}},function(e,t,n){"use strict";var r=n(0).ROOT;function o(){return window[r]=window[r]||{components:{}},window[r].components}e.exports={register:function(e){var t=o(),n=e.tag.toUpperCase();if(t.hasOwnProperty(n))throw new Error("Component "+n+" already defined");t[n]=e},get:function(e){if("string"!=typeof e)throw new TypeError("tag must be a string");return e=e.toUpperCase(),o()[e]},removeAll:function(){window[r]&&(window[r].components={})}}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(var i in t)t.hasOwnProperty(i)&&-1===n.indexOf(i)&&(e.hasOwnProperty(i)&&void 0!==e[i]?"object"===r(e[i])&&o(e[i],t[i]):e[i]=t[i]);return e}e.exports=o,e.exports.copy=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[0]=Object.assign({},t[0]),o.apply(this,t)}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),i=n(1).register,a=n(4),u=n(0),c=u.REGEX,l=u.TAG,s=u.INSTANCE,f=u.CMP_INSTANCE,p=n(1),d=n(17),m=n(6),h=n(8),y=h.transform,v=h.serializeProps,b=n(11).updateElement,_=n(22),g=n(23),E=n(24).extract,T=n(5),S=n(25);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.root){e.template="string"==typeof e.template?a.create(e.template):e.template,e.root.appendChild(e.template);var t=null,n=void 0,r=[];return function o(i){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i;){var u=i.nodeName.toLowerCase(),c={};a.cmp&&a.cmp._components&&(c=a.cmp._components);var l=e.autoCmp||c[u]||e.app._components[u]||p.get(i.nodeName);if(l){if(a.cmp){var s=i.outerHTML;a.cmp.rawChildren.push(s)}if(a.cmp&&!1===a.cmp.autoCreateChildren){r.push(i),i=i.nextSibling;continue}var d=v(i),h=E(d),y=C(l,{root:i,app:e.app,props:d,dProps:h,parentCmp:a.cmp});if(!y){i=i.nextSibling;continue}if(!1!==m.callBeforeMount(y)&&(y.render(!0),t||(t=y),y._rootElement[f]=y,i.insertBefore(y._rootElement,i.firstChild),m.callRender(y),m.callMount(y),m.callMountAsync(y)),n=y,a.cmp){var b=Object.keys(a.cmp.children).length;a.cmp.children[y.alias?y.alias:b++]=y}e.autoCmp=null}i.hasChildNodes()&&o(i.firstChild,{cmp:n}),i=i.nextSibling}}(e.template),r.forEach(function(e){return e.remove()}),t}}function C(e,t){var n=o.copy(t.props,"function"==typeof e.cfg.props?e.cfg.props():e.cfg.props),i=Object.defineProperties({},{_isCreated:{value:!1,writable:!0},_prevTpl:{value:null,writable:!0},_prev:{value:null,writable:!0},_prevProps:{value:null,writable:!0},_rootElement:{value:null,writable:!0},_boundElements:{value:{},writable:!0},_callback:{value:t.dProps.callback,writable:!0},_cache:{value:new Map},_loops:{value:{},writable:!0},_components:{value:{},writable:!0},_publicProps:{value:Object.assign({},t.props)},_processing:{value:[],writable:!0},_dynamicChildren:{value:[],writable:!0},_unmounted:{value:!1,writable:!0},_unmountedParentNode:{value:null,writable:!0},getHTMLElement:{value:function(){return this._rootElement.parentNode},enumerable:!0},beginSafeRender:{value:function(){T.beginRender(this.props)},enumerable:!0},endSafeRender:{value:function(){T.endRender(this.props)},enumerable:!0},app:{value:t.app,enumerable:!0},parent:{value:t.parentCmp,enumerable:!0},ref:{value:{},writable:!0,enumerable:!0},children:{value:{},writable:!0,enumerable:!0},rawChildren:{value:[],writable:!0,enumerable:!0},tag:{value:e.tag,enumerable:!0},emit:{value:function(e){if(this._callback&&void 0!==this._callback[e]&&void 0!==this.parent[this._callback[e]]&&"function"==typeof this.parent[this._callback[e]]){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.parent[this._callback[e]].apply(this.parent,n)}},enumerable:!0},each:{value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=void 0;return Array.isArray(e)&&(n&&this.beginSafeRender(),r=e.map(t).map(function(e){if("string"==typeof e)return e.trim()}).join(""),n&&this.endSafeRender()),r},enumerable:!0},toStyle:{value:function(e){return S(e)},enumerable:!0},getStore:{value:function(e){return this.app.getStore(e)},enumerable:!0},getComponentById:{value:function(e){return this.app.getComponentById(e)},enumerable:!0},getCmp:{value:function(e){return this.app.getComponentById(e)},enumerable:!0},appRoot:{value:t.app._root,enumerable:!0},action:{value:t.app.action,enumerable:!0},render:{value:function(e){var n=this;this.beginSafeRender();var r=this.template().trim();this.endSafeRender();var o=a.create(r,l.ROOT),i=y(o),u=b(t.root,i,this._prev,0,this,e);setTimeout(function(){!function(e){!function(e){var t=e._dynamicChildren.length-1;for(;t>=0;){var n=e._dynamicChildren[t];!document.body.contains(n)&&n[s]&&(n[s].destroy(!0),e._dynamicChildren.splice(t,1)),t-=1}}(e);var t=e._processing.length-1;for(;t>=0;){var n=e._processing[t],r=n.node.parentNode;if(n.node[s]&&n.node[s].destroy(!0),""===n.node.innerHTML){var o=A({root:r,template:n.node.outerHTML,app:e.app});o&&(e._dynamicChildren.push(o._rootElement.parentNode),r.replaceChild(o._rootElement.parentNode,n.node),o._rootElement.parentNode[s]=o,e._processing.splice(t,1))}t-=1}}(n)}),!this._rootElement&&u&&(this._rootElement=u),this._prev=i},enumerable:!0},mount:{value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._unmounted)return!1===m.callBeforeMount(this)?this:(this._unmountedParentNode.appendChild(this._rootElement.parentNode),this._unmounted=!1,this._unmountedParentNode=null,m.callMount(this),Object.keys(this.children).forEach(function(e){t.children[e].mount()}),this);if(e){if(1!==this._rootElement.nodeType){var r=document.createElement(this.tag+l.SUFFIX_ROOT);this._rootElement.parentNode.replaceChild(r,this._rootElement),this._rootElement=r,this._rootElement[f]=this}var o=this._rootElement;return"string"==typeof n.selector?o=o.querySelector(n.selector):n.selector instanceof HTMLElement&&(o=n.selector),this._unmounted=!1,this._unmountedParentNode=null,this.app.mount(e,o,this)}},enumerable:!0},unmount:{value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this,n=arguments[1],r=arguments[2];if(e||!Boolean(this._unmountedParentNode)&&this._rootElement&&this._rootElement.parentNode&&this._rootElement.parentNode.parentNode)return!1!==m.callBeforeUnmount(this)&&(this._unmountedParentNode=this._rootElement.parentNode.parentNode,e?this._rootElement.parentNode.innerHTML="":this._rootElement.parentNode.parentNode.removeChild(this._rootElement.parentNode),this._unmounted=!n,r||m.callUnmount(this),Object.keys(this.children).forEach(function(o){t.children[o].unmount(e,n,r)}),this)},enumerable:!0},destroy:{value:function(e){var t=this;!1!==this.unmount(e,!0)&&(e||this._rootElement&&!1!==m.callBeforeDestroy(this)&&this._rootElement.parentNode)&&(Object.keys(this.children).forEach(function(e){t.children[e].destroy()}),m.callDestroy(this))},enumerable:!0}});if(function(e,t,n){Object.assign(e,t,n),Array.isArray(t.components)?(t.components.forEach(function(t){"object"===(void 0===t?"undefined":r(t))&&"string"==typeof t.tag&&"object"===r(t.cfg)&&(e._components[t.tag]=t)}),delete e.components):"object"===r(t.components)&&(Object.keys(t.components).forEach(function(n){e._components[n]={tag:n,cfg:t.components[n]}}),delete e.components)}(i,e.cfg,t.dProps),!1!==m.callBeforeCreate(i))return d.create(i,n),_.create(i),g.create(i),function(e){"function"==typeof e.onAppReady&&(e.onAppReady._instance=e,e.app._onAppReadyCB.push(e.onAppReady))}(i),m.callCreate(i),function(e){if("object"!==r(e.style))return;var t=e.tag,n=e.tag+"--style";if(document.querySelector("#"+n))return;var o=document.createElement("style");o.id=n,o.innerHTML=function e(n){var r="";Object.keys(n).forEach(function(o){if(/^@media/.test(o))r+=o+" {"+e(n[o])+"}";else{var i=S(n[o],!1);o=t+" "+o.replace(/(,)/g,"$1"+t+" "),r+=o+"{"+i+"} "}});return r}(e.style),document.head.appendChild(o)}(i),i._isCreated=!0,i}e.exports={component:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Tag must be a string");if(!c.IS_CUSTOM_TAG.test(e))throw new TypeError("Tag must contain a dash (-) like my-component");var n={};n.tag=e,n.cfg=o.copy(t,{autoCreateChildren:!0,updateChildrenProps:!0,props:{},template:function(){return""}}),i(n)},getInstances:A}},function(e,t,n){"use strict";var r=/\n/g,o=/\s+/g,i={create:function(e,t){var n=void 0;e=(e=e.replace(r," ")).replace(o," ");var i=document.createElement("div");if(i.innerHTML=e,i.childNodes.length>1?(n=document.createElement(t)).innerHTML=i.innerHTML:n=i.firstChild||document.createTextNode(""),!this.isValidNode(n))throw new Error("Element not valid");return n},isValidNode:function(e){return e&&"nodeType"in e},getAllNodes:function(e){var t=[];return function e(n){for(;n;)t.push(n),n.hasChildNodes()&&e(n.firstChild),n=n.nextSibling}(e),t}};e.exports=i},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var o,i,a,u,c,l=(o=[],i=[],a=[],u=null,c=function e(t,n,c,l){var s=null==n,f=c||null,p=l||"",d=[],m=function(e,t){return e instanceof Array?""!==p?p:t:""!==p?p+"."+t:t},h=0,y=function(e){if(!0!==f.paused)if(s&&(n=++h>1,setTimeout(function(){h=0},10)),console.log("domDelay",n),!0===n)setTimeout(function(){if(e===d.length){for(var t=0;t<f.observers.length;t++)f.observers[t](d);d=[]}},10);else{for(var t=0;t<f.observers.length;t++)f.observers[t](d);d=[]}},v={get:function(t,r){if("__getTarget"===r)return t;if("__isProxy"===r)return!0;if("__getParent"===r)return function(e){void 0===e&&(e=1);var n,r=m(t,"__getParent").split(".");return r.splice(-(e+1),e+1),n=f.parentProxy,r.join(".").split(".").reduce(function(e,t){return e?e[t]:void 0},n||self)};var o,i=t[r];if(i instanceof Object&&null!==i&&t.hasOwnProperty(r)){!0===i.__isProxy&&(i=i.__getTarget);for(var a=-1,u=f.targets,c=0,l=u.length;c<l;c++)if(i===u[c]){a=c;break}return a>-1?f.proxies[a]:e(i,n,f,""!==p?p+"."+r:r)}return f.renderMode?"string"==typeof(o=i)?o.replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):o:i},deleteProperty:function(e,t){var n=!0;u===b&&(n=!1,u=null);var r=Object.assign({},e),o=m(e,t);if((d.push({type:"delete",target:e,property:t,newValue:null,previousValue:r[t],currentPath:o,proxy:b}),"function"==typeof f.beforeChange&&f.checkBeforeChange!==o)&&(f.checkBeforeChange=o,!1===f.beforeChange(d)))return f.checkBeforeChange="",!1;if(f.checkBeforeChange="",!0===n){var c,l=void 0;for(l=0,c=i.length;l<c&&e!==i[l];l++);for(var s=a[l],p=s.length;p--;)s[p].proxy!==b&&(u=s[p].proxy,delete s[p].proxy[t]);delete e[t]}return y(d.length),!0},set:function(e,t,n,o){var c=!0;u===b&&(c=!1,u=null);var l=e[t];if(l!==n||!1===c){var s=void 0===l?"undefined":r(l),p=m(e,t),h="update";if("undefined"===s&&(h="add"),d.push({type:h,target:e,property:t,newValue:n,previousValue:o[t],currentPath:p,proxy:b}),"function"==typeof f.beforeChange&&f.checkBeforeChange!==p)if(f.checkBeforeChange=p,!1===f.beforeChange(d))return f.checkBeforeChange="",!1;if(f.checkBeforeChange="",!0===c){var v,_=void 0;for(_=0,v=i.length;_<v&&e!==i[_];_++);var g=a[_];if(g)for(var E=0,T=g.length;E<T;E++)g[E].proxy!==b&&(u=g[E].proxy,g[E].proxy[t]=n);setTimeout(function(){if("object"===s&&null!==l){for(var t=Object.keys(e),n=0,r=t.length;n<r;n++)if(e[t[n]]===l)return;!function e(t){for(var n=Object.keys(t),r=0,o=n.length;r<o;r++){var u=t[n[r]];u instanceof Object&&null!==u&&e(u)}for(var c=-1,l=0,s=i.length;l<s;l++)if(t===i[l]){c=l;break}if(c>-1){for(var p=a[c],d=p.length;d--;)if(f===p[d].observable){p.splice(d,1);break}0===p.length&&(a.splice(c,1),i.splice(c,1))}}(l)}},1e4),e[t]=n,n instanceof Object&&null!==n&&function e(t){for(var n=t.__getTarget,r=Object.keys(n),o=0,i=r.length;o<i;o++){var a=r[o];n[a]instanceof Object&&null!==n[a]&&e(t[a])}}(b[t])}y(d.length)}return!0}},b=new Proxy(t,v);null===f?(f={parentTarget:t,domDelay:n,parentProxy:b,observers:[],targets:[t],proxies:[b],paused:!1,path:p},o.push(f)):(f.targets.push(t),f.proxies.push(b));for(var _={target:t,proxy:b,observable:f},g=-1,E=0,T=i.length;E<T;E++)if(t===i[E]){g=E;break}return g>-1?a[g].push(_):(i.push(t),a.push([_]),g=i.length-1),b},{create:function(e,t,n){!0===e.__isProxy&&(e=e.__getTarget);var r=c(e,t);return"function"==typeof n&&this.observe(r,n),function e(t){for(var n=t.__getTarget,r=Object.keys(n),o=0,i=r.length;o<i;o++){var a=r[o];n[a]instanceof Object&&null!==n[a]&&e(t[a])}}(r),r},observe:function(e,t){for(var n=o.length;n--;)if(o[n].parentProxy===e){o[n].observers.push(t);break}},pause:function(e){for(var t=o.length,n=!1;t--;)if(o[t].parentProxy===e){o[t].paused=!0,n=!0;break}if(!1===n)throw new Error("DOZ could not pause observable -- matching proxy not found.")},resume:function(e){for(var t=o.length,n=!1;t--;)if(o[t].parentProxy===e){o[t].paused=!1,n=!0;break}if(!1===n)throw new Error("DOZ could not resume observable -- matching proxy not found.")},remove:function(e){for(var t=null,n=!1,r=o.length;r--;)if(o[r].parentProxy===e){t=o[r],n=!0;break}for(var u=a.length;u--;)for(var c=a[u].length;c--;)a[u][c].observable===t&&(a[u].splice(c,1),0===a[u].length&&(a.splice(u,1),i.splice(u,1)));!0===n&&o.splice(r,1)},beforeChange:function(e,t){if("function"!=typeof t)throw new Error("Callback function is required");for(var n=o.length,r=!1;n--;)if(o[n].parentProxy===e){o[n].beforeChange=t,r=!0;break}if(!1===r)throw new Error("DOZ -- matching proxy not found.")},beginRender:function(e){for(var t=o.length,n=!1;t--;)if(o[t].parentProxy===e){o[t].renderMode=!0,n=!0;break}if(!1===n)throw new Error("DOZ -- matching proxy not found.")},endRender:function(e){for(var t=o.length,n=!1;t--;)if(o[t].parentProxy===e){o[t].renderMode=!1,n=!0;break}if(!1===n)throw new Error("DOZ -- matching proxy not found.")}});e.exports=l},function(e,t,n){"use strict";var r=n(18);e.exports={callBeforeCreate:function(e){if("function"==typeof e.onBeforeCreate)return e.onBeforeCreate.call(e)},callCreate:function(e){"function"==typeof e.onCreate&&e.onCreate.call(e)},callRender:function(e){"function"==typeof e.onRender&&(r.once("onRender is deprecated since v. 1.0.0, use onMount instead"),e.onRender.call(e))},callBeforeMount:function(e){if("function"==typeof e.onBeforeMount)return e.onBeforeMount.call(e)},callMount:function(e){"function"==typeof e.onMount&&e.onMount.call(e)},callMountAsync:function(e){"function"==typeof e.onMountAsync&&setTimeout(function(){e.onMountAsync.call(e)})},callBeforeUpdate:function(e,t){if("function"==typeof e.onBeforeUpdate)return e.onBeforeUpdate.call(e,t)},callUpdate:function(e,t){"function"==typeof e.onUpdate&&e.onUpdate.call(e,t)},callBeforeUnmount:function(e){if("function"==typeof e.onBeforeUnmount)return e.onBeforeUnmount.call(e)},callUnmount:function(e){"function"==typeof e.onUnmount&&e.onUnmount.call(e)},callBeforeDestroy:function(e){if("function"==typeof e.onBeforeDestroy)return e.onBeforeDestroy.call(e)},callDestroy:function(e){"function"==typeof e.onDestroy&&(e.onDestroy.call(e),e=null)}}},function(e,t,n){"use strict";e.exports=function(e){return void 0!==window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e)}},function(e,t,n){"use strict";var r=n(9),o=n(10),i=n(0),a=i.REGEX,u=i.ATTR;function c(e){var t={};if(e.attributes)for(var n=Array.from(e.attributes),i=n.length-1;i>=0;--i){var c=n[i],l=c.name.match(a.IS_COMPONENT_LISTENER);if(l)void 0===t[u.LISTENER]&&(t[u.LISTENER]={}),t[u.LISTENER][l[1]]=c.nodeValue,delete t[c.name];else{var s=c.nodeValue;a.IS_STRING_QUOTED.test(s)&&(s=c.nodeValue.replace(/"/g,"&quot;")),t[a.IS_CUSTOM_TAG.test(e.nodeName)?o(c.name):c.name]=c.name===u.FORCE_UPDATE||r(s)}}return t}e.exports={transform:function(e){var t={};return function e(n,r){for(;n;){var o=void 0;3===n.nodeType?o=n.nodeValue:((o={}).type=n.nodeName,o.children=[],o.props=c(n),o.isSVG=void 0!==n.ownerSVGElement),Object.keys(t).length||(t=o),r&&r.children&&r.children.push(o),n.hasChildNodes()&&e(n.firstChild,o),n=n.nextSibling}}(e,t),t},serializeProps:c}},function(e,t,n){"use strict";e.exports=function(e){if("string"!=typeof e)return e;switch(e){case"undefined":return;case"null":return null;case"NaN":return NaN;case"Infinity":return 1/0;case"true":return!0;case"false":return!1;case"0":return 0;default:try{return JSON.parse(e)}catch(e){}}var t=parseFloat(e);return!isNaN(t)&&isFinite(e)?0===e.toLowerCase().indexOf("0x")?parseInt(e,16):t:e}},function(e,t,n){"use strict";e.exports=function(e){return e.replace(/(-\w)/g,function(e){return e[1].toUpperCase()})}},function(e,t,n){"use strict";var r=n(19);e.exports={updateElement:r.update}},function(e,t,n){"use strict";e.exports=function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()}},function(e,t,n){"use strict";e.exports=n(14)},function(e,t,n){"use strict";e.exports=n(15),e.exports.component=n(3).component,e.exports.collection=n(1),e.exports.update=n(11).updateElement,e.exports.transform=n(8).transform,e.exports.html=n(4),e.exports.version="1.4.1"},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=n(2),a=n(16),u=n(3),c=n(0),l=c.TAG,s=c.REGEX,f=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o="<"+l.APP+"></"+l.APP+">";if(s.IS_ID_SELECTOR.test(n.root)&&(n.root=document.getElementById(n.root.substring(1))),s.IS_ID_SELECTOR.test(n.template)&&(n.template=document.getElementById(n.template.substring(1)),n.template=n.template.innerHTML),!(n.root instanceof HTMLElement))throw new TypeError("root must be an HTMLElement or an valid ID selector like #example-root");if(!(n.template instanceof HTMLElement||"string"==typeof n.template||"function"==typeof n.template))throw new TypeError("template must be a string or an HTMLElement or a function or an valid ID selector like #example-template");this.cfg=i(n,{components:[],actions:{}}),Object.defineProperties(this,{_components:{value:{},writable:!0},_usedComponents:{value:{},writable:!0},_stores:{value:{},writable:!0},_cache:{value:new Map},_ids:{value:{},writable:!0},_onAppReadyCB:{value:[],writable:!0},_callAppReady:{value:function(){this._onAppReadyCB.forEach(function(e){"function"==typeof e&&e._instance&&e.call(e._instance)}),this._onAppReadyCB=[]}},_root:{value:this.cfg.root},action:{value:a(this.cfg.actions,this),enumerable:!0},mount:{value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._tree;if("string"==typeof t&&(t=document.querySelector(t)),!((t=t||n._rootElement)instanceof HTMLElement))throw new TypeError("root must be an HTMLElement or an valid selector like #example-root");var r={tag:l.MOUNT,cfg:{props:{},template:function(){return"<"+l.ROOT+">"+e+"</"+l.ROOT+">"}}};return u.getInstances({root:t,template:"<"+l.MOUNT+"></"+l.MOUNT+">",app:this,parentCmp:n,autoCmp:r,mount:!0})},enumerable:!0}}),Array.isArray(this.cfg.components)?this.cfg.components.forEach(function(e){"object"===(void 0===e?"undefined":r(e))&&"string"==typeof e.tag&&"object"===r(e.cfg)&&(t._components[e.tag]=e)}):"object"===r(this.cfg.components)&&Object.keys(this.cfg.components).forEach(function(e){t._components[e]={tag:e,cfg:t.cfg.components[e]}}),this._components[l.APP]={tag:l.APP,cfg:{template:"function"==typeof n.template?n.template:function(){return n.template}}},Object.keys(n).forEach(function(e){["template","root"].includes(e)||(t._components[l.APP].cfg[e]=n[e])}),this._tree=u.getInstances({root:this.cfg.root,template:o,app:this})||[],this._callAppReady()}return o(e,[{key:"getComponent",value:function(e){return this._tree?this._tree.children[e]:void 0}},{key:"getComponentById",value:function(e){return this._ids[e]}},{key:"getStore",value:function(e){return this._stores[e]}}]),e}();e.exports=f},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function e(t,n){if("object"!==(void 0===t?"undefined":r(t)))throw new TypeError("expected an object");for(var o=Object.assign({},t),i=Object.keys(t),a=i.length-1;a>=0;--a){var u=o[i[a]];"function"==typeof u?o[i[a]]=u.bind(n):"object"===(void 0===u?"undefined":r(u))&&(o[i[a]]=e(u,n))}return o}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=n(5),i=n(6),a=n(7);e.exports={create:function(e,t){e.props=o.create(t,null,function(t){e.render(),function(e,t){t.forEach(function(t){e._boundElements.hasOwnProperty(t.property)&&e._boundElements[t.property].forEach(function(e){if("checkbox"===e.type)if(e.defaultValue){if(Array.isArray(t.newValue)){var n=document.querySelectorAll("input[name="+e.name+"][type=checkbox]");[].concat(r(n)).forEach(function(e){return e.checked=t.newValue.includes(e.value)})}}else e.checked=t.newValue;else"radio"===e.type?e.checked=e.value===t.newValue:"select-multiple"===e.type&&Array.isArray(t.newValue)?[].concat(r(e.options)).forEach(function(e){return e.selected=t.newValue.includes(e.value)}):e.value=t.newValue})})}(e,t),e._isCreated&&a(function(){i.callUpdate(e,t)})}),o.beforeChange(e.props,function(t){if(!1===i.callBeforeUpdate(e,t))return!1})}}},function(e,t,n){"use strict";var r=[],o=function e(t,n){return void 0!==t&&(n=n||t,r.includes(n)||r.push(n),console.warn("["+e.title+"]",n),!0)};o.title="DeprecationWarning";e.exports=o,e.exports.once=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!r.includes(t[1]||t[0])&&o.apply(void 0,t)},e.exports._list=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(20),i=o.attach,a=o.updateAttributes,u=[],c=n(0),l=c.INSTANCE,s=c.TAG,f=c.NS,p=c.CMP_INSTANCE;function d(e,t,n){if(void 0!==e){if("string"==typeof e)return document.createTextNode(e);"#"===e.type[0]&&(e.type=s.EMPTY);var r=e.isSVG?document.createElementNS(f.SVG,e.type):document.createElement(e.type);return i(r,e.props,t),e.children.map(function(e){return d(e,t,n)}).forEach(r.appendChild.bind(r)),-1===e.type.indexOf("-")||n||t._processing.push({node:r,action:"create"}),r}}e.exports={create:d,update:function e(t,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments[4],s=arguments[5];if(t){if(!o){var f=d(n,c,s);return t.appendChild(f),f}if(n){if(T=o,(void 0===(E=n)?"undefined":r(E))!==(void 0===T?"undefined":r(T))||"string"==typeof E&&E!==T||E.type!==T.type||E.props&&E.props.forceupdate){var m=d(n,c,s),h=t.childNodes[i];return h[p]&&(m[p]=h[p],m[p]._rootElement=m),t.replaceChild(m,h),m}if(n.type){var y=a(t.childNodes[i],n.props,o.props,c);if(t.childNodes[i]){var v=t.childNodes[i][l];if(v&&y.length)return void y.forEach(function(e){Object.keys(e).forEach(function(t){v.props[t]=e[t]})})}for(var b=n.children.length,_=o.children.length,g=0;g<b||g<_;g++)e(t.childNodes[i],n.children[g],o.children[g],g,c,s);!function(){for(var e=u.length;e--;)u[e].parentNode.removeChild(u[e]),u.splice(e,1)}()}}else t.childNodes[i]&&u.push(t.childNodes[i]);var E,T}}}},function(module,exports,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var _require=__webpack_require__(0),REGEX=_require.REGEX,ATTR=_require.ATTR,CMP_INSTANCE=_require.CMP_INSTANCE,castStringTo=__webpack_require__(9),dashToCamel=__webpack_require__(10),camelToDash=__webpack_require__(12),objectPath=__webpack_require__(21),delay=__webpack_require__(7);function isEventAttribute(e){return REGEX.IS_LISTENER.test(e)}function isBindAttribute(e){return e===ATTR.BIND}function isRefAttribute(e){return e===ATTR.REF}function canBind(e){return-1!==["INPUT","TEXTAREA","SELECT"].indexOf(e.nodeName)}function setAttribute(e,t,n,r){if(REGEX.IS_CUSTOM_TAG.test(e.nodeName)&&(t=camelToDash(t)),isCustomAttribute(t));else if("boolean"==typeof n)setBooleanAttribute(e,t,n);else if("object"===(void 0===n?"undefined":_typeof(n)))try{e.setAttribute(t,JSON.stringify(n))}catch(e){}else e.setAttribute(t,n)}function removeAttribute(e,t,n){isCustomAttribute(t)||!e||e.removeAttribute(t)}function updateAttribute(e,t,n,r,o){""===n?(removeAttribute(e,t,r,o),updateChildren(o,t,n,e)):""!==r&&n===r||(setAttribute(e,t,n,o),updateChildren(o,t,n,e))}function updateChildren(e,t,n,r){if(e&&e.updateChildrenProps&&r){t=dashToCamel(t);var o=r.firstChild;o&&o[CMP_INSTANCE]&&o[CMP_INSTANCE]._publicProps.hasOwnProperty(t)&&(o[CMP_INSTANCE].props[t]=n)}}function updateAttributes(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],o=Object.assign({},t,n),i=[];return Object.keys(o).forEach(function(o){if(updateAttribute(e,o,t[o],n[o],r),t[o]!==n[o]){var a={};a[o]=t[o],i.push(a)}}),i}function isCustomAttribute(e){return isEventAttribute(e)||isBindAttribute(e)||isRefAttribute(e)||e===ATTR.FORCE_UPDATE}function setBooleanAttribute(e,t,n){e&&(e.setAttribute(t,n),e[t]=n)}function extractEventName(e){return e.slice(2).toLowerCase()}function trimQuotes(e){return e.replace(REGEX.TRIM_QUOTES,"$1")}function addEventListener($target,name,value,cmp){if(isEventAttribute(name)){var match=value.match(REGEX.GET_LISTENER);if(match){var args=null,handler=match[1],stringArgs=match[2];stringArgs&&(args=stringArgs.split(",").map(function(e){return"this"===(e=e.trim())?cmp:castStringTo(trimQuotes(e))}));var isParentMethod=handler.match(REGEX.IS_PARENT_METHOD);isParentMethod&&(handler=isParentMethod[1],cmp=cmp.parent);var method=objectPath(handler,cmp);void 0!==method&&(value=args?method.bind.apply(method,[cmp].concat(_toConsumableArray(args))):method.bind(cmp))}if("function"==typeof value)$target.addEventListener(extractEventName(name),value);else{var _func=function _func(){eval(value)};$target.addEventListener(extractEventName(name),_func.bind(cmp))}}}function setBind(e,t,n,r){if(isBindAttribute(t)&&canBind(e)&&void 0!==r.props[n]){return["compositionstart","compositionend","input","change"].forEach(function(t){e.addEventListener(t,function(e){var t=void 0;if("checkbox"===this.type)if(this.defaultValue){var o=document.querySelectorAll("input[name="+this.name+"][type=checkbox]:checked");t=[].concat(_toConsumableArray(o)).map(function(e){return e.value}),r.props[n]=t}else r.props[n]=this.checked;else t=this.value,this.multiple&&(t=[].concat(_toConsumableArray(this.options)).filter(function(e){return e.selected}).map(function(e){return e.value})),r.props[n]=t})}),r._boundElements.hasOwnProperty(n)?r._boundElements[n].push(e):r._boundElements[n]=[e],!0}}function setRef(e,t,n,r){isRefAttribute(t)&&(r.ref[n]=e)}function attach(e,t,n){var r=void 0;for(var o in Object.keys(t).forEach(function(o){setAttribute(e,o,t[o],n),addEventListener(e,o,t[o],n),setBind(e,o,t[o],n)&&(r=n.props[t[o]]),setRef(e,o,t[o],n)}),e.dataset)e.dataset.hasOwnProperty(o)&&REGEX.IS_LISTENER.test(o)&&addEventListener(e,o,e.dataset[o],n);void 0!==r&&delay(function(){"radio"===e.type?document.querySelectorAll("input[name="+e.name+"][type=radio]").forEach(function(e){return e.checked=r===e.value}):"checkbox"===e.type?"object"===(void 0===r?"undefined":_typeof(r))?document.querySelectorAll("input[name="+e.name+"][type=checkbox]").forEach(function(e){return e.checked=Array.from(r).includes(e.value)}):e.checked=r:e.value=r})}module.exports={attach:attach,updateAttributes:updateAttributes}},function(e,t,n){"use strict";function r(e,t){return e.split(".").reduce(function(e,t){return e?e[t]:void 0},t)}e.exports=r,e.exports.getLast=function(e,t){return-1!==e.indexOf(".")&&((e=e.split(".")).pop(),e=e.join(".")),r(e,t)}},function(e,t,n){"use strict";e.exports={create:function(e){if("string"==typeof e.store){if(void 0!==e.app._stores[e.store])throw new Error("Store already defined: "+e.store);e.app._stores[e.store]=e.props}}}},function(e,t,n){"use strict";e.exports={create:function(e){if("string"==typeof e.id){if(void 0!==e.app._ids[e.id])throw new Error("ID already defined: "+e.id);e.app._ids[e.id]=e}}}},function(e,t,n){"use strict";var r=n(0).ATTR;e.exports={extract:function(e){var t={};return void 0!==e[r.ALIAS]&&(t.alias=e[r.ALIAS],delete e[r.ALIAS]),void 0!==e[r.STORE]&&(t.store=e[r.STORE],delete e[r.STORE]),void 0!==e[r.LISTENER]&&(t.callback=e[r.LISTENER],delete e[r.LISTENER]),void 0!==e[r.ID]&&(t.id=e[r.ID],delete e[r.ID]),t}}},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(12);e.exports=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e=Object.entries(e).reduce(function(e,t){var n=r(t,2),i=n[0],a=n[1];return""+e+o(i)+":"+a+";"},""),t?'style="'+e+'"':e}}])});
},{}],"XUXT":[function(require,module,exports) {
var define;
var t;!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof t&&t.amd?t("DozRouter",[],r):"object"==typeof exports?exports.DozRouter=r():e.DozRouter=r()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";t.exports=r(1)},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(2),o=i.REGEX,s=i.PATH,a=r(3),u=r(4);t.exports={props:{hash:"#",classActiveLink:"router-link-active",linkAttr:"router-link",mode:"hash",root:"/"},autoCreateChildren:!1,$_currentView:null,$_currentViewRaw:"",$_currentPath:null,$_routes:[],$_paramMap:{},$_param:{},$_routeNotFound:"",$_query:{},$_queryRaw:"",$_link:{},$_pauseHashListener:!1,$removeView:function(){this.$_currentView&&(this.$_currentView.destroy(),this.$_currentView=null)},$setView:function(t,e,r){var n=this.$_currentViewRaw===t;if(e&&n){var i=this.$_currentView.children[0],o=i[e];"function"==typeof o&&o.call(i,this)}else r&&n?this.$_currentView.children[0].render():(this.$removeView(),this.$_currentView=this.mount(t));this.$_currentViewRaw=t},$query:function(t){return this.$_query[t]},$param:function(t){return this.$_param[t]},$navigate:function(t,e){"history"===this.props.mode?(history.pushState(t,null,this.props.root+t),this.$_navigate(t,e)):(this.$_pauseHashListener=!0,window.location.href=this.props.hash+t,this.$_navigate(t,e),this.$_pauseHashListener=!1)},$_navigate:function(t,e){var r=this,i=!1,o=(t=t||window.location.hash.slice(this.props.hash.length)).split("?");if(t=u(o[0]),this.$_currentPath===t)return!1;this.$_queryRaw=o[1]||"";for(var s=0;s<this.$_routes.length;s++){var c=this.$_routes[s],h=new RegExp("^"+c.path+"$"),p=t.match(h);if(p){i=!0,"object"===(void 0===e?"undefined":n(e))?this.$_param=Object.assign({},e):function(){var t=r.$_paramMap[c.path];r.$_query=a(r.$_queryRaw),p.slice(1).forEach(function(e,n){r.$_param[t[n]]=e})}(),this.$_currentPath=t,this.$setView(c.view,c.cb,c.preserve);break}}return i||(this.$_currentPath=null,this.$setView(this.$_routeNotFound||'"'+t+'" not found')),this.$activeLink(),i},$activeLink:function(){var t=this;Object.keys(this.$_link).forEach(function(e){var r=Boolean(t.$_link[e].length>1&&t.$_queryRaw);t.$_link[e].forEach(function(n){var i=!0;r&&(i=new RegExp(t.$_queryRaw+"$","g").test(n.href)),e===t.$_currentPath&&i?n.classList.add(t.props.classActiveLink):n.classList.remove(t.props.classActiveLink)})})},$add:function(t,e){if(t===s.NOT_FOUND)this.$_routeNotFound=e;else{var r=[],n=u(t);n=n.replace(/:(\w+)/g,function(t,e){return r.push(e),"([\\w-]+)"}),this.$_paramMap[n]=r;var i=e.match(o.CHANGE);i&&(i=i[1]);var a=o.IS_PRESERVE.test(e);this.$_routes.push({path:n,view:e,cb:i,preserve:a})}},$remove:function(t){for(var e=0;e<this.$_routes.length;e++){this.$_routes[e].path===u(t)&&this.$_routes.splice(e,1)}},$bindLink:function(){var t=this;this.$_link={},document.querySelectorAll("["+this.props.linkAttr+"]").forEach(function(e){var r=e.pathname||e.href;"history"===t.props.mode?e.addEventListener("click",function(n){n.preventDefault();var i=r+e.search;history.pushState(i,null,t.props.root+i),t.$_navigate(i)}):e.href=t.props.hash+r+e.search;var n=r.split("?");r=u(n[0]),void 0===t.$_link[r]?t.$_link[r]=[e]:t.$_link[r].push(e)})},onAppReady:function(){var t=this;this.rawChildren.forEach(function(e){var r=e.match(o.ROUTE);r&&t.$add(r[1],e)}),this.$bindLink(),"history"===this.props.mode?window.addEventListener("popstate",function(e){t.$_navigate(e.state)}):window.addEventListener("hashchange",function(){t.$_pauseHashListener||t.$_navigate()}),window.addEventListener("DOMContentLoaded",function(){return t.$_navigate()})}}},function(t,e,r){"use strict";t.exports={REGEX:{ROUTE:/route(?:\s+)?=(?:\s+)?"(.*)"/,CHANGE:/route-change(?:\s+)?=(?:\s+)?"(.*?)"/,IS_PRESERVE:/\spreserve[>\s=]/},PATH:{NOT_FOUND:"*"}}},function(t,e,r){"use strict";t.exports=function(t){return t?JSON.parse('{"'+t.replace(/&/g,'","').replace(/=/g,'":"')+'"}',function(t,e){return""===t?e:decodeURIComponent(e)}):{}}},function(t,e,r){"use strict";t.exports=function(t){return t.toString().replace(/\/+$/,"").replace(/^\//,"")}}])});
},{}],"o6xa":[function(require,module,exports) {
"use strict";var n=require("doz");(0,n.component)("app-nav",{template:function(){return'\n            <nav>\n                <ul>\n                    <li>\n                        <a router-link href="/">Dashboard</a>\n                    </li>\n                    <li>\n                        <a router-link href="/users">Users</a>\n                    </li>\n                </ul>   \n            </nav>\n        '}});
},{"doz":"F6m0"}],"NYpi":[function(require,module,exports) {
"use strict";var n=require("doz");(0,n.component)("app-dashboard",{template:function(){return"\n            <div>\n                 <h1>Dashboard</h1>\n            </div>\n        "}});
},{"doz":"F6m0"}],"R04H":[function(require,module,exports) {
"use strict";var e=require("doz");(0,e.component)("app-users",{template:function(){return"\n            <div>\n                 <h1>Users</h1>\n            </div>\n        "}});
},{"doz":"F6m0"}],"+cI+":[function(require,module,exports) {
"use strict";var e=require("doz"),r=require("doz-router"),a=n(r);function n(e){return e&&e.__esModule?e:{default:e}}require("./nav"),require("./pages/dashboard"),require("./pages/users"),(0,e.component)("doz-router",a.default),(0,e.component)("app-ui",{template:function(){return'\n            <header>\n                <app-nav></app-nav>\n            </header>\n            <main>\n                <doz-router>\n                    <app-dashboard route="/"></app-dashboard>\n                    <app-users route="/users"></app-users>\n                </doz-router>\n            </main>\n            <footer>My basic app</footer>\n        '}});
},{"doz":"F6m0","doz-router":"XUXT","./nav":"o6xa","./pages/dashboard":"NYpi","./pages/users":"R04H"}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("doz"),u=r(e);function r(e){return e&&e.__esModule?e:{default:e}}require("./cmp/ui"),new u.default({root:"#app",template:"\n        <app-ui></app-ui>\n    "});
},{"doz":"F6m0","./cmp/ui":"+cI+"}]},{},["A2T1"], null)
//# sourceMappingURL=bundle.map