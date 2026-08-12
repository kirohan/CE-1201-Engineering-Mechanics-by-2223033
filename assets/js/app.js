(() => {
  const D = window.CE1201_DATA;
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const state = {
    theme: localStorage.getItem('ce1201-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'),
    focus: localStorage.getItem('ce1201-focus') === '1',
    formulaFilter: 'All'
  };

  const icons = {
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    focus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/></svg>',
    print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h12v6M6 18h12v3H6z"/><path d="M6 14h12v4H6M4 9h16a2 2 0 0 1 2 2v5h-4M2 16v-5a2 2 0 0 1 2-2"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  const sketches = {
    parabola: `<svg width="520" height="250" viewBox="0 0 520 250" aria-label="Parabolic centroid sketch"><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="currentColor"/></marker></defs><g fill="none" stroke="currentColor" stroke-width="2"><path d="M55 205H480" marker-end="url(#a)"/><path d="M70 220V25" marker-end="url(#a)"/><path d="M70 205 C115 200 175 160 235 85 C280 40 350 35 430 35" stroke="var(--primary)"/><path d="M70 205 C75 175 90 125 135 85 C180 45 270 30 430 35" stroke="var(--accent)"/><path d="M70 205 C105 180 160 135 235 85 C290 50 350 40 430 35" fill="color-mix(in srgb,var(--primary) 8%,transparent)" stroke="none"/></g><text x="390" y="63" fill="currentColor" font-size="15">(4,4)</text><text x="280" y="120" fill="currentColor" font-size="14">bounded area</text><text x="454" y="222" fill="currentColor">x</text><text x="47" y="35" fill="currentColor">y</text></svg>`,
    lsection: `<svg width="450" height="250" viewBox="0 0 450 250"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M90 205V45H230V85H130V205Z" fill="color-mix(in srgb,var(--primary) 12%,transparent)"/><path d="M60 205h240M90 225V25" stroke="var(--muted)" stroke-dasharray="5 5"/></g><circle cx="137" cy="92" r="5" fill="var(--accent)"/><text x="148" y="95" fill="currentColor">G (2.167, 6.333)</text><text x="145" y="62" fill="currentColor">7 × 2</text><text x="96" y="155" fill="currentColor">2 × 8</text></svg>`,
    zsection: `<svg width="450" height="270" viewBox="0 0 450 270"><g fill="color-mix(in srgb,var(--primary) 14%,transparent)" stroke="currentColor" stroke-width="2"><path d="M90 55H250V85H185V190H345V220H155V85H90Z"/></g><path d="M50 137H390M218 20V250" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 5"/><text x="365" y="130" fill="currentColor">x′</text><text x="225" y="32" fill="currentColor">y′</text><text x="250" y="110" fill="currentColor">Pxy signs from dx·dy</text></svg>`,
    mallet: `<svg width="450" height="260" viewBox="0 0 450 260"><g stroke="currentColor" stroke-width="3" fill="none"><path d="M215 38V195"/><rect x="135" y="175" width="160" height="42" rx="20" fill="color-mix(in srgb,var(--primary) 12%,transparent)"/><path d="M90 120H350" stroke="var(--accent)" stroke-dasharray="6 5"/></g><text x="360" y="124" fill="currentColor">y-axis</text><text x="228" y="70" fill="currentColor">3 ft handle</text><text x="165" y="205" fill="currentColor">cylindrical head</text></svg>`,
    inclinework: `<svg width="520" height="250" viewBox="0 0 520 250"><defs><marker id="b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="currentColor"/></marker></defs><path d="M60 210L440 70" stroke="currentColor" stroke-width="3"/><g transform="translate(235 130) rotate(-20)"><rect x="-45" y="-30" width="90" height="60" rx="6" fill="color-mix(in srgb,var(--primary) 12%,transparent)" stroke="currentColor" stroke-width="2"/><path d="M0 0V80" stroke="var(--danger)" stroke-width="3" marker-end="url(#b)"/><path d="M25 -5L95 -45" stroke="var(--accent)" stroke-width="3" marker-end="url(#b)"/></g><text x="355" y="82" fill="currentColor">Q</text><text x="225" y="225" fill="currentColor">α = 35°</text><text x="252" y="185" fill="currentColor">W</text></svg>`,
    projectile: `<svg width="520" height="260" viewBox="0 0 520 260"><defs><marker id="c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="currentColor"/></marker></defs><path d="M40 210H190V125H215M355 210H485V160" stroke="currentColor" stroke-width="3" fill="none"/><path d="M195 125 Q285 45 395 160" stroke="var(--primary)" stroke-width="3" fill="none" stroke-dasharray="7 5"/><path d="M185 130L245 95" stroke="var(--accent)" stroke-width="3" marker-end="url(#c)"/><text x="255" y="92" fill="currentColor">70 mph, 30°</text><text x="248" y="225" fill="currentColor">20 ft ditch</text><text x="145" y="165" fill="currentColor">10 ft</text><text x="430" y="185" fill="currentColor">h</text></svg>`,
    wheel: `<svg width="500" height="260" viewBox="0 0 500 260"><defs><marker id="d" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="currentColor"/></marker></defs><path d="M50 215L420 125" stroke="currentColor" stroke-width="3"/><rect x="315" y="140" width="48" height="40" fill="var(--surface)" stroke="currentColor" stroke-width="2" transform="rotate(-14 315 140)"/><circle cx="285" cy="116" r="72" fill="color-mix(in srgb,var(--primary) 10%,transparent)" stroke="currentColor" stroke-width="3"/><path d="M285 116L380 72" stroke="var(--accent)" stroke-width="3" marker-end="url(#d)"/><path d="M285 116V205" stroke="var(--danger)" stroke-width="3" marker-end="url(#d)"/><text x="390" y="68" fill="currentColor">F</text><text x="295" y="190" fill="currentColor">W</text><text x="326" y="139" fill="currentColor">pivot corner</text></svg>`,
    beam: `<svg width="620" height="250" viewBox="0 0 620 250"><path d="M50 140H570" stroke="currentColor" stroke-width="5"/><path d="M125 145l-18 30h36zM455 145l-18 30h36z" fill="color-mix(in srgb,var(--primary) 16%,transparent)" stroke="currentColor" stroke-width="2"/><g stroke="var(--primary)" stroke-width="2"><path d="M60 85v50M85 85v50M110 85v50M135 85v50M160 85v50"/><path d="M65 90h95"/></g><path d="M230 70V135" stroke="var(--danger)" stroke-width="4"/><path d="M320 95a28 28 0 1 1 28 28" stroke="var(--accent)" stroke-width="3" fill="none"/><path d="M455 135L540 95L540 135Z" fill="color-mix(in srgb,var(--warn) 18%,transparent)" stroke="var(--warn)" stroke-width="2"/><path d="M395 45V205" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"/><text x="385" y="35" fill="currentColor">section (i)</text><text x="214" y="60" fill="currentColor">30 kip</text><text x="308" y="85" fill="currentColor">20 kip·ft</text></svg>`,
    pulley: `<svg width="500" height="300" viewBox="0 0 500 300"><path d="M70 35H430" stroke="currentColor" stroke-width="3"/><circle cx="165" cy="90" r="34" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="335" cy="90" r="34" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="210" cy="180" r="34" fill="none" stroke="var(--primary)" stroke-width="3"/><circle cx="290" cy="180" r="34" fill="none" stroke="var(--primary)" stroke-width="3"/><path d="M90 35V180Q90 214 124 214H176Q210 214 210 180V90Q210 56 176 56H165M245 214H255M290 180V90Q290 56 324 56H335M370 90V250" stroke="var(--accent)" stroke-width="3" fill="none"/><rect x="225" y="215" width="50" height="55" rx="5" fill="color-mix(in srgb,var(--primary) 12%,transparent)" stroke="currentColor" stroke-width="2"/><text x="242" y="248" fill="currentColor">W</text></svg>`,
    truss: `<svg width="620" height="260" viewBox="0 0 620 260"><g stroke="currentColor" stroke-width="3" fill="none"><path d="M65 200H550L465 85H150Z"/><path d="M150 85L205 200L270 85L330 200L400 85L465 200M205 200L270 85M330 200L400 85"/></g><path d="M260 45V80M400 45V80" stroke="var(--danger)" stroke-width="4"/><path d="M315 60V225" stroke="var(--primary)" stroke-width="2" stroke-dasharray="6 5"/><text x="325" y="55" fill="currentColor">section cut</text><text x="247" y="38" fill="currentColor">load</text></svg>`,
    belt: `<svg width="500" height="260" viewBox="0 0 500 260"><circle cx="255" cy="130" r="78" fill="none" stroke="currentColor" stroke-width="3"/><path d="M55 82L195 82Q255 45 315 82L450 82" stroke="var(--primary)" stroke-width="5" fill="none"/><path d="M65 82H150M440 82H355" stroke="var(--accent)" stroke-width="3"/><text x="72" y="68" fill="currentColor">T₁</text><text x="408" y="68" fill="currentColor">T₂</text><path d="M255 130L305 72M255 130L205 72" stroke="var(--muted)" stroke-width="2"/><text x="248" y="104" fill="currentColor">θ</text></svg>`,
    cable: `<svg width="560" height="260" viewBox="0 0 560 260"><path d="M60 60H105V95M455 60H500V95" stroke="currentColor" stroke-width="4" fill="none"/><path d="M105 95Q280 260 455 95" stroke="var(--primary)" stroke-width="4" fill="none"/><path d="M280 95V205" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/><path d="M105 45H455" stroke="var(--muted)" stroke-width="2"/><text x="265" y="38" fill="currentColor">L</text><text x="289" y="150" fill="currentColor">d</text><text x="226" y="230" fill="currentColor">lowest point</text></svg>`,
    cone: `<svg width="430" height="280" viewBox="0 0 430 280"><ellipse cx="215" cy="55" rx="95" ry="28" fill="none" stroke="currentColor" stroke-width="3"/><path d="M120 55L215 240L310 55" stroke="currentColor" stroke-width="3" fill="color-mix(in srgb,var(--primary) 8%,transparent)"/><path d="M215 55V240" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/><path d="M215 55H310" stroke="var(--accent)" stroke-width="3"/><text x="260" y="47" fill="currentColor">r</text><text x="225" y="155" fill="currentColor">h</text></svg>`,
    impulse: `<svg width="520" height="210" viewBox="0 0 520 210"><path d="M45 160H475" stroke="currentColor" stroke-width="3"/><rect x="205" y="95" width="105" height="65" rx="6" fill="color-mix(in srgb,var(--primary) 12%,transparent)" stroke="currentColor" stroke-width="2"/><path d="M205 125H120" stroke="var(--danger)" stroke-width="4"/><path d="M310 125H410" stroke="var(--accent)" stroke-width="4"/><text x="68" y="116" fill="currentColor">friction</text><text x="350" y="116" fill="currentColor">applied force</text><text x="220" y="135" fill="currentColor">m</text></svg>`,
    fma: `<svg width="500" height="230" viewBox="0 0 500 230"><path d="M55 180H445" stroke="currentColor" stroke-width="3"/><rect x="220" y="110" width="100" height="70" rx="5" fill="color-mix(in srgb,var(--primary) 12%,transparent)" stroke="currentColor" stroke-width="2"/><path d="M220 125L130 75" stroke="var(--accent)" stroke-width="4"/><path d="M270 110V50" stroke="var(--primary)" stroke-width="4"/><path d="M270 180V220" stroke="var(--danger)" stroke-width="4"/><text x="105" y="70" fill="currentColor">P=200 N, 30°</text><text x="278" y="60" fill="currentColor">N</text><text x="278" y="215" fill="currentColor">300 N</text></svg>`
  };

  const nav = [
    ['home','⌂','Home'],['part-a','A','Part A Class Note'],['part-b','B','Part B Class Note'],['analysis','▦','Question Bank Analysis'],
    ['formula','ƒ','Formula'],['proofs','∵','Theory + Proofs'],['solutions','✓','Complete QB Solution'],['backlog','↺','Backlog Preparation'],['downloads','⇩','PDF Downloads']
  ];

  function applySettings(){
    document.documentElement.dataset.theme = state.theme;
    document.body.classList.toggle('focus-mode', state.focus);
    const themeBtn = $('#themeBtn'); if(themeBtn) themeBtn.innerHTML = state.theme==='dark'?icons.sun:icons.moon;
    const focusBtn = $('#focusBtn'); if(focusBtn) focusBtn.title = state.focus?'Exit Focus Mode':'Focus Mode';
  }

  function shell(){
    document.body.innerHTML = `<div class="progress" id="progress"></div><div class="app-shell">
      <header class="topbar"><div class="topbar-inner">
        <button class="icon-btn mobile-menu" id="menuBtn" aria-label="Open menu">${icons.menu}</button>
        <a class="brand" href="#/home"><div class="brand-mark">CE</div><div class="brand-text"><b>${D.meta.code} · ${D.meta.title}</b><span>${D.meta.university}</span></div></a>
        <div class="nav-actions">
          <button class="pill-btn" id="searchBtn" data-hide-focus="1">${icons.search}<span class="pill-label">Search</span><span class="kbd">/</span></button>
          <button class="icon-btn" id="focusBtn" aria-label="Focus mode">${icons.focus}</button>
          <button class="icon-btn" id="themeBtn" aria-label="Theme"></button>
        </div>
      </div></header>
      <div class="layout"><aside class="sidebar" id="sidebar">
        <div class="side-group"><div class="side-label">Course</div>${nav.slice(0,3).map(n=>sideLink(n)).join('')}</div>
        <div class="side-group"><div class="side-label">Exam Tools</div>${nav.slice(3,8).map(n=>sideLink(n)).join('')}</div>
        <div class="side-group"><div class="side-label">Resources</div>${nav.slice(8).map(n=>sideLink(n)).join('')}</div>
      </aside><main class="main" id="main"></main></div>
      <footer class="footer"><b>${D.meta.creditLine}</b> · ${D.meta.code} ${D.meta.title} · Built from the supplied course notes, slides and question banks.</footer>
    </div><div class="search-overlay" id="searchOverlay"><div class="search-modal"><div class="search-head"><input id="globalSearch" class="search-input" placeholder="Search: centroid, pulley, 2019, belt friction, proof…" autocomplete="off"><button class="icon-btn" id="closeSearch">×</button></div><div class="search-results" id="searchResults"></div></div></div>`;
    bindShell(); applySettings();
  }
  function sideLink(n){return `<a class="side-link" data-route="${n[0]}" href="#/${n[0]}"><span class="side-icon">${n[1]}</span>${n[2]}</a>`}

  function bindShell(){
    $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';localStorage.setItem('ce1201-theme',state.theme);applySettings()};
    $('#focusBtn').onclick=()=>{state.focus=!state.focus;localStorage.setItem('ce1201-focus',state.focus?'1':'0');applySettings()};
    $('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');
    $$('.side-link').forEach(a=>a.addEventListener('click',()=>$('#sidebar').classList.remove('open')));
    $('#searchBtn').onclick=openSearch; $('#closeSearch').onclick=closeSearch; $('#searchOverlay').addEventListener('click',e=>{if(e.target.id==='searchOverlay')closeSearch()});
    $('#globalSearch').addEventListener('input',e=>doSearch(e.target.value));
    document.addEventListener('keydown',e=>{if(e.key==='/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();openSearch()} if(e.key==='Escape')closeSearch()});
    addEventListener('scroll',scrollProgress,{passive:true});
  }

  function scrollProgress(){ const max=document.documentElement.scrollHeight-innerHeight; $('#progress').style.width=(max>0?(scrollY/max*100):0)+'%'; }
  function openSearch(){ $('#searchOverlay').classList.add('open'); setTimeout(()=>$('#globalSearch').focus(),30); doSearch(''); }
  function closeSearch(){ $('#searchOverlay').classList.remove('open'); }

  function buildSearchIndex(){
    const idx=[];
    D.partA.forEach(s=>{idx.push({title:s.title,area:'Part A',text:s.summary+' '+s.years.join(' '),href:'#/part-a#'+s.id});s.topics.forEach(t=>idx.push({title:t.title,area:s.set,text:strip(t.body)+' '+t.qb,href:'#/part-a#'+s.id}))});
    D.partB.forEach(s=>{idx.push({title:s.title,area:'Part B',text:s.summary+' '+s.years.join(' '),href:'#/part-b#'+s.id});s.topics.forEach(t=>idx.push({title:t.title,area:s.set,text:strip(t.body)+' '+t.qb,href:'#/part-b#'+s.id}))});
    D.formulas.forEach(f=>idx.push({title:f.name,area:'Formula · '+f.cat,text:f.formula+' '+f.note,href:'#/formula'}));
    D.proofs.forEach(p=>idx.push({title:p.title,area:'Proof / Derivation',text:p.steps.join(' ')+' '+p.result+' '+p.years,href:'#/proofs#'+p.id}));
    D.solutions.forEach(s=>idx.push({title:s.title,area:'QB Solution · '+s.group,text:s.question+' '+s.steps.join(' ')+' '+s.answer+' '+s.years.join(' '),href:'#/solutions#'+s.id}));
    D.paperMatrix.forEach(p=>idx.push({title:'Question Paper '+p.year,area:'QB Analysis',text:p.a+' '+p.b,href:'#/analysis'}));
    D.backlog.mapping.forEach(m=>idx.push({title:'Backlog '+m.q,area:'Backlog 2023',text:m.topics+' '+m.action,href:'#/backlog'}));
    if(Array.isArray(window.CE1201_PDF_INDEX)) idx.push(...window.CE1201_PDF_INDEX);
    return idx;
  }
  const searchIndex = buildSearchIndex();
  function strip(s){const d=document.createElement('div');d.innerHTML=s;return d.textContent||''}
  function doSearch(q){
    q=q.trim().toLowerCase(); let rows=searchIndex;
    if(q) rows=rows.map(x=>({...x,score:(x.title.toLowerCase().includes(q)?5:0)+(x.area.toLowerCase().includes(q)?2:0)+(x.text.toLowerCase().includes(q)?1:0)})).filter(x=>x.score).sort((a,b)=>b.score-a.score).slice(0,30); else rows=searchIndex.slice(0,12);
    $('#searchResults').innerHTML=rows.length?rows.map(r=>`<a class="search-result" href="${r.href}" onclick="document.getElementById('searchOverlay').classList.remove('open')"><b>${esc(r.title)}</b><br><small>${esc(r.area)} · ${esc((r.text||'').slice(0,145))}</small></a>`).join(''):`<div class="empty">No result. Try a topic, year or formula.</div>`;
  }

  function route(){
    const raw=location.hash.replace(/^#\//,'')||'home'; const [routePart,anchor]=raw.split('#');
    $$('.side-link').forEach(a=>a.classList.toggle('active',a.dataset.route===routePart));
    const main=$('#main');
    const renderers={home:renderHome,'part-a':()=>renderPart('A'),'part-b':()=>renderPart('B'),analysis:renderAnalysis,formula:renderFormula,proofs:renderProofs,solutions:renderSolutions,backlog:renderBacklog,downloads:renderDownloads};
    main.innerHTML=(renderers[routePart]||renderHome)();
    activateReveal(); bindPageActions();
    requestAnimationFrame(()=>{if(anchor){const el=document.getElementById(anchor);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}else scrollTo({top:0,behavior:'instant'})});
    document.title = `${nav.find(n=>n[0]===routePart)?.[2]||'CE1201'} · ${D.meta.title}`;
  }

  function pageTitle(kicker,title,desc,actions=''){return `<div class="section-head"><div><div class="section-kicker">${kicker}</div><h2>${title}</h2><div class="section-desc">${desc}</div></div>${actions}</div>`}
  function priorityClass(p){return p==='Must Do'?'must':p==='Very High'?'very':'high'}
  function studyPdfBar(key){const p=D.studyPdfs?.[key];if(!p)return '';return `<div class="notice info reveal pdf-source-bar"><div>⇩</div><div style="flex:1"><strong>Full source PDF · ${p.pages} pages</strong>${p.name}. Use the web notes for fast revision and search; open the PDF for the complete page-perfect material, detailed figures and long calculations.</div><div class="pdf-actions"><a class="secondary-btn" href="${p.href}" target="_blank" rel="noopener">Open PDF</a><a class="primary-btn" href="${p.href}" download>${icons.download} Download</a></div></div>`}

  function renderHome(){
    return `<section class="hero reveal"><span class="eyebrow">${D.meta.code} · Full Course Hub</span><h1>Engineering Mechanics, organized for the exam — not just for reading.</h1><p class="lead">A fast, mobile-friendly set-wise study website built from your class notes, lecture slides, regular question banks, backlog paper and the Faires solution reference. Complex ideas include Bangla explanations, formulas, proofs, sketches and exam shortcuts.</p><div class="hero-actions"><a class="primary-btn" href="#/part-a">Start Part A ${icons.arrow}</a><a class="secondary-btn" href="#/analysis">See QB Priority</a><a class="secondary-btn" href="downloads/CE1201_Complete_Study_PDF_Pack.zip" download>${icons.download} Full PDF Pack</a></div></section>
    <div class="stats-grid reveal"><div class="stat-card"><div class="stat-number">8</div><div class="stat-label">Core Sets (A1–A4, B1–B4)</div></div><div class="stat-card"><div class="stat-number">40+</div><div class="stat-label">Essential Formula Entries</div></div><div class="stat-card"><div class="stat-number">${D.solutions.length}</div><div class="stat-label">Fully Explained Core Solutions</div></div><div class="stat-card"><div class="stat-number">10+</div><div class="stat-label">PDFs / Offline Resources</div></div></div>
    <section class="section reveal">${pageTitle('How to use this website','Recommended Study Workflow','Use the same sequence for each set. It is designed to minimize rereading and maximize exam recall.')}
      <div class="card-grid"><div class="card"><h3>1. Learn the Set</h3><p>Read <b>Part A / Part B Class Note</b>. Start with the “Must Do” sets and use Bangla memory cues for concepts that feel abstract.</p></div><div class="card"><h3>2. Lock the Formula</h3><p>Open <b>Formula</b>, filter the category, and rewrite each formula once with units and conditions. Never memorize a formula without knowing when it is valid.</p></div><div class="card"><h3>3. Write Proofs Yourself</h3><p>Use <b>Theory + Proofs</b> to learn the logic and final result. In exam practice, reproduce the derivation without looking at the middle steps.</p></div><div class="card"><h3>4. Solve by Priority</h3><p>Open <b>Question Bank Analysis → Complete QB Solution</b>. The most repeated topics are placed first. Finish one pattern before moving to a rare variation.</p></div></div>
    </section>
    <section class="section reveal">${pageTitle('Exam Model','What “Set” means here',D.examModel.rule)}<div class="notice info"><div>ℹ️</div><div><strong>Taxonomy rule</strong>${D.examModel.note}</div></div><div class="notice warn" style="margin-top:10px"><div>⚠</div><div><strong>2020 exception</strong>${D.examModel.exception}</div></div></section>
    <section class="section reveal">${pageTitle('Course Map','Eight high-value sets','Each card opens the corresponding class-note area.')}
      <div class="set-grid">${[...D.partA,...D.partB].map(s=>setSummaryCard(s,s.id[0]==='a'?'part-a':'part-b')).join('')}</div>
    </section>
    <section class="section reveal">${pageTitle('Complete Study PDFs','Six polished manuals included','The newly added generated PDFs are bundled into the repository and remain available beside the web-native material.')}<div class="source-grid">${Object.values(D.studyPdfs).map(p=>`<a class="source-card" href="${p.href}" download><div class="download-icon">⇩</div><div><b>${p.name}</b><div class="small muted">${p.pages} pages · full PDF</div></div></a>`).join('')}<a class="source-card" href="downloads/CE1201_Complete_Study_PDF_Pack.zip" download><div class="download-icon">ZIP</div><div><b>Complete Study PDF Pack</b><div class="small muted">All 6 manuals in one download</div></div></a></div></section>
    <section class="section reveal">${pageTitle('Evidence Base','Material used','The site separates source-derived content from verified calculations added for clarity.')}
      <div class="card"><ul>${D.sourceCoverage.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
    </section>`;
  }

  function setSummaryCard(s,routeName){return `<a class="set-card" href="#/${routeName}#${s.id}" style="text-decoration:none"><div class="set-top"><div class="set-icon">${s.icon}</div><div><div class="small muted">${s.set}</div><h3>${s.title}</h3></div></div><p class="muted">${s.summary}</p><div class="badges"><span class="badge ${priorityClass(s.priority)}">${s.priority}</span><span class="badge">${s.topics.length} topics</span></div></a>`}

  function renderPart(which){
    const sets=which==='A'?D.partA:D.partB;
    return `${pageTitle(`Part ${which} Class Note`,`Part ${which} — Set-wise Class Notes`,which==='A'?'Centroid → Area MOI → Advanced Inertia/Pappus → Dynamics.':'Equilibrium/FBD → Beam/Pulley → Truss/Plane Motion → Friction/Flexible Cord.')}
    ${studyPdfBar(which==='A'?'partA':'partB')}
    <div class="notice info reveal"><div>★</div><div><strong>Exam reading rule</strong>Each full question is treated as one set. Question-bank years are attached to topics where the supplied notes/papers support them.</div></div>
    ${sets.map(s=>`<section class="section reveal" id="${s.id}"><div class="set-card"><div class="set-top"><div class="set-icon">${s.icon}</div><div><div class="section-kicker">${s.set}</div><h2 style="font-size:32px">${s.title}</h2><div class="section-desc">${s.summary}</div></div></div><div class="badges"><span class="badge ${priorityClass(s.priority)}">${s.priority}</span>${s.years.slice(0,8).map(y=>`<span class="badge">${y}</span>`).join('')}</div><div class="small muted">Source: ${esc(s.source)}</div><div class="topic-stack">${s.topics.map(t=>`<article class="topic-card"><h3>${t.title}</h3>${t.body}<div class="topic-qb"><b>QB link:</b> ${t.qb}</div></article>`).join('')}</div><div class="memory-row">${s.memory.map(m=>`<span class="memory-chip">${m}</span>`).join('')}</div></div></section>`).join('')}`;
  }

  function renderAnalysis(){
    return `${pageTitle('Regular Exam','Question Bank Analysis','Regular-exam preparation only. Backlog has a separate dedicated page.')}
    ${studyPdfBar('analysis')}
    <div class="notice warn reveal"><div>⚠</div><div><strong>2020 handling</strong>${D.examModel.exception} The exact 2020 paper is not separately present in the uploaded regular-PDF bundle, so this site does not invent a year-specific paper reconstruction.</div></div>
    <section class="section reveal">${pageTitle('Priority Order','Study the repeats first','The rank combines supplied note year-tags and direct patterns visible in the uploaded regular papers.')}
      <div class="table-wrap"><table><thead><tr><th>Rank</th><th>Topic</th><th>Priority</th><th>Evidence</th></tr></thead><tbody>${D.priorityTopics.map((x,i)=>`<tr><td class="rank">#${x.rank}</td><td><b>${x.topic}</b><div class="priority-bar"><span style="width:${Math.max(35,100-i*4.2)}%"></span></div></td><td><span class="badge ${priorityClass(x.level)}">${x.level}</span></td><td>${x.evidence}</td></tr>`).join('')}</tbody></table></div>
    </section>
    <section class="section reveal">${pageTitle('Year Map','Regular Question Pattern by Year','Topic-level mapping. Historical printed Section A/B ordering is remapped to the current course taxonomy.')}
      <div class="table-wrap"><table><thead><tr><th>Year</th><th>First 4-question block</th><th>Second 4-question block</th><th>Status</th></tr></thead><tbody>${D.paperMatrix.map(p=>`<tr><td><b>${p.year}</b></td><td>${p.a}</td><td>${p.b}</td><td>${p.verified?'<span class="badge must">Paper verified</span>':'<span class="badge very">Exception / note only</span>'}</td></tr>`).join('')}</tbody></table></div>
    </section>
    <section class="section reveal">${pageTitle('Strategy','Three-pass revision','A practical way to use the frequency analysis.')}
      <div class="card-grid"><div class="card"><h3>Pass 1 · Must Do</h3><p>Centroid, Area MOI, FBD/Equilibrium, SFBM, Friction, Work–Energy/Impulse. Aim for zero conceptual gaps.</p></div><div class="card"><h3>Pass 2 · Very High</h3><p>Pulley, Truss, Product Inertia, Flexible Cord. Do at least two numerical variants each.</p></div><div class="card"><h3>Pass 3 · High / Variants</h3><p>Mass MOI, Pappus, wheel obstacle, wedge, projectile. Learn the governing workflow and one clean solved example.</p></div><div class="card"><h3>Paper Practice</h3><p>Attempt 3 questions from each printed section in 3 hours. Spend the first 5 minutes choosing the strongest sets.</p></div></div>
    </section>`;
  }

  function renderFormula(){
    const cats=['All',...new Set(D.formulas.map(f=>f.cat))];
    return `${pageTitle('Quick Reference','Formula Book','Proper superscripts/subscripts, conditions and units. Use the filter or browser search.')}
    ${studyPdfBar('formula')}
    <div class="formula-toolbar reveal"><input class="search-input" id="formulaSearch" placeholder="Filter formulas…" style="max-width:360px">${cats.map(c=>`<button class="filter-chip ${c==='All'?'active':''}" data-formula-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div><div class="formula-grid-ui" id="formulaGrid">${formulaCards(D.formulas)}</div>
    <div class="notice info reveal" style="margin-top:16px"><div>√</div><div><strong>Notation rule</strong>This site renders powers as true superscripts (x², r⁴), subscripts as Iₓ/Iᵧ notation, and uses fraction formatting in the detailed notes. Do not write “x^2” in an exam answer when standard mathematical typesetting is possible.</div></div>`;
  }
  function formulaCards(items){return items.map(f=>`<article class="formula-card reveal" data-cat="${esc(f.cat)}" data-search="${esc((f.cat+' '+f.name+' '+f.formula+' '+f.note).toLowerCase())}"><div class="small muted">${f.cat}</div><h3>${f.name}</h3><div class="formula">${formatFormula(f.formula)}</div><div class="small muted">${f.note}</div></article>`).join('')}
  function formatFormula(s){return esc(s).replace(/([A-Za-z0-9)\]])²/g,'$1<sup>2</sup>').replace(/([A-Za-z0-9)\]])³/g,'$1<sup>3</sup>').replace(/([A-Za-z0-9)\]])⁴/g,'$1<sup>4</sup>').replace(/ₓ/g,'<sub>x</sub>').replace(/ᵧ/g,'<sub>y</sub>').replace(/₁/g,'<sub>1</sub>').replace(/₂/g,'<sub>2</sub>').replace(/ₒ/g,'<sub>o</sub>').replace(/ₘ/g,'<sub>m</sub>')}

  function renderProofs(){
    return `${pageTitle('Theory + Proof','Derivations You Should Be Able to Write','Each proof is broken into exam-safe logical steps, followed by the final result.')}
    ${studyPdfBar('formula')}
    <div class="notice info reveal"><div>✎</div><div><strong>Proof practice</strong>Read once → close the step list → reproduce assumption, governing relation and final line. Marks are usually lost in the missing middle logic, not the last formula.</div></div>
    <section class="section">${D.proofs.map(p=>`<article class="proof-card reveal" id="${p.id}"><div class="badges"><span class="badge ${priorityClass(p.priority)}">${p.priority}</span><span class="badge">${p.years}</span></div><h3>${p.title}</h3><div class="small muted">Source: ${p.source}</div><ol class="proof-steps">${p.steps.map(s=>`<li><div>${s}</div></li>`).join('')}</ol><div class="answer-box"><b>Result:</b> ${p.result}</div></article>`).join('')}</section>`;
  }

  function renderSolutions(){
    return `${pageTitle('Complete QB Solution','High-Frequency Solution Bank','Solutions are organized by repeated topic first. Each includes method, physical explanation and a final answer where the supplied data supports one.')}
    ${studyPdfBar('solutions')}
    <div class="notice info reveal"><div>✓</div><div><strong>Complete coverage source</strong>The 39-page solution PDF indexes every full question in the supplied regular QB set. The web cards put the most repeated solution archetypes first; use the complete PDF for every year-specific variant and exact figure.</div></div>
    <div class="solution-toolbar reveal"><input id="solutionSearch" class="search-input" placeholder="Search solution: wheel, centroid, 2018, pulley…" style="max-width:430px"><button class="secondary-btn" id="printPage">${icons.print} Save page as PDF</button></div>
    <div id="solutionList">${solutionCards(D.solutions)}</div>`;
  }
  function solutionCards(items){return items.map(s=>`<article class="solution-card reveal" id="${s.id}" data-search="${esc((s.title+' '+s.group+' '+s.years.join(' ')+' '+s.question+' '+s.answer).toLowerCase())}"><div class="badges"><span class="badge must">Priority #${s.rank}</span><span class="badge">${s.group}</span>${s.years.map(y=>`<span class="badge">${y}</span>`).join('')}</div><h3>${s.title}</h3><p><b>Question pattern:</b> ${s.question}</p>${s.sketch&&sketches[s.sketch]?`<div class="sketch">${sketches[s.sketch]}</div>`:''}<div class="small muted">Source: ${s.source}</div><ol class="solution-steps">${s.steps.map(x=>`<li><div>${x}</div></li>`).join('')}</ol><div class="answer-box"><b>Final:</b> ${s.answer}</div><p class="bn"><b>Exam shortcut:</b> ${s.tip}</p></article>`).join('')}

  function renderBacklog(){
    return `${pageTitle('Dedicated Section','Backlog Preparation',D.backlog.warning)}${studyPdfBar('backlog')}<div class="notice warn reveal"><div>↺</div><div><strong>Backlog 2023 is treated separately.</strong> Regular-exam priority statistics above are not reused as a backlog prediction without checking the backlog paper.</div></div>
    <section class="section reveal">${pageTitle('Paper Map','Backlog 2023 — question-by-question','Use this table as the minimum coverage checklist.')}
      <div class="table-wrap"><table><thead><tr><th>Question</th><th>Topics</th><th>Preparation action</th></tr></thead><tbody>${D.backlog.mapping.map(m=>`<tr><td class="rank">${m.q}</td><td><b>${m.topics}</b></td><td>${m.action}</td></tr>`).join('')}</tbody></table></div>
    </section><section class="section reveal">${pageTitle('7-Day Crash Plan','One focused week','Repeat the cycle if more time is available.')}
      <div class="timeline">${D.backlog.sevenDay.map((x,i)=>`<div class="timeline-item"><div class="timeline-day">Day ${i+1}</div><div class="timeline-body">${x.replace(/^Day \d+ — /,'')}</div></div>`).join('')}</div>
    </section><section class="section reveal">${pageTitle('Exam Discipline','Backlog answer-writing rules','Small presentation errors compound quickly in mechanics.')}
      <div class="card"><ul>${D.backlog.examRules.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    </section><section class="section reveal"><a class="primary-btn" href="downloads/question-papers/Backlog_2023.pdf" download>${icons.download} Download Backlog 2023 Paper</a></section>`;
  }

  function renderDownloads(){
    return `${pageTitle('Offline Resources','PDF Downloads','Download the six complete generated study manuals, master guide and supplied question-paper bundles. PDFs are not loaded until clicked, keeping the website fast.')}<div class="notice info reveal"><div>ZIP</div><div><strong>One-click study pack</strong><a href="downloads/CE1201_Complete_Study_PDF_Pack.zip" download>Download all 6 generated study PDFs together</a>.</div></div>
    <div class="source-grid reveal">${D.sourceLibrary.map(s=>`<a class="source-card" href="${s.href}" download><div class="download-icon">⇩</div><div><b>${s.name}</b><div class="small muted">${s.type}</div></div></a>`).join('')}</div>
    <section class="section reveal">${pageTitle('Print / PDF','Save any current page as PDF','The site has print-optimized CSS. Use the button below or your browser’s Print → Save as PDF.')}
      <button class="primary-btn" id="printPage">${icons.print} Save Current Page as PDF</button>
    </section><section class="section reveal"><div class="notice info"><div>⌁</div><div><strong>GitHub Pages friendly</strong>The repository is fully static: no server, database or build step is required. Clone it, open index.html through a local server, or publish the repository root with GitHub Pages.</div></div></section>`;
  }

  function bindPageActions(){
    const fs=$('#formulaSearch'); if(fs) fs.addEventListener('input',filterFormulas);
    $$('[data-formula-cat]').forEach(b=>b.onclick=()=>{state.formulaFilter=b.dataset.formulaCat;$$('[data-formula-cat]').forEach(x=>x.classList.toggle('active',x===b));filterFormulas()});
    const ss=$('#solutionSearch'); if(ss) ss.addEventListener('input',e=>{$$('.solution-card').forEach(c=>c.style.display=c.dataset.search.includes(e.target.value.toLowerCase())?'':'none')});
    $$('#printPage').forEach(b=>b.onclick=()=>print());
  }
  function filterFormulas(){const q=($('#formulaSearch')?.value||'').toLowerCase();$$('.formula-card').forEach(c=>{const catOk=state.formulaFilter==='All'||c.dataset.cat===state.formulaFilter;const qOk=!q||c.dataset.search.includes(q);c.style.display=catOk&&qOk?'':'none'})}
  function activateReveal(){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}}),{threshold:.06});$$('.reveal').forEach(e=>obs.observe(e))}

  shell(); route(); addEventListener('hashchange',route);
})();
