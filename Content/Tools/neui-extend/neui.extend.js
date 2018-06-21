
/***************************************************************** 
 * @ laydate
 *******************************************************************/
/*! laydate-v5.0.9 日期与时间组件 MIT License  http://www.layui.com/laydate/  By 贤心 */
;!function(){"use strict";var e=window.layui&&layui.define,t={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,n=t.length-1,a=n;a>0;a--)if("interactive"===t[a].readyState){e=t[a].src;break}return e||t[n].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),getStyle:function(e,t){var n=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,a,i){if(n.path){var r=document.getElementsByTagName("head")[0],o=document.createElement("link");"string"==typeof a&&(i=a);var s=(i||e).replace(/\.|\//g,""),l="layuicss-"+s,d=0;o.rel="stylesheet",o.href=n.path+e,o.id=l,document.getElementById(l)||r.appendChild(o),"function"==typeof a&&!function c(){return++d>80?window.console&&console.error("laydate.css: Invalid"):void(1989===parseInt(t.getStyle(document.getElementById(l),"width"))?a():setTimeout(c,100))}()}}},n={v:"5.0.9",config:{},index:window.laydate&&window.laydate.v?1e5:0,path:t.getPath,set:function(e){var t=this;return t.config=w.extend({},t.config,e),t},ready:function(a){var i="laydate",r="",o=(e?"modules/laydate/":"theme/")+"default/laydate.css?v="+n.v+r;return e?layui.addcss(o,a,i):t.link(o,a,i),this}},a=function(){var e=this;return{hint:function(t){e.hint.call(e,t)},config:e.config}},i="laydate",r=".layui-laydate",o="layui-this",s="laydate-disabled",l="开始日期超出了结束日期<br>建议重新选择",d=[100,2e5],c="layui-laydate-static",m="layui-laydate-list",u="laydate-selected",h="layui-laydate-hint",y="laydate-day-prev",f="laydate-day-next",p="layui-laydate-footer",g=".laydate-btns-confirm",v="laydate-time-text",D=".laydate-btns-time",T=function(e){var t=this;t.index=++n.index,t.config=w.extend({},t.config,n.config,e),n.ready(function(){t.init()})},w=function(e){return new C(e)},C=function(e){for(var t=0,n="object"==typeof e?[e]:(this.selector=e,document.querySelectorAll(e||null));t<n.length;t++)this.push(n[t])};C.prototype=[],C.prototype.constructor=C,w.extend=function(){var e=1,t=arguments,n=function(e,t){e=e||(t.constructor===Array?[]:{});for(var a in t)e[a]=t[a]&&t[a].constructor===Object?n(e[a],t[a]):t[a];return e};for(t[0]="object"==typeof t[0]?t[0]:{};e<t.length;e++)"object"==typeof t[e]&&n(t[0],t[e]);return t[0]},w.ie=function(){var e=navigator.userAgent.toLowerCase();return!!(window.ActiveXObject||"ActiveXObject"in window)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")}(),w.stope=function(e){e=e||window.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},w.each=function(e,t){var n,a=this;if("function"!=typeof t)return a;if(e=e||[],e.constructor===Object){for(n in e)if(t.call(e[n],n,e[n]))break}else for(n=0;n<e.length&&!t.call(e[n],n,e[n]);n++);return a},w.digit=function(e,t,n){var a="";e=String(e),t=t||2;for(var i=e.length;i<t;i++)a+="0";return e<Math.pow(10,t)?a+(0|e):e},w.elem=function(e,t){var n=document.createElement(e);return w.each(t||{},function(e,t){n.setAttribute(e,t)}),n},C.addStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),w.each(t,function(t,n){new RegExp("\\b"+n+"\\b").test(e)||(e=e+" "+n)}),e.replace(/^\s|\s$/,"")},C.removeStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),w.each(t,function(t,n){var a=new RegExp("\\b"+n+"\\b");a.test(e)&&(e=e.replace(a,""))}),e.replace(/\s+/," ").replace(/^\s|\s$/,"")},C.prototype.find=function(e){var t=this,n=0,a=[],i="object"==typeof e;return this.each(function(r,o){for(var s=i?[e]:o.querySelectorAll(e||null);n<s.length;n++)a.push(s[n]);t.shift()}),i||(t.selector=(t.selector?t.selector+" ":"")+e),w.each(a,function(e,n){t.push(n)}),t},C.prototype.each=function(e){return w.each.call(this,this,e)},C.prototype.addClass=function(e,t){return this.each(function(n,a){a.className=C[t?"removeStr":"addStr"](a.className,e)})},C.prototype.removeClass=function(e){return this.addClass(e,!0)},C.prototype.hasClass=function(e){var t=!1;return this.each(function(n,a){new RegExp("\\b"+e+"\\b").test(a.className)&&(t=!0)}),t},C.prototype.attr=function(e,t){var n=this;return void 0===t?function(){if(n.length>0)return n[0].getAttribute(e)}():n.each(function(n,a){a.setAttribute(e,t)})},C.prototype.removeAttr=function(e){return this.each(function(t,n){n.removeAttribute(e)})},C.prototype.html=function(e){return this.each(function(t,n){n.innerHTML=e})},C.prototype.val=function(e){return this.each(function(t,n){n.value=e})},C.prototype.append=function(e){return this.each(function(t,n){"object"==typeof e?n.appendChild(e):n.innerHTML=n.innerHTML+e})},C.prototype.remove=function(e){return this.each(function(t,n){e?n.removeChild(e):n.parentNode.removeChild(n)})},C.prototype.on=function(e,t){return this.each(function(n,a){a.attachEvent?a.attachEvent("on"+e,function(e){e.target=e.srcElement,t.call(a,e)}):a.addEventListener(e,t,!1)})},C.prototype.off=function(e,t){return this.each(function(n,a){a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener(e,t,!1)})},T.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},T.prototype.config={type:"date",range:!1,format:"yyyy-MM-dd",value:null,min:"1900-1-1",max:"2099-12-31",trigger:"focus",show:!1,showBottom:!0,btns:["clear","now","confirm"],lang:"cn",theme:"default",position:null,calendar:!1,mark:{},zIndex:null,done:null,change:null},T.prototype.lang=function(){var e=this,t=e.config,n={cn:{weeks:["日","一","二","三","四","五","六"],time:["时","分","秒"],timeTips:"选择时间",startTime:"开始时间",endTime:"结束时间",dateTips:"返回日期",month:["一","二","三","四","五","六","七","八","九","十","十一","十二"],tools:{confirm:"确定",clear:"清空",now:"现在"}},en:{weeks:["Su","Mo","Tu","We","Th","Fr","Sa"],time:["Hours","Minutes","Seconds"],timeTips:"Select Time",startTime:"Start Time",endTime:"End Time",dateTips:"Select Date",month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tools:{confirm:"Confirm",clear:"Clear",now:"Now"}}};return n[t.lang]||n.cn},T.prototype.init=function(){var e=this,t=e.config,n="yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s",a="static"===t.position,i={year:"yyyy",month:"yyyy-MM",date:"yyyy-MM-dd",time:"HH:mm:ss",datetime:"yyyy-MM-dd HH:mm:ss"};t.elem=w(t.elem),t.eventElem=w(t.eventElem),t.elem[0]&&(t.range===!0&&(t.range="-"),t.format===i.date&&(t.format=i[t.type]),e.format=t.format.match(new RegExp(n+"|.","g"))||[],e.EXP_IF="",e.EXP_SPLIT="",w.each(e.format,function(t,a){var i=new RegExp(n).test(a)?"\\d{"+function(){return new RegExp(n).test(e.format[0===t?t+1:t-1]||"")?/^yyyy|y$/.test(a)?4:a.length:/^yyyy$/.test(a)?"1,4":/^y$/.test(a)?"1,308":"1,2"}()+"}":"\\"+a;e.EXP_IF=e.EXP_IF+i,e.EXP_SPLIT=e.EXP_SPLIT+"("+i+")"}),e.EXP_IF=new RegExp("^"+(t.range?e.EXP_IF+"\\s\\"+t.range+"\\s"+e.EXP_IF:e.EXP_IF)+"$"),e.EXP_SPLIT=new RegExp("^"+e.EXP_SPLIT+"$",""),e.isInput(t.elem[0])||"focus"===t.trigger&&(t.trigger="click"),t.elem.attr("lay-key")||(t.elem.attr("lay-key",e.index),t.eventElem.attr("lay-key",e.index)),t.mark=w.extend({},t.calendar&&"cn"===t.lang?{"0-1-1":"元旦","0-2-14":"情人","0-3-8":"妇女","0-3-12":"植树","0-4-1":"愚人","0-5-1":"劳动","0-5-4":"青年","0-6-1":"儿童","0-9-10":"教师","0-9-18":"国耻","0-10-1":"国庆","0-12-25":"圣诞"}:{},t.mark),w.each(["min","max"],function(e,n){var a=[],i=[];if("number"==typeof t[n]){var r=t[n],o=(new Date).getTime(),s=864e5,l=new Date(r?r<s?o+r*s:r:o);a=[l.getFullYear(),l.getMonth()+1,l.getDate()],r<s||(i=[l.getHours(),l.getMinutes(),l.getSeconds()])}else a=(t[n].match(/\d+-\d+-\d+/)||[""])[0].split("-"),i=(t[n].match(/\d+:\d+:\d+/)||[""])[0].split(":");t[n]={year:0|a[0]||(new Date).getFullYear(),month:a[1]?(0|a[1])-1:(new Date).getMonth(),date:0|a[2]||(new Date).getDate(),hours:0|i[0],minutes:0|i[1],seconds:0|i[2]}}),e.elemID="layui-laydate"+t.elem.attr("lay-key"),(t.show||a)&&e.render(),a||e.events(),t.value&&(t.value.constructor===Date?e.setValue(e.parse(0,e.systemDate(t.value))):e.setValue(t.value)))},T.prototype.render=function(){var e=this,t=e.config,n=e.lang(),a="static"===t.position,i=e.elem=w.elem("div",{id:e.elemID,"class":["layui-laydate",t.range?" layui-laydate-range":"",a?" "+c:"",t.theme&&"default"!==t.theme&&!/^#/.test(t.theme)?" laydate-theme-"+t.theme:""].join("")}),r=e.elemMain=[],o=e.elemHeader=[],s=e.elemCont=[],l=e.table=[],d=e.footer=w.elem("div",{"class":p});if(t.zIndex&&(i.style.zIndex=t.zIndex),w.each(new Array(2),function(e){if(!t.range&&e>0)return!0;var a=w.elem("div",{"class":"layui-laydate-header"}),i=[function(){var e=w.elem("i",{"class":"layui-icon laydate-icon laydate-prev-y"});return e.innerHTML="&#xe65a;",e}(),function(){var e=w.elem("i",{"class":"layui-icon laydate-icon laydate-prev-m"});return e.innerHTML="&#xe603;",e}(),function(){var e=w.elem("div",{"class":"laydate-set-ym"}),t=w.elem("span"),n=w.elem("span");return e.appendChild(t),e.appendChild(n),e}(),function(){var e=w.elem("i",{"class":"layui-icon laydate-icon laydate-next-m"});return e.innerHTML="&#xe602;",e}(),function(){var e=w.elem("i",{"class":"layui-icon laydate-icon laydate-next-y"});return e.innerHTML="&#xe65b;",e}()],d=w.elem("div",{"class":"layui-laydate-content"}),c=w.elem("table"),m=w.elem("thead"),u=w.elem("tr");w.each(i,function(e,t){a.appendChild(t)}),m.appendChild(u),w.each(new Array(6),function(e){var t=c.insertRow(0);w.each(new Array(7),function(a){if(0===e){var i=w.elem("th");i.innerHTML=n.weeks[a],u.appendChild(i)}t.insertCell(a)})}),c.insertBefore(m,c.children[0]),d.appendChild(c),r[e]=w.elem("div",{"class":"layui-laydate-main laydate-main-list-"+e}),r[e].appendChild(a),r[e].appendChild(d),o.push(i),s.push(d),l.push(c)}),w(d).html(function(){var e=[],i=[];return"datetime"===t.type&&e.push('<span lay-type="datetime" class="laydate-btns-time">'+n.timeTips+"</span>"),w.each(t.btns,function(e,r){var o=n.tools[r]||"btn";t.range&&"now"===r||(a&&"clear"===r&&(o="cn"===t.lang?"重置":"Reset"),i.push('<span lay-type="'+r+'" class="laydate-btns-'+r+'">'+o+"</span>"))}),e.push('<div class="laydate-footer-btns">'+i.join("")+"</div>"),e.join("")}()),w.each(r,function(e,t){i.appendChild(t)}),t.showBottom&&i.appendChild(d),/^#/.test(t.theme)){var m=w.elem("style"),u=["#{{id}} .layui-laydate-header{background-color:{{theme}};}","#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g,e.elemID).replace(/{{theme}}/g,t.theme);"styleSheet"in m?(m.setAttribute("type","text/css"),m.styleSheet.cssText=u):m.innerHTML=u,w(i).addClass("laydate-theme-molv"),i.appendChild(m)}e.remove(T.thisElemDate),a?t.elem.append(i):(document.body.appendChild(i),e.position()),e.checkDate().calendar(),e.changeEvent(),T.thisElemDate=e.elemID,"function"==typeof t.ready&&t.ready(w.extend({},t.dateTime,{month:t.dateTime.month+1}))},T.prototype.remove=function(e){var t=this,n=(t.config,w("#"+(e||t.elemID)));return n.hasClass(c)||t.checkDate(function(){n.remove()}),t},T.prototype.position=function(){var e=this,t=e.config,n=e.bindElem||t.elem[0],a=n.getBoundingClientRect(),i=e.elem.offsetWidth,r=e.elem.offsetHeight,o=function(e){return e=e?"scrollLeft":"scrollTop",document.body[e]|document.documentElement[e]},s=function(e){return document.documentElement[e?"clientWidth":"clientHeight"]},l=5,d=a.left,c=a.bottom;d+i+l>s("width")&&(d=s("width")-i-l),c+r+l>s()&&(c=a.top>r?a.top-r:s()-r,c-=2*l),t.position&&(e.elem.style.position=t.position),e.elem.style.left=d+("fixed"===t.position?0:o(1))+"px",e.elem.style.top=c+("fixed"===t.position?0:o())+"px"},T.prototype.hint=function(e){var t=this,n=(t.config,w.elem("div",{"class":h}));n.innerHTML=e||"",w(t.elem).find("."+h).remove(),t.elem.appendChild(n),clearTimeout(t.hinTimer),t.hinTimer=setTimeout(function(){w(t.elem).find("."+h).remove()},3e3)},T.prototype.getAsYM=function(e,t,n){return n?t--:t++,t<0&&(t=11,e--),t>11&&(t=0,e++),[e,t]},T.prototype.systemDate=function(e){var t=e||new Date;return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),hours:e?e.getHours():0,minutes:e?e.getMinutes():0,seconds:e?e.getSeconds():0}},T.prototype.checkDate=function(e){var t,a,i=this,r=(new Date,i.config),o=r.dateTime=r.dateTime||i.systemDate(),s=i.bindElem||r.elem[0],l=(i.isInput(s)?"val":"html",i.isInput(s)?s.value:"static"===r.position?"":s.innerHTML),c=function(e){e.year>d[1]&&(e.year=d[1],a=!0),e.month>11&&(e.month=11,a=!0),e.hours>23&&(e.hours=0,a=!0),e.minutes>59&&(e.minutes=0,e.hours++,a=!0),e.seconds>59&&(e.seconds=0,e.minutes++,a=!0),t=n.getEndDate(e.month+1,e.year),e.date>t&&(e.date=t,a=!0)},m=function(e,t,n){var o=["startTime","endTime"];t=(t.match(i.EXP_SPLIT)||[]).slice(1),n=n||0,r.range&&(i[o[n]]=i[o[n]]||{}),w.each(i.format,function(s,l){var c=parseFloat(t[s]);t[s].length<l.length&&(a=!0),/yyyy|y/.test(l)?(c<d[0]&&(c=d[0],a=!0),e.year=c):/MM|M/.test(l)?(c<1&&(c=1,a=!0),e.month=c-1):/dd|d/.test(l)?(c<1&&(c=1,a=!0),e.date=c):/HH|H/.test(l)?(c<1&&(c=0,a=!0),e.hours=c,r.range&&(i[o[n]].hours=c)):/mm|m/.test(l)?(c<1&&(c=0,a=!0),e.minutes=c,r.range&&(i[o[n]].minutes=c)):/ss|s/.test(l)&&(c<1&&(c=0,a=!0),e.seconds=c,r.range&&(i[o[n]].seconds=c))}),c(e)};return"limit"===e?(c(o),i):(l=l||r.value,"string"==typeof l&&(l=l.replace(/\s+/g," ").replace(/^\s|\s$/g,"")),i.startState&&!i.endState&&(delete i.startState,i.endState=!0),"string"==typeof l&&l?i.EXP_IF.test(l)?r.range?(l=l.split(" "+r.range+" "),i.startDate=i.startDate||i.systemDate(),i.endDate=i.endDate||i.systemDate(),r.dateTime=w.extend({},i.startDate),w.each([i.startDate,i.endDate],function(e,t){m(t,l[e],e)})):m(o,l):(i.hint("日期格式不合法<br>必须遵循下述格式：<br>"+(r.range?r.format+" "+r.range+" "+r.format:r.format)+"<br>已为你重置"),a=!0):l&&l.constructor===Date?r.dateTime=i.systemDate(l):(r.dateTime=i.systemDate(),delete i.startState,delete i.endState,delete i.startDate,delete i.endDate,delete i.startTime,delete i.endTime),c(o),a&&l&&i.setValue(r.range?i.endDate?i.parse():"":i.parse()),e&&e(),i)},T.prototype.mark=function(e,t){var n,a=this,i=a.config;return w.each(i.mark,function(e,a){var i=e.split("-");i[0]!=t[0]&&0!=i[0]||i[1]!=t[1]&&0!=i[1]||i[2]!=t[2]||(n=a||t[2])}),n&&e.html('<span class="laydate-day-mark">'+n+"</span>"),a},T.prototype.limit=function(e,t,n,a){var i,r=this,o=r.config,l={},d=o[n>41?"endDate":"dateTime"],c=w.extend({},d,t||{});return w.each({now:c,min:o.min,max:o.max},function(e,t){l[e]=r.newDate(w.extend({year:t.year,month:t.month,date:t.date},function(){var e={};return w.each(a,function(n,a){e[a]=t[a]}),e}())).getTime()}),i=l.now<l.min||l.now>l.max,e&&e[i?"addClass":"removeClass"](s),i},T.prototype.calendar=function(e){var t,a,i,r=this,s=r.config,l=e||s.dateTime,c=new Date,m=r.lang(),u="date"!==s.type&&"datetime"!==s.type,h=e?1:0,y=w(r.table[h]).find("td"),f=w(r.elemHeader[h][2]).find("span");if(l.year<d[0]&&(l.year=d[0],r.hint("最低只能支持到公元"+d[0]+"年")),l.year>d[1]&&(l.year=d[1],r.hint("最高只能支持到公元"+d[1]+"年")),r.firstDate||(r.firstDate=w.extend({},l)),c.setFullYear(l.year,l.month,1),t=c.getDay(),a=n.getEndDate(l.month||12,l.year),i=n.getEndDate(l.month+1,l.year),w.each(y,function(e,n){var d=[l.year,l.month],c=0;n=w(n),n.removeAttr("class"),e<t?(c=a-t+e,n.addClass("laydate-day-prev"),d=r.getAsYM(l.year,l.month,"sub")):e>=t&&e<i+t?(c=e-t,s.range||c+1===l.date&&n.addClass(o)):(c=e-i-t,n.addClass("laydate-day-next"),d=r.getAsYM(l.year,l.month)),d[1]++,d[2]=c+1,n.attr("lay-ymd",d.join("-")).html(d[2]),r.mark(n,d).limit(n,{year:d[0],month:d[1]-1,date:d[2]},e)}),w(f[0]).attr("lay-ym",l.year+"-"+(l.month+1)),w(f[1]).attr("lay-ym",l.year+"-"+(l.month+1)),"cn"===s.lang?(w(f[0]).attr("lay-type","year").html(l.year+"年"),w(f[1]).attr("lay-type","month").html(l.month+1+"月")):(w(f[0]).attr("lay-type","month").html(m.month[l.month]),w(f[1]).attr("lay-type","year").html(l.year)),u&&(s.range&&(e?r.endDate=r.endDate||{year:l.year+("year"===s.type?1:0),month:l.month+("month"===s.type?0:-1)}:r.startDate=r.startDate||{year:l.year,month:l.month},e&&(r.listYM=[[r.startDate.year,r.startDate.month+1],[r.endDate.year,r.endDate.month+1]],r.list(s.type,0).list(s.type,1),"time"===s.type?r.setBtnStatus("时间",w.extend({},r.systemDate(),r.startTime),w.extend({},r.systemDate(),r.endTime)):r.setBtnStatus(!0))),s.range||(r.listYM=[[l.year,l.month+1]],r.list(s.type,0))),s.range&&!e){var p=r.getAsYM(l.year,l.month);r.calendar(w.extend({},l,{year:p[0],month:p[1]}))}return s.range||r.limit(w(r.footer).find(g),null,0,["hours","minutes","seconds"]),s.range&&e&&!u&&r.stampRange(),r},T.prototype.list=function(e,t){var n=this,a=n.config,i=a.dateTime,r=n.lang(),l=a.range&&"date"!==a.type&&"datetime"!==a.type,d=w.elem("ul",{"class":m+" "+{year:"laydate-year-list",month:"laydate-month-list",time:"laydate-time-list"}[e]}),c=n.elemHeader[t],u=w(c[2]).find("span"),h=n.elemCont[t||0],y=w(h).find("."+m)[0],f="cn"===a.lang,p=f?"年":"",T=n.listYM[t]||{},C=["hours","minutes","seconds"],x=["startTime","endTime"][t];if(T[0]<1&&(T[0]=1),"year"===e){var M,b=M=T[0]-7;b<1&&(b=M=1),w.each(new Array(15),function(e){var i=w.elem("li",{"lay-ym":M}),r={year:M};M==T[0]&&w(i).addClass(o),i.innerHTML=M+p,d.appendChild(i),M<n.firstDate.year?(r.month=a.min.month,r.date=a.min.date):M>=n.firstDate.year&&(r.month=a.max.month,r.date=a.max.date),n.limit(w(i),r,t),M++}),w(u[f?0:1]).attr("lay-ym",M-8+"-"+T[1]).html(b+p+" - "+(M-1+p))}else if("month"===e)w.each(new Array(12),function(e){var i=w.elem("li",{"lay-ym":e}),s={year:T[0],month:e};e+1==T[1]&&w(i).addClass(o),i.innerHTML=r.month[e]+(f?"月":""),d.appendChild(i),T[0]<n.firstDate.year?s.date=a.min.date:T[0]>=n.firstDate.year&&(s.date=a.max.date),n.limit(w(i),s,t)}),w(u[f?0:1]).attr("lay-ym",T[0]+"-"+T[1]).html(T[0]+p);else if("time"===e){var E=function(){w(d).find("ol").each(function(e,a){w(a).find("li").each(function(a,i){n.limit(w(i),[{hours:a},{hours:n[x].hours,minutes:a},{hours:n[x].hours,minutes:n[x].minutes,seconds:a}][e],t,[["hours"],["hours","minutes"],["hours","minutes","seconds"]][e])})}),a.range||n.limit(w(n.footer).find(g),n[x],0,["hours","minutes","seconds"])};a.range?n[x]||(n[x]={hours:0,minutes:0,seconds:0}):n[x]=i,w.each([24,60,60],function(e,t){var a=w.elem("li"),i=["<p>"+r.time[e]+"</p><ol>"];w.each(new Array(t),function(t){i.push("<li"+(n[x][C[e]]===t?' class="'+o+'"':"")+">"+w.digit(t,2)+"</li>")}),a.innerHTML=i.join("")+"</ol>",d.appendChild(a)}),E()}if(y&&h.removeChild(y),h.appendChild(d),"year"===e||"month"===e)w(n.elemMain[t]).addClass("laydate-ym-show"),w(d).find("li").on("click",function(){var r=0|w(this).attr("lay-ym");if(!w(this).hasClass(s)){if(0===t)i[e]=r,l&&(n.startDate[e]=r),n.limit(w(n.footer).find(g),null,0);else if(l)n.endDate[e]=r;else{var c="year"===e?n.getAsYM(r,T[1]-1,"sub"):n.getAsYM(T[0],r,"sub");w.extend(i,{year:c[0],month:c[1]})}"year"===a.type||"month"===a.type?(w(d).find("."+o).removeClass(o),w(this).addClass(o),"month"===a.type&&"year"===e&&(n.listYM[t][0]=r,l&&(n[["startDate","endDate"][t]].year=r),n.list("month",t))):(n.checkDate("limit").calendar(),n.closeList()),n.setBtnStatus(),a.range||n.done(null,"change"),w(n.footer).find(D).removeClass(s)}});else{var S=w.elem("span",{"class":v}),k=function(){w(d).find("ol").each(function(e){var t=this,a=w(t).find("li");t.scrollTop=30*(n[x][C[e]]-2),t.scrollTop<=0&&a.each(function(e,n){if(!w(this).hasClass(s))return t.scrollTop=30*(e-2),!0})})},H=w(c[2]).find("."+v);k(),S.innerHTML=a.range?[r.startTime,r.endTime][t]:r.timeTips,w(n.elemMain[t]).addClass("laydate-time-show"),H[0]&&H.remove(),c[2].appendChild(S),w(d).find("ol").each(function(e){var t=this;w(t).find("li").on("click",function(){var r=0|this.innerHTML;w(this).hasClass(s)||(a.range?n[x][C[e]]=r:i[C[e]]=r,w(t).find("."+o).removeClass(o),w(this).addClass(o),E(),k(),(n.endDate||"time"===a.type)&&n.done(null,"change"),n.setBtnStatus())})})}return n},T.prototype.listYM=[],T.prototype.closeList=function(){var e=this;e.config;w.each(e.elemCont,function(t,n){w(this).find("."+m).remove(),w(e.elemMain[t]).removeClass("laydate-ym-show laydate-time-show")}),w(e.elem).find("."+v).remove()},T.prototype.setBtnStatus=function(e,t,n){var a,i=this,r=i.config,o=w(i.footer).find(g),d=r.range&&"date"!==r.type&&"time"!==r.type;d&&(t=t||i.startDate,n=n||i.endDate,a=i.newDate(t).getTime()>i.newDate(n).getTime(),i.limit(null,t)||i.limit(null,n)?o.addClass(s):o[a?"addClass":"removeClass"](s),e&&a&&i.hint("string"==typeof e?l.replace(/日期/g,e):l))},T.prototype.parse=function(e,t){var n=this,a=n.config,i=t||(e?w.extend({},n.endDate,n.endTime):a.range?w.extend({},n.startDate,n.startTime):a.dateTime),r=n.format.concat();return w.each(r,function(e,t){/yyyy|y/.test(t)?r[e]=w.digit(i.year,t.length):/MM|M/.test(t)?r[e]=w.digit(i.month+1,t.length):/dd|d/.test(t)?r[e]=w.digit(i.date,t.length):/HH|H/.test(t)?r[e]=w.digit(i.hours,t.length):/mm|m/.test(t)?r[e]=w.digit(i.minutes,t.length):/ss|s/.test(t)&&(r[e]=w.digit(i.seconds,t.length))}),a.range&&!e?r.join("")+" "+a.range+" "+n.parse(1):r.join("")},T.prototype.newDate=function(e){return e=e||{},new Date(e.year||1,e.month||0,e.date||1,e.hours||0,e.minutes||0,e.seconds||0)},T.prototype.setValue=function(e){var t=this,n=t.config,a=t.bindElem||n.elem[0],i=t.isInput(a)?"val":"html";return"static"===n.position||w(a)[i](e||""),this},T.prototype.stampRange=function(){var e,t,n=this,a=n.config,i=w(n.elem).find("td");if(a.range&&!n.endDate&&w(n.footer).find(g).addClass(s),n.endDate)return e=n.newDate({year:n.startDate.year,month:n.startDate.month,date:n.startDate.date}).getTime(),t=n.newDate({year:n.endDate.year,month:n.endDate.month,date:n.endDate.date}).getTime(),e>t?n.hint(l):void w.each(i,function(a,i){var r=w(i).attr("lay-ymd").split("-"),s=n.newDate({year:r[0],month:r[1]-1,date:r[2]}).getTime();w(i).removeClass(u+" "+o),s!==e&&s!==t||w(i).addClass(w(i).hasClass(y)||w(i).hasClass(f)?u:o),s>e&&s<t&&w(i).addClass(u)})},T.prototype.done=function(e,t){var n=this,a=n.config,i=w.extend({},n.startDate?w.extend(n.startDate,n.startTime):a.dateTime),r=w.extend({},w.extend(n.endDate,n.endTime));return w.each([i,r],function(e,t){"month"in t&&w.extend(t,{month:t.month+1})}),e=e||[n.parse(),i,r],"function"==typeof a[t||"done"]&&a[t||"done"].apply(a,e),n},T.prototype.choose=function(e){var t=this,n=t.config,a=n.dateTime,i=w(t.elem).find("td"),r=e.attr("lay-ymd").split("-"),l=function(e){new Date;e&&w.extend(a,r),n.range&&(t.startDate?w.extend(t.startDate,r):t.startDate=w.extend({},r,t.startTime),t.startYMD=r)};if(r={year:0|r[0],month:(0|r[1])-1,date:0|r[2]},!e.hasClass(s))if(n.range){if(w.each(["startTime","endTime"],function(e,n){t[n]=t[n]||{hours:0,minutes:0,seconds:0}}),t.endState)l(),delete t.endState,delete t.endDate,t.startState=!0,i.removeClass(o+" "+u),e.addClass(o);else if(t.startState){if(e.addClass(o),t.endDate?w.extend(t.endDate,r):t.endDate=w.extend({},r,t.endTime),t.newDate(r).getTime()<t.newDate(t.startYMD).getTime()){var d=w.extend({},t.endDate,{hours:t.startDate.hours,minutes:t.startDate.minutes,seconds:t.startDate.seconds});w.extend(t.endDate,t.startDate,{hours:t.endDate.hours,minutes:t.endDate.minutes,seconds:t.endDate.seconds}),t.startDate=d}n.showBottom||t.done(),t.stampRange(),t.endState=!0,t.done(null,"change")}else e.addClass(o),l(),t.startState=!0;w(t.footer).find(g)[t.endDate?"removeClass":"addClass"](s)}else"static"===n.position?(l(!0),t.calendar().done().done(null,"change")):"date"===n.type?(l(!0),t.setValue(t.parse()).remove().done()):"datetime"===n.type&&(l(!0),t.calendar().done(null,"change"))},T.prototype.tool=function(e,t){var n=this,a=n.config,i=a.dateTime,r="static"===a.position,o={datetime:function(){w(e).hasClass(s)||(n.list("time",0),a.range&&n.list("time",1),w(e).attr("lay-type","date").html(n.lang().dateTips))},date:function(){n.closeList(),w(e).attr("lay-type","datetime").html(n.lang().timeTips)},clear:function(){n.setValue("").remove(),r&&(w.extend(i,n.firstDate),n.calendar()),a.range&&(delete n.startState,delete n.endState,delete n.endDate,delete n.startTime,delete n.endTime),n.done(["",{},{}])},now:function(){var e=new Date;w.extend(i,n.systemDate(),{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}),n.setValue(n.parse()).remove(),r&&n.calendar(),n.done()},confirm:function(){if(a.range){if(!n.endDate)return n.hint("请先选择日期范围");if(w(e).hasClass(s))return n.hint("time"===a.type?l.replace(/日期/g,"时间"):l)}else if(w(e).hasClass(s))return n.hint("不在有效日期或时间范围内");n.done(),n.setValue(n.parse()).remove()}};o[t]&&o[t]()},T.prototype.change=function(e){var t=this,n=t.config,a=n.dateTime,i=n.range&&("year"===n.type||"month"===n.type),r=t.elemCont[e||0],o=t.listYM[e],s=function(s){var l=["startDate","endDate"][e],d=w(r).find(".laydate-year-list")[0],c=w(r).find(".laydate-month-list")[0];return d&&(o[0]=s?o[0]-15:o[0]+15,t.list("year",e)),c&&(s?o[0]--:o[0]++,t.list("month",e)),(d||c)&&(w.extend(a,{year:o[0]}),i&&(t[l].year=o[0]),n.range||t.done(null,"change"),t.setBtnStatus(),n.range||t.limit(w(t.footer).find(g),{year:o[0]})),d||c};return{prevYear:function(){s("sub")||(a.year--,t.checkDate("limit").calendar(),n.range||t.done(null,"change"))},prevMonth:function(){var e=t.getAsYM(a.year,a.month,"sub");w.extend(a,{year:e[0],month:e[1]}),t.checkDate("limit").calendar(),n.range||t.done(null,"change")},nextMonth:function(){var e=t.getAsYM(a.year,a.month);w.extend(a,{year:e[0],month:e[1]}),t.checkDate("limit").calendar(),n.range||t.done(null,"change")},nextYear:function(){s()||(a.year++,t.checkDate("limit").calendar(),n.range||t.done(null,"change"))}}},T.prototype.changeEvent=function(){var e=this;e.config;w(e.elem).on("click",function(e){w.stope(e)}),w.each(e.elemHeader,function(t,n){w(n[0]).on("click",function(n){e.change(t).prevYear()}),w(n[1]).on("click",function(n){e.change(t).prevMonth()}),w(n[2]).find("span").on("click",function(n){var a=w(this),i=a.attr("lay-ym"),r=a.attr("lay-type");i&&(i=i.split("-"),e.listYM[t]=[0|i[0],0|i[1]],e.list(r,t),w(e.footer).find(D).addClass(s))}),w(n[3]).on("click",function(n){e.change(t).nextMonth()}),w(n[4]).on("click",function(n){e.change(t).nextYear()})}),w.each(e.table,function(t,n){var a=w(n).find("td");a.on("click",function(){e.choose(w(this))})}),w(e.footer).find("span").on("click",function(){var t=w(this).attr("lay-type");e.tool(this,t)})},T.prototype.isInput=function(e){return/input|textarea/.test(e.tagName.toLocaleLowerCase())},T.prototype.events=function(){var e=this,t=e.config,n=function(n,a){n.on(t.trigger,function(){a&&(e.bindElem=this),e.render()})};t.elem[0]&&!t.elem[0].eventHandler&&(n(t.elem,"bind"),n(t.eventElem),w(document).on("click",function(n){n.target!==t.elem[0]&&n.target!==t.eventElem[0]&&n.target!==w(t.closeStop)[0]&&e.remove()}).on("keydown",function(t){13===t.keyCode&&w("#"+e.elemID)[0]&&e.elemID===T.thisElem&&(t.preventDefault(),w(e.footer).find(g)[0].click())}),w(window).on("resize",function(){return!(!e.elem||!w(r)[0])&&void e.position()}),t.elem[0].eventHandler=!0)},n.render=function(e){var t=new T(e);return a.call(t)},n.getEndDate=function(e,t){var n=new Date;return n.setFullYear(t||n.getFullYear(),e||n.getMonth()+1,1),new Date(n.getTime()-864e5).getDate()},window.lay=window.lay||w,e?(n.ready(),layui.define(function(e){n.path=layui.cache.dir,e(i,n)})):"function"==typeof define&&define.amd?define(function(){return n}):function(){n.ready(),window.laydate=n}()}();


/***************************************************************** 
 * @ ajax
 *******************************************************************/
Ne.ajax = function () {
    var ajaxSettings = {
        // Default type of request
        type: 'GET',
        // Callback that is executed before request
        beforeSend: empty,
        // Callback that is executed if the request succeeds
        success: empty,
        // Callback that is executed the the server drops error
        error: empty,
        // Callback that is executed on request complete (both: error and success)
        complete: empty,
        // The context for the callbacks
        context: null,
        // Transport
        xhr: function () {
            return new window.XMLHttpRequest()
        },
        // MIME types mapping
        accepts: {
            script: 'text/javascript, application/javascript',
            json: 'application/json',
            xml: 'application/xml, text/xml',
            html: 'text/html',
            text: 'text/plain'
        },
        // Whether the request is to another domain
        crossDomain: false,
        // Default timeout
        timeout: 0,
        // Whether the browser should be allowed to cache GET responses
        cache: true
    }
    //utils
    function extend(obj) {
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            for (var key in source) {
                obj[key] = source[key];
            }
        }
        return obj;
    }

    function isObject(obj) {
        var type = typeof obj
        return type === 'function' || type === 'object' && !!obj
    }

    function parameterToStr(parameter,_encode) {
        var res = ''
        for (var i in parameter) {
            res += i + '=' + (_encode ? encodeURIComponent(parameter[i]) : parameter[i]) + '&'
        }
        return res.substring(0, res.length - 1)
    }
    //请求开始前执行
    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context
        if (settings.beforeSend.call(context, xhr, settings) === false)
            return false

    }
    //请求成功时执行
    function ajaxSuccess(data, xhr, settings) {
        var context = settings.context,
            status = 'success'
        settings.success.call(context, data, status, xhr)
        ajaxComplete(status, xhr, settings)
    }
    //请求失败时执行 type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings) {
        var context = settings.context
        settings.error.call(context, xhr, type, error)
        ajaxComplete(type, xhr, settings)
    }
    //请求完成时执行 status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
        var context = settings.context
        settings.complete.call(context, xhr, status)
    }
    //空函数，用作默认回调函数
    function empty() {}

    function _ajax(options) {
        var settings = extend({}, options);
        for (var key in ajaxSettings) {
            if (settings[key] === undefined) {
                settings[key] = ajaxSettings[key];
            }
        }
        if (settings.cache === false || ((!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType))) {
            settings.data = settings.data || {};
            settings.data._t = (new Date()).getTime();
        }
        //设置数据
        if (isObject(settings.data)) {
            settings.data = parameterToStr(settings.data, settings.type.toUpperCase() == 'GET');
        }
        if (settings.data && (!settings.type || settings.type.toUpperCase() == 'GET')) {
            settings.url = (settings.url + '&' + settings.data).replace(/[&?]{1,2}/, '?');
        }
        var dataType = settings.dataType;
        var mime = settings.accepts[dataType],
            baseHeaders = {},
            protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
            xhr = ajaxSettings.xhr(),
            abortTimeout;

        if (!settings.crossDomain) {
            baseHeaders['X-Requested-With'] = 'XMLHttpRequest';
        }
    

        if (mime) {
            baseHeaders['Accept'] = mime;
            if (mime.indexOf(',') > -1) {
                mime = mime.split(',', 2)[0];
            }
            xhr.overrideMimeType && xhr.overrideMimeType(mime);
        }
        //设置请求的内容类型
        if (settings.contentType || (settings.data && settings.type.toUpperCase() != 'GET')) {
            baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded');
        }
        settings.headers = extend(baseHeaders, settings.headers || {});
        //请求状态处理
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                clearTimeout(abortTimeout);
                var result, error = false;
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                    if (!dataType) {
                        var mime = xhr.getResponseHeader('content-type');
                        dataType = mime && (mime == 'text/html' ? 'html' :
                            mime == 'application/json' ? 'json' :
                            /^(?:text|application)\/javascript/i.test(mime) ? 'script' :
                            /^(?:text|application)\/xml/i.test(mime) && 'xml') || 'text';
                    }
                    result = xhr.responseText;
                    try {
                        if (dataType == 'script') {
                            (1, eval)(result);
                        } else if (dataType == 'xml') {
                            result = xhr.responseXML;
                        } else if (dataType == 'json') {
                            result = /^\s*$/.test(result) ? null : JSON.parse(result);
                        }
                    } catch (e) {
                        error = e;
                    }

                    if (error) {
                        ajaxError(error, 'parsererror', xhr, settings)
                    } else {
                        ajaxSuccess(result, xhr, settings)
                    }
                } else {
                    ajaxError(null, 'error', xhr, settings)
                }
            }
        }
        //打开请求
        xhr.open(settings.type, settings.url, 'async' in settings ? settings.async : true);
        //设置请求头部信息
        for (var name in settings.headers) {
            xhr.setRequestHeader(name, settings.headers[name]);
        }
        //取消请求
        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort();
            return false;
        }
        //请求超时
        if (settings.timeout > 0) {
            abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = empty;
                xhr.abort();
                ajaxError(null, 'timeout', xhr, settings);
            }, settings.timeout);
        }
        //发送请求
        xhr.send(settings.data || null);

        return xhr;
    }

    return _ajax;
}();

