(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{185:function(e,t,n){},201:function(e,t,n){"use strict";var r=n(185);n.n(r).a},226:function(e,t,n){"use strict";n(218),n(219),n(193),n(88),n(209),n(194);var r=n(195),s=(n(211),n(196),n(52),n(57),n(58),n(59),n(60),n(56),n(200),n(220),n(53),n(192),n(221),n(22)),u=n(222),i=n.n(u),o=n(223),a=n.n(o),c=n(224);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,d=null,g=null,p={buildIndex:function(e){var t=Object(c.useDefault)(new c.Segment),n={encode:!1,async:!0,tokenize:function(e){return t.doSegment(e,{simple:!0})}};n=h({},n,{doc:{id:"key",field:["title","headersStr","content"]}}),(d=new i.a(n)).add(e),g=a.a.keyBy(e,"path")},match:(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,s,u,i,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:7,e.next=3,d.search([{field:"title",query:t,limit:r,boost:10},{field:"headersStr",query:t,limit:r,boost:7},{field:"content",query:t,limit:r}]);case 3:return s=e.sent,u=s.map((function(e){return h({},e,{parentPageTitle:y(e)},v(e,t,n))})),i=a.a.groupBy(u,"parentPageTitle"),e.abrupt("return",a.a.values(i).map((function(e){return e.map((function(e,t){return 0===t?e:h({},e,{parentPageTitle:null})}))})).flat());case 7:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)})};function y(e){var t=e.path.split("/"),n="/";return t[1]&&(n="/".concat(t[1],"/")),(g[n]||e).title}function v(e,t,n){var r=function(e,t,n){var r=n.map((function(t){return x(e,t)||w(e,t)})).filter((function(e){return e}));if(0===r.length)return null;if(r.every((function(e){return null!=e.headerIndex})))return x(e,t)||r[0];return w(e,t)||r.find((function(e){return null==e.headerIndex}))}(e,t.toLowerCase(),n);if(!r)return{headingStr:m(e),slug:"",contentStr:null};if(null!=r.headerIndex)return{headingStr:m(e,r.headerIndex),slug:"#"+e.headers[r.headerIndex].slug,contentStr:null};var s=a.a.findLastIndex(e.headers||[],(function(e){return null!=e.charIndex&&e.charIndex<r.charIndex}));return-1===s&&(s=null),{headingStr:m(e,s),slug:null==s?"":"#"+e.headers[s].slug,contentStr:b(e,r)}}function m(e,t){if(null==t)return e.title;for(var n=[],r=function(){var r=e.headers[t];n.unshift(r),-1===(t=a.a.findLastIndex(e.headers,(function(e){return e.level===r.level-1}),t-1))&&(t=null)};null!=t;)r();return n.map((function(e){return e.title})).join(" > ")}function x(e,t){if(!e.headers)return null;for(var n=0;n<e.headers.length;n++){var r=e.headers[n].title.toLowerCase().indexOf(t);if(-1!==r)return{headerIndex:n,charIndex:r,termLength:t.length}}return null}function w(e,t){if(!e.contentLowercase)return null;var n=e.contentLowercase.indexOf(t);return-1===n?null:{headerIndex:null,charIndex:n,termLength:t.length}}function b(e,t){var n=t.charIndex,r=t.termLength,s=e.content.lastIndexOf("\n",n),u=e.content.indexOf("\n",n);-1===s&&(s=0),-1===u&&(u=e.content.length);var i=e.content.slice(s,u);if(120>=i.length)return i;var o=n-s,a=(120-r)/2,c=Math.max(o-a,0),l=Math.min(c+120,i.length),h=i.slice(c,l);return c>0&&(h="..."+h),l<i.length&&(h+="..."),h}var S,k={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0,suggestions:null}},computed:{queryTerms:function(){return this.query?this.query.trim().toLowerCase().split(" ").filter((function(e){return e})):[]},showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},watch:{query:function(){this.getSuggestions()}},mounted:function(){p.buildIndex(this.$site.pages),this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{highlight:function(e){return this.queryTerms.length,e},getSuggestions:(S=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.query){e.next=2;break}return e.abrupt("return");case 2:if(this.queryTerms.length){e.next=5;break}return this.suggestions=[],e.abrupt("return");case 5:return e.next=7,p.match(this.query,this.queryTerms,this.$site.themeConfig.searchMaxSuggestions||SEARCH_MAX_SUGGESTIONS);case 7:this.suggestions=e.sent;case 8:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)}),getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=SEARCH_PATHS;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&SEARCH_HOTKEYS.includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path+this.suggestions[e].slug),this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},O=(n(201),n(2)),I=Object(O.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown(t)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===e.focusIndex},on:{mousedown:function(t){return e.go(r)},mouseenter:function(t){return e.focus(r)}}},[n("a",{attrs:{href:t.path+t.slug},on:{click:function(e){e.preventDefault()}}},[t.parentPageTitle?n("div",{staticClass:"parent-page-title",domProps:{innerHTML:e._s(e.highlight(t.parentPageTitle))}}):e._e(),e._v(" "),n("div",{staticClass:"suggestion-row"},[n("div",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),n("div",{staticClass:"suggestion-content"},[t.headingStr?n("div",{staticClass:"header"},[e._v(e._s(t.headingStr))]):e._e(),e._v(" "),t.contentStr?n("div",[e._v(e._s(t.contentStr))]):e._e()])])])])})),0):e._e()])}),[],!1,null,null,null);t.a=I.exports}}]);