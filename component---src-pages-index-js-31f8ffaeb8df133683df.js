(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(164),a(167)),c=a(166),l=a(205),o=a.n(l),s=a(181),m=a(206),d=a(182);t.default=function(e){e.location.pathname;return r.a.createElement(i.a,{currentPath:"/home/"},r.a.createElement(c.a,{title:"Home",keywords:["zeyadetman","portfolio"]}),r.a.createElement("div",{style:{textAlign:"center",margin:"0px auto",paddingTop:"2em",width:"80%",minWidth:320}},r.a.createElement("img",{src:o.a,style:{borderRadius:"50%",width:200,border:"5px solid #f2ece0",boxShadow:"0px 2px 14px rgba(0,0,0,0.6)"}}),r.a.createElement("h2",{className:"text-vertical-margin"},"Zeyad Etman"),r.a.createElement("h3",{className:"text-vertical-margin"},"Software Engineer, Front-End Developer"),r.a.createElement("p",null,"I Make Things On The Internet")),r.a.createElement("ul",{style:{display:"flex",justifyContent:"center"},className:"social-network"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/zeyadetman"},r.a.createElement(s.a,{icon:m.b}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},r.a.createElement(s.a,{icon:m.d}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},r.a.createElement(s.a,{icon:m.a}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},r.a.createElement(s.a,{icon:m.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},r.a.createElement(s.a,{icon:d.b})))))}},164:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(35),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"d",function(){return l.withPrefix}),a.d(t,"c",function(){return l.navigate});a(165);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},165:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},166:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(180),s=a.n(o),m=a(164);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},167:function(e,t,a){"use strict";a(26);var n=a(170),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(164),s=a(173),m=a.n(s),d={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},u={style:{color:"#fff"},className:"night-mode"},p=(a(36),a(82),a(174)),g=(a(175),a(171)),f=a.n(g),h=function(e){e.siteTitle;var t=e.mode,a=e.currentPath,n="day"===t?d:u,c=Object(p.useMedia)({maxWidth:"1111px"}),l=Object(p.useMedia)({maxWidth:"512px"}),s=Object(r.useState)(a||"404"),m=s[0],g=s[1],h=Object(r.useState)(!1),E=h[0],y=h[1];return i.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:f.a,style:{marginBottom:10,marginRight:"1em",width:35,height:35},alt:"logo"}),!E&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!l&&"Zeyad Etman"," $"),i.a.createElement("input",{autoFocus:!0,className:"input-path",value:"cd "+m,onChange:function(e){return g(e.target.value.split(" ")[1]||"")},onKeyPress:function(e){"Enter"===e.key&&(g(e.target.value.split(" ")[1]),".."===m&&-1!==a.indexOf("posts")?Object(o.c)(a.replace("/posts","").split("/")[1]):Object(o.c)(m))}}))),(!c||E)&&i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",activeClassName:"active-page-link"},"home")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/work",activeClassName:"active-page-link"},"work")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/today-i-learned",activeClassName:"active-page-link"},E?"til":"today i learned")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),c&&i.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em"},onClick:function(){y(!E)}},"☰"))};h.propTypes={siteTitle:l.a.string},h.defaultProps={siteTitle:""};var E=h,y=a(59),v=(a(176),a(177),a(178),a(179),function(e){var t=e.children,a=e.mode,c=e.toggleMode,l=e.currentPath,s="day"===a?d:u;return Object(r.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"}),i.a.createElement(o.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(E,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:l}),i.a.createElement(m.a,{className:"react-switch mode-toggle",checked:"day"===a,onChange:c,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,id:"material-switch"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},s,{style:Object.assign({},s.style),mode:a}),t)))},data:n})});v.propTypes={children:l.a.node.isRequired};t.a=Object(y.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(v)},169:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(61),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},171:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},205:function(e,t,a){e.exports=a.p+"static/me-397f4ea337b200a3fa5de6c5da9c0e5a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-31f8ffaeb8df133683df.js.map