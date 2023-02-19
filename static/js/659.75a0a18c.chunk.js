"use strict";(self.webpackChunkinsta_clone=self.webpackChunkinsta_clone||[]).push([[659],{7346:function(e,t,n){n.d(t,{Z:function(){return N}});var a={};function r(){return a}function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===i(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(e,t){o(2,arguments);var n=u(e),a=u(t),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function l(e){o(1,arguments);var t=u(e);return function(e){o(1,arguments);var t=u(e);return t.setHours(23,59,59,999),t}(t).getTime()===function(e){o(1,arguments);var t=u(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}(t).getTime()}function d(e,t){o(2,arguments);var n,a=u(e),r=u(t),i=s(a,r),d=Math.abs(function(e,t){o(2,arguments);var n=u(e),a=u(t);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(a,r));if(d<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*d);var c=s(a,r)===-i;l(u(e))&&1===d&&1===s(e,r)&&(c=!1),n=i*(d-Number(c))}return 0===n?0:n}var c={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},m="trunc";function h(e,t,n){o(2,arguments);var a,r=function(e,t){return o(2,arguments),u(e).getTime()-u(t).getTime()}(e,t)/1e3;return((a=null===n||void 0===n?void 0:n.roundingMethod)?c[a]:c[m])(r)}var f={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},g=function(e,t,n){var a,r=f[e];return a="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function v(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var y={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},p=function(e,t,n,a){return b[e]};function w(e){return function(t,n){var a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!==n&&void 0!==n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}var M={ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function D(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,u=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return}(s,(function(e){return e.test(u)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n;return}(s,(function(e){return e.test(u)}));return i=e.valueCallback?e.valueCallback(l):l,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var S,W={ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(S.matchPattern);if(!n)return null;var a=n[0],r=e.match(S.parsePattern);if(!r)return null;var o=S.valueCallback?S.valueCallback(r[0]):r[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(a.length)}}),era:D({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:D({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:D({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:D({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},k={code:"en-US",formatDistance:g,formatLong:y,formatRelative:p,localize:M,match:W,options:{weekStartsOn:0,firstWeekContainsDate:1}};function P(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function T(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var C=1440,x=2520,j=43200,X=86400;function N(e,t,n){var a,i;o(2,arguments);var l=r(),c=null!==(a=null!==(i=null===n||void 0===n?void 0:n.locale)&&void 0!==i?i:l.locale)&&void 0!==a?a:k;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=s(e,t);if(isNaN(m))throw new RangeError("Invalid time value");var f,g,v=P(P({},n),{addSuffix:Boolean(null===n||void 0===n?void 0:n.addSuffix),comparison:m});m>0?(f=u(t),g=u(e)):(f=u(e),g=u(t));var y,b=h(g,f),p=(T(g)-T(f))/1e3,w=Math.round((b-p)/60);if(w<2)return null!==n&&void 0!==n&&n.includeSeconds?b<5?c.formatDistance("lessThanXSeconds",5,v):b<10?c.formatDistance("lessThanXSeconds",10,v):b<20?c.formatDistance("lessThanXSeconds",20,v):b<40?c.formatDistance("halfAMinute",0,v):b<60?c.formatDistance("lessThanXMinutes",1,v):c.formatDistance("xMinutes",1,v):0===w?c.formatDistance("lessThanXMinutes",1,v):c.formatDistance("xMinutes",w,v);if(w<45)return c.formatDistance("xMinutes",w,v);if(w<90)return c.formatDistance("aboutXHours",1,v);if(w<C){var M=Math.round(w/60);return c.formatDistance("aboutXHours",M,v)}if(w<x)return c.formatDistance("xDays",1,v);if(w<j){var D=Math.round(w/C);return c.formatDistance("xDays",D,v)}if(w<X)return y=Math.round(w/j),c.formatDistance("aboutXMonths",y,v);if((y=d(g,f))<12){var S=Math.round(w/j);return c.formatDistance("xMonths",S,v)}var W=y%12,N=Math.floor(y/12);return W<3?c.formatDistance("aboutXYears",N,v):W<9?c.formatDistance("overXYears",N,v):c.formatDistance("almostXYears",N+1,v)}},5862:function(){},2579:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(9439),r=n(1413),o=n(4925),i=n(2791),u=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=i.createContext({}),l=!0;function d(e){for(var t,n,d,c=e.count,m=void 0===c?1:c,h=e.wrapper,f=e.className,g=e.containerClassName,v=e.containerTestId,y=e.circle,b=void 0!==y&&y,p=e.style,w=(0,o.Z)(e,u),M=i.useContext(s),D=(0,r.Z)({},w),S=0,W=Object.entries(w);S<W.length;S++){var k=(0,a.Z)(W[S],2),P=k[0];"undefined"===typeof k[1]&&delete D[P]}var T=(0,r.Z)((0,r.Z)((0,r.Z)({},M),D),{},{circle:b}),C=(0,r.Z)((0,r.Z)({},p),function(e){var t=e.baseColor,n=e.highlightColor,a=e.width,r=e.height,o=e.borderRadius,i=e.circle,u=e.direction,s=e.duration,d=e.enableAnimation,c=void 0===d?l:d,m={};return"rtl"===u&&(m["--animation-direction"]="reverse"),"number"===typeof s&&(m["--animation-duration"]="".concat(s,"s")),c||(m["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(m.width=a),"string"!==typeof r&&"number"!==typeof r||(m.height=r),"string"!==typeof o&&"number"!==typeof o||(m.borderRadius=o),i&&(m.borderRadius="50%"),"undefined"!==typeof t&&(m["--base-color"]=t),"undefined"!==typeof n&&(m["--highlight-color"]=n),m}(T)),x="react-loading-skeleton";f&&(x+=" ".concat(f));for(var j=null!==(t=T.inline)&&void 0!==t&&t,X=[],N=Math.ceil(m),A=0;A<N;A++){var F=C;if(N>m&&A===N-1){var E=null!==(n=F.width)&&void 0!==n?n:"100%",Y=m%1,Z="number"===typeof E?E*Y:"calc(".concat(E," * ").concat(Y,")");F=(0,r.Z)((0,r.Z)({},F),{},{width:Z})}var q=i.createElement("span",{className:x,style:F,key:A},"\u200c");j?X.push(q):X.push(i.createElement(i.Fragment,{key:A},q,i.createElement("br",null)))}return i.createElement("span",{className:g,"data-testid":v,"aria-live":"polite","aria-busy":null!==(d=T.enableAnimation)&&void 0!==d?d:l},h?X.map((function(e,t){return i.createElement(h,{key:t},e)})):X)}}}]);
//# sourceMappingURL=659.75a0a18c.chunk.js.map