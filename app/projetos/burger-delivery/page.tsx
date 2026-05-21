"use client";
import Link from "next/link";

const ORANGE = "#FF6B00";
const BG     = "#1a0900";

export default function BurgerDelivery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .bd { font-family: 'Poppins', sans-serif; background: ${BG}; color: #fff; min-height: 100vh; overflow-x: hidden; }
        .bd a { text-decoration: none; }

        /* ── HUASHU ANIMATIONS ── */
        @keyframes bd-fadeUp  { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes bd-fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes bd-scaleIn { from { opacity:0; transform:scale(.94) } to { opacity:1; transform:scale(1) } }
        @keyframes bd-badgePop{ from { opacity:0; transform:scale(.6) rotate(-10deg) } to { opacity:1; transform:scale(1) rotate(0deg) } }

        .bd-anim-trust   { animation: bd-fadeIn  .6s ease both; animation-delay: .15s }
        .bd-anim-title   { animation: bd-fadeUp  .7s ease both; animation-delay: .25s }
        .bd-anim-sub     { animation: bd-fadeUp  .7s ease both; animation-delay: .4s }
        .bd-anim-btns    { animation: bd-fadeUp  .7s ease both; animation-delay: .55s }
        .bd-anim-img     { animation: bd-scaleIn .9s ease both; animation-delay: .2s }
        .bd-anim-badge   { animation: bd-badgePop .6s cubic-bezier(.34,1.56,.64,1) both; animation-delay: .7s }

        /* ── NAV ── */
        .bd-nav { display:flex; align-items:center; justify-content:space-between; padding:0 72px; height:72px; position:relative; z-index:10; }
        .bd-nav-links { display:flex; gap:40px; }
        .bd-nav-link { color:rgba(255,255,255,.72); font-size:15px; font-weight:500; transition:color .2s; }
        .bd-nav-link:hover { color:#fff; }
        .bd-nav-link.active { color:#fff; font-weight:600; }
        .bd-search-btn { background:${ORANGE}; border:none; border-radius:999px; padding:10px 22px; color:#fff; font-size:14px; font-family:inherit; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all .2s; }
        .bd-search-btn:hover { background:#e05e00; transform:translateY(-2px); box-shadow:0 6px 20px rgba(255,107,0,.4); }

        /* ── HERO ── */
        .bd-hero { display:grid; grid-template-columns:1fr 1fr; min-height:calc(100vh - 72px); align-items:center; padding:0 72px; position:relative; overflow:hidden; }
        .bd-hero::before {
          content:'';
          position:absolute; inset:0;
          background:radial-gradient(ellipse 75% 90% at 68% 55%, #3d1a06 0%, #1a0900 55%, #0d0400 100%);
          z-index:0;
        }
        .bd-hero-left  { position:relative; z-index:2; padding-right:40px; }
        .bd-hero-right { position:relative; z-index:2; display:flex; align-items:center; justify-content:center; }

        /* ── TRUST BADGE ── */
        .bd-trust { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.16); border-radius:999px; padding:7px 16px; font-size:13px; color:rgba(255,255,255,.85); margin-bottom:22px; backdrop-filter:blur(6px); }

        /* ── HEADING ── */
        .bd-heading { font-size:clamp(32px,3.8vw,56px); font-weight:800; line-height:1.12; margin-bottom:16px; letter-spacing:-.02em; text-wrap:pretty; }
        .bd-heading .orange { color:${ORANGE}; }

        /* ── SUBTITLE ── */
        .bd-subtitle { font-size:clamp(14px,1.1vw,16px); color:rgba(255,255,255,.58); line-height:1.75; max-width:400px; margin-bottom:34px; text-wrap:pretty; }

        /* ── BUTTONS ── */
        .bd-buttons { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }
        .bd-btn-primary { background:${ORANGE}; border:none; border-radius:999px; padding:14px 34px; color:#fff; font-size:15px; font-weight:600; font-family:inherit; cursor:pointer; transition:all .25s; box-shadow:0 4px 16px rgba(255,107,0,.35); }
        .bd-btn-primary:hover { background:#e05e00; transform:translateY(-3px); box-shadow:0 10px 28px rgba(255,107,0,.5); }
        .bd-btn-text { display:flex; align-items:center; gap:10px; color:#fff; font-size:15px; font-weight:500; cursor:pointer; background:none; border:none; font-family:inherit; transition:opacity .2s; }
        .bd-btn-text:hover { opacity:.8; }
        .bd-btn-play { width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,.14); display:flex; align-items:center; justify-content:center; font-size:11px; transition:background .2s; }
        .bd-btn-text:hover .bd-btn-play { background:rgba(255,255,255,.22); }

        /* ── HERO IMAGE ── */
        .bd-img-wrap { position:relative; display:inline-block; }
        .bd-hero-img { width:clamp(260px,42vw,560px); height:clamp(260px,42vw,560px); object-fit:cover; object-position:center; border-radius:20px; display:block; filter:drop-shadow(0 24px 64px rgba(0,0,0,.7)); }

        /* ── DISCOUNT BADGE ── */
        .bd-discount { position:absolute; top:-16px; right:-16px; width:96px; height:96px; background:linear-gradient(135deg,#FF8C00,${ORANGE}); border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 8px 28px rgba(255,107,0,.5); border:3px solid rgba(255,255,255,.22); }
        .bd-discount-pct   { font-size:26px; font-weight:800; line-height:1; }
        .bd-discount-label { font-size:11px; font-weight:600; opacity:.92; }

        /* ════════════════════
           TABLET  ≤ 1024px
        ════════════════════ */
        @media (max-width:1024px) {
          .bd-nav   { padding:0 32px; }
          .bd-hero  { padding:48px 32px; grid-template-columns:1fr 1fr; gap:24px; min-height:auto; }
        }

        /* ════════════════════
           MOBILE  ≤ 640px
        ════════════════════ */
        @media (max-width:640px) {
          .bd-nav              { padding:0 20px; height:60px; }
          .bd-nav-links        { display:none; }
          .bd-hero             { grid-template-columns:1fr; padding:32px 20px 48px; text-align:center; }
          .bd-hero-left        { display:flex; flex-direction:column; align-items:center; padding-right:0; }
          .bd-subtitle         { max-width:100%; }
          .bd-hero-right       { margin-top:32px; }
          .bd-hero-img         { width:min(340px,85vw); height:min(320px,80vw); }
          .bd-discount         { top:-10px; right:-10px; width:80px; height:80px; }
          .bd-discount-pct     { font-size:22px; }
        }
      `}</style>

      <div className="bd">

        {/* voltar */}
        <div style={{ background:"rgba(0,0,0,.45)", borderBottom:"1px solid rgba(255,255,255,.07)", padding:"7px 24px" }}>
          <Link href="/" style={{ color:ORANGE, fontSize:11, letterSpacing:1.5 }}>← VOLTAR AO CATÁLOGO</Link>
        </div>

        {/* ══════ NAV ══════ */}
        <nav className="bd-nav">
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:34, height:34, borderRadius:9, background:`linear-gradient(135deg,${ORANGE},#FFB347)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>🍔</div>
            <span style={{ fontWeight:700, fontSize:17 }}>Green Food</span>
          </div>

          <div className="bd-nav-links">
            <a href="#" className="bd-nav-link active">Home</a>
            <a href="#" className="bd-nav-link">Foods</a>
            <a href="#" className="bd-nav-link">Offers</a>
            <a href="#" className="bd-nav-link">Contact us</a>
          </div>

          <button className="bd-search-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search
          </button>
        </nav>

        {/* ══════ HERO ══════ */}
        <section className="bd-hero">
          {/* left */}
          <div className="bd-hero-left">
            <div className="bd-trust bd-anim-trust">
              <span>😊</span> people trust us
            </div>

            <h1 className="bd-heading bd-anim-title">
              <span className="orange">Most Fastest Food</span><br/>
              Delivery Service
            </h1>

            <p className="bd-subtitle bd-anim-sub">
              Get the best quality and most delicious burgers in the world you can get then all at Green Food...
            </p>

            <div className="bd-buttons bd-anim-btns">
              <button className="bd-btn-primary">Order Food</button>
              <button className="bd-btn-text">
                <span className="bd-btn-play">▶</span>
                View menu
              </button>
            </div>
          </div>

          {/* right */}
          <div className="bd-hero-right bd-anim-img">
            <div className="bd-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/burger-delivery-hero.jpg" alt="Burger" className="bd-hero-img" />
              <div className="bd-discount bd-anim-badge">
                <span className="bd-discount-pct">60%</span>
                <span className="bd-discount-label">Discount</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
