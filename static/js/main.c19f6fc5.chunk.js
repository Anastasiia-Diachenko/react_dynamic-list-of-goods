(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(3),u=n(4),i=n(6),l=n(5),d=function(t){var e=t.goods;return a.a.createElement("ul",{className:"list-group"},e.map((function(t){return a.a.createElement("li",{key:t.id,className:"",style:{color:t.color}},t.name)})))};n(12);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){return f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},g=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.getGoods=function(e){e().then((function(e){t.setState({goods:e})}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;return a.a.createElement("div",{className:"goods"},a.a.createElement("h1",{className:"title"},"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"button btn-outline-success",onClick:function(){return t.getGoods(f)}},"Load All goods"),a.a.createElement("button",{type:"button",className:"button btn-outline-info",onClick:function(){return t.getGoods(m)}},"Load 5 first goods"),a.a.createElement("button",{type:"button",className:" button btn-outline-danger",onClick:function(){return t.getGoods(g)}},"Load red goods"),e.length>0&&a.a.createElement(d,{goods:e}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(b,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c19f6fc5.chunk.js.map