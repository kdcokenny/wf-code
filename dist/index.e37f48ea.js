// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var _createChatCompletion = require("./create_chat_completion");
var _userData = require("./user_data");
var _sortTemplates = require("./sort_templates");
var _copyClearInputJs = require("./copyClearInput.js");

},{"./create_chat_completion":"8rVMB","./user_data":"4g2Hl","./sort_templates":"3WVzn","./copyClearInput.js":"bndF2"}],"8rVMB":[function(require,module,exports) {
var _sse = require("./functions/sse");
var _get = require("./functions/get");
document.addEventListener("DOMContentLoaded", ()=>{
    const elements = {
        generateButton: document.getElementById("generatebutton"),
        promptInput: document.getElementById("prompt_input"),
        streamedOutput: document.getElementById("streamedOutput"),
        loadingAnimation: document.getElementById("enter-loading-lottie"),
        outputButtons: document.getElementById("output_buttons")
    };
    const state = {
        isSseRequested: false,
        outputText: "",
        lastRequestTime: 0
    };
    elements.promptInput.addEventListener("keydown", handlePromptInputKeyDown);
    elements.generateButton.addEventListener("click", handleGenerateButtonClick);
    async function handleGenerateButtonClick() {
        const { active  } = await fetchData();
        if (state.isSseRequested || !canRequest(active)) {
            const remainingTime = 30 - Math.floor(hasReachedCooldown() / 1000);
            if (remainingTime > 0) {
                showRemainingTimeMessage(remainingTime);
                clearStreamedOutputText();
                await toggleView(2);
            }
            return;
        }
        state.isSseRequested = true;
        await clearStreamedOutputText();
        await incrementRequestCount();
        await toggleView(2);
        toggleGenerateButton(false);
        toggleLoadingAnimation(true);
        const statusCode = await triggerLoadUserRequest();
        if (statusCode === 200) {
            const { active , template  } = await fetchData();
            if (active || hasReachedCooldown()) {
                const body = buildRequestBody(template);
                const sse = createSseObject(body);
                sse.addEventListener("message", handleSseMessageEvent);
                sse.stream();
                state.lastRequestTime = Date.now();
            } else handleNoCharactersAvailable();
        } else console.log("Error: status code is not 200");
    }
    async function triggerLoadUserRequest() {
        await Wized.request.execute("Load user");
        return await Wized.data.get("r.3.$.statusCode");
    }
    function handlePromptInputKeyDown(event) {
        if (event.key === "Enter" && !event.shiftKey && !state.isSseRequested) {
            event.preventDefault();
            elements.generateButton.click();
        }
    }
    function handleSseMessageEvent(event) {
        const msg = event.data;
        if (msg === "[DONE]") {
            setOutputVar();
            handleSseRequestDone();
            return;
        }
        const data = JSON.parse(msg);
        const text = (0, _get.get)(data.choices[0].delta, "content", "");
        state.outputText += text;
        appendStreamedOutputText(text);
    }
    function createSseObject(body) {
        return new (0, _sse.SSE)("https://scholarly-main-bd50e2e.zuplo.app/v1/post-stream", {
            headers: {
                "content-type": "application/json"
            },
            payload: JSON.stringify(body),
            method: "POST"
        });
    }
    async function toggleView(view) {
        await Wized.data.setVariable("view", view);
    }
    function toggleGenerateButton(visible) {
        elements.generateButton.style.display = visible ? "block" : "none";
    }
    function toggleLoadingAnimation(visible) {
        elements.loadingAnimation.style.display = visible ? "block" : "none";
        elements.outputButtons.style.display = visible ? "none" : "flex";
    }
    async function setOutputVar() {
        await Wized.data.setVariable("textoutput", state.outputText.trim());
    }
    function handleSseRequestDone() {
        state.isSseRequested = false;
        toggleGenerateButton(true);
        toggleLoadingAnimation(false);
    }
    async function clearStreamedOutputText() {
        await resetCopyVar();
        elements.streamedOutput.innerHTML = "";
    }
    function appendStreamedOutputText(text) {
        const textWithLineBreaks = text.replace(/\n/g, "<br>");
        const isFirstText = elements.streamedOutput.innerHTML === "";
        const textToAdd = isFirstText ? text.replace(/^\n/, "") : textWithLineBreaks;
        elements.streamedOutput.innerHTML += textToAdd;
    }
    async function fetchData() {
        const active = await Wized.data.get("v.activeplan");
        const template = await Wized.data.get("v.selectedtemplate");
        return {
            active,
            template
        };
    }
    function buildRequestBody(template) {
        const inputVal = elements.promptInput.value;
        const contextInput = document.getElementById("context_input");
        const toneInput = document.getElementById("selector_input_tone");
        const styleInput = document.getElementById("selector_input_style");
        let content = template !== 0 ? template.completion.prompt : "[INPUT]";
        content = content.replace(/\[INPUT\]/g, inputVal);
        content = addContext(content, contextInput.value);
        content = addToneAndStyle(content, toneInput.value, styleInput.value);
        const body = {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content
                }
            ],
            stream: true
        };
        if (template !== 0) Object.assign(body, {
            temperature: template.completion.temperature,
            top_p: template.completion.top_p,
            n: template.completion.n,
            presence_penalty: template.completion.presence_penalty,
            frequency_penalty: template.completion.frequency_penalty
        });
        return body;
    }
    function addContext(content, context) {
        if (context !== "") content = `Using this context: ${context}.\n\n${content}`;
        return content;
    }
    function addToneAndStyle(content, tone, style) {
        if (tone || style) {
            content += "\n\n";
            if (tone) content += `Write in this tone: ${tone}.`;
            if (style) content += `The output should use this writing style: ${style}.`;
        }
        return content;
    }
    function canRequest(active) {
        const cooldown = 30000;
        const currentTime = Date.now();
        return active || currentTime - state.lastRequestTime >= cooldown;
    }
    function hasReachedCooldown() {
        const cooldown = 30000;
        const currentTime = Date.now();
        return currentTime - state.lastRequestTime;
    }
    function showRemainingTimeMessage(remainingTime) {
        updateRemainingTimeMessage(remainingTime);
        const countdownInterval = setInterval(async ()=>{
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                await toggleView(1);
                clearStreamedOutputText();
            } else updateRemainingTimeMessage(remainingTime);
        }, 1000);
    }
    function updateRemainingTimeMessage(remainingTime) {
        const message = `Please wait ${remainingTime} seconds before the next request, or upgrade now to remove all restrictions.`;
        elements.streamedOutput.innerHTML = message;
    }
    async function incrementRequestCount() {
        await Wized.request.execute("Increment Req");
    }
    async function resetCopyVar() {
        await Wized.data.setVariable("textoutput", "");
        state.outputText = ""; // Reset the state.outputText variable
    }
});

},{"./functions/sse":"8nOji","./functions/get":"cgar5"}],"8nOji":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SSE", ()=>SSE);
function SSE(url, options) {
    if (!(this instanceof SSE)) return new SSE(url, options);
    this.INITIALIZING = -1;
    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSED = 2;
    this.url = url;
    options = options || {};
    this.headers = options.headers || {};
    this.payload = options.payload !== undefined ? options.payload : "";
    this.method = options.method || this.payload && "POST" || "GET";
    this.withCredentials = !!options.withCredentials;
    this.FIELD_SEPARATOR = ":";
    this.listeners = {};
    this.xhr = null;
    this.readyState = this.INITIALIZING;
    this.progress = 0;
    this.chunk = "";
    this.addEventListener = function(type, listener) {
        if (this.listeners[type] === undefined) this.listeners[type] = [];
        if (this.listeners[type].indexOf(listener) === -1) this.listeners[type].push(listener);
    };
    this.removeEventListener = function(type, listener) {
        if (this.listeners[type] === undefined) return;
        var filtered = [];
        this.listeners[type].forEach(function(element) {
            if (element !== listener) filtered.push(element);
        });
        if (filtered.length === 0) delete this.listeners[type];
        else this.listeners[type] = filtered;
    };
    this.dispatchEvent = function(e) {
        if (!e) return true;
        e.source = this;
        var onHandler = "on" + e.type;
        if (this.hasOwnProperty(onHandler)) {
            this[onHandler].call(this, e);
            if (e.defaultPrevented) return false;
        }
        if (this.listeners[e.type]) return this.listeners[e.type].every(function(callback) {
            callback(e);
            return !e.defaultPrevented;
        });
        return true;
    };
    this._setReadyState = function(state) {
        var event = new CustomEvent("readystatechange");
        event.readyState = state;
        this.readyState = state;
        this.dispatchEvent(event);
    };
    this._onStreamFailure = function(e) {
        var event = new CustomEvent("error");
        event.data = e.currentTarget.response;
        this.dispatchEvent(event);
        this.close();
    };
    this._onStreamAbort = function(e) {
        this.dispatchEvent(new CustomEvent("abort"));
        this.close();
    };
    this._onStreamProgress = function(e) {
        if (!this.xhr) return;
        if (this.xhr.status !== 200) {
            this._onStreamFailure(e);
            return;
        }
        if (this.readyState == this.CONNECTING) {
            this.dispatchEvent(new CustomEvent("open"));
            this._setReadyState(this.OPEN);
        }
        var data = this.xhr.responseText.substring(this.progress);
        this.progress += data.length;
        data.split(/(\r\n|\r|\n){2}/g).forEach((function(part) {
            if (part.trim().length === 0) {
                this.dispatchEvent(this._parseEventChunk(this.chunk.trim()));
                this.chunk = "";
            } else this.chunk += part;
        }).bind(this));
    };
    this._onStreamLoaded = function(e) {
        this._onStreamProgress(e);
        // Parse the last chunk.
        this.dispatchEvent(this._parseEventChunk(this.chunk));
        this.chunk = "";
    };
    /**
     * Parse a received SSE event chunk into a constructed event object.
     */ this._parseEventChunk = function(chunk) {
        if (!chunk || chunk.length === 0) return null;
        var e = {
            "id": null,
            "retry": null,
            "data": "",
            "event": "message"
        };
        chunk.split(/\n|\r\n|\r/).forEach((function(line) {
            line = line.trimRight();
            var index = line.indexOf(this.FIELD_SEPARATOR);
            if (index <= 0) // Line was either empty, or started with a separator and is a comment.
            // Either way, ignore.
            return;
            var field = line.substring(0, index);
            if (!(field in e)) return;
            var value = line.substring(index + 1).trimLeft();
            if (field === "data") e[field] += value;
            else e[field] = value;
        }).bind(this));
        var event = new CustomEvent(e.event);
        event.data = e.data;
        event.id = e.id;
        return event;
    };
    this._checkStreamClosed = function() {
        if (!this.xhr) return;
        if (this.xhr.readyState === XMLHttpRequest.DONE) this._setReadyState(this.CLOSED);
    };
    this.stream = function() {
        this._setReadyState(this.CONNECTING);
        this.xhr = new XMLHttpRequest();
        this.xhr.addEventListener("progress", this._onStreamProgress.bind(this));
        this.xhr.addEventListener("load", this._onStreamLoaded.bind(this));
        this.xhr.addEventListener("readystatechange", this._checkStreamClosed.bind(this));
        this.xhr.addEventListener("error", this._onStreamFailure.bind(this));
        this.xhr.addEventListener("abort", this._onStreamAbort.bind(this));
        this.xhr.open(this.method, this.url);
        for(var header in this.headers)this.xhr.setRequestHeader(header, this.headers[header]);
        this.xhr.withCredentials = this.withCredentials;
        this.xhr.send(this.payload);
    };
    this.close = function() {
        if (this.readyState === this.CLOSED) return;
        this.xhr.abort();
        this.xhr = null;
        this._setReadyState(this.CLOSED);
    };
}
exports.SSE = SSE;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cgar5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
function get(object, key, default_value) {
    var result = object[key];
    return typeof result !== "undefined" ? result : default_value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4g2Hl":[function(require,module,exports) {
// Define a function to wait until isRequesting is false
async function waitForIsRequesting() {
    return new Promise((resolve)=>{
        const checkIsRequesting = async ()=>{
            if (!await Wized.data.get("r.3.$.isRequesting")) resolve();
            else setTimeout(checkIsRequesting, 10);
        };
        checkIsRequesting();
    });
}
// Define a function to update the display based on user data
function updateDisplay(loadUser) {
    const accountButton = document.getElementById("account-button");
    const signInButton = document.getElementById("generatebutton_signin");
    const generateButton = document.getElementById("generatebutton");
    const templateFunctional = document.getElementById("template_functional");
    const templateSignIn = document.getElementById("template_signin");
    const dashboardSignIn = document.getElementById("dashboard-sign-in");
    if (loadUser.statusCode === 200) {
        accountButton.style.display = "flex";
        signInButton.style.display = "none";
        generateButton.style.display = "block";
        templateFunctional.style.display = "flex";
        templateSignIn.style.display = "none";
        dashboardSignIn.style.display = "none";
    } else {
        accountButton.style.display = "none";
        signInButton.style.display = "block";
        generateButton.style.display = "none";
        templateFunctional.style.display = "none";
        templateSignIn.style.display = "flex";
        dashboardSignIn.style.display = "flex";
    }
}
// Define a function to load the user data and show/hide elements
async function loadData() {
    try {
        await waitForIsRequesting();
        const loadUser = await Wized.data.get("r.3.$");
        updateDisplay(loadUser);
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    if (typeof Wized !== "undefined" && typeof Wized.data !== "undefined" && typeof document !== "undefined") loadData();
    else console.error("Wized or document not available.");
});

},{}],"3WVzn":[function(require,module,exports) {
window.onload = async ()=>{
    let startIndex = 0;
    const [prev, next, searchInput, selectSubject] = [
        "prev_button",
        "next_button",
        "template_search",
        "select_subject"
    ].map((id)=>document.getElementById(id));
    let totalLength;
    await Wized.request.execute("Get templates");
    const data = await Wized.data.get("r.59.d");
    let filteredData = data || [];
    const filterTemplates = async (searchQuery = "")=>{
        filteredData = data?.filter((template)=>{
            const group = template.group || [];
            const selectedSubject = selectSubject.value;
            const shouldShow = !selectedSubject || group.includes(selectedSubject);
            return shouldShow && template.show && template.header?.toLowerCase().startsWith(searchQuery.toLowerCase());
        }) || [];
        totalLength = filteredData.length;
        document.getElementById("total_templates_text").textContent = totalLength;
        document.getElementById("template_min_text").textContent = startIndex + 1;
        document.getElementById("template_max_text").textContent = Math.min(startIndex + 12, totalLength);
        const filteredTemplates = filteredData.slice(startIndex, startIndex + 12);
        await Wized.data.setVariable("template", filteredTemplates);
    };
    const updateTemplates = async (increment)=>{
        startIndex += increment;
        await filterTemplates(searchInput.value);
    };
    next.addEventListener("click", async ()=>{
        if (startIndex + 12 < totalLength) await updateTemplates(12);
    });
    prev.addEventListener("click", async ()=>{
        if (startIndex > 0) await updateTemplates(-12);
    });
    searchInput.addEventListener("input", async ()=>{
        startIndex = 0;
        await filterTemplates(searchInput.value);
    });
    selectSubject.addEventListener("change", async ()=>{
        startIndex = 0;
        await filterTemplates(searchInput.value);
    });
    await filterTemplates();
};

},{}],"bndF2":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function() {
    const newButton = document.getElementById("new_button");
    const promptInput = document.getElementById("prompt_input");
    const copyButton = document.getElementById("copy_button");
    const streamedOutput = document.getElementById("streamedOutput");
    newButton.addEventListener("click", function() {
        promptInput.value = "";
    });
    copyButton.addEventListener("click", async function() {
        const textArea = document.createElement("textarea");
        textArea.value = await Wized.data.get("v.textoutput");
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        alert("Text copied to clipboard!");
    });
});

},{}]},["d8XZh","aenu9"], "aenu9", "parcelRequire4f15")

//# sourceMappingURL=index.e37f48ea.js.map