//获取表格数据
function requestPaginData(reqpkg, pageIndex, pageSize, callback) {
    if (reqpkg.debug) {
        var records = [];
        var rCount = 489;
        var rStart = rCount != 0 ? (pageIndex - 1) * pageSize + 1 : 0;
        var rEnd = pageIndex * pageSize < rCount ? pageIndex * pageSize : rCount;
        var pCount = Math.ceil(rCount / pageSize);
        for (var i = rStart; i <= rEnd; i++) {
            records.push({
                a: i + '-a',
                b: i + '-b',
                c: i + '-c',
                d: i + '-d'
            });
        }
        callback({
            count: rCount,
            records: records
        });
    } else {
        reqpkg.para = reqpkg.para || {};
        reqpkg.para.PageIndex = pageIndex;
        reqpkg.para.PageSize = pageSize;
        var ajax = reqpkg.ajax || Ne.ajax;
        ajax({
            url: reqpkg.api,
            type: reqpkg.type || 'get',
            data: reqpkg.para,
            beforeSend: function () {

            },
            success: function (data) {
                var res = {};
                if (reqpkg.dataFilter) {
                    data = reqpkg.dataFilter(data);
                }
                data = data || {};
                if (reqpkg.dataRoot) {
                    res.records = eval('(' + 'data.' + reqpkg.dataRoot + ')');
                } else {
                    res.records = data.Records;
                }
                if (!Ne._.isArray(res.records)) {
                    res.records = [];
                }
                res.count = data.Count || res.records.length;
                callback(res);
            },
            complete: function () {},
            error: function (xhr) {
                callback(xhr.status + ': ' + xhr.statusText);
            }
        });
    }
}


