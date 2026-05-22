"use client";
import { useState } from "react";
import Link from "next/link";

/* ── Design System: Luxury / Editorial ── */
const ALABASTER = "#F9F8F6";
const CHARCOAL  = "#1A1A1A";
const MUTED_BG  = "#EBE5DE";
const MUTED_FG  = "#6C6863";
const GOLD      = "#D4AF37";

const products = [
  { name: "Vestido Linho Creme",   price: "R$ 890",  tag: "Essenciais",  img: "/acazis-p1.jpg" },
  { name: "Blazer Alfaiataria",    price: "R$ 1.290", tag: "Coleção",     img: "/acazis-p2.jpg" },
  { name: "Calça Palazzo Bege",   price: "R$ 720",  tag: "Clássicos",   img: "/acazis-p3.jpg" },
  { name: "Conjunto Tricô Off",    price: "R$ 980",  tag: "Inverno",     img: "/acazis-p4.jpg" },
];

const testimonials = [
  { name: "Marina Alves",    city: "São Paulo",      text: "A Acazis transformou meu guarda-roupa. Cada peça tem qualidade impecável e um caimento perfeito. Uso e recomendo com admiração.", img: "/acazis-t1.jpg" },
  { name: "Beatriz Corrêa",  city: "Rio de Janeiro", text: "Recebi meu pedido com embalagem lindíssima. As roupas são exatamente como nas fotos — sofisticadas e atemporais.", img: "/acazis-t2.jpg" },
  { name: "Camila Nogueira", city: "Belo Horizonte", text: "Finalmente encontrei uma marca que entende elegância sem exageros. O linho creme é minha peça favorita desta temporada.", img: "/acazis-t3.jpg" },
];

