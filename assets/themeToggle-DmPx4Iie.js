(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function c(a){const t="/YOUNIQUE/",s=t.endsWith("/")?t:t+"/",r=a.startsWith("/")?a.substring(1):a;return s+r}function h(){return`
<header class="header">
  <div class="nav-wrapper container">
    <a href="${c("")}" class="logo">
      <img src="${c("younique.png")}" alt="Younique Logo" class="logo-younique" />
    </a>

    <button class="hamburger" aria-label="Menu" aria-expanded="false">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav class="nav">
      <button 
    id="theme-toggle" 
    class="theme-toggle" 
    aria-label="Cambia tema" 
    data-theme="light"
  >
    <span class="theme-icon light-icon">☀️</span>
    <span class="theme-icon dark-icon">🌙</span>
  </button>

      <div class="nav-top-mobile"></div>
      <div class="nav-links-group">
        <a href="${c("servizi.html")}" class="nav-link">Servizi</a>
        <a href="${c("contatti.html")}" class="nav-link">Contatti</a>
      </div>
    </nav>
  </div>
</header>
  `}function g(){const a=document.querySelector(".hamburger"),t=document.querySelector(".nav");!a||!t||a.addEventListener("click",()=>{const s=a.getAttribute("aria-expanded")==="true";a.setAttribute("aria-expanded",String(!s)),t.classList.toggle("nav-active")})}function m(a){const t=document.createElement("template");t.innerHTML=a.trim();const s=t.content.firstElementChild;if(!s)throw new Error("HTML vuoto o non valido");return s}const d=[{name:"Strategia & Consulenza",url:"/servizi#strategia"},{name:"Comunicazione & Branding",url:"/servizi#comunicazione"},{name:"Marketing & Performance",url:"/servizi#marketing"},{name:"Eventi Promozionali",url:"/servizi#eventi-promo"},{name:"Produzione Eventi",url:"/servizi#produzione"},{name:"Eventi Privati",url:"/servizi#privati"}];function v(){const a=new Date().getFullYear();return`
    <footer class="footer">
      <!-- Gradient Background -->
      <div class="footer-gradient">
        <div class="gradient-shape gradient-1"></div>
        <div class="gradient-shape gradient-2"></div>
        <div class="gradient-shape gradient-3"></div>
      </div>

      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <a href="/" class="footer-logo">Younique</a>
          <p class="footer-tagline">
            Fai cose straordinarie.<br />
            <span class="highlight">Falle sapere a tutti.</span>
          </p>
          <div class="footer-cta">
          <a href="${c("contatti.html")}" class="cta-button btn">
            <span>Iniziamo</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-5-5m5 5l-5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services Links -->
        <div class="footer-section linkservizi">
          <h3 class="footer-title">Servizi</h3>
          <ul class="footer-links">
            ${d.map(t=>`
              <li>
                <a href="${t.url}" class="footer-link">
                  ${t.name}
                </a>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-title">Contatti</h3>
          <div class="flex-col gap-lg">
            <div class="flex gap-sm">
              <span class="material-icons">phone</span>
              <a href="tel:+393288790109" class="footer-link">
                +39 328 8790109
              </a>
            </div>
            <div class="flex gap-sm">
              <span class="material-icons">email</span>
              <a href="mailto:agenzia@be-younique.it" class="footer-link">
                info@be-younique.it
              </a>
            </div>
            <div class="flex gap-sm">
              <span class="material-icons">location_on</span>
              <a
                href="https://maps.app.goo.gl/4YDvvQzELfEhGiyD9"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Via San Francesco D'Assisi, 14 <br />
                34133 Trieste, Italia
              </a>
            </div>
          </div>
        </div>

        <!-- Social & Newsletter -->
        <div class="footer-section">
          <h3 class="footer-title">Seguici</h3>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div class="footer-newsletter">
            <p class="newsletter-text">Resta aggiornato sulle novità</p>
            <div class="newsletter-form">
              <input
                type="email"
                placeholder="La tua email"
                class="newsletter-input"
              />
              <button class="newsletter-button">→</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="flex-col p-sm items-center">
        <div class="flex cento justify-between">
          <div class="footer-legal">
            <div class="footer-legal-links">
              <a href="/privacy">Privacy Policy</a>
              <span class="separator">•</span>
              <a href="/cookie">Cookie Policy</a>
              <span class="separator">•</span>
              <a href="/termini">Termini di Servizio</a>
            </div>
          </div>

          <div class="footer-credits">
            <p>
              Powered By
              <span class="logo-promethea">
                <img id="logo"  src="logo-promethea.png" alt="Promethea">
              </span>
            </p>
          </div>
        </div>
        <p class="text-mini">&copy; ${a} Younique. Tutti i diritti riservati.</p>
      </div>
    </footer>
  `}function p(){return`
<button 
  id="theme-toggle" 
  class="theme-toggle" 
  aria-label="Cambia tema"
  data-theme="light"
>
  <span class="theme-icon light-icon">☀️</span>
  <span class="theme-icon dark-icon">🌙</span>
</button>
  `}function f(){const a="theme-preference";function t(){const i=localStorage.getItem(a);return i==="light"||i==="dark"?i:"light"}function s(i){document.documentElement.setAttribute("data-theme",i),localStorage.setItem(a,i),e&&(e.setAttribute("data-theme",i),e.setAttribute("aria-label",i==="dark"?"Attiva tema chiaro":"Attiva tema scuro")),o(i)}function r(i){const n=document.getElementById("logo");n&&(i==="dark"?n.src="logo-promethea-dark.png":n.src="logo-promethea.png")}const e=document.getElementById("theme-toggle");if(!e)return;function o(i){if(!document.getElementById("logo")){setTimeout(()=>o(i),50);return}r(i)}e.addEventListener("click",()=>{const n=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";s(n)});const l=t();s(l),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{localStorage.getItem(a)||s(i.matches?"dark":"light")})}export{v as F,f as a,p as b,h as c,m as h,g as i};
