(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(166);a(25);function i(e){var t=e.style,a=e.title,n=e.url,o=e.type,i=e.color;return r.a.createElement("div",{style:Object.assign({display:"flex",justifyContent:"center",alignItems:"center"},t)},r.a.createElement("span",{style:{background:i,padding:"2px 5px 1px 5px",fontSize:12,textTransform:"capitalize",display:"inline-block",verticalAlign:"text-bottom",color:"#0d0d0d"}},o),a&&n&&r.a.createElement("a",{href:n,style:{marginLeft:5}},a))}var c=a(164),l=a(56);t.default=Object(l.b)(function(e){return{mode:e.mode}})(function(e){var t=e.mode;Object(n.useEffect)(function(){delete a.c[214],a(214),console.log(t)},[t]);return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Work",keywords:["work","hire","frontend","developer","arqamfc","lynks"]}),r.a.createElement("h1",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:35}},"Hire Me",r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"horizontal","data-theme":"day"===t?"light":"dark","data-vanity":"zeyadetman"},r.a.createElement("a",{className:"LI-simple-link",href:"https://eg.linkedin.com/in/zeyadetman"},"Zeyad Etman"))),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:15}},[{title:"Front-End Development",url:"https://lynks.com",logo:"https://bosta.co/images/clients/lynks-logo-en.png",date:"Jan 2019 – Present"},{title:"Front-End Development",url:"https://www.arqamfc.com/",logo:"https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_402,h_274,al_c,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png",date:"Jun 2018 – Nov 2018"}].map(function(e,t){var a=e.date,n=e.title,o=e.url,c=e.logo;return e.current,r.a.createElement("div",{className:"content",key:t,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{height:150,width:150,display:"flex",alignItems:"center"}},r.a.createElement("a",{href:o},r.a.createElement("img",{src:c,width:"150px"}))),r.a.createElement("div",null,r.a.createElement(i,{type:n,color:"rgb(226, 226, 226)",style:{marginBottom:5,fontWeight:600}}),r.a.createElement(i,{type:a,color:"rgb(255, 202, 43)"})))})))})},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(154),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(156),s=a.n(d);a.d(t,"PageRenderer",function(){return s.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},160:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(57),l=a(3),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},161:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},163:function(e,t,a){},164:function(e,t,a){"use strict";var n=a(165),r=a(0),o=a.n(r),i=a(2),c=a.n(i),l=a(178),d=a.n(l),s=a(155);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return console.log(c),o.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var m="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},166:function(e,t,a){"use strict";a(25);var n=a(159),r=a(0),o=a.n(r),i=a(2),c=a.n(i),l=a(155),d=a(177),s=a.n(d),u={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},m={style:{color:"#fff"},className:"night-mode"},p=(a(161),a(162)),f=a.n(p),g=function(e){e.siteTitle;var t="day"===e.mode?u:m;return o.a.createElement("header",Object.assign({},t,{className:t.className+" main-header"}),o.a.createElement("div",{className:"main-logo"},o.a.createElement("img",{src:f.a,style:{marginBottom:10,marginRight:"1em",width:50,height:50},alt:"logo"}),o.a.createElement("h1",{style:{marginRight:15,fontSize:"1.7em"}},o.a.createElement("span",{style:{color:"#fdbd12"}},"Z"),"eyad"," ",o.a.createElement("span",{style:{color:"#fdbd12"}},"E"),"tman")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/"},"home")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/projects"},"projects")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/work"},"work")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/blog"},"blog")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/about"},"about"))))};g.propTypes={siteTitle:c.a.string},g.defaultProps={siteTitle:""};var y=g,h=a(56),b=(a(163),function(e){var t=e.children,a=e.mode,i=e.toggleMode,c="day"===a?u:m;return Object(r.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"}),o.a.createElement(l.StaticQuery,{query:"2994927498",render:function(e){return o.a.createElement("div",{style:{margin:"0 auto"}},o.a.createElement(y,{siteTitle:e.site.siteMetadata.title,mode:a}),o.a.createElement(s.a,{className:"react-switch mode-toggle",checked:"day"===a,onChange:i,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,id:"material-switch"}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",Object.assign({},c,{style:Object.assign({},c.style,{margin:"0 auto"}),mode:a}),t)))},data:n})});b.propTypes={children:c.a.node.isRequired};t.a=Object(h.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(b)},214:function(e,t,a){var n;a(35),a(281),n=window,console.log("dd"),n.LIRenderAll=function(){function e(e){var t=e.getAttribute("data-size"),a=e.getAttribute("data-locale"),n=e.getAttribute("data-type"),r=e.getAttribute("data-theme"),o=e.getAttribute("data-vanity"),i=e.getAttribute("data-version"),c=e.getAttribute("data-ei"),l=e.getAttribute("data-entity"),s=e.getAttribute("data-iscreate"),u=Math.round(1e6*Math.random());c=c?"https://badges.linkedin-ei.com/":"https://badges.linkedin.com/",a=["locale="+encodeURIComponent(a),"badgetype="+encodeURIComponent(n),"badgetheme="+encodeURIComponent(r),"uid="+encodeURIComponent(u),"version="+encodeURIComponent(i)],"v2"===i?(c+="view",a.push("badgesize="+encodeURIComponent(t)),a.push("entity="+encodeURIComponent(l)),a=a.concat(function(e){return Array.prototype.slice.call(e.attributes).filter(function(e){return-1!==e.name.lastIndexOf("data-key-",0)}).map(function(e){return encodeURIComponent(e.name.replace("data-","").toLowerCase())+"="+encodeURIComponent(e.value)})}(e))):(c+="profile",a.push("maxsize="+encodeURIComponent(t)),a.push("trk="+encodeURIComponent("profile-badge")),a.push("vanityname="+encodeURIComponent(o))),s&&a.push("fromCreate=true"),t=c+"?"+a.join("&"),e.setAttribute("data-uid",u),(e=document.createElement("script")).src=t,d.push(e),document.body.appendChild(e)}function t(e,a){if("SCRIPT"!==e.tagName||s[e.src]||a&&(!a||e.getAttribute("data-isartdeco")))for(var n=0,r=e.childNodes;n<r.length;)t(r[n++],a);else e.parentNode.replaceChild(function(e){for(var t=document.createElement("script"),a=e.attributes.length-1;0<=a;a--)t.setAttribute(e.attributes[a].name,e.attributes[a].value);return t}(e),e),s[e.src]=!0;return e}function a(){(c>=l&&0<l||c>=u.length)&&(delete n.LIBadgeCallback,d.map(function(e){document.body.removeChild(e)}))}var r,o,i,c=0,l=0,d=[],s={},u=Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge"));for(r=0,o=u.length;r<o;r++)(i=u[r]).getAttribute("data-rendered")||(l++,i.setAttribute("data-rendered",!0),e(i));n.LIBadgeCallback=function(e,n){var r,i,l,d;for(c++,r=0,o=u.length;r<o;r++)d=(i=u[r]).getAttribute("data-iscreate"),(l=parseInt(i.getAttribute("data-uid"),10))===n&&((l=document.createElement("div")).innerHTML=e,i.appendChild(l),t(i,d));a()}},"complete"===document.readyState?n.LIRenderAll():n.addEventListener("load",n.LIRenderAll,!1)},281:function(e,t,a){var n=a(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-work-js-390407fc5c9796221b04.js.map