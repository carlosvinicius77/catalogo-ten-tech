"use client";
import { useState } from "react";
import Link from "next/link";

/* ── Design System: Retro-Futurista ── */
const BG    = "#0D0A1E";
const CARD  = "#130F2A";
const NEON_PINK  = "#FF2D78";
const NEON_BLUE  = "#00D4FF";
const NEON_PURP  = "#BF00FF";
const CHROME = "#E8E0FF";
const GOLD   = "#FFD700";
const MUTED  = "#8B7FA8";

const menu = [
  { name: "NEON SMASH",       desc: "Dois smash patties, queijo americano derretido, molho especial 2087 e picles crocantes.",  price: "R$ 42",  tag: "CLÁSSICO",  img: "/retro-burger1.jpg", color: NEON_PINK },
  { name: "CHROME STACK",     desc: "Triplo blend angus, cebola caramelizada, bacon defumado e maionese trufada no brioche.",   price: "R$ 58",  tag: "PREMIUM",   img: "/retro-burger2.jpg", color: NEON_BLUE },
  { name: "GALAXY CRISPY",    desc: "Frango empanado artesanal, coleslaw de beterraba roxa, molho ranch e queijo pepper jack.", price: "R$ 38",  tag: "CROCANTE",  img: "/retro-burger3.jpg", color: NEON_PURP },
  { name: "RETROWAVE FRIES",  desc: "Fritas rústicas temperadas com blend secreto de especiarias e flor de sal.",               price: "R$ 22",  tag: "ACOMPANHA", img: "/retro-fries.jpg",   color: GOLD },
];

const reviews = [
  { name: "Rafael M.",  stars: 5, text: "Entrei e senti que viajei no tempo. O Neon Smash é absurdo de bom." },
  { name: "Julia K.",   stars: 5, text: "A atmosfera é incrível e o Chrome Stack me deixou sem palavras. Voltarei sempre." },
  { name: "Diego P.",   stars: 5, text: "Melhor hambúrguer da cidade, sem dúvida. O lugar parece saído de um filme sci-fi." },
];

