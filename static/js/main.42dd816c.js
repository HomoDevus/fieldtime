(()=>{var e={1931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(5004),l=r(1054),s=r(885),u=r(4627),o=r(5326),a=r(4046),i=r(9385);const c=(0,r(1352).create)(r(1947));var f=r(5671),d=r(3144),h=r(136),v=r(3930),g=r(1120);function y(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(e);r.length<t;)r="0"+r;return r}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,g.default)(e);if(t){var l=(0,g.default)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return(0,v.default)(this,r)}}var x=function(e){(0,h.default)(r,e);var t=p(r);function r(){var e;(0,f.default)(this,r);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return e="string"===typeof l[0]&&l[0].length<9?t.call(this,"2000-01-01T"+l[0]):t.call.apply(t,[this].concat(l)),(0,v.default)(e)}return(0,d.default)(r,[{key:"copy",value:function(){return new r(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())}},{key:"isoDate",value:function(){var e=String(this.getMonth()+1),t=String(this.getDate());return this.getFullYear()+"-"+y(e)+"-"+y(t)}},{key:"isoTime",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?y(this.getHours())+":"+y(this.getMinutes())+":"+y(this.getSeconds()):y(this.getHours())+":"+y(this.getMinutes())}},{key:"isoDatetime",value:function(){return this.isoDate()+" "+this.isoTime()}},{key:"ruDate",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=String(this.getMonth()+1),r=String(this.getDate());return e?y(r)+"."+y(t)+"."+this.getFullYear():y(r)+"."+y(t)}},{key:"ruDateTime",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.ruDate(e)+" "+this.isoTime(e)}},{key:"weekDay",value:function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])switch(this.getDay()){case 1:return"\u041f\u041d";case 2:return"\u0412\u0422";case 3:return"\u0421\u0420";case 4:return"\u0427\u0422";case 5:return"\u041f\u0422";case 6:return"\u0421\u0411";case 0:return"\u0412\u0421"}switch(this.getDay()){case 1:return"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a";case 2:return"\u0432\u0442\u043e\u0440\u043d\u0438\u043a";case 3:return"\u0441\u0440\u0435\u0434\u0430";case 4:return"\u0447\u0435\u0442\u0432\u0435\u0440\u0433";case 5:return"\u043f\u044f\u0442\u043d\u0438\u0446\u0430";case 6:return"\u0441\u0443\u0431\u0431\u043e\u0442\u0430";case 0:return"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"}}},{key:"change",value:function(e){var t=e.days,r=void 0===t?0:t,n=e.hours,l=void 0===n?0:n,s=e.minutes,u=void 0===s?0:s,o=e.seconds,a=864e5*r||0;return a+=36e5*l||0,a+=6e4*u||0,a+=1e3*(void 0===o?0:o)||0,this.setTime(this.getTime()+a),this}},{key:"monthName",value:function(){switch(this.getMonth()){case 0:return"\u044f\u043d\u0432\u0430\u0440\u044c";case 1:return"\u0444\u0435\u0432\u0440\u0430\u043b\u044c";case 2:return"\u043c\u0430\u0440\u0442";case 3:return"\u0430\u043f\u0440\u0435\u043b\u044c";case 4:return"\u043c\u0430\u0439";case 5:return"\u0438\u044e\u043d\u044c";case 6:return"\u0438\u044e\u043b\u044c";case 7:return"\u0430\u0432\u0433\u0443\u0441\u0442";case 8:return"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c";case 9:return"\u043e\u043a\u0442\u044f\u0431\u0440\u044c";case 10:return"\u043d\u043e\u044f\u0431\u0440\u044c";case 11:return"\u0434\u0435\u043a\u0430\u0431\u0440\u044c";default:return"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446"}}},{key:"daysInMonth",value:function(){var e=this.copy();return e.setDate(33),e.getDate()}}],[{key:"weekdayNames",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?["\u041f\u041d","\u0412\u0422","\u0421\u0420","\u0427\u0422","\u041f\u0422","\u0421\u0411","\u0412\u0421"]:["\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430","\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"]}},{key:"dateDiff",value:function(e,t){return Math.round((t-e)/36e5)}}]),r}((0,r(2407).default)(Date)),b=/^([0-2]|[01]\d:|2[0-3]:)([0-5]\d?)?$/,m=function(e,t){e.length<2&&(e="00:00");var r=y(parseInt(e.slice(0,2))+t)+e.slice(2);return b.test(r)?r:e},w=r(2629);function D(e){var t=(0,n.useState)(null!=e&&e.value&&b.test(e.value)?e.value:""),r=(0,s.default)(t,2),l=r[0],f=r[1],d=(0,n.useRef)(null),h={color:c`${e.class||""}`.color};function v(){null!=d&&d.current&&!d.current.isFocused()&&d.current.focus()}function g(t){return(null==e?void 0:e.onChange)&&5===(null==t?void 0:t.length)&&b.test(t)&&e.onChange(t)}return(0,w.jsxs)(i.default,{style:c`flex flex-row gap-3 items-center ${e.class||""}`,children:[e.useButtons&&(0,w.jsx)(o.default,{onPress:function(){v(),f((function(e){return m(e,-1)}))},hitSlop:10,children:(0,w.jsx)(u.default,{name:"minus",style:h})}),(0,w.jsx)(a.default,{ref:d,placeholder:"--:--",placeholderTextColor:h.color,inputMode:"numeric",maxLength:5,value:l,onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");2===e.length&&l.length>e.length?t=t.slice(0,1):e.length>=2&&(t=`${t.slice(0,2)}:${t.slice(2)}`),(0===t.length||b.test(t))&&f(t)},onBlur:function(e){var t,r;null!=e&&e.relatedTarget&&(null==e||null==(t=e.relatedTarget)?void 0:t.parentNode)===(null==e||null==(r=e.target)?void 0:r.parentNode)||g(e.nativeEvent.text)},onEndEditing:function(e){return g(e.nativeEvent.text)},style:[c`w-12 text-center`,h]}),e.useButtons&&(0,w.jsx)(o.default,{onPress:function(){v(),f((function(e){return m(e,1)}))},hitSlop:10,children:(0,w.jsx)(u.default,{name:"plus",style:h})})]})}var j=r(5288);function O(e){return function(t){if(!1===t.visible)return null;var r=c`${e} ${t.class?t.class:""}`,n="string"===typeof t.children?(0,w.jsx)(l.default,{children:t.children}):t.children;return t.onPress?(0,w.jsx)(j.default,{style:r,onPress:t.onPress,onLayout:t.onLayout,children:n}):(0,w.jsx)(i.default,{style:r,onLayout:t.onLayout,children:n})}}O("flex-row"),O("flex-row flex-1"),O("flex-row flex-2"),O("flex-row flex-3"),O("flex-row flex-4"),O("flex-row flex-5"),O("flex-row flex-6"),O("");var F=O("flex-1");O("flex-2"),O("flex-3"),O("flex-4"),O("flex-5"),O("flex-6"),O("border bg-white p-4 rounded-lg border-disable");function k(){return(0,w.jsxs)(F,{class:"m-5",children:[(0,w.jsxs)(l.default,{children:["\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0438\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0433\u043e\u0442\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."," "]}),(0,w.jsx)(l.default,{children:"\u0420\u0430\u0437\u043d\u043e\u0439 \u0448\u0438\u0440\u0438\u043d\u044b, \u0441 \u0440\u0430\u0437\u043d\u044b\u043c \u0444\u043e\u043d\u043e\u043c \u0438 \u0446\u0432\u0435\u0442\u043e\u043c \u0448\u0440\u0438\u0444\u0442\u0430"}),(0,w.jsx)(D,{class:"mt-2 bg-primary",value:null}),(0,w.jsx)(D,{class:"mt-2 bg-danger",value:(new x).isoDate()}),(0,w.jsx)(D,{value:null,class:"w-50 mt-2 bg-success"}),(0,w.jsx)(D,{value:null,class:"w-25 mt-2 bg-black text-white",useButtons:!0}),(0,w.jsx)(D,{value:"12:12",class:"mt-2 w-100 bg-silverLight text-primary",useButtons:!0}),(0,w.jsx)(D,{value:"12:12",class:"mt-2 bg-body text-primary",useButtons:!0,onChange:console.log})]})}},5662:(e,t,r)=>{"use strict";r.r(t),r.d(t,{colors:()=>n});var n={white:"#fff",black:"#000",mainText:"#454D5C",disable:"#85858c",primary:"#8380CF",primaryHover:"#6F6CB8",secondary:"#7091B8",secondaryHover:"#617B9A",danger:"#8D5151",dangerHover:"#7C4646",warning:"#DD9C3C",warningHover:"#B68030",body:"#EEF2F9",bodyLogin:"#77797D",successLight:"#a5c494",success:"#7D9570",successHover:"#67795e",successDark:"#67795e",silver:"#8E9BAC",silverLight:"#C2C8D1",inherit:"inherit",transparent:"transparent",alphaBlack:"rgba(0,0,0,0.5)",levelOne:"#EEF2F9",levelTwo:"#E3E8F2",levelThree:"#D7DDEA",levelFour:"#B9C2D4",levelFive:"#9DA8BE",levelSix:"#818DA7",event_presale:"#EB93FF",event_non_call:"#FCFB9C",event_needs_identified:"#FFDBDB",event_meeting_complete:"#98CBFF",event_confirmed:"#FCD780",event_contract:"#A2F2CD",event_full_payment:"#DEFF81",event_success:"#67795e",event_fail:"#8D5151"}},1947:(e,t,r)=>{var n=r(8416);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(1989);var u=r(5662).colors;e.exports={important:!0,theme:{colors:s({},u),backgroundColor:function(){return s({},u)},extend:{borderWidth:{DEFAULT:1}}}}}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,l,s)=>{if(!n){var u=1/0;for(c=0;c<e.length;c++){for(var[n,l,s]=e[c],o=!0,a=0;a<n.length;a++)(!1&s||u>=s)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(o=!1,s<u&&(u=s));if(o){e.splice(c--,1);var i=l();void 0!==i&&(t=i)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,l,s]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/fieldtime/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,s,[u,o,a]=n,i=0;if(u.some((t=>0!==e[t]))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(a)var c=a(r)}for(t&&t(n);i<u.length;i++)s=u[i],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[591],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.42dd816c.js.map