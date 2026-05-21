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

        /* ── NAV ── */
        .bd-nav { display: flex; align-items: center; justify-content: space-between; padding: 0 72px; height: 72px; position: relative; z-index: 10; }
        .bd-nav-links { display: flex; gap: 40px; }
        .bd-nav-link { color: rgba(255,255,255,0.7); font-size: 15px; font-weight: 500; transition: color .2s; }
        .bd-nav-link:hover, .bd-nav-link.active { color: #fff; }
        .bd-search-btn { background: ${ORANGE}; border: none; border-radius: 999px; padding: 10px 20px; color: #fff; font-size: 14px; font-family: inherit; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        /* ── HERO ── */
        .bd-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 72px); align-items: center; padding: 0 72px; position: relative; overflow: hidden; }
        .bd-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 100% at 70% 60%, #3d1a08 0%, #1a0900 55%, #100500 100%);
          z-index: 0;
        }
        .bd-hero-left { position: relative; z-index: 2; padding-right: 40px; }
        .bd-hero-right { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; }

        /* ── BADGE PEOPLE TRUST ── */
        .bd-trust { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 7px 16px; font-size: 13px; color: rgba(255,255,255,0.85); margin-bottom: 24px; backdrop-filter: blur(6px); }

        /* ── HEADING ── */
        .bd-heading { font-size: clamp(32px, 4vw, 54px); font-weight: 800; line-height: 1.15; margin-bottom: 18px; }
        .bd-heading .orange { color: ${ORANGE}; }

        /* ── SUBTITLE ── */
        .bd-subtitle { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; max-width: 420px; margin-bottom: 36px; }

        /* ── BUTTONS ── */
        .bd-buttons { display: flex; align-items: center; gap: 24px; }
        .bd-btn-primary { background: ${ORANGE}; border: none; border-radius: 999px; padding: 14px 32px; color: #fff; font-size: 15px; font-weight: 600; font-family: inherit; cursor: pointer; transition: all .2s; }
        .bd-btn-primary:hover { background: #e05e00; transform: translateY(-2px); }
        .bd-btn-text { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 15px; font-weight: 500; cursor: pointer; background: none; border: none; font-family: inherit; }
        .bd-btn-play { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 12px; }

        /* ── HERO IMAGE ── */
        .bd-hero-img { width: 100%; max-width: 580px; height: clamp(320px, 55vh, 580px); object-fit: cover; object-position: center; border-radius: 24px; display: block; filter: drop-shadow(0 20px 60px rgba(0,0,0,0.7)); }

        /* ── 60% BADGE ── */
        .bd-discount { position: absolute; top: -20px; right: -10px; width: 100px; height: 100px; background: ${ORANGE}; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(255,107,0,0.45); border: 3px solid rgba(255,255,255,0.25); }
        .bd-discount-pct { font-size: 26px; font-weight: 800; line-height: 1; }
        .bd-discount-label { font-size: 11px; font-weight: 600; opacity: .9; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .bd-nav { padding: 0 32px; }
          .bd-nav-links { gap: 24px; }
          .bd-hero { grid-template-columns: 1fr; padding: 40px 32px 32px; text-align: center; }
          .bd-hero-left { padding-right: 0; display: flex; flex-direction: column; align-items: center; }
          .bd-subtitle { text-align: center; }
          .bd-hero-right { margin-top: 32px; }
          .bd-hero-img { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .bd-nav { padding: 0 20px; height: 60px; }
          .bd-nav-links { display: none; }
          .bd-hero { padding: 32px 20px 40px; }
          .bd-heading { font-size: clamp(28px, 8vw, 40px); }
          .bd-buttons { flex-direction: column; align-items: center; gap: 16px; }
        }
      `}</style>

      <div className="bd">

        {/* voltar */}
        <div style={{ background:"rgba(0,0,0,0.5)", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"7px 24px" }}>
          <Link href="/" style={{ color:ORANGE, fontSize:11, letterSpacing:1.5 }}>← VOLTAR AO CATÁLOGO</Link>
        </div>

        {/* ══════ NAV ══════ */}
        <nav className="bd-nav">
          {/* logo */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:32, height:32, borderRadius:8, background:ORANGE, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>🍔</div>
            <span style={{ fontWeight:700, fontSize:17, color:"#fff" }}>Green Food</span>
          </div>

          <div className="bd-nav-links">
            <a href="#" className="bd-nav-link active">Home</a>
            <a href="#" className="bd-nav-link">Foods</a>
            <a href="#" className="bd-nav-link">Offers</a>
            <a href="#" className="bd-nav-link">Contact us</a>
          </div>

          <button className="bd-search-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search
          </button>
        </nav>

        {/* ══════ HERO ══════ */}
        <section className="bd-hero">
          {/* left */}
          <div className="bd-hero-left">
            <div className="bd-trust">
              <span>😊</span> people trust us
            </div>

            <h1 className="bd-heading">
              <span className="orange">Most Fastest Food</span><br/>
              Delivery Service
            </h1>

            <p className="bd-subtitle">
              Get the best quality and most delicious burgers in the world you can get then all at Green Food...
            </p>

            <div className="bd-buttons">
              <button className="bd-btn-primary">Order Food</button>
              <button className="bd-btn-text">
                <span className="bd-btn-play">▶</span>
                View menu
              </button>
            </div>
          </div>

          {/* right */}
          <div className="bd-hero-right">
            <div style={{ position:"relative", display:"inline-block" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/burger-delivery-hero.jpg"
                alt="Burger"
                className="bd-hero-img"
              />
              {/* 60% Discount badge */}
              <div className="bd-discount">
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
