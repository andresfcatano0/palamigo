(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(17),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"people",src:"https://robohash.org/".concat(a,"?set=set2")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.amigos;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 mb3 ba tc ",type:"search",placeholder:"Seach friends",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",borderTop:"1px solid white",height:"800px"}},e.children)},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"We have an error!"):this.props.children}}]),t}(a.Component),E=(n(19),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={amigos:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({amigos:t})})}},{key:"render",value:function(){var e=this.state,t=e.amigos,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Palamigos"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement(d,{amigos:a}))))}}]),t}(a.Component)),v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(21);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null))),v()},8:function(e,t,n){e.exports=n(23)}},[[8,3,2]]]);
//# sourceMappingURL=main.9b5e722e.chunk.js.map