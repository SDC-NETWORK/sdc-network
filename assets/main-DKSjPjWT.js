(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a="/sdc-network/SDC%20Logo.png",l=document.querySelector("title");l.innerText="SDC - Database";const d=document.querySelector("header");d.innerHTML=`  <div class="contact-details">
        <a href="tel:+8801728171519"><i class="fa-solid fa-phone"></i></a>
        <a href="mailto:sdc.contact24@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="http://www.oursdc.com"><i class="fa-solid fa-globe"></i></a>
    </div>
    <div class="logo">
        <img src="${a}" onclick="location.href = 'https://sdc-network.github.io/sdc-network/'" alt="Not responding">
        <p>সাপ্লাই এন্ড ডিস্ট্রিবিউশন কর্পোরেশন </p>
    </div>
    <div class="social-icon">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://wa.me/01728171519"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://t.me/Rofikul5858"><i class="fa-brands fa-telegram"></i></a>
    </div>`;const f=document.querySelector(".person-page-title");f.innerHTML=`
               <h2 class="person-title">প্রতিনিধি সমূহঃ-</h2>
`;document.querySelector(".person-title").style.textAlign="center";const u=document.querySelectorAll(".modal"),p=document.querySelectorAll(".fa-x"),i=document.querySelector("#modal");u.forEach(function(o){o.addEventListener("click",function(){i.classList.add("modal-open")})});p.forEach(function(o){o.addEventListener("click",function(){i.classList.remove("modal-open")})});
