"use client";
import Link from "next/link";

const BG     = "#1e1e1e";
const CREAM  = "#e9e3dc";
const LIME   = "#d1ef53";
const PURPLE = "#b3a0cd";

export default function BurgerHeaven() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bowlby+One&family=Inter:wght@400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bh { font-family: 'Bowlby One', sans-serif; background: ${BG}; color: ${CREAM}; overflow-x: hidden; }
        .bh a { text-decoration: none; }

        @keyframes bh-run { from { transform: translateX(0) } to { transform: translateX(-50%) } }

        /* ── HEADER ── */
        .bh-header { background:${BG}; padding: 0 56px; border-bottom: 1px solid #252525; }
        .bh-header-inner { max-width:1440px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; height:68px; }
        .bh-nav { display:flex; gap:48px; align-items:center; }
        .bh-nav-links { display:flex; gap:48px; }

        /* ── HERO ── */
        .bh-hero-inner { max-width:1440px; margin:0 auto; padding:52px 56px 0; }

        /* ── LIME ── */
        .bh-lime-grid { max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }

        /* ── FOOD GRID ── */
        .bh-food-section { padding:0 56px; background:${BG}; }
        .bh-food-grid { max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:16px; padding-top:16px; }
        .food-card { position:relative; height:480px; overflow:hidden; cursor:pointer; border-radius:12px; transition:transform .35s; }
        .food-card:hover { transform:scale(1.02); }

        /* ── MARQUEE ── */
        .bh-marquee-text { font-size:clamp(36px,7.4vw,107px); color:${LIME}; letter-spacing:1px; margin-right:48px; }

        /* ── INTERIOR ── */
        .bh-interior { padding:0 56px; background:${BG}; }
        .bh-interior img { width:100%; height:auto; display:block; border-radius:12px; }

        /* ── CTA ── */
        .bh-cta { background:${BG}; padding:80px 56px; text-align:center; position:relative; overflow:hidden; }

        /* ── FOOTER ── */
        .bh-footer-grid { display:grid; grid-template-columns:1.8fr 1.2fr 1.4fr 2.6fr; gap:48px; margin-bottom:48px; }

        /* ════════════════════════
           TABLET  ≤ 1024px
        ════════════════════════ */
        @media (max-width: 1024px) {
          .bh-header { padding: 0 32px; }
          .bh-hero-inner { padding: 40px 32px 0; }
          .bh-lime-grid { gap: 40px; padding: 0 32px; }
          .bh-food-section { padding: 0 32px; }
          .bh-interior { padding: 0 32px; }
          .bh-cta { padding: 64px 32px; }
          .bh-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }

        /* ════════════════════════
           MOBILE  ≤ 640px
        ════════════════════════ */
        @media (max-width: 640px) {
          .bh-header { padding: 0 20px; }
          .bh-header-inner { height: 56px; }
          .bh-nav-links { display: none; }          /* esconde About/Menu */
          .bh-nav { gap: 0; }

          .bh-hero-inner { padding: 32px 20px 0; }

          /* burgers: só o central no mobile */
          .bh-burgers { height: clamp(180px, 55vw, 300px); }
          .bh-burger-left  { display: none; }
          .bh-burger-right { display: none; }
          .bh-burger-mid   { width: 90%; }

          .bh-lime-grid { grid-template-columns: 1fr; gap: 24px; padding: 0 20px; }

          .bh-food-section { padding: 0 20px; }
          .bh-food-grid { grid-template-columns: 1fr; }
          .food-card { height: 320px; }

          .bh-marquee-text { font-size: clamp(28px, 9vw, 56px); }

          .bh-interior { padding: 0 20px; }

          .bh-cta { padding: 56px 20px; }

          .bh-footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .bh-footer { padding: 40px 20px 24px; }
        }
      `}</style>

      <div className="bh">

        {/* voltar */}
        <div style={{ background:"#111", borderBottom:"1px solid #222", padding:"8px 20px" }}>
          <Link href="/" style={{ color:LIME, fontSize:11, letterSpacing:1.5, fontFamily:"Inter,sans-serif" }}>
            ← VOLTAR AO CATÁLOGO
          </Link>
        </div>

        {/* ══════ HEADER ══════ */}
        <header className="bh-header">
          <div className="bh-header-inner">
            <span style={{ fontSize:"clamp(16px,2vw,22px)", color:CREAM }}>Burger Heaven</span>
            <nav className="bh-nav">
              <div className="bh-nav-links">
                <a href="#" style={{ fontSize:16, color:CREAM }}>About</a>
                <a href="#" style={{ fontSize:16, color:CREAM }}>Menu</a>
              </div>
              <button style={{ padding:"10px 22px", border:"none", borderRadius:4, background:PURPLE, color:BG, fontSize:14, cursor:"pointer", fontFamily:"inherit" }}>
                Order Online
              </button>
            </nav>
          </div>
        </header>

        {/* ══════ HERO ══════ */}
        <section style={{ background:BG, overflow:"hidden" }}>
          <div className="bh-hero-inner">
            <h1 style={{ fontSize:"clamp(36px,7.4vw,107px)", lineHeight:.95, color:CREAM, textTransform:"uppercase", letterSpacing:-1 }}>
              New York's Favorite Organic<br/>Hamburger Joint
            </h1>
          </div>

          {/* burgers.png — PNG transparente com scribbles embutidos */}
          <div style={{ textAlign:"center", marginTop:8, marginBottom:-24, position:"relative", zIndex:1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/burgers.png"
              alt="Burgers"
              style={{
                width:"clamp(280px, 85%, 1100px)",
                height:"auto",
                display:"inline-block",
                filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
              }}
            />
          </div>
        </section>

        {/* ══════ LIME ══════ */}
        <section style={{ background:LIME, padding:"52px 56px" }}>
          <div className="bh-lime-grid">
            <h2 style={{ fontSize:"clamp(28px,4.8vw,70px)", lineHeight:.97, color:BG, textTransform:"uppercase" }}>
              The Burger<br/>Above All<br/>Burgers
            </h2>
            <div>
              <p style={{ color:BG, fontSize:"clamp(15px,1.4vw,20px)", lineHeight:1.65, marginBottom:28, fontFamily:"Inter,sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.
              </p>
              <button style={{ padding:"13px 32px", border:"none", borderRadius:3, background:CREAM, color:BG, fontSize:16, cursor:"pointer", fontFamily:"inherit" }}>
                About Us
              </button>
            </div>
          </div>
        </section>

        {/* ══════ FOOD GRID ══════ */}
        <section className="bh-food-section">
          <div className="bh-food-grid">
            {[
              { label:"Salt & Vinegar\nFrench Fries", img:"/burger-fries.png" },
              { label:"Crispy Chicken\nSandwich",     img:"/burger-chicken.png" },
            ].map((item) => (
              <div key={item.label} className="food-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
                <div style={{ position:"absolute", bottom:24, left:24, background:BG, padding:"14px 20px" }}>
                  <p style={{ fontSize:"clamp(16px,1.6vw,20px)", color:CREAM, textTransform:"uppercase", letterSpacing:.5, whiteSpace:"pre-line", lineHeight:1.15, marginBottom:6 }}>
                    {item.label}
                  </p>
                  <span style={{ fontSize:13, color:PURPLE, textTransform:"uppercase", letterSpacing:1 }}>Order Online</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ MARQUEE ══════ */}
        <div style={{ background:BG, overflow:"hidden", whiteSpace:"nowrap", padding:"12px 0" }}>
          <div style={{ display:"inline-block", animation:"bh-run 16s linear infinite" }}>
            {Array(4).fill(null).map((_,i) => (
              <span key={i} className="bh-marquee-text">
                " THE BEST BURGER I'VE EVER HAD "
              </span>
            ))}
          </div>
        </div>

        {/* ══════ INTERIOR ══════ */}
        <section className="bh-interior" style={{ paddingTop:0, paddingBottom:0 }}>
          <div style={{ maxWidth:1440, margin:"0 auto" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/burger-interior.png" alt="Interior"/>
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section className="bh-cta">
          <svg style={{ position:"absolute", left:0, bottom:0, pointerEvents:"none" }} width="140" height="200" viewBox="0 0 160 220">
            <path d="M80 212 C128 192 158 142 142 84 C126 28 66 4 28 24 C-8 44 -6 100 14 148 C36 194 44 230 80 212Z" stroke={PURPLE} strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M76 200 C126 174 152 116 132 58" stroke={PURPLE} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity=".5"/>
          </svg>
          <svg style={{ position:"absolute", right:0, top:0, pointerEvents:"none", transform:"rotate(180deg)" }} width="140" height="200" viewBox="0 0 160 220">
            <path d="M80 212 C128 192 158 142 142 84 C126 28 66 4 28 24 C-8 44 -6 100 14 148 C36 194 44 230 80 212Z" stroke={LIME} strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M76 200 C126 174 152 116 132 58" stroke={LIME} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity=".5"/>
          </svg>

          <h2 style={{ fontSize:"clamp(28px,4.8vw,70px)", color:CREAM, textTransform:"uppercase", lineHeight:1.0, maxWidth:820, margin:"0 auto 32px" }}>
            Order Online Or<br/>Come Visit Us Today
          </h2>
          <button style={{ padding:"14px 36px", border:"none", borderRadius:3, background:LIME, color:BG, fontSize:16, cursor:"pointer", fontFamily:"inherit" }}>
            Get Started
          </button>
        </section>

        {/* ══════ FOOTER ══════ */}
        <footer className="bh-footer" style={{ background:PURPLE, padding:"52px 56px 28px" }}>
          <div style={{ maxWidth:1440, margin:"0 auto" }}>
            <div className="bh-footer-grid">
              <div>
                <p style={{ fontSize:"clamp(24px,3vw,42px)", color:BG, lineHeight:.97, textTransform:"uppercase" }}>
                  Burger<br/>Heaven
                </p>
              </div>
              <div>
                <p style={{ fontSize:16, color:BG, marginBottom:16 }}>More</p>
                {["About","Menu","Locations","Privacy"].map(l => (
                  <p key={l} style={{ marginBottom:9 }}>
                    <a href="#" style={{ color:BG, fontSize:15, fontFamily:"Inter,sans-serif" }}>{l}</a>
                  </p>
                ))}
              </div>
              <div>
                <p style={{ fontSize:16, color:BG, marginBottom:16 }}>Hours</p>
                <p style={{ color:BG, fontSize:15, fontFamily:"Inter,sans-serif", lineHeight:1.7 }}>
                  Open from<br/>11AM to<br/>11PM daily
                </p>
              </div>
              <div>
                <p style={{ fontSize:16, color:BG, marginBottom:16 }}>Join Our Newsletter</p>
                <div style={{ display:"flex", border:`2px solid ${BG}`, borderRadius:4, overflow:"hidden" }}>
                  <input type="email" placeholder="Enter your email"
                    style={{ flex:1, padding:"12px 14px", border:"none", outline:"none", fontSize:14, background:CREAM, color:BG, fontFamily:"Inter,sans-serif", minWidth:0 }}
                  />
                  <button style={{ padding:"12px 20px", background:BG, color:CREAM, border:"none", cursor:"pointer", fontSize:14, fontFamily:"inherit", whiteSpace:"nowrap" }}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div style={{ borderTop:"1px solid rgba(0,0,0,0.15)", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
              <span style={{ color:BG, fontSize:12, fontFamily:"Inter,sans-serif", opacity:.75 }}>Copyright Burger Heaven</span>
              <a href="#" style={{ color:BG, fontSize:12, fontFamily:"Inter,sans-serif", opacity:.75 }}>Privacy Policy</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
