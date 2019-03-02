(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a(0),r=a.n(n),i=a(169),o=a(167),c=a(192);function l(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Contact"}),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:20}},r.a.createElement("div",{style:{gridColumn:"1/3"}},r.a.createElement("h1",null,"Hi! It's my pleasure to hear from you."),r.a.createElement("p",null,"I like code and anything related, I guess you too! so if you have something to share with me, contact me:",r.a.createElement("p",{style:{textAlign:"center",fontSize:"2em",fontWeight:700,background:"#fdbd12",lineHeight:"84px",color:"#000"}},"zeyadetman@gmail.com"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Wanna be friends?"),r.a.createElement(c.a,{screenName:"zeyadetman",options:{size:"large"}}))))}},160:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(2),o=a.n(i),c=a(159),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(161),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},163:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),c=a(56),l=a(3),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),o=a(2),c=a.n(o),l=a(178),s=a.n(l),d=a(160);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return console.log(c),i.a.createElement(d.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var m="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},169:function(e,t,a){"use strict";a(25);var n=a(162),r=a(0),i=a.n(r),o=a(2),c=a.n(o),l=a(160),s=a(173),d=a.n(s),u={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},m={style:{color:"#fff"},className:"night-mode"},p=(a(164),a(165)),g=a.n(p),f=function(e){e.siteTitle;var t="day"===e.mode?u:m;return i.a.createElement("header",Object.assign({},t,{className:t.className+" main-header"}),i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:g.a,style:{marginBottom:10,marginRight:"1em",width:50,height:50},alt:"logo"}),i.a.createElement("h1",{style:{marginRight:15,fontSize:"1.7em"}},i.a.createElement("span",{style:{color:"#fdbd12"}},"Z"),"eyad"," ",i.a.createElement("span",{style:{color:"#fdbd12"}},"E"),"tman")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/"},"home")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/projects"},"projects")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/work"},"work")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/blog"},"blog")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/contact"},"contact"))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var y=f,h=a(55),E=(a(166),function(e){var t=e.children,a=e.mode,o=e.toggleMode,c="day"===a?u:m;return Object(r.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"}),i.a.createElement(l.StaticQuery,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement(y,{siteTitle:e.site.siteMetadata.title,mode:a}),i.a.createElement(d.a,{className:"react-switch mode-toggle",checked:"day"===a,onChange:o,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,id:"material-switch"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",Object.assign({},c,{style:Object.assign({},c.style,{margin:"0 auto"}),mode:a}),t)))},data:n})});E.propTypes={children:c.a.node.isRequired};t.a=Object(h.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(E)}}]);
//# sourceMappingURL=component---src-pages-contact-js-8ef358a94443512b2898.js.map