export default function Acazis() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; background: ${ALABASTER}; }
        ::-webkit-scrollbar-thumb { background: ${MUTED_BG}; }

        .az { font-family: 'Inter', sans-serif; background: ${ALABASTER}; color: ${CHARCOAL}; overflow-x: hidden; }
        .az a { text-decoration: none; color: inherit; }
        .serif { font-family: 'Playfair Display', serif; }

        /* ── paper grain ── */
        .az::before {
          content: '';
          position: fixed; inset: 0; z-index: 50; pointer-events: none;
          opacity: .02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        /* ── vertical gridlines ── */
        .az-gridline { position: fixed; top: 0; bottom: 0; width: 1px; background: ${CHARCOAL}20; z-index: 0; pointer-events: none; }

        /* huashu animations */
        @keyframes fadeUp   { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes slideIn  { from { transform:translateX(-100%) } to { transform:translateX(0) } }
        @keyframes scaleIn  { from { opacity:0; transform:scale(.96) } to { opacity:1; transform:scale(1) } }

        .az-hero-badge  { animation: fadeIn  .7s ease .15s both }
        .az-hero-h1     { animation: fadeUp  .9s ease .3s both }
        .az-hero-sub    { animation: fadeUp  .9s ease .5s both }
        .az-hero-btns   { animation: fadeUp  .9s ease .65s both }
        .az-hero-img    { animation: scaleIn 1.1s ease .2s both }

        /* ── NAV ── */
        .az-nav {
          position: fixed; top: 28px; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 64px; height: 68px;
          background: rgba(249,248,246,.92); backdrop-filter: blur(16px);
          border-bottom: 1px solid ${CHARCOAL}15;
        }
        .az-logo { font-size: 22px; font-weight: 400; letter-spacing: .35em; text-transform: uppercase; font-family: 'Playfair Display', serif; }
        .az-links { display: flex; gap: 40px; }
        .az-links a { font-size: 11px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: ${MUTED_FG}; transition: color 500ms ease; }
        .az-links a:hover { color: ${CHARCOAL}; }
        .az-nav-btn {
          position: relative; overflow: hidden;
          background: ${CHARCOAL}; color: ${ALABASTER};
          border: none; padding: 12px 28px;
          font-size: 10px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
          font-family: inherit; cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
          transition: box-shadow 500ms ease;
        }
        .az-nav-btn:hover { box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .az-nav-btn .gold-slide {
          position: absolute; inset: 0; background: ${GOLD};
          transform: translateX(-100%);
          transition: transform 500ms cubic-bezier(.25,.46,.45,.94);
          z-index: 0;
        }
        .az-nav-btn:hover .gold-slide { transform: translateX(0); }
        .az-nav-btn span { position: relative; z-index: 1; }

        /* ── HERO ── */
        .az-hero {
          position: relative; min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: end; padding: 0;
          padding-top: 96px; overflow: hidden;
          background: ${ALABASTER};
        }
        .az-hero-left {
          padding: 0 0 80px 64px;
          display: flex; flex-direction: column; justify-content: flex-end;
          position: relative; z-index: 2;
        }
        .az-hero-overline {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 28px;
        }
        .az-hero-line { width: 40px; height: 1px; background: ${GOLD}; }
        .az-overline-text { font-size: 10px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: ${MUTED_FG}; }
        .az-h1 {
          font-size: clamp(52px, 6vw, 88px);
          font-weight: 400; line-height: .95;
          letter-spacing: -.02em; margin-bottom: 28px;
          font-family: 'Playfair Display', serif;
        }
        .az-h1 em { font-style: italic; color: ${GOLD}; }
        .az-hero-body { font-size: 15px; color: ${MUTED_FG}; line-height: 1.75; max-width: 360px; margin-bottom: 40px; }
        .az-hero-btns { display: flex; gap: 14px; align-items: center; }
        .az-btn-primary {
          position: relative; overflow: hidden;
          background: ${CHARCOAL}; color: ${ALABASTER};
          border: none; padding: 16px 36px;
          font-size: 10px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
          font-family: inherit; cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
          transition: box-shadow 500ms ease;
        }
        .az-btn-primary:hover { box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .az-btn-primary .g { position:absolute;inset:0;background:${GOLD};transform:translateX(-100%);transition:transform 500ms cubic-bezier(.25,.46,.45,.94);z-index:0; }
        .az-btn-primary:hover .g { transform:translateX(0); }
        .az-btn-primary span { position:relative;z-index:1; }
        .az-btn-secondary {
          background: transparent; color: ${CHARCOAL};
          border: 1px solid ${CHARCOAL}; padding: 16px 36px;
          font-size: 10px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
          font-family: inherit; cursor: pointer;
          transition: background 500ms ease, color 500ms ease;
        }
        .az-btn-secondary:hover { background: ${CHARCOAL}; color: ${ALABASTER}; }

        /* hero image */
        .az-hero-right {
          position: relative; height: 100%;
          min-height: calc(100vh - 96px); overflow: hidden;
        }
        .az-hero-right img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: grayscale(1); transition: filter 2000ms ease;
        }
        .az-hero-right:hover img { filter: grayscale(0); }
        .az-hero-right::before {
          content: ''; position: absolute; inset: 0; z-index: 1;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
        }
        /* vertical text */
        .az-vert-text {
          position: absolute; left: -40px; top: 50%; z-index: 3;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-size: 9px; font-weight: 500; letter-spacing: .25em; text-transform: uppercase;
          color: ${ALABASTER}80;
        }

        /* ── SECTION ── */
        .az-section { padding: 100px 64px; position: relative; z-index: 1; }
        .az-section-alt { background: ${CHARCOAL}; color: ${ALABASTER}; }
        .az-tag { font-size: 10px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: ${MUTED_FG}; margin-bottom: 12px; }
        .az-tag-light { color: ${ALABASTER}60; }
        .az-title { font-size: clamp(32px, 4vw, 56px); font-weight: 400; line-height: 1; letter-spacing: -.01em; margin-bottom: 0; font-family: 'Playfair Display', serif; }
        .az-title em { font-style: italic; color: ${GOLD}; }

        /* ── PRODUCTS ── */
        .az-products-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; margin-top: 56px; }
        .az-product-card { position: relative; overflow: hidden; cursor: pointer; background: ${MUTED_BG}; }
        .az-product-card .img-wrap { aspect-ratio: 3/4; overflow: hidden; }
        .az-product-card img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(1); transition: filter 1500ms ease, transform 1500ms ease; }
        .az-product-card:hover img { filter: grayscale(0); transform: scale(1.04); }
        .az-product-info { padding: 20px 16px; border-top: 1px solid ${CHARCOAL}15; }
        .az-product-tag { font-size: 9px; font-weight: 500; letter-spacing: .25em; text-transform: uppercase; color: ${MUTED_FG}; margin-bottom: 6px; }
        .az-product-name { font-size: 15px; font-weight: 400; font-family: 'Playfair Display', serif; margin-bottom: 6px; }
        .az-product-price { font-size: 13px; color: ${MUTED_FG}; }
        .az-product-cta { margin-top: 12px; font-size: 9px; letter-spacing: .2em; text-transform: uppercase; color: ${GOLD}; font-weight: 500; opacity: 0; transition: opacity 300ms ease; }
        .az-product-card:hover .az-product-cta { opacity: 1; }

        /* ── ABOUT ── */
        .az-about-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 80px; align-items: center; }
        .az-dropcap::first-letter { font-family: 'Playfair Display', serif; font-size: 5rem; line-height: .8; float: left; margin-right: 12px; color: ${GOLD}; }
        .az-about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 48px; padding-top: 48px; border-top: 1px solid ${ALABASTER}20; }
        .az-stat-val { font-size: clamp(32px,3vw,48px); font-weight: 400; font-family: 'Playfair Display', serif; color: ${ALABASTER}; margin-bottom: 6px; }
        .az-stat-lbl { font-size: 11px; color: ${ALABASTER}55; letter-spacing: .15em; text-transform: uppercase; }
        .az-about-img-wrap { position: relative; }
        .az-about-img-wrap img { width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block; filter: grayscale(1); transition: filter 2000ms ease; box-shadow: 0 8px 32px rgba(0,0,0,.12); }
        .az-about-img-wrap:hover img { filter: grayscale(0); }
        .az-about-img-wrap::after { content: ''; position: absolute; inset: 0; box-shadow: inset 0 0 0 1px rgba(0,0,0,.06); pointer-events: none; }

        /* ── TESTIMONIALS ── */
        .az-reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; margin-top: 56px; }
        .az-review-card { padding: 40px; border-left: 1px solid ${CHARCOAL}12; transition: all 500ms ease; cursor: default; }
        .az-review-card:first-child { border-left: none; }
        .az-review-card:hover { border-left-color: ${GOLD}; padding-left: 48px; }
        .az-review-stars { display: flex; gap: 4px; margin-bottom: 24px; }
        .az-review-star { font-size: 12px; color: ${GOLD}; transition: transform 300ms ease; }
        .az-review-card:hover .az-review-star { transform: scale(1.15); }
        .az-review-text { font-size: 15px; line-height: 1.75; font-family: 'Playfair Display', serif; font-style: italic; color: ${MUTED_FG}; margin-bottom: 28px; }
        .az-review-author { display: flex; align-items: center; gap: 14px; }
        .az-review-avatar { width: 44px; height: 44px; border-radius: 0; overflow: hidden; flex-shrink: 0; filter: grayscale(1); transition: filter 1500ms ease; }
        .az-review-card:hover .az-review-avatar { filter: grayscale(0); }
        .az-review-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .az-review-name { font-size: 13px; font-weight: 500; letter-spacing: .05em; transition: color 500ms ease; }
        .az-review-card:hover .az-review-name { color: ${GOLD}; }
        .az-review-city { font-size: 11px; color: ${MUTED_FG}; letter-spacing: .1em; text-transform: uppercase; margin-top: 2px; }

        /* ── NEWSLETTER ── */
        .az-nl-form { display: flex; align-items: flex-end; gap: 0; max-width: 520px; }
        .az-nl-input-wrap { flex: 1; }
        .az-nl-label { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: ${MUTED_FG}; margin-bottom: 8px; display: block; }
        .az-nl-input {
          width: 100%; height: 48px; background: transparent;
          border: none; border-bottom: 1px solid ${CHARCOAL};
          padding: 0; font-family: 'Playfair Display', serif; font-style: italic;
          font-size: 15px; color: ${CHARCOAL}; outline: none;
          transition: border-color 500ms ease;
        }
        .az-nl-input::placeholder { color: ${MUTED_FG}; }
        .az-nl-input:focus { border-bottom-color: ${GOLD}; }
        .az-nl-submit {
          position: relative; overflow: hidden;
          height: 48px; padding: 0 32px;
          background: ${CHARCOAL}; color: ${ALABASTER};
          border: none; font-size: 10px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase;
          font-family: inherit; cursor: pointer;
          transition: box-shadow 500ms ease;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
        }
        .az-nl-submit:hover { box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .az-nl-submit .g { position:absolute;inset:0;background:${GOLD};transform:translateX(-100%);transition:transform 500ms cubic-bezier(.25,.46,.45,.94);z-index:0; }
        .az-nl-submit:hover .g { transform:translateX(0); }
        .az-nl-submit span { position:relative;z-index:1; }

        /* ── FOOTER ── */
        .az-footer { background: ${CHARCOAL}; color: ${ALABASTER}; padding: 64px 64px 36px; }
        .az-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 52px; }
        .az-footer-col h4 { font-size: 10px; font-weight: 500; letter-spacing: .25em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 20px; }
        .az-footer-col a { display: block; font-size: 13px; color: ${ALABASTER}55; margin-bottom: 10px; transition: color 300ms ease; }
        .az-footer-col a:hover { color: ${ALABASTER}; }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px) {
          .az-nav { padding:0 32px; }
          .az-hero { grid-template-columns:1fr; }
          .az-hero-right { min-height:60vw; }
          .az-hero-left { padding: 0 32px 60px; }
          .az-vert-text { display:none; }
          .az-section { padding:72px 32px; }
          .az-products-grid { grid-template-columns:1fr 1fr; }
          .az-about-grid { grid-template-columns:1fr; gap:48px; }
          .az-footer { padding:48px 32px 28px; }
          .az-footer-grid { grid-template-columns:1fr 1fr; gap:28px; }
        }
        @media (max-width:640px) {
          .az-nav { padding:0 20px; height:58px; top:20px; }
          .az-links { display:none; }
          .az-hero { padding-top:80px; }
          .az-hero-left { padding:0 20px 48px; }
          .az-h1 { font-size:clamp(40px,10vw,60px); }
          .az-section { padding:56px 20px; }
          .az-products-grid { grid-template-columns:1fr 1fr; gap:2px; }
          .az-reviews-grid { grid-template-columns:1fr; }
          .az-review-card { border-left:none; border-top:1px solid ${CHARCOAL}12; padding:32px 0; }
          .az-review-card:hover { padding-left:0; padding-top:32px; }
          .az-nl-form { flex-direction:column; }
          .az-nl-submit { width:100%; height:48px; margin-top:16px; }
          .az-footer { padding:40px 20px 24px; }
          .az-footer-grid { grid-template-columns:1fr; gap:24px; }
          .az-about-stats { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="az">

        {/* gridlines */}
        <div className="az-gridline" style={{ left: "8.33%" }}/>
        <div className="az-gridline" style={{ left: "33.33%" }}/>
        <div className="az-gridline" style={{ left: "66.66%" }}/>
        <div className="az-gridline" style={{ right: "8.33%" }}/>

        {/* voltar */}
        <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:ALABASTER, borderBottom:`1px solid ${CHARCOAL}12`, padding:"7px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Link href="/" style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:MUTED_FG, fontWeight:500 }}>← Catálogo TenTech</Link>
          <span style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:MUTED_FG }}>Editorial / Vol. 01</span>
        </div>

        {/* ══ NAV ══ */}
        <nav className="az-nav">
          <span className="az-logo">Acazis</span>
          <div className="az-links">
            <a href="#">Coleção</a>
            <a href="#">Sobre</a>
            <a href="#">Atelier</a>
            <a href="#">Contato</a>
          </div>
          <button className="az-nav-btn">
            <span className="gold-slide"/>
            <span>Explorar</span>
          </button>
        </nav>

        {/* ══ HERO ══ */}
        <section className="az-hero">
          <div className="az-hero-left">
            <div className="az-hero-overline az-hero-badge">
              <div className="az-hero-line"/>
              <span className="az-overline-text">Nova Coleção · Primavera 2025</span>
            </div>
            <h1 className="az-h1 az-hero-h1">
              Elegância<br/>
              que <em>veste</em><br/>
              a alma.
            </h1>
            <p className="az-hero-body az-hero-sub">
              Roupas criadas com intenção. Tecidos selecionados, cortes precisos e um estilo que atravessa temporadas sem pedir licença.
            </p>
            <div className="az-hero-btns">
              <button className="az-btn-primary">
                <span className="g"/>
                <span>Ver Coleção</span>
              </button>
              <button className="az-btn-secondary">Nossa História</button>
            </div>
          </div>

          <div className="az-hero-right az-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/acazis-hero.jpg" alt="Acazis Coleção"/>
            <span className="az-vert-text">Acazis · Primavera 2025</span>
          </div>
        </section>

        {/* ══ COLEÇÃO ══ */}
        <section className="az-section">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
            <div>
              <p className="az-tag">Coleção</p>
              <h2 className="az-title">Peças <em>selecionadas</em></h2>
            </div>
            <a href="#" style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:MUTED_FG, fontWeight:500, borderBottom:`1px solid ${CHARCOAL}20`, paddingBottom:4, transition:"color 300ms ease, border-color 300ms ease" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.color=GOLD; (e.currentTarget as HTMLAnchorElement).style.borderColor=GOLD; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.color=MUTED_FG; (e.currentTarget as HTMLAnchorElement).style.borderColor=`${CHARCOAL}20`; }}>
              Ver tudo →
            </a>
          </div>

          <div className="az-products-grid">
            {products.map(p => (
              <div key={p.name} className="az-product-card">
                <div className="img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name}/>
                </div>
                <div className="az-product-info">
                  <div className="az-product-tag">{p.tag}</div>
                  <div className="az-product-name">{p.name}</div>
                  <div className="az-product-price">{p.price}</div>
                  <div className="az-product-cta">Adicionar ao carrinho →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SOBRE ══ */}
        <section className="az-section az-section-alt">
          <div className="az-about-grid">
            <div>
              <p className="az-tag az-tag-light">Manifesto</p>
              <h2 className="az-title" style={{ color:ALABASTER, marginBottom:32 }}>A arte de <em>vestir</em> com propósito.</h2>
              <p className="az-dropcap" style={{ fontSize:16, lineHeight:1.8, color:`${ALABASTER}80`, marginBottom:20 }}>
                Acazis nasceu da convicção de que moda é expressão, não tendência. Cada peça é pensada para durar — no tecido, no corte e no significado que carrega.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:`${ALABASTER}60` }}>
                Trabalhamos com fornecedores responsáveis, costura artesanal e materiais de alto padrão para criar roupas que você vai querer usar por anos. Sem desperdício. Sem pressa.
              </p>
              <div className="az-about-stats">
                {[["2018","Fundação"],["100%","Tecidos naturais"],["12","Peças por coleção"],["3×","Mais durável"]].map(([v,l]) => (
                  <div key={l}>
                    <div className="az-stat-val">{v}</div>
                    <div className="az-stat-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="az-about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acazis-p2.jpg" alt="Atelier Acazis"/>
            </div>
          </div>
        </section>

        {/* ══ DEPOIMENTOS ══ */}
        <section className="az-section">
          <p className="az-tag">Clientes</p>
          <h2 className="az-title">O que dizem <em>sobre nós</em></h2>
          <div className="az-reviews-grid">
            {testimonials.map(r => (
              <div key={r.name} className="az-review-card">
                <div className="az-review-stars">
                  {[...Array(5)].map((_,i) => <span key={i} className="az-review-star">★</span>)}
                </div>
                <p className="az-review-text">"{r.text}"</p>
                <div className="az-review-author">
                  <div className="az-review-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.img} alt={r.name}/>
                  </div>
                  <div>
                    <div className="az-review-name">{r.name}</div>
                    <div className="az-review-city">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ NEWSLETTER ══ */}
        <section className="az-section" style={{ background:MUTED_BG, borderTop:`1px solid ${CHARCOAL}10` }}>
          <div style={{ maxWidth:640 }}>
            <p className="az-tag">Newsletter</p>
            <h2 className="az-title" style={{ marginBottom:16 }}>Faça parte do <em>círculo</em>.</h2>
            <p style={{ fontSize:15, color:MUTED_FG, lineHeight:1.75, marginBottom:40 }}>
              Lançamentos exclusivos, bastidores do atelier e acesso antecipado às novas coleções. Sem spam — apenas o que realmente importa.
            </p>
            <div className="az-nl-form">
              <div className="az-nl-input-wrap">
                <label className="az-nl-label">Seu e-mail</label>
                <input
                  className="az-nl-input"
                  type="email"
                  placeholder="nome@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button className="az-nl-submit">
                <span className="g"/>
                <span>Inscrever</span>
              </button>
            </div>
            <p style={{ fontSize:10, color:MUTED_FG, marginTop:16, letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Sem spam · Cancele quando quiser
            </p>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="az-footer">
          <div className="az-footer-grid">
            <div>
              <div style={{ fontSize:24, fontFamily:"'Playfair Display',serif", fontWeight:400, letterSpacing:".3em", textTransform:"uppercase", marginBottom:16 }}>Acazis</div>
              <p style={{ fontSize:13, color:`${ALABASTER}50`, lineHeight:1.75, maxWidth:260 }}>
                Moda com intenção. Criada para durar além das temporadas.
              </p>
            </div>
            {[
              ["Loja",     ["Coleção Atual","Lançamentos","Essenciais","Clássicos"]],
              ["Marca",    ["Nossa História","Atelier","Responsabilidade","Imprensa"]],
              ["Suporte",  ["Trocas e Devoluções","Guia de Tamanhos","Contato","FAQ"]],
            ].map(([t, ls]) => (
              <div key={t as string} className="az-footer-col">
                <h4>{t as string}</h4>
                {(ls as string[]).map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop:`1px solid ${ALABASTER}10`, paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
            <span style={{ fontSize:11, color:`${ALABASTER}35`, letterSpacing:"0.1em" }}>© 2025 Acazis. Todos os direitos reservados.</span>
            <span style={{ fontSize:11, color:GOLD, letterSpacing:"0.1em" }}>Feito por TenTech</span>
          </div>
        </footer>

      </div>
    </>
  );
}
