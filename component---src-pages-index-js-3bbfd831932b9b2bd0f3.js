(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(161),a(168)),c=a(166),l=a(290),o=a.n(l),s=a(191),m=a(291),u=a(192);t.default=function(e){e.location.pathname;return r.a.createElement(i.a,{currentPath:"/home/"},r.a.createElement(c.a,{title:"Home",keywords:["zeyadetman","portfolio"]}),r.a.createElement("div",{style:{textAlign:"center",margin:"0px auto",paddingTop:"2em",width:"80%",minWidth:320}},r.a.createElement("img",{src:o.a,style:{borderRadius:"50%",width:200,border:"5px solid #f2ece0",boxShadow:"0px 2px 14px rgba(0,0,0,0.6)"}}),r.a.createElement("h2",{className:"text-vertical-margin"},"Zeyad Etman"),r.a.createElement("h3",{className:"text-vertical-margin"},"Software Engineer, Front-End Developer"),r.a.createElement("p",null,"I Make Things On The Internet")),r.a.createElement("ul",{style:{display:"flex",justifyContent:"center"},className:"social-network"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/zeyadetman"},r.a.createElement(s.a,{icon:m.b}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},r.a.createElement(s.a,{icon:m.d}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},r.a.createElement(s.a,{icon:m.a}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},r.a.createElement(s.a,{icon:m.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},r.a.createElement(s.a,{icon:u.b})))))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=a(35),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"d",function(){return l.withPrefix}),a.d(t,"c",function(){return l.navigate});a(162);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},162:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},163:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=a(59),o=a(3),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},165:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),c=a(1),l=a.n(c),o=a(180),s=a.n(o),m=a(161);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},168:function(e,t,a){"use strict";a(25);var n=a(164),r=a(0),i=a.n(r),c=a(1),l=a.n(c),o=a(161),s=(a(171),{style:{color:"rgb(36, 41, 46)"},className:"day-mode"}),m={style:{color:"#fff"},className:"night-mode"},u=(a(36),a(81),a(172)),d=(a(173),a(174),a(165)),p=a.n(d),f=function(e){e.siteTitle;var t=e.mode,a=e.currentPath,n="day"===t?s:m,c=Object(r.useState)(a||"404"),l=c[0],d=c[1],f=Object(u.useMedia)({maxWidth:"1111px"},!0),g=Object(u.useMedia)({maxWidth:"512px"},!0),E=Object(r.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:f,hideMyName:g}),h=E[0],y=E[1];return i.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:p.a,style:Object.assign({marginBottom:10,marginRight:"1em",width:35,height:35},"night"===t?{filter:"invert(100%)"}:{}),alt:"logo"}),!h.isShowMenuActive&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!g&&"Zeyad Etman"," $"),i.a.createElement("input",{autoFocus:!0,className:"input-path",value:"cd "+l,onChange:function(e){return d(e.target.value.split(" ")[1]||"")},onKeyPress:function(e){"Enter"===e.key&&(d(e.target.value.split(" ")[1]),".."===l&&-1!==a.indexOf("posts")?Object(o.c)(a.replace("/posts","").split("/")[1]):Object(o.c)(l))}}))),(h.isShowMenuActive||!f)&&i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",activeClassName:"active-page-link"},"home")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/work",activeClassName:"active-page-link"},"work")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/today-i-learned",activeClassName:"active-page-link"},h.isShowMenuActive?"til":"today i learned")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),f&&i.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em"},onClick:function(){y("TOGGLE_SHOW_MENU")}},"☰"))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var g=f,E=a(58),h=(a(175),a(176),a(177),a(178),function(e){var t=e.children,a=e.mode,c=(e.toggleMode,e.currentPath),l="day"===a?s:m;return Object(r.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"},[a]),i.a.createElement(o.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:c}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},l,{style:Object.assign({},l.style),mode:a}),t)))},data:n})});h.propTypes={children:l.a.node.isRequired};t.a=Object(E.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(h)},290:function(e,t,a){e.exports=a.p+"static/me-397f4ea337b200a3fa5de6c5da9c0e5a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3bbfd831932b9b2bd0f3.js.map