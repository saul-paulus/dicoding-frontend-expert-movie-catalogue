!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var p=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:l,updater:m(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(n,e){var t,r,o;if(e.singleton){var i=v++;t=h||(h=s(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=s(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";var r=t(1),o=t.n(r)()((function(n){return n[1]}));o.push([n.i,'* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/*===AppBar=====*/\n.app-bar {\n  padding: 8px 16px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gab: 10;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar_menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar_brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar_brand h1 {\n  color: #db0000;\n  text-transform: uppercase;\n  font-size: 22px;\n  user-select: none;\n}\n\n.app-bar .app-bar_navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: white;\n  overflow: hidden;\n}\n\n.app-bar .app-bar_navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar_navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  padding: 8px;\n  margin-bottom: 5px;\n  width: 100%;\n}\n\n/*\n  Main Content\n*/\n\nmain {\n  padding: 32px;\n  flex: 1;\n}\n\n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content_heading {\n  font-weight: normal;\n}\n\n/*\n  Movies\n*/\n\n.movies {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n  Movie Item\n*/\n\n.movie-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.movie-item_header {\n  position: relative;\n}\n\n.movie-item .movie-item_header .movie-item_header_poster {\n  width: 100%;\n}\n\n.movie-item .movie-item_header .movie-item_header_rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.movie-item\n  .movie-item_header\n  .movie-item_header_rating\n  .movie-item_header_rating_score {\n  margin-left: 10px;\n}\n\n.movie-item .movie-item_content {\n  padding: 16px;\n}\n\n.movie-item .movie-item_content h3 {\n  margin: 0 0 10px 0;\n}\n\n.movie-item .movie-item_content h3 a {\n  color: #db0000;\n  text-decoration: none;\n}\n\n.movie-item .movie-item_content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n/*\n  Movie\n*/\n\n.movie {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.movie .movie_poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.movie .movie_info h4 {\n  margin: 8px 0;\n}\n\n/*\n  Footer\n*/\n\nfooter {\n  padding: 16px;\n}\n\nfooter p {\n  text-align: center;\n  color: #aaaaaa;\n}\n\nfooter p a {\n  color: #db0000;\n  text-decoration: none;\n}\n',""]),e.a=o},function(n,e,t){"use strict";var r=t(1),o=t.n(r)()((function(n){return n[1]}));o.push([n.i,"@media screen and (min-width: 650px) {\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n\n  .app-bar .app-bar_brand h1 {\n    font-size: 1.5em;\n  }\n\n  .app-bar .app-bar_menu {\n    display: none;\n  }\n\n  .app-bar .app-bar_navigation {\n    position: static;\n    width: 100%;\n  }\n\n  .app-bar .app-bar_navigation ul li {\n    display: inline-block;\n  }\n\n  .app-bar .app-bar_navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n\n  .movies {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .movie {\n    grid-template-columns: auto 1fr;\n  }\n\n  .movie .movie_title {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .movie .movie_overview {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .app-bar .app-bar_brand h1 {\n    font-size: 2em;\n  }\n}\n\n@media screen and (min-width: 850px) {\n  .movies {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .movies {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .movies {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n",""]),e.a=o},function(n,e,t){(function(n){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t=function(n){"use strict";var t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{u({},"")}catch(n){u=function(n,e,t){return n[e]=t}}function s(n,e,t,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(n,e,t){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=_(a,t);if(c){if(c===p)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var u=l(n,e,t);if("normal"===u.type){if(r=t.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r="completed",t.method="throw",t.arg=u.arg)}}}(n,t,a),i}function l(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var p={};function f(){}function d(){}function h(){}var v={};v[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&r.call(g,i)&&(v=g);var y=h.prototype=f.prototype=Object.create(v);function b(n){["next","throw","return"].forEach((function(e){u(n,e,(function(n){return this._invoke(e,n)}))}))}function w(n,t){var o;this._invoke=function(i,a){function c(){return new t((function(o,c){!function o(i,a,c,u){var s=l(n[i],n,a);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"===e(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){o("next",n,c,u)}),(function(n){o("throw",n,c,u)})):t.resolve(f).then((function(n){p.value=n,c(p)}),(function(n){return o("throw",n,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function _(n,e){var t=n.iterator[e.method];if(void 0===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,_(n,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(t,n.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[n.resultName]=o.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function L(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function k(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,o=function e(){for(;++t<n.length;)if(r.call(n,t))return e.value=n[t],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=u(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},b(w.prototype),w.prototype[a]=function(){return this},n.AsyncIterator=w,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(y),u(y,c,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=k,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function t(t,r){return a.type="throw",a.arg=n,e.next=t,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),p},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),L(t),p}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var o=r.arg;L(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:k(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},n}("object"===e(n)?n.exports:{});try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}).call(this,t(5)(n))},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,e,t){"use strict";t.r(e);t(4);var r=t(0),o=t.n(r),i=t(2),a={insert:"head",singleton:!1},c=(o()(i.a,a),i.a.locals,t(3)),u={insert:"head",singleton:!1},s=(o()(c.a,u),c.a.locals,{init:function(n){var e=this,t=n.button,r=n.drawer,o=n.content;t.addEventListener("click",(function(n){e._toggleDrawer(n,r)})),o.addEventListener("click",(function(n){e._closeDrawer(n,r)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}}),l={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},p={KEY:"32062d646a275282ed018d26015c22ec",BASE_URL:"https://api.themoviedb.org/3/",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500/",DEFAULT_LANGUAGE:"en-us"},f={NOW_PLAYING:"".concat(p.BASE_URL,"movie/now_playing?api_key=").concat(p.KEY,"&language=").concat(p.DEFAULT_LANGUAGE,"&page=1"),UPCOMING:"".concat(p.BASE_URL,"movie/upcoming?api_key=").concat(p.KEY,"&language=").concat(p.DEFAULT_LANGUAGE,"&page=1"),DETAIL:function(n){return"".concat(p.BASE_URL,"movie/").concat(n,"?api_key=").concat(p.KEY)}};function d(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){d(i,r,o,a,c,"next",n)}function c(n){d(i,r,o,a,c,"throw",n)}a(void 0)}))}}function v(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var m=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,o,i,a;return e=n,t=null,r=[{key:"nowPlayingMovies",value:(a=h(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(f.NOW_PLAYING);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)}))),function(){return a.apply(this,arguments)})},{key:"upcomingMovies",value:(i=h(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(f.UPCOMING);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailMovie",value:(o=h(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(f.DETAIL(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return o.apply(this,arguments)})}],t&&v(e.prototype,t),r&&v(e,r),n}(),g=function(n){return'\n  <h2 class="movie__title">'.concat(n.title,'</h2>\n  <img class="movie__poster" src="').concat(p.BASE_IMAGE_URL+n.poster_path,'" alt="').concat(n.title,'" />\n  <div class="movie__info">\n  <h3>Information</h3>\n    <h4>Tagline</h4>\n    <p>').concat(n.tagline,"</p>\n    <h4>Release Date</h4>\n    <p>").concat(n.release_date,"</p>\n    <h4>Duration</h4>\n    <p>").concat(n.runtime," minutes</p>\n    <h4>Rating</h4>\n    <p>").concat(n.vote_average,'</p>\n  </div>\n  <div class="movie__overview">\n    <h3>Overview</h3>\n    <p>').concat(n.overview,"</p>\n  </div>\n")},y=function(n){return'\n  <div class="movie-item">\n    <div class="movie-item__header">\n        <img class="movie-item__header__poster" alt="'.concat(n.title,'"\n            src="').concat(n.backdrop_path?p.BASE_IMAGE_URL+n.backdrop_path:"https://picsum.photos/id/666/800/450?grayscale",'">\n        <div class="movie-item__header__rating">\n            <p>⭐️<span class="movie-item__header__rating__score">').concat(n.vote_average,'</span></p>\n        </div>\n    </div>\n    <div class="movie-item__content">\n        <h3><a href="',"/#/detail/".concat(n.id),'">').concat(n.title,"</a></h3>\n        <p>").concat(n.overview,"</p>\n    </div>\n  </div>\n  ")};function b(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function w(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){b(i,r,o,a,c,"next",n)}function c(n){b(i,r,o,a,c,"throw",n)}a(void 0)}))}}var _={render:function(){return w(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return w(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.nowPlayingMovies();case 2:e=n.sent,t=document.querySelector("#movies"),e.forEach((function(n){t.innerHTML+=y(n)}));case 5:case"end":return n.stop()}}),n)})))()}};function x(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function L(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){x(i,r,o,a,c,"next",n)}function c(n){x(i,r,o,a,c,"throw",n)}a(void 0)}))}}function E(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function k(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){E(i,r,o,a,c,"next",n)}function c(n){E(i,r,o,a,c,"throw",n)}a(void 0)}))}}var S={"/":_,"/now-playing":_,"/upcoming":{render:function(){return L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return L(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.upcomingMovies();case 2:e=n.sent,t=document.querySelector("#movies"),e.forEach((function(n){t.innerHTML+=y(n)}));case 5:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return k(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="movie" class="movie"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return k(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.parseActiveUrlWithoutCombiner(),n.next=3,m.detailMovie(e.id);case 3:t=n.sent,document.querySelector("#movie").innerHTML=g(t);case 6:case"end":return n.stop()}}),n)})))()}}};function P(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function R(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var A=new(function(){function n(e){var t=e.button,r=e.drawer,o=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=o,this._initialAppShell()}var e,t,r,o,i;return e=n,(t=[{key:"_initialAppShell",value:function(){s.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.parseActiveUrlWithCombiner(),t=S[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),i=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=o.apply(n,e);function a(n){P(i,t,r,a,c,"next",n)}function c(n){P(i,t,r,a,c,"throw",n)}a(void 0)}))},function(){return i.apply(this,arguments)})}])&&R(e.prototype,t),r&&R(e,r),n}())({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){A.renderPage()})),window.addEventListener("load",(function(){A.renderPage()}))}]);