export default function HamburgueriaRetro() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: ${NEON_PINK}60; }

        .rt { font-family: 'Inter', sans-serif; background: ${BG}; color: ${CHROME}; overflow-x: hidden; }
        .rt a { text-decoration: none; color: inherit; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .orbit { font-family: 'Orbitron', monospace; }

        /* ── GRID LINES retro ── */
        .rt::before {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(${NEON_BLUE}08 1px, transparent 1px),
            linear-gradient(90deg, ${NEON_BLUE}08 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── SCANLINES ── */
        .rt::after {
          content: '';
          position: fixed; inset: 0; z-index: 1; pointer-events: none;
          background: repeating-linear-gradient(transparent 0, transparent 3px, rgba(0,212,255,.015) 3px, rgba(0,212,255,.015) 4px);
        }

        /* huashu animations */
        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes glow     { 0%,100%{text-shadow: 0 0 10px var(--c), 0 0 30px var(--c)} 50%{text-shadow: 0 0 20px var(--c), 0 0 60px var(--c), 0 0 100px var(--c)} }
        @keyframes scanline { 0%{top:-10%} 100%{top:110%} }
        @keyframes flicker  { 0%,98%{opacity:1} 99%{opacity:.8} 100%{opacity:1} }
        @keyframes pulse-border { 0%,100%{border-color:var(--c)60} 50%{border-color:var(--c)} }
        @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        .rt-hero-badge  { animation: fadeIn  .7s ease .1s both }
        .rt-hero-h1     { animation: fadeUp  .9s ease .2s both }
        .rt-hero-sub    { animation: fadeUp  .9s ease .4s both }
        .rt-hero-btns   { animation: fadeUp  .9s ease .55s both }
        .rt-hero-img    { animation: float 5s ease-in-out 1s infinite }

        /* ── NAV ── */
        .rt-nav {
          position: fixed; top: 28px; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 64px; height: 64px;
          background: rgba(13,10,30,.85); backdrop-filter: blur(16px);
          border-bottom: 1px solid ${NEON_PINK}30;
        }
        .rt-logo {
          font-size: 26px; letter-spacing: 4px; color: ${CHROME};
          animation: flicker 8s ease infinite;
        }
        .rt-logo span { color: ${NEON_PINK}; text-shadow: 0 0 12px ${NEON_PINK}; }
        .rt-links { display: flex; gap: 36px; }
        .rt-links a {
          font-size: 11px; font-weight: 500; letter-spacing: .2em;
          text-transform: uppercase; color: ${MUTED};
          transition: color 300ms ease;
        }
        .rt-links a:hover { color: ${NEON_BLUE}; text-shadow: 0 0 8px ${NEON_BLUE}; }
        .rt-order-btn {
          background: transparent;
          border: 1px solid ${NEON_PINK};
          padding: 10px 24px;
          font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: ${NEON_PINK}; font-family: 'Orbitron', monospace; cursor: pointer;
          box-shadow: 0 0 12px ${NEON_PINK}40, inset 0 0 12px ${NEON_PINK}10;
          transition: all 300ms ease;
          animation: pulse-border 3s ease-in-out infinite;
          --c: ${NEON_PINK};
        }
        .rt-order-btn:hover {
          background: ${NEON_PINK}20;
          box-shadow: 0 0 24px ${NEON_PINK}70, inset 0 0 24px ${NEON_PINK}20;
          transform: translateY(-1px);
        }

        /* ── HERO ── */
        .rt-hero {
          position: relative; min-height: 100vh;
          display: grid; grid-template-columns: 55% 45%;
          align-items: center; padding: 100px 64px 60px;
          overflow: hidden; z-index: 2;
        }
        .rt-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 60% at 70% 50%, ${NEON_PINK}12 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, ${NEON_PURP}10 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 80% 20%, ${NEON_BLUE}08 0%, transparent 60%);
        }
        .rt-hero-left { position: relative; z-index: 2; }
        .rt-era {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid ${NEON_BLUE}40; padding: 6px 14px;
          font-size: 10px; letter-spacing: .3em; text-transform: uppercase;
          color: ${NEON_BLUE}; font-family: 'Orbitron', monospace;
          margin-bottom: 28px;
          box-shadow: 0 0 8px ${NEON_BLUE}20;
        }
        .rt-era-dot { width: 5px; height: 5px; background: ${NEON_BLUE}; border-radius: 50%; box-shadow: 0 0 6px ${NEON_BLUE}; animation: glow 2s ease-in-out infinite; --c: ${NEON_BLUE}; }
        .rt-h1 {
          font-size: clamp(64px, 9vw, 130px);
          line-height: .88; letter-spacing: -.01em;
          color: ${CHROME}; margin-bottom: 10px;
        }
        .rt-h1 .pink { color: ${NEON_PINK}; text-shadow: 0 0 20px ${NEON_PINK}80; animation: glow 3s ease-in-out infinite; --c: ${NEON_PINK}; }
        .rt-h1 .blue { color: ${NEON_BLUE}; text-shadow: 0 0 20px ${NEON_BLUE}80; }
        .rt-h1-sub { font-size: clamp(18px, 3vw, 36px); letter-spacing: .08em; color: ${GOLD}; text-shadow: 0 0 12px ${GOLD}60; margin-bottom: 24px; }
        .rt-hero-body { font-size: 15px; color: ${MUTED}; line-height: 1.75; max-width: 420px; margin-bottom: 36px; }
        .rt-hero-btns { display: flex; gap: 14px; align-items: center; }
        .rt-btn-main {
          background: linear-gradient(135deg, ${NEON_PINK}, ${NEON_PURP});
          border: none; padding: 16px 36px;
          font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: #fff; font-family: 'Orbitron', monospace; cursor: pointer;
          box-shadow: 0 0 20px ${NEON_PINK}50; transition: all 300ms ease;
        }
        .rt-btn-main:hover { box-shadow: 0 0 36px ${NEON_PINK}80; transform: translateY(-2px); }
        .rt-btn-ghost {
          background: transparent; border: 1px solid ${CHROME}30;
          padding: 16px 28px; font-size: 11px; font-weight: 500; letter-spacing: .2em;
          text-transform: uppercase; color: ${CHROME}70; font-family: inherit; cursor: pointer;
          transition: all 300ms ease;
        }
        .rt-btn-ghost:hover { border-color: ${NEON_BLUE}; color: ${NEON_BLUE}; box-shadow: 0 0 12px ${NEON_BLUE}30; }
        .rt-hero-right { position: relative; z-index: 2; display: flex; justify-content: center; align-items: center; }
        .rt-hero-glow {
          position: absolute; width: 460px; height: 460px; border-radius: 50%;
          background: radial-gradient(circle, ${NEON_PINK}20 0%, transparent 70%);
          pointer-events: none;
        }
        .rt-hero-img-wrap { position: relative; }
        .rt-hero-img-wrap img {
          width: clamp(280px, 38vw, 520px); height: auto;
          object-fit: cover; display: block; border-radius: 0;
          filter: drop-shadow(0 20px 60px ${NEON_PINK}40);
        }
        /* hero stats */
        .rt-hero-stats { display: flex; gap: 36px; margin-top: 48px; padding-top: 28px; border-top: 1px solid ${CHROME}10; }
        .rt-stat-val { font-size: 26px; font-weight: 900; color: ${NEON_PINK}; text-shadow: 0 0 10px ${NEON_PINK}60; }
        .rt-stat-lbl { font-size: 10px; color: ${MUTED}; letter-spacing: .15em; text-transform: uppercase; margin-top: 3px; }

        /* ── MARQUEE TICKER ── */
        .rt-ticker { background: ${NEON_PINK}; padding: 12px 0; overflow: hidden; white-space: nowrap; }
        .rt-ticker-inner { display: inline-block; animation: marquee 18s linear infinite; }
        .rt-ticker-item { display: inline-block; margin-right: 60px; font-size: 13px; font-weight: 700; color: #fff; letter-spacing: .1em; text-transform: uppercase; font-family: 'Orbitron', monospace; }
        .rt-ticker-item::before { content: "◆ "; font-size: 8px; opacity: .7; }

        /* ── SECTION ── */
        .rt-section { padding: 88px 64px; position: relative; z-index: 2; }
        .rt-section-tag { font-size: 10px; font-weight: 700; color: ${NEON_BLUE}; letter-spacing: .35em; text-transform: uppercase; margin-bottom: 10px; font-family: 'Orbitron', monospace; }
        .rt-title { font-size: clamp(36px, 5vw, 72px); line-height: .95; letter-spacing: -.01em; color: ${CHROME}; margin-bottom: 0; }
        .rt-title em { font-style: normal; color: ${NEON_PINK}; text-shadow: 0 0 16px ${NEON_PINK}70; }

        /* ── MENU ── */
        .rt-menu-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 52px; align-items: start; }
        .rt-menu-tabs { display: flex; flex-direction: column; gap: 12px; }
        .rt-menu-tab {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 24px; cursor: pointer;
          border: 1px solid transparent;
          background: ${CARD}; transition: all 300ms ease;
        }
        .rt-menu-tab.active { border-color: var(--c); box-shadow: 0 0 16px var(--c)30; background: ${CARD}; }
        .rt-menu-tab:hover:not(.active) { border-color: ${CHROME}15; }
        .rt-tab-color { width: 4px; height: 40px; border-radius: 2px; flex-shrink: 0; }
        .rt-tab-name { font-size: 16px; font-weight: 700; letter-spacing: .05em; color: ${CHROME}; margin-bottom: 4px; }
        .rt-tab-price { font-size: 14px; color: var(--c); font-weight: 700; }
        /* preview */
        .rt-menu-preview { position: sticky; top: 120px; }
        .rt-preview-card { background: ${CARD}; border: 1px solid var(--c)40; box-shadow: 0 0 32px var(--c)15; overflow: hidden; }
        .rt-preview-card img { width: 100%; height: 300px; object-fit: cover; display: block; transition: transform 500ms ease; }
        .rt-preview-card:hover img { transform: scale(1.04); }
        .rt-preview-body { padding: 28px; }
        .rt-preview-tag { font-size: 10px; letter-spacing: .25em; text-transform: uppercase; color: var(--c); font-family: 'Orbitron', monospace; margin-bottom: 10px; }
        .rt-preview-name { font-size: 28px; letter-spacing: .03em; color: ${CHROME}; margin-bottom: 12px; }
        .rt-preview-desc { font-size: 14px; color: ${MUTED}; line-height: 1.7; margin-bottom: 20px; }
        .rt-preview-price { font-size: 32px; color: var(--c); text-shadow: 0 0 12px var(--c)60; }
        .rt-add-btn {
          width: 100%; margin-top: 20px;
          background: transparent; border: 1px solid var(--c);
          padding: 14px; font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: var(--c); font-family: 'Orbitron', monospace; cursor: pointer;
          box-shadow: 0 0 12px var(--c)20; transition: all 300ms ease;
        }
        .rt-add-btn:hover { background: var(--c)15; box-shadow: 0 0 24px var(--c)50; }

        /* ── REVIEWS ── */
        .rt-reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 52px; }
        .rt-review-card { padding: 28px; background: ${CARD}; border: 1px solid ${CHROME}08; transition: all 300ms ease; cursor: default; }
        .rt-review-card:hover { border-color: ${NEON_PINK}40; box-shadow: 0 0 20px ${NEON_PINK}10; transform: translateY(-3px); }
        .rt-review-stars { display: flex; gap: 4px; margin-bottom: 14px; }
        .rt-review-star { font-size: 14px; color: ${GOLD}; text-shadow: 0 0 6px ${GOLD}60; }
        .rt-review-text { font-size: 14px; color: ${MUTED}; line-height: 1.7; margin-bottom: 18px; font-style: italic; }
        .rt-review-name { font-size: 13px; font-weight: 600; color: ${CHROME}; letter-spacing: .05em; }

        /* ── CTA ── */
        .rt-cta {
          position: relative; padding: 100px 64px; text-align: center;
          background: ${CARD}; overflow: hidden; z-index: 2;
          border-top: 1px solid ${NEON_PINK}20;
          border-bottom: 1px solid ${NEON_BLUE}20;
        }
        .rt-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, ${NEON_PINK}08 0%, transparent 70%);
        }
        .rt-cta-title { font-size: clamp(48px, 7vw, 100px); line-height: .9; color: ${CHROME}; position: relative; z-index: 2; margin-bottom: 20px; }
        .rt-cta-title .glow { color: ${NEON_PINK}; text-shadow: 0 0 20px ${NEON_PINK}; animation: glow 3s ease-in-out infinite; --c: ${NEON_PINK}; }

        /* ── FOOTER ── */
        .rt-footer { background: #07051A; border-top: 1px solid ${NEON_PINK}20; padding: 52px 64px 28px; z-index: 2; position: relative; }
        .rt-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .rt-footer-col h4 { font-size: 10px; letter-spacing: .25em; color: ${NEON_BLUE}; text-transform: uppercase; font-family: 'Orbitron', monospace; margin-bottom: 14px; }
        .rt-footer-col a { display: block; font-size: 13px; color: ${MUTED}; margin-bottom: 9px; transition: color 200ms ease; }
        .rt-footer-col a:hover { color: ${NEON_PINK}; }

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
          .rt-nav,.rt-hero,.rt-section,.rt-footer,.rt-cta{padding-left:32px;padding-right:32px;}
          .rt-hero{grid-template-columns:1fr;padding-top:100px;}
          .rt-hero-right{margin-top:40px;justify-content:flex-start;}
          .rt-menu-wrap{grid-template-columns:1fr;}
          .rt-menu-preview{position:static;}
          .rt-footer-grid{grid-template-columns:1fr 1fr;gap:28px;}
        }
        @media(max-width:640px){
          .rt-nav{padding:0 20px;height:58px;}
          .rt-links{display:none;}
          .rt-hero,.rt-section,.rt-cta,.rt-footer{padding-left:20px;padding-right:20px;}
          .rt-reviews-grid{grid-template-columns:1fr;}
          .rt-hero-stats{gap:20px;}
          .rt-footer-grid{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="rt">

        {/* voltar */}
        <div style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(7,5,26,.95)",borderBottom:`1px solid ${NEON_PINK}20`,padding:"5px 24px",display:"flex",justifyContent:"space-between"}}>
          <Link href="/" style={{color:NEON_BLUE,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Orbitron',monospace"}}>← Catálogo</Link>
          <span style={{color:MUTED,fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'Orbitron',monospace"}}>Sistema v2.087</span>
        </div>

        {/* ══ NAV ══ */}
        <nav className="rt-nav">
          <span className="rt-logo bebas">RETRO<span>BURGER</span></span>
          <div className="rt-links">
            <a href="#">Cardápio</a>
            <a href="#">Sobre</a>
            <a href="#">Delivery</a>
            <a href="#">Contato</a>
          </div>
          <button className="rt-order-btn">Pedir Agora</button>
        </nav>

        {/* ══ HERO ══ */}
        <section className="rt-hero">
          <div className="rt-hero-left">
            <div className="rt-era rt-hero-badge">
              <span className="rt-era-dot"/>
              <span>Aberto agora · Delivery 24h</span>
            </div>
            <h1 className="rt-h1 bebas rt-hero-h1">
              <span className="pink">O FUTURO</span><br/>
              <span>TEM</span><br/>
              <span className="blue">SABOR.</span>
            </h1>
            <p className="rt-h1-sub bebas rt-hero-h1">Hamburgeria Retrô-Futurista</p>
            <p className="rt-hero-body rt-hero-sub">
              Burgers artesanais criados no cruzamento entre a nostalgia dos anos 80 e a precisão do futuro. Cada mordida é uma viagem no tempo — sem volta.
            </p>
            <div className="rt-hero-btns rt-hero-btns">
              <button className="rt-btn-main orbit">⚡ Ver Cardápio</button>
              <button className="rt-btn-ghost">Nossa História →</button>
            </div>
            <div className="rt-hero-stats rt-hero-btns">
              {[["4.9★","Avaliação"],["50K+","Pedidos"],["2087","Ano do sabor"]].map(([v,l])=>(
                <div key={l}>
                  <div className="rt-stat-val orbit">{v}</div>
                  <div className="rt-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rt-hero-right">
            <div className="rt-hero-glow"/>
            <div className="rt-hero-img-wrap rt-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/retro-burger1.jpg" alt="RetroB urger"/>
            </div>
          </div>
        </section>

        {/* ══ MARQUEE ══ */}
        <div className="rt-ticker">
          <div className="rt-ticker-inner">
            {["O FUTURO TEM SABOR","ENTREGA EM 30 MIN","SMASH BURGERS ARTESANAIS","ABERTO ATÉ A MADRUGADA","DESDE 2020","O FUTURO TEM SABOR","ENTREGA EM 30 MIN","SMASH BURGERS ARTESANAIS","ABERTO ATÉ A MADRUGADA","DESDE 2020"].map((t,i)=>(
              <span key={i} className="rt-ticker-item orbit">{t}</span>
            ))}
          </div>
        </div>

        {/* ══ MENU ══ */}
        <section className="rt-section">
          <p className="rt-section-tag">Cardápio 2087</p>
          <h2 className="rt-title bebas">Escolha seu <em>destino.</em></h2>
          <div className="rt-menu-wrap">
            <div className="rt-menu-tabs">
              {menu.map((item, i) => (
                <div key={item.name} className={`rt-menu-tab${activeMenu===i?" active":""}`}
                  style={{"--c":item.color} as React.CSSProperties}
                  onClick={()=>setActiveMenu(i)}>
                  <div className="rt-tab-color" style={{background:item.color, boxShadow:`0 0 8px ${item.color}`}}/>
                  <div style={{flex:1}}>
                    <div className="rt-tab-name orbit" style={{fontSize:14}}>{item.name}</div>
                    <div className="rt-tab-price orbit">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rt-menu-preview">
              <div className="rt-preview-card" style={{"--c":menu[activeMenu].color} as React.CSSProperties}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={menu[activeMenu].img} alt={menu[activeMenu].name}/>
                <div className="rt-preview-body">
                  <p className="rt-preview-tag orbit">{menu[activeMenu].tag}</p>
                  <div className="rt-preview-name bebas">{menu[activeMenu].name}</div>
                  <p className="rt-preview-desc">{menu[activeMenu].desc}</p>
                  <div className="rt-preview-price orbit">{menu[activeMenu].price}</div>
                  <button className="rt-add-btn orbit">Adicionar ao Pedido →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS ══ */}
        <section className="rt-section" style={{background:"#0A0818",borderTop:`1px solid ${NEON_PURP}15`}}>
          <p className="rt-section-tag">Transmissões</p>
          <h2 className="rt-title bebas">O que dizem <em>os viajantes.</em></h2>
          <div className="rt-reviews-grid">
            {reviews.map(r=>(
              <div key={r.name} className="rt-review-card">
                <div className="rt-review-stars">{[...Array(r.stars)].map((_,i)=><span key={i} className="rt-review-star">★</span>)}</div>
                <p className="rt-review-text">"{r.text}"</p>
                <div className="rt-review-name orbit">{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="rt-cta">
          <p className="rt-section-tag" style={{textAlign:"center",marginBottom:20}}>Delivery Ativo</p>
          <h2 className="rt-cta-title bebas">
            PRONTO PARA<br/>
            <span className="glow">VIAJAR?</span>
          </h2>
          <p style={{fontSize:16,color:MUTED,maxWidth:480,margin:"0 auto 36px",lineHeight:1.7,position:"relative",zIndex:2}}>
            Peça agora e receba seu hambúrguer do futuro em menos de 30 minutos. Qualquer lugar da cidade.
          </p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:2}}>
            <button className="rt-btn-main orbit">⚡ Pedir Agora</button>
            <button className="rt-btn-ghost orbit">Ver Cardápio Completo</button>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="rt-footer">
          <div className="rt-footer-grid">
            <div>
              <div className="bebas" style={{fontSize:28,color:CHROME,letterSpacing:4,marginBottom:12}}>
                RETRO<span style={{color:NEON_PINK,textShadow:`0 0 10px ${NEON_PINK}`}}>BURGER</span>
              </div>
              <p style={{fontSize:13,color:MUTED,lineHeight:1.7,maxWidth:240}}>O sabor que o futuro prometeu. Entregue no presente.</p>
            </div>
            {[
              ["Cardápio",["Neon Smash","Chrome Stack","Galaxy Crispy","Retrowave Fries"]],
              ["Horários",["Seg–Sex: 11h–01h","Sab–Dom: 11h–03h","Feriados: 12h–02h","Delivery 24h"]],
              ["Contato",["📍 São Paulo, SP","📞 (11) 9876-5432","✉ oi@retro.burger"]],
            ].map(([t,ls])=>(
              <div key={t as string} className="rt-footer-col">
                <h4>{t as string}</h4>
                {(ls as string[]).map(l=><a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <div style={{borderTop:`1px solid ${CHROME}08`,paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
            <span style={{fontSize:11,color:MUTED,fontFamily:"'Orbitron',monospace",letterSpacing:"0.1em"}}>© 2025 RetroBurger · Sistema v2.087</span>
            <span style={{fontSize:11,color:NEON_PINK,fontFamily:"'Orbitron',monospace",letterSpacing:"0.1em"}}>Feito por TenTech ◆</span>
          </div>
        </footer>

      </div>
    </>
  );
}
