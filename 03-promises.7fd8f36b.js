var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");function r(e,n){const t=Math.random()>.3,o={position:e,delay:n};return new Promise(((e,i)=>{setTimeout((()=>{t&&e(o),i(o)}),n)}))}function l({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function u({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:t,amount:o}=e.currentTarget;let i=+n.value;const a=+t.value,s=+o.value;for(let e=1;e<=s;e+=1)r(e,i).then(l).catch(u),i+=a}));
//# sourceMappingURL=03-promises.7fd8f36b.js.map