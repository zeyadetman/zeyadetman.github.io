(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,a){"use strict";a.r(t);a(80),a(81);var n=a(284),o=a(0),r=a.n(o),i=a(169),s=a(167),l=a(160),d=a(186),c=a(185);function u(e){var t=e.excerpt,a=e.title,n=e.date,o=(e.id,e.timeToRead),i=e.slug;return r.a.createElement("article",{style:{marginBottom:55,width:"70%",marginLeft:"auto",marginRight:"auto",minWidth:320},className:"article-summary article"},r.a.createElement("header",null,r.a.createElement("h3",{style:{fontSize:"1.6em",margin:"10px 0"}},r.a.createElement(l.Link,{to:"/"+i},a)," "),r.a.createElement("small",null,r.a.createElement("span",null,n),"   •   ",r.a.createElement("span",null,r.a.createElement(c.a,{icon:d.a})," ",o+" "+(o>1?"mins":"min")+" read"))),r.a.createElement("p",null,t))}var m=a(187);a(193);function f(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Blog",keywords:["zeyadetman","blog","technical"]}),r.a.createElement(l.StaticQuery,{query:"432827260",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},"Writings & Thoughts",r.a.createElement(m.a,{screenName:"zeyadetman"})),t.map(function(e){var t=e.node;return!t.fields.slug.includes("/ar/")&&r.a.createElement(u,{title:t.frontmatter.title,date:t.frontmatter.date,id:t.id,timeToRead:t.timeToRead,excerpt:t.excerpt,key:t.id,slug:t.fields.slug})}))},data:n}))}a.d(t,"default",function(){return f})},160:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),o=a.n(n),r=a(2),i=a.n(r),s=a(159),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(161),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),f=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),s=a(56),l=a(3),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},164:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(168),o=a(0),r=a.n(o),i=a(2),s=a.n(i),l=a(174),d=a.n(l),c=a(160);function u(e){var t=e.description,a=e.lang,o=e.meta,i=e.keywords,s=e.title;return r.a.createElement(c.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var m="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},169:function(e,t,a){"use strict";a(25);var n=a(163),o=a(0),r=a.n(o),i=a(2),s=a.n(i),l=a(160),d=a(172),c=a.n(d),u={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},m={style:{color:"#fff"},className:"night-mode"},f=(a(164),a(165)),p=a.n(f),h=function(e){e.siteTitle;var t="day"===e.mode?u:m;return r.a.createElement("header",Object.assign({},t,{className:t.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:p.a,style:{marginBottom:10,marginRight:"1em",width:50,height:50},alt:"logo"}),r.a.createElement("h1",{style:{marginRight:15,fontSize:"1.7em"},className:"name-logo"},"Zeyad Etman")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},"home")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/projects"},"projects")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/work"},"work")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/blog"},"blog")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/today-i-learned"},"today i learned")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/contact"},"contact"))))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var g=h,b=a(55),y=(a(166),function(e){var t=e.children,a=e.mode,i=e.toggleMode,s="day"===a?u:m;return Object(o.useEffect)(function(){document.body.style.backgroundColor="night"===a?"#0e0e0e":"#fff"}),r.a.createElement(l.StaticQuery,{query:"2994927498",render:function(e){return r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(g,{siteTitle:e.site.siteMetadata.title,mode:a}),r.a.createElement(c.a,{className:"react-switch mode-toggle",checked:"day"===a,onChange:i,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,id:"material-switch"}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",Object.assign({},s,{style:Object.assign({},s.style,{margin:"0 auto"}),mode:a}),t)))},data:n})});y.propTypes={children:s.a.node.isRequired};t.a=Object(b.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(y)},193:function(e,t,a){},284:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"9f8ac2d1-3cfb-5c8d-bb70-2491f54e0f27",excerpt:"I revamped my blog to be built on Gatsbyjs instead of Jekyll, Everything become cleaner, and faster. In this post I'll explain what are the…",frontmatter:{title:"Revamp my blog from Jekyll to Gatsby, and You have to try",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/Revamp my blog from Jekyll to Gatsby, and You have to try/"},wordCount:{words:312}}},{node:{id:"f1961b29-0576-5164-a1b0-c533d7b57414",excerpt:"قمت بتجديد مدونتي على Gatsbyjs بدلاً من Jekyll…",frontmatter:{title:"طوّرت مدونتى من jekyll الى GatsbyJS, عليك تجربتها",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/Revamp my blog from Jekyll to Gatsby, and You have to try/ar/"},wordCount:{words:263}}},{node:{id:"3d703f15-9942-57eb-94c5-3d77455b1d43",excerpt:"Pure Functions Vs Impure Functions Hello, in this post I'll explain the difference between pure and impure functions in JavaScript, and How…",frontmatter:{title:"Refactoring Functions",date:"February 14, 2019"},timeToRead:3,fields:{slug:"blog/posts/refactoring-functions/"},wordCount:{words:421}}},{node:{id:"b5eea32d-6fc1-5355-b808-794f2418ffb2",excerpt:"HashTables Before we make a hashtable, let's talk about its components  arrays ,  functions , and  hashing . read them even if you know…",frontmatter:{title:"Hashtables for newbies",date:"September 26, 2018"},timeToRead:3,fields:{slug:"blog/posts/hashtables-for-newbies/"},wordCount:{words:373}}},{node:{id:"86aa4555-5bb8-5c40-badf-6713827030f2",excerpt:"In this post, i'll explain how to pass a state between components in Reactjs.\nWe'll build a small 'How many books did you read?' app, in…",frontmatter:{title:"How to pass state between components in reactjs (Full Code)",date:"July 25, 2018"},timeToRead:4,fields:{slug:"blog/posts/How-to-pass-state-between-components-in-reactjs/"},wordCount:{words:401}}},{node:{id:"f2a2fe76-1d87-59dc-9e5e-049c0627ece9",excerpt:"The problem i want to talk about in this post that we consider our minds should have one direction or thought, and this direction must be…",frontmatter:{title:"Developers should have two minds, technical mind and business mind.",date:"December 03, 2017"},timeToRead:4,fields:{slug:"blog/posts/Developers-should-have-two-minds/"},wordCount:{words:743}}},{node:{id:"9e2bfaae-3a64-5aa6-b9b7-9ba83c360778",excerpt:"",frontmatter:{title:"Top 12 Repositories on github 'to me' (september 2017)",date:"September 30, 2017"},timeToRead:1,fields:{slug:"blog/posts/top-12-repositories-on-github-to-me-september-2017/"},wordCount:{words:null}}},{node:{id:"39f32496-eb47-5cff-b3c0-e11334aa703f",excerpt:"Assalamu Alaikum everyone :D\nI just finished my fourth and last project on  Intermediate Front End Development Projects  on  freecodecamp…",frontmatter:{title:"Intermediate Front End Development Projects on freecodecamp in two days",date:"September 13, 2017"},timeToRead:3,fields:{slug:"blog/posts/intermediate-front-end-development-projects-on-freecodecamp-in-two-days/"},wordCount:{words:390}}},{node:{id:"75c50269-658f-5d56-8aa4-8ca028894813",excerpt:"Wait for us and follow on twitter  @counteributors   ☺️",frontmatter:{title:"Don't leave your projects die. Let others contribute.",date:"September 09, 2017"},timeToRead:1,fields:{slug:"blog/posts/dont-leave-your-projects-die-let-others-contribute/"},wordCount:{words:9}}},{node:{id:"62fffeb6-cc54-53e6-adde-fa95a030b917",excerpt:"",frontmatter:{title:"What's the number of Triangles in irregular hexagon ?",date:"July 21, 2017"},timeToRead:1,fields:{slug:"blog/posts/whats-the-number-of-triangles-in-irregular-hexagon/"},wordCount:{words:null}}},{node:{id:"86480d71-53f0-5a60-91ff-8f37fb888de6",excerpt:"‘A’ is a criminal, he wants to rob a bank so he asked his friends ‘B’ and ‘C’ for help. They robbed the bank successfully but unfortunately…",frontmatter:{title:"How Dropbox Knows When You’re Sharing Copyrighted Stuff?",date:"June 30, 2017"},timeToRead:1,fields:{slug:"blog/posts/how-dropbox-knows-when-youre-sharing-copyrighted-stuff/"},wordCount:{words:156}}},{node:{id:"7941df5b-f08d-5342-94ba-1674be87ea6a",excerpt:"the program takes the file path from user, then calculates its sha-256 hash, then takes the folder path from user to search in and start…",frontmatter:{title:"Remove Duplicate Files in python",date:"June 21, 2017"},timeToRead:2,fields:{slug:"blog/posts/remove-duplicate-files-in-python/"},wordCount:{words:50}}},{node:{id:"f1b7d77d-6d54-52c8-9a85-0043f7cdb15e",excerpt:'The Puzzle "ABCD  *  D = DCBA", Replace every character with a number to make the equation mathematically right. The Solution using brute…',frontmatter:{title:"ABCD * D = DCBA (Puzzle+Solution)",date:"April 07, 2017"},timeToRead:1,fields:{slug:"blog/posts/abcd-d-dcba-puzzlesolution/"},wordCount:{words:27}}},{node:{id:"0dc8ad57-6033-5c0c-80b8-a3da0acae876",excerpt:"Grokking Algorithms An illustrated guide for programmers and other curious people  by  Aditya Y. Bhargava My rating:  4 of 5 stars To me…",frontmatter:{title:"My Review > Grokking Algorithms An illustrated guide for programmers and other curious people",date:"March 23, 2017"},timeToRead:1,fields:{slug:"blog/posts/my-review-grokking-algorithms-an-illustrated-guide-for-programmers-and-other-curious-people/"},wordCount:{words:63}}},{node:{id:"834f7038-4891-5552-86c3-2a9f024f19d4",excerpt:"Math, Better Explained: Learn to Unlock Your Math Intuition  by  Kalid Azad \n \nThe Greatest book of 'Aha!' Moments in math i've ever read…",frontmatter:{title:"Zeyad Etman's Reviews > Math, Better Explained: Learn to Unlock Your Math Intuition",date:"January 27, 2017"},timeToRead:1,fields:{slug:"blog/posts/zeyad-etmans-reviews-math-better-explained-learn-to-unlock-your-math-intuition/"},wordCount:{words:74}}},{node:{id:"2dd6cad1-04c2-547a-bc83-a64e199f0e0e",excerpt:"Here's the problem from  Mr.Honner Blog : I was recently reminded of an excellent math problem involving mixtures. Imagine yourself sitting…",frontmatter:{title:"Coffee and Cream problem, My solution",date:"June 21, 2016"},timeToRead:2,fields:{slug:"blog/posts/coffee-and-cream-problem-my-solution/"},wordCount:{words:229}}},{node:{id:"1e276cbb-28e4-5994-906a-0b714128b63a",excerpt:"Head First 2D Geometry  by  Lindsey Fallow Stray My rating:  4 of 5 stars View all my reviews",frontmatter:{title:"I have finished Head First 2D Geometry book",date:"June 19, 2016"},timeToRead:1,fields:{slug:"blog/posts/i-have-finished-head-first-2d-geometry-book/"},wordCount:{words:18}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ee2ce574f4d2976f7154.js.map