/***************************************************************** 
 * @ 分页控件
 *******************************************************************/
Ne.paginBar = function (pageBarType, rowCount, pageIndex, pageSize, handler) {
    //生成分页控件
    function createPbar(pageBarType) {
        var pbar = Ne.dom.render('<div class="ne-paginbar">' +
            '<div class="ne-paginbar-info"></div>' +
            '<div class="ne-paginbar-control">' +
            '<div class="ne-paginbar-control-size">' +
            '<span>每页显示</span><input type="text" class="ne-input w2" value="10"><span>条</span>' +
            '</div>' +
            '<div class="ne-paginbar-control-index"></div>' +
            '</div>' +
            '</div>');
        if (pageBarType == 2) {
            pbar.classList.add('ne-paginbar-sample');
        }
        return pbar;
    }
    //生成分页索引按钮
    function createPIndexItem(text, active) {
        var pIndexItem = '<a ' + (active ? 'class="active"' : '') + '><span><span>' + text + '</span></span></a>';
        pIndexItem = Ne.dom.render(pIndexItem);
        return pIndexItem;
    }
    //生成分页索引
    function createPIndexGroup(pIndexGroup, onItemClick) {
        var el_pIndexGroup = document.createDocumentFragment();
        var pIndex_prev = createPIndexItem('<i class="ne-icon-arrow-left"></i>');
        var pIndex_next = createPIndexItem('<i class="ne-icon-arrow-right"></i>');
        pIndex_prev.classList.add('prev');
        if (pIndexGroup.length == 0 || pIndexGroup[0].active) {
            pIndex_prev.classList.add('disabled');
        }
        pIndex_next.classList.add('next');
        if (pIndexGroup.length == 0 || pIndexGroup[pIndexGroup.length - 1].active) {
            pIndex_next.classList.add('disabled');
        }
        el_pIndexGroup.appendChild(pIndex_prev);
        pIndexGroup.forEach(function (n, i) {
            var pIndexItem = createPIndexItem(n.text, n.active);
            if (n.text != '···') {
                pIndexItem.onclick = function () {
                    onItemClick(n.text);
                }
            }
            if (n.active) {
                pIndex_prev.onclick = function () {
                    onItemClick(n.text - 1);
                }
                pIndex_next.onclick = function () {
                    onItemClick(n.text + 1);
                }
            }
            el_pIndexGroup.appendChild(pIndexItem);
        });
        el_pIndexGroup.appendChild(pIndex_next);
        return el_pIndexGroup;
    }
    //生成分页信息
    function createPaginInfo(start, end, count) {
        return '当前显示第' + start + '-' + end + '行，共' + count + '行'
    }
    //设置分页控件
    function setPaginbar(target, rCount, pIndex, pSize, callback, doCallback) {
        var el_paginInfo = target.querySelector('.ne-paginbar-info');
        var el_paginSize = target.querySelector('.ne-input');
        var el_paginIndexWrap = target.querySelector('.ne-paginbar-control-index');

        //子控制闭包
        var onchange = function (index) {
            setPaginbar(target, rCount, index, el_paginSize.value, callback, true);
        }

        //计算分页数据
        var pCount = Math.ceil(rCount / pSize);
        var rStart = rCount != 0 ? (pIndex - 1) * pSize + 1 : 0;
        var rEnd = pIndex * pSize < rCount ? pIndex * pSize : rCount;
        var pIndexGroup = [];
        if (pCount > 8) {
            if (pIndex < 5) {
                for (var i = 1; i <= 5; i++) {
                    pIndexGroup.push({
                        text: i
                    });
                }
                pIndexGroup.push({
                    text: '···'
                });
                pIndexGroup.push({
                    text: pCount - 1
                });
                pIndexGroup.push({
                    text: pCount
                });
                pIndexGroup[pIndex - 1].active = true;
            } else if (pIndex >= 5 && pIndex <= pCount - 3) {
                pIndexGroup.push({
                    text: 1
                });
                pIndexGroup.push({
                    text: '···'
                });
                pIndexGroup.push({
                    text: pIndex - 1
                });
                pIndexGroup.push({
                    text: pIndex,
                    active: true
                });
                pIndexGroup.push({
                    text: pIndex + 1
                });
                pIndexGroup.push({
                    text: '···'
                });
                pIndexGroup.push({
                    text: pCount
                });
            } else {
                pIndexGroup.push({
                    text: 1
                });
                pIndexGroup.push({
                    text: 2
                });
                pIndexGroup.push({
                    text: '···'
                });
                for (var i = pCount - 4; i <= pCount; i++) {
                    pIndexGroup.push({
                        text: i,
                        active: i == pIndex
                    });
                }
            }
        } else if (pCount > 0 && pCount <= 8) {
            for (var i = 1; i <= pCount; i++) {
                pIndexGroup.push({
                    text: i
                });
            }
            pIndexGroup[pIndex - 1].active = true;
        }

        //插入分页信息
        el_paginInfo.innerText = createPaginInfo(rStart, rEnd, rCount);
        //清空分页索引
        Array.prototype.slice.call(el_paginIndexWrap.children).forEach(function (n) {
            el_paginIndexWrap.removeChild(n);
        });
        //插入分页索引
        el_paginIndexWrap.appendChild(createPIndexGroup(pIndexGroup, onchange));
        //设置分页大小
        el_paginSize.value = pSize;
        el_paginSize.classList[rCount == 0 ? 'add' : 'remove']('disabled');
        doCallback && callback && callback(pIndex, pSize);

        //监听分页大小改变
        el_paginSize.onchange = function () {
            onchange(1);
        }
    }
    //创建分页控件
    var el_paginbar = createPbar(pageBarType);
    //初始化分页控件
    setPaginbar(el_paginbar, rowCount, pageIndex, pageSize, handler, false);
    el_paginbar.reset = function (rowCount, pageIndex, pageSize, handler) {
        setPaginbar(el_paginbar, rowCount, pageIndex, pageSize, handler, false);
    }
    return el_paginbar;
}


