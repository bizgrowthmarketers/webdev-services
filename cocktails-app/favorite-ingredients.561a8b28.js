function e(e){return e&&e.__esModule?e.default:e}var t,n,i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s=t={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,h=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?h=c.concat(h):d=-1,h.length&&f())}function f(){if(!u){var e=l(p);u=!0;for(var t=h.length;t;){for(c=h,h=[];++d<t;)c&&c[d].run();d=-1,t=h.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new g(e,t)),1!==h.length||u||l(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=!1,v=!1,y="${JSCORE_VERSION}",b=function(e,t){if(!e)throw w(t)},w=function(e){return new Error("Firebase Database ("+y+") INTERNAL ASSERT FAILED: "+e)},E=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new I;const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T=function(e){const t=E(e);return C.encodeByteArray(t,!0)},S=function(e){return T(e).replace(/\./g,"")},k=function(e){try{return C.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){return N(void 0,e)}function N(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=N(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,A=()=>{try{return P()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&k(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},O=e=>{var t,n;return null===(n=null===(t=A())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=e=>{const t=O(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},L=e=>{var t;return null===(t=A())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function F(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function B(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function j(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function q(){const e=U();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function W(){return!0===_||!0===v}function H(){try{return"object"==typeof indexedDB}catch(e){return!1}}class $ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(V,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new $(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return JSON.parse(e)}function K(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Y(k(s[0])||""),n=Y(k(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},G=function(e){const t=X(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},J=function(e){const t=X(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ee(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ne(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(ie(n)&&ie(s)){if(!ne(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ie(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function se(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function oe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function le(e,t){const n=new ce(e,t);return n.subscribe.bind(n)}class ce{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=he),void 0===i.error&&(i.error=he),void 0===i.complete&&(i.complete=he);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function he(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,b(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},pe=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e){return e&&e._delegate?e._delegate:e}class ge{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new D;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class _e{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new me(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=[];var ye,be;(be=ye||(ye={}))[be.DEBUG=0]="DEBUG",be[be.VERBOSE=1]="VERBOSE",be[be.INFO=2]="INFO",be[be.WARN=3]="WARN",be[be.ERROR=4]="ERROR",be[be.SILENT=5]="SILENT";const we={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Ee=ye.INFO,Ce={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Ie=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Ce[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Te{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?we[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ee,this._logHandler=Ie,this._userLogHandler=null,ve.push(this)}}let Se,ke;const Re=new WeakMap,Ne=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,Oe=new WeakMap;let xe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Pe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Le(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ue(this),t),Me(Re.get(this))}:function(...t){return Me(e.apply(Ue(this),t))}:function(t,...n){const i=e.call(Ue(this),t,...n);return Pe.set(i,t.sort?t.sort():[t]),Me(i)}}function De(e){return"function"==typeof e?Le(e):(e instanceof IDBTransaction&&function(e){if(Ne.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ne.set(e,t)}(e),t=e,(Se||(Se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,xe):e);var t}function Me(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Me(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Re.set(t,e)})).catch((()=>{})),Oe.set(t,e),t}(e);if(Ae.has(e))return Ae.get(e);const t=De(e);return t!==e&&(Ae.set(e,t),Oe.set(t,e)),t}const Ue=e=>Oe.get(e);function Fe(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Me(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Me(o.result),e.oldVersion,e.newVersion,Me(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Be=["get","getKey","getAll","getAllKeys","count"],je=["put","add","delete","clear"],qe=new Map;function We(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(qe.get(t))return qe.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=je.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Be.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return qe.set(t,s),s}xe=(e=>({...e,get:(t,n,i)=>We(t,n)||e.get(t,n,i),has:(t,n)=>!!We(t,n)||e.has(t,n)}))(xe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const $e=new Te("@firebase/app"),ze={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ve=new Map,Ye=new Map;function Ke(e,t){try{e.container.addComponent(t)}catch(n){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(Ye.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const t of Ve.values())Ke(t,e);return!0}function Ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je=new z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Je.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=A())||void 0===s?void 0:s.config),!n)throw Je.create("no-options");const o=Ve.get(r);if(o){if(ne(n,o.options)&&ne(i,o.config))return o;throw Je.create("duplicate-app",{appName:r})}const a=new _e(r);for(const e of Ye.values())a.addComponent(e);const l=new Qe(n,i,a);return Ve.set(r,l),l}function et(e="[DEFAULT]"){const t=Ve.get(e);if(!t&&"[DEFAULT]"===e)return Ze();if(!t)throw Je.create("no-app",{appName:e});return t}function tt(e,t,n){var i;let r=null!==(i=ze[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $e.warn(e.join(" "))}Xe(new ge(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let nt=null;function it(){return nt||(nt=Fe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Je.create("idb-open",{originalErrorMessage:e.message})}))),nt}async function rt(e,t){try{const n=(await it()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,st(e)),n.done}catch(e){if(e instanceof $)$e.warn(e.message);else{const t=Je.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});$e.warn(t.message)}}}function st(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=at(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ct(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ct(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function at(){return(new Date).toISOString().substring(0,10)}class lt{async runIndexedDBEnvironmentCheck(){return!!H()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await it()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(st(e))}catch(e){if(e instanceof $)$e.warn(e.message);else{const t=Je.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});$e.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ct(e){return S(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;ht="",Xe(new ge("platform-logger",(e=>new He(e)),"PRIVATE")),Xe(new ge("heartbeat",(e=>new ot(e)),"PRIVATE")),tt("@firebase/app","0.9.4",ht),tt("@firebase/app","0.9.4","esm2017"),tt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tt("firebase","9.17.2","app");function ut(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function dt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pt=dt,ft=new z("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),gt=new Te("@firebase/auth");function mt(e,...t){gt.logLevel<=ye.ERROR&&gt.error(`Auth (9.17.2): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw bt(e,...t)}function vt(e,...t){return bt(e,...t)}function yt(e,t,n){const i=Object.assign(Object.assign({},pt()),{[t]:n});return new z("auth","Firebase",i).create(t,{appName:e.name})}function bt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ft.create(e,...t)}function wt(e,t,...n){if(!e)throw bt(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mt(t),new Error(t)}function Ct(e,t){e||Et(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map;function Tt(e){Ct(e instanceof Function,"Expected a class definition");let t=It.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,It.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function kt(){return"http:"===Rt()||"https:"===Rt()}function Rt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(kt()||B()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{get(){return Nt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=F()||j()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Lt=new Pt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mt(e,t,n,i,r={}){return Ut(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=re(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ot.fetch()(Bt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ut(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},xt),t);try{const t=new jt(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw qt(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw qt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw qt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw qt(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw yt(e,a,o);_t(e,a)}}catch(t){if(t instanceof $)throw t;_t(e,"internal-error",{message:String(t)})}}async function Ft(e,t,n,i,r={}){const s=await Mt(e,t,n,i,r);return"mfaPendingCredential"in s&&_t(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bt(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?At(e.config,r):`${e.config.apiScheme}://${r}`}class jt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(vt(this.auth,"network-request-failed"))),Lt.get())}))}}function qt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=vt(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return 1e3*Number(e)}function $t(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const e=k(n);return e?JSON.parse(e):(mt("Failed to decode base64 JWT payload"),null)}catch(e){return mt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await zt(e,async function(e,t){return Mt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));wt(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ut(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wt(e.idToken,"internal-error"),wt(void 0!==e.idToken,"internal-error"),wt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$t(e);return wt(t,"internal-error"),wt(void 0!==t.exp,"internal-error"),wt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ut(e,{},(async()=>{const n=re({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Bt(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ot.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Xt;return n&&(wt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(wt("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(wt("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return Et("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){wt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Jt{async getIdToken(e){const t=await zt(this,this.stsTokenManager.getToken(this.auth,e));return wt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=fe(e),i=await n.getIdToken(t),r=$t(i);wt(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Wt(Ht(r.auth_time)),issuedAtTime:Wt(Ht(r.iat)),expirationTime:Wt(Ht(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=fe(e);await Kt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Kt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zt(this,async function(e,t){return Mt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:E}=t;wt(v&&E,e,"internal-error");const C=Xt.fromJSON(this.name,E);wt("string"==typeof v,e,"internal-error"),Gt(h,e.name),Gt(u,e.name),wt("boolean"==typeof y,e,"internal-error"),wt("boolean"==typeof b,e,"internal-error"),Gt(d,e.name),Gt(p,e.name),Gt(f,e.name),Gt(g,e.name),Gt(m,e.name),Gt(_,e.name);const I=new Jt({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:C,createdAt:m,lastLoginAt:_});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new Xt;i.updateFromServerResponse(t);const r=new Jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Kt(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ut(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Qt.type="NONE";const Zt=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t,n){return`firebase:${e}:${t}:${n}`}class tn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tn(Tt(Zt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Tt(Zt);const s=en(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Jt._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new tn(r,e,n)):new tn(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=en(this.userKey,i.apiKey,r),this.fullPersistenceKey=en("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(an(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cn(t))return"Blackberry";if(hn(t))return"Webos";if(sn(t))return"Safari";if((t.includes("chrome/")||on(t))&&!t.includes("edge/"))return"Chrome";if(ln(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function rn(e=U()){return/firefox\//i.test(e)}function sn(e=U()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function on(e=U()){return/crios\//i.test(e)}function an(e=U()){return/iemobile/i.test(e)}function ln(e=U()){return/android/i.test(e)}function cn(e=U()){return/blackberry/i.test(e)}function hn(e=U()){return/webos/i.test(e)}function un(e=U()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dn(){return q()&&10===document.documentMode}function pn(e=U()){return un(e)||ln(e)||hn(e)||cn(e)||/windows phone/i.test(e)||an(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t=[]){let n;switch(e){case"Browser":n=nn(U());break;case"Worker":n=`${nn(U())}-${e}`;break;default:n=e}return`${n}/JsCore/9.17.2/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?fe(e):null;return t&&wt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&wt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Tt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new z("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;wt(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return wt(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vn(this),this.idTokenSubscription=new vn(this),this.beforeStateQueue=new gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ft,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function _n(e){return fe(e)}class vn{get next(){return wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=le((e=>this.observer=e))}}function yn(e,t,n){const i=_n(e);wt(i._canInitEmulator,i,"emulator-config-failed"),wt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=bn(t),{host:o,port:a}=function(e){const t=bn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:wn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:wn(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function bn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class En{toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){return Mt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends En{static _fromEmailAndPassword(e,t){return new In(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new In(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPassword",Dt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",Dt(e,t))}(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Cn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",Dt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t){return Ft(e,"POST","/v1/accounts:signInWithIdp",Dt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends En{static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ut(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Sn(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Tn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Tn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=re(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn extends En{static _fromVerification(e,t){return new Rn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Rn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,t));if(n.temporaryProof)throw qt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Dt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),kn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Rn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{static parseLink(e){const t=function(e){const t=se(oe(e)).link,n=t?se(oe(t)).deep_link_id:null,i=se(oe(e)).deep_link_id;return(i?se(oe(i)).link:null)||i||n||t||e}(e);try{return new Nn(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=se(oe(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);wt(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{static credential(e,t){return In._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Nn.parseLink(t);return wt(n,"argument-error"),In._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Pn.PROVIDER_ID}}Pn.PROVIDER_ID="password",Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends An{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn extends On{static credential(e){return Sn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com",xn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends On{static credential(e,t){return Sn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ln.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ln.GOOGLE_SIGN_IN_METHOD="google.com",Ln.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn extends On{static credential(e){return Sn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Dn.GITHUB_SIGN_IN_METHOD="github.com",Dn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn extends On{static credential(e,t){return Sn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com",Mn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Jt._fromIdTokenResponse(e,n,i),s=Fn(n);return new Un({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Fn(n);return new Un({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Fn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn extends ${static _fromErrorAndOperation(e,t,n,i){return new Bn(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Bn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function jn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(e,t,n=!1){const i=await zt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Un._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wn(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await zt(e,jn(i,r,t,e),n);wt(s.idToken,i,"internal-error");const o=$t(s.idToken);wt(o,i,"internal-error");const{sub:a}=o;return wt(e.uid===a,i,"user-mismatch"),Un._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&_t(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t,n=!1){const i="signIn",r=await jn(e,i,t),s=await Un._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends $n{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);dn()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=U();return sn(e)||un(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=pn(),this._shouldAllowMigration=!0}}zn.type="LOCAL";const Vn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends $n{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Yn.type="SESSION";const Kn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Xn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.receivers=[];class Jn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Gn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(){return void 0!==Qn().WorkerGlobalScope&&"function"==typeof Qn().importScripts}class ei{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ti(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ni(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ei(e).toPromise()}(),t(await ni()))}))}))}async function ii(e,t,n){const i=ti(e,!0).put({fbase_key:t,value:n});return new ei(i).toPromise()}function ri(e,t){const n=ti(e,!0).delete(t);return new ei(n).toPromise()}class si{async _openDb(){return this.db||(this.db=await ni()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xn._getInstance(Zn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Jn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ni();return await ii(e,"__sak","1"),await ri(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ii(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ti(e,!1).get(t),i=await new ei(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ri(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ti(e,!1).getAll();return new ei(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}si.type="LOCAL";const oi=si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=vt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function li(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
li("rcb"),new Pt(3e4,6e4);async function ci(e,t,n){var i;const r=await n.verify();try{let s;if(wt("string"==typeof r,e,"argument-error"),wt("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){wt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Mt(e,"POST","/v2/accounts/mfaEnrollment:start",Dt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{wt("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;wt(n,e,"missing-multi-factor-info");const o=await function(e,t){return Mt(e,"POST","/v2/accounts/mfaSignIn:start",Dt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Mt(e,"POST","/v1/accounts:sendVerificationCode",Dt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{verifyPhoneNumber(e,t){return ci(this.auth,e,fe(t))}static credential(e,t){return Rn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hi.credentialFromTaggedObject(t)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Rn._fromTokenResponse(t,n):null}constructor(e){this.providerId=hi.PROVIDER_ID,this.auth=_n(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ui(e,t){return t?Tt(t):(wt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.PROVIDER_ID="phone",hi.PHONE_SIGN_IN_METHOD="phone";class di extends En{_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function pi(e){return Hn(e.auth,new di(e),e.bypassAuthState)}function fi(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),Wn(n,new di(e),e.bypassAuthState)}async function gi(e){const{auth:t,user:n}=e;return wt(n,t,"internal-error"),qn(n,new di(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pi;case"linkViaPopup":case"linkViaRedirect":return gi;case"reauthViaPopup":case"reauthViaRedirect":return fi;default:_t(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Pt(2e3,1e4);class vi extends mi{async executeNotNull(){const e=await this.execute();return wt(e,this.auth,"internal-error"),e}async onExecution(){Ct(1===this.filter.length,"Popup operations only handle one event");const e=Gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(vt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,_i.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}}vi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yi=new Map;class bi extends mi{async execute(){let e=yi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ci(t),i=Ei(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function wi(e,t){yi.set(e._key(),t)}function Ei(e){return Tt(e._redirectPersistence)}function Ci(e){return en("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t,n=!1){const i=_n(e),r=ui(i,t),s=new bi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Ti{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ki(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ki(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(e))}saveEventToCache(e){this.cachedEventUids.add(Si(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Si(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ki({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Mt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ai(e))return}catch(e){}_t(e,"unauthorized-domain")}function Ai(e){const t=St(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ni.test(n))return!1;if(Ri.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Pt(3e4,6e4);function xi(){const e=Qn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Li=null;function Di(e){return Li=Li||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){xi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xi(),n(vt(e,"network-request-failed"))},timeout:Oi.get()})}if(null===(r=null===(i=Qn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Qn().gapi)||void 0===s?void 0:s.load)){const t=li("iframefcb");return Qn()[t]=()=>{gapi.load?o():n(vt(e,"network-request-failed"))},ai(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Li=null,e}))}(e),Li}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Pt(5e3,15e3),Ui={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bi(e){const t=e.config;wt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?At(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.17.2"},r=Fi.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${re(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ji={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Wi(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ji),{width:i.toString(),height:r.toString(),top:s,left:o}),c=U().toLowerCase();n&&(a=on(c)?"_blank":n),rn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=U()){var t;return un(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new qi(null);const u=window.open(t||"",a,h);wt(u,e,"popup-blocked");try{u.focus()}catch(e){}return new qi(u)}function Hi(e,t,n,i,r,s){wt(e.config.authDomain,e,"auth-domain-config-required"),wt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.17.2",eventId:r};if(t instanceof An){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ee(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof On){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?At(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${re(a).slice(1)}`}const $i=class{async _openPopup(e,t,n,i){var r;Ct(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Wi(e,Hi(e,t,n,St(),i),Gn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Hi(e,t,n,St(),i),Qn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ct(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Di(e),n=Qn().gapi;return wt(n,e,"internal-error"),t.open({where:document.body,url:Bi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ui,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=vt(e,"network-request-failed"),s=Qn().setTimeout((()=>{i(r)}),Mi.get());function o(){Qn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Ti(e);return t.register("authEvent",(t=>{wt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),_t(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pn()||sn()||un()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kn,this._completeRedirectFn=Ii,this._overrideRedirectResult=wi}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vi=L("authIdTokenMaxAge")||300;let Yi=null;var Ki;Ki="Browser",Xe(new ge("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{wt(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),wt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Ki,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fn(Ki)},o=new mn(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Tt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Xe(new ge("auth-internal",(e=>{const t=_n(e.getProvider("auth").getImmediate());return new zi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),tt("@firebase/auth","0.21.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ki)),tt("@firebase/auth","0.21.4","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Y(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gi(t)}}catch(e){}return new Ji},Zi=Qi("localStorage"),er=Qi("sessionStorage"),tr=new Te("@firebase/database"),nr=function(){let e=1;return function(){return e++}}(),ir=function(e){const t=de(e),n=new ae;n.update(t);const i=n.digest();return C.encodeByteArray(i)},rr=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=rr.apply(null,i):t+="object"==typeof i?K(i):i,t+=" "}return t};let sr=null,or=!0;const ar=function(e,t){b(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tr.logLevel=ye.VERBOSE,sr=tr.log.bind(tr),t&&er.set("logging_enabled",!0)):"function"==typeof e?sr=e:(sr=null,er.remove("logging_enabled"))},lr=function(...e){if(!0===or&&(or=!1,null===sr&&!0===er.get("logging_enabled")&&ar(!0)),sr){const t=rr.apply(null,e);sr(t)}},cr=function(e){return function(...t){lr(e,...t)}},hr=function(...e){const t="FIREBASE INTERNAL ERROR: "+rr(...e);tr.error(t)},ur=function(...e){const t=`FIREBASE FATAL ERROR: ${rr(...e)}`;throw tr.error(t),new Error(t)},dr=function(...e){const t="FIREBASE WARNING: "+rr(...e);tr.warn(t)},pr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},fr=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Er(e),i=Er(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},gr=function(e,t){return e===t?0:e<t?-1:1},mr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+K(t))},_r=function(e){if("object"!=typeof e||null===e)return K(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=K(t[i]),n+=":",n+=_r(e[t[i]]);return n+="}",n},vr=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function yr(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const br=function(e){b(!pr(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const wr=new RegExp("^-?(0*)\\d{1,10}$"),Er=function(e){if(wr.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Cr=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw dr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ir=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){dr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(lr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dr(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class kr{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}kr.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zi.get("host:"+e)||this._host}}function Pr(e,t,n){let i;if(b("string"==typeof t,"typeof type must == string"),b("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return yr(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{incrementCounter(e,t=1){Q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return R(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={},xr={};function Lr(e){const t=e.toString();return Or[t]||(Or[t]=new Ar),Or[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Cr((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(W()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ur(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Rr.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return!W()&&(!!Mr.forceAllow_||!(Mr.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=T(t),i=vr(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(W())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cr(e),this.stats_=Lr(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Pr(t,"long_polling",e))}}class Ur{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||lr("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){W()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{lr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,W())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=nr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ur.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){lr("frame writing exception"),e.stack&&lr(e.stack),lr(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr=null;"undefined"!=typeof MozWebSocket?Fr=MozWebSocket:"undefined"!=typeof WebSocket&&(Fr=WebSocket);class Br{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!W()&&"undefined"!=typeof location&&location.hostname&&Rr.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Pr(e,"websocket",s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zi.set("previous_websocket_failure",!0);try{let e;if(W()){const n=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Xi}/${t.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i={},r=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Fr(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Br.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Fr&&!Br.forceDisallow_}static previouslyFailed(){return Zi.isInMemoryStorage||!0===Zi.get("previous_websocket_failure")}markConnectionHealthy(){Zi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Y(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=vr(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cr(this.connId),this.stats_=Lr(t),this.connURL=Br.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}Br.responsesRequiredToBeHealthy=2,Br.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{static get ALL_TRANSPORTS(){return[Mr,Br]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Br&&Br.isAvailable();let n=t&&!Br.previouslyFailed();if(e.webSocketOnly&&(t||dr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Br];else{const e=this.transports_=[];for(const t of jr.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}jr.globalTransportInitialized_=!1;class qr{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ir((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mr("t",e),n=mr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mr("t",e),n=mr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mr("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?hr("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&dr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ir((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ir((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cr("c:"+this.id+":"),this.transportManager_=new jr(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){b(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Hr{static getInstance(){return new $r}getInitialEvent(e){return b("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||F()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Vr(){return new zr("")}function Yr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Kr(e){return e.pieces_.length-e.pieceNum_}function Xr(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new zr(e.pieces_,t)}function Gr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Jr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Qr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new zr(t,0)}function Zr(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof zr)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new zr(n,0)}function es(e){return e.pieceNum_>=e.pieces_.length}function ts(e,t){const n=Yr(e),i=Yr(t);if(null===n)return t;if(n===i)return ts(Xr(e),Xr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ns(e,t){if(Kr(e)!==Kr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function is(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Kr(e)>Kr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class rs{constructor(e,t){this.errorPrefix_=t,this.parts_=Jr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=pe(this.parts_[e]);ss(this)}}function ss(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+os(e))}function os(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Hr{static getInstance(){return new as}getInitialEvent(e){return b("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Wr{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(K(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new D,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;ls.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Q(e,"w")){const n=Z(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();dr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||J(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=G(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):hr("Unrecognized action received from server: "+K(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ls.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){b(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?lr("getToken() completed but was canceled"):(lr("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new qr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{dr(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&dr(e),a())}}}interrupt(e){lr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ee(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>_r(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new zr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){lr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";W()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Xi.replace(/\./g,"-")]=1,F()?e["framework.cordova"]=1:j()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$r.getInstance().currentlyOnline();return ee(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ls.nextPersistentConnectionId_++,this.log_=cr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!W())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");as.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&$r.getInstance().on("online",this.onOnline_,this)}}ls.nextPersistentConnectionId_=0,ls.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{static Wrap(e,t){return new cs(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new cs("[MIN_NAME]",e),i=new cs("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return cs.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class ds extends hs{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,t){return fr(e.name,t.name)}isDefinedOn(e){throw w("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return cs.MIN}maxPost(){return new cs("[MAX_NAME]",us)}makePost(e,t){return b("string"==typeof e,"KeyIndex indexValue must always be a string."),new cs(e,us)}toString(){return".key"}}const ps=new ds;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class gs{copy(e,t,n,i,r){return new gs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ms.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ms.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:gs.RED,this.left=null!=i?i:ms.EMPTY_NODE,this.right=null!=r?r:ms.EMPTY_NODE}}gs.RED=!0,gs.BLACK=!1;class ms{insert(e,t){return new ms(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,gs.BLACK,null,null))}remove(e){return new ms(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new fs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new fs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new fs(this.root_,null,this.comparator_,!0,e)}constructor(e,t=ms.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _s(e,t){return fr(e.name,t.name)}function vs(e,t){return fr(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;ms.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new gs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const bs=function(e){return"number"==typeof e?"number:"+br(e):"string:"+e},ws=function(e){if(e.isLeafNode()){const t=e.val();b("string"==typeof t||"number"==typeof t||"object"==typeof t&&Q(t,".sv"),"Priority must be a string or number.")}else b(e===ys||e.isEmpty(),"priority of unexpected type.");b(e===ys||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Es,Cs,Is;class Ts{static set __childrenNodeConstructor(e){Es=e}static get __childrenNodeConstructor(){return Es}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ts(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return es(e)?this:".priority"===Yr(e)?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ts.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Yr(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(b(".priority"!==n||1===Kr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ts.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xr(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?br(this.value_):this.value_,this.lazyHash_=ir(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ts.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ts.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ts.VALUE_TYPE_ORDER.indexOf(t),r=Ts.VALUE_TYPE_ORDER.indexOf(n);return b(i>=0,"Unknown leaf type: "+t),b(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Ts.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ws(this.priorityNode_)}}Ts.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ss=new class extends hs{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?fr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return cs.MIN}maxPost(){return new cs("[MAX_NAME]",new Ts("[PRIORITY-POST]",Is))}makePost(e,t){const n=Cs(e);return new cs(t,new Ts("[PRIORITY-POST]",n))}toString(){return".priority"}},ks=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ks,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Ns=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new gs(a,o.node,gs.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new gs(a,o.node,gs.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new gs(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,gs.BLACK):(a(i,gs.BLACK),a(i,gs.RED))}return s}(new Rs(e.length));return new ms(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;const As={};class Os{static get Default(){return b(As&&Ss,"ChildrenNode.ts has not been loaded"),Ps=Ps||new Os({".priority":As},{".priority":Ss}),Ps}get(e){const t=Z(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ms?t:null}hasIndex(e){return Q(this.indexSet_,e.toString())}addIndex(e,t){b(e!==ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(cs.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Ns(n,e.getCompare()):As;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Os(c,l)}addToIndexes(e,t){const n=te(this.indexes_,((n,i)=>{const r=Z(this.indexSet_,i);if(b(r,"Missing index implementation for "+i),n===As){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(cs.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Ns(n,r.getCompare())}return As}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new cs(e.name,i))),r.insert(e,e.node)}}));return new Os(n,this.indexSet_)}removeFromIndexes(e,t){const n=te(this.indexes_,(n=>{if(n===As)return n;{const i=t.get(e.name);return i?n.remove(new cs(e.name,i)):n}}));return new Os(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class Ls{static get EMPTY_NODE(){return xs||(xs=new Ls(new ms(vs),null,Os.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new Ls(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?xs:t}}getChild(e){const t=Yr(e);return null===t?this:this.getImmediateChild(t).getChild(Xr(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new cs(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?xs:this.priorityNode_;return new Ls(i,s,r)}}updateChild(e,t){const n=Yr(e);if(null===n)return t;{b(".priority"!==Yr(e)||1===Kr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Xr(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Ss,((s,o)=>{t[s]=o.val(e),n++,r&&Ls.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+bs(this.getPriority().val())+":"),this.forEachChild(Ss,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":ir(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new cs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new cs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new cs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,cs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,cs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===ps||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ls(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ss),n=t.getIterator(Ss);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===ps?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ws(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Ls.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ds=new class extends Ls{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ls.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ms(vs),Ls.EMPTY_NODE,Os.Default)}};Object.defineProperties(cs,{MIN:{value:new cs("[MIN_NAME]",Ls.EMPTY_NODE)},MAX:{value:new cs("[MAX_NAME]",Ds)}}),ds.__EMPTY_NODE=Ls.EMPTY_NODE,Ts.__childrenNodeConstructor=Ls,ys=Ds,function(e){Is=e}(Ds);function Ms(e,t=null){if(null===e)return Ls.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),b(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ts(e,Ms(t))}if(e instanceof Array){let n=Ls.EMPTY_NODE;return yr(e,((t,i)=>{if(Q(e,t)&&"."!==t.substring(0,1)){const e=Ms(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ms(t))}{const n=[];let i=!1;if(yr(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Ms(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new cs(e,r)))}})),0===n.length)return Ls.EMPTY_NODE;const r=Ns(n,_s,(e=>e.name),vs);if(i){const e=Ns(n,Ss.getCompare());return new Ls(r,Ms(t),new Os({".priority":e},{".priority":Ss}))}return new Ls(r,Ms(t),Os.Default)}}!function(e){Cs=e}(Ms);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us extends hs{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?fr(e.name,t.name):r}makePost(e,t){const n=Ms(e),i=Ls.EMPTY_NODE.updateChild(this.indexPath_,n);return new cs(t,i)}maxPost(){const e=Ls.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new cs("[MAX_NAME]",e)}toString(){return Jr(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,b(!es(e)&&".priority"!==Yr(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new class extends hs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?fr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return cs.MIN}maxPost(){return cs.MAX}makePost(e,t){const n=Ms(e);return new cs(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e){return{type:"value",snapshotNode:e}}function js(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function qs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ws(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{updateChild(e,t,n,i,r,s){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(qs(t,o)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(js(t,n)):s.trackChildChange(Ws(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ss,((e,i)=>{t.hasChild(e)||n.trackChildChange(qs(e,i))})),t.isLeafNode()||t.forEachChild(Ss,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ws(t,i,r))}else n.trackChildChange(js(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ls.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new cs(t,n))||(n=Ls.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ls.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ls.EMPTY_NODE);const r=this;return t.forEachChild(Ss,((e,t)=>{r.matches(new cs(e,t))||(i=i.updateImmediateChild(e,Ls.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Hs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new cs(t,n))||(n=Ls.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Ls.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Ls.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Ls.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Ls.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;b(o.numChildren()===this.limit_,"");const a=new cs(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(Ws(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(qs(t,e));const n=o.updateImmediateChild(t,Ls.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(js(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(qs(l.name,l.node)),r.trackChildChange(js(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Ls.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ss}copy(){const e=new Vs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ss}}function Ys(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ss?n="$priority":e.index_===Fs?n="$value":e.index_===ps?n="$key":(b(e.index_ instanceof Us,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=K(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=K(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+K(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=K(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+K(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ks(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ss&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Wr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Xs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ys(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Z(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Xs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ys(e._queryParams),n=e._path.toString(),i=new D;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+re(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Y(o.responseText)}catch(e){dr("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&dr("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=cr("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Ls.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){return{value:null,children:new Map}}function Qs(e,t,n){if(es(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Yr(t);e.children.has(i)||e.children.set(i,Js());Qs(e.children.get(i),t=Xr(t),n)}}function Zs(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Zs(i,new zr(t.toString()+"/"+e),n)}))}class eo{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&yr(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;yr(e,((e,i)=>{i>0&&Q(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ir(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new eo(e);const n=1e4+2e4*Math.random();Ir(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var no,io;function ro(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(io=no||(no={}))[io.OVERWRITE=0]="OVERWRITE",io[io.MERGE=1]="MERGE",io[io.ACK_USER_WRITE=2]="ACK_USER_WRITE",io[io.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class so{operationForChild(e){if(es(this.path)){if(null!=this.affectedTree.value)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new zr(e));return new so(Vr(),t,this.revert)}}return b(Yr(this.path)===e,"operationForChild called for unrelated child."),new so(Xr(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=no.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{operationForChild(e){return es(this.path)?new oo(this.source,Vr()):new oo(this.source,Xr(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=no.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{operationForChild(e){return es(this.path)?new ao(this.source,Vr(),this.snap.getImmediateChild(e)):new ao(this.source,Xr(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=no.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{operationForChild(e){if(es(this.path)){const t=this.children.subtree(new zr(e));return t.isEmpty()?null:t.value?new ao(this.source,Vr(),t.value):new lo(this.source,Vr(),t)}return b(Yr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,Xr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=no.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(es(e))return this.isFullyInitialized()&&!this.filtered_;const t=Yr(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uo(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw w("Should only compare child_ events.");const i=new cs(t.childName,t.snapshotNode),r=new cs(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function po(e,t){return{eventCache:e,serverCache:t}}function fo(e,t,n,i){return po(new co(t,n,i),e.serverCache)}function go(e,t,n,i){return po(e.eventCache,new co(t,n,i))}function mo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class yo{static fromObject(e){let t=new yo(null);return yr(e,((e,n)=>{t=t.set(new zr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Vr(),value:this.value};if(es(e))return null;{const n=Yr(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Xr(e),t);if(null!=r){return{path:Zr(new zr(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(es(e))return this;{const t=Yr(e),n=this.children.get(t);return null!==n?n.subtree(Xr(e)):new yo(null)}}set(e,t){if(es(e))return new yo(t,this.children);{const n=Yr(e),i=(this.children.get(n)||new yo(null)).set(Xr(e),t),r=this.children.insert(n,i);return new yo(this.value,r)}}remove(e){if(es(e))return this.children.isEmpty()?new yo(null):new yo(null,this.children);{const t=Yr(e),n=this.children.get(t);if(n){const i=n.remove(Xr(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new yo(null):new yo(this.value,r)}return this}}get(e){if(es(e))return this.value;{const t=Yr(e),n=this.children.get(t);return n?n.get(Xr(e)):null}}setTree(e,t){if(es(e))return t;{const n=Yr(e),i=(this.children.get(n)||new yo(null)).setTree(Xr(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new yo(this.value,r)}}fold(e){return this.fold_(Vr(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Zr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Vr(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(es(e))return null;{const i=Yr(e),r=this.children.get(i);return r?r.findOnPath_(Xr(e),Zr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Vr(),t)}foreachOnPath_(e,t,n){if(es(e))return this;{this.value&&n(t,this.value);const i=Yr(e),r=this.children.get(i);return r?r.foreachOnPath_(Xr(e),Zr(t,i),n):new yo(null)}}foreach(e){this.foreach_(Vr(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Zr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(vo||(vo=new ms(gr)),vo))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static empty(){return new bo(new yo(null))}constructor(e){this.writeTree_=e}}function wo(e,t,n){if(es(t))return new bo(new yo(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=ts(r,t);return s=s.updateChild(o,n),new bo(e.writeTree_.set(r,s))}{const i=new yo(n),r=e.writeTree_.setTree(t,i);return new bo(r)}}}function Eo(e,t,n){let i=e;return yr(n,((e,n)=>{i=wo(i,Zr(t,e),n)})),i}function Co(e,t){if(es(t))return bo.empty();{const n=e.writeTree_.setTree(t,new yo(null));return new bo(n)}}function Io(e,t){return null!=To(e,t)}function To(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ts(n.path,t)):null}function So(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ss,((e,n)=>{t.push(new cs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new cs(e,n.value))})),t}function ko(e,t){if(es(t))return e;{const n=To(e,t);return new bo(null!=n?new yo(n):e.writeTree_.subtree(t))}}function Ro(e){return e.writeTree_.isEmpty()}function No(e,t){return Po(Vr(),e.writeTree_,t)}function Po(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(b(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Po(Zr(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Zr(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e,t){return $o(t,e)}function Oo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));b(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&xo(t,i.path)?r=!1:is(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Do(e.allWrites,Lo,Vr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Co(e.visibleWrites,i.path);else{yr(i.children,(t=>{e.visibleWrites=Co(e.visibleWrites,Zr(i.path,t))}))}return!0}return!1}function xo(e,t){if(e.snap)return is(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&is(Zr(e.path,n),t))return!0;return!1}function Lo(e){return e.visible}function Do(e,t,n){let i=bo.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)is(n,e)?(t=ts(n,e),i=wo(i,t,s.snap)):is(e,n)&&(t=ts(e,n),i=wo(i,Vr(),s.snap.getChild(t)));else{if(!s.children)throw w("WriteRecord should have .snap or .children");if(is(n,e))t=ts(n,e),i=Eo(i,t,s.children);else if(is(e,n))if(t=ts(e,n),es(t))i=Eo(i,Vr(),s.children);else{const e=Z(s.children,Yr(t));if(e){const n=e.getChild(Xr(t));i=wo(i,Vr(),n)}}}}}return i}function Mo(e,t,n,i,r){if(i||r){const s=ko(e.visibleWrites,t);if(!r&&Ro(s))return n;if(r||null!=n||Io(s,Vr())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(is(e.path,t)||is(t,e.path))};return No(Do(e.allWrites,s,t),n||Ls.EMPTY_NODE)}return null}{const i=To(e.visibleWrites,t);if(null!=i)return i;{const i=ko(e.visibleWrites,t);if(Ro(i))return n;if(null!=n||Io(i,Vr())){return No(i,n||Ls.EMPTY_NODE)}return null}}}function Uo(e,t,n,i){return Mo(e.writeTree,e.treePath,t,n,i)}function Fo(e,t){return function(e,t,n){let i=Ls.EMPTY_NODE;const r=To(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Ss,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=ko(e.visibleWrites,t);return n.forEachChild(Ss,((e,t)=>{const n=No(ko(r,new zr(e)),t);i=i.updateImmediateChild(e,n)})),So(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return So(ko(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Bo(e,t,n,i){return function(e,t,n,i,r){b(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Zr(t,n);if(Io(e.visibleWrites,s))return null;{const t=ko(e.visibleWrites,s);return Ro(t)?r.getChild(n):No(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function jo(e,t){return function(e,t){return To(e.visibleWrites,t)}(e.writeTree,Zr(e.treePath,t))}function qo(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=ko(e.visibleWrites,t),c=To(l,Vr());if(null!=c)a=c;else{if(null==n)return[];a=No(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Wo(e,t,n){return function(e,t,n,i){const r=Zr(t,n),s=To(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return No(ko(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ho(e,t){return $o(Zr(e.treePath,t),e.writeTree)}function $o(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{trackChildChange(e){const t=e.type,n=e.childName;b("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),b(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ws(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,qs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,js(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw w("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ws(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Yo{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new co(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:_o(this.viewCache_),r=qo(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e,t,n,i,r){const s=new zo;let o,a;if(n.type===no.OVERWRITE){const l=n;l.source.fromUser?o=Jo(e,t,l.path,l.snap,i,r,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!es(l.path),o=Go(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===no.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Zr(n,i);Qo(t,Yr(c))&&(a=Jo(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Zr(n,i);Qo(t,Yr(c))||(a=Jo(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ea(e,t,l.path,l.children,i,r,a,s))}else if(n.type===no.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=jo(i,n))return t;{const a=new Yo(i,t,r),l=t.eventCache.getNode();let c;if(es(n)||".priority"===Yr(n)){let n;if(t.serverCache.isFullyInitialized())n=Uo(i,_o(t));else{const e=t.serverCache.getNode();b(e instanceof Ls,"serverChildren would be complete if leaf node"),n=Fo(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=Yr(n);let h=Wo(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,Xr(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,Ls.EMPTY_NODE,Xr(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Uo(i,_o(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=jo(i,Vr()),fo(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=jo(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(es(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Go(e,t,n,l.getNode().getChild(n),r,s,a,o);if(es(n)){let i=new yo(null);return l.getNode().forEachChild(ps,((e,t)=>{i=i.set(new zr(e),t)})),ea(e,t,n,i,r,s,a,o)}return t}{let c=new yo(null);return i.foreach(((e,t)=>{const i=Zr(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),ea(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==no.LISTEN_COMPLETE)throw w("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=go(t,s.getNode(),s.isFullyInitialized()||es(n),s.isFiltered());return Xo(e,o,n,i,Vo,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=mo(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Bs(mo(t)))}}(t,o,l),{viewCache:o,changes:l}}function Xo(e,t,n,i,r,s){const o=t.eventCache;if(null!=jo(i,n))return t;{let a,l;if(es(n))if(b(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=_o(t),r=Fo(i,n instanceof Ls?n:Ls.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Uo(i,_o(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Yr(n);if(".priority"===c){b(1===Kr(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=Bo(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=Xr(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Bo(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Wo(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return fo(t,a,o.isFullyInitialized()||es(n),e.filter.filtersNodes())}}function Go(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(es(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Yr(n);if(!l.isCompleteForPath(n)&&Kr(n)>1)return t;const r=Xr(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,Vo,null)}const u=go(t,c,l.isFullyInitialized()||es(n),h.filtersNodes());return Xo(e,u,n,r,new Yo(r,u,s),a)}function Jo(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new Yo(r,t,s);if(es(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=fo(t,c,!0,e.filter.filtersNodes());else{const r=Yr(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=fo(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Xr(n),c=a.getNode().getImmediateChild(r);let u;if(es(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Gr(s)&&e.getChild(Qr(s)).isEmpty()?e:e.updateChild(s,i):Ls.EMPTY_NODE}if(c.equals(u))l=t;else{l=fo(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Qo(e,t){return e.eventCache.isCompleteForChild(t)}function Zo(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ea(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=es(n)?i:new yo(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Zo(0,t.serverCache.getNode().getImmediateChild(n),i);c=Go(e,c,new zr(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Zo(0,t.serverCache.getNode().getImmediateChild(n),i);c=Go(e,c,new zr(n),l,r,s,o,a)}})),c}class ta{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Hs(n.getIndex()),r=(s=n).loadsAllData()?new Hs(s.getIndex()):s.hasLimit()?new zs(s):new $s(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Ls.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Ls.EMPTY_NODE,a.getNode(),null),h=new co(l,o.isFullyInitialized(),i.filtersNodes()),u=new co(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=po(u,h),this.eventGenerator_=new ho(this.query_)}}function na(e,t){const n=_o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!es(t)&&!n.getImmediateChild(Yr(t)).isEmpty())?n.getChild(t):null}function ia(e){return 0===e.eventRegistrations_.length}function ra(e,t,n){const i=[];if(n){b(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function sa(e,t,n,i){t.type===no.MERGE&&null!==t.source.queryId&&(b(_o(e.viewCache_),"We should always have a full cache before handling merges"),b(mo(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Ko(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,b(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),b(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),b(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,oa(e,s.changes,s.viewCache.eventCache.getNode(),null)}function oa(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),uo(e,r,"child_removed",t,i,n),uo(e,r,"child_added",t,i,n),uo(e,r,"child_moved",s,i,n),uo(e,r,"child_changed",t,i,n),uo(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa,la;class ca{constructor(){this.views=new Map}}function ha(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return b(null!=s,"SyncTree gave us an op for an invalid query."),sa(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(sa(s,t,n,i));return r}}function ua(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Uo(n,r?i:null),s=!1;e?s=!0:i instanceof Ls?(e=Fo(n,i),s=!1):(e=Ls.EMPTY_NODE,s=!1);const o=po(new co(e,s,!1),new co(i,r,!1));return new ta(t,o)}return o}function da(e,t,n,i,r,s){const o=ua(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ss,((e,t)=>{i.push(js(e,t))}));return n.isFullyInitialized()&&i.push(Bs(n.getNode())),oa(e,i,n.getNode(),t)}(o,n)}function pa(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=va(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(ra(r,n,i)),ia(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(ra(t,n,i)),ia(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!va(e)&&s.push(new(b(aa,"Reference.ts has not been loaded"),aa)(t._repo,t._path)),{removed:s,events:o}}function fa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ga(e,t){let n=null;for(const i of e.views.values())n=n||na(i,t);return n}function ma(e,t){if(t._queryParams.loadsAllData())return ya(e);{const n=t._queryIdentifier;return e.views.get(n)}}function _a(e,t){return null!=ma(e,t)}function va(e){return null!=ya(e)}function ya(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=1;class wa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yo(null),this.pendingWriteTree_={visibleWrites:bo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ea(e,t,n,i,r){return function(e,t,n,i,r){b(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=wo(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Na(e,new ao({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ca(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Oo(e.pendingWriteTree_,t)){let t=new yo(null);return null!=i.snap?t=t.set(Vr(),!0):yr(i.children,(e=>{t=t.set(new zr(e),!0)})),Na(e,new so(i.path,t,n))}return[]}function Ia(e,t,n){return Na(e,new ao({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ta(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||_a(o,t))){const l=pa(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>va(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&va(t)){return[ya(t)]}{let e=[];return t&&(e=fa(t)),yr(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Oa(e,i);e.listenProvider_.startListening(Fa(r),xa(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Fa(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(La(t));e.listenProvider_.stopListening(Fa(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=La(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Sa(e,t,n,i){const r=Da(e,i);if(null!=r){const i=Ma(r),s=i.path,o=i.queryId,a=ts(s,t);return Ua(e,s,new ao(ro(o),a,n))}return[]}function ka(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ts(e,r);s=s||ga(t,n),o=o||va(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||va(l),s=s||ga(l,Vr())):(l=new ca,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=Ls.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=ga(t,Vr());n&&(s=s.updateImmediateChild(e,n))}))}const c=_a(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=La(t);b(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ba++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=da(l,t,n,Ao(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!i){const n=ma(l,t);h=h.concat(function(e,t,n){const i=t._path,r=xa(e,t),s=Oa(e,n),o=e.listenProvider_.startListening(Fa(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)b(!va(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!es(e)&&t&&va(t))return[ya(t).query];{let e=[];return t&&(e=e.concat(fa(t).map((e=>e.query)))),yr(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Fa(i),xa(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function Ra(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=ga(n,ts(e,t));if(i)return i}));return Mo(i,t,r,n,!0)}function Na(e,t){return Pa(t,e.syncPointTree_,null,Ao(e.pendingWriteTree_,Vr()))}function Pa(e,t,n,i){if(es(e.path))return Aa(e,t,n,i);{const r=t.get(Vr());null==n&&null!=r&&(n=ga(r,Vr()));let s=[];const o=Yr(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ho(i,o);s=s.concat(Pa(a,l,e,t))}return r&&(s=s.concat(ha(r,e,i,n))),s}}function Aa(e,t,n,i){const r=t.get(Vr());null==n&&null!=r&&(n=ga(r,Vr()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Ho(i,t),l=e.operationForChild(t);l&&(s=s.concat(Aa(l,r,o,a)))})),r&&(s=s.concat(ha(r,e,i,n))),s}function Oa(e,t){const n=t.query,i=xa(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Ls.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Da(e,n);if(i){const n=Ma(i),r=n.path,s=n.queryId,o=ts(r,t);return Ua(e,r,new oo(ro(s),o))}return[]}(e,n._path,i):function(e,t){return Na(e,new oo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Ta(e,n,null,i)}}}}function xa(e,t){const n=La(t);return e.queryToTagMap.get(n)}function La(e){return e._path.toString()+"$"+e._queryIdentifier}function Da(e,t){return e.tagToQueryMap.get(t)}function Ma(e){const t=e.indexOf("$");return b(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new zr(e.substr(0,t))}}function Ua(e,t,n){const i=e.syncPointTree_.get(t);b(i,"Missing sync point for query tag that we're tracking");return ha(i,n,Ao(e.pendingWriteTree_,t),null)}function Fa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(b(la,"Reference.ts has not been loaded"),la)(e._repo,e._path):e}class Ba{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ba(t)}node(){return this.node_}constructor(e){this.node_=e}}class ja{getImmediateChild(e){const t=Zr(this.path_,e);return new ja(this.syncTree_,t)}node(){return Ra(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const qa=function(e,t,n){return e&&"object"==typeof e?(b(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Wa(e[".sv"],t,n):"object"==typeof e[".sv"]?Ha(e[".sv"],t):void b(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Wa=function(e,t,n){if("timestamp"===e)return n.timestamp;b(!1,"Unexpected server value: "+e)},Ha=function(e,t,n){e.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&b(!1,"Unexpected increment value: "+i);const r=t.node();if(b(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},$a=function(e,t,n,i){return Va(t,new ja(n,e),i)},za=function(e,t,n){return Va(e,new Ba(t),n)};function Va(e,t,n){const i=e.getPriority().val(),r=qa(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=qa(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Ts(s,Ms(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Ts(r))),i.forEachChild(Ss,((e,i)=>{const r=Va(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ka(e,t){let n=t instanceof zr?t:new zr(t),i=e,r=Yr(n);for(;null!==r;){const e=Z(i.node.children,r)||{children:{},childCount:0};i=new Ya(r,i,e),n=Xr(n),r=Yr(n)}return i}function Xa(e){return e.node.value}function Ga(e,t){e.node.value=t,tl(e)}function Ja(e){return e.node.childCount>0}function Qa(e,t){yr(e.node.children,((n,i)=>{t(new Ya(n,e,i))}))}function Za(e,t,n,i){n&&!i&&t(e),Qa(e,(e=>{Za(e,t,!0,i)})),n&&i&&t(e)}function el(e){return new zr(null===e.parent?e.name:el(e.parent)+"/"+e.name)}function tl(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Xa(e)&&!Ja(e)}(n),r=Q(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,tl(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,tl(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const nl=/[\[\].#$\/\u0000-\u001F\u007F]/,il=/[\[\].#$\u0000-\u001F\u007F]/,rl=function(e){return"string"==typeof e&&0!==e.length&&!nl.test(e)},sl=function(e){return"string"==typeof e&&0!==e.length&&!il.test(e)},ol=function(e,t,n){const i=n instanceof zr?new rs(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+os(i));if("function"==typeof t)throw new Error(e+"contains a function "+os(i)+" with contents = "+t.toString());if(pr(t))throw new Error(e+"contains "+t.toString()+" "+os(i));if("string"==typeof t&&t.length>10485760/3&&pe(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+os(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(yr(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!rl(t)))throw new Error(e+" contains an invalid key ("+t+") "+os(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=pe(a),ss(o),ol(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=pe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+os(i)+" in addition to actual children.")}},al=function(e,t,n,i){if(!(i&&void 0===n||sl(n)))throw new Error(ue(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ll=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),sl(e)}(n))throw new Error(ue(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hl(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||ns(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function ul(e,t,n){hl(e,n),pl(e,(e=>ns(e,t)))}function dl(e,t,n){hl(e,n),pl(e,(e=>is(e,t)||is(t,e)))}function pl(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(fl(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function fl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();sr&&lr("event: "+n.toString()),Cr(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Js(),this.transactionQueueTree_=new Ya,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function ml(e,t,n){if(e.stats_=Lr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Xs(e.repoInfo_,((t,n,i,r)=>{yl(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>bl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ls(e.repoInfo_,t,((t,n,i,r)=>{yl(e,t,n,i,r)}),(t=>{bl(e,t)}),(t=>{!function(e,t){yr(t,((t,n)=>{wl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return xr[n]||(xr[n]=t()),xr[n]}(e.repoInfo_,(()=>new to(e.stats_,e.server_))),e.infoData_=new Gs,e.infoSyncTree_=new wa({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ia(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),wl(e,"connected",!1),e.serverSyncTree_=new wa({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);dl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function _l(e){const t=e.infoData_.getNode(new zr(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function vl(e){return(t=(t={timestamp:_l(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function yl(e,t,n,i,r){e.dataUpdateCount++;const s=new zr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=te(n,(e=>Ms(e)));o=function(e,t,n,i){const r=Da(e,i);if(r){const i=Ma(r),s=i.path,o=i.queryId,a=ts(s,t),l=yo.fromObject(n);return Ua(e,s,new lo(ro(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Ms(n);o=Sa(e.serverSyncTree_,s,t,r)}else if(i){const t=te(n,(e=>Ms(e)));o=function(e,t,n){const i=yo.fromObject(n);return Na(e,new lo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Ms(n);o=Ia(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Rl(e,s)),dl(e.eventQueue_,a,o)}function bl(e,t){wl(e,"connected",t),!1===t&&function(e){Tl(e,"onDisconnectEvents");const t=vl(e),n=Js();Zs(e.onDisconnect_,Vr(),((i,r)=>{const s=$a(i,r,e.serverSyncTree_,t);Qs(n,i,s)}));let i=[];Zs(n,Vr(),((t,n)=>{i=i.concat(Ia(e.serverSyncTree_,t,n));const r=xl(e,t);Rl(e,r)})),e.onDisconnect_=Js(),dl(e.eventQueue_,Vr(),i)}(e)}function wl(e,t,n){const i=new zr("/.info/"+t),r=Ms(n);e.infoData_.updateSnapshot(i,r);const s=Ia(e.infoSyncTree_,i,r);dl(e.eventQueue_,i,s)}function El(e){return e.nextWriteId_++}function Cl(e,t,n){let i;i=".info"===Yr(t._path)?Ta(e.infoSyncTree_,t,n):Ta(e.serverSyncTree_,t,n),ul(e.eventQueue_,t._path,i)}function Il(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Tl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),lr(n,...t)}function Sl(e,t,n){return Ra(e.serverSyncTree_,t,n)||Ls.EMPTY_NODE}function kl(e,t=e.transactionQueueTree_){if(t||Ol(e,t),Xa(t)){const n=Pl(e,t);b(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Sl(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];b(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=ts(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Tl(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ca(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ol(e,Ka(e.transactionQueueTree_,t)),kl(e,e.transactionQueueTree_),dl(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Cr(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{dr("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Rl(e,t)}}),o)}(e,el(t),n)}else Ja(t)&&Qa(t,(t=>{kl(e,t)}))}function Rl(e,t){const n=Nl(e,t),i=el(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=ts(n,l.path);let h,u=!1;if(b(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(Ca(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(Ca(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Sl(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){ol("transaction failed: Data returned ",i,l.path);let t=Ms(i);"object"==typeof i&&null!=i&&Q(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=vl(e),c=za(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=El(e),s.splice(s.indexOf(o),1),r=r.concat(Ea(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(Ca(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(Ca(e.serverSyncTree_,l.currentWriteId,!0))}dl(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Ol(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Cr(i[e]);kl(e,e.transactionQueueTree_)}(e,Pl(e,n),i),i}function Nl(e,t){let n,i=e.transactionQueueTree_;for(n=Yr(t);null!==n&&void 0===Xa(i);)i=Ka(i,n),n=Yr(t=Xr(t));return i}function Pl(e,t){const n=[];return Al(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Al(e,t,n){const i=Xa(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Qa(t,(t=>{Al(e,t,n)}))}function Ol(e,t){const n=Xa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ga(t,n.length>0?n:void 0)}Qa(t,(t=>{Ol(e,t)}))}function xl(e,t){const n=el(Nl(e,t)),i=Ka(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Ll(e,t)})),Ll(e,i),Za(i,(t=>{Ll(e,t)})),n}function Ll(e,t){const n=Xa(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(b(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(b(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ca(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ga(t,void 0):n.length=s+1,dl(e.eventQueue_,el(t),r);for(let e=0;e<i.length;e++)Cr(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=function(e,t){const n=Ml(e),i=n.namespace;"firebase.com"===n.domain&&ur(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ur("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&dr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Nr(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new zr(n.pathString)}},Ml=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dr(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ul{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Fl{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{get key(){return es(this._path)?null:Gr(this._path)}get ref(){return new ql(this._repo,this._path)}get _queryIdentifier(){const e=Ks(this._queryParams),t=_r(e);return"{}"===t?"default":t}get _queryObject(){return Ks(this._queryParams)}isEqual(e){if(!((e=fe(e))instanceof jl))return!1;const t=this._repo===e._repo,n=ns(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class ql extends jl{get parent(){const e=Qr(this._path);return null===e?null:new ql(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Vs,!1)}}class Wl{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new zr(e),n=$l(this.ref,e);return new Wl(this._node.getChild(t),n,Ss)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Wl(n,$l(this.ref,t),Ss))))}hasChild(e){const t=new zr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Hl(e,t){return(e=fe(e))._checkNotDeleted("ref"),void 0!==t?$l(e._root,t):e._root}function $l(e,t){var n,i,r,s;return null===Yr((e=fe(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),al(n,i,r,s)):al("child","path",t,!1),new ql(e._repo,Zr(e._path,t))}class zl{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ul("value",this,new Wl(e.snapshotNode,new ql(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fl(this,e,t):null}matches(e){return e instanceof zl&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}class Vl{respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fl(this,e,t):null}createEvent(e,t){b(null!=e.childName,"Child events should have a childName.");const n=$l(new ql(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ul(e.type,this,new Wl(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vl&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}constructor(e,t){this.eventType=e,this.callbackContext=t}}function Yl(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Cl(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Bl(n,s||void 0),a="value"===t?new zl(o):new Vl(t,o);return function(e,t,n){let i;i=".info"===Yr(t._path)?ka(e.infoSyncTree_,t,n):ka(e.serverSyncTree_,t,n),ul(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Cl(e._repo,e,a)}function Kl(e,t,n,i){return Yl(e,"value",t,n,i)}!function(e){b(!aa,"__referenceConstructor has already been defined"),aa=e}(ql),function(e){b(!la,"__referenceConstructor has already been defined"),la=e}(ql);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xl={};let Gl=!1;function Jl(e,n,i,r,s){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||ur("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lr("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,l,c=Dl(o,s),h=c.repoInfo;void 0!==t&&t.env&&(l=t.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(a=!0,o=`http://${l}?ns=${h.namespace}`,c=Dl(o,s),h=c.repoInfo):a=!c.repoInfo.secure;const u=s&&a?new kr(kr.OWNER):new Sr(e.name,e.options,n);ll("Invalid Firebase Database URL",c),es(c.path)||ur("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Xl[t.name];r||(r={},Xl[t.name]=r);let s=r[e.toURLString()];s&&ur("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new gl(e,Gl,n,i),r[e.toURLString()]=s,s}(h,e,u,new Tr(e.name,i));return new Ql(d,e)}class Ql{get _repo(){return this._instanceStarted||(ml(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ql(this._repo,Vr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Xl[t];n&&n[e.key]===e||ur(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Il(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ur("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}ls.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ls.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Xi="9.17.2",Xe(new ge("database",((e,{instanceIdentifier:t})=>Jl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),tt("@firebase/database","0.14.4",e),tt("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var Zl,ec={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,Zl=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,s,o=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),s=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,s;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,r=n;n>=0&&r<s;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=s(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),s=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},h=r({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(s/2),(n=(t=Math.max(e-i,1))+s-1)>r&&(t=Math.max(r-s+1,1),n=r)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(h),e.exports=h},function(e,t,n){var i=n(0),r=n(14),s=n(4),o=n(16),a=n(2),l=n(5),c=n(3),h=/\s+/g;function u(){this.events=null,this.contexts=null}u.mixin=function(e){i(e.prototype,u.prototype)},u.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},u.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},u.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},u.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},u.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},u.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},u.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},u.prototype.on=function(e,t,n){var i=this;s(e)?(e=e.split(h),c(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},u.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},u.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},u.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},u.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},u.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,s=t===i.context,o=r&&s;return o&&n._forgetContext(i.context),o}},u.prototype._offByEventName=function(e,t){var n=this,i=l(t),r=n._matchHandler(t);e=e.split(h),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},u.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},u.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):s(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},u.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},u.prototype.fire=function(e){this.invoke.apply(this,arguments)},u.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},u.prototype.hasListener=function(e){return this.getListenerLength(e)>0},u.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=u},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),s=n(21),o=n(22),a=n(24),l=n(25),c=n(0),h=n(4),u=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],g=["prev","next"],m=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(h(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!u(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(f,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(f,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(g,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||l(t,this._firstItemClassName),n!==r||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,r=s(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),s=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=s(e,t),a=!1;r(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,s){i(t)?r(t.split(/\s+/g),(function(t){o(e,t,n,s)})):r(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?i(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),s=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,h=/\[\s?|\s?\]/,u=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,f=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],s=0,o=0;return r(t,(function(e,r){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,r)),o=r+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),s=!1,o="";return r(i.exps,(function(e,t){return(s=b(e,n))&&(o=w(i.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var i=b(e,n),o=s(i)?"@index":"@key",l={},c="";return r(i,(function(e,i){l[o]=i,l["@this"]=e,a(n,l),c+=w(t.slice(),n)})),c},with:function(e,t,n){var r=i("as",e),s=e[r+1],o=b(e.slice(0,r),n),l={};return l[s]=o,w(t,a(n,l))||""}},_=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(s,i)),s=i+n[0].length,n=t.exec(e);return r.push(e.slice(s)),r};function v(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(f,""):c.test(e)?i=v((n=e.split(h))[0],t)[v(n[1],t)]:u.test(e)?i=v((n=e.split(d))[0],t)[n[1]]:g.test(e)&&(i=parseFloat(e)),i}function y(e,t,n){for(var i,r,s,a,l=m[e],c=1,h=2,u=t[h];c&&o(u);)0===u.indexOf(e)?c+=1:0===u.indexOf("/"+e)&&(c-=1,i=h),u=t[h+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(r=0,s=i,(a=t.splice(r+1,s-r)).pop(),a),n),t}function b(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(v(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function w(e,t){for(var n,i,r,s=1,a=e[s];o(a);)i=(n=a.split(" "))[0],m[i]?(r=y(i,e.splice(s,e.length-s),t),e=e.concat(r)):e[s]=b(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(_(e,l),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},ec=Zl();const tc={galleryList:document.querySelector(".gallery-list"),galleryTitle:document.querySelector("h1.gallery-title"),paginationEl:document.querySelector("#tui-pagination-container"),errorSection:document.querySelector("[data-error-section]"),mainPageTitle:document.querySelector("h1.gallery-title")},nc=(window.location.pathname.replace("/goit_js_team_project",""),Ze({apiKey:"AIzaSyCTBJG-qoCxnqY0kLartne6JuIMgO3rCtI",authDomain:"exo-code.firebaseapp.com",projectId:"exo-code",storageBucket:"exo-code.appspot.com",messagingSenderId:"1058079447675",appId:"1:1058079447675:web:a8a6c524a829fb1f4160de",databaseURL:"https://exo-code-default-rtdb.europe-west1.firebasedatabase.app"})),ic=function(e=et()){const t=Ge(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ne(n.getOptions(),null!=t?t:{}))return e;_t(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:$i,persistence:[oi,Vn,Kn]}),i=L("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Vi)return;const i=null==t?void 0:t.token;Yi!==i&&(Yi=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){fe(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){fe(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=O("auth");return s&&yn(n,`http://${s}`),n}(nc),rc=function(e=et(),t){const n=Ge(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=x("database");e&&function(e,t,n,i={}){(e=fe(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ur("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ur('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new kr(kr.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:M(i.mockUserToken,e.app.options.projectId);s=new kr(t)}!function(e,t,n,i){e.repoInfo_=new Nr(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}(nc),sc=async()=>{let e=[];const t=Hl(rc,"favorites");return new Promise(((n,i)=>{const r=ic.currentUser;r||i(),Kl(t,(t=>{const i=t.val();for(const t in i)if(r&&r.uid===t){const n=i[t].cocktails;n&&(e.cocktails=n);const r=i[t].ingredients;r&&(e.ingredients=r)}n(e)}))}))};function oc(e,t,n){sc().then((i=>{e(i,t,n)})).catch((()=>e([],t,n)))}function ac(t,n,i){!function(t,n){const i=t.length,r=dc();uc(Math.ceil(i/r)),function(e){if(!e)return;tc.galleryTitle.classList.remove("visually-hidden"),tc.galleryList.classList.remove("visually-hidden")}(i),hc.totalItems=i,hc.itemsPerPage=r;const s=new(e(ec))(cc,hc);if(tc.galleryList.innerHTML=t.slice(0,r).join(""),"search"===n){document.getElementById("cards").scrollIntoView(),tc.mainPageTitle.textContent="Cocktails"}s.on("afterMove",(e=>{const n=(e.page-1)*r,i=n+r,s=t.slice(n,i);tc.galleryList.innerHTML=s.join("")}))}(n.map((({strDrinkThumb:e,strDrink:n,idDrink:i})=>{let r="",s="Add to";return 0!==Object.keys(t).length&&t.cocktails[i]&&(r='data-action="delete"',s="Remove"),`\n        <li class="gallery-item" id="cocktail-${i}">\n          <img class="gallery-item__img_margin gallery-item__img" src="${e}" alt="${n} photo" />\n          <h2 class="gallery-item__title gallery-item__title_margin">${n}</h2>\n          <div class="button-container">\n            <button class="button-more" type="button" data-cocktailid="${i}">Learn More</button>\n            <button class="button-favorite"\n              data-cocktailid="${i}" \n              data-add-remove-favorite="" \n              data-element-type="cocktail" \n              data-element-id="${i}" \n              data-element-image="${e}"\n              data-element-title="${n}"\n              data-favorite-button-${i}\n              type="button" ${r}>\n              <span>${s}</span>\n              <svg class="button-favorite__icon" xmlns="http://www.w3.org/2000/svg" width="21" height="19" fill="none"><path fill="#FD5103" d="m10.5 19-1.523-1.367C3.57 12.798 0 9.61 0 5.695 0 2.505 2.541 0 5.775 0c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0 1 15.225 0C18.459 0 21 2.506 21 5.695c0 3.914-3.57 7.103-8.977 11.949L10.5 19Z"/><path  d="m10.5 17-1.232-1.079C4.89 12.104 2 9.586 2 6.496 2 3.978 4.057 2 6.675 2c1.479 0 2.898.662 3.825 1.708A5.175 5.175 0 0 1 14.325 2C16.943 2 19 3.978 19 6.496c0 3.09-2.89 5.607-7.268 9.433L10.5 17Z"/></svg>\n            </button>\n          </div>\n        </li>\n      `})),i)}function lc(e,t){return oc(ac,e,t)}const cc=document.getElementById("tui-pagination-container"),hc={totalItems:0,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function uc(e){e>1?tc.paginationEl.classList.remove("visually-hidden"):tc.paginationEl.classList.add("visually-hidden"),tc.errorSection.classList.add("visually-hidden")}function dc(){const e=window.innerWidth;let t=3;return e>=768&&(t=6),e>=1280&&(t=9),t}({modals:document.querySelectorAll(".modal")}).modals.forEach((e=>{e.addEventListener("click",(t=>{(t.target.hasAttribute("data-modal-close")||t.target.hasAttribute("data-modal"))&&e.classList.toggle("is-hidden")}))}));var pc={};Object.defineProperty(pc,"__esModule",{value:!0});var fc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},gc=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};pc.default=function(e,t){var n=[],i=[];return function(){if(e&&e instanceof HTMLElement&&"SELECT"===e.tagName.toUpperCase())n.push(e);else if(e&&"string"==typeof e)for(var r=document.querySelectorAll(e),s=0,o=r.length;s<o;++s)r[s]instanceof HTMLElement&&"SELECT"===r[s].tagName.toUpperCase()&&n.push(r[s]);else if(e&&e.length)for(var a=0,l=e.length;a<l;++a)e[a]instanceof HTMLElement&&"SELECT"===e[a].tagName.toUpperCase()&&n.push(e[a]);for(var c=0,h=n.length;c<h;++c)i.push(yc(n[c],fc({},vc,t)));return i}()};try{var mc=new window.CustomEvent("test");if(mc.preventDefault(),!0!==mc.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var _c=function(e,t){var n,i;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};_c.prototype=window.Event.prototype,window.CustomEvent=_c}var vc={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"};function yc(e,t){var n="customSelect",i=!1,r="",s=e,o=void 0,a=void 0,l=void 0,c=void 0,h=void 0,u=void 0,d=void 0,p="";function f(e){l&&l.classList.remove(t.hasFocusClass),void 0!==e?((l=e).classList.add(t.hasFocusClass),i&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):l=void 0}function g(e){c&&(c.classList.remove(t.isSelectedClass),c.removeAttribute("id"),a.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(t.isSelectedClass),e.setAttribute("id","customSelect-"+r+"-selectedOption"),a.setAttribute("aria-activedescendant","customSelect-"+r+"-selectedOption"),c=e,a.children[0].textContent=c.customSelectOriginalOption.text):(c=void 0,a.children[0].textContent=""),f(e)}function m(e){var t=[].indexOf.call(s.options,l.customSelectOriginalOption);s.options[t+e]&&f(s.options[t+e].customSelectCstOption)}function _(e){if(e||void 0===e){var n=document.querySelector(".customSelect."+t.isOpenClass);n&&(n.customSelect.open=!1),o.classList.add(t.isOpenClass),o.classList.add(t.isOpenClass),a.setAttribute("aria-expanded","true"),c&&(h.scrollTop=c.offsetTop),o.dispatchEvent(new CustomEvent("custom-select:open")),i=!0}else o.classList.remove(t.isOpenClass),a.setAttribute("aria-expanded","false"),i=!1,f(c),o.dispatchEvent(new CustomEvent("custom-select:close"));return i}function v(e){e.target===a||a.contains(e.target)?i?_(!1):_():e.target.classList&&e.target.classList.contains(t.optionClass)&&h.contains(e.target)?(g(e.target),c.customSelectOriginalOption.selected=!0,_(!1),s.dispatchEvent(new CustomEvent("change"))):e.target===s?a!==document.activeElement&&s!==document.activeElement&&a.focus():i&&!o.contains(e.target)&&_(!1)}function y(e){e.target.classList&&e.target.classList.contains(t.optionClass)&&f(e.target)}function b(e){if(i)switch(e.keyCode){case 13:case 32:g(l),c.customSelectOriginalOption.selected=!0,s.dispatchEvent(new CustomEvent("change")),_(!1);break;case 27:_(!1);break;case 38:m(-1);break;case 40:m(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){d&&clearTimeout(d),d=setTimeout((function(){p=""}),1500),p+=String.fromCharCode(e.keyCode);for(var t=0,n=s.options.length;t<n;t++)if(s.options[t].text.toUpperCase().substr(0,p.length)===p){f(s.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||_()}function w(){var e=s.selectedIndex;g(-1===e?void 0:s.options[e].customSelectCstOption)}function E(e){var t=e.currentTarget,n=e.target;n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:t.scrollTop=n.offsetTop+n.clientHeight-t.clientHeight}function C(){document.addEventListener("click",v),h.addEventListener("mouseover",y),h.addEventListener("custom-select:focus-outside-panel",E),s.addEventListener("change",w),o.addEventListener("keydown",b)}function I(){document.removeEventListener("click",v),h.removeEventListener("mouseover",y),h.removeEventListener("custom-select:focus-outside-panel",E),s.removeEventListener("change",w),o.removeEventListener("keydown",b)}function T(e){var n=e,i=[];if(void 0===n.length)throw new TypeError("Invalid Argument");for(var r=0,s=n.length;r<s;r++)if(n[r]instanceof HTMLElement&&"OPTGROUP"===n[r].tagName.toUpperCase()){var o=document.createElement("div");o.classList.add(t.optgroupClass),o.setAttribute("data-label",n[r].label),o.customSelectOriginalOptgroup=n[r],n[r].customSelectCstOptgroup=o;for(var a=T(n[r].children),l=0,c=a.length;l<c;l++)o.appendChild(a[l]);i.push(o)}else{if(!(n[r]instanceof HTMLElement&&"OPTION"===n[r].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var h=document.createElement("div");h.classList.add(t.optionClass),h.textContent=n[r].text,h.setAttribute("data-value",n[r].value),h.setAttribute("role","option"),h.customSelectOriginalOption=n[r],n[r].customSelectCstOption=h,n[r].selected&&g(h),i.push(h)}return i}function S(e,t,n){var i=void 0;if(void 0===n||n===s)i=h;else{if(!(n instanceof HTMLElement&&"OPTGROUP"===n.tagName.toUpperCase()&&s.contains(n)))throw new TypeError("Invalid Argument");i=n.customSelectCstOptgroup}var r=e instanceof HTMLElement?[e]:e;if(t)for(var o=0,a=r.length;o<a;o++)i===h?s.appendChild(r[o]):i.customSelectOriginalOptgroup.appendChild(r[o]);for(var l=T(r),c=0,u=l.length;c<u;c++)i.appendChild(l[c]);return r}(o=document.createElement("div")).classList.add(t.containerClass,n),(a=document.createElement("span")).className=t.openerClass,a.setAttribute("role","combobox"),a.setAttribute("aria-autocomplete","list"),a.setAttribute("aria-expanded","false"),a.innerHTML="<span>\n   "+(-1!==s.selectedIndex?s.options[s.selectedIndex].text:"")+"\n   </span>",h=document.createElement("div");for(var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",R=0;R<5;R++)r+=k.charAt(Math.floor(Math.random()*k.length));return h.id="customSelect-"+r+"-panel",h.className=t.panelClass,h.setAttribute("role","listbox"),a.setAttribute("aria-owns",h.id),S(s.children,!1),o.appendChild(a),s.parentNode.replaceChild(o,s),o.appendChild(s),o.appendChild(h),document.querySelector('label[for="'+s.id+'"]')?u=document.querySelector('label[for="'+s.id+'"]'):"LABEL"===o.parentNode.tagName.toUpperCase()&&(u=o.parentNode),void 0!==u&&(u.setAttribute("id","customSelect-"+r+"-label"),a.setAttribute("aria-labelledby","customSelect-"+r+"-label")),s.disabled?o.classList.add(t.isDisabledClass):(a.setAttribute("tabindex","0"),s.setAttribute("tabindex","-1"),C()),o.customSelect={get pluginOptions(){return t},get open(){return i},set open(e){_(e)},get disabled(){return s.disabled},set disabled(e){!function(e){e&&!s.disabled?(o.classList.add(t.isDisabledClass),s.disabled=!0,a.removeAttribute("tabindex"),o.dispatchEvent(new CustomEvent("custom-select:disabled")),I()):!e&&s.disabled&&(o.classList.remove(t.isDisabledClass),s.disabled=!1,a.setAttribute("tabindex","0"),o.dispatchEvent(new CustomEvent("custom-select:enabled")),C())}(e)},get value(){return s.value},set value(e){var t,n;t=e,(n=s.querySelector("option[value='"+t+"']"))||(n=gc(s.options,1)[0]),n.selected=!0,g(s.options[s.selectedIndex].customSelectCstOption)},append:function(e,t){return S(e,!0,t)},insertBefore:function(e,t){return function(e,t){var n=void 0;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&s.contains(t))n=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&s.contains(t)))throw new TypeError("Invalid Argument");n=t.customSelectCstOptgroup}var i=T(e.length?e:[e]);return n.parentNode.insertBefore(i[0],n),t.parentNode.insertBefore(e.length?e[0]:e,t)}(e,t)},remove:function(e){var t=void 0;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&s.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&s.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var n=e.parentNode.removeChild(e);return w(),n},empty:function(){for(var e=[];s.children.length;)h.removeChild(h.children[0]),e.push(s.removeChild(s.children[0]));return g(),e},destroy:function(){for(var e=0,t=s.options.length;e<t;e++)delete s.options[e].customSelectCstOption;for(var n=s.getElementsByTagName("optgroup"),i=0,r=n.length;i<r;i++)delete n.customSelectCstOptgroup;return I(),o.parentNode.replaceChild(s,o)},opener:a,select:s,panel:h,container:o},s.customSelect=o.customSelect,o.customSelect}e(pc)(".select-letter .custom-select",{containerClass:"custom-select-container"});var bc={};const wc=document.querySelector("[data-mob-menu-open]"),Ec=document.querySelector("[data-modal-mob-menu]"),Cc=document.querySelector("[data-modal-mob-menu-cls]");wc.addEventListener("click",(()=>{Ec.classList.remove("visually-hidden")})),Cc.addEventListener("click",(()=>{Ec.classList.add("visually-hidden")}));const Ic=document.querySelector(".fav-desc-mob"),Tc=document.querySelector(".sub-menu-btn"),Sc=document.querySelector(".mob-menu-wrapper"),kc=document.querySelector(".mob-menu-fav-icon");function Rc(e,t){return function(){return e.apply(t,arguments)}}Tc.addEventListener("click",(e=>{Ic.classList.toggle("show-desc"),kc.classList.toggle("active")})),Sc.addEventListener("click",(e=>{}));const{toString:Nc}=Object.prototype,{getPrototypeOf:Pc}=Object,Ac=(Oc=Object.create(null),e=>{const t=Nc.call(e);return Oc[t]||(Oc[t]=t.slice(8,-1).toLowerCase())});var Oc;const xc=e=>(e=e.toLowerCase(),t=>Ac(t)===e),Lc=e=>t=>typeof t===e,{isArray:Dc}=Array,Mc=Lc("undefined");const Uc=xc("ArrayBuffer");const Fc=Lc("string"),Bc=Lc("function"),jc=Lc("number"),qc=e=>null!==e&&"object"==typeof e,Wc=e=>{if("object"!==Ac(e))return!1;const t=Pc(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Hc=xc("Date"),$c=xc("File"),zc=xc("Blob"),Vc=xc("FileList"),Yc=xc("URLSearchParams");function Kc(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),Dc(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function Xc(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Gc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:r,Jc=e=>!Mc(e)&&e!==Gc;const Qc=(Zc="undefined"!=typeof Uint8Array&&Pc(Uint8Array),e=>Zc&&e instanceof Zc);var Zc;const eh=xc("HTMLFormElement"),th=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nh=xc("RegExp"),ih=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Kc(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},rh={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var sh={isArray:Dc,isArrayBuffer:Uc,isBuffer:function(e){return null!==e&&!Mc(e)&&null!==e.constructor&&!Mc(e.constructor)&&Bc(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Nc.call(e)===t||Bc(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Uc(e.buffer),t},isString:Fc,isNumber:jc,isBoolean:e=>!0===e||!1===e,isObject:qc,isPlainObject:Wc,isUndefined:Mc,isDate:Hc,isFile:$c,isBlob:zc,isRegExp:nh,isFunction:Bc,isStream:e=>qc(e)&&Bc(e.pipe),isURLSearchParams:Yc,isTypedArray:Qc,isFileList:Vc,forEach:Kc,merge:function e(){const{caseless:t}=Jc(this)&&this||{},n={},i=(i,r)=>{const s=t&&Xc(n,r)||r;Wc(n[s])&&Wc(i)?n[s]=e(n[s],i):Wc(i)?n[s]=e({},i):Dc(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Kc(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(Kc(t,((t,i)=>{n&&Bc(t)?e[i]=Rc(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&Pc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Ac,kindOfTest:xc,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(Dc(e))return e;let t=e.length;if(!jc(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:eh,hasOwnProperty:th,hasOwnProp:th,reduceDescriptors:ih,freezeMethods:e=>{ih(e,((t,n)=>{if(Bc(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];Bc(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return Dc(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:Xc,global:Gc,isContextDefined:Jc,ALPHABET:rh,generateString:(e=16,t=rh.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&Bc(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(qc(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=Dc(e)?[]:{};return Kc(e,((e,t)=>{const s=n(e,i+1);!Mc(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function oh(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}sh.inherits(oh,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:sh.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ah=oh.prototype,lh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{lh[e]={value:e}})),Object.defineProperties(oh,lh),Object.defineProperty(ah,"isAxiosError",{value:!0}),oh.from=(e,t,n,i,r,s)=>{const o=Object.create(ah);return sh.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),oh.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var ch,hh,uh,dh=oh;hh=function(e){var t,n,i=wh(e),r=i[0],s=i[1],o=new _h(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=mh[e.charCodeAt(n)]<<18|mh[e.charCodeAt(n+1)]<<12|mh[e.charCodeAt(n+2)]<<6|mh[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=mh[e.charCodeAt(n)]<<2|mh[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=mh[e.charCodeAt(n)]<<10|mh[e.charCodeAt(n+1)]<<4|mh[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},uh=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Eh(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(gh[t>>2]+gh[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(gh[t>>10]+gh[t>>4&63]+gh[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var ph,fh,gh=[],mh=[],_h="undefined"!=typeof Uint8Array?Uint8Array:Array,vh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yh=0,bh=vh.length;yh<bh;++yh)gh[yh]=vh[yh],mh[vh.charCodeAt(yh)]=yh;function wh(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Eh(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(gh[(r=i)>>18&63]+gh[r>>12&63]+gh[r>>6&63]+gh[63&r]);return s.join("")}mh["-".charCodeAt(0)]=62,mh["_".charCodeAt(0)]=63,ph=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,d=n?-1:1,p=e[t+u];for(u+=d,s=p&(1<<-h)-1,p>>=-h,h+=a;h>0;s=256*s+e[t+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),s-=c}return(p?-1:1)*o*Math.pow(2,s-i)},fh=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,h=(1<<c)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:s-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*l-1)*Math.pow(2,r),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;e[n+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*g};const Ch="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;ch=Th;function Ih(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Th.prototype),t}function Th(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Rh(e)}return Sh(e,t,n)}function Sh(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Th.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Oh(e,t);let i=Ih(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(uu(e,Uint8Array)){const t=new Uint8Array(e);return Ph(t.buffer,t.byteOffset,t.byteLength)}return Nh(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(uu(e,ArrayBuffer)||e&&uu(e.buffer,ArrayBuffer))return Ph(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(uu(e,SharedArrayBuffer)||e&&uu(e.buffer,SharedArrayBuffer)))return Ph(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Th.from(i,t,n);const r=function(e){if(Th.isBuffer(e)){const t=0|Ah(e.length),n=Ih(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||du(e.length)?Ih(0):Nh(e);if("Buffer"===e.type&&Array.isArray(e.data))return Nh(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Th.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function kh(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Rh(e){return kh(e),Ih(e<0?0:0|Ah(e))}function Nh(e){const t=e.length<0?0:0|Ah(e.length),n=Ih(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function Ph(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Th.prototype),i}function Ah(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Oh(e,t){if(Th.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||uu(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return lu(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return cu(e).length;default:if(r)return i?-1:lu(e).length;t=(""+t).toLowerCase(),r=!0}}function xh(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Vh(this,t,n);case"utf8":case"utf-8":return Hh(this,t,n);case"ascii":return $h(this,t,n);case"latin1":case"binary":return zh(this,t,n);case"base64":return Wh(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yh(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function Lh(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function Dh(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),du(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=Th.from(t,i)),Th.isBuffer(t))return 0===t.length?-1:Mh(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Mh(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function Mh(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function Uh(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(du(i))return o;e[n+o]=i}return o}function Fh(e,t,n,i){return hu(lu(t,e.length-n),e,n,i)}function Bh(e,t,n,i){return hu(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function jh(e,t,n,i){return hu(cu(t),e,n,i)}function qh(e,t,n,i){return hu(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function Wh(e,t,n){return 0===t&&n===e.length?uh(e):uh(e.slice(t,n))}function Hh(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}Th.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Th.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Th.prototype,"parent",{enumerable:!0,get:function(){if(Th.isBuffer(this))return this.buffer}}),Object.defineProperty(Th.prototype,"offset",{enumerable:!0,get:function(){if(Th.isBuffer(this))return this.byteOffset}}),Th.poolSize=8192,Th.from=function(e,t,n){return Sh(e,t,n)},Object.setPrototypeOf(Th.prototype,Uint8Array.prototype),Object.setPrototypeOf(Th,Uint8Array),Th.alloc=function(e,t,n){return function(e,t,n){return kh(e),e<=0?Ih(e):void 0!==t?"string"==typeof n?Ih(e).fill(t,n):Ih(e).fill(t):Ih(e)}(e,t,n)},Th.allocUnsafe=function(e){return Rh(e)},Th.allocUnsafeSlow=function(e){return Rh(e)},Th.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Th.prototype},Th.compare=function(e,t){if(uu(e,Uint8Array)&&(e=Th.from(e,e.offset,e.byteLength)),uu(t,Uint8Array)&&(t=Th.from(t,t.offset,t.byteLength)),!Th.isBuffer(e)||!Th.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},Th.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Th.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Th.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Th.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(uu(t,Uint8Array))r+t.length>i.length?(Th.isBuffer(t)||(t=Th.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!Th.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},Th.byteLength=Oh,Th.prototype._isBuffer=!0,Th.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Lh(this,t,t+1);return this},Th.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Lh(this,t,t+3),Lh(this,t+1,t+2);return this},Th.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Lh(this,t,t+7),Lh(this,t+1,t+6),Lh(this,t+2,t+5),Lh(this,t+3,t+4);return this},Th.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Hh(this,0,e):xh.apply(this,arguments)},Th.prototype.toLocaleString=Th.prototype.toString,Th.prototype.equals=function(e){if(!Th.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Th.compare(this,e)},Th.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Ch&&(Th.prototype[Ch]=Th.prototype.inspect),Th.prototype.compare=function(e,t,n,i,r){if(uu(e,Uint8Array)&&(e=Th.from(e,e.offset,e.byteLength)),!Th.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},Th.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Th.prototype.indexOf=function(e,t,n){return Dh(this,e,t,n,!0)},Th.prototype.lastIndexOf=function(e,t,n){return Dh(this,e,t,n,!1)},Th.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return Uh(this,e,t,n);case"utf8":case"utf-8":return Fh(this,e,t,n);case"ascii":case"latin1":case"binary":return Bh(this,e,t,n);case"base64":return jh(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qh(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Th.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $h(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function zh(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Vh(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=pu[e[i]];return r}function Yh(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Kh(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Xh(e,t,n,i,r,s){if(!Th.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Gh(e,t,n,i,r){ru(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Jh(e,t,n,i,r){ru(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Qh(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Zh(e,t,n,i,r){return t=+t,n>>>=0,r||Qh(e,0,n,4),fh(e,t,n,i,23,4),n+4}function eu(e,t,n,i,r){return t=+t,n>>>=0,r||Qh(e,0,n,8),fh(e,t,n,i,52,8),n+8}Th.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Th.prototype),i},Th.prototype.readUintLE=Th.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Kh(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},Th.prototype.readUintBE=Th.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Kh(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},Th.prototype.readUint8=Th.prototype.readUInt8=function(e,t){return e>>>=0,t||Kh(e,1,this.length),this[e]},Th.prototype.readUint16LE=Th.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Kh(e,2,this.length),this[e]|this[e+1]<<8},Th.prototype.readUint16BE=Th.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Kh(e,2,this.length),this[e]<<8|this[e+1]},Th.prototype.readUint32LE=Th.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Th.prototype.readUint32BE=Th.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Th.prototype.readBigUInt64LE=fu((function(e){su(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ou(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Th.prototype.readBigUInt64BE=fu((function(e){su(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ou(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Th.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Kh(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},Th.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Kh(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},Th.prototype.readInt8=function(e,t){return e>>>=0,t||Kh(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Th.prototype.readInt16LE=function(e,t){e>>>=0,t||Kh(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Th.prototype.readInt16BE=function(e,t){e>>>=0,t||Kh(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Th.prototype.readInt32LE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Th.prototype.readInt32BE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Th.prototype.readBigInt64LE=fu((function(e){su(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ou(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Th.prototype.readBigInt64BE=fu((function(e){su(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ou(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Th.prototype.readFloatLE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),ph(this,e,!0,23,4)},Th.prototype.readFloatBE=function(e,t){return e>>>=0,t||Kh(e,4,this.length),ph(this,e,!1,23,4)},Th.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Kh(e,8,this.length),ph(this,e,!0,52,8)},Th.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Kh(e,8,this.length),ph(this,e,!1,52,8)},Th.prototype.writeUintLE=Th.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Xh(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},Th.prototype.writeUintBE=Th.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Xh(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},Th.prototype.writeUint8=Th.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,1,255,0),this[t]=255&e,t+1},Th.prototype.writeUint16LE=Th.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Th.prototype.writeUint16BE=Th.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Th.prototype.writeUint32LE=Th.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Th.prototype.writeUint32BE=Th.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Th.prototype.writeBigUInt64LE=fu((function(e,t=0){return Gh(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Th.prototype.writeBigUInt64BE=fu((function(e,t=0){return Jh(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Th.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Xh(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Th.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Xh(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Th.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Th.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Th.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Th.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Th.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Xh(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Th.prototype.writeBigInt64LE=fu((function(e,t=0){return Gh(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Th.prototype.writeBigInt64BE=fu((function(e,t=0){return Jh(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Th.prototype.writeFloatLE=function(e,t,n){return Zh(this,e,t,!0,n)},Th.prototype.writeFloatBE=function(e,t,n){return Zh(this,e,t,!1,n)},Th.prototype.writeDoubleLE=function(e,t,n){return eu(this,e,t,!0,n)},Th.prototype.writeDoubleBE=function(e,t,n){return eu(this,e,t,!1,n)},Th.prototype.copy=function(e,t,n,i){if(!Th.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},Th.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Th.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=Th.isBuffer(e)?e:Th.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const tu={};function nu(e,t,n){tu[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function iu(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function ru(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new tu.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){su(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ou(t,e.length-(n+1))}(i,r,s)}function su(e,t){if("number"!=typeof e)throw new tu.ERR_INVALID_ARG_TYPE(t,"number",e)}function ou(e,t,n){if(Math.floor(e)!==e)throw su(e,n),new tu.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new tu.ERR_BUFFER_OUT_OF_BOUNDS;throw new tu.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}nu("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),nu("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),nu("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=iu(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=iu(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const au=/[^+/0-9A-Za-z-_]/g;function lu(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function cu(e){return hh(function(e){if((e=(e=e.split("=")[0]).trim().replace(au,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function hu(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function uu(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function du(e){return e!=e}const pu=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function fu(e){return"undefined"==typeof BigInt?gu:e}function gu(){throw new Error("BigInt not supported")}var mu=ch;function _u(e){return sh.isPlainObject(e)||sh.isArray(e)}function vu(e){return sh.endsWith(e,"[]")?e.slice(0,-2):e}function yu(e,t,n){return e?e.concat(t).map((function(e,t){return e=vu(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const bu=sh.toFlatObject(sh,{},null,(function(e){return/^is[A-Z]/.test(e)}));var wu=function(e,t,n){if(!sh.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=sh.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!sh.isUndefined(t[e])}))).metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&sh.isSpecCompliantForm(t);if(!sh.isFunction(r))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(sh.isDate(e))return e.toISOString();if(!a&&sh.isBlob(e))throw new dh("Blob is not supported. Use a Buffer instead.");return sh.isArrayBuffer(e)||sh.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):mu.from(e):e}function c(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(sh.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(sh.isArray(e)&&function(e){return sh.isArray(e)&&!e.some(_u)}(e)||(sh.isFileList(e)||sh.endsWith(n,"[]"))&&(a=sh.toArray(e)))return n=vu(n),a.forEach((function(e,i){!sh.isUndefined(e)&&null!==e&&t.append(!0===o?yu([n],i,s):null===o?n:n+"[]",l(e))})),!1;return!!_u(e)||(t.append(yu(r,n,s),l(e)),!1)}const h=[],u=Object.assign(bu,{defaultVisitor:c,convertValue:l,isVisitable:_u});if(!sh.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!sh.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),sh.forEach(n,(function(n,s){!0===(!(sh.isUndefined(n)||null===n)&&r.call(t,n,sh.isString(s)?s.trim():s,i,u))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function Eu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Cu(e,t){this._pairs=[],e&&wu(e,this,t)}const Iu=Cu.prototype;Iu.append=function(e,t){this._pairs.push([e,t])},Iu.toString=function(e){const t=e?function(t){return e.call(this,t,Eu)}:Eu;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Tu=Cu;function Su(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ku(e,t,n){if(!t)return e;const i=n&&n.encode||Su,r=n&&n.serialize;let s;if(s=r?r(t,n):sh.isURLSearchParams(t)?t.toString():new Tu(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Ru=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){sh.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Nu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Pu={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Tu,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Au(e,t){return wu(e,new Pu.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return Pu.isNode&&sh.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var Ou=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&sh.isArray(i)?i.length:s,a)return sh.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&sh.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&sh.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(sh.isFormData(e)&&sh.isFunction(e.entries)){const n={};return sh.forEachEntry(e,((e,i)=>{t(function(e){return sh.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const xu={"Content-Type":void 0};const Lu={transitional:Nu,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=sh.isObject(e);r&&sh.isHTMLForm(e)&&(e=new FormData(e));if(sh.isFormData(e))return i&&i?JSON.stringify(Ou(e)):e;if(sh.isArrayBuffer(e)||sh.isBuffer(e)||sh.isStream(e)||sh.isFile(e)||sh.isBlob(e))return e;if(sh.isArrayBufferView(e))return e.buffer;if(sh.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Au(e,this.formSerializer).toString();if((s=sh.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return wu(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(sh.isString(e))try{return(t||JSON.parse)(e),sh.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Lu.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&sh.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw dh.from(e,dh.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pu.classes.FormData,Blob:Pu.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};sh.forEach(["delete","get","head"],(function(e){Lu.headers[e]={}})),sh.forEach(["post","put","patch"],(function(e){Lu.headers[e]=sh.merge(xu)}));var Du=Lu;const Mu=sh.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Uu=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&Mu[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Fu=Symbol("internals");function Bu(e){return e&&String(e).trim().toLowerCase()}function ju(e){return!1===e||null==e?e:sh.isArray(e)?e.map(ju):String(e)}function qu(e,t,n,i,r){return sh.isFunction(i)?i.call(this,t,n):(r&&(t=n),sh.isString(t)?sh.isString(i)?-1!==t.indexOf(i):sh.isRegExp(i)?i.test(t):void 0:void 0)}let Wu=Symbol.iterator,Hu=Symbol.toStringTag;class $u{set(e,t,n){const i=this;function r(e,t,n){const r=Bu(t);if(!r)throw new Error("header name must be a non-empty string");const s=sh.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=ju(e))}const s=(e,t)=>sh.forEach(e,((e,n)=>r(e,n,t)));return sh.isPlainObject(e)||e instanceof this.constructor?s(e,t):sh.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(Uu(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Bu(e)){const n=sh.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(sh.isFunction(t))return t.call(this,e,n);if(sh.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Bu(e)){const n=sh.findKey(this,e);return!(!n||void 0===this[n]||t&&!qu(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Bu(e)){const r=sh.findKey(n,e);!r||t&&!qu(0,n[r],r,t)||(delete n[r],i=!0)}}return sh.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!qu(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return sh.forEach(this,((i,r)=>{const s=sh.findKey(n,r);if(s)return t[s]=ju(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=ju(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return sh.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&sh.isArray(n)?n.join(", "):n)})),t}[Wu](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Hu](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Fu]=this[Fu]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Bu(e);t[i]||(!function(e,t){const n=sh.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return sh.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}$u.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),sh.freezeMethods($u.prototype),sh.freezeMethods($u);var zu=$u;function Vu(e,t){const n=this||Du,i=t||n,r=zu.from(i.headers);let s=i.data;return sh.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Yu(e){return!(!e||!e.__CANCEL__)}function Ku(e,t,n){dh.call(this,null==e?"canceled":e,dh.ERR_CANCELED,t,n),this.name="CanceledError"}sh.inherits(Ku,dh,{__CANCEL__:!0});var Xu=Ku;function Gu(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new dh("Request failed with status code "+n.status,[dh.ERR_BAD_REQUEST,dh.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ju=Pu.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),sh.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),sh.isString(i)&&o.push("path="+i),sh.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Qu(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Zu(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Qu(e,t):t}var ed=Pu.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=sh.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function td(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var nd=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-r<t)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};function id(e,t){let n=0;const i=nd(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var rd="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=zu.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}sh.isFormData(i)&&(Pu.isStandardBrowserEnv||Pu.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=Zu(e.baseURL,e.url);function h(){if(!l)return;const i=zu.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Gu((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ku(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(h)},l.onabort=function(){l&&(n(new dh("Request aborted",dh.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new dh("Network Error",dh.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Nu;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new dh(t,i.clarifyTimeoutError?dh.ETIMEDOUT:dh.ECONNABORTED,e,l)),l=null},Pu.isStandardBrowserEnv){const t=(e.withCredentials||ed(c))&&e.xsrfCookieName&&Ju.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&sh.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),sh.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",id(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",id(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new Xu(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const u=td(c);u&&-1===Pu.protocols.indexOf(u)?n(new dh("Unsupported protocol "+u+":",dh.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const sd={http:null,xhr:rd};sh.forEach(sd,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var od={getAdapter:e=>{e=sh.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=sh.isString(n)?sd[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new dh(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(sh.hasOwnProp(sd,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!sh.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:sd};function ad(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Xu(null,e)}function ld(e){ad(e),e.headers=zu.from(e.headers),e.data=Vu.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return od.getAdapter(e.adapter||Du.adapter)(e).then((function(t){return ad(e),t.data=Vu.call(e,e.transformResponse,t),t.headers=zu.from(t.headers),t}),(function(t){return Yu(t)||(ad(e),t&&t.response&&(t.response.data=Vu.call(e,e.transformResponse,t.response),t.response.headers=zu.from(t.response.headers))),Promise.reject(t)}))}const cd=e=>e instanceof zu?e.toJSON():e;function hd(e,t){t=t||{};const n={};function i(e,t,n){return sh.isPlainObject(e)&&sh.isPlainObject(t)?sh.merge.call({caseless:n},e,t):sh.isPlainObject(t)?sh.merge({},t):sh.isArray(t)?t.slice():t}function r(e,t,n){return sh.isUndefined(t)?sh.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!sh.isUndefined(t))return i(void 0,t)}function o(e,t){return sh.isUndefined(t)?sh.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(cd(e),cd(t),!0)};return sh.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=l[i]||r,o=s(e[i],t[i],i);sh.isUndefined(o)&&s!==a||(n[i]=o)})),n}const ud={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ud[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const dd={};ud.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new dh(i(r," has been removed"+(t?" in "+t:"")),dh.ERR_DEPRECATED);return t&&!dd[r]&&(dd[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var pd={assertOptions:function(e,t,n){if("object"!=typeof e)throw new dh("options must be an object",dh.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new dh("option "+s+" must be "+n,dh.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new dh("Unknown option "+s,dh.ERR_BAD_OPTION)}},validators:ud};const fd=pd.validators;class gd{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=hd(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&pd.assertOptions(n,{silentJSONParsing:fd.transitional(fd.boolean),forcedJSONParsing:fd.transitional(fd.boolean),clarifyTimeoutError:fd.transitional(fd.boolean)},!1),void 0!==i&&pd.assertOptions(i,{encode:fd.function,serialize:fd.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&sh.merge(r.common,r[t.method]),s&&sh.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=zu.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let h,u=0;if(!a){const e=[ld.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),h=e.length,c=Promise.resolve(t);u<h;)c=c.then(e[u++],e[u++]);return c}h=o.length;let d=t;for(u=0;u<h;){const e=o[u++],t=o[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=ld.call(this,d)}catch(e){return Promise.reject(e)}for(u=0,h=l.length;u<h;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ku(Zu((e=hd(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Ru,response:new Ru}}}sh.forEach(["delete","get","head","options"],(function(e){gd.prototype[e]=function(t,n){return this.request(hd(n||{},{method:e,url:t,data:(n||{}).data}))}})),sh.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(hd(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}gd.prototype[e]=t(),gd.prototype[e+"Form"]=t(!0)}));var md=gd;class _d{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new _d((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Xu(e,i,r),t(n.reason))}))}}var vd=_d;const yd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yd).forEach((([e,t])=>{yd[t]=e}));var bd=yd;const wd=function e(t){const n=new md(t),i=Rc(md.prototype.request,n);return sh.extend(i,md.prototype,n,{allOwnKeys:!0}),sh.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(hd(t,n))},i}(Du);wd.Axios=md,wd.CanceledError=Xu,wd.CancelToken=vd,wd.isCancel=Yu,wd.VERSION="1.3.4",wd.toFormData=wu,wd.AxiosError=dh,wd.Cancel=wd.CanceledError,wd.all=function(e){return Promise.all(e)},wd.spread=function(e){return function(t){return e.apply(null,t)}},wd.isAxiosError=function(e){return sh.isObject(e)&&!0===e.isAxiosError},wd.mergeConfig=hd,wd.AxiosHeaders=zu,wd.formToJSON=e=>Ou(sh.isHTMLForm(e)?new FormData(e):e),wd.HttpStatusCode=bd,wd.default=wd;var Ed=wd;const{Axios:Cd,AxiosError:Id,CanceledError:Td,isCancel:Sd,CancelToken:kd,VERSION:Rd,all:Nd,Cancel:Pd,isAxiosError:Ad,spread:Od,toFormData:xd,AxiosHeaders:Ld,HttpStatusCode:Dd,formToJSON:Md,mergeConfig:Ud}=Ed,Fd=({cocktailId:e})=>Ed.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`),Bd=({ingredientName:e})=>Ed.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`);const jd=e=>{const t=Ed.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`),n=Ed.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e}`);return Promise.all([t,n])},qd=(e,{id:t,title:n,image:i,instructions:r,ingredients:s})=>{let o="",a="Add to favorite";0!==Object.keys(e).length&&e.cocktails[t]&&(o='data-action="delete"',a="Remove from favorite");const l=`\n          </ul>\n        </div>\n      </div>\n\n      \x3c!--------- Instructions shown in tablet and desktop ---------\x3e\n      <div class="modal-cocktail__tabinstructions">\n        <h3 class="modal-cocktail__subtitle hidden-in-mobile">Instructions:</h3>\n        <p class="hidden-in-mobile modal-cocktail__text">\n          ${r}\n        </p>\n      </div>\n      \x3c!--------- Instructions shown in tablet and desktop ---------\x3e\n\n      <div\n        class="modal-cocktail-button-wrapper"\n      >\n        \x3c!--------- Add to favorite button ---------\x3e\n        <button\n          type="button"\n          class="button-more button-modal-cocktail"\n          data-add-remove-favorite\n          data-cocktailid="${t}"\n          data-element-type="cocktail"\n          data-element-id="${t}"\n          data-element-image="${i}"\n          data-element-title="${n}"\n          ${o}\n        >\n          ${a}\n        </button>\n        \x3c!--------- Add to favorite button ---------\x3e\n      </div>\n    </div>\n  `;return`\n    <div class="modal-cocktail__content">\n      \x3c!--------- Name and Instructions for mobile version ---------\x3e\n      <div>\n        <h2 class="modal-cocktail__title hidden-in-tablet">${n}</h2>\n        <h3 class="modal-cocktail__subtitle hidden-in-tablet">Instructions:</h3>\n        <p class="modal-cocktail__text">\n          ${r}\n        </p>\n      </div>\n      \x3c!--------- Name and Instructions for mobile version---------\x3e\n\n      <div class="modal-cocktail__card">\n        <img\n          class="modal-cocktail__img"\n          src="${i}"\n          alt="${n}"\n          width="280px"\n          height="280px"\n        />\n\n        <div class="modal-cocktail__bigcard">\n          <h2 class="modal-cocktail__title hidden-in-mobile">${n}</h2>\n          <h3 class="sub-ingredients">Ingredients:</h3>\n          <p class="modal-cocktail__smalltitle">Per cocktail</p>\n          <ul class="modal-cocktail__list">\n  `+s.map((e=>`<li class="lish">\n        <a\n          href="#"\n          class="modal-cocktail__link"\n          data-ingredientname="${e}"\n          >✶ ${e}</a\n        >\n      </li>`)).join("")+l},Wd=(e,{id:t,title:n,country:i,subtitle:r,description:s,type:o,ingredient:a,abv:l})=>{let c="",h="Add to favorite";0!==Object.keys(e).length&&e.ingredients[t]&&(c='data-action="delete"',h="Remove from favorite");let u="";o&&(u=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Type: ${o}\n      </li>\n    `);let d="";i&&(d=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Country of\n        origin: ${i}\n      </li>\n    `);let p="";l&&(p=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Alcohol by\n        volume: ${l}\n      </li>\n    `);let f="";a&&(f=`\n      <li class="modal-ingr__list__item">\n        <span class="modal-ingr__list__item__star">✶ </span>Flavour: ${a},\n        spicy and sweet\n      </li>\n    `);return`\n    <div class="modal-ingr__content" id="ingredient-${t}">\n      <h2 class="modal-ingr__title ingr-title">${n}</h2>\n      <h3 class="modal-ingr__subtitle ingr-subtitle">${o||""}</h3>\n      <div class="modal-ingr__horiontal-line"></div>\n      <div>\n        <p class="modal-ingr__description">\n          ${s||""}\n        </p>\n        <ul class="modal-ingr__list">\n  `+(u+d+p+f)+`\n        </ul>\n      </div>\n      <div\n        class="modal-ingr__btns"\n      >\n        <button\n          type="button"\n          class="button-more modal-ingr__btn"\n          data-add-remove-favorite\n          data-ingredientid="${t}"\n          ${c}\n          data-element-type="ingredient"\n          data-element-id="${t}"\n          data-element-title="${n}"\n          data-element-subtitle="${o}"\n        >\n          ${h}\n        </button>\n      </div>\n    </div>\n  `},Hd="\n  <div data-loader='' class=\"loader-type1\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n";
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function $d(e){return getComputedStyle(e)}function zd(e,t){for(var n in t){var i=t[n];"number"==typeof i&&(i+="px"),e.style[n]=i}return e}function Vd(e){var t=document.createElement("div");return t.className=e,t}var Yd="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function Kd(e,t){if(!Yd)throw new Error("No element matching method supported");return Yd.call(e,t)}function Xd(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function Gd(e,t){return Array.prototype.filter.call(e.children,(function(e){return Kd(e,t)}))}var Jd="ps",Qd="ps__rtl",Zd={thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},ep={focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}},tp={x:null,y:null};function np(e,t){var n=e.element.classList,i=ep.scrolling(t);n.contains(i)?clearTimeout(tp[t]):n.add(i)}function ip(e,t){tp[t]=setTimeout((function(){return e.isAlive&&e.element.classList.remove(ep.scrolling(t))}),e.settings.scrollingThreshold)}var rp=function(e){this.element=e,this.handlers={}},sp={isEmpty:{configurable:!0}};rp.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1)},rp.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter((function(i){return!(!t||i===t)||(n.element.removeEventListener(e,i,!1),!1)}))},rp.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)},sp.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every((function(t){return 0===e.handlers[t].length}))},Object.defineProperties(rp.prototype,sp);var op=function(){this.eventElements=[]};function ap(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function lp(e,t,n,i,r){var s;if(void 0===i&&(i=!0),void 0===r&&(r=!1),"top"===t)s=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");s=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(e,t,n,i,r){var s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5];void 0===i&&(i=!0);void 0===r&&(r=!1);var u=e.element;e.reach[l]=null,u[a]<1&&(e.reach[l]="start");u[a]>e[s]-e[o]-1&&(e.reach[l]="end");t&&(u.dispatchEvent(ap("ps-scroll-"+l)),t<0?u.dispatchEvent(ap("ps-scroll-"+c)):t>0&&u.dispatchEvent(ap("ps-scroll-"+h)),i&&function(e,t){np(e,t),ip(e,t)}(e,l));e.reach[l]&&(t||r)&&u.dispatchEvent(ap("ps-"+l+"-reach-"+e.reach[l]))}(e,n,s,i,r)}function cp(e){return parseInt(e,10)||0}op.prototype.eventElement=function(e){var t=this.eventElements.filter((function(t){return t.element===e}))[0];return t||(t=new rp(e),this.eventElements.push(t)),t},op.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n)},op.prototype.unbind=function(e,t,n){var i=this.eventElement(e);i.unbind(t,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},op.prototype.unbindAll=function(){this.eventElements.forEach((function(e){return e.unbindAll()})),this.eventElements=[]},op.prototype.once=function(e,t,n){var i=this.eventElement(e),r=function(e){i.unbind(t,r),n(e)};i.bind(t,r)};var hp={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function up(e){var t=e.element,n=Math.floor(t.scrollTop),i=t.getBoundingClientRect();e.containerWidth=Math.round(i.width),e.containerHeight=Math.round(i.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(Gd(t,Zd.rail("x")).forEach((function(e){return Xd(e)})),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(Gd(t,Zd.rail("y")).forEach((function(e){return Xd(e)})),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=dp(e,cp(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=cp((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=dp(e,cp(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=cp(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),function(e,t){var n={width:t.railXWidth},i=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft;t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-i:n.top=t.scrollbarXTop+i;zd(t.scrollbarXRail,n);var r={top:i,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?r.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:r.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?r.left=t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:r.left=t.scrollbarYLeft+e.scrollLeft;zd(t.scrollbarYRail,r),zd(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),zd(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}(t,e),e.scrollbarXActive?t.classList.add(ep.active("x")):(t.classList.remove(ep.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=!0===e.isRtl?e.contentWidth:0),e.scrollbarYActive?t.classList.add(ep.active("y")):(t.classList.remove(ep.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function dp(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function pp(e,t){var n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=e.element,d=null,p=null,f=null;function g(t){t.touches&&t.touches[0]&&(t[r]=t.touches[0].pageY),u[l]=d+f*(t[r]-p),np(e,c),up(e),t.stopPropagation(),t.type.startsWith("touch")&&t.changedTouches.length>1&&t.preventDefault()}function m(){ip(e,c),e[h].classList.remove(ep.clicking),e.event.unbind(e.ownerDocument,"mousemove",g)}function _(t,o){d=u[l],o&&t.touches&&(t[r]=t.touches[0].pageY),p=t[r],f=(e[i]-e[n])/(e[s]-e[a]),o?e.event.bind(e.ownerDocument,"touchmove",g):(e.event.bind(e.ownerDocument,"mousemove",g),e.event.once(e.ownerDocument,"mouseup",m),t.preventDefault()),e[h].classList.add(ep.clicking),t.stopPropagation()}e.event.bind(e[o],"mousedown",(function(e){_(e)})),e.event.bind(e[o],"touchstart",(function(e){_(e,!0)}))}var fp={"click-rail":function(e){e.element,e.event.bind(e.scrollbarY,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarYRail,"mousedown",(function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,up(e),t.stopPropagation()})),e.event.bind(e.scrollbarX,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarXRail,"mousedown",(function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,up(e),t.stopPropagation()}))},"drag-thumb":function(e){pp(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),pp(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(e){var t=e.element;e.event.bind(e.ownerDocument,"keydown",(function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(Kd(t,":hover")||Kd(e.scrollbarX,":focus")||Kd(e.scrollbarY,":focus"))){var i,r=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(r){if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(Kd(i=r,"input,[contenteditable]")||Kd(i,"select,[contenteditable]")||Kd(i,"textarea,[contenteditable]")||Kd(i,"button,[contenteditable]"))return}var s=0,o=0;switch(n.which){case 37:s=n.metaKey?-e.contentWidth:n.altKey?-e.containerWidth:-30;break;case 38:o=n.metaKey?e.contentHeight:n.altKey?e.containerHeight:30;break;case 39:s=n.metaKey?e.contentWidth:n.altKey?e.containerWidth:30;break;case 40:o=n.metaKey?-e.contentHeight:n.altKey?-e.containerHeight:-30;break;case 32:o=n.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:o=e.containerHeight;break;case 34:o=-e.containerHeight;break;case 36:o=e.contentHeight;break;case 35:o=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&0!==s||e.settings.suppressScrollY&&0!==o||(t.scrollTop-=o,t.scrollLeft+=s,up(e),function(n,i){var r=Math.floor(t.scrollTop);if(0===n){if(!e.scrollbarYActive)return!1;if(0===r&&i>0||r>=e.contentHeight-e.containerHeight&&i<0)return!e.settings.wheelPropagation}var s=t.scrollLeft;if(0===i){if(!e.scrollbarXActive)return!1;if(0===s&&n<0||s>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}(s,o)&&n.preventDefault())}}))},wheel:function(e){var t=e.element;function n(n){var i=function(e){var t=e.deltaX,n=-1*e.deltaY;return void 0!==t&&void 0!==n||(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!=t&&n!=n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n]}(n),r=i[0],s=i[1];if(!function(e,n,i){if(!hp.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(e))return!1;for(var r=e;r&&r!==t;){if(r.classList.contains(Zd.consuming))return!0;var s=$d(r);if(i&&s.overflowY.match(/(scroll|auto)/)){var o=r.scrollHeight-r.clientHeight;if(o>0&&(r.scrollTop>0&&i<0||r.scrollTop<o&&i>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=r.scrollWidth-r.clientWidth;if(a>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<a&&n>0))return!0}r=r.parentNode}return!1}(n.target,r,s)){var o=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(s?t.scrollTop-=s*e.settings.wheelSpeed:t.scrollTop+=r*e.settings.wheelSpeed,o=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(r?t.scrollLeft+=r*e.settings.wheelSpeed:t.scrollLeft-=s*e.settings.wheelSpeed,o=!0):(t.scrollTop-=s*e.settings.wheelSpeed,t.scrollLeft+=r*e.settings.wheelSpeed),up(e),o=o||function(n,i){var r=Math.floor(t.scrollTop),s=0===t.scrollTop,o=r+t.offsetHeight===t.scrollHeight,a=0===t.scrollLeft,l=t.scrollLeft+t.offsetWidth===t.scrollWidth;return!(Math.abs(i)>Math.abs(n)?s||o:a||l)||!e.settings.wheelPropagation}(r,s),o&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}void 0!==window.onwheel?e.event.bind(t,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",n)},touch:function(e){if(hp.supportsTouch||hp.supportsIePointer){var t=e.element,n={},i=0,r={},s=null;hp.supportsTouch?(e.event.bind(t,"touchstart",c),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",u)):hp.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",c),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",u)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",c),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",u)))}function o(n,i){t.scrollTop-=i,t.scrollLeft-=n,up(e)}function a(e){return e.targetTouches?e.targetTouches[0]:e}function l(e){return(!e.pointerType||"pen"!==e.pointerType||0!==e.buttons)&&(!(!e.targetTouches||1!==e.targetTouches.length)||!(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))}function c(e){if(l(e)){var t=a(e);n.pageX=t.pageX,n.pageY=t.pageY,i=(new Date).getTime(),null!==s&&clearInterval(s)}}function h(s){if(l(s)){var c=a(s),h={pageX:c.pageX,pageY:c.pageY},u=h.pageX-n.pageX,d=h.pageY-n.pageY;if(function(e,n,i){if(!t.contains(e))return!1;for(var r=e;r&&r!==t;){if(r.classList.contains(Zd.consuming))return!0;var s=$d(r);if(i&&s.overflowY.match(/(scroll|auto)/)){var o=r.scrollHeight-r.clientHeight;if(o>0&&(r.scrollTop>0&&i<0||r.scrollTop<o&&i>0))return!0}if(n&&s.overflowX.match(/(scroll|auto)/)){var a=r.scrollWidth-r.clientWidth;if(a>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<a&&n>0))return!0}r=r.parentNode}return!1}(s.target,u,d))return;o(u,d),n=h;var p=(new Date).getTime(),f=p-i;f>0&&(r.x=u/f,r.y=d/f,i=p),function(n,i){var r=Math.floor(t.scrollTop),s=t.scrollLeft,o=Math.abs(n),a=Math.abs(i);if(a>o){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&hp.isChrome}else if(o>a&&(n<0&&s===e.contentWidth-e.containerWidth||n>0&&0===s))return!0;return!0}(u,d)&&s.preventDefault()}}function u(){e.settings.swipeEasing&&(clearInterval(s),s=setInterval((function(){e.isInitialized?clearInterval(s):r.x||r.y?Math.abs(r.x)<.01&&Math.abs(r.y)<.01?clearInterval(s):e.element?(o(30*r.x,30*r.y),r.x*=.8,r.y*=.8):clearInterval(s):clearInterval(s)}),10))}}},gp=function(e,t){var n=this;if(void 0===t&&(t={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var i in this.element=e,e.classList.add(Jd),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},t)this.settings[i]=t[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var r,s,o=function(){return e.classList.add(ep.focus)},a=function(){return e.classList.remove(ep.focus)};this.isRtl="rtl"===$d(e).direction,!0===this.isRtl&&e.classList.add(Qd),this.isNegativeScroll=(s=e.scrollLeft,e.scrollLeft=-1,r=e.scrollLeft<0,e.scrollLeft=s,r),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new op,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=Vd(Zd.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=Vd(Zd.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",o),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var l=$d(this.scrollbarXRail);this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=cp(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=cp(l.borderLeftWidth)+cp(l.borderRightWidth),zd(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=cp(l.marginLeft)+cp(l.marginRight),zd(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Vd(Zd.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=Vd(Zd.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",o),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var c=$d(this.scrollbarYRail);this.scrollbarYRight=parseInt(c.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=cp(c.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var t=$d(e);return cp(t.width)+cp(t.paddingLeft)+cp(t.paddingRight)+cp(t.borderLeftWidth)+cp(t.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=cp(c.borderTopWidth)+cp(c.borderBottomWidth),zd(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=cp(c.marginTop)+cp(c.marginBottom),zd(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(e){return fp[e](n)})),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",(function(e){return n.onScroll(e)})),up(this)};gp.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,zd(this.scrollbarXRail,{display:"block"}),zd(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=cp($d(this.scrollbarXRail).marginLeft)+cp($d(this.scrollbarXRail).marginRight),this.railYMarginHeight=cp($d(this.scrollbarYRail).marginTop)+cp($d(this.scrollbarYRail).marginBottom),zd(this.scrollbarXRail,{display:"none"}),zd(this.scrollbarYRail,{display:"none"}),up(this),lp(this,"top",0,!1,!0),lp(this,"left",0,!1,!0),zd(this.scrollbarXRail,{display:""}),zd(this.scrollbarYRail,{display:""}))},gp.prototype.onScroll=function(e){this.isAlive&&(up(this),lp(this,"top",this.element.scrollTop-this.lastScrollTop),lp(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},gp.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),Xd(this.scrollbarX),Xd(this.scrollbarY),Xd(this.scrollbarXRail),Xd(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},gp.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(e){return!e.match(/^ps([-_].+|)$/)})).join(" ")};var mp=gp;const _p={modalWindow:document.querySelector("[data-modal-ingredient-window]"),modalContentEl:document.querySelector("[data-modal-ingredient-content]"),modal:document.querySelector("[data-modal-ingredient]"),modalCocktail:document.querySelector(".modal-cocktail"),galleryListEl:document.querySelector(".gallery-list")},vp=new mp(_p.modalWindow,{wheelSpeed:.1,swipeEasing:"linear"});_p.modalCocktail.addEventListener("click",(e=>{if(!e.target.hasAttribute("data-ingredientname"))return;const t=e.target.getAttribute("data-ingredientname");_p.modalContentEl.innerHTML=Hd,_p.modal.classList.toggle("is-hidden"),Bd({ingredientName:t}).then((e=>{yp(e.data.ingredients[0])})).catch((e=>{console.log(e)}))})),_p.galleryListEl.addEventListener("click",(e=>{if(e.target.classList.contains("button-more")&&e.target.hasAttribute("data-ingredientname")){_p.modalContentEl.innerHTML=Hd,_p.modal.classList.toggle("is-hidden");const t=e.target.getAttribute("data-ingredientname");Bd({ingredientName:t}).then((e=>{yp(e.data.ingredients[0])})).catch((e=>{console.log(e)}))}}));const yp=e=>{_p.modalWindow.scrollTop=0;oc(bp,{id:e.idIngredient,country:"",alcohol:e.strAlcohol,title:e.strIngredient,subtitle:"",description:e.strDescription,abv:e.strABV,type:e.strType,ingredient:e.strIngredient})};function bp(e,t){const n=Wd(e,t);_p.modalContentEl.innerHTML=n,wp()}const wp=()=>{vp.update()},Ep={galleryListEl:document.querySelector(".gallery-list"),modal:document.querySelector("[data-modal-cocktail]"),modalWindow:document.querySelector("[data-modal-cocktail-window]"),modalContentEl:document.querySelector("[data-modal-cocktail-content]")},Cp=new mp(Ep.modalWindow);Ep.galleryListEl.addEventListener("click",(e=>{if(e.target.classList.contains("button-more")&&e.target.hasAttribute("data-cocktailid")){Ep.modalContentEl.innerHTML=Hd,Ep.modal.classList.toggle("is-hidden");const t=e.target.dataset.cocktailid;Fd({cocktailId:t}).then((e=>{Ip(e.data.drinks[0])})).catch((e=>{console.log(e)}))}}));const Ip=e=>{Ep.modalWindow.scrollTop=0;const t=[];for(let n=1;n<=15;n++)e[`strIngredient${n}`]&&t.push(e[`strIngredient${n}`]);oc(Tp,{id:e.idDrink,title:e.strDrink,image:e.strDrinkThumb,alcohol:e.strAlcoholic,category:e.strCategory,instructions:e.strInstructions,ingredients:t})};function Tp(e,t){const n=qd(e,t);Ep.modalContentEl.innerHTML=n,Sp()}const Sp=()=>{Cp.update()},kp={modal:document.querySelector("[data-modal-authentication]"),joinModalBtn:document.querySelector("[data-modal-authentication-join]"),loginModalBtn:document.querySelector("[data-modal-authentication-login]"),loginForm:document.querySelector("[data-login-form]"),joinForm:document.querySelector("[data-join-form]")};function Rp(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>e.json())).then((e=>e)).catch((e=>{console.log(e)}))}kp.joinModalBtn.addEventListener("click",(()=>{kp.loginForm.classList.toggle("visually-hidden"),kp.joinForm.classList.toggle("visually-hidden")})),kp.loginModalBtn.addEventListener("click",(()=>{kp.loginForm.classList.toggle("visually-hidden"),kp.joinForm.classList.toggle("visually-hidden")})),function(){const e=document.querySelector(".back-to-top");window.addEventListener("scroll",(()=>{window.scrollY>=50?e.style.opacity=1:e.style.opacity=0})),e.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}();const Np=document.querySelector(".container-alphabet"),Pp=document.querySelector(".custom-select"),Ap=document.querySelector(".gallery-error"),Op={galleryList:document.querySelector(".gallery-list"),galleryTitle:document.querySelector("h1.gallery-title"),errorSection:document.querySelector("[data-error-section]"),paginationEl:document.querySelector("#tui-pagination-container")};function xp(e){if(!e)return Op.galleryList.innerHTML="",Op.galleryTitle.classList.add("visually-hidden"),Op.galleryList.classList.add("visually-hidden"),Op.errorSection.classList.remove("visually-hidden"),void Op.paginationEl.classList.add("visually-hidden");Ap.innerHTML="",lc(e,"search")}Np&&(Np.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;Rp(e.target.textContent).then((e=>xp(e.drinks)))})),Pp.addEventListener("change",(function(e){const t=e.target.options[e.target.selectedIndex];Rp(t.textContent).then((e=>{xp(e.drinks)}))})));document.querySelector(".gallery-list");const Lp=window.location.pathname.replace("/goit_js_team_project","");"/"!==Lp&&"/index.html"!==Lp||function(){const e=[];for(let t=0;t<9;t+=1)e.push(Ed.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((e=>e.data.drinks[0])).catch());Promise.all(e).then((e=>{lc(e)})).catch()}();document.querySelectorAll("[data-add-remove-favorite]");document.body.addEventListener("click",(e=>{let t;e.target.hasAttribute("data-add-remove-favorite")&&(t=e.target),e.target.parentElement&&e.target.parentElement.hasAttribute("data-add-remove-favorite")&&(t=e.target.parentElement),e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.hasAttribute("data-add-remove-favorite")&&(t=e.target.parentElement.parentElement),t&&Dp(t)}));const Dp=e=>{const t=e.getAttribute("data-action")||"add",n=e.getAttribute("data-element-type")||"",i=e.getAttribute("data-element-image")||"",r=e.getAttribute("data-element-title")||"",s=e.getAttribute("data-element-subtitle")||"",o=e.getAttribute("data-element-id")||"";(0,bc.updateDataInFirebase)({action:t,elementImage:i,elementType:n,elementTitle:r,elementSubtitle:s,elementId:o,targetElement:e})},Mp={searchForm:document.querySelector("form[name=search-form]"),searchFormMobile:document.querySelector("form[name=search-form-mob]"),galleryList:document.querySelector(".gallery-list"),galleryTitle:document.querySelector("h1.gallery-title"),modalMobile:document.querySelector("[data-modal-mob-menu]"),errorSection:document.querySelector("[data-error-section]"),paginationEl:document.querySelector("#tui-pagination-container")};Mp.searchForm.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.search.value;Mp.galleryList.innerHTML=`<div class="gallery-loading">${Hd}</div>`,Mp.galleryTitle.classList.remove("visually-hidden"),Mp.galleryList.classList.remove("visually-hidden"),Mp.galleryList.classList.add("show-all-items"),jd(t).then((e=>{const t=e[0].data.drinks||[],n=e[1].data.drinks||[],i=t.concat(n);if(!i.length)return Mp.galleryList.innerHTML="",Mp.galleryTitle.classList.add("visually-hidden"),Mp.galleryList.classList.add("visually-hidden"),Mp.errorSection.classList.remove("visually-hidden"),void Mp.paginationEl.classList.add("visually-hidden");lc(Array.from(new Set(i.map((e=>e.idDrink)))).map((e=>i.find((t=>t.idDrink===e)))),"search")})).catch((e=>console.log(e))).finally()})),Mp.searchFormMobile.addEventListener("submit",(e=>{e.preventDefault(),Mp.modalMobile.classList.add("visually-hidden");const t=e.target.elements["search-mob"].value;Mp.galleryList.innerHTML=`<div class="gallery-loading">${Hd}</div>`,Mp.galleryTitle.classList.remove("visually-hidden"),Mp.galleryList.classList.remove("visually-hidden"),Mp.galleryList.classList.add("show-all-items"),jd(t).then((e=>{const t=e[0].data.drinks||[],n=e[1].data.drinks||[],i=t.concat(n);if(!i.length)return Mp.galleryList.innerHTML="",Mp.galleryTitle.classList.add("visually-hidden"),Mp.galleryList.classList.add("visually-hidden"),Mp.errorSection.classList.remove("visually-hidden"),void Mp.paginationEl.classList.add("visually-hidden");lc(Array.from(new Set(i.map((e=>e.idDrink)))).map((e=>i.find((t=>t.idDrink===e)))),"search")})).catch((e=>console.log(e))).finally()}));const Up=document.querySelectorAll(".toggler");Up.forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t;document.body.classList.contains("dark-mode")?(t="DARK",Up.forEach((e=>{e.classList.add("active")}))):(t="LIGHT",Up.forEach((e=>{e.classList.remove("active")})));localStorage.setItem("PageTheme",JSON.stringify(t))}()}))})),"DARK"===JSON.parse(localStorage.getItem("PageTheme"))&&(document.body.classList="dark-mode",Up.forEach((e=>{e.classList.add("active")})));
//# sourceMappingURL=favorite-ingredients.561a8b28.js.map
