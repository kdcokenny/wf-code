var t;function t(e,n){if(!(this instanceof t))return new t(e,n);this.INITIALIZING=-1,this.CONNECTING=0,this.OPEN=1,this.CLOSED=2,this.url=e,n=n||{},this.headers=n.headers||{},this.payload=void 0!==n.payload?n.payload:"",this.method=n.method||this.payload&&"POST"||"GET",this.withCredentials=!!n.withCredentials,this.FIELD_SEPARATOR=":",this.listeners={},this.xhr=null,this.readyState=this.INITIALIZING,this.progress=0,this.chunk="",this.addEventListener=function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),-1===this.listeners[t].indexOf(e)&&this.listeners[t].push(e)},this.removeEventListener=function(t,e){if(void 0!==this.listeners[t]){var n=[];this.listeners[t].forEach((function(t){t!==e&&n.push(t)})),0===n.length?delete this.listeners[t]:this.listeners[t]=n}},this.dispatchEvent=function(t){if(!t)return!0;t.source=this;var e="on"+t.type;return(!this.hasOwnProperty(e)||(this[e].call(this,t),!t.defaultPrevented))&&(!this.listeners[t.type]||this.listeners[t.type].every((function(e){return e(t),!t.defaultPrevented})))},this._setReadyState=function(t){var e=new CustomEvent("readystatechange");e.readyState=t,this.readyState=t,this.dispatchEvent(e)},this._onStreamFailure=function(t){var e=new CustomEvent("error");e.data=t.currentTarget.response,this.dispatchEvent(e),this.close()},this._onStreamAbort=function(t){this.dispatchEvent(new CustomEvent("abort")),this.close()},this._onStreamProgress=function(t){if(this.xhr)if(200===this.xhr.status){this.readyState==this.CONNECTING&&(this.dispatchEvent(new CustomEvent("open")),this._setReadyState(this.OPEN));var e=this.xhr.responseText.substring(this.progress);this.progress+=e.length,e.split(/(\r\n|\r|\n){2}/g).forEach(function(t){0===t.trim().length?(this.dispatchEvent(this._parseEventChunk(this.chunk.trim())),this.chunk=""):this.chunk+=t}.bind(this))}else this._onStreamFailure(t)},this._onStreamLoaded=function(t){this._onStreamProgress(t),this.dispatchEvent(this._parseEventChunk(this.chunk)),this.chunk=""},this._parseEventChunk=function(t){if(!t||0===t.length)return null;var e={id:null,retry:null,data:"",event:"message"};t.split(/\n|\r\n|\r/).forEach(function(t){var n=(t=t.trimRight()).indexOf(this.FIELD_SEPARATOR);if(!(n<=0)){var s=t.substring(0,n);if(s in e){var i=t.substring(n+1).trimLeft();"data"===s?e[s]+=i:e[s]=i}}}.bind(this));var n=new CustomEvent(e.event);return n.data=e.data,n.id=e.id,n},this._checkStreamClosed=function(){this.xhr&&this.xhr.readyState===XMLHttpRequest.DONE&&this._setReadyState(this.CLOSED)},this.stream=function(){for(var t in this._setReadyState(this.CONNECTING),this.xhr=new XMLHttpRequest,this.xhr.addEventListener("progress",this._onStreamProgress.bind(this)),this.xhr.addEventListener("load",this._onStreamLoaded.bind(this)),this.xhr.addEventListener("readystatechange",this._checkStreamClosed.bind(this)),this.xhr.addEventListener("error",this._onStreamFailure.bind(this)),this.xhr.addEventListener("abort",this._onStreamAbort.bind(this)),this.xhr.open(this.method,this.url),this.headers)this.xhr.setRequestHeader(t,this.headers[t]);this.xhr.withCredentials=this.withCredentials,this.xhr.send(this.payload)},this.close=function(){this.readyState!==this.CLOSED&&(this.xhr.abort(),this.xhr=null,this._setReadyState(this.CLOSED))}}async function e(){try{await async function(){return new Promise((t=>{const e=async()=>{await Wized.data.get("r.3.$.isRequesting")?setTimeout(e,10):t()};e()}))}();!function(t){const e=document.getElementById("account-button"),n=document.getElementById("generatebutton_signin"),s=document.getElementById("generatebutton"),i=document.getElementById("template_functional"),a=document.getElementById("template_signin"),o=document.getElementById("dashboard-sign-in");200===t.statusCode?(e.style.display="flex",n.style.display="none",s.style.display="block",i.style.display="flex",a.style.display="none",o.style.display="none"):(e.style.display="none",n.style.display="block",s.style.display="none",i.style.display="none",a.style.display="flex",o.style.display="flex")}(await Wized.data.get("r.3.$"))}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",(()=>{const e={generateButton:document.getElementById("generatebutton"),promptInput:document.getElementById("prompt_input"),streamedOutput:document.getElementById("streamedOutput"),loadingAnimation:document.getElementById("enter-loading-lottie"),outputButtons:document.getElementById("output_buttons")},n={isSseRequested:!1,outputText:"",lastRequestTime:0};function s(t){const s=t.data;if("[DONE]"===s)return async function(){await Wized.data.setVariable("textoutput",n.outputText.trim())}(),n.isSseRequested=!1,a(!0),void o(!1);const i=JSON.parse(s),r=(d=i.choices[0].delta,u="",void 0!==(c=d["content"])?c:u);var d,u,c;n.outputText+=r,function(t){const n=t.replace(/\n/g,"<br>"),s=""===e.streamedOutput.innerHTML?t.replace(/^\n/,""):n;e.streamedOutput.innerHTML+=s}(r)}async function i(t){await Wized.data.setVariable("view",t)}function a(t){e.generateButton.style.display=t?"block":"none"}function o(t){e.loadingAnimation.style.display=t?"block":"none",e.outputButtons.style.display=t?"none":"flex"}async function r(){await async function(){await Wized.data.setVariable("textoutput",""),n.outputText=""}(),e.streamedOutput.innerHTML=""}async function d(){return{active:await Wized.data.get("v.activeplan"),template:await Wized.data.get("v.selectedtemplate")}}function u(){return Date.now()-n.lastRequestTime}function c(t){const n=`Please wait ${t} seconds before the next request, or upgrade now to remove all restrictions.`;e.streamedOutput.innerHTML=n}e.promptInput.addEventListener("keydown",(function(t){"Enter"!==t.key||t.shiftKey||n.isSseRequested||(t.preventDefault(),e.generateButton.click())})),e.generateButton.addEventListener("click",(async function(){const{active:l}=await d();if(n.isSseRequested||!function(t){const e=3e4,s=Date.now();return t||s-n.lastRequestTime>=e}(l)){const t=30-Math.floor(u()/1e3);return void(t>0&&(!function(t){c(t);const e=setInterval((async()=>{--t<=0?(clearInterval(e),await i(1),r()):c(t)}),1e3)}(t),r(),await i(2)))}n.isSseRequested=!0,await r(),await async function(){await Wized.request.execute("Increment Req")}(),await i(2),a(!1),o(!0);if(200===await async function(){return await Wized.request.execute("Load user"),await Wized.data.get("r.3.$.statusCode")}()){const{active:i,template:a}=await d();if(i||u()){const i=function(t){const n=e.promptInput.value,s=document.getElementById("context_input"),i=document.getElementById("selector_input_tone"),a=document.getElementById("selector_input_style");let o=0!==t?t.completion.prompt:"[INPUT]";o=o.replace(/\[INPUT\]/g,n),o=function(t,e){""!==e&&(t=`Using this context: ${e}.\n\n${t}`);return t}(o,s.value),o=function(t,e,n){(e||n)&&(t+="\n\n",e&&(t+=`Write in this tone: ${e}.`),n&&(t+=`The output should use this writing style: ${n}.`));return t}(o,i.value,a.value);const r={model:"gpt-4",messages:[{role:"user",content:o}],stream:!0};0!==t&&Object.assign(r,{temperature:t.completion.temperature,top_p:t.completion.top_p,n:t.completion.n,presence_penalty:t.completion.presence_penalty,frequency_penalty:t.completion.frequency_penalty});return r}(a),o=function(e){return new t("https://scholarly-main-bd50e2e.zuplo.app/v1/post-stream",{headers:{"content-type":"application/json"},payload:JSON.stringify(e),method:"POST"})}(i);o.addEventListener("message",s),o.stream(),n.lastRequestTime=Date.now()}else handleNoCharactersAvailable()}else console.log("Error: status code is not 200")}))})),document.addEventListener("DOMContentLoaded",(()=>{"undefined"!=typeof Wized&&void 0!==Wized.data&&"undefined"!=typeof document?e():console.error("Wized or document not available.")})),window.onload=async()=>{let t=0;const[e,n,s,i]=["prev_button","next_button","template_search","select_subject"].map((t=>document.getElementById(t)));let a;await Wized.request.execute("Get templates");const o=await Wized.data.get("r.59.d");let r=o||[];const d=async(e="")=>{r=o?.filter((t=>{const n=t.group||[],s=i.value;return(!s||n.includes(s))&&t.show&&t.header?.toLowerCase().startsWith(e.toLowerCase())}))||[],a=r.length,document.getElementById("total_templates_text").textContent=a,document.getElementById("template_min_text").textContent=t+1,document.getElementById("template_max_text").textContent=Math.min(t+12,a);const n=r.slice(t,t+12);await Wized.data.setVariable("template",n)},u=async e=>{t+=e,await d(s.value)};n.addEventListener("click",(async()=>{t+12<a&&await u(12)})),e.addEventListener("click",(async()=>{t>0&&await u(-12)})),s.addEventListener("input",(async()=>{t=0,await d(s.value)})),i.addEventListener("change",(async()=>{t=0,await d(s.value)})),await d()},document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("new_button"),e=document.getElementById("prompt_input"),n=document.getElementById("copy_button");document.getElementById("streamedOutput");t.addEventListener("click",(function(){e.value=""})),n.addEventListener("click",(async function(){const t=document.createElement("textarea");t.value=await Wized.data.get("v.textoutput"),document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),alert("Text copied to clipboard!")}))}));
//# sourceMappingURL=index.5f34baf8.js.map