/***************************************************************** 
 * @ datatable
 *******************************************************************/
Ne.dataTable = function (config) {
    //创建空表格
    function createTable(config) {
        //渲染表头格
        function renderThCell(colIndex, col) {
            var th = Ne.dom.render('<div class="ne-table-th" data-colindex="' + colIndex + '">' +
                '<div class="ne-table-td-content">' + col.text + '</div>' +
                '<div class="ne-table-td-resizer"></div>' +
                '</div>');
            if (col.sortable) {
                th.classList.add('sortable');
            }
            if (col.hidden) {
                th.classList.add('none');
            }
            if (col.style) {
                var style = '';
                for (var i in col.style) {
                    style += i + ':' + col.style[i] + ';';
                }
                th.setAttribute('style', style);
            }
            return th;
        }
        //渲染表头
        function renderThead(config) {
            var row = Ne.dom.render('<div class="ne-table-tr"></div>');
            config.columns.forEach(function (col, index) {
                row.appendChild(renderThCell(index, col));
            });
            if (config.rowMultiSelectAble) {
                var name = 'tr_checkbox_all';
                var id = 'tr_checkbox' + Ne._.random(0, 10000) + '_all';
                var type = 'checkbox';
                var value = 'all';
                var td = Ne.dom.render('<div class="ne-table-th ne-table-td-selection">' +
                    '<input type="' + type + '" id="' + id + '" name="' + name + '" value="' + value + '">' +
                    '<label class="ne-checkbox" for="' + id + '"></label>' +
                    '</div>');
                row.insertBefore(td, row.children[0]);
                td.querySelector('input').onchange = function () {
                    var table = Ne.dom(td).parents('.ne-table')[0];
                    var inputgroup = Array.prototype.slice.call(table.querySelectorAll('input'));
                    var checked = this.checked;
                    if (checked) {
                        inputgroup.forEach(function (item) {
                            if (!item.disabled && !item.readonly) {
                                item.checked = true;
                            }
                        });
                        if (config.events && config.events.onRowSelect) {
                            var selectedRows = querySelectedRows(table);
                            config.events.onRowSelect(selectedRows.rows, selectedRows.records);
                        }
                    } else {
                        inputgroup.forEach(function (item) {
                            item.checked = false;
                            if (config.events && config.events.onRowSelect) {
                                config.events.onRowSelect([], []);
                            }
                        });
                    }
                }
            } else if (config.rowSingleSelectAble) {
                var td = Ne.dom.render('<div class="ne-table-th ne-table-td-selection"><span></span></div>');
                row.insertBefore(td, row.children[0]);
            }
            if (config.rowExtendRender) {
                var td = Ne.dom.render('<div class="ne-table-th ne-table-td-extension"><span></span></div>');
                row.insertBefore(td, row.children[0]);
                row.classList.add('ne-table-tr-extendable');
            }

            return row;
        }
        //渲染表
        function renderTable(config) {
            var table = Ne.dom.render('<div class="ne-table fixedheader headbordered striped">' +
                '<div class="ne-table-thead"></div>' +
                '<div class="ne-table-tbody">' +
                '<div class="ne-table-msg"><i class="ne-icon-drawer grey size-double"></i></div>' +
                '</div>' +
                '<div class="ne-table-resize-marker"></div>' +
                '<div class="ne-table-loadingmask"><div class="ne-innerloading"><i class="ne-preloader size-large"></i><span class="text-tagged">Loading...</span></div></div>' +
                '</div>');
            if (config.maxHeight) {
                table.style.height = config.maxHeight;
            }
            var theadWrap = table.querySelector('.ne-table-thead');
            var tbodyWrap = table.querySelector('.ne-table-tbody');
            theadWrap.appendChild(renderThead(config));
            return table;
        }
        var table = renderTable(config);
        return table;
    }
    //创建列控制器
    function createColumnsController(config, handler) {
        //渲染单个列控制
        function renderColCtrlItem(colIndex, col, name) {
            var id = name + '_' + colIndex;
            var value = colIndex;
            var checked = col.hidden ? '' : 'checked';
            var item = Ne.dom.render('<li>' +
                '<label class="ne-cell" for="' + id + '">' +
                '<span class="ne-cell-left">' +
                '<input type="checkbox" id="' + id + '" name="' + name + '" value="' + value + '" ' +
                checked +
                '>' +
                '<label class="ne-checkbox" for="' + id + '"></label>' +
                '</span>' +
                '<span class="ne-cell-center">' + col.text + '</span>' +
                '</label>' +
                '</li>');
            return item;
        }
        //渲染一组列控制
        function renderColCtrlGroup(config, handler) {
            var list = Ne.dom.render('<ul class="ne-list border-none"></ul>');
            var name = 'colctrl_checkbox_' + Ne._.random(0, 10000);
            config.columns.forEach(function (col, index) {
                var listitem = renderColCtrlItem(index, col, name);
                listitem.querySelector('input').onchange = function () {
                    var hidden = !this.checked;
                    var colIndex = this.value;
                    handler(colIndex, hidden);
                }
                list.appendChild(listitem);
            });
            return list;
        }
        //生成列控制容器
        var colcontroller = Ne.dom.render('<div class="ne-popover-static">' +
            '<button class="ne-btn ne-btn-default">' +
            '<span class="text-tagged margin-right-5">显示列</span>' +
            '<i class="ne-icon-arrow-down"></i>' +
            '</button>' +
            '<div class="ne-bubble ne-bubble-alignright ne-bubble-directiondown bordered">' +
            '<div class="ne-bubble-content"></div>' +
            '</div>' +
            '</div>');

        var listcontainer = colcontroller.querySelector('.ne-bubble-content');
        listcontainer.innerHTML = '';
        listcontainer.appendChild(renderColCtrlGroup(config, handler));
        return colcontroller;
    }
    //获取被选中行
    function querySelectedRows(table) {
        var checkedboxs = Array.prototype.slice.call(table.querySelectorAll('input:checked'));
        var records = [];
        var rows = [];
        checkedboxs.forEach(function (item) {
            var row = Ne.dom(item).parents('.ne-table-tr')[0];
            if (row.record) {
                rows.push(row);
                records.push(row.record);
            }
        });
        return {
            rows: rows,
            records: records
        }
    }
    //渲染表格数据
    function renderTableRows(records, config) {
        //渲染一格
        function renderCell(colIndex, record, col) {
            var td = Ne.dom.render('<div class="ne-table-td" data-colindex="' + colIndex + '"><div class="ne-table-td-content"></div></div>');
            var content = col.dataIndex == 'index' ? recordIndex + 1 : eval('(' + 'record.' + col.dataIndex +
                ')');
            if (typeof (col.render) == 'function') {
                content = col.render(content, record);
            }
            if (!Ne._.isElement(content)) {
                td.children[0].innerHTML = content;
            } else {
                td.children[0].appendChild(content);
            }
            if (col.style) {
                var style = '';
                for (var i in col.style) {
                    style += i + ':' + col.style[i] + ';';
                }
                td.setAttribute('style', style);
            }
            if (col.hidden) {
                td.classList.add('none');
            }
            return td;
        }
        //渲染一行
        function renderRecord(rowName, rowIndex, record, config) {
            var row = Ne.dom.render('<div class="ne-table-tr"></div>');
            config.columns.forEach(function (col, index) {
                row.appendChild(renderCell(index, record, col));
            });
            if (config.events && config.events.onRowClick) {
                row.onclick = function () {
                    config.events.onRowClick(row, record);
                }
            }
            if (config.rowMultiSelectAble || config.rowSingleSelectAble) {
                var id = rowName + '_' + rowIndex;
                var type = config.rowMultiSelectAble ? 'checkbox' : 'radio';
                var value = rowIndex;
                var td = Ne.dom.render('<div class="ne-table-td ne-table-td-selection">' +
                    '<input type="' + type + '" id="' + id + '" name="' + rowName + '" value="' + value + '">' +
                    '<label class="ne-checkbox" for="' + id + '"></label>' +
                    '</div>');
                row.insertBefore(td, row.children[0]);
                if (config.events && config.events.onRowSelect) {
                    td.querySelector('input').onchange = function () {
                        var table = Ne.dom(td).parents('.ne-table')[0];
                        var selectedRows = querySelectedRows(table);
                        if (this.checked == false) {
                            table.querySelector('input[name="tr_checkbox_all"]').checked = false;
                        }
                        config.events.onRowSelect(selectedRows.rows, selectedRows.records);
                    }
                }
            }
            if (config.rowExtendRender) {
                var rowExtendToggler = Ne.dom.render('<div class="ne-table-td ne-table-td-extension">' +
                    '<button class="ne-btn ne-btn-default ne-btn-icononly ne-table-tr-extendtoggler"><i class="ne-icon-plus"></i></button>' +
                    '</div>');
                var rowExtend = Ne.dom.render('<div class="ne-table-tr-extend"></div>');
                var extendContent = config.rowExtendRender(record);
                if (Ne._.isString(extendContent)) {
                    rowExtend.innerHTML = extendContent;
                } else {
                    rowExtend.appendChild(extendContent);
                }
                row.appendChild(rowExtend);
                row.insertBefore(rowExtendToggler, row.children[0]);
                rowExtendToggler.querySelector('button').onclick = function () {
                    var icon = rowExtendToggler.querySelector('i');
                    if (icon.classList.contains('ne-icon-plus')) {
                        icon.classList.remove('ne-icon-plus');
                        icon.classList.add('ne-icon-prohibit');
                        row.classList.add('expand');
                    } else {
                        icon.classList.add('ne-icon-plus');
                        icon.classList.remove('ne-icon-prohibit');
                        row.classList.remove('expand');
                    }
                }
                row.classList.add('ne-table-tr-extendable');
            }
            row.rowIndex = rowIndex;
            row.record = record;
            return row;
        }
        //渲染一组
        function renderRecords(records, config) {
            var trs = document.createDocumentFragment();
            var name = 'tr_checkbox_' + Ne._.random(0, 10000);
            records.forEach(function (record, index) {
                trs.appendChild(renderRecord(name, index, record, config));
            });
            return trs;
        }
        return renderRecords(records, config);
    }
    //更新列表数据
    function setData(table, records, config) {
        var content;
        if (Ne._.isArray(records) && records.length > 0) {
            content = renderTableRows(records, config);
        } else if (Ne._.isString(records)) {
            content = Ne.dom.render('<div class="ne-table-msg"><i class="ne-icon-warn-o "></i><span class="text-tagged">加载数据时出错！' + records + '</span></div>');
        } else if (records == null || (Ne._.isArray(records) && records.length == 0)) {
            content = Ne.dom.render('<div class="ne-table-msg"><i class="ne-icon-warn-o "></i><span class="text-tagged">无数据</span></div>');
        }
        var tbody = table.querySelector('.ne-table-tbody');
        tbody.innerHTML = '';
        tbody.appendChild(content);
        if (config.events && config.events.onPageRender) {
            config.events.onPageRender(records);
        }
    }
    //加载表格数据
    function loadData(table, paginbar, config, reqpkg) {
        config.pageSize = config.pageSize || 10;
        table.classList.add('ne-table-onloading');
        requestPaginData(reqpkg, 1, config.pageSize, function (data) {
            if (!Ne._.isString(data)) {
                setData(table, data.records, config);
                paginbar.reset(data.count, 1, config.pageSize, function (index, size) {
                    config.pageSize = size;
                    table.classList.add('ne-table-onloading');
                    requestPaginData(reqpkg, index, size, function (data) {
                        if (!Ne._.isString(data)) {
                            setData(table, data.records, config);
                        } else {
                            setData(table, data, config);
                        }
                        table.classList.remove('ne-table-onloading');
                    });
                });
            } else {
                setData(table, data, config);
                paginbar.reset(0, 1, config.pageSize, function (index, size) {});
            }
            table.classList.remove('ne-table-onloading');
        });
    }
    //列宽设置
    function setColumnsWidth(table, colIndex, width) {
        Array.prototype.slice.call(table.querySelectorAll('[data-colindex="' + colIndex + '"]')).forEach(function (cell) {
            cell.style.width = width + 'px';
        });
    }
    //列宽计算
    function calculateColumnsWidth(table, config) {
        Array.prototype.slice.call(table.querySelectorAll('.ne-table-th[data-colindex]')).forEach(function (col, colindex) {
            var width = col.offsetWidth;
            if (width > 0) {
                var colconfig = config.columns[colindex];
                colconfig.style = colconfig.style || {};
                colconfig.style.width = width + 'px';
                setColumnsWidth(table, colindex, width);
            }
        });
    }
    //列显示控制
    function columnsControl(table, colIndex, hidden, config) {
        Array.prototype.slice.call(table.querySelectorAll('[data-colindex="' + colIndex + '"]')).forEach(
            function (cell) {
                cell.classList[hidden ? 'add' : 'remove']('none');
                config.columns[colIndex].hidden = hidden;
            });
        calculateColumnsWidth(table,config);
    }
    //列宽控制
    function columnsResizeAble(table, callback) {
        var table_resizer = table.querySelector('.ne-table-resize-marker');
        Array.prototype.slice.call(table.querySelectorAll('.ne-table-th>.ne-table-td-resizer')).forEach(function (resizer) {
            resizer.onmousedown = function (event) {
                table_resizer.classList.add('active');
                resizer.classList.add('active');
                resizer.active = true;
                resizer.startX = event.clientX;
                table_resizer.startX = resizer.offsetParent.offsetLeft + resizer.offsetLeft + +resizer.offsetWidth / 2;
                table_resizer.style.left = table_resizer.startX + 'px';
            }
            resizer.onmousemove = function (event) {
                if (resizer.active) {
                    var move_x = resizer.startX - event.clientX;
                    resizer.style.right = move_x + 'px';
                    table_resizer.style.left = table_resizer.startX - move_x + 'px';
                }
            }
            resizer.onmouseout = resizer.onmouseup = function (event) {
                if (resizer.active) {
                    var move_x = resizer.startX - event.clientX;
                    table_resizer.classList.remove('active');
                    resizer.classList.remove('active');
                    resizer.active = false;
                    resizer.style.right = 0;
                    table_resizer.style.left = 0;
                    var col_target = resizer.parentElement;
                    var col_next = resizer.parentElement.nextElementSibling;
                    if (move_x && col_next) {
                        var col_target_index = parseInt(col_target.getAttribute('data-colindex'));
                        var col_next_index = parseInt(col_next.getAttribute('data-colindex'));
                        var col_target_width = col_target.offsetWidth - move_x;
                        var col_next_width = col_next.offsetWidth + move_x;
                        setColumnsWidth(table, col_target_index, col_target_width);
                        setColumnsWidth(table, col_next_index, col_next_width);
                    }
                    callback();
                }
            }
        });
    }
    //列头点击排序
    function columnsSortAble(table, callback) {
        Array.prototype.slice.call(table.querySelectorAll('.ne-table-th.sortable>.ne-table-td-content')).forEach(function (colcontent) {
            colcontent.onclick = function () {
                var col = this.parentElement;
                var sortedCol = this.parentElement.parentElement.querySelector('.sortable-up') || this.parentElement.parentElement.querySelector('.sortable-down');
                if (sortedCol && sortedCol != col) {
                    sortedCol.classList.remove('sortable-up');
                    sortedCol.classList.remove('sortable-down');
                }
                var sort = '',
                    orderby = '';
                if (col.classList.contains('sortable-up')) {
                    col.classList.remove('sortable-up');
                    col.classList.add('sortable-down');
                    sort = 'asc';
                } else {
                    col.classList.add('sortable-up');
                    col.classList.remove('sortable-down');
                    sort = 'desc';
                }
                var colindex = parseInt(col.getAttribute('data-colindex'));
                orderby = config.columns[colindex].dataIndex;
                callback(orderby, sort);
            }
        });
    }

    //init
    var table = createTable(config);
    var paginbar = Ne.paginBar(config.pageBarType || 1, 0, 0, config.pageSize || 10);
    var container = document.querySelector(config.tableContainer);
    container.appendChild(table);
    container.appendChild(paginbar);
    calculateColumnsWidth(table, config);
    columnsResizeAble(table, function () {
        calculateColumnsWidth(table, config);
    });

    if (config.columnsControlContainer) {
        var colCtrlContainer = document.querySelector(config.columnsControlContainer);
        var columnsController = createColumnsController(config, function (colIndex, hidden) {
            columnsControl(table, colIndex, hidden, config);
        });
        colCtrlContainer.appendChild(columnsController);
    }

    return {
        loadData: function (reqpkg) {
            loadData(table, paginbar, config, reqpkg);
            columnsSortAble(table, function (orderby, sort) {
                reqpkg.para = reqpkg.para || {};
                reqpkg.para.orderby = orderby;
                reqpkg.para.sort = sort;
                loadData(table, paginbar, config, reqpkg);
            });
        },
        querySelectedRows: function () {
            return querySelectedRows(table);
        },
        refresh: function () {
            var pageIndex = paginbar.querySelector('.ne-paginbar-control-index .active');
            pageIndex && pageIndex.onclick();
        }
    };
}


