(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(e,t,n){"use strict";n.r(t),n.d(t,"Route",(function(){return Route}));var a=n(1),r=n(6),l=n(19);class Route extends r.default{constructor(e){super(e),this.handlePop=()=>Object(l.updateRoutes)()}componentWillMount(){addEventListener("popstate",this.handlePop),Object(l.register)(this)}componentWillUnmount(){removeEventListener("popstate",this.handlePop),Object(l.unRegister)(this)}render(){const{path:e,exact:t}=this.props,{component:n,children:r,...u}=this.props;return Object(l.matchPath)(e,t)&&n?Object(a.wrapComponent)("route",n.tagName,u,n.attributes):""}}},25:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return RightSide}));var a=n(4),r=n(17),l=n(2),u=n(26),o=n(27),d=n(28),c=n(29);class RightSide extends l.default.Component{render(){return l.default.createElement("div",null,l.default.createElement(r.Route,{className:"test-route-name",path:"/mini-react",exact:!0,component:Object(a.default)({loader:()=>n.e(1).then(n.bind(null,30)),loading:l.default.createElement(u.default,null)})}),l.default.createElement("div",{style:{paddingLeft:"15px"}},l.default.createElement(r.Route,{path:"/mini-react/help",component:l.default.createElement(d.default,null)}),l.default.createElement(r.Route,{path:"/mini-react/my",component:l.default.createElement(c.default,null)}),l.default.createElement(r.Route,{path:"/mini-react/dashboard",component:l.default.createElement(o.default,null)})))}}},26:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Loading}));var a=n(2);class Loading extends a.default.Component{render(){return a.default.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},a.default.createElement("b",null,"loading..."))}}},27:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return DashBoard}));var a=n(2);class DashBoard extends a.default.Component{render(){return a.default.createElement("h1",null,"DashBoard Component")}}},28:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Help}));var a=n(2);class Help extends a.default.Component{render(){return a.default.createElement("h1",null,"Help Component")}}},29:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return My}));var a=n(2);class My extends a.default.Component{render(){return a.default.createElement("h1",null,"My Component")}}}}]);
//# sourceMappingURL=3.afaf7653687ee244e007.js.map