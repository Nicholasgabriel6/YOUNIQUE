import{h as t,c as o,b as a,F as r,i as s,a as c}from"./themeToggle-DmPx4Iie.js";const l=[{number:"01",title:"Strategia & Consulenza",description:"Analizziamo il brand, definiamo obiettivi chiari e costruiamo una strategia di comunicazione coerente e sostenibile.",items:["Analisi e posizionamento del brand","Definizione obiettivi e messaggi","Consulenza continuativa","Strategia di comunicazione integrata"],color:"purple"},{number:"02",title:"Comunicazione, Branding & Media",description:"Diamo forma e voce ai brand attraverso contenuti, identità visiva e strumenti di comunicazione online e offline.",items:["Produzione contenuti grafici","Servizi fotografici","Branding & rebranding","Produzioni video e reel","Siti web e app"],color:"pink"},{number:"03",title:"Marketing, ADV & Performance",description:"Trasformiamo la visibilità in risultati concreti. Pianifichiamo e gestiamo attività di marketing e advertising.",items:["Lead generation","ADV & Google Ads","Gestione social"],color:"blue"},{number:"04",title:"Eventi promozionali",description:"Progettiamo eventi come vere esperienze di comunicazione dal vivo.",items:["Eventi lancio, presentazioni, inaugurazioni","Eventi aziendali"],color:"orange"},{number:"05",title:"Produzione Eventi & Intrattenimento",description:"Gestiamo tutti gli aspetti operativi, tecnici e artistici necessari.",items:["Hostess, steward e catering","Allestimenti","Ingaggio artisti e performer","Noleggio attrezzature"],color:"lime"},{number:"06",title:"Eventi Privati & Celebrazioni",description:"Creiamo eventi privati su misura, curati in ogni dettaglio.",items:["Feste private","Matrimoni","Compleanni e ricorrenze"],color:"purple"}];function m(){return`
<section id="servizi" class="services">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">I nostri servizi</h2>
      <p class="section-intro">
        Sei aree di competenza, un unico obiettivo: far emergere il tuo brand e farlo crescere.
      </p>
    </div>

    <div class="services-grid">
      ${l.map(i=>`
        <article class="service-card color-${i.color}" data-number="${i.number}">
          <div class="service-number">${i.number}.</div>
          <h3 class="text-md p-sm">${i.title}</h3>
          <p class="p-sm">${i.description}</p>
          <ul class="p-lg">
            ${i.items.map(n=>`<li>${n}</li>`).join("")}
          </ul>
          <div class="service-accent"></div>
        </article>
      `).join("")}
    </div>
  </div>
</section>
  `}const e=document.querySelector("#app");if(!e)throw new Error("Elemento #app non trovato");e.appendChild(t(o()));e.appendChild(t(a()));e.appendChild(t(m()));e.appendChild(t(r()));s();c();
