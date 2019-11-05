(this["webpackJsonpweb-snippets"]=this["webpackJsonpweb-snippets"]||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),o=t.n(c),i=(t(23),t(1)),u=t(3),l=t(2);function s(){var e=Object(i.a)(["\n  background-color: #111;\n  color: #eee;\n  border: 1px solid #eee;\n  height: 40vh;\n  border-radius: 3px;\n  padding: 3px;\n"]);return s=function(){return e},e}function d(e){var n=e.codeType,t=e.code,a=e.setCode,c=e.editorTabs;return r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement(m,{spellCheck:!1,value:t,onChange:function(e){return a(e.target.value)},style:{width:function(){switch(c){case 1:return"90vw";case 2:return"45vw";case 3:default:return"30vw"}}(),margin:"0 10px"}}))}var m=l.a.textarea(s());function b(){var e=Object(i.a)(["\n  display: block;\n  background-color: white;\n  color: black;\n  width: 90vw;\n  height: 35vh;\n  margin: 1rem auto;\n"]);return b=function(){return e},e}function h(){var e=Object(i.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n"]);return h=function(){return e},e}function f(e){var n=e.code,t="data:text/html,"+encodeURIComponent(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,"Result"),r.a.createElement(v,{src:t}))}var p=l.a.h2(h()),v=l.a.iframe(b()),g=t(4),j=t(13),O=t.n(j),E=t(14),k=t.n(E),w=t(15),x=t.n(w),C=t(5),y=t.n(C);function S(){var e=Object(i.a)(["\n  margin: 0 1rem;\n"]);return S=function(){return e},e}function T(){var e=Object(i.a)(["\n  text-align: center;\n"]);return T=function(){return e},e}function J(){var e=Object(i.a)(["\n  background-color: #e2e2e2;\n  color: black;\n  border: 1px solid silver;\n  border-radius: 3px;\n  margin: 0 1rem;\n  padding: 0.2rem 0.6rem;\n"]);return J=function(){return e},e}function F(){var e=Object(i.a)(["\n  text-align: center;\n  margin: 1rem 0;\n"]);return F=function(){return e},e}function L(){var e=Object(i.a)(["\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n"]);return L=function(){return e},e}function H(){var e=Object(i.a)([""]);return H=function(){return e},e}function M(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0 1rem;\n"]);return M=function(){return e},e}var W=l.a.div(M()),z=l.a.div(H()),B=l.a.h1(L()),I=l.a.div(F()),R=l.a.button(J()),U=l.a.div(T()),D=l.a.label(S());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(a.useState)(g.html),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(g.css),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)(g.js),b=Object(u.a)(m,2),h=b[0],p=b[1],v=Object(a.useState)(3),j=Object(u.a)(v,2),E=j[0],w=j[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),T=S[0],J=S[1],F=Object(a.useState)(!0),L=Object(u.a)(F,2),H=L[0],M=L[1],N=Object(a.useState)(!0),$=Object(u.a)(N,2),q=$[0],A=$[1],G=Object(a.useState)(!0),K=Object(u.a)(G,2),P=K[0],Q=K[1];function V(e){var n=H,t=q,a=P;switch(e){case"html":M(n=!n);break;case"css":A(t=!t);break;case"js":default:Q(a=!a)}w(n+t+a)}return r.a.createElement(z,null,r.a.createElement(B,null,"Web Snippet Tester"),r.a.createElement(U,null,r.a.createElement(D,null,"HTML:"," ",r.a.createElement("input",{type:"checkbox",checked:H,onChange:function(){return V("html")}})),r.a.createElement(D,null,"CSS:"," ",r.a.createElement("input",{type:"checkbox",checked:q,onChange:function(){return V("css")}})),r.a.createElement(D,null,"JS:"," ",r.a.createElement("input",{type:"checkbox",checked:P,onChange:function(){return V("js")}}))),r.a.createElement(W,null,H&&r.a.createElement(d,{codeType:"HTML",code:t,setCode:c,editorTabs:E}),q&&r.a.createElement(d,{codeType:"CSS",code:l,setCode:s,editorTabs:E}),P&&r.a.createElement(d,{codeType:"JavaScript",code:h,setCode:p,editorTabs:E})),r.a.createElement(I,null,r.a.createElement(R,{onClick:function(){var e=y.a.format(t,{parser:"html",plugins:[x.a]}),n=y.a.format(l,{parser:"css",plugins:[k.a]}),a=y.a.format(h,{parser:"babel",plugins:[O.a]});c(e),s(n),p(a)}},"Format Code"),r.a.createElement(R,{onClick:function(){var e="\n    <html>\n      <head>\n        <style>\n          ".concat(l,"\n        </style>\n      </head>\n      <body>\n      ").concat(t,'\n      <script>\n        document.addEventListener("DOMContentLoaded", () => {\n          ').concat(h,"\n        });\n      <\/script>\n      </body>\n    </html>\n      ");J(e)}},"Update iFrame"),r.a.createElement(R,{onClick:function(){J("")}},"Clear iFrame")),r.a.createElement(f,{code:T}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"html":"   <h1>This is a header</h1>","css":"   h1 {color: red;}","js":"\\n\\n\\nconsole.log(\'Hello from the other frame...\')"}')}},[[18,1,2]]]);
//# sourceMappingURL=main.6435d058.chunk.js.map