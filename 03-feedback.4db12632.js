var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function m(e,t,n){var o,r,i,a,u,f,c=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),m?g(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-c>=i}function j(){var e=d();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return b?s(n,i-(e-c)):n}(e))}function w(e){return u=void 0,y&&o?g(e):(o=r=void 0,a)}function O(){var e=d(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(b)return u=setTimeout(j,t),g(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(d())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=document.querySelector("input"),g=(document.querySelector("p"),document.querySelector("textarea"));const S=_.throttle((function(){const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",S),window.addEventListener("load",(function(){if(this.localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(y.value=e.email,g.value=e.message):(y.value="",g.value="")}})),b.addEventListener("submit",(function(){event.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.4db12632.js.map
