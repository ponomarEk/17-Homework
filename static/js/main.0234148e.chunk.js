(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(4),i=n.n(o),r=(n(15),n(1)),c=n(2),u=n.n(c),m=n(5),l=n(6),p=n(7),h=n(8),d=n(9),f=(n(17),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={time:t.props.time,minutes:Math.floor(t.props.time/6e4),seconds:Math.floor(t.props.time%6e4/1e3),active:!1,width:100,step:t.props.step},t.startTimer=function(){t.setState({active:!0}),t.props.onTimeStart(t.state)},t.stopTimer=function(){t.setState({active:!1}),t.props.onTimePause()},t.isAutostart=function(){t.props.autostart&&t.startTimer()},t.changeTime=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.state.time>=1e3)){e.next=3;break}return e.next=3,t.setState({time:t.state.time-1e3});case 3:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.state.step/1e3*(this.state.width/(this.props.time/1e3));this.isAutostart(),this.timer=setInterval((function(){t.state.active&&(t.state.minutes>0||t.state.seconds>0)?(t.props.onTick(t.state.time/1e3),t.changeTime(),t.setState({minutes:Math.floor(t.state.time/6e4),seconds:Math.floor(t.state.time%6e4/1e3)})):0===t.state.minutes&&0===t.state.seconds&&(t.props.onTimeEnd(),clearInterval(t.timer))}),1e3),this.widthTimer=setInterval((function(){t.state.active&&(t.state.minutes>0||t.state.seconds>0)&&t.setState({width:t.state.width-e.toFixed(4)})}),this.state.step)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.startTimer,onTick:this.props.onTick},"Start"),s.a.createElement("button",{onClick:this.stopTimer},"Stop"),s.a.createElement("p",null,this.state.minutes+" \u043c\u0438\u043d\u0443\u0442  "+this.state.seconds+" \u0441\u0435\u043a\u0443\u043d\u0434"),s.a.createElement("div",{style:{width:this.state.width+"%"},className:"row"}))}}]),n}(a.Component));n(18),n(19);var v=function(){var t=Object(a.useState)(6e4),e=Object(r.a)(t,1)[0],n=Object(a.useState)(!0),o=Object(r.a)(n,1)[0],i=Object(a.useState)(2e3),c=Object(r.a)(i,1)[0];return s.a.createElement("div",{className:"App"},s.a.createElement(f,{time:e,autostart:o,onTick:function(t){return console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+t+" \u0441\u0435\u043a\u0443\u043d\u0434!")},step:c,onTimeEnd:function(){return console.log("\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e!")},onTimeStart:function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d!")},onTimePause:function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0443\u0437\u0435!")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0234148e.chunk.js.map