(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{51:function(t,r,e){t.exports=e(57)},52:function(t,r,e){"use strict";function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(r,"a",(function(){return o}))},53:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}(t,r)||function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(r,"a",(function(){return o}))},54:function(t,r,e){"use strict";e.d(r,"e",(function(){return u})),e.d(r,"d",(function(){return s})),e.d(r,"b",(function(){return f})),e.d(r,"a",(function(){return h})),e.d(r,"c",(function(){return l}));var n=e(51),o=e.n(n),a=e(52),i="38585ebe4e144e5424126a0bdde6af68",c="https://api.themoviedb.org/3/",u=function(){var t=Object(a.a)(o.a.mark((function t(){var r,e,n,a,u,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:1,e="".concat(c,"trending/movie/day?api_key=").concat(i,"&page=").concat(r),t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,u=a.results,t.abrupt("return",n.ok?u:Promise.reject(new Error("Not found")));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n,a,u,s,f=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>1&&void 0!==f[1]?f[1]:1,n="".concat(c,"search/movie?api_key=").concat(i,"&query=").concat(r,"&language=en-US&page=").concat(e,"&include_adult=false"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return u=t.sent,s=u.results,t.abrupt("return",a.ok?s:Promise.reject(new Error("Not found")));case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(o.a.mark((function t(){var r,e,n,a,u=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:null,e="".concat(c,"movie/").concat(r,"?&api_key=").concat(i,"&language=en-US"),t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,t.abrupt("return",n.ok?a:Promise.reject(new Error("Not found")));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n,a,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c,"movie/").concat(r,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,u=a.cast,t.abrupt("return",n.ok?u:Promise.reject(new Error("Not found")));case 9:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(o.a.mark((function t(r){var e,n,a,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c,"movie/").concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,u=a.results,t.abrupt("return",n.ok?u.length>1?u:null:Promise.reject(new Error("Not found")));case 9:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},57:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(A){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=k(i,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:l,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==e&&n.call(x,a)&&(w=x);var j=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}return g.prototype=m,u(j,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new L(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(j),u(j,c,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=0.efbf46c8.chunk.js.map