/***************************************************************** 
 * @ datalist
 *******************************************************************/
Ne.dataList = function (config) {
    //创建空列表
    function createList(config) {
        var list = Ne.dom.render('<div class="ne-datalist">' +
            '<div class="ne-datalist-body">' +
            '<div class="ne-list-loadingmask"><div class="ne-innerloading"><i class="ne-preloader size-large"></i><span class="text-tagged">Loading...</span></div></div>' +
            '</div>');
        var listbody = list.querySelector('.ne-datalist-body');
        if (config.cls) {
            var cls = config.cls.split(' ');
            cls.forEach(function (n, i) {
                listbody.classList.add(n);
            });
        }
        if (config.style) {
            var style = '';
            for (var i in config.style) {
                style += i + ':' + config.style[i] + ';';
            }
            listbody.setAttribute('style', style);
        }
        return list;
    }
    //渲染列表数据
    function renderList(records, config) {
        //渲染一行
        function renderRecord(index, record, config) {
            var li = config.itemRender(record, index);
            if (!Ne._.isElement(li)) {
                li = Ne.dom.render(li);
            }
            if (config.events && config.events.onItemClick) {
                li.onclick = function () {
                    config.events.onItemClick(li, record);
                }
            }
            li.itemIndex = index;
            li.record = record;
            return li;
        }
        //渲染一组
        function renderRecords(records, config) {
            var lis = document.createDocumentFragment();
            records.forEach(function (record, index) {
                lis.appendChild(renderRecord(index, record, config));
            });
            return lis;
        }
        //渲染容器
        function renderRecordsContainer(lis,config){
            if(config.containerRender){
                return config.containerRender(lis)||lis;
            }else{
                return lis;
            }
        }
        return renderRecordsContainer(renderRecords(records, config),config);
    }
    //更新列表数据
    function setData(list, records, config) {
        var lis = renderList(records, config);
        var listbody = list.querySelector('.ne-datalist-body');
        listbody.innerHTML = '';
        listbody.appendChild(lis);
        if (config.events && config.events.onPageRender) {
            config.events.onPageRender(records);
        }
    }
    //加载表格数据
    function loadData(list, paginbar, config, reqpkg) {
        config.pageSize = config.pageSize || 10;
        list.classList.add('ne-datalist-onloading');
        requestPaginData(reqpkg, 1, config.pageSize, function (data) {
            if (!Ne._.isString(data)) {
                setData(list, data.records, config);
                paginbar.reset(data.count, 1, config.pageSize, function (index, size) {
                    config.pageSize = size;
                    list.classList.add('ne-datalist-onloading');
                    requestPaginData(reqpkg, index, size, function (data) {
                        setData(list, data.records, config);
                        list.classList.remove('ne-datalist-onloading');
                    });
                });
            } else {
                var listbody = list.querySelector('.ne-datalist-body');
                var errormsg = Ne.dom.render('<div class="ne-list-errormsg"><i class="ne-icon-warn-o "></i><span class="text-tagged">加载数据出错：' + data + '</span></div>');
                listbody.innerHTML = '';
                listbody.appendChild(errormsg);
                paginbar.reset(0, 1, config.pageSize, function (index, size) {});
                if (config.events && config.events.onPageRender) {
                    config.events.onPageRender([]);
                }
            }
            list.classList.remove('ne-datalist-onloading');
        });
    }

    //init
    var list = createList(config);
    var paginbar = Ne.paginBar(config.pageBarType || 1, 0, 0, config.pageSize || 10);
    var container = document.querySelector(config.listContainer);
    container.appendChild(list);
    container.appendChild(paginbar);

    return {
        loadData: function (reqpkg) {
            loadData(list, paginbar, config, reqpkg);
        },
        refresh: function () {
            var pageIndex = paginbar.querySelector('.ne-paginbar-control-index .active');
            pageIndex && pageIndex.onclick();
        }
    };
}


