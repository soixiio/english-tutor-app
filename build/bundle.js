var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,n,e,r){if(t){const o=a(t,n,e,r);return t[0](o)}}function a(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function l(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function u(n){return n&&o(n.destroy)?n.destroy:t}function f(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.data!==n&&(t.data=n)}let y;function x(t){y=t}function v(){if(!y)throw new Error("Function called outside component initialization");return y}function k(){const t=v();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const w=[],_=[],E=[],A=[],C=Promise.resolve();let j=!1;function N(t){E.push(t)}let L=!1;const q=new Set;function O(){if(!L){L=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];x(n),H(n.$$)}for(w.length=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];q.has(n)||(q.add(n),n())}E.length=0}while(w.length);for(;A.length;)A.pop()();j=!1,L=!1,q.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const M=new Set;let T;function D(){T={r:0,c:[],p:T}}function R(){T.r||r(T.c),T=T.p}function F(t,n){t&&t.i&&(M.delete(t),t.i(n))}function I(t,n,e,r){if(t&&t.o){if(M.has(t))return;M.add(t),T.c.push(()=>{M.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function S(t){t&&t.c()}function B(t,e,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,s),N(()=>{const e=i.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(N)}function P(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(w.push(t),j||(j=!0,C.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,o,s,c,i,a,l=[-1]){const u=y;x(n);const f=o.props||{},p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:l};let d=!1;var h;p.ctx=s?s(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&W(n,t)),e}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target&&(o.hydrate?p.fragment&&p.fragment.l((h=o.target,Array.from(h.childNodes))):p.fragment&&p.fragment.c(),o.intro&&F(n.$$.fragment),B(n,o.target,o.anchor),O()),x(u)}class J{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const U=[];function V(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let r;const o=[];function c(t){if(s(n,t)&&(n=t,r)){const t=!U.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),U.push(e,n)}if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const a=[s,i];return o.push(a),1===o.length&&(r=e(c)||t),s(n),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Y(n,e,s){const i=!Array.isArray(n),a=i?[n]:n,l=e.length<2;return V(s,n=>{let s=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=e(i?u[0]:u,n);l?n(r):p=o(r)?r:t},h=a.map((t,n)=>c(t,t=>{u[n]=t,f&=~(1<<n),s&&d()},()=>{f|=1<<n}));return s=!0,d(),function(){r(h),p()}})}function G(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,s,c=[],i="",a=t.split("/");for(a[0]||a.shift();o=a.shift();)"*"===(e=o[0])?(c.push("wild"),i+="/(.*)"):":"===e?(r=o.indexOf("?",1),s=o.indexOf(".",1),c.push(o.substring(1,~r?r:~s?s:o.length)),i+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~r?"?":"")+"\\"+o.substring(s))):i+="/"+o;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}function K(t){let n,e;var r=t[0];function o(t){return{props:{params:t[1]}}}if(r)var s=new r(o(t));return{c(){s&&S(s.$$.fragment),n=m("")},m(t,r){s&&B(s,t,r),p(t,n,r),e=!0},p(t,[e]){const c={};if(2&e&&(c.params=t[1]),r!==(r=t[0])){if(s){D();const t=s;I(t.$$.fragment,1,0,()=>{P(t,1)}),R()}r?(S((s=new r(o(t))).$$.fragment),F(s.$$.fragment,1),B(s,n.parentNode,n)):s=null}else r&&s.$set(c)},i(t){e||(s&&F(s.$$.fragment,t),e=!0)},o(t){s&&I(s.$$.fragment,t),e=!1},d(t){t&&d(n),s&&P(s,t)}}}function Q(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const Z=V(Q(),function(t){const n=()=>{t(Q())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Y(Z,t=>t.location),Y(Z,t=>t.querystring);function tt(t){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');const n=t.getAttribute("href");if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function nt(n,e,r){let o,s=t;!function(t,n,e){t.$$.on_destroy.push(c(n,e))}(n,Z,t=>r(4,o=t)),n.$$.on_destroy.push(()=>s());let{routes:i={}}=e,{prefix:a=""}=e;class l{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=G(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=r}match(t){a&&t.startsWith(a)&&(t=t.substr(a.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;)e[this._keys[r]]=n[++r]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const u=i instanceof Map?i:Object.entries(i),f=[];for(const[t,n]of u)f.push(new l(t,n));let p=null,d={};const h=k(),m=(t,n)=>{setTimeout(()=>{h(t,n)},0)};return n.$set=(t=>{"routes"in t&&r(2,i=t.routes),"prefix"in t&&r(3,a=t.prefix)}),n.$$.update=(()=>{if(17&n.$$.dirty){r(0,p=null);let t=0;for(;!p&&t<f.length;){const n=f[t].match(o.location);if(n){const e={component:f[t].component,name:f[t].component.name,location:o.location,querystring:o.querystring,userData:f[t].userData};if(!f[t].checkConditions(e)){m("conditionsFailed",e);break}r(0,p=f[t].component),r(1,d=n),m("routeLoaded",e)}t++}}}),[p,d,i,a]}class et extends J{constructor(t){super(),z(this,t,nt,K,s,{routes:2,prefix:3})}}function rt(t){let n,e=t[0].last+"";return{c(){n=m(e)},m(t,e){p(t,n,e)},p(t,r){1&r&&e!==(e=t[0].last+"")&&b(n,e)},d(t){t&&d(n)}}}function ot(n){let e,r,o,s,c,i,a,l,u,y,x,v,k,w=n[0].first+"",_=n[0].last&&rt(n);return{c(){e=h("div"),(r=h("h2")).textContent="Hi there!",o=$(),s=h("p"),c=m("Your name is: "),i=h("b"),a=m(w),l=$(),u=h("b"),_&&_.c(),y=$(),(x=h("p")).innerHTML="<em>Hint:</em> Try changing the URL and add your name, e.g. <code>/hello/jane/doe</code>",v=$(),(k=h("div")).innerHTML='<p>Form</p> \n    <form action=""><input type="text" class="border"> \n      <br> \n      <input type="text" class="border mt-4"> \n      <br> \n      <button type="submit" class="bg-primary mt-4 px-6 py-1">submit</button></form>',g(r,"class","routetitle"),g(s,"id","nameparams"),g(k,"class","container center m-6 p-4"),g(e,"class","container border bg-white mt-8 p-4")},m(t,n){p(t,e,n),f(e,r),f(e,o),f(e,s),f(s,c),f(s,i),f(i,a),f(s,l),f(s,u),_&&_.m(u,null),f(e,y),f(e,x),f(e,v),f(e,k)},p(t,[n]){1&n&&w!==(w=t[0].first+"")&&b(a,w),t[0].last?_?_.p(t,n):((_=rt(t)).c(),_.m(u,null)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&d(e),_&&_.d()}}}function st(t,n,e){let{params:r={}}=n;return r.first="not set",t.$set=(t=>{"params"in t&&e(0,r=t.params)}),[r]}class ct extends J{constructor(t){super(),z(this,t,st,ot,s,{params:0})}}const it=t=>({}),at=t=>({}),lt=t=>({}),ut=t=>({});function ft(t){let n,e,r,o,s,c,u;const m=t[1].sidebar,b=i(m,t,t[0],ut),y=t[1].main,x=i(y,t,t[0],at);return{c(){n=h("div"),e=h("div"),(r=h("div")).textContent="Welcome, Xiao!",o=$(),b&&b.c(),s=$(),c=h("main"),x&&x.c(),g(r,"class","mb-6"),g(e,"class","sidebar hidden md:block"),g(c,"class","main flex-auto"),g(n,"class","container flex py-12")},m(t,i){p(t,n,i),f(n,e),f(e,r),f(e,o),b&&b.m(e,null),f(n,s),f(n,c),x&&x.m(c,null),u=!0},p(t,[n]){b&&b.p&&1&n&&b.p(a(m,t,t[0],ut),l(m,t[0],n,lt)),x&&x.p&&1&n&&x.p(a(y,t,t[0],at),l(y,t[0],n,it))},i(t){u||(F(b,t),F(x,t),u=!0)},o(t){I(b,t),I(x,t),u=!1},d(t){t&&d(n),b&&b.d(t),x&&x.d(t)}}}function pt(t,n,e){let{$$slots:r={},$$scope:o}=n;return t.$set=(t=>{"$$scope"in t&&e(0,o=t.$$scope)}),[o,r]}class dt extends J{constructor(t){super(),z(this,t,pt,ft,s,{})}}function ht(t){let n,e,r,o,s,c,i,a,l;return{c(){n=h("div"),e=$(),(r=h("h1")).textContent="Choose the test:",o=$(),s=h("ul"),c=h("li"),(i=h("a")).textContent="The Moons of Jupiter",g(n,"class","container border bg-white"),g(i,"href","/reading/the-moons-of-jupiter")},m(t,d){p(t,n,d),p(t,e,d),p(t,r,d),p(t,o,d),p(t,s,d),f(s,c),f(c,i),l=u(a=tt.call(null,i))},d(t){t&&d(n),t&&d(e),t&&d(r),t&&d(o),t&&d(s),l()}}}function mt(t){let n;const e=new dt({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}});return{c(){S(e.$$.fragment)},m(t,r){B(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function $t(n){let e,r,o=n[5]+"";return{c(){e=h("p"),r=m(o)},m(t,n){p(t,e,n),f(e,r)},p:t,d(t){t&&d(e)}}}function gt(n){let e,r,o,s,c,i,a,l,u,b,y,x,v=n[4].title+"",k=n[4].questions[0].title+"";return{c(){e=h("h1"),r=m(v),o=$(),s=h("div"),c=h("div"),i=m(k),a=$(),(l=h("div")).textContent="Variants",u=$(),(b=h("div")).textContent="Buttons",y=$(),(x=h("div")).innerHTML='<div class="paragraph">\n              Paragraph\n            </div>',g(e,"class","text-center text-2xl mt-6"),g(c,"class","test__question"),g(l,"class","test__variants"),g(b,"class","test__controls"),g(x,"class","test__text"),g(s,"class","test")},m(t,n){p(t,e,n),f(e,r),p(t,o,n),p(t,s,n),f(s,c),f(c,i),f(s,a),f(s,l),f(s,u),f(s,b),f(s,y),f(s,x)},p:t,d(t){t&&d(e),t&&d(o),t&&d(s)}}}function bt(n){return{c:t,m:t,p:t,d:t}}function yt(n){let e,r,o={ctx:n,current:null,token:null,pending:bt,then:gt,catch:$t,value:4,error:5};return function(t,n){const e=n.token={};function r(t,r,o,s){if(n.token!==e)return;n.resolved=s;let c=n.ctx;void 0!==o&&((c=c.slice())[o]=s);const i=t&&(n.current=t)(c);let a=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==r&&t&&(D(),I(t,1,1,()=>{n.blocks[e]=null}),R())}):n.block.d(1),i.c(),F(i,1),i.m(n.mount(),n.anchor),a=!0),n.block=i,n.blocks&&(n.blocks[r]=i),a&&O()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=v();if(t.then(t=>{x(e),r(n.then,1,n.value,t),x(null)},t=>{x(e),r(n.catch,2,n.error,t),x(null)}),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var o}(r=n[0],o),{c(){e=h("div"),o.block.c(),g(e,"class","container border bg-white mt-8 p-4")},m(t,n){p(t,e,n),o.block.m(e,o.anchor=null),o.mount=(()=>e),o.anchor=null},p(t,[e]){{const r=(n=t).slice();r[4]=o.resolved,o.block.p(r,e)}},i:t,o:t,d(t){t&&d(e),o.block.d(),o.token=null,o=null}}}function xt(t,n,e){let{params:r={}}=n;const o=`data/tasks/${r.task}.json`;let s=async function(){try{const t=await fetch(o),n=await t.json();return n}catch(t){throw new Error(t)}}();return t.$set=(t=>{"params"in t&&e(1,r=t.params)}),[s,r]}function vt(n){let e,r,o,s,c,i;return{c(){e=h("div"),r=h("p"),o=m("Enter the "),(s=h("a")).textContent="App",g(s,"href","/home"),g(s,"class","text-primary"),g(e,"class","container flex py-12")},m(t,n){p(t,e,n),f(e,r),f(r,o),f(r,s),i=u(c=tt.call(null,s))},p:t,i:t,o:t,d(t){t&&d(e),i()}}}function kt(t){let n,e,r;return{c(){(n=h("h2")).textContent="NotFound",e=$(),(r=h("p")).textContent="Oops, this route doesn't exist!",g(n,"class","routetitle")},m(t,o){p(t,n,o),p(t,e,o),p(t,r,o)},d(t){t&&d(n),t&&d(e),t&&d(r)}}}function wt(t){let n;const e=new dt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}});return{c(){S(e.$$.fragment)},m(t,r){B(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}const _t=[];let Et;function At(t){t.node.classList.remove(t.className),t.pattern.test(Et)&&t.node.classList.add(t.className)}function Ct(t,n){if(!(n=n&&"string"==typeof n?{path:n}:n||{}).path&&t.hasAttribute("href")&&(n.path=t.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:e}=G(n.path),r={node:t,className:n.className,pattern:e};return _t.push(r),At(r),{destroy(){_t.splice(_t.indexOf(r),1)}}}function jt(t,n,e){const r=t.slice();return r[1]=n[e][0],r[2]=n[e][1],r}function Nt(t){let n,e,o,s,c,i,a,l=t[2]+"";return{c(){n=h("li"),e=h("a"),o=m(l),g(e,"href",s=t[1])},m(t,r){p(t,n,r),f(n,e),f(e,o),a=[u(c=tt.call(null,e)),u(i=Ct.call(null,e))]},p(t,n){1&n&&l!==(l=t[2]+"")&&b(o,l),1&n&&s!==(s=t[1])&&g(e,"href",s)},d(t){t&&d(n),r(a)}}}function Lt(n){let e,r,o=n[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=Nt(jt(n,o,t));return{c(){e=h("nav"),r=h("ul");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,n){p(t,e,n),f(e,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null)},p(t,[n]){if(1&n){let e;for(o=t[0],e=0;e<o.length;e+=1){const c=jt(t,o,e);s[e]?s[e].p(c,n):(s[e]=Nt(c),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=o.length}},i:t,o:t,d(t){t&&d(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t)}}}function qt(t,n,e){let{links:r=[]}=n;return t.$set=(t=>{"links"in t&&e(0,r=t.links)}),[r]}Z.subscribe(t=>{Et=t.location+(t.querystring?"?"+t.querystring:""),_t.map(At)});class Ot extends J{constructor(t){super(),z(this,t,qt,Lt,s,{links:0})}}function Ht(n){let e,r;const o=new Ot({props:{links:n[0]}});return{c(){e=h("div"),S(o.$$.fragment),g(e,"slot","sidebar")},m(t,n){p(t,e,n),B(o,e,null),r=!0},p:t,i(t){r||(F(o.$$.fragment,t),r=!0)},o(t){I(o.$$.fragment,t),r=!1},d(t){t&&d(e),P(o)}}}function Mt(t){let n;return{c(){(n=h("div")).innerHTML='<h2 class="title svelte-1ghalvf">Active</h2> \n    <div class="tasks_active">\n      Here active cards\n    </div> \n    <h2 class="title svelte-1ghalvf">Completed</h2> \n    <div class="tasks_comleted">\n      Here done cards\n    </div>',g(n,"slot","main")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function Tt(n){let e;return{c(){e=$()},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}function Dt(t){let n;const e=new dt({props:{$$slots:{default:[Tt],main:[Mt],sidebar:[Ht]},$$scope:{ctx:t}}});return{c(){S(e.$$.fragment)},m(t,r){B(e,t,r),n=!0},p(t,[n]){const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Rt(t){return[[["/home","Home tasks"],["/reading","Reading"]]]}const Ft={"/":class extends J{constructor(t){super(),z(this,t,null,vt,s,{})}},"/home":class extends J{constructor(t){super(),z(this,t,Rt,Dt,s,{})}},"/hello":ct,"/hello/:first/:last?":ct,"/reading":class extends J{constructor(t){super(),z(this,t,null,mt,s,{})}},"/reading/:task":class extends J{constructor(t){super(),z(this,t,xt,yt,s,{params:1})}},"*":class extends J{constructor(t){super(),z(this,t,null,wt,s,{})}}};function It(n){let e;const r=new et({props:{routes:Ft}});return{c(){S(r.$$.fragment)},m(t,n){B(r,t,n),e=!0},p:t,i(t){e||(F(r.$$.fragment,t),e=!0)},o(t){I(r.$$.fragment,t),e=!1},d(t){P(r,t)}}}return new class extends J{constructor(t){super(),z(this,t,null,It,s,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map
