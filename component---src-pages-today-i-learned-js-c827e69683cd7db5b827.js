(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(168),c=a(166),o=(a(225),a(58)),l=a(191);t.default=Object(o.b)(function(e){return{mode:e.mode}})(function(e){var t=e.mode,a=e.location.pathname,n=[{title:"Gradient text style in CSS",date:"2019-03-08",body:r.a.createElement("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"gradient text hover",src:"//codepen.io/zeyadetman/embed/preview/rRydWv/?height=265&theme-id=dark&default-tab=css,result",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen"," ",r.a.createElement("a",{href:"https://codepen.io/zeyadetman/pen/rRydWv/"},"gradient text hover")," ","by Zeyad Etman (",r.a.createElement("a",{href:"https://codepen.io/zeyadetman"},"@zeyadetman"),") on"," ",r.a.createElement("a",{href:"https://codepen.io"},"CodePen"),".")}];return r.a.createElement(i.a,{currentPath:a},r.a.createElement(c.a,{title:"Today I Learned"}),r.a.createElement("h1",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},"Today I Learned",r.a.createElement("a",{style:{marginTop:5},href:"https://stackexchange.com/users/6213143/zeyad-etman"},r.a.createElement("img",{src:"https://stackexchange.com/users/flair/6213143.png?theme="+("night"===t?"dark":"day"),width:"208",height:"58",alt:"profile for Zeyad Etman on Stack Exchange, a network of free, community-driven Q&A sites",title:"profile for Zeyad Etman on Stack Exchange, a network of free, community-driven Q&A sites"}))),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gridGap:15}},n.map(function(e){var t=e.title.replace(/ /g,"").toLowerCase();return r.a.createElement("div",{className:"card",key:e.title},r.a.createElement("h2",{style:{marginBottom:5,paddingLeft:10},id:t},e.title),r.a.createElement("time",{style:{paddingLeft:10},dateTime:e.date},e.date),r.a.createElement("div",{style:{marginTop:25}},e.body),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(l.b,{url:"https://zeyadetman.github.io/today-i-learned/#"+t,options:{text:"TIL: "+e.title,via:"zeyadetman",size:"large"}})))})))})},161:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(1),c=a.n(i),o=a(35),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"d",function(){return o.withPrefix}),a.d(t,"c",function(){return o.navigate});a(162);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},162:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},163:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),i=a(1),c=a.n(i),o=a(59),l=a(3),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},165:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),c=a(1),o=a.n(c),l=a(180),s=a.n(l),d=a(161);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(d.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var u="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},168:function(e,t,a){"use strict";a(25);var n=a(164),r=a(0),i=a.n(r),c=a(1),o=a.n(c),l=a(161),s=(a(171),{style:{color:"rgb(36, 41, 46)"},className:"day-mode"}),d={style:{color:"#fff"},className:"night-mode"},m=(a(36),a(81),a(172)),u=(a(173),a(174),a(165)),p=a.n(u),g=function(e){e.siteTitle;var t=e.mode,a=e.currentPath,n="day"===t?s:d,c=Object(r.useState)(a||"404"),o=c[0],u=c[1],g=Object(m.useMedia)({maxWidth:"1111px"},!0),y=Object(m.useMedia)({maxWidth:"512px"},!0),f=Object(r.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:g,hideMyName:y}),h=f[0],E=f[1];return i.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:p.a,style:Object.assign({marginBottom:10,marginRight:"1em",width:35,height:35},"night"===t?{filter:"invert(100%)"}:{}),alt:"logo"}),!h.isShowMenuActive&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!y&&"Zeyad Etman"," $"),i.a.createElement("input",{autoFocus:!0,className:"input-path",value:"cd "+o,onChange:function(e){return u(e.target.value.split(" ")[1]||"")},onKeyPress:function(e){"Enter"===e.key&&(u(e.target.value.split(" ")[1]),".."===o&&-1!==a.indexOf("posts")?Object(l.c)(a.replace("/posts","").split("/")[1]):Object(l.c)(o))}}))),(h.isShowMenuActive||!g)&&i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",activeClassName:"active-page-link"},"home")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/work",activeClassName:"active-page-link"},"work")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/today-i-learned",activeClassName:"active-page-link"},h.isShowMenuActive?"til":"today i learned")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),g&&i.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em"},onClick:function(){E("TOGGLE_SHOW_MENU")}},"☰"))};g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var y=g,f=a(58),h=(a(175),a(176),a(177),a(178),function(e){var t=e.children,a=e.mode,c=(e.toggleMode,e.currentPath),o="day"===a?s:d;return Object(r.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"},[a]),i.a.createElement(l.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(y,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:c}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},o,{style:Object.assign({},o.style),mode:a}),t)))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=Object(f.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(h)}}]);
//# sourceMappingURL=component---src-pages-today-i-learned-js-c827e69683cd7db5b827.js.map