/***************************************************************** 
 * @ modal
 *******************************************************************/
Ne.modal = function (config) {
    function createDialog(config) {
        var el_dialog = Ne.dom.render('<div class="ne-dialog" ne-role="dialog">' +
            '<div class="ne-mask"></div>' +
            '<div class="ne-dialog-container"></div>' +
            '</div>');
        var el_container = el_dialog.querySelector('.ne-dialog-container');
        //生成内容
        var content = config.content;
        if (Ne._.isElement(content)) {
            content = content;
        } else if (Ne._.isFunction(content)) {
            content = content();
        } else if (Ne._.isString(content)) {
            content = Ne.dom.render(content);
        }
        //内容宽度
        if (config.style && config.style.width) {
            content.style.width = config.style.width;
        }
        //插入内容
        el_container.appendChild(content);
        return el_dialog;
    }

    var dialog = createDialog(config);
    var neDialog = Ne.acts(dialog);
    config.init && config.init.apply(dialog, arguments);
    document.body.appendChild(dialog);
    return {
        el: dialog,
        show: function () {
            neDialog.show();
            config.onshow && config.onshow.apply(dialog, arguments);
        },
        hide: function () {
            neDialog.hide();
            config.onhide && config.onhide.apply(dialog, arguments);
        }
    }
}


