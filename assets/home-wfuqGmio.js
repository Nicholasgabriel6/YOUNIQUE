import{h as r,c as y,F as w,i as b,a as z,b as S}from"./themeToggle-DmPx4Iie.js";const C=[{number:"01",title:"Strategia & Consulenza",description:"Analizziamo il brand, definiamo obiettivi chiari e costruiamo una strategia di comunicazione coerente e sostenibile.",gradient:"linear-gradient(135deg, #f7b033 0%, #f7d668 100%)",items:["Analisi e posizionamento","Definizione obiettivi","Consulenza continuativa"]},{number:"02",title:"Comunicazione, Branding & Media",description:"Diamo forma e voce ai brand attraverso contenuti, identità visiva e strumenti di comunicazione.",gradient:"linear-gradient(135deg, #aa97f4 0%, #c4b7ff 100%)",items:["Contenuti grafici","Servizi fotografici","Video e reel"]},{number:"03",title:"Marketing, ADV & Performance",description:"Trasformiamo la visibilità in risultati concreti con advertising mirato.",gradient:"linear-gradient(135deg, #54b2ee 0%, #91d1f1 100%)",items:["Lead generation","Google Ads","Gestione social"]},{number:"04",title:"Eventi promozionali",description:"Progettiamo eventi come vere esperienze di comunicazione dal vivo.",gradient:"linear-gradient(135deg, #f6add5 0%, #f6c9ea 100%)",items:["Eventi lancio","Presentazioni","Eventi aziendali"]},{number:"05",title:"Produzione Eventi & Intrattenimento",description:"Gestiamo tutti gli aspetti operativi, tecnici e artistici dei tuoi eventi.",gradient:"linear-gradient(135deg, #5fe1a3 0%, #9feccc 100%)",items:["Allestimenti","Ingaggio artisti","Noleggio attrezzature"]},{number:"06",title:"Eventi Privati & Celebrazioni",description:"Creiamo eventi privati su misura, curati in ogni dettaglio.",gradient:"linear-gradient(135deg, #ff8876 0%, #ffb08f 100%)",items:["Feste private","Matrimoni","Ricorrenze"]}];function E(){return`
<div class="parallax-slogan">
  <div class="flex-col gap-lg items-center">
    <div class="slogan-text">
      <span class="slogan-line">Fai cose</span>
      <span class="slogan-line">straordinarie</span>
      <span class="slogan-line highlight">ma non lo sa</span>
      <span class="slogan-line highlight">nessuno.</span>
      <span class="slogan-final">Per ora!</span>
    </div>
    <div class="flex">
      <img src="younique.png" class="logo-younique-grande">
    </div>
  </div>
</div>
  `}function $(){const e=C.map((i,s)=>`
<div class="parallax-section" data-index="${s}">
  <div class="parallax-bg" style="background: ${i.gradient};">
    <div class="parallax-shape parallax-shape-1"></div>
    <div class="parallax-shape parallax-shape-2"></div>
  </div>

  <div class="parallax-content">
    <div class="flex gap-md">
      <div class="parallax-number" data-parallax="0.3">${i.number}</div>
      <div class="parallax-title">${i.title}</div>
    </div>
    <div class="parallax-text" data-parallax="0.15">
      <p class="parallax-description">${i.description}</p>
      <ul class="parallax-list">
        ${i.items.map(n=>`<li>${n}</li>`).join("")}
      </ul>
    </div>
  </div>
</div>
  `).join("");return`
<div class="parallax-wrapper">
  ${E()}
  <section class="parallax-services">
    <div class="parallax-intro">
      <div class="container">
        <h2 class="parallax-intro-title">I nostri servizi</h2>
        <p class="parallax-intro-text">Sei aree di competenza che trasformano la tua comunicazione</p>
      </div>
    </div>

    ${e}
  </section>
</div>
  `}const k="2026-03-15T00:00:00";function P(){return`
<section class="coming-soon">
  <!-- Background animato -->
  <div class="animated-background">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
  </div>

  <!-- Particles decorative -->
  <div class="particles">${Array.from({length:20}).map((i,s)=>`<div class="particle" style="--delay: ${s*.2}s; --duration: ${3+s*.3}s;"></div>`).join("")}</div>

  <div class="container">
    <div class="coming-soon-content">
      <div class="main-message">
        <h1 class="title">
          <span class="title-line">Stiamo</span>
          <span class="title-line highlight">arrivando</span>
        </h1>
        <p class="subtitle">
          Qualcosa di <span class="emphasis">straordinario</span> sta per nascere.<br>
          Preparati a far brillare il tuo brand.
        </p>
      </div>

      <!-- Countdown Timer -->
      <div class="countdown" id="countdown">

        <div class="countdown-item">
          <div class="countdown-circle">
            <svg class="countdown-svg" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f7b033"/>
                  <stop offset="100%" stop-color="#f7d668"/>
                </linearGradient>
              </defs>
              <circle class="countdown-bg" cx="60" cy="60" r="54"/>
              <circle class="countdown-progress days-progress" cx="60" cy="60" r="54" stroke="url(#gradient-orange)"/>
            </svg>
            <div class="countdown-number" id="days">00</div>
          </div>
          <div class="countdown-label">Giorni</div>
        </div>

        <div class="countdown-item">
          <div class="countdown-circle">
            <svg class="countdown-svg" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#aa97f4"/>
                  <stop offset="100%" stop-color="#c4b7ff"/>
                </linearGradient>
              </defs>
              <circle class="countdown-bg" cx="60" cy="60" r="54"/>
              <circle class="countdown-progress hours-progress" cx="60" cy="60" r="54" stroke="url(#gradient-purple)"/>
            </svg>
            <div class="countdown-number" id="hours">00</div>
          </div>
          <div class="countdown-label">Ore</div>
        </div>

        <div class="countdown-item">
          <div class="countdown-circle">
            <svg class="countdown-svg" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#54b2ee"/>
                  <stop offset="100%" stop-color="#91d1f1"/>
                </linearGradient>
              </defs>
              <circle class="countdown-bg" cx="60" cy="60" r="54"/>
              <circle class="countdown-progress minutes-progress" cx="60" cy="60" r="54" stroke="url(#gradient-blue)"/>
            </svg>
            <div class="countdown-number" id="minutes">00</div>
          </div>
          <div class="countdown-label">Minuti</div>
        </div>

        <div class="countdown-item">
          <div class="countdown-circle">
            <svg class="countdown-svg" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#5fe1a3"/>
                  <stop offset="100%" stop-color="#9feccc"/>
                </linearGradient>
              </defs>
              <circle class="countdown-bg" cx="60" cy="60" r="54"/>
              <circle class="countdown-progress seconds-progress" cx="60" cy="60" r="54" stroke="url(#gradient-green)"/>
            </svg>
            <div class="countdown-number" id="seconds">00</div>
          </div>
          <div class="countdown-label">Secondi</div>
        </div>

      </div>

      <!-- Social Links -->
      <div class="social-preview">
        <p class="subtitle">Seguici per gli aggiornamenti</p>
      </div>
    </div>
  </div>
</section>
  `}function D(){const e=2*Math.PI*54,i=document.querySelector(".days-progress"),s=document.querySelector(".hours-progress"),n=document.querySelector(".minutes-progress"),l=document.querySelector(".seconds-progress");[i,s,n,l].forEach(a=>{a&&(a.style.strokeDasharray=`${e}`,a.style.strokeDashoffset=`${e}`,a.style.transition="stroke-dashoffset 0.5s linear")});function c(){const a=new Date().getTime(),o=new Date(k).getTime()-a,d=Math.floor(o/(1e3*60*60*24)),p=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),v=Math.floor(o%(1e3*60*60)/(1e3*60)),u=Math.floor(o%(1e3*60)/1e3);i&&(i.style.strokeDashoffset=`${e-d/365*e}`),s&&(s.style.strokeDashoffset=`${e-p/24*e}`),n&&(n.style.strokeDashoffset=`${e-v/60*e}`),l&&(l.style.strokeDashoffset=`${e-u/60*e}`);const g=document.getElementById("days"),m=document.getElementById("hours"),f=document.getElementById("minutes"),h=document.getElementById("seconds");if(g&&(g.textContent=String(d).padStart(2,"0")),m&&(m.textContent=String(p).padStart(2,"0")),f&&(f.textContent=String(v).padStart(2,"0")),h&&(h.textContent=String(u).padStart(2,"0")),o<0){const x=document.getElementById("countdown");x&&(x.innerHTML='<p style="color: var(--color-accent); font-size: 2rem;">Siamo live!</p>')}}c(),setInterval(c,1e3)}const t=document.querySelector("#app");if(!t)throw new Error("Elemento #app non trovato nel DOM");t.appendChild(r(y()));t.appendChild(r(S()));t.appendChild(r($()));t.appendChild(r(P()));t.appendChild(r(w()));b();D();z();
