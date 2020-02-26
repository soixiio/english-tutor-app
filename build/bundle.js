var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,n,e){t.$$.on_destroy.push(c(n,e))}function l(t,n,e,r){if(t){const o=a(t,n,e,r);return t[0](o)}}function a(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function u(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function f(n){return n&&o(n.destroy)?n.destroy:t}function p(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function y(){return g("")}function x(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.data!==n&&(t.data=n)}let k;function E(t){k=t}function q(){if(!k)throw new Error("Function called outside component initialization");return k}function _(){const t=q();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const A=[],L=[],j=[],N=[],C=Promise.resolve();let T=!1;function H(t){j.push(t)}let M=!1;const O=new Set;function F(){if(!M){M=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];E(n),I(n.$$)}for(A.length=0;L.length;)L.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];O.has(n)||(O.add(n),n())}j.length=0}while(A.length);for(;N.length;)N.pop()();T=!1,M=!1,O.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const S=new Set;let D;function z(){D={r:0,c:[],p:D}}function R(){D.r||r(D.c),D=D.p}function W(t,n){t&&t.i&&(S.delete(t),t.i(n))}function X(t,n,e,r){if(t&&t.o){if(S.has(t))return;S.add(t),D.c.push(()=>{S.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function B(t){t&&t.c()}function P(t,e,s){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,s),H(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(H)}function Q(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){-1===t.$$.dirty[0]&&(A.push(t),T||(T=!0,C.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,o,s,c,i,l,a=[-1]){const u=k;E(n);const f=o.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:a};let d=!1;var m;p.ctx=s?s(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&J(n,t)),e}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target&&(o.hydrate?p.fragment&&p.fragment.l((m=o.target,Array.from(m.childNodes))):p.fragment&&p.fragment.c(),o.intro&&W(n.$$.fragment),P(n,o.target,o.anchor),F()),E(u)}class Y{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const G=[];function K(t,n){return{subscribe:V(t,n).subscribe}}function V(n,e=t){let r;const o=[];function c(t){if(s(n,t)&&(n=t,r)){const t=!G.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),G.push(e,n)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const l=[s,i];return o.push(l),1===o.length&&(r=e(c)||t),s(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Z(n,e,s){const i=!Array.isArray(n),l=i?[n]:n,a=e.length<2;return K(s,n=>{let s=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=e(i?u[0]:u,n);a?n(r):p=o(r)?r:t},m=l.map((t,n)=>c(t,t=>{u[n]=t,f&=~(1<<n),s&&d()},()=>{f|=1<<n}));return s=!0,d(),function(){r(m),p()}})}function tt(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,s,c=[],i="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(c.push("wild"),i+="/(.*)"):":"===e?(r=o.indexOf("?",1),s=o.indexOf(".",1),c.push(o.substring(1,~r?r:~s?s:o.length)),i+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~r?"?":"")+"\\"+o.substring(s))):i+="/"+o;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}function nt(t){let n,e;var r=t[0];function o(t){return{props:{params:t[1]}}}if(r)var s=new r(o(t));return{c(){s&&B(s.$$.fragment),n=y()},m(t,r){s&&P(s,t,r),d(t,n,r),e=!0},p(t,[e]){const c={};if(2&e&&(c.params=t[1]),r!==(r=t[0])){if(s){z();const t=s;X(t.$$.fragment,1,0,()=>{Q(t,1)}),R()}r?(B((s=new r(o(t))).$$.fragment),W(s.$$.fragment,1),P(s,n.parentNode,n)):s=null}else r&&s.$set(c)},i(t){e||(s&&W(s.$$.fragment,t),e=!0)},o(t){s&&X(s.$$.fragment,t),e=!1},d(t){t&&m(n),s&&Q(s,t)}}}function et(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const rt=K(et(),function(t){const n=()=>{t(et())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),ot=Z(rt,t=>t.location),st=Z(rt,t=>t.querystring);function ct(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");setTimeout(()=>{const n=("#"==t.charAt(0)?"":"#")+t;history.replaceState(void 0,void 0,n),window.dispatchEvent(new Event("hashchange"))},0)}function it(t){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');const n=t.getAttribute("href");if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function lt(n,e,r){let o,s=t;i(n,rt,t=>r(4,o=t)),n.$$.on_destroy.push(()=>s());let{routes:c={}}=e,{prefix:l=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=tt(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=r}match(t){l&&t.startsWith(l)&&(t=t.substr(l.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;)e[this._keys[r]]=n[++r]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const u=c instanceof Map?c:Object.entries(c),f=[];for(const[t,n]of u)f.push(new a(t,n));let p=null,d={};const m=_(),h=(t,n)=>{setTimeout(()=>{m(t,n)},0)};return n.$set=(t=>{"routes"in t&&r(2,c=t.routes),"prefix"in t&&r(3,l=t.prefix)}),n.$$.update=(()=>{if(17&n.$$.dirty){r(0,p=null);let t=0;for(;!p&&t<f.length;){const n=f[t].match(o.location);if(n){const e={component:f[t].component,name:f[t].component.name,location:o.location,querystring:o.querystring,userData:f[t].userData};if(!f[t].checkConditions(e)){h("conditionsFailed",e);break}r(0,p=f[t].component),r(1,d=n),h("routeLoaded",e)}t++}}}),[p,d,c,l]}class at extends Y{constructor(t){super(),U(this,t,lt,nt,s,{routes:2,prefix:3})}}function ut(t){let n,e=t[0].last+"";return{c(){n=g(e)},m(t,e){d(t,n,e)},p(t,r){1&r&&e!==(e=t[0].last+"")&&w(n,e)},d(t){t&&m(n)}}}function ft(n){let e,r,o,s,c,i,l,a,u,f,h,y,x,k=n[0].first+"",E=n[0].last&&ut(n);return{c(){e=$("div"),(r=$("h2")).textContent="Hi there!",o=b(),s=$("p"),c=g("Your name is: "),i=$("b"),l=g(k),a=b(),u=$("b"),E&&E.c(),f=b(),(h=$("p")).innerHTML="<em>Hint:</em> Try changing the URL and add your name, e.g. <code>/hello/jane/doe</code>",y=b(),(x=$("div")).innerHTML='<p>Form</p> \n    <form action=""><input type="text" class="border"> \n      <br> \n      <input type="text" class="border mt-4"> \n      <br> \n      <button type="submit" class="bg-primary mt-4 px-6 py-1">submit</button></form>',v(r,"class","routetitle"),v(s,"id","nameparams"),v(x,"class","container center m-6 p-4"),v(e,"class","container border bg-white mt-8 p-4")},m(t,n){d(t,e,n),p(e,r),p(e,o),p(e,s),p(s,c),p(s,i),p(i,l),p(s,a),p(s,u),E&&E.m(u,null),p(e,f),p(e,h),p(e,y),p(e,x)},p(t,[n]){1&n&&k!==(k=t[0].first+"")&&w(l,k),t[0].last?E?E.p(t,n):((E=ut(t)).c(),E.m(u,null)):E&&(E.d(1),E=null)},i:t,o:t,d(t){t&&m(e),E&&E.d()}}}function pt(t,n,e){let{params:r={}}=n;return t.$set=(t=>{"params"in t&&e(0,r=t.params)}),[r]}class dt extends Y{constructor(t){super(),U(this,t,pt,ft,s,{params:0})}}const mt=t=>({}),ht=t=>({}),$t=t=>({}),gt=t=>({});function bt(t){let n,e,r,o,s;const c=t[1].sidebar,i=l(c,t,t[0],gt),f=t[1].main,h=l(f,t,t[0],ht);return{c(){n=$("div"),e=$("div"),i&&i.c(),r=b(),o=$("main"),h&&h.c(),v(e,"class","sidebar flex-none w-1/4 hidden xl:block"),v(o,"class","main flex-1"),v(n,"class","container flex py-12")},m(t,c){d(t,n,c),p(n,e),i&&i.m(e,null),p(n,r),p(n,o),h&&h.m(o,null),s=!0},p(t,[n]){i&&i.p&&1&n&&i.p(a(c,t,t[0],gt),u(c,t[0],n,$t)),h&&h.p&&1&n&&h.p(a(f,t,t[0],ht),u(f,t[0],n,mt))},i(t){s||(W(i,t),W(h,t),s=!0)},o(t){X(i,t),X(h,t),s=!1},d(t){t&&m(n),i&&i.d(t),h&&h.d(t)}}}function yt(t,n,e){let{$$slots:r={},$$scope:o}=n;return t.$set=(t=>{"$$scope"in t&&e(0,o=t.$$scope)}),[o,r]}class xt extends Y{constructor(t){super(),U(this,t,yt,bt,s,{})}}const vt=[];let wt;function kt(t){t.node.classList.remove(t.className),t.pattern.test(wt)&&t.node.classList.add(t.className)}function Et(t,n){if(!(n=n&&"string"==typeof n?{path:n}:n||{}).path&&t.hasAttribute("href")&&(n.path=t.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:e}=tt(n.path),r={node:t,className:n.className,pattern:e};return vt.push(r),kt(r),{destroy(){vt.splice(vt.indexOf(r),1)}}}function qt(t,n,e){const r=t.slice();return r[1]=n[e][0],r[2]=n[e][1],r}function _t(t){let n,e,o,s,c,i,l,a=t[2]+"";return{c(){n=$("li"),e=$("a"),o=g(a),v(e,"href",s=t[1])},m(t,r){d(t,n,r),p(n,e),p(e,o),l=[f(c=it.call(null,e)),f(i=Et.call(null,e))]},p(t,n){1&n&&a!==(a=t[2]+"")&&w(o,a),1&n&&s!==(s=t[1])&&v(e,"href",s)},d(t){t&&m(n),r(l)}}}function At(n){let e,r,o=n[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=_t(qt(n,o,t));return{c(){e=$("nav"),r=$("ul");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,n){d(t,e,n),p(e,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null)},p(t,[n]){if(1&n){let e;for(o=t[0],e=0;e<o.length;e+=1){const c=qt(t,o,e);s[e]?s[e].p(c,n):(s[e]=_t(c),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=o.length}},i:t,o:t,d(t){t&&m(e),h(s,t)}}}function Lt(t,n,e){let{links:r=[]}=n;return t.$set=(t=>{"links"in t&&e(0,r=t.links)}),[r]}rt.subscribe(t=>{wt=t.location+(t.querystring?"?"+t.querystring:""),vt.map(kt)});class jt extends Y{constructor(t){super(),U(this,t,Lt,At,s,{links:0})}}const Nt=[["/home","Hometask"],["/lesson","Lesson"]],Ct="./data/tests";function Tt(t){let n,e,r,o,s,c,i,l=(t[0].name?t[0].name:"Xiao")+"";const a=new jt({props:{links:Nt}});return{c(){n=$("div"),e=$("div"),r=g("Welcome, "),o=g(l),s=g("!"),c=b(),B(a.$$.fragment),v(e,"class","mb-6"),v(n,"slot","sidebar")},m(t,l){d(t,n,l),p(n,e),p(e,r),p(e,o),p(e,s),p(n,c),P(a,n,null),i=!0},p(t,n){(!i||1&n)&&l!==(l=(t[0].name?t[0].name:"Xiao")+"")&&w(o,l)},i(t){i||(W(a.$$.fragment,t),i=!0)},o(t){X(a.$$.fragment,t),i=!1},d(t){t&&m(n),Q(a)}}}function Ht(t){let n,e,r,o,s,c,i,l;return{c(){n=$("div"),(e=$("h1")).textContent="Lessons",r=b(),o=$("ul"),s=$("li"),(c=$("a")).textContent="The Moons of Jupiter",v(e,"class","title"),v(c,"href","/lesson/the-moons-of-jupiter?q=0"),v(c,"class","underline"),v(n,"slot","main"),v(n,"class","container border bg-white p-8")},m(t,a){d(t,n,a),p(n,e),p(n,r),p(n,o),p(o,s),p(s,c),l=f(i=it.call(null,c))},d(t){t&&m(n),l()}}}function Mt(n){let e;return{c(){e=b()},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}function Ot(t){let n;const e=new xt({props:{$$slots:{default:[Mt],main:[Ht],sidebar:[Tt]},$$scope:{ctx:t}}});return{c(){B(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Ft(t,n,e){let{params:r={}}=n;return t.$set=(t=>{"params"in t&&e(0,r=t.params)}),[r]}function It(t){let n,e,r,o;const s=t[3].default,c=l(s,t,t[2],null);return{c(){n=$("button"),c&&c.c(),v(n,"class",e="btn btn-"+t[1]+" svelte-1iyomu7"),n.disabled=t[0]},m(e,s){d(e,n,s),c&&c.m(n,null),r=!0,o=x(n,"click",t[4])},p(t,[o]){c&&c.p&&4&o&&c.p(a(s,t,t[2],null),u(s,t[2],o,null)),(!r||2&o&&e!==(e="btn btn-"+t[1]+" svelte-1iyomu7"))&&v(n,"class",e),(!r||1&o)&&(n.disabled=t[0])},i(t){r||(W(c,t),r=!0)},o(t){X(c,t),r=!1},d(t){t&&m(n),c&&c.d(t),o()}}}function St(t,n,e){let{disabled:r=!1}=n,{type:o}=n,{$$slots:s={},$$scope:c}=n;return t.$set=(t=>{"disabled"in t&&e(0,r=t.disabled),"type"in t&&e(1,o=t.type),"$$scope"in t&&e(2,c=t.$$scope)}),[r,o,c,s,function(n){!function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}(t,n)}]}class Dt extends Y{constructor(t){super(),U(this,t,St,It,s,{disabled:0,type:1})}}function zt(n){let e;return{c(){e=g("Select")},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class Rt extends Y{constructor(t){super(),U(this,t,null,zt,s,{})}}function Wt(n){let e;return{c(){e=g("Check")},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class Xt extends Y{constructor(t){super(),U(this,t,null,Wt,s,{})}}function Bt(n){let e;return{c(){e=g("Insert")},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class Pt extends Y{constructor(t){super(),U(this,t,null,Bt,s,{})}}function Qt(n){let e;return{c(){e=g("Word")},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class Jt extends Y{constructor(t){super(),U(this,t,null,Qt,s,{})}}function Ut(t){let n,e,r,o,s,c=t[0].title+"";var i=t[1][t[0].type];if(i)var l=new i({});return{c(){n=$("h1"),e=g(c),r=g("\nType: "),l&&B(l.$$.fragment),o=y(),v(n,"class","text-black text-xl mb-6")},m(t,c){d(t,n,c),p(n,e),d(t,r,c),l&&P(l,t,c),d(t,o,c),s=!0},p(t,[n]){if((!s||1&n)&&c!==(c=t[0].title+"")&&w(e,c),i!==(i=t[1][t[0].type])){if(l){z();const t=l;X(t.$$.fragment,1,0,()=>{Q(t,1)}),R()}i?(B((l=new i({})).$$.fragment),W(l.$$.fragment,1),P(l,o.parentNode,o)):l=null}},i(t){s||(l&&W(l.$$.fragment,t),s=!0)},o(t){l&&X(l.$$.fragment,t),s=!1},d(t){t&&m(n),t&&m(r),t&&m(o),l&&Q(l,t)}}}function Yt(t,n,e){let{question:r={}}=n;const o={select:Rt,check:Xt,word:Jt,insert:Pt};return t.$set=(t=>{"question"in t&&e(0,r=t.question)}),[r,o]}class Gt extends Y{constructor(t){super(),U(this,t,Yt,Ut,s,{question:0})}}function Kt(t,n,e){const r=t.slice();return r[7]=n[e],r[9]=e,r}function Vt(t){let n;const e=new Gt({props:{question:t[7],activeQuestion:t[1]}});return{c(){B(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.question=t[7]),2&n&&(r.activeQuestion=t[1]),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Zt(t){let n,e,r=t[9]===t[1]&&Vt(t);return{c(){r&&r.c(),n=y()},m(t,o){r&&r.m(t,o),d(t,n,o),e=!0},p(t,e){t[9]===t[1]?r?(r.p(t,e),W(r,1)):((r=Vt(t)).c(),W(r,1),r.m(n.parentNode,n)):r&&(z(),X(r,1,1,()=>{r=null}),R())},i(t){e||(W(r),e=!0)},o(t){X(r),e=!1},d(t){r&&r.d(t),t&&m(n)}}}function tn(t){let n;return{c(){n=g("Previous")},m(t,e){d(t,n,e)},d(t){t&&m(n)}}}function nn(t){let n,e=t[1]===t[2]-1?"Finish":"Next";return{c(){n=g(e)},m(t,e){d(t,n,e)},p(t,r){2&r&&e!==(e=t[1]===t[2]-1?"Finish":"Next")&&w(n,e)},d(t){t&&m(n)}}}function en(t){let n,e,r,o,s,c=t[0].questions,i=[];for(let n=0;n<c.length;n+=1)i[n]=Zt(Kt(t,c,n));const l=t=>X(i[t],1,1,()=>{i[t]=null}),a=new Dt({props:{type:"secondary",disabled:0===t[1],$$slots:{default:[tn]},$$scope:{ctx:t}}});a.$on("click",t[4]);const u=new Dt({props:{type:"primary",$$slots:{default:[nn]},$$scope:{ctx:t}}});return u.$on("click",t[3]),{c(){n=$("div");for(let t=0;t<i.length;t+=1)i[t].c();e=b(),r=$("div"),B(a.$$.fragment),o=b(),B(u.$$.fragment),v(n,"class","container rounded border bg-white p-8"),v(r,"class","controls p-8 flex justify-center md:justify-end")},m(t,c){d(t,n,c);for(let t=0;t<i.length;t+=1)i[t].m(n,null);d(t,e,c),d(t,r,c),P(a,r,null),p(r,o),P(u,r,null),s=!0},p(t,[e]){if(3&e){let r;for(c=t[0].questions,r=0;r<c.length;r+=1){const o=Kt(t,c,r);i[r]?(i[r].p(o,e),W(i[r],1)):(i[r]=Zt(o),i[r].c(),W(i[r],1),i[r].m(n,null))}for(z(),r=c.length;r<i.length;r+=1)l(r);R()}const r={};2&e&&(r.disabled=0===t[1]),1024&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r);const o={};1026&e&&(o.$$scope={dirty:e,ctx:t}),u.$set(o)},i(t){if(!s){for(let t=0;t<c.length;t+=1)W(i[t]);W(a.$$.fragment,t),W(u.$$.fragment,t),s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);X(a.$$.fragment,t),X(u.$$.fragment,t),s=!1},d(t){t&&m(n),h(i,t),t&&m(e),t&&m(r),Q(a),Q(u)}}}function rn(t,n,e){let r,o;i(t,ot,t=>e(5,r=t)),i(t,st,t=>e(6,o=t));let{data:s={}}=n;const c=s.questions.length;let l=0;return t.$set=(t=>{"data"in t&&e(0,s=t.data)}),t.$$.update=(()=>{96&t.$$.dirty&&console.log(r,o)}),[s,l,c,function(){e(1,l+=1),ct(`${r}?q=${l}`)},function(){e(1,l-=1),ct(`${r}?q=${l}`)}]}class on extends Y{constructor(t){super(),U(this,t,rn,en,s,{data:0})}}function sn(t,n,e){const r=t.slice();return r[2]=n[e],r[4]=e,r}function cn(t){let n,e,o,s,c,i,l,a,u,h,y=t[4]+1+"",x=t[2]+"";return{c(){n=$("li"),e=$("a"),o=$("span"),s=g(y),c=b(),i=$("span"),u=b(),v(o,"class","pr-2"),v(e,"href","/lessson/123"),v(n,"class","py-2 text-sm")},m(t,r){d(t,n,r),p(n,e),p(e,o),p(o,s),p(e,c),p(e,i),i.innerHTML=x,p(n,u),h=[f(l=it.call(null,e)),f(a=Et.call(null,e))]},p(t,n){1&n&&x!==(x=t[2]+"")&&(i.innerHTML=x)},d(t){t&&m(n),r(h)}}}function ln(n){let e,r,o,s,c,i,l,a,u,f=n[0],y=[];for(let t=0;t<f.length;t+=1)y[t]=cn(sn(n,f,t));return{c(){e=$("div"),r=$("div"),o=g(n[1]),s=b(),(c=$("button")).innerHTML='<span class="icon"><i class="icon-arrow-up"></i></span>',i=b(),l=$("div"),a=$("ul");for(let t=0;t<y.length;t+=1)y[t].c();v(c,"class","float-right"),v(r,"class","dropdown-trigger svelte-1n5uzj9"),v(l,"class","dropdown-menu svelte-1n5uzj9"),v(e,"class",u="dropdown "+an+" svelte-1n5uzj9")},m(t,n){d(t,e,n),p(e,r),p(r,o),p(r,s),p(r,c),p(e,i),p(e,l),p(l,a);for(let t=0;t<y.length;t+=1)y[t].m(a,null)},p(t,[n]){if(2&n&&w(o,t[1]),1&n){let e;for(f=t[0],e=0;e<f.length;e+=1){const r=sn(t,f,e);y[e]?y[e].p(r,n):(y[e]=cn(r),y[e].c(),y[e].m(a,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=f.length}},i:t,o:t,d(t){t&&m(e),h(y,t)}}}let an="open";function un(t,n,e){let{menu:r=[]}=n,{title:o}=n;return t.$set=(t=>{"menu"in t&&e(0,r=t.menu),"title"in t&&e(1,o=t.title)}),[r,o]}class fn extends Y{constructor(t){super(),U(this,t,un,ln,s,{menu:0,title:1})}}function pn(t){let n,e,r;const o=new fn({props:{title:t[1],menu:t[0]}});return{c(){(n=$("div")).textContent="Lesson plan",e=b(),B(o.$$.fragment),v(n,"class","font-semibold text-black space svelte-17wrww7")},m(t,s){d(t,n,s),d(t,e,s),P(o,t,s),r=!0},p(t,[n]){const e={};2&n&&(e.title=t[1]),1&n&&(e.menu=t[0]),o.$set(e)},i(t){r||(W(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&m(n),t&&m(e),Q(o,t)}}}function dn(t,n,e){let{questions:r=[]}=n,{topic:o}=n;return r=r.map(t=>{let n=t.split(" ").slice(0,6).join(" ");return n+="&hellip;"}),t.$set=(t=>{"questions"in t&&e(0,r=t.questions),"topic"in t&&e(1,o=t.topic)}),[r,o]}class mn extends Y{constructor(t){super(),U(this,t,dn,pn,s,{questions:0,topic:1})}}function hn(n){let e,r,o=n[6]+"";return{c(){e=$("p"),r=g(o)},m(t,n){d(t,e,n),p(e,r)},p:t,i:t,o:t,d(t){t&&m(e)}}}function $n(t){let n;const e=new xt({props:{$$slots:{default:[yn],main:[bn],sidebar:[gn]},$$scope:{ctx:t}}});return{c(){B(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},p(t,n){const r={};128&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function gn(n){let e,r,o,s,c,i,l;const a=new mn({props:{questions:n[5].questions.map(wn),topic:n[5].title}});return{c(){e=$("div"),r=$("div"),(o=$("button")).innerHTML='<span class="icon"><i class="icon-arrow-left"></i></span>\n          Back\n        ',s=b(),c=$("div"),B(a.$$.fragment),v(o,"class","flex items-center"),v(r,"class","sidebar-panel px-4 py-2 mb-6"),v(c,"class","sidebar-panel"),v(e,"slot","sidebar")},m(t,u){d(t,e,u),p(e,r),p(r,o),p(e,s),p(e,c),P(a,c,null),i=!0,l=x(o,"click",n[4])},p:t,i(t){i||(W(a.$$.fragment,t),i=!0)},o(t){X(a.$$.fragment,t),i=!1},d(t){t&&m(e),Q(a),l()}}}function bn(n){let e,r;const o=new on({props:{data:n[5]}});return{c(){e=$("div"),B(o.$$.fragment),v(e,"slot","main")},m(t,n){d(t,e,n),P(o,e,null),r=!0},p:t,i(t){r||(W(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&m(e),Q(o)}}}function yn(n){let e;return{c(){e=b()},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}function xn(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function vn(t){let n,e,r,o={ctx:t,current:null,token:null,pending:xn,then:$n,catch:hn,value:5,error:6,blocks:[,,,]};return function(t,n){const e=n.token={};function r(t,r,o,s){if(n.token!==e)return;n.resolved=s;let c=n.ctx;void 0!==o&&((c=c.slice())[o]=s);const i=t&&(n.current=t)(c);let l=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==r&&t&&(z(),X(t,1,1,()=>{n.blocks[e]=null}),R())}):n.block.d(1),i.c(),W(i,1),i.m(n.mount(),n.anchor),l=!0),n.block=i,n.blocks&&(n.blocks[r]=i),l&&F()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=q();if(t.then(t=>{E(e),r(n.then,1,n.value,t),E(null)},t=>{E(e),r(n.catch,2,n.error,t),E(null)}),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var o}(e=t[0],o),{c(){n=y(),o.block.c()},m(t,e){d(t,n,e),o.block.m(t,o.anchor=e),o.mount=(()=>n.parentNode),o.anchor=n,r=!0},p(n,[e]){{const r=(t=n).slice();r[5]=o.resolved,o.block.p(r,e)}},i(t){r||(W(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){X(o.blocks[t])}r=!1},d(t){t&&m(n),o.block.d(t),o.token=null,o=null}}}const wn=({title:t})=>t;function kn(t,n,e){let{params:r={}}=n;const o=`${Ct}/${r.test}.json`,s=c();async function c(){try{const t=await fetch(o);return await t.json()}catch(t){throw new Error(t)}}return t.$set=(t=>{"params"in t&&e(1,r=t.params)}),[s,r,o,c,()=>void setTimeout(()=>{window.history.back()},0)]}function En(n){let e,r,o,s,c,i,l,a;return{c(){e=$("div"),r=$("p"),o=g("Enter the "),(s=$("a")).textContent="App",i=b(),(l=$("div")).innerHTML='<form action=""><input type="text" class="border" placeholder="Name" value=""> \n      <br> \n      <input type="text" class="border mt-4" placeholder="Password"> \n      <br> \n      <button type="submit" class="bg-primary mt-4 px-6 py-1">submit</button></form>',v(s,"href","/home"),v(s,"class","text-primary"),v(e,"class","container py-12")},m(t,n){d(t,e,n),p(e,r),p(r,o),p(r,s),p(e,i),p(e,l),a=f(c=it.call(null,s))},p:t,i:t,o:t,d(t){t&&m(e),a()}}}function qn(t){let n,e,r,o,s,c,i;return{c(){n=$("div"),e=g("NotFound\n    "),r=$("br"),o=g("\n    Start "),(s=$("a")).textContent="here",v(s,"href","/home"),v(s,"class","text-primary"),v(n,"slot","main")},m(t,l){d(t,n,l),p(n,e),p(n,r),p(n,o),p(n,s),i=f(c=it.call(null,s))},d(t){t&&m(n),i()}}}function _n(n){return{c:t,m:t,p:t,d:t}}function An(t){let n;const e=new xt({props:{$$slots:{default:[_n],main:[qn]},$$scope:{ctx:t}}});return{c(){B(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Ln(t){let n,e,r,o,s,c,i,l=(t[0].name?t[0].name:"Xiao")+"";const a=new jt({props:{links:Nt}});return{c(){n=$("div"),e=$("div"),r=g("Welcome, "),o=g(l),s=g("!"),c=b(),B(a.$$.fragment),v(e,"class","mb-6"),v(n,"slot","sidebar")},m(t,l){d(t,n,l),p(n,e),p(e,r),p(e,o),p(e,s),p(n,c),P(a,n,null),i=!0},p(t,n){(!i||1&n)&&l!==(l=(t[0].name?t[0].name:"Xiao")+"")&&w(o,l)},i(t){i||(W(a.$$.fragment,t),i=!0)},o(t){X(a.$$.fragment,t),i=!1},d(t){t&&m(n),Q(a)}}}function jn(t){let n;return{c(){(n=$("div")).innerHTML='<h2 class="title">Active</h2> \n    <div class="tasks_active">Here active cards</div> \n    <h2 class="title">Completed</h2> \n    <div class="tasks_comleted">Here done cards</div>',v(n,"slot","main")},m(t,e){d(t,n,e)},d(t){t&&m(n)}}}function Nn(n){let e;return{c(){e=b()},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}function Cn(t){let n;const e=new xt({props:{$$slots:{default:[Nn],main:[jn],sidebar:[Ln]},$$scope:{ctx:t}}});return{c(){B(e.$$.fragment)},m(t,r){P(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Tn(t,n,e){let{params:r={}}=n;return t.$set=(t=>{"params"in t&&e(0,r=t.params)}),[r]}class Hn extends Y{constructor(t){super(),U(this,t,Tn,Cn,s,{params:0})}}const Mn={"/":class extends Y{constructor(t){super(),U(this,t,null,En,s,{})}},"/home/":Hn,"/home/:name":Hn,"/hello":dt,"/hello/:first/:last?":dt,"/lesson/":class extends Y{constructor(t){super(),U(this,t,Ft,Ot,s,{params:0})}},"/lesson/:test":class extends Y{constructor(t){super(),U(this,t,kn,vn,s,{params:1})}},"*":class extends Y{constructor(t){super(),U(this,t,null,An,s,{})}}};function On(n){let e;const r=new at({props:{routes:Mn}});return{c(){B(r.$$.fragment)},m(t,n){P(r,t,n),e=!0},p:t,i(t){e||(W(r.$$.fragment,t),e=!0)},o(t){X(r.$$.fragment,t),e=!1},d(t){Q(r,t)}}}return new class extends Y{constructor(t){super(),U(this,t,null,On,s,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map