/***************************************************************** 
 * @ datepicker
 *******************************************************************/
;(function (Ne) {

    function showDatePicker(target) {
        var __obj = {
            preset: target.getAttribute('data-type') || target.getAttribute('type')
        };
        if (target.getAttribute('data-invalid')) {
            __obj.invalid = JSON.parse(target.getAttribute('data-invalid'));
        }
        if (__obj.preset == 'date') {
            __obj.dateFormat = 'yy-mm-dd';
        }
        if (__obj.preset == 'datetime') {
            __obj.dateFormat = 'yy-mm-dd hh:ii:ss';
        }
        if (__obj.preset == 'month') {
            __obj.preset = 'date';
            __obj.dateFormat = 'yy-mm';
        }
        if (target.getAttribute('min')) {
            __obj.min = new Date(target.getAttribute('min'));
        }
        if (target.getAttribute('max')) {
            __obj.max = new Date(target.getAttribute('max'));
        }
        if (document.body.offsetWidth > 800) {
            __obj.containerType = 'popover';
        }
        var inst = laydate.render({
            elem: target,
            show: true
        });

        return inst;
    }

    //define
    Ne.component('picker', {
        props: {
            show: function () {
                if (!this._inited) {
                    this._inited = true;
                    showDatePicker(this);
                }
            }
        }
    });
})(Ne);

