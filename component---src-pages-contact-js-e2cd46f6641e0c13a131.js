(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var o=n(0),r=n.n(o),a=n(217),i=n(221),c=n(236),u=n(238);function s(e){var t=e.location.pathname;return r.a.createElement(a.a,{currentPath:t},r.a.createElement(i.a,{title:"Contact"}),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:20}},r.a.createElement("div",{style:{gridColumn:"1/3"}},r.a.createElement("h1",null,"Hi! It's my pleasure to hear from you."),r.a.createElement("p",null,"I like code and anything related, I guess you too! so if you have something to share with me, contact me:",r.a.createElement("p",{style:{textAlign:"center",fontSize:"1.7em",fontWeight:700,background:"linear-gradient(to right, #ffbf00, #ff6a00)",lineHeight:"84px",color:"#000",borderRadius:"50px"}},"zeyadetman@gmail.com"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Wanna be friends?"),r.a.createElement(c.a,{screenName:"zeyadetman",options:{size:"large"}}))),r.a.createElement(u.a,null))}},212:function(e,t,n){var o,r,a;n(28),n(38),n(37),a=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r=!1,a="push",i="readyState",c="onreadystatechange",u={},s={},l={},d={};function p(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return r;return 1}function m(e,t){p(e,function(e){return t(e),1})}function f(t,n,o){t=t[a]?t:[t];var r=n&&n.call,i=r?n:o,c=r?t.join(""):n,y=t.length;function w(e){return e.call?e():u[e]}function g(){if(!--y)for(var e in u[c]=1,i&&i(),l)p(e.split("|"),w)&&!m(l[e],w)&&(l[e]=[])}return setTimeout(function(){m(t,function t(n,o){return null===n?g():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(c&&(s[c]=1),2==d[n]?g():setTimeout(function(){t(n,!0)},0)):(d[n]=1,c&&(s[c]=1),void h(n,g)))})},0),f}function h(e,r){var a,u=n.createElement("script");u.onload=u.onerror=u[c]=function(){u[i]&&!/^c|loade/.test(u[i])||a||(u.onload=u[c]=null,a=1,d[e]=2,r())},u.async=1,u.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(u,o.lastChild)}return f.get=h,f.order=function(e,t,n){!function o(r){r=e.shift(),e.length?f(r,o):f(r,t,n)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,n){e=e[a]?e:[e];var o,r=[];return!m(e,function(e){u[e]||r[a](e)})&&p(e,function(e){return u[e]})?t():(o=e.join("|"),l[o]=l[o]||[],l[o][a](t),n&&n(r)),f},f.done=function(e){f([null],e)},f},e.exports?e.exports=a():void 0===(r="function"==typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r)},213:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var o=n(0),r=n.n(o),a=n(72),i=n.n(a);n.d(t,"a",function(){return i.a}),n.d(t,"c",function(){return a.withPrefix});n(214),n(9).default.enqueue;var c=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,o=e.query,a=e.render,i=n?n.data:t[o]&&t[o].data;return r.a.createElement(r.a.Fragment,null,i&&a(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,o=e.render,a=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:o||a,staticQueryData:e})})}},214:function(e,t,n){var o;e.exports=(o=n(216))&&o.default||o},215:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},r={style:{color:"#fff"},className:"night-mode"}},216:function(e,t,n){"use strict";n.r(t);n(20);var o=n(0),r=n.n(o),a=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},217:function(e,t,n){"use strict";(function(e){n(20),n(223),n(142);var o=n(218),r=n(0),a=n.n(r),i=n(213),c=n(215),u=n(219),s=n(99),l=(n(228),n(229),n(230),n(231),n(233));l.a.initialize("UA-50784035-2"),"undefined"!=typeof window&&l.a.pageview(window.location.pathname+window.location.search);t.a=Object(s.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(function(t){var n=t.children,s=t.mode,l=t.toggleMode,d=t.currentPath,p="day"===s?c.a:c.b,m=Object(r.useState)(e&&e.localStorage&&Number(e.localStorage.isSaveBatteryMode)||1),f=m[0],h=m[1];return Object(r.useEffect)(function(){"night"===s?(p=c.b,document.body.style.backgroundColor="#0e0e0e"):(p=c.a,document.body.style.backgroundColor="#fff")},[s]),a.a.createElement(i.b,{query:"2994927498",render:function(e){return a.a.createElement("div",{style:{margin:"0 auto"}},a.a.createElement(u.a,{siteTitle:e.site.siteMetadata.title,mode:s,currentPath:d,toggleMode:l,isSaveBatteryMode:f,setSaveBatteryMode:function(e){localStorage.setItem("isSaveBatteryMode",e?1:0),h(e)}}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a.a.createElement("main",Object.assign({},p,{style:Object.assign({},p.style),mode:s}),n)))},data:o})})}).call(this,n(141))},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},219:function(e,t,n){"use strict";n(20);var o=n(0),r=n.n(o),a=n(213),i=n(224),c=(n(225),n(215)),u=(n(226),n(220)),s=n.n(u),l=n(277);n(227);t.a=function(e){var t=e.toggleMode,n=e.mode,u=(e.currentPath,e.isSaveBatteryMode),d=e.setSaveBatteryMode,p="day"===n?c.a:c.b,m=Object(i.useMedia)({maxWidth:"1111px"},!0),f=Object(i.useMedia)({maxWidth:"512px"},!0),h=Object(o.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:m,hideMyName:f}),y=h[0],w=h[1],g=Object(l.a)();u||(g={}),Object(o.useEffect)(function(){"isSupported"in g&&"level"in g&&"charging"in g&&g.level>.6&&g.charging?d(!1):"isSupported"in g&&"level"in g&&"charging"in g&&g.level<.25&&!g.charging&&"day"===n&&u&&t()},[g]);var b=function(e){t(e);try{localStorage.setItem("mode",e)}catch(n){return n}};return r.a.createElement("header",Object.assign({},p,{className:p.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:s.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===n?{filter:"invert(100%)"}:{},{},f?{}:{marginBottom:10}),alt:"logo"}),!y.isShowMenuActive&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!f&&"Zeyad Etman"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(y.isShowMenuActive||!m)&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(a.a,{to:"/",activeClassName:"active-page-link"},"home")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/work",activeClassName:"active-page-link"},"work")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/snippets",activeClassName:"active-page-link"},"Snippets")),r.a.createElement("li",null,r.a.createElement(a.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),m&&r.a.createElement("a",{style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){w("TOGGLE_SHOW_MENU")}},"☰"),"day"===n?r.a.createElement("i",{title:"Day mode is on",onClick:function(){return b("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Dark mode is on",onClick:function(){return b("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}}),u?r.a.createElement("i",{title:"Save battery mode is on",onClick:function(){return d(!1)},className:"twa twa-battery",style:{fontSize:"2em"}}):r.a.createElement("i",{title:"Save battery mode is off",onClick:function(){return d(!0)},className:"twa twa-electric-plug",style:{fontSize:"2em"}})))}},220:function(e,t,n){e.exports=n.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},221:function(e,t,n){"use strict";var o=n(222),r=n(0),a=n.n(r),i=n(232),c=n.n(i),u=n(213);function s(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title;return a.a.createElement(u.b,{query:l,render:function(e){var o=t||e.site.siteMetadata.description;return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:o})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var l="1025518380"},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},235:function(e,t,n){"use strict";n(35),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(o,r,a){for(var i=arguments.length,c=Array(3<i?i-3:0),u=3;u<i;u++)c[u-3]=arguments[u];return function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(1!=!!e||!e)}(t,o,r,a)?function(e,t){return Object.hasOwnProperty.call(e,t)}(o,r)?e.apply(void 0,[o,r,a].concat(c)):function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")}(o,r,a,n):e.apply(void 0,[o,r,a].concat(c))}}},236:function(e,t,n){"use strict";n(20);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}var u=n(103);function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?Object(u.a)(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(0),h=n.n(f),y=n(15),w=n.n(y),g=n(235),b=n.n(g),v=n(237),E=n.n(v);n.d(t,"b",function(){return M}),n.d(t,"a",function(){return k});var C="https://platform.twitter.com/widgets.js";m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e)}},{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{sourceType:w.a.oneOf(["profile","likes","list","collection","URL","widget"]).isRequired,screenName:b()(w.a.string,function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)}),userId:b()(w.a.number,function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)}),ownerScreenName:b()(w.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),slug:b()(w.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),id:b()(w.a.oneOfType([w.a.number,w.a.string]),function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType}),url:b()(w.a.string,function(e){return"url"===e.sourceType}),widgetId:b()(w.a.string,function(e){return"widget"===e.sourceType}),options:w.a.object,autoHeight:w.a.bool,theme:w.a.oneOf(["dark","light"]),linkColor:w.a.string,borderColor:w.a.string,noHeader:w.a.bool,noFooter:w.a.bool,noBorders:w.a.bool,noScrollbar:w.a.bool,transparent:w.a.bool,lang:w.a.string});var M=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(M,"propTypes",{url:w.a.string.isRequired,options:w.a.object});var k=function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(k,"propTypes",{screenName:w.a.string.isRequired,options:w.a.object}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tag:w.a.string.isRequired,options:w.a.object}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{screenName:w.a.string.isRequired,options:w.a.object}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"renderWidget",value:function(){var e=this;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then(function(t){e.props.onLoaded&&e.props.onLoaded(t)}):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){e.renderWidget()})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tweetId:w.a.string.isRequired,options:w.a.object,onLoaded:w.a.func}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"shareMoment"})}}]),t}(),"propTypes",{momentId:w.a.string.isRequired,options:w.a.object}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:w.a.number.isRequired,options:w.a.object}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:w.a.string.isRequired}),m(function(e){function t(){return o(this,t),s(this,l(t).apply(this,arguments))}return p(t,f["Component"]),a(t,[{key:"componentDidMount",value:function(){var e=this;E.a.canUseDOM&&n(212)(C,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return h.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{username:w.a.string.isRequired,options:w.a.object})},238:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(0),r=n.n(o),a=n(213),i=function(e){var t=e.page,n=e.info;return r.a.createElement("div",{className:"card",style:{padding:"15px 1.5em"}},r.a.createElement("h3",{style:{textAlign:"center",marginTop:0}},t.path?r.a.createElement(a.a,{to:t.path},t.title):r.a.createElement("a",{href:"javascript:void(0);"},t.title)),n)},c=[{page:{path:"/projects",title:"Side Projects & Tools"},info:"I'm building some cool stuff to learn new things, and make the internet a better place."},{page:{path:"/blog",title:"Writing"},info:r.a.createElement("p",null,"I'm Writing from time to time, mainly programming and a little of mathematics. You also can follow me on"," ",r.a.createElement("a",{href:"https://dev.to/zeyadetman"},"dev.to"))},{page:{title:"Follow Me"},info:r.a.createElement("p",null,"You can follow me on ",r.a.createElement("a",{href:"https://github.com/zeyadetman"},"GitHub"),", ",r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},"Twitter"),", ",r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},"Facebook"),", ",r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},"LinkedIn"),", ",r.a.createElement("a",{href:"https://stackoverflow.com/users/5721245/zeyad-etman"},"Stack Overflow"),", ",r.a.createElement("a",{href:"https://www.quora.com/profile/Zeyad-Etman"},"Quora"),", ",r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},"Email"),".")}];function u(){return r.a.createElement("div",{style:{marginTop:"15px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"15px"}},c.map(function(e){var t=e.page,n=e.info;return r.a.createElement(i,{page:t,key:t.title,info:n})}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-e2cd46f6641e0c13a131.js.map