(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return App}));var a=n(4),r=n(2),c=n(21),l=n(22),s=n(23),i=n(24);class App extends r.default.Component{constructor(e){super(e)}render(){return r.default.createElement("div",null,r.default.createElement(c.default,null),r.default.createElement("div",{className:"app"},r.default.createElement(s.default,null),r.default.createElement("div",{className:"app-content"},r.default.createElement(i.default,null),Object(a.default)({loader:()=>n.e(3).then(n.bind(null,25))})),r.default.createElement(l.default,null)))}}},16:function(e,t,n){"use strict";n.r(t),n.d(t,"Link",(function(){return Link}));var a=n(2),r=n(19);class Link extends a.default.Component{constructor(e){super(e),this.handleClick=e=>{const{to:t,replace:n}=this.props;e.preventDefault(),t!==location.pathname&&(n?Object(r.historyReplace)(t):Object(r.historyPush)(t),Object(r.updateRoutes)())},Object(r.register)(this)}componentWillUnmount(){Object(r.unRegister)(this)}render(){const{to:e,children:t,exact:n=!0}=this.props,c=Object(r.matchPath)(e,n);return a.default.createElement("a",{active:!!c,href:e,onClick:this.handleClick,className:this.props.className},t)}}},19:function(e,t,n){"use strict";n.r(t),n.d(t,"instances",(function(){return a})),n.d(t,"register",(function(){return r})),n.d(t,"updateRoutes",(function(){return c})),n.d(t,"unRegister",(function(){return l})),n.d(t,"historyPush",(function(){return s})),n.d(t,"historyReplace",(function(){return i})),n.d(t,"matchPath",(function(){return u}));const a=[];function r(e){a.push(e)}function c(){a.forEach(e=>e.forceUpdate())}function l(e){a.splice(a.indexOf(e),1)}const s=e=>{window.history.pushState({},"",e)},i=e=>{window.history.replaceState({},"",e)};function o(e){return e.endsWith("/")?e.substr(0,e.length-1):e}const u=(e,t=!1)=>{const n=location.pathname;if(!e)return{path:null,url:n,isExact:!0};const a=new RegExp(`^${o(e)}`).exec(o(n));if(!a)return null;const[r]=a,c=o(n)===o(r);return t&&!c?null:{path:e,url:r,isExact:c}}},21:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ForkGithub}));var a=n(2);class ForkGithub extends a.default.Component{render(){return a.default.createElement("a",{style:"position: absolute; z-index: 100; right: 0",href:"https://github.com/oct16/mini-react-example"},a.default.createElement("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub"}))}}},22:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Footer}));var a=n(2);class Footer extends a.default.Component{constructor(){super(...arguments),this.state={copyright:"@Copyright 2019 oct16"}}render(){return a.default.createElement("footer",{className:"app-footer"},a.default.createElement("a",{href:"https://github.com/oct16/"},this.state.copyright))}}},23:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Header}));var a=n(33),r=n.n(a),c=n(2);class Header extends c.default.Component{render(){return c.default.createElement("header",{className:"app-header"},c.default.createElement("img",{className:"logo",src:r.a}))}}},24:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return LeftSide}));var a=n(16),r=n(2);class LeftSide extends r.default.Component{constructor(){super(...arguments),this.state={histories:Array.apply(null,{length:20}).map(()=>`mini-cooper-${Math.random().toString(16).substr(3,11)}-test-logger`),navList:[{name:"DASHBOARD",icon:"icofont-dashboard",to:"/mini-react/dashboard"},{name:"COOPER",icon:"icofont-ship",to:"/mini-react"},{name:"MY TEST",icon:"icofont-magento",to:"/mini-react/my"},{name:"HELP",icon:"icofont-files-stack",to:"/mini-react/help"}]}}render(){return r.default.createElement("aside",{className:"app-left"},r.default.createElement("ul",{className:"nav"},this.state.navList.map(e=>r.default.createElement("li",null,r.default.createElement(a.Link,{to:e.to},r.default.createElement("div",{className:"nav-item-container",active:!0},r.default.createElement("i",{className:e.icon}),r.default.createElement("span",{className:"title"},e.name)))))),r.default.createElement("div",{className:"history"},r.default.createElement("div",{className:"title"},"History"),r.default.createElement("ul",null,this.state.histories.map(e=>r.default.createElement("li",null,e)))))}}},33:function(e,t,n){e.exports=n.p+"0184a9a00a5faa5f1950f9acfed42fb6.png"}}]);
//# sourceMappingURL=2.afaf7653687ee244e007.js.map