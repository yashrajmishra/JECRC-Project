(this["webpackJsonpjecrc-project"]=this["webpackJsonpjecrc-project"]||[]).push([[5],{164:function(t,e,c){"use strict";var a=c(2),n=c(83),s=["mousedown","touchstart"];e.a=function(t,e,c){void 0===c&&(c=s);var r=Object(a.useRef)(e);Object(a.useEffect)((function(){r.current=e}),[e]),Object(a.useEffect)((function(){for(var e=function(e){var c=t.current;c&&!c.contains(e.target)&&r.current(e)},a=0,s=c;a<s.length;a++){var o=s[a];Object(n.d)(document,o,e)}return function(){for(var t=0,a=c;t<a.length;t++){var s=a[t];Object(n.c)(document,s,e)}}}),[c,t])}},724:function(t,e,c){"use strict";c.r(e);var a=c(37),n=c(7),s=c(2),r=c(722),o=c(5),d=c(89),i=c(164),l=c(18),u=void 0,j=function(t){var e=t.stateCode,c=t.trail,j=Object(s.useState)(!1),b=Object(a.a)(j,2),f=b[0],m=b[1],O=Object(s.useRef)(),v=Object(o.g)(),h=Object(r.a)().t;Object(i.a)(O,(function(){m(!1)}));var p=Object(d.useTransition)(f,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),x=Object(s.useCallback)((function(t){m(!1),v.push("/state/".concat(t))}),[v]);return Object(l.jsxs)("div",{className:"StateDropdown",ref:O,children:[Object(l.jsx)(d.animated.h1,{className:"state-name fadeInUp",style:c,onClick:m.bind(u,!f),children:h(n.v[e])}),p((function(t,c){return c&&Object(l.jsx)(d.animated.div,{className:"dropdown",style:t,children:Object.keys(n.k).filter((function(t){return"TT"!==t&&t!==e})).sort((function(t,e){return n.v[t].localeCompare(n.v[e])})).map((function(t){return Object(l.jsx)("h1",{className:"item",onClick:x.bind(u,t),children:h(n.v[t])},t)}))})})),f&&Object(l.jsx)("div",{className:"backdrop"})]})},b=c(20);function f(t){var e,c,a,o,i,u=t.data,f=t.stateCode,m=Object(r.a)().t,O=Object(s.useMemo)((function(){var t=[];return[0,0,0].map((function(e,c){return t.push({animationDelay:"".concat(250*c,"ms")}),null})),t}),[]),v=Object(d.useSpring)({total:Object(b.h)(u,"total","tested"),config:n.s});return Object(l.jsxs)("div",{className:"StateHeader",children:[Object(l.jsxs)("div",{className:"header-left",children:[Object(l.jsx)(j,{stateCode:f,hyperlink:!1,trail:O[0]}),(null===u||void 0===u||null===(e=u.meta)||void 0===e?void 0:e.last_updated)&&Object(l.jsx)("h5",{className:"fadeInUp",style:O[1],children:"".concat(m("Last Updated on")," ").concat(Object(b.c)(u.meta.last_updated,"dd MMM, p")," ").concat(m("IST"))})]}),Object(l.jsxs)("div",{className:"header-right fadeInUp",style:O[2],children:[Object(l.jsx)("h5",{children:m("Tested")}),Object(l.jsx)(d.animated.h2,{children:v.total.to((function(t){return Object(b.e)(Math.floor(t))}))}),(null===u||void 0===u||null===(c=u.meta)||void 0===c||null===(a=c.tested)||void 0===a?void 0:a.last_updated)&&Object(l.jsx)("h5",{className:"timestamp",children:"".concat(m("As of")," ").concat(Object(b.c)(u.meta.tested.last_updated,"dd MMMM"))}),(null===u||void 0===u||null===(o=u.meta)||void 0===o||null===(i=o.tested)||void 0===i?void 0:i.source)&&Object(l.jsxs)("h5",{children:["".concat(m("per")," "),Object(l.jsx)("a",{href:u.meta.tested.source,target:"_noblank",children:m("source")})]})]})]})}e.default=Object(s.memo)(f)}}]);
//# sourceMappingURL=5.831433a2.chunk.js.map