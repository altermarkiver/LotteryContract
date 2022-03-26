(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{145:function(e,t,n){e.exports=n(329)},150:function(e,t,n){},152:function(e,t,n){},186:function(e,t){},188:function(e,t){},220:function(e,t){},222:function(e,t){},255:function(e,t){},256:function(e,t){},261:function(e,t){},263:function(e,t){},287:function(e,t){},329:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(139),i=n.n(o),c=(n(150),n(22)),s=n.n(c),u=n(46),l=n(140),p=n(141),f=n(144),h=n(143),m=(n(152),n(142)),d=n.n(m);window.ethereum.enable();var y=window.web3.currentProvider,v=new d.a(y),g=new v.eth.Contract([{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x0713D4415E278Bb48425220EB684835FBc63CdFf"),w=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={manager:"",players:[],balance:"",value:"",message:""},e.onSubmit=function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v.eth.getAccounts();case 3:return a=t.sent,e.setState({message:"Waiting on transaction success..."}),t.next=7,g.methods.enter().send({from:a[0],value:v.utils.toWei(e.state.value,"ether")});case 7:e.setState({message:"You have been entered!"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onClick=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.eth.getAccounts();case 2:return n=t.sent,e.setState({message:"Waiting on transaction success..."}),t.next=6,g.methods.pickWinner().send({from:n[0]});case 6:e.setState({message:"A winner has been picked!"});case 7:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.methods.manager().call();case 2:return t=e.sent,e.next=5,g.methods.getPlayers().call();case 5:return n=e.sent,e.next=8,v.eth.getBalance(g.options.address);case 8:a=e.sent,this.setState({manager:t,players:n,balance:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Lottery Contract"),r.a.createElement("p",null,"This contract is managed by ",this.state.manager,". There are currently ",this.state.players.length," people entered, competing to win ",v.utils.fromWei(this.state.balance,"ether")," ether!"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"Want to try your luck?"),r.a.createElement("div",null,r.a.createElement("label",null,"Amount of ether to enter"),r.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),r.a.createElement("button",null,"Enter")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Ready to pick a winner?"),r.a.createElement("button",{onClick:this.onClick},"Pick a winner!"),r.a.createElement("hr",null),r.a.createElement("h1",null,this.state.message))}}]),n}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");b?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[145,1,2]]]);
//# sourceMappingURL=main.4805c30b.chunk.js.map