(this["webpackJsonpjecrc-project"]=this["webpackJsonpjecrc-project"]||[]).push([[35],{636:function(t,e,r){"use strict";r.r(e);var n=r(37),c=r(7),a=r(20),i=r(85),o=r.n(i),u=r(641),s=r(119),f=r(705),l=r(143),j=r(685),b=r(171),O=r(687),d=(r(100),r(58)),h=r(69),p=r(82),y=r.n(p),g=r(2),v=r(108),k=r(18),m=10,x=10,w=2,M=10;function A(t){var e=t.timeseries,r=t.date,i=Object(g.useRef)([]),p=r||Object(a.g)(),y=Object(v.a)(),A=Object(n.a)(y,2),R=A[0],S=A[1].width;S=Math.min(S,120);var E=Object(g.useMemo)((function(){var t=Object.keys(e||{}).filter((function(t){return t<=p})),r=t[t.length-1],n=Object(d.a)(Object(h.a)(Object(a.k)(r),c.o),{representation:"date"});return t.filter((function(t){return t>=n}))}),[p,e]);return Object(g.useEffect)((function(){if(S){var t=E.length,r=S-x,n=75-w,o=Object(f.a)().clamp(!0).domain([Object(a.k)(E[0]||p),Object(a.k)(E[t-1])||p]).range([M,r]);i.current.forEach((function(r,i){var f,d=Object(j.a)(r),h=c.r[i],p=c.w[h].color,y=Object(u.a)(E,(function(t){return Math.abs(Object(a.h)(e[t],"delta",h))})),g=Object(l.a)().clamp(!0).domain([-y,y]).range([n,m]),v=Object(b.a)().curve(O.a).x((function(t){return o(Object(a.k)(t))})).y((function(t){return g(Object(a.h)(e[t],"delta",h))}));d.selectAll("path").data(t?[E]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",p+"99").attr("stroke-width",2.5).attr("d",v).attr("stroke-dasharray",(function(){return f=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",f).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(j.a)(this).attr("d"),r=v(t);return Object(s.interpolatePath)(e,r)})).selection()})),d.selectAll("circle").data(t?[E[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",p).attr("r",2.5).attr("cx",(function(t){return o(Object(a.k)(t))})).attr("cy",(function(t){return g(Object(a.h)(e[t],"delta",h))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return o(Object(a.k)(t))})).attr("cy",(function(t){return g(Object(a.h)(e[t],"delta",h))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return o(Object(a.k)(t))})).attr("cy",(function(t){return g(Object(a.h)(e[t],"delta",h))})).style("opacity",1).selection()}))}))}}),[p,E,e,S]),Object(k.jsx)("div",{className:"Minigraph",children:c.r.map((function(t,e){return Object(k.jsx)("div",{className:o()("svg-parent"),ref:0===e?R:null,children:Object(k.jsx)("svg",{ref:function(t){i.current[e]=t},preserveAspectRatio:"xMidYMid meet",width:S,height:75})},t)}))})}var R=function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!y()(e.stateCode,t.stateCode)&&!!y()(e.date,t.date)))};e.default=Object(g.memo)(A,R)},82:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,c,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(c=n;0!==c--;)if(!t(e[c],r[c]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(a=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(c=n;0!==c--;)if(!Object.prototype.hasOwnProperty.call(r,a[c]))return!1;for(c=n;0!==c--;){var i=a[c];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=35.254d9a55.chunk.js.map