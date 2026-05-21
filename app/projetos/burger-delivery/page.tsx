"use client";
import Link from "next/link";

const OR = "#FF6B00";
const DARK = "#1a0500";

const menuItems = [
  { name: "Chicken Burger", desc: "Crispy chicken patty with fresh lettuce, tomato and our special sauce on a toasted bun.", img: "/bd-chicken.jpg" },
  { name: "Mutton Burger", desc: "Juicy mutton patty seasoned with herbs, topped with caramelized onions and cheese.", img: "/bd-mutton.jpg" },
  { name: "Veg Burger", desc: "Fresh garden vegetables with creamy hummus and crunchy pickles in a whole wheat bun.", img: "/bd-veg.jpg" },
];

const features = [
  { emoji: "🍔", title: "More Pure Taste", desc: "100% fresh ingredients" },
  { emoji: "⭐", title: "Best Burger", desc: "Award winning recipes" },
  { emoji: "🚀", title: "Fast Delivery", desc: "30 min guaranteed" },
];

export default function BurgerDelivery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        .bd { font-family:'Poppins',sans-serif; color:#111; overflow-x:hidden; }
        .bd a { text-decoration:none; color:inherit; }

        /* ── huashu animations ── */
        @keyframes fadeUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.93)} to{opacity:1;transform:scale(1)} }
        @keyframes popIn   { from{opacity:0;transform:scale(.5) rotate(-15deg)} to{opacity:1;transform:scale(1) rotate(0)} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }

        /* ── 1. HERO ── */
        .bd-hero-section {
          position:relative; min-height:100vh;
          display:flex; flex-direction:column; overflow:hidden;
          background:${DARK};
        }
        .bd-hero-section::before {
          content:''; position:absolute; inset:0; z-index:0;
          background:
            radial-gradient(ellipse 60% 80% at 72% 58%, #3d1200 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 18% 42%, #1a0800 0%, transparent 60%),
            linear-gradient(160deg,#100400 0%,#0f0500 40%,#180800 100%);
        }
        .bd-hero-section::after {
          content:''; position:absolute; inset:0; z-index:0;
          background:radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,.5) 100%);
          pointer-events:none;
        }

        /* nav */
        .bd-nav {
          position:relative; z-index:10;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 72px; height:72px;
          animation:fadeIn .6s ease both;
        }
        .bd-logo { display:flex; align-items:center; gap:10px; font-weight:700; font-size:18px; color:#fff; }
        .bd-logo-icon { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,${OR},#FF9A3C); display:flex; align-items:center; justify-content:center; font-size:18px; }
        .bd-nav-links { display:flex; gap:40px; }
        .bd-nav-links a { font-size:15px; font-weight:500; color:rgba(255,255,255,.65); transition:color .2s; }
        .bd-nav-links a:hover,.bd-nav-links a.on { color:#fff; }
        .bd-search-btn {
          background:${OR}; border:none; border-radius:999px;
          padding:10px 22px; color:#fff; font-size:14px; font-weight:600;
          font-family:inherit; cursor:pointer;
          display:flex; align-items:center; gap:8px;
          box-shadow:0 4px 18px rgba(255,107,0,.4);
          transition:all .25s;
        }
        .bd-search-btn:hover { background:#e05e00; transform:translateY(-2px); }

        /* hero grid */
        .bd-hero-grid {
          position:relative; z-index:2; flex:1;
          display:grid; grid-template-columns:1fr 1fr;
          align-items:center; padding:0 72px 60px; gap:0;
        }
        .bd-hero-left { display:flex; flex-direction:column; color:#fff; }
        .bd-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15);
          border-radius:999px; padding:7px 16px; font-size:13px;
          color:rgba(255,255,255,.82); margin-bottom:22px; backdrop-filter:blur(8px);
          width:fit-content; animation:fadeIn .6s ease .15s both;
        }
        .bd-h1 {
          font-size:clamp(30px,3.8vw,54px); font-weight:800; line-height:1.12;
          letter-spacing:-.02em; margin-bottom:16px; text-wrap:pretty;
          animation:fadeUp .7s ease .25s both;
        }
        .bd-h1 em { font-style:normal; color:${OR}; }
        .bd-sub {
          font-size:clamp(13px,1.1vw,15px); color:rgba(255,255,255,.52);
          line-height:1.75; max-width:390px; margin-bottom:34px; text-wrap:pretty;
          animation:fadeUp .7s ease .38s both;
        }
        .bd-hero-btns { display:flex; align-items:center; gap:24px; animation:fadeUp .7s ease .52s both; }
        .bd-btn-or {
          background:${OR}; border:none; border-radius:999px;
          padding:13px 34px; color:#fff; font-size:15px; font-weight:700;
          font-family:inherit; cursor:pointer;
          box-shadow:0 6px 20px rgba(255,107,0,.45);
          transition:all .25s;
        }
        .bd-btn-or:hover { background:#e05e00; transform:translateY(-3px); box-shadow:0 12px 28px rgba(255,107,0,.6); }
        .bd-btn-play {
          display:flex; align-items:center; gap:12px;
          background:none; border:none; color:#fff; font-size:15px;
          font-weight:500; font-family:inherit; cursor:pointer;
        }
        .bd-play-ico {
          width:40px; height:40px; border-radius:50%;
          background:rgba(255,255,255,.12);
          display:flex; align-items:center; justify-content:center; font-size:12px;
        }
        .bd-hero-right { position:relative; display:flex; justify-content:center; align-items:center; animation:scaleIn .9s ease .2s both; }
        .bd-hero-img {
          width:clamp(260px,44vw,580px); height:auto; object-fit:cover;
          filter:drop-shadow(0 30px 70px rgba(0,0,0,.8)) drop-shadow(0 0 60px rgba(100,30,0,.5));
          animation:float 5s ease-in-out 1.2s infinite;
        }
        .bd-disc {
          position:absolute; top:clamp(10px,8%,60px); right:clamp(0px,6%,40px);
          width:clamp(76px,7vw,100px); height:clamp(76px,7vw,100px); border-radius:50%;
          background:linear-gradient(135deg,#FF8C00,${OR});
          border:3px solid rgba(255,255,255,.25);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          box-shadow:0 8px 28px rgba(255,107,0,.6);
          animation:popIn .6s cubic-bezier(.34,1.56,.64,1) .9s both;
        }
        .bd-disc-n { font-size:clamp(20px,2.2vw,28px); font-weight:800; line-height:1; color:#fff; }
        .bd-disc-l { font-size:clamp(9px,.9vw,12px); font-weight:600; color:#fff; opacity:.92; }

        /* ── 2. FEATURES DARK BAND ── */
        .bd-features {
          background:${DARK}; padding:40px 72px;
          display:grid; grid-template-columns:repeat(3,1fr); gap:16px;
        }
        .bd-feat-card {
          display:flex; align-items:center; gap:16px;
          background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08);
          border-radius:14px; padding:20px 24px;
          transition:all .25s;
        }
        .bd-feat-card:hover { background:rgba(255,107,0,.1); border-color:rgba(255,107,0,.3); transform:translateY(-3px); }
        .bd-feat-ico { font-size:36px; flex-shrink:0; }
        .bd-feat-card h3 { font-size:15px; font-weight:700; color:#fff; margin-bottom:4px; }
        .bd-feat-card p  { font-size:13px; color:rgba(255,255,255,.5); }

        /* ── 3. CHOOSE & ENJOY ── */
        .bd-menu { background:#fff; padding:80px 72px; }
        .bd-section-label { font-size:13px; font-weight:700; color:${OR}; letter-spacing:3px; text-transform:uppercase; margin-bottom:8px; text-align:center; }
        .bd-section-title { font-size:clamp(26px,2.8vw,38px); font-weight:800; color:#111; margin-bottom:12px; text-align:center; }
        .bd-section-sub   { font-size:15px; color:#777; line-height:1.7; text-align:center; max-width:520px; margin:0 auto 52px; text-wrap:pretty; }
        .bd-menu-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; max-width:1200px; margin:0 auto; }
        .bd-menu-card {
          border-radius:20px; overflow:hidden;
          box-shadow:0 4px 20px rgba(0,0,0,.08);
          transition:all .25s; cursor:pointer;
          background:#fff; border:1.5px solid #f0f0f0;
        }
        .bd-menu-card:hover { transform:translateY(-6px); box-shadow:0 14px 36px rgba(0,0,0,.14); }
        .bd-menu-card-img { width:100%; height:220px; object-fit:cover; display:block; }
        .bd-menu-card-body { padding:20px 22px 24px; }
        .bd-menu-card-body h3 { font-size:18px; font-weight:700; margin-bottom:8px; color:#111; }
        .bd-menu-card-body p  { font-size:13px; color:#777; line-height:1.6; margin-bottom:18px; text-wrap:pretty; }
        .bd-btn-or-sm {
          display:inline-block; background:${OR}; border:none; border-radius:999px;
          padding:10px 26px; color:#fff; font-size:13px; font-weight:700;
          font-family:inherit; cursor:pointer; transition:all .2s;
        }
        .bd-btn-or-sm:hover { background:#e05e00; transform:translateY(-2px); }

        /* ── 4. OUR STORY ── */
        .bd-story { background:#fafafa; padding:80px 72px; }
        .bd-story-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
        .bd-story-img { width:100%; height:420px; object-fit:cover; border-radius:20px; display:block; box-shadow:0 12px 40px rgba(0,0,0,.12); }

        /* ── 5. BOOK TABLE ── */
        .bd-book { background:#fff; padding:80px 72px; }
        .bd-form { max-width:700px; margin:0 auto; }
        .bd-form-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
        .bd-form-field {
          border:1.5px solid #e0e0e0; border-radius:10px;
          padding:14px 18px; font-size:14px; font-family:inherit;
          outline:none; transition:border-color .2s; color:#333; width:100%;
        }
        .bd-form-field:focus { border-color:${OR}; }
        .bd-form-field::placeholder { color:#bbb; }
        .bd-book-btn {
          width:100%; background:${OR}; border:none; border-radius:999px;
          padding:16px; color:#fff; font-size:16px; font-weight:700;
          font-family:inherit; cursor:pointer; margin-top:8px;
          box-shadow:0 6px 20px rgba(255,107,0,.4);
          transition:all .25s;
        }
        .bd-book-btn:hover { background:#e05e00; transform:translateY(-2px); box-shadow:0 10px 28px rgba(255,107,0,.55); }

        /* ── 6. FOOTER ── */
        .bd-footer { background:${DARK}; color:#fff; padding:48px 72px 28px; }
        .bd-footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:40px; }
        .bd-footer-logo { display:flex; align-items:center; gap:10px; font-size:20px; font-weight:700; margin-bottom:14px; }
        .bd-footer-logo-icon { width:36px; height:36px; border-radius:9px; background:linear-gradient(135deg,${OR},#FF9A3C); display:flex; align-items:center; justify-content:center; font-size:17px; }
        .bd-footer-col h4 { font-size:15px; font-weight:700; margin-bottom:16px; }
        .bd-footer-col a  { display:block; color:rgba(255,255,255,.55); font-size:14px; margin-bottom:10px; transition:color .2s; }
        .bd-footer-col a:hover { color:${OR}; }
        .bd-socials { display:flex; gap:12px; margin-top:16px; }
        .bd-social-ico {
          width:38px; height:38px; border-radius:50%;
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
          display:flex; align-items:center; justify-content:center; font-size:16px;
          transition:all .2s; cursor:pointer;
        }
        .bd-social-ico:hover { background:${OR}; border-color:${OR}; transform:translateY(-2px); }
        .bd-footer-bottom { border-top:1px solid rgba(255,255,255,.08); padding-top:20px; display:flex; justify-content:space-between; align-items:center; }
        .bd-footer-bottom span { font-size:13px; color:rgba(255,255,255,.4); }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px){
          .bd-nav,.bd-hero-grid,.bd-features,.bd-menu,.bd-story,.bd-book,.bd-footer { padding-left:32px; padding-right:32px; }
          .bd-story-grid { gap:40px; }
          .bd-footer-grid { grid-template-columns:1fr 1fr; gap:28px; }
        }
        @media (max-width:640px){
          .bd-nav { padding:0 20px; height:58px; }
          .bd-nav-links { display:none; }
          .bd-hero-grid { grid-template-columns:1fr; padding:20px 20px 40px; text-align:center; }
          .bd-hero-left { align-items:center; }
          .bd-badge { margin:0 auto 20px; }
          .bd-sub { max-width:100%; }
          .bd-hero-right { margin-top:28px; }
          .bd-hero-img { width:min(320px,88vw); }
          .bd-features { grid-template-columns:1fr; padding:24px 20px; gap:12px; }
          .bd-menu,.bd-story,.bd-book { padding:52px 20px; }
          .bd-menu-grid { grid-template-columns:1fr; }
          .bd-story-grid { grid-template-columns:1fr; gap:32px; }
          .bd-story-img { height:260px; }
          .bd-form-grid { grid-template-columns:1fr; }
          .bd-footer { padding:40px 20px 24px; }
          .bd-footer-grid { grid-template-columns:1fr; gap:24px; }
        }
      `}</style>

      <div className="bd">

        {/* voltar */}
        <div style={{ background:"rgba(0,0,0,.5)", borderBottom:"1px solid rgba(255,255,255,.06)", padding:"7px 24px", position:"relative", zIndex:20 }}>
          <Link href="/" style={{ color:OR, fontSize:11, letterSpacing:1.5, fontWeight:600 }}>← VOLTAR AO CATÁLOGO</Link>
        </div>

        {/* ══════════════════════════
            1. HERO
        ══════════════════════════ */}
        <section className="bd-hero-section">
          <nav className="bd-nav">
            <div className="bd-logo">
              <div className="bd-logo-icon">🍔</div>
              Green Food
            </div>
            <div className="bd-nav-links">
              <a href="#" className="on">Home</a>
              <a href="#">Foods</a>
              <a href="#">Offers</a>
              <a href="#">Contact us</a>
            </div>
            <button className="bd-search-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              Search
            </button>
          </nav>

          <div className="bd-hero-grid">
            <div className="bd-hero-left">
              <div className="bd-badge"><span>😊</span> people trust us</div>
              <h1 className="bd-h1"><em>Most Fastest Food</em><br/>Delivery Service</h1>
              <p className="bd-sub">Get the best quality and most delicious burgers in the world. You can get them all at Green Food...</p>
              <div className="bd-hero-btns">
                <button className="bd-btn-or">Order Food</button>
                <button className="bd-btn-play">
                  <span className="bd-play-ico">▶</span> View menu
                </button>
              </div>
            </div>
            <div className="bd-hero-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/burger-delivery-hero.jpg" alt="Burger" className="bd-hero-img" />
              <div className="bd-disc">
                <span className="bd-disc-n">60%</span>
                <span className="bd-disc-l">Discount</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════
            2. FEATURES BAND
        ══════════════════════════ */}
        <div className="bd-features">
          {features.map((f) => (
            <div key={f.title} className="bd-feat-card">
              <span className="bd-feat-ico">{f.emoji}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════
            3. CHOOSE & ENJOY
        ══════════════════════════ */}
        <section className="bd-menu">
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <p className="bd-section-label">Our Menu</p>
            <h2 className="bd-section-title">Choose &amp; Enjoy</h2>
            <p className="bd-section-sub">Get Your Most Wanted Food. Enjoy a wide variety of our specially crafted burgers made from fresh ingredients every day.</p>
            <div className="bd-menu-grid">
              {menuItems.map((item) => (
                <div key={item.name} className="bd-menu-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.name} className="bd-menu-card-img" />
                  <div className="bd-menu-card-body">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <button className="bd-btn-or-sm">Order Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════
            4. OUR STORY
        ══════════════════════════ */}
        <section className="bd-story">
          <div className="bd-story-grid">
            <div>
              <p style={{ fontSize:13, fontWeight:700, color:OR, letterSpacing:3, textTransform:"uppercase", marginBottom:8 }}>Who We Are</p>
              <h2 style={{ fontSize:"clamp(26px,2.8vw,38px)", fontWeight:800, color:"#111", marginBottom:20, lineHeight:1.2 }}>Our Story</h2>
              <p style={{ fontSize:15, color:"#777", lineHeight:1.8, marginBottom:16, textWrap:"pretty" }}>
                Our burger began with a simple belief — everyone deserves a great burger. We started in a small kitchen with fresh local ingredients and a passion for bold flavors.
              </p>
              <p style={{ fontSize:15, color:"#777", lineHeight:1.8, marginBottom:32, textWrap:"pretty" }}>
                Today, Green Food serves thousands of happy customers daily, staying true to our original mission: quality ingredients, honest prices, and burgers that make you smile.
              </p>
              <button className="bd-btn-or" style={{ borderRadius:999 }}>Read More</button>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bd-story.jpg" alt="Our Story" className="bd-story-img" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════
            5. BOOK YOUR TABLE
        ══════════════════════════ */}
        <section className="bd-book">
          <p className="bd-section-label">Reservation</p>
          <h2 className="bd-section-title">Book Your Table</h2>
          <p className="bd-section-sub">Make your reservation online quickly and easily. We look forward to welcoming you!</p>
          <div className="bd-form">
            <div className="bd-form-grid">
              <input className="bd-form-field" placeholder="Name" type="text" />
              <input className="bd-form-field" placeholder="Email" type="email" />
            </div>
            <div className="bd-form-grid">
              <input className="bd-form-field" placeholder="Date" type="date" />
              <input className="bd-form-field" placeholder="Number of Guests" type="number" />
            </div>
            <input className="bd-form-field" placeholder="Children" type="number" style={{ marginBottom:0, width:"100%" }} />
            <button className="bd-book-btn">Order Now</button>
          </div>
        </section>

        {/* ══════════════════════════
            6. FOOTER
        ══════════════════════════ */}
        <footer className="bd-footer">
          <div className="bd-footer-grid">
            <div>
              <div className="bd-footer-logo">
                <div className="bd-footer-logo-icon">🍔</div>
                Green Food
              </div>
              <p style={{ color:"rgba(255,255,255,.5)", fontSize:14, lineHeight:1.7, maxWidth:240 }}>
                The best burger experience in town. Fresh, fast and full of flavor.
              </p>
              <div className="bd-socials">
                {["📘","🐦","📸"].map((ico, i) => (
                  <div key={i} className="bd-social-ico">{ico}</div>
                ))}
              </div>
            </div>
            {[
              ["Quick Links", ["Home","Foods","Offers","Contact"]],
              ["Services",   ["Delivery","Dine In","Catering","Takeaway"]],
              ["Contact",    ["📍 New York, NY","📞 +1 800 123 456","✉ info@greenfood.com"]],
            ].map(([title, links]) => (
              <div key={title as string} className="bd-footer-col">
                <h4>{title as string}</h4>
                {(links as string[]).map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <div className="bd-footer-bottom">
            <span>© 2025 Green Food. All rights reserved.</span>
            <span>Privacy Policy · Terms of Use</span>
          </div>
        </footer>

      </div>
    </>
  );
}
