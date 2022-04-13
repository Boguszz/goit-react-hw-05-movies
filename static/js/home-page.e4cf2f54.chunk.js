"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[223],{342:function(t,n,e){e.d(n,{Z:function(){return V}});var r,i,a,o,p,s,c,d=e(7),u=e.n(d),l=e(504),h=e(871),m=e(17),v=e(168),x=e(499),f=e(624),g=x.Z.li(r||(r=(0,v.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    width: calc((100% - 4 * 10px) / 2);\n    margin: 10px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 6 * 10px) / 3);\n  }\n"]))),w=x.Z.p(i||(i=(0,v.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"])),f.NN),b=x.Z.img(a||(a=(0,v.Z)(["\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),Z=x.Z.div(o||(o=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),j=x.Z.p(p||(p=(0,v.Z)(["\n  color: ",";\n"])),f.Dq),y=x.Z.p(s||(s=(0,v.Z)(["\n  color: ",";\n"])),f.Dq),_=x.Z.span(c||(c=(0,v.Z)(["\n  font-weight: 700;\n"]))),C=e(184);function k(t){var n=t.id,e=t.title,r=t.poster,i=t.voteAverage,a=t.voteCount,o=(0,h.TH)();return(0,C.jsx)(g,{children:(0,C.jsxs)(l.rU,{to:"/movies/".concat(n),state:{from:o},children:[(0,C.jsx)(w,{children:e||"Movie without a title"}),(0,C.jsx)(b,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):m,alt:e}),(0,C.jsxs)(Z,{children:[(0,C.jsxs)(j,{children:["Vote average: ",(0,C.jsx)(_,{children:i})]}),(0,C.jsxs)(y,{children:["Vote count:",(0,C.jsxs)(_,{children:[" ",a]})]})]})]})})}k.prototype={id:u().number,title:u().string,poster:u().string,voteAverage:u().number,voteCount:u().number};var A,q=k,D=x.Z.ul(A||(A=(0,v.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"])));function N(t){var n=t.movies;return(0,C.jsx)(D,{children:n.map((function(t){var n=t.id,e=t.title,r=t.poster,i=t.voteAverage,a=t.voteCount;return(0,C.jsx)(q,{id:n,title:e,poster:r,voteAverage:i,voteCount:a},n)}))})}N.prototype={movies:u().arrayOf(u().shape({id:u().number,title:u().string,poster:u().string,voteAverage:u().number,voteCount:u().number})).isRequired};var V=N},842:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(152),i=e(791),a=e(861),o=e(757),p=e.n(o);function s(){return(s=(0,a.Z)(p().mark((function t(){var n,e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"d783920aea034ba2adae6031a0bf96c0","https://api.themoviedb.org/3/trending/all/day",n="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0"),t.next=5,fetch("".concat("https://api.themoviedb.org/3/trending/all/day").concat(n));case 5:return e=t.sent,t.next=8,e.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var c=function(){return s.apply(this,arguments)},d=e(70),u=e(342),l=e(184);var h=function(){var t=(0,i.useState)(null),n=(0,r.Z)(t,2),e=n[0],a=n[1];return(0,i.useEffect)((function(){c().then((function(t){var n=t.results,e=[];n.map((function(t){var n={id:t.id,title:t.original_title,poster:t.poster_path,voteAverage:t.vote_average,voteCount:t.vote_count};return e.push(n)})),a(e)}))}),[]),e&&(0,l.jsx)(d.Z,{children:(0,l.jsx)(u.Z,{movies:e})})}},17:function(t,n,e){t.exports=e.p+"static/media/poster.f55d248454cd0ab3bc5b.jpg"}}]);
//# sourceMappingURL=home-page.e4cf2f54.chunk.js.map