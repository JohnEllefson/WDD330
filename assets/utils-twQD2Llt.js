(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(o){return JSON.parse(localStorage.getItem(o))}function a(o,r){localStorage.setItem(o,JSON.stringify(r))}function u(o){const r=window.location.search;return new URLSearchParams(r).get(o)}function l(o,r,s,n="afterbegin",e=!1){e&&(r.innerHTML="");const t=s.map(o).join("");r.insertAdjacentHTML(n,t)}export{u as a,c as g,l as r,a as s};
