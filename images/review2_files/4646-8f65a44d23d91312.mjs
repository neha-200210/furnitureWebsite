(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4646],{482131:(e,t,n)=>{n.d(t,{CA:()=>x,Tb:()=>L,Tx:()=>A,Y:()=>g,kz:()=>S});var r,o,i,a,s=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},l=function(e,t,n){var r;return function(o){t.value>=0&&(o||n)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},p=-1,m=function(){return"hidden"===document.visibilityState?0:1/0},f=function(){u((function(e){var t=e.timeStamp;p=t}),!0)},v=function(){return p<0&&(p=m(),f(),d((function(){setTimeout((function(){p=m(),f()}),0)}))),{get firstHiddenTime(){return p}}},g=function(e,t){var n,r=v(),o=s("FCP"),i=function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)))},a=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],u=a?null:c("paint",i);(a||u)&&(n=l(e,o,t),a&&i(a),d((function(r){o=s("FCP"),n=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,n(!0)}))}))})))},h=!1,y=-1,S=function(e,t){h||(g((function(e){y=e.value})),h=!0);var n,r=function(t){y>-1&&e(t)},o=s("CLS",0),i=0,a=[],p=function(e){if(!e.hadRecentInput){var t=a[0],r=a[a.length-1];i&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,a.push(e)):(i=e.value,a=[e]),i>o.value&&(o.value=i,o.entries=a,n())}},m=c("layout-shift",p);m&&(n=l(r,o,t),u((function(){m.takeRecords().map(p),n(!0)})),d((function(){i=0,y=-1,o=s("CLS",0),n=l(r,o,t)})))},T={passive:!0,capture:!0},w=new Date,E=function(e,t){r||(r=t,o=e,i=new Date,b(removeEventListener),_())},_=function(){if(o>=0&&o<i-w){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};a.forEach((function(t){t(e)})),a=[]}},C=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,T),removeEventListener("pointercancel",r,T)};addEventListener("pointerup",n,T),addEventListener("pointercancel",r,T)}(t,e):E(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,C,T)}))},A=function(e,t){var n,i=v(),p=s("FID"),m=function(e){e.startTime<i.firstHiddenTime&&(p.value=e.processingStart-e.startTime,p.entries.push(e),n(!0))},f=c("first-input",m);n=l(e,p,t),f&&u((function(){f.takeRecords().map(m),f.disconnect()}),!0),f&&d((function(){var i;p=s("FID"),n=l(e,p,t),a=[],o=-1,r=null,b(addEventListener),i=m,a.push(i),_()}))},k=new Set,L=function(e,t){var n,r=v(),o=s("LCP"),i=function(e){var t=e.startTime;t<r.firstHiddenTime&&(o.value=t,o.entries.push(e)),n()},a=c("largest-contentful-paint",i);if(a){n=l(e,o,t);var p=function(){k.has(o.id)||(a.takeRecords().map(i),a.disconnect(),k.add(o.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),u(p,!0),d((function(r){o=s("LCP"),n=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,k.add(o.id),n(!0)}))}))}))}},x=function(e){var t,n=s("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},404646:(e,t,n)=>{n.d(t,{cA:()=>$,fM:()=>B,N5:()=>P});var r=n(667294),o=n(991067);const i=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`};var a=n(172071),s=n(31062),c=n(383434),u=n(482131);const d=(0,c.X)("LayoutShiftDebugger"),l=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&l(e.parentNode)||null,p=e=>Math.round(1e3*e);let m=[];const f=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{const r=(0,s.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e});let o=0;const c=e=>{o=e.timeStamp};window.addEventListener("scroll",c),window.addEventListener("beforeunload",(()=>{window.removeEventListener("scroll",c)}));const f=`${i(e)}.CLS`,v=()=>(e=>{let t=Object.freeze({}),n=0;m.forEach((({value:e,shift:{sources:r},route:o,hadRecentNavigation:i,hadRecentScroll:a,isAuth:s})=>{if(n+=e,!r||!r.length)return;const c=e/r.length;r.forEach((({node:e})=>{const n=e?l(e)||"ROOT":"NODE_REMOVED",r={route:o,boundaryId:n,hadRecentNavigation:i,hadRecentScroll:a,isAuth:s},u=JSON.stringify(r);t={...t,[u]:{score:((t[u]||{}).score||0)+c,tags:r}}}))})),Object.keys(t).forEach((n=>{const{score:r,tags:o}=t[n];a.Z.count(`${e}.shifts`,p(r),1,{...o})})),d("Debug CLS boundaries",n,t,m),m=[]})(f);let g,h,y=0,S=0,T=0;(0,u.kz)((({entries:r,value:i})=>{if(T=i||0,r.length){g=t(),h=n();const a=r[0].startTime,s=y!==a,c=s?r:r.slice(S);s&&(y=a),m=m.concat(c.map((t=>({value:i,shift:t,route:g,hadRecentNavigation:h>0&&h+500>t.startTime,hadRecentScroll:o>0&&o+500>t.startTime,isAuth:e.isAuthenticated})))),S=r.length}}),!0);const w=setInterval((()=>{if(m.length){v();const t=(e=T)<=.1?"good":e<=.25?"adequate":"poor";a.Z.count(`${f}.${t}`,1,1),r.stop(p(T))}var e}),1e3);window.addEventListener("beforeunload",(()=>{clearInterval(w),0===T&&r.abort("no_shifts_detected")}))};var v=n(311560);var g=n(156381);const h=e=>Number(e.toFixed(2)),y={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"},other_profile:{LCP:"other_profile_lcp",FID:"other_profile_fid"},topic:{LCP:"topic_lcp",FID:"topic_fid"}},S=["CA","GB","DE","FR","AU","JP","BR","MX"],T=({surface:e,isAuthenticated:t})=>{if(t)return[];switch(e){case"pin_closeup":return["mweb_pin_page_ssr_lite"];default:return[]}},w=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t||"other_profile"===t||"topic"===t?(({pwtStaticContext:e,surface:t})=>{const n=(0,s.Jx)({annotateExperiments:T({surface:t,isAuthenticated:e.isAuthenticated}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:y[t].LCP,pwtStaticContext:e}),r=(0,s.Jx)({name:y[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,{isAuthenticated:r,isBot:o,isSocialBot:c,deviceType:d,locale:l}=e,p=l.split("-")[1],m={},f=(s,u,l)=>{if(!m[s]){m[s]=!0;const f=`${i(e)}.${t}.${s}`;"LCPCount"===s?(a.Z.count(`${f}.sum`,u,1),a.Z.increment(`${f}.size`,1)):("FID"===s||"FIDStartTime"===s?a.Z.timing(`${f}`,u,1,{timingBucket:null==l?void 0:l.timingBucket}):a.Z.timing(`${f}`,u,1),!r&&S.includes(p)&&(({botType:e,deviceType:t,isChrome:n,region:r})=>{const o=`pwtlogger.${e}.${t}`,i=["all",...r?[r.toLowerCase()]:[]],a=["all",...n?["chrome"]:[]],s=[];return i.forEach((e=>{a.forEach((t=>{s.push(`${o}.region_${e}.browser_${t}`)}))})),s})({botType:(c?"socialBot":o&&"bot")||"nonbot",deviceType:d,isChrome:!0,region:(0,v.Z)(p)}).forEach((e=>{a.Z.timing(`${e}.tags.growthSEO.${t}_${s}`,u,1,{country:p})})),n&&n(s,u))}};(0,u.Tx)((({value:e})=>{const t=(0,g.Af)();let n;n=e<=100?"Good":e>100&&e<=300?"Needs Improvement":"Poor",f("FID",h(e),{timingBucket:n}),t&&f("FIDStartTime",h(t),{timingBucket:n})})),(0,u.Tb)((({value:e})=>{f("LCPCount",(0,g.Kj)()),f("LCP",(e=>10*Math.round(e/10))(e))})),(0,u.Y)((({value:e})=>f("FCP",e)))};var E=n(790348);let _=null;const C=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}};var b=n(969853),A=n(543059),k=n(7789),L=n(22773),x=n(276775),I=n(785893);const R=(0,r.createContext)(null),D=(0,r.createContext)(null);function $({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:i,staticContext:a}){const c=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(t),l=(0,r.useRef)(!0),{path:p}=(0,x.$B)(),m=(0,r.useRef)(p),v=!a.isCachedRender&&(0,o.Z)(a.deviceType);if((0,r.useEffect)((()=>{m.current=p}),[p]),(0,r.useEffect)((()=>{if((0,L.X_)({size:n||1e3}),(0,g.UQ)(),(0,E.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach((e=>{window.performance[e]||(0,E.A9)(`not_supported.window.performance.${e}`)})):(0,E.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,E.A9)("not_supported.window.PerformanceObserer"),(0,b.v)()||(0,E.A9)("not_supported.grid_profiler"),l.current=!1,v&&!k.is){if(((e,t)=>{let n,r=0,o=0,i=null,a=null,c=null,u=null,d=[];const l=()=>{o+=1,c=window.requestAnimationFrame(l)},p=()=>{if(u){const n=d.some((e=>null!==i&&i-e>0&&i-e<=500)),o=t(),{isAuthenticated:c}=e;if(n){const t=(0,s.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;const n={surface:o,isAuthenticated:c};if(null===i||null===a||0===r)if(null===i&&null===a)t.error("no_duration",n);else if(null==i)_=a,t.error("no_start",n);else if(null==a){let e;e=_&&i-_<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n);else{_=a;const e=a-i,s=e/r;0===s?t.error("zero_value",n):s<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",o,"STRING"),t.addBinaryAnnotation("isAuthenticated",c,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(s))}}else(0,E.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:c,surface:o}})}window.cancelAnimationFrame(c),r=0,o=0,d=[],a=null,i=null,u=null},m=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(p,500),null===u?(u=100*Math.random()<10,u&&(c=window.requestAnimationFrame(l),i=e)):u&&(a=e,r+=o,o=0)},f=({timeStamp:e})=>{d.push(e)};["wheel","pointerdown","keydown"].forEach((e=>{window.addEventListener(e,f,{passive:!0,capture:!0})})),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("pagehide",(()=>{window.removeEventListener("scroll",m),["wheel","pointerdown","keydown"].forEach((e=>{window.removeEventListener(e,f)}))}))})(a,(()=>C(m.current)?C(m.current)||"UNKNOWN_SURFACE":m.current||"UNKNOWN_SURFACE")),"Chrome"===a.browserName){f({staticContext:a,getCurrentRoute:()=>m.current,getLastNavigationTime:()=>u.current||0});const e=C(m.current);e&&w({pwtStaticContext:a,surface:e})}}}),[]),d.current!==t){d.current=t,u.current=null!==(h=window.performance)&&void 0!==h&&h.now?window.performance.now():null;const{current:e}=u;if(!l.current){const t=!c.current;(0,E.A9)("routeStart",{tags:{action:i}}),(0,L.Eg)(t),(0,g.Ux)(t),(0,g.on)(),(0,A.tl)();const{customBufferSize:n,defaultBufferSize:r}=(0,L.LH)();e&&((0,E.A9)("routeStart.customBufferSize",{count:n}),(0,E.A9)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:i})}}var h;return(0,I.jsx)(R.Provider,{value:v?a:null,children:(0,I.jsx)(D.Provider,{value:c.current,children:e})})}const B=()=>(0,r.useContext)(D),P=()=>(0,r.useContext)(R)},991067:(e,t,n)=>{n.d(t,{Z:()=>a});const r=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)};var o=n(985271),i=n(969853);function a(e){return!("desktop"===e&&!r())&&(!!o.Z&&(0,i.v)())}},528961:(e,t,n)=>{n.d(t,{cC:()=>i,jy:()=>o,qr:()=>s,sk:()=>a});const r=e=>"number"==typeof e?Math.round(e):e,o=e=>({type:"I16",value:r(e)}),i=e=>({type:"I32",value:r(e)}),a=e=>({type:"STRING",value:e}),s=e=>({type:"BOOL",value:e})},607150:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>c,jh:()=>s,rX:()=>a});var r=n(672115),o=n(156381);const i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),a=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=(0,o.v2)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},s=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),c=(e,t)=>Object.keys(e).reduce(((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n),Object.freeze({}))},638089:(e,t,n)=>{n.d(t,{ng:()=>h,rA:()=>S});var r=n(602738),o=n(226464),i=n(22773),a=n(156381),s=n(543059),c=n(528961);const u=(e,t)=>(e||[]).reduce(((e,n)=>({...e,[`experiment.${n}`]:(0,c.sk)(t(n))})),{}),d=(e,t)=>"number"==typeof t?e(t):null,l=e=>e.reduce(((e,t)=>e+t),0),p=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),m=e=>{if(!e.length)return{};const t=e.map((({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{const o=t||e;return{startTime:e,requestStart:o,responseStart:n||o,responseEnd:r}})),n=l(t.map((e=>e.requestStart-e.startTime))),r=l(t.map((e=>e.responseStart-e.requestStart))),o=l(t.map((e=>e.responseEnd-e.responseStart))),i=n+r+o,a=l(e.map((e=>e.decodedBodySize||0)));return{decodedBodySize:(0,c.cC)((s=a,Number(Number(s/1024).toFixed(3)))),"duration.all":(0,c.cC)(i),"duration.requestStartToResponseStart":(0,c.cC)(r),"duration.responseStartToResponseEnd":(0,c.cC)(o),"duration.startToRequestStart":(0,c.cC)(n)};var s},f=e=>{const t=e.filter((e=>!!e.responseEnd));return{...e.length?{...m(t),"count.completed":(0,c.cC)(t.length)}:{},"count.all":(0,c.cC)(e.length)}},v=e=>{const t=["timeSecond1","timeSecond2","timeSecond3"],n={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},r={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){const{requestStart:o,startTime:i}=e[0].timing,a=o||i;n.timeSecond1.start=a,n.timeSecond1.end=a+1e3,n.timeSecond2.start=a+1e3,n.timeSecond2.end=a+2e3,n.timeSecond3.start=a+2e3,n.timeSecond3.end=a+3e3,e.forEach((e=>{const{timing:o}=e;r[e.category]=r[e.category].concat([o]),e.isDeferred&&(r.script_deferred=r.script_deferred.concat([o])),e.isExternal&&(r.external=r.external.concat([o])),e.isVisuallyCompleteRequired&&(r.visually_complete=r.visually_complete.concat([o]));const{requestStart:i,startTime:a,responseEnd:s}=o,c=i||a;t.forEach((e=>{const{start:t,end:r}=n[e];(c>=t&&c<r||c<t&&s>t)&&(n[e].count+=1)}))}))}const o={...p("concurrentRequests.",Object.keys(n).reduce(((e,t)=>e={...e,[t]:(0,c.cC)(n[t].count)}),{}))};return{...Object.keys(r).reduce(((e,t)=>({...e,...p(`resource.${t}.`,f(r[t]))})),o)}},g=(e,t,n)=>{var a;const{devicePixelRatio:s,navigator:u,innerWidth:l,innerHeight:p,performance:m}=window,{deviceMemory:f,hardwareConcurrency:v,platform:g,userAgent:h,connection:y}=u,{memory:S}=m,{appType:T,appVersion:w,browserName:E,browserVersion:_,deviceType:C,isAppShell:b,isAuthenticated:A,isBot:k,isSocialBot:L,locale:x,osName:I,stageName:R}=t,D="desktop"===C?T||5:T||6;let $;const{navigationType:B}=e;let P=null;if("initial_app_load"===B){var N;$=1;const e=null===(N=(0,r.Z)("navigation")[0])||void 0===N?void 0:N.transferSize;P=e?parseFloat((.001*e).toFixed(1)):null}else $=4;return{"app.type":(0,c.jy)(D),"app.version":(0,c.sk)(w),"browser.name":(0,c.sk)(E),"browser.version":(0,c.sk)(_),"cpu.speed":(0,c.jy)(v),"device.memory":(0,c.jy)(f),"device.type":(0,c.jy)(0),"device.typeName":(0,c.sk)(C),"device.version":(0,c.sk)("unknown"),"pwt.cause":(0,c.jy)($),"net.effectiveType":(0,c.sk)((null==y?void 0:y.effectiveType)||null),"net.downlink":(0,c.cC)(d((e=>10*Math.round(e/10)),null==y?void 0:y.downlink)),"net.downlinkMax":(0,c.cC)(d((e=>10*Math.round(e/10)),null==y?void 0:y.downlinkMax)),"net.rtt":(0,c.cC)(d((e=>10*Math.round(e/10)),null==y?void 0:y.rtt)),"net.speed":(0,c.cC)((0,i.Hv)(n,!1)),"pwt.result":(0,c.jy)(1),"view.type":(0,c.cC)(0),"viewport.height":(0,c.cC)(p||0),"viewport.width":(0,c.cC)(l||0),devicePixelRatio:(0,c.cC)(s||0),isAppShell:(0,c.qr)(b),isAuthenticated:(0,c.qr)(A),isBot:(0,c.qr)(k),isSocialBot:(0,c.qr)(L),locale:(0,c.sk)(x),osName:(0,c.sk)(I),...null!==P&&{htmlResponseSize:(0,c.cC)(P)},nextHopProtocol:(0,c.sk)((null===(a=(0,r.Z)("navigation")[0])||void 0===a?void 0:a.nextHopProtocol)||null),platform:(0,c.sk)(g||null),profilerVersion:(0,c.sk)("3"),pwtActionName:(0,c.jy)((0,o.Rp)(e)),stageName:(0,c.sk)(R),userAgent:(0,c.sk)(h),usedJSHeapSize:(0,c.cC)((null==S?void 0:S.usedJSHeapSize)||0),totalJSHeapSize:(0,c.cC)((null==S?void 0:S.totalJSHeapSize)||0),jsHeapSizeLimit:(0,c.cC)((null==S?void 0:S.jsHeapSizeLimit)||0)}},h=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:o=[]})=>({...u(e,n.getExperimentGroup),...g(t,n,o),...r,stopwatchVersion:(0,c.jy)(1)}),y=(e,t)=>{var n;const{navigator:r}=window,{serviceWorker:o}=r,{surface:i,navigationType:u,isAuthenticated:d}=e,{cumulativeLayoutShiftScore:p,longTaskDurations:m}=(0,a.v2)();return{...m.length?{"longTask.count":(0,c.cC)(m.length),"longTask.maxDuration":(0,c.cC)(Math.max(...m)),"longTask.totalDuration":(0,c.cC)(l(m))}:{},cumulativeLayoutShiftScore:(0,c.cC)(100*p),"masonry.paginationMarkCount":(0,c.cC)((0,s.Ao)(s.at,t)),"metricId.isAuthenticated":(0,c.qr)(d),"metricId.navigationType":(0,c.sk)(u),"metricId.surface":(0,c.sk)(i),resourceBufferClearedCount:(0,c.jy)((0,s.Ao)("resourceBufferCleared",t)),scrollDuringLayout:(0,c.qr)((0,s.BA)("scrollDuringLayout",t)),serviceWorker:(0,c.qr)(o?!!o.controller:null),serviceWorkerState:(0,c.sk)((null==o||null===(n=o.controller)||void 0===n?void 0:n.state)||null)}},S=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:o,pwtEndTime:i,pwtStaticContext:a})=>({...t,...v(o),...u(e,a.getExperimentGroup),...g(r,a,n),...y(r,i)})},860273:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(985271);const o=()=>{const[e]=r.Z?r.Z.getEntriesByType("navigation"):[];return e}},558775:(e,t,n)=>{n.d(t,{Z:()=>w});let r=null;const o=(e,t)=>(r=r||{results:[],context:t},r.results.push(e),r);var i=n(176532),a=n(7789),s=n(383434),c=n(226464),u=n(790348),d=n(860273),l=n(358864),p=n(602738),m=n(528961);const f=(e,t)=>Object.keys(e).reduce(((n,r)=>{const o=e[r];return o&&(n[r]={timestamp:t+o}),n}),{}),v=({span:e,timeOrigin:t})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:f(e.annotationMap,t),binary_annotations:(n=e.binaryAnnotationMap,Object.keys(n).reduce(((e,t)=>{const r=n[t];if(!r)return e;const{value:o,type:i}=r;return null==o?e:e.concat({name:t,value:o,annotation_type:i})}),[]))};var n},g=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:i,traceId:a})=>({name:`pwt/${e}`,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:i,id:a}),h=({annotations:e})=>e.reduce(((e,{key:t,timestamp:n})=>({...e,[`server_${t}`]:{timestamp:n}})),{}),y=(e,t)=>({...e,annotations:{...h(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),S=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:o})=>{let i=v({span:g(t,n),timeOrigin:r}),a=null;return o&&(i=y(i,o),a=((e,t,n)=>{var r;const o=(0,d.Z)();return(null==o?void 0:o.responseEnd)?y(v({span:{name:"html",startTime:0,endTime:(null==o?void 0:o.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{nextHopProtocol:(0,m.sk)((null===(r=(0,p.Z)("navigation")[0])||void 0===r?void 0:r.nextHopProtocol)||null)},id:e.server_span_id||(0,l.Z)(),parentId:t},timeOrigin:n}),e):null})(o,e,r)),{trace_id:e,spans:[i,...a?[a]:[],...n.spans.map((e=>v({span:e,timeOrigin:r})))]}},T=(0,s.X)("reportResult");function w({metricId:e,pwtStaticContext:t,result:n,isAuth:r}){const{serverData:s}=t,d=(0,c.KJ)(e),l=`${n.type}.${d}`,p=`${n.type}.sampled.${d}`,m=void 0!==r&&{tags:{isAuth:r}}||void 0;if((0,u.A9)(n.reason?l.concat(`.${n.reason}`):l,m),(0,u.A9)(n.reason?p.concat(`.${n.reason}`):p,{...m,sampleRate:.5}),"COMPLETE"!==n.type)return void T(`Abort metric ${d}`,n);const f=null!==(v=window.performance)&&void 0!==v&&v.now?Date.now()-window.performance.now():"unknown";var v,g;if("unknown"===f)return T(`Unable to convert to absolute times for ${d} due to missing time origin`),void(0,u.A9)(`missingTimeOrigin.${d}`,m);if(a.is&&(window.PWT_LAB_DATA=o(n,t)),n.spans.length&&(n.spans=n.spans.map((e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e)))),!a.is){const r=e.navigationType&&"initial_app_load"===e.navigationType,o=n.traceId,c=S({traceId:o,actionName:d,result:n,timeOrigin:f,serverDataToJoin:r&&s||null});(0,i.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((g=t,{debugTrace:a.eD,locale:g.locale,stageName:g.stageName}))}}),T(`PinTrace ${d} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${o.toString(16)}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},672115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},505771:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(358864),o=n(672115),i=n(528961);const a=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function s(e,t){const{category:n,timing:s,isDeferred:c,isExternal:u,isVisuallyCompleteRequired:d}=e;return s.responseEnd&&("image"!==n||d)?{name:a(e),id:(0,r.Z)(),parentId:t,startTime:s.startTime,endTime:s.responseEnd,annotationMap:(0,o.Z)(s),binaryAnnotationMap:{category:(0,i.sk)(n),decodedBodySize:(0,i.cC)(s.decodedBodySize||0),initiatorType:(0,i.sk)(s.initiatorType),isDeferred:(0,i.qr)(c),isExternal:(0,i.qr)(u),name:(0,i.sk)(s.name),nextHopProtocol:(0,i.sk)(s.nextHopProtocol),transferSize:(0,i.cC)(s.transferSize||0)}}:null}},31062:(e,t,n)=>{n.d(t,{ku:()=>b,Jx:()=>E,PY:()=>C});var r=n(860273),o=n(156381);const i=()=>(0,o.PJ)().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r}),Object.freeze({}));var a=n(672115),s=n(607150),c=n(22773),u=n(464609);const d=e=>{switch(e){case"pin_closeup":{const e=(0,u.Z)();return(e=>{const t=(0,c.y0)();return e.reduce(((e,{name:n,match:r})=>t.filter((e=>r(e))).slice(0,2).reduce(((e,t,r)=>({...e,...(0,s.jh)(`${n}${r?"_dupe1":""}_`,(0,a.Z)(t))})),e)),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}};var l=n(169213),p=n(358864),m=n(558775),f=n(505771),v=n(383434),g=n(543059),h=n(453821),y=n(638089),S=n(790348);const T=(0,v.X)("LightStopwatch"),w={},E=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:o,pwtStaticContext:a})=>{const c=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=(0,l.Z)({entryTypes:["resource"]},(t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))}))}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let u=!0,v={};(0,S.A9)(`TIMING.${o}`,{tags:{isAuth:a.isAuthenticated}});const E={type:"stopwatch",name:o,navigationType:"initial_app_load"},_={abort:e=>{u?(u=!1,(0,m.Z)({metricId:E,pwtStaticContext:a,result:{type:"ABORT",reason:e}})):(0,S.H)("duplicate_abort_action",{action:o})},error:(e,t)=>{const n={...t,action:o};u?(e&&(0,S.H)(e,n),c&&c.disconnect(),u=!1):(0,S.H)("duplicate_error_action",n)},stop:l=>{if(!u)return void(0,S.H)("duplicate_stop_action",{action:o});u=!1,c.disconnect();const T=(0,p.Z)(),w=(0,r.Z)(),_=c.get(),C={type:"COMPLETE",traceId:(0,p.Z)(),startTime:0,endTime:l,spans:[{name:"network_resources",id:T,startTime:0,endTime:l,annotationMap:{},binaryAnnotationMap:{},parentId:null},..._.map((e=>(0,f.Z)((0,h.p)(e,[]),T))).filter(Boolean)],annotationMap:{...(0,s.jh)("resource_",n?d(n):{}),...(0,s.jh)("element_",i()),...(0,s.jh)("mark_",t&&t.length?(0,s.Hd)((0,g.gQ)(),t):{}),...(0,s.jh)("browser_",w?(0,s.D3)(w):{})},binaryAnnotationMap:(0,y.ng)({annotateExperiments:e,metricId:E,pwtStaticContext:a,performanceResourceTimings:_,binaryAnnotations:v})};(0,m.Z)({metricId:E,pwtStaticContext:a,result:C,isAuth:a.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{T(`adding binary annotation {${e}: ${String(t)}}`),v={...v,[e]:{value:t,type:n}}}};return w[o]=_,_},_=e=>w[e],C=e=>!!_(e),b=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{const o=_(e);o&&o.addBinaryAnnotation(t,n,r)}},156381:(e,t,n)=>{n.d(t,{Af:()=>f,Kj:()=>p,PJ:()=>c,UQ:()=>v,Ux:()=>u,on:()=>a,v2:()=>d});var r=n(581341),o=n(169213);const i={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},a=()=>{i.longTaskDurations=[]},s=(0,r.Z)((()=>i.elementTimings)),c=()=>s.get(),u=e=>{e&&s.save(),i.elementTimings=[]},d=()=>i;let l=0;const p=()=>l;let m;const f=()=>m,v=()=>{(0,o.Z)({type:"element",buffered:!0},(e=>{i.elementTimings=i.elementTimings.concat(e.getEntries().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[])),[]))})),(0,o.Z)({entryTypes:["longtask"]},(e=>{e.getEntries().map((e=>i.longTaskDurations.push(e.duration)))}),(()=>a())),(0,o.Z)({type:"first-input",buffered:!0},((e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(i.firstInputDelay={startTime:n.startTime,endTime:n.processingStart},m=i.firstInputDelay.startTime),t.disconnect()}),(()=>{i.firstInputDelay=null})),(0,o.Z)({type:"largest-contentful-paint",buffered:!0},(e=>{const t=e.getEntries(),n=t.length,r=t[n-1];r&&(l=n,i.largestContentfulPaint=r.renderTime||r.loadTime||null)})),(0,o.Z)({type:"layout-shift",buffered:!0},(e=>{e.getEntries().forEach((e=>{e.hadRecentInput||(i.cumulativeLayoutShiftScore+=e.value)}))}))}},464609:(e,t,n)=>{n.d(t,{Z:()=>o,f:()=>r});const r="closeupImage",o=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},358864:(e,t,n)=>{function r(){let e="";for(let t=0;t<15;t+=1){e+="0123456789"[Math.floor(10*Math.random())]}return Number(e)}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/4646-8f65a44d23d91312.mjs.map