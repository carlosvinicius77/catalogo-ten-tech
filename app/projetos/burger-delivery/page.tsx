"use client";
import Link from "next/link";

export default function BurgerDelivery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bd {
          font-family: 'Poppins', sans-serif;
          background: #0f0500;
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .bd a { text-decoration: none; color: inherit; }

        /* ── huashu animations ── */
        @keyframes fadeUp  { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn { from { opacity:0; transform:scale(.93) } to { opacity:1; transform:scale(1) } }
        @keyframes popIn   { from { opacity:0; transform:scale(.5) rotate(-15deg) } to { opacity:1; transform:scale(1) rotate(0deg) } }
        @keyframes float   { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }

        /* ── HERO (full page) ── */
        .bd-page {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* fundo atmosférico warm/dark */
        .bd-page::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 60% 80% at 72% 60%, #3d1200 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 20% 40%, #1a0800 0%, transparent 60%),
            linear-gradient(160deg, #100400 0%, #0f0500 40%, #180800 100%);
        }
        /* vinheta nas bordas */
        .bd-page::after {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background: radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,.55) 100%);
          pointer-events: none;
        }

        /* ── NAV ── */
        .bd-nav {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 72px; height: 72px;
          animation: fadeIn .6s ease both;
        }
        .bd-logo { display:flex; align-items:center; gap:10px; font-weight:700; font-size:18px; }
        .bd-logo-icon { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,#FF6B00,#FF9A3C); display:flex; align-items:center; justify-content:center; font-size:18px; }
        .bd-links { display:flex; gap:44px; align-items:center; }
        .bd-links a { font-size:15px; font-weight:500; color:rgba(255,255,255,.65); transition:color .2s; }
        .bd-links a:hover, .bd-links a.on { color:#fff; }
        .bd-search {
          background:#FF6B00; border:none; border-radius:999px;
          padding:10px 22px; color:#fff; font-size:14px; font-weight:600;
          font-family:inherit; cursor:pointer;
          display:flex; align-items:center; gap:8px;
          transition:all .25s;
          box-shadow:0 4px 18px rgba(255,107,0,.4);
        }
        .bd-search:hover { background:#e05e00; transform:translateY(-2px); box-shadow:0 8px 24px rgba(255,107,0,.55); }

        /* ── HERO CONTENT ── */
        .bd-hero {
          position: relative; z-index: 2;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 0 72px 60px;
          gap: 0;
        }

        /* left */
        .bd-left { display:flex; flex-direction:column; }

        .bd-badge {
          display: inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.15);
          border-radius:999px; padding:7px 16px;
          font-size:13px; color:rgba(255,255,255,.82);
          margin-bottom:24px; backdrop-filter:blur(8px);
          width:fit-content;
          animation: fadeIn .6s ease .15s both;
        }

        .bd-h1 {
          font-size: clamp(30px,3.8vw,54px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -.02em;
          margin-bottom: 18px;
          text-wrap: pretty;
          animation: fadeUp .7s ease .25s both;
        }
        .bd-h1 em { font-style:normal; color:#FF6B00; }

        .bd-sub {
          font-size: clamp(13px,1.1vw,15px);
          color: rgba(255,255,255,.52);
          line-height: 1.75;
          max-width: 390px;
          margin-bottom: 36px;
          text-wrap: pretty;
          animation: fadeUp .7s ease .38s both;
        }

        .bd-btns {
          display:flex; align-items:center; gap:24px; flex-wrap:wrap;
          animation: fadeUp .7s ease .52s both;
        }

        .bd-btn-main {
          background:#FF6B00; border:none; border-radius:999px;
          padding:14px 36px; color:#fff; font-size:15px; font-weight:700;
          font-family:inherit; cursor:pointer;
          box-shadow:0 6px 20px rgba(255,107,0,.45);
          transition:all .25s;
        }
        .bd-btn-main:hover { background:#e05e00; transform:translateY(-3px); box-shadow:0 12px 30px rgba(255,107,0,.6); }

        .bd-btn-secondary {
          display:flex; align-items:center; gap:12px;
          background:none; border:none; color:#fff;
          font-size:15px; font-weight:500; font-family:inherit; cursor:pointer;
          transition:opacity .2s;
        }
        .bd-btn-secondary:hover { opacity:.75; }
        .bd-play {
          width:40px; height:40px; border-radius:50%;
          background:rgba(255,255,255,.12);
          display:flex; align-items:center; justify-content:center;
          font-size:12px; transition:background .2s;
        }
        .bd-btn-secondary:hover .bd-play { background:rgba(255,255,255,.2); }

        /* right — imagem flutua */
        .bd-right {
          position:relative;
          display:flex; justify-content:center; align-items:center;
          animation: scaleIn .9s ease .2s both;
        }
        .bd-burger-img {
          width:clamp(260px,44vw,580px);
          height:auto;
          object-fit:cover;
          filter:drop-shadow(0 30px 70px rgba(0,0,0,.8)) drop-shadow(0 0 60px rgba(100,30,0,.5));
          animation: float 5s ease-in-out 1.2s infinite;
        }

        /* badge 60% */
        .bd-disc {
          position:absolute;
          top: clamp(10px,8%,60px);
          right: clamp(0px,6%,40px);
          width:clamp(76px,7vw,100px);
          height:clamp(76px,7vw,100px);
          border-radius:50%;
          background:linear-gradient(135deg,#FF8C00,#FF6B00);
          border:3px solid rgba(255,255,255,.25);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          box-shadow:0 8px 28px rgba(255,107,0,.6), inset 0 1px 0 rgba(255,255,255,.2);
          animation: popIn .6s cubic-bezier(.34,1.56,.64,1) .9s both;
        }
        .bd-disc-n { font-size:clamp(20px,2.2vw,28px); font-weight:800; line-height:1; }
        .bd-disc-l { font-size:clamp(9px,.9vw,12px); font-weight:600; opacity:.92; }

        /* ── TABLET ── */
        @media (max-width:1024px){
          .bd-nav { padding:0 32px; }
          .bd-hero { padding:0 32px 48px; }
        }

        /* ── MOBILE ── */
        @media (max-width:640px){
          .bd-nav { padding:0 20px; height:58px; }
          .bd-links { display:none; }
          .bd-hero { grid-template-columns:1fr; padding:20px 20px 48px; text-align:center; }
          .bd-left { align-items:center; }
          .bd-sub { max-width:100%; }
          .bd-right { margin-top:28px; }
          .bd-burger-img { width:min(320px,88vw); }
        }
      `}</style>

      <div className="bd">
        <div className="bd-page">

          {/* voltar */}
          <div style={{ position:"relative", zIndex:10, background:"rgba(0,0,0,.4)", borderBottom:"1px solid rgba(255,255,255,.06)", padding:"7px 24px" }}>
            <Link href="/" style={{ color:"#FF6B00", fontSize:11, letterSpacing:1.5, fontWeight:600 }}>← VOLTAR AO CATÁLOGO</Link>
          </div>

          {/* ══ NAV ══ */}
          <nav className="bd-nav">
            <div className="bd-logo">
              <div className="bd-logo-icon">🍔</div>
              Green Food
            </div>
            <div className="bd-links">
              <a href="#" className="on">Home</a>
              <a href="#">Foods</a>
              <a href="#">Offers</a>
              <a href="#">Contact us</a>
            </div>
            <button className="bd-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
            </button>
          </nav>

          {/* ══ HERO ══ */}
          <section className="bd-hero">
            <div className="bd-left">
              <div className="bd-badge">
                <span>😊</span> people trust us
              </div>

              <h1 className="bd-h1">
                <em>Most Fastest Food</em><br/>
                Delivery Service
              </h1>

              <p className="bd-sub">
                Get the best quality and most delicious burgers in the world. You can get them all at Green Food...
              </p>

              <div className="bd-btns">
                <button className="bd-btn-main">Order Food</button>
                <button className="bd-btn-secondary">
                  <span className="bd-play">▶</span>
                  View menu
                </button>
              </div>
            </div>

            <div className="bd-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/burger-delivery-hero.jpg"
                alt="Burger"
                className="bd-burger-img"
              />
              <div className="bd-disc">
                <span className="bd-disc-n">60%</span>
                <span className="bd-disc-l">Discount</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
