!function(){"use strict";const e={};function t(t={}){if(t.type||(t.type="json"),t.url)return e[t.url]?e[t.url]:function(t,s){const n=new Promise(((e,n)=>{"text"===s?fetch(t).then((e=>e.text())).then((t=>{e(t)})).catch((e=>{n(e)})):function(e,t,s){let n=document.getElementsByTagName("head")[0],o=!1,i=document.createElement("script");i.src=e,i.onload=i.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState?s():(o=!0,t())},n.appendChild(i)}(t,(function(){e()}),(function(){n()}))}));return e[t]=n,n}(t.url,t.type);if(t.json)return e[t.json]?Promise.resolve(e[t.json]):window.fetch(t.json).then((e=>e.json())).then((s=>(e[t.json]=s,s)));if(t.name){const s="".concat(t.name,t.version);return e[s]?e[s]:function(t){const s="".concat(t.name,t.version),n=new Promise(((e,s)=>{try{window.Shopify.loadFeatures([{name:t.name,version:t.version,onLoad:t=>{!function(e,t,s){s?t(s):e()}(e,s,t)}}])}catch(e){s(e)}}));return e[s]=n,n}(t)}return Promise.reject()}function s(e,t){t=t||{};var s=e.tabIndex;e.tabIndex=-1,e.dataset.tabIndex=s,e.focus(),void 0!==t.className&&e.classList.add(t.className),e.addEventListener("blur",(function n(o){o.target.removeEventListener(o.type,n),e.tabIndex=s,delete e.dataset.tabIndex,void 0!==t.className&&e.classList.remove(t.className)}))}function n(e){return Array.prototype.slice.call(e.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled")).filter((function(e){return!(!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||(t=e,s=window.getComputedStyle(t),"none"===s.display||"hidden"===s.visibility));var t,s}))}window.isYoutubeAPILoaded=!1,window.isVimeoAPILoaded=!1;var o={};function i(){document.removeEventListener("focusin",o.focusin),document.removeEventListener("focusout",o.focusout),document.removeEventListener("keydown",o.keydown)}var a=Object.freeze({__proto__:null,forceFocus:s,focusHash:function(e){e=e||{};var t=window.location.hash,n=document.getElementById(t.slice(1));if(n&&e.ignore&&n.matches(e.ignore))return!1;t&&n&&s(n,e)},bindInPageLinks:function(e){return e=e||{},Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).filter((function(t){if("#"===t.hash||""===t.hash)return!1;if(e.ignore&&t.matches(e.ignore))return!1;if(n=t.hash.substr(1),null===document.getElementById(n))return!1;var n,o=document.querySelector(t.hash);return!!o&&(t.addEventListener("click",(function(){s(o,e)})),!0)}))},focusable:n,trapFocus:function(e,t){t=t||{};var a=n(e),r=t.elementToFocus||e,l=a[0],c=a[a.length-1];i(),o.focusin=function(t){e!==t.target&&!e.contains(t.target)&&l&&l===t.target&&l.focus(),t.target!==e&&t.target!==c&&t.target!==l||document.addEventListener("keydown",o.keydown)},o.focusout=function(){document.removeEventListener("keydown",o.keydown)},o.keydown=function(t){"Tab"===t.code&&(t.target!==c||t.shiftKey||(t.preventDefault(),l.focus()),t.target!==e&&t.target!==l||!t.shiftKey||(t.preventDefault(),c.focus()))},document.addEventListener("focusout",o.focusout),document.addEventListener("focusin",o.focusin),s(r,t)},removeTrapFocus:i,autoFocusLastElement:function(){window.accessibility.lastElement&&document.body.classList.contains("is-focused")&&setTimeout((()=>{window.accessibility.lastElement?.focus()}))},accessibleLinks:function(e,t){if("string"!=typeof e)throw new TypeError(e+" is not a String.");if(0!==(e=document.querySelectorAll(e)).length){(t=t||{}).messages=t.messages||{};var s={newWindow:t.messages.newWindow||"Opens in a new window.",external:t.messages.external||"Opens external website.",newWindowExternal:t.messages.newWindowExternal||"Opens external website in a new window."},n=t.prefix||"a11y",o={newWindow:n+"-new-window-message",external:n+"-external-message",newWindowExternal:n+"-new-window-external-message"};e.forEach((function(e){var t=e.getAttribute("target"),s=e.getAttribute("rel"),n=function(e){return e.hostname!==window.location.hostname}(e),i="_blank"===t,a=null===s||-1===s.indexOf("noopener");if(i&&a){var r=null===s?"noopener":s+" noopener";e.setAttribute("rel",r)}n&&i?e.setAttribute("aria-describedby",o.newWindowExternal):n?e.setAttribute("aria-describedby",o.external):i&&e.setAttribute("aria-describedby",o.newWindow)})),function(e){var t=document.createElement("ul"),s=Object.keys(e).reduce((function(t,s){return t+"<li id="+o[s]+">"+e[s]+"</li>"}),"");t.setAttribute("hidden",!0),t.innerHTML=s,document.body.appendChild(t)}(s)}}});const r=".pswp",l=".pswp__custom-close",c="iframe, video",u=".pswp__thumbs",p="is-current",h="pswp--custom-loader",d="pswp--custom-opening",m="pswp__loader",w="is-focused",f="data-pswp-option-classes",b="aria-current",y=`<div class="${m}"><div class="loader pswp__loader-line"><div class="loader-indeterminate"></div></div></div>`;class g{constructor(e,t=""){this.items=e,this.pswpElement=document.querySelectorAll(r)[0],this.popup=null,this.popupThumbs=null,this.popupThumbsContainer=this.pswpElement.querySelector(u),this.closeBtn=this.pswpElement.querySelector(l),this.keyupCloseEvent=e=>this.keyupClose(e),this.a11y=a;this.options=""!==t?t:{history:!1,focus:!1,mainClass:""},this.init()}init(){this.pswpElement.classList.add(d),this.initLoader(),t({url:window.theme.assets.photoswipe}).then((()=>this.loadPopup())).catch((e=>console.error(e)))}initLoader(){if(this.pswpElement.classList.contains(h)&&""!==this.options&&this.options.mainClass){this.pswpElement.setAttribute(f,this.options.mainClass);let e=document.createElement("div");e.innerHTML=y,e=e.firstChild,this.pswpElement.appendChild(e)}else this.pswpElement.setAttribute(f,"")}loadPopup(){const e=window.themePhotoswipe.PhotoSwipe.default,t=window.themePhotoswipe.PhotoSwipeUI.default;this.pswpElement.classList.contains(h)&&this.pswpElement.classList.remove(h),this.pswpElement.classList.remove(d),this.popup=new e(this.pswpElement,t,this.items,this.options),this.popup.init(),this.thumbsActions(),document.body.classList.contains(w)&&setTimeout((()=>{this.a11y.trapFocus(this.pswpElement,{elementToFocus:this.closeBtn})}),200),this.popup.listen("close",(()=>this.onClose())),this.options&&this.options.closeElClasses&&this.options.closeElClasses.length&&this.options.closeElClasses.forEach((e=>{const t=this.pswpElement.querySelector(`.pswp__${e}`);t&&t.addEventListener("keyup",this.keyupCloseEvent)}))}thumbsActions(){this.popupThumbsContainer&&this.popupThumbsContainer.children.length&&(this.popupThumbsContainer.addEventListener("wheel",(e=>this.stopDisabledScroll(e))),this.popupThumbsContainer.addEventListener("mousewheel",(e=>this.stopDisabledScroll(e))),this.popupThumbsContainer.addEventListener("DOMMouseScroll",(e=>this.stopDisabledScroll(e))),this.popupThumbs=this.pswpElement.querySelectorAll(`${u} > *`),this.popupThumbs.forEach(((e,t)=>{e.addEventListener("click",(s=>{s.preventDefault();const n=e.parentElement.querySelector(`.${p}`);n.classList.remove(p),n.setAttribute(b,!1),e.classList.add(p),e.setAttribute(b,!0),this.popup.goTo(t)}))})),this.popup.listen("imageLoadComplete",(()=>this.setCurrentThumb())),this.popup.listen("beforeChange",(()=>this.setCurrentThumb())))}stopDisabledScroll(e){e.stopPropagation()}keyupClose(e){"Enter"===e.code&&this.popup.close()}onClose(){const e=this.pswpElement.querySelector(c);if(e&&e.parentNode.removeChild(e),this.popupThumbsContainer&&this.popupThumbsContainer.firstChild)for(;this.popupThumbsContainer.firstChild;)this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild);this.pswpElement.setAttribute(f,"");const t=this.pswpElement.querySelector(`.${m}`);t&&this.pswpElement.removeChild(t),this.options&&this.options.closeElClasses&&this.options.closeElClasses.length&&this.options.closeElClasses.forEach((e=>{const t=this.pswpElement.querySelector(`.pswp__${e}`);t&&t.removeEventListener("keyup",this.keyupCloseEvent)})),this.a11y.removeTrapFocus(),this.a11y.autoFocusLastElement()}setCurrentThumb(){const e=this.pswpElement.querySelector(`${u} > .${p}`);if(e&&(e.classList.remove(p),e.setAttribute(b,!1)),!this.popupThumbs)return;const t=this.popupThumbs[this.popup.getCurrentIndex()];t.classList.add(p),t.setAttribute(b,!0),this.scrollThumbs(t)}scrollThumbs(e){const t=this.popupThumbsContainer.scrollLeft+this.popupThumbsContainer.offsetWidth,s=e.offsetLeft;if(t<=s+e.offsetWidth||t>s){const t=parseInt(window.getComputedStyle(e).marginLeft);this.popupThumbsContainer.scrollTo({top:0,left:s-t,behavior:"smooth"})}}}const E="[data-zoom-caption]",v="[data-zoom-image]",C="[data-pswp-thumbs-template]",L="[data-section-type]",T=".pswp__thumbs",S="product-images",A="is-dragging",x="variant--soldout",k="variant--unavailable",_="pswp-zoom-gallery",q="pswp-zoom-gallery--single",I="data-image-src",P="data-image-width",z="data-image-height";class D extends HTMLElement{constructor(){super(),this.container=this.closest(L),this.images=this.querySelectorAll(v),this.zoomCaptions=this.container.querySelector(E),this.thumbsContainer=document.querySelector(T)}connectedCallback(){this.images.forEach(((e,t)=>{e.addEventListener("click",(s=>{s.preventDefault(),e.closest(S).classList.contains(A)||(this.createZoom(t),window.accessibility.lastElement=e)})),e.addEventListener("keyup",(s=>{"Enter"===s.code&&(s.preventDefault(),this.createZoom(t),window.accessibility.lastElement=e)}))}))}createZoom(e){const t=this.container.querySelector(C)?.innerHTML;let s=[],n=0;this.images.forEach((o=>{const i=o.getAttribute(I);if(n+=1,s.push({src:i,w:parseInt(o.getAttribute(P)),h:parseInt(o.getAttribute(z)),msrc:i}),this.images.length===n){new g(s,{history:!1,focus:!1,index:e,mainClass:1===n?`${_} ${q}`:`${_}`,showHideOpacity:!0,howAnimationDuration:150,hideAnimationDuration:250,closeOnScroll:!1,closeOnVerticalDrag:!1,captionEl:!0,closeEl:!0,closeElClasses:["caption-close","title"],tapToClose:!1,clickToCloseNonZoomable:!1,maxSpreadZoom:2,loop:!0,spacing:0,allowPanToNext:!0,pinchToClose:!1,addCaptionHTMLFn:(e,t,s)=>{this.zoomCaption(e,t,s)},getThumbBoundsFn:()=>{const t=this.images[e],s=window.scrollY||document.documentElement.scrollTop,n=t.getBoundingClientRect();return{x:n.left,y:n.top+s,w:n.width}}}),this.thumbsContainer&&""!==t&&(this.thumbsContainer.innerHTML=t)}}))}zoomCaption(e,t){let s="";const n=t.children[0];return this.zoomCaptions&&(s=this.zoomCaptions.innerHTML,this.zoomCaptions.closest(`.${x}`)?n.classList.add(x):n.classList.remove(x),this.zoomCaptions.closest(`.${k}`)?n.classList.add(k):n.classList.remove(k)),n.innerHTML=s,!1}}customElements.get("zoom-images")||customElements.define("zoom-images",D)}();
//# sourceMappingURL=zoom.js.map