/***************************************************************** 
 * @ form
 *******************************************************************/
;
(function (Ne) {
    var patterns = {
        tel: '^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$',
        mail: '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
        num: '[0-9]*',
        url: '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]',
        idcard: '( ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)'
    }

    function _clearable(target) {
        var el_clearbtn = target.nextElementSibling;
        if (!el_clearbtn || !el_clearbtn.classList.contains('ne-input-icon')) {
            target.parentElement.classList.add('ne-input_withicon_right');
            el_clearbtn = Ne.dom.render('<i class="ne-icon-delete-f grey ne-input-icon"></i>');
            el_clearbtn.onclick = function () {
                target.value = '';
                el_clearbtn.style.display = 'none';
            }
            Ne.dom(el_clearbtn).insertAfter(target);
        } else {
            if (target.value != '') {
                el_clearbtn.style.display = 'block';
            } else {
                el_clearbtn.style.display = 'none';
            }
        }
    }

    function validate(target) {
        var flag = true;
        var errmsg = "";
        var _require = target.getAttribute('data-require');
        var _validate = target.getAttribute('data-validate');
        var _hasvalue = target.value && target.value.length != 0;
        if (_require && !_hasvalue) {
            flag = false;
            controlErrorTips(flag, target, '不能为空');
        } else {
            flag = true;
            controlErrorTips(flag, target, '不能为空');
        }
        if (_validate && _hasvalue) {
            if (_validate.indexOf('pattern:') === 0) {
                _validate = _validate.slice(8);
                var reg = new RegExp(_validate, "g");
                flag = reg.test(target.value);
                controlErrorTips(flag, target, '格式不正确');
            } else if (_validate.indexOf('fn:') === 0) {
                _validate = _validate.slice(3);
                target.validateFn = target.validateFn || window[_validate];
                flag = target.validateFn(target.value);
                controlErrorTips(flag, target, "验证失败");
            } else if (_validate.indexOf('sync:') === 0) {
                _validate = _validate.slice(5);
                target.validateFn = target.validateFn || window[_validate];
                target.validateFn(target.value, function (flag, msg) {
                    controlErrorTips(flag, target, "验证失败," + msg);
                });
            } else if (patterns[_validate]) {
                var reg = new RegExp(patterns[_validate], "g");
                flag = reg.test(target.value);
                controlErrorTips(flag, target, '格式不正确');
            }
        }
        return flag;
    }

    function controlErrorTips(flag, target, msg) {
        if (!flag) {
            var placeholder = target.getAttribute('data-validatemsg');
            msg = placeholder ? msg + '：' + placeholder : msg;
            showErrorTips(target, msg);
        } else {
            hideErrorTips(target);
        }
    }


    function hideErrorTips(target) {
        target.classList.remove('validate-error');
        var field = Ne.dom(target).parents('.ne-field');
        if (field && field[0]) {
            field = field[0];
            var errormsg = field.querySelector('.validate-error-msg');
            errormsg && field.removeChild(errormsg);
        }
    }

    function showErrorTips(target, msg) {
        target.classList.add('validate-error');
        var field = Ne.dom(target).parents('.ne-field');
        if (field && field[0]) {
            field = field[0];
            var errormsg = field.querySelector('.validate-error-msg');
            if (!errormsg) {
                var errormsg = Ne.dom.render('<span class="validate-error-msg"></span>');
                field.appendChild(errormsg);
            }
            errormsg.innerText = msg;
        }
    }

    //define
    Ne.component('input', {
        props: {
            oninput: function () {
                //clearable
                if (this.getAttribute('ne-clearable')) {
                    _clearable(this);
                }
                if (this.validateing) {
                    validate(this);
                }
            },
            validate: function () {
                if (this.type == 'hidden') {
                    return true;
                } else {
                    this.validateing = true;
                    return validate(this);
                }
            }
        }
    });
    Ne.component('textarea', {
        props: {
            oninput: function () {
                var _this = this;
                if (_this.getAttribute('maxlength')) {
                    var el_count = _this.parentElement.querySelector('.ne-textarea-count') || _this.parentElement.querySelector('.ne-markdown-count');
                    if (el_count) {
                        var value = _this.tagName.toLowerCase() == 'textarea' ? _this.value : _this.innerText;
                        var maxlength = Number(_this.getAttribute('maxlength')),
                            currlength = value.length > maxlength ? maxlength : value.length;
                        el_count.innerText = currlength + '/' + maxlength;
                        if (value.length >= maxlength + 1) {
                            value = value.substring(0, value.length - 1);
                            if (_this.tagName.toLowerCase() == 'textarea') {
                                _this.value = value;
                            } else {
                                _this.innerText = value;
                            }
                        }
                    }
                }
                if (this.validateing) {
                    validate(this);
                }
            },
            validate: function () {
                this.validateing = true;
                return validate(this);
            }
        }
    });
    Ne.component('form', {
        props: {
            validate: function () {
                var form = this;
                var flag = true;
                Array.prototype.slice.call(form.querySelectorAll('input')).forEach(function (item) {
                    if (Ne.acts(item).validate() === false) {
                        flag = false;
                    }
                });
                Array.prototype.slice.call(form.querySelectorAll('textarea')).forEach(function (item) {
                    if (Ne.acts(item).validate() === false) {
                        flag = false;
                    }
                });
                return flag;
            }
        }
    });
    Ne.component._define.picker.props.validate = function () {
        this.validateing = true;
        this.addEventListener('change', function () {
            if (this.validateing) {
                validate(this);
            }
        });
        return validate(this);
    }
    document.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
})(Ne);

