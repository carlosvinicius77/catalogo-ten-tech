"use client";
import Link from "next/link";

const destinations = [
  { name: "Roma", country: "Itália", price: "R$ 4.200", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=360&fit=crop", rating: 4.9 },
  { name: "Londres", country: "Inglaterra", price: "R$ 5.800", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=360&fit=crop", rating: 4.7 },
  { name: "Paris", country: "França", price: "R$ 5.100", img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=500&h=360&fit=crop", rating: 4.8 },
];

const services = [
  { icon: "✈️", title: "Voos", desc: "Passagens para qualquer destino" },
  { icon: "🏨", title: "Hotéis", desc: "Acomodações selecionadas" },
  { icon: "🗺️", title: "Roteiros", desc: "Planejamento personalizado" },
  { icon: "🚗", title: "Transfer", desc: "Transporte aeroporto-hotel" },
];

const steps = [
  { num: "01", title: "Escolha o destino", desc: "Selecione entre centenas de destinos incríveis ao redor do mundo." },
  { num: "02", title: "Reserve sua viagem", desc: "Escolha datas, voos e hospedagem com os melhores preços." },
  { num: "03", title: "Embarque e curta", desc: "Receba tudo organizado e aproveite cada momento da viagem." },
];

export default function TravelPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .jd { font-family: 'Poppins', sans-serif; color: #14183E; background: #fff; }
        .jd a { text-decoration: none; }

        /* ── HEADER ── */
        .jd-header { background:#fff; padding:0 60px; border-bottom:1px solid #f5f5f5; }
        .jd-header-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; height:76px; }
        .jd-nav { display:flex; gap:36px; }
        .jd-nav a { color:#5E6282; font-size:15px; font-weight:500; }
        .jd-nav a:hover { color:#FF7B54; }
        .jd-header-btns { display:flex; gap:12px; }

        /* ── HERO ── */
        .jd-hero { background:linear-gradient(135deg,#FEF4EA 0%,#FFF8F3 100%); padding:80px 60px; }
        .jd-hero-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
        .jd-hero-img-wrap { width:420px; height:480px; border-radius:50%; overflow:hidden; background:linear-gradient(135deg,#FFD4C2,#FFB080); box-shadow:0 20px 60px rgba(255,123,84,0.25); margin:0 auto; }
        .jd-hero-img-wrap img { width:100%; height:100%; object-fit:cover; }
        .jd-stats { display:flex; gap:40px; margin-top:48px; }

        /* ── SERVICES ── */
        .jd-services { padding:80px 60px; background:#fff; }
        .jd-services-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:50px; }
        .jd-service-card { background:#F5F5F5; border-radius:18px; padding:32px 20px; text-align:center; transition:all .2s; cursor:pointer; }
        .jd-service-card:hover { background:#FEF4EA; transform:translateY(-4px); }

        /* ── DESTINATIONS ── */
        .jd-dest { padding:80px 60px; background:#FAFAFA; }
        .jd-dest-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:50px; }
        .jd-dest-card { background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08); cursor:pointer; transition:all .2s; }
        .jd-dest-card:hover { transform:translateY(-6px); box-shadow:0 12px 36px rgba(0,0,0,0.15); }

        /* ── STEPS ── */
        .jd-steps { padding:80px 60px; background:#fff; }
        .jd-steps-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }

        /* ── NEWSLETTER ── */
        .jd-newsletter { background:linear-gradient(135deg,#FF7B54,#FF9A6C); padding:70px 60px; text-align:center; }
        .jd-nl-form { display:flex; max-width:480px; margin:30px auto 0; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.15); }
        .jd-nl-form input { flex:1; padding:14px 20px; border:none; outline:none; font-size:15px; min-width:0; }
        .jd-nl-form button { padding:14px 28px; background:#14183E; color:#fff; border:none; font-weight:700; cursor:pointer; font-size:15px; white-space:nowrap; font-family:inherit; }

        /* ── FOOTER ── */
        .jd-footer { background:#14183E; color:#fff; padding:50px 60px 30px; }
        .jd-footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:40px; }

        /* ════════════════════
           TABLET  ≤ 1024px
        ════════════════════ */
        @media (max-width:1024px) {
          .jd-header { padding:0 32px; }
          .jd-nav { gap:20px; }
          .jd-hero { padding:60px 32px; }
          .jd-hero-grid { gap:40px; }
          .jd-hero-img-wrap { width:340px; height:380px; }
          .jd-services { padding:60px 32px; }
          .jd-services-grid { grid-template-columns:repeat(2,1fr); }
          .jd-dest { padding:60px 32px; }
          .jd-dest-grid { grid-template-columns:repeat(2,1fr); }
          .jd-steps { padding:60px 32px; }
          .jd-newsletter { padding:60px 32px; }
          .jd-footer { padding:40px 32px 24px; }
          .jd-footer-grid { grid-template-columns:1fr 1fr; gap:28px; }
        }

        /* ════════════════════
           MOBILE  ≤ 640px
        ════════════════════ */
        @media (max-width:640px) {
          .jd-header { padding:0 20px; }
          .jd-header-inner { height:60px; }
          .jd-nav { display:none; }
          .jd-header-btns button:first-child { display:none; }

          .jd-hero { padding:40px 20px; }
          .jd-hero-grid { grid-template-columns:1fr; text-align:center; }
          .jd-hero-grid > div:first-child { display:flex; flex-direction:column; align-items:center; }
          .jd-hero-img-wrap { width:min(300px,80vw); height:min(340px,90vw); order:1; margin-bottom:32px; }
          .jd-hero-grid > div:last-child { order:2; }
          .jd-stats { justify-content:center; gap:24px; }

          .jd-services { padding:48px 20px; }
          .jd-services-grid { grid-template-columns:1fr 1fr; gap:16px; }

          .jd-dest { padding:48px 20px; }
          .jd-dest-grid { grid-template-columns:1fr; }

          .jd-steps { padding:48px 20px; }
          .jd-steps-grid { grid-template-columns:1fr; }

          .jd-newsletter { padding:48px 20px; }
          .jd-nl-form { flex-direction:column; border-radius:12px; }
          .jd-nl-form input { border-radius:12px 12px 0 0; }
          .jd-nl-form button { border-radius:0 0 12px 12px; }

          .jd-footer { padding:40px 20px 20px; }
          .jd-footer-grid { grid-template-columns:1fr; gap:24px; }
        }
      `}</style>

      <div className="jd">

        {/* voltar */}
        <div style={{ background:"#fff", borderBottom:"1px solid #eee", padding:"8px 24px" }}>
          <Link href="/" style={{ color:"#FF7B54", fontSize:13, fontWeight:600 }}>← Voltar ao catálogo</Link>
        </div>

        {/* ══ HEADER ══ */}
        <header className="jd-header">
          <div className="jd-header-inner">
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:34, height:34, borderRadius:10, background:"linear-gradient(135deg,#FF7B54,#FFB347)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:16 }}>J</div>
              <span style={{ fontSize:22, fontWeight:800 }}>Jadoo</span>
            </div>
            <nav className="jd-nav">
              {["Destinos","Serviços","Galeria","Blog","Contato"].map(item => (
                <a key={item} href="#">{item}</a>
              ))}
            </nav>
            <div className="jd-header-btns">
              <button style={{ padding:"9px 22px", borderRadius:8, border:"2px solid #FF7B54", background:"transparent", color:"#FF7B54", fontWeight:600, cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>Entrar</button>
              <button style={{ padding:"9px 22px", borderRadius:8, border:"none", background:"#FF7B54", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>Cadastrar</button>
            </div>
          </div>
        </header>

        {/* ══ HERO ══ */}
        <section className="jd-hero">
          <div className="jd-hero-grid">
            <div>
              <p style={{ color:"#FF7B54", fontWeight:700, fontSize:13, letterSpacing:3, textTransform:"uppercase", marginBottom:16 }}>Melhor Agência de Viagens</p>
              <h1 style={{ fontSize:"clamp(32px,4vw,52px)", fontWeight:900, lineHeight:1.1, color:"#14183E", marginBottom:20 }}>
                Viaje, curta e viva uma vida nova e plena
              </h1>
              <p style={{ color:"#5E6282", fontSize:16, lineHeight:1.75, marginBottom:36, maxWidth:420 }}>
                Descubra destinos incríveis ao redor do mundo. Planejamos cada detalhe da sua viagem para que você só precise se preocupar em aproveitar.
              </p>
              <div style={{ display:"flex", gap:16, marginBottom:0, flexWrap:"wrap" }}>
                <button style={{ padding:"14px 32px", borderRadius:10, border:"none", background:"#FF7B54", color:"#fff", fontWeight:700, fontSize:16, cursor:"pointer", boxShadow:"0 8px 20px rgba(255,123,84,0.35)", fontFamily:"inherit" }}>
                  Explorar agora
                </button>
                <button style={{ padding:"14px 24px", borderRadius:10, border:"none", background:"transparent", color:"#14183E", fontWeight:600, fontSize:15, cursor:"pointer", display:"flex", alignItems:"center", gap:10, fontFamily:"inherit" }}>
                  <span style={{ width:38, height:38, borderRadius:"50%", background:"#FF7B54", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12 }}>▶</span>
                  Assistir vídeo
                </button>
              </div>
              <div className="jd-stats">
                {[["500+","Destinos"],["1.2k+","Viajantes"],["15+","Anos de exp."]].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontSize:28, fontWeight:800, color:"#14183E" }}>{n}</div>
                    <div style={{ fontSize:14, color:"#5E6282" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", justifyContent:"center" }}>
              <div className="jd-hero-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&h=600&fit=crop&auto=format" alt="Viajante" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="jd-services">
          <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
            <p style={{ color:"#5E6282", fontSize:13, fontWeight:700, letterSpacing:3, textTransform:"uppercase", marginBottom:10 }}>O que oferecemos</p>
            <h2 style={{ fontSize:"clamp(24px,3vw,36px)", fontWeight:800, color:"#14183E" }}>Nossos Melhores Serviços</h2>
            <div className="jd-services-grid">
              {services.map(s => (
                <div key={s.title} className="jd-service-card">
                  <div style={{ fontSize:36, marginBottom:14 }}>{s.icon}</div>
                  <h3 style={{ fontSize:17, fontWeight:700, color:"#14183E", marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:14, color:"#5E6282", lineHeight:1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DESTINATIONS ══ */}
        <section className="jd-dest">
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:0 }}>
              <p style={{ color:"#5E6282", fontSize:13, fontWeight:700, letterSpacing:3, textTransform:"uppercase", marginBottom:10 }}>Explore o mundo</p>
              <h2 style={{ fontSize:"clamp(24px,3vw,36px)", fontWeight:800, color:"#14183E" }}>Principais Destinos</h2>
            </div>
            <div className="jd-dest-grid">
              {destinations.map(d => (
                <div key={d.name} className="jd-dest-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.name} style={{ width:"100%", height:220, objectFit:"cover", display:"block" }} />
                  <div style={{ padding:"18px 20px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                      <h3 style={{ fontSize:18, fontWeight:800, color:"#14183E" }}>{d.name}</h3>
                      <span style={{ fontSize:13, fontWeight:700, color:"#FF7B54" }}>⭐ {d.rating}</span>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <p style={{ color:"#5E6282", fontSize:14 }}>{d.country}</p>
                      <span style={{ fontWeight:700, color:"#14183E", fontSize:15 }}>{d.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STEPS ══ */}
        <section className="jd-steps">
          <div className="jd-steps-grid">
            <div>
              <p style={{ color:"#5E6282", fontSize:13, fontWeight:700, letterSpacing:3, textTransform:"uppercase", marginBottom:10 }}>Fácil e Rápido</p>
              <h2 style={{ fontSize:"clamp(22px,2.8vw,36px)", fontWeight:800, color:"#14183E", marginBottom:40 }}>Reserve sua próxima viagem em 3 passos</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
                {steps.map(s => (
                  <div key={s.num} style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
                    <div style={{ width:48, height:48, borderRadius:14, background:"#FEF4EA", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontWeight:800, color:"#FF7B54", fontSize:16, fontFamily:"inherit" }}>{s.num}</div>
                    <div>
                      <h3 style={{ fontSize:17, fontWeight:700, color:"#14183E", marginBottom:6 }}>{s.title}</h3>
                      <p style={{ color:"#5E6282", fontSize:14, lineHeight:1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:"linear-gradient(135deg,#FEF4EA,#FFE8D6)", borderRadius:24, padding:40, textAlign:"center" }}>
              <div style={{ fontSize:80, marginBottom:20 }}>🌍</div>
              <h3 style={{ fontSize:24, fontWeight:800, color:"#14183E", marginBottom:12 }}>Pronto para partir?</h3>
              <p style={{ color:"#5E6282", marginBottom:24, lineHeight:1.6 }}>Mais de 500 destinos esperando por você. Planejamos tudo.</p>
              <button style={{ padding:"13px 30px", borderRadius:10, border:"none", background:"#FF7B54", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"inherit" }}>Começar agora</button>
            </div>
          </div>
        </section>

        {/* ══ NEWSLETTER ══ */}
        <section className="jd-newsletter">
          <div style={{ maxWidth:600, margin:"0 auto" }}>
            <h2 style={{ fontSize:"clamp(22px,3vw,32px)", fontWeight:800, color:"#fff", marginBottom:12 }}>Receba ofertas exclusivas</h2>
            <p style={{ color:"rgba(255,255,255,0.85)", fontSize:16, marginBottom:0 }}>Cadastre seu e-mail e receba as melhores promoções de viagem.</p>
            <div className="jd-nl-form">
              <input type="email" placeholder="Seu e-mail" />
              <button>Inscrever</button>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="jd-footer">
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div className="jd-footer-grid">
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:"#FF7B54", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800 }}>J</div>
                  <span style={{ fontSize:20, fontWeight:800 }}>Jadoo</span>
                </div>
                <p style={{ color:"rgba(255,255,255,0.6)", fontSize:14, lineHeight:1.7, maxWidth:260 }}>Sua agência de viagens de confiança. Realizamos sonhos ao redor do mundo.</p>
              </div>
              {[["Empresa",["Sobre nós","Carreiras","Imprensa"]],["Destinos",["Europa","Ásia","Américas"]],["Suporte",["FAQ","Contato","Política"]]].map(([title,links]) => (
                <div key={title as string}>
                  <h4 style={{ fontSize:16, fontWeight:700, marginBottom:16 }}>{title as string}</h4>
                  {(links as string[]).map(l => (
                    <div key={l} style={{ marginBottom:10 }}>
                      <a href="#" style={{ color:"rgba(255,255,255,0.6)", fontSize:14 }}>{l}</a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24, textAlign:"center", color:"rgba(255,255,255,0.4)", fontSize:13 }}>
              © 2025 Jadoo Travel. Todos os direitos reservados.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
