"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const PRIMARY = "#DC2626";
const DARK = "#111827";

export default function TechFixPage() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", telefone: "", email: "", mensagem: "" });

  const navLinks = [
    { id: "inicio",      label: "Início",      icon: "mdi:home-outline" },
    { id: "servicos",    label: "Serviços",    icon: "mdi:wrench-outline" },
    { id: "celulares",   label: "Celulares",   icon: "mdi:cellphone" },
    { id: "trocas",      label: "Trocas",      icon: "mdi:swap-horizontal" },
    { id: "acessorios",  label: "Acessórios",  icon: "mdi:headphones" },
    { id: "depoimentos", label: "Depoimentos", icon: "mdi:comment-quote-outline" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1F2937" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes scaleIn { from { opacity:0; transform:scale(.96) }       to { opacity:1; transform:scale(1) } }
        @keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        @keyframes heroShift {
          0%   { background-position: 0% 0% }
          20%  { background-position: 80% 20% }
          40%  { background-position: 100% 80% }
          60%  { background-position: 20% 100% }
          80%  { background-position: 0% 50% }
          100% { background-position: 0% 0% }
        }
        @keyframes rotateBg {
          from { transform: rotate(0deg) scale(2) }
          to   { transform: rotate(360deg) scale(2) }
        }
        @keyframes orb1 {
          0%,100% { transform: translate(0,0) scale(1) }
          33%     { transform: translate(120px,-60px) scale(1.3) }
          66%     { transform: translate(-80px,80px) scale(0.8) }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0) scale(1) }
          33%     { transform: translate(-100px,80px) scale(0.7) }
          66%     { transform: translate(140px,-40px) scale(1.4) }
        }
        @keyframes orb3 {
          0%,100% { transform: translate(0,0) scale(1) }
          50%     { transform: translate(60px,120px) scale(1.5) }
        }
        @keyframes flicker {
          0%,100% { opacity:.12 }
          25%     { opacity:.28 }
          50%     { opacity:.08 }
          75%     { opacity:.22 }
        }
        @keyframes scanline {
          from { transform: translateY(-100%) }
          to   { transform: translateY(100vh) }
        }
        .hero-animated-bg {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,
            #6b0000 0%, #dc2626 20%, #ff5020 35%,
            #b91c1c 50%, #ff3300 65%, #7f1d1d 80%, #dc2626 100%
          );
          background-size: 800% 800%;
          animation: heroShift 12s ease infinite;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .hero-orb-1 {
          width: 500px; height: 500px;
          background: rgba(255,80,20,.45);
          top: -150px; left: -100px;
          animation: orb1 14s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          background: rgba(100,0,0,.6);
          bottom: -100px; right: -80px;
          animation: orb2 16s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 300px; height: 300px;
          background: rgba(255,140,0,.25);
          top: 50%; left: 50%;
          animation: orb3 10s ease-in-out infinite;
        }
        .hero-conic {
          position: absolute; inset: 0;
          background: conic-gradient(
            from 0deg at 50% 50%,
            rgba(255,60,0,.2), rgba(180,0,0,.35),
            rgba(255,100,0,.15), rgba(120,0,0,.4),
            rgba(255,60,0,.2)
          );
          animation: rotateBg 18s linear infinite;
          mix-blend-mode: overlay;
        }
        .hero-scanline {
          position: absolute; left:0; right:0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,.04), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
        }
        .hero-flicker {
          position: absolute; inset:0;
          background: rgba(255,255,255,.06);
          animation: flicker 2s steps(1) infinite;
          pointer-events: none;
        }
        .fu1 { animation: fadeUp  .7s ease both .1s }
        .fu2 { animation: fadeUp  .7s ease both .25s }
        .fu3 { animation: fadeUp  .7s ease both .4s }
        .fu4 { animation: fadeUp  .7s ease both .55s }
        .si  { animation: scaleIn .9s ease both .3s }
        .service-card { transition:transform .25s,box-shadow .25s; }
        .service-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(0,0,0,.12); }
        .phone-card   { transition:transform .25s,box-shadow .25s; }
        .phone-card:hover { transform:translateY(-4px); box-shadow:0 14px 36px rgba(0,0,0,.12); }
        .acc-card     { transition:transform .25s,box-shadow .25s; }
        .acc-card:hover { transform:translateY(-4px); box-shadow:0 14px 36px rgba(0,0,0,.12); }
        .btn-red { transition:transform .2s,box-shadow .2s; }
        .btn-red:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(220,38,38,.45); }
        .nav-link { transition:color .2s; }
        .nav-link:hover { color:#DC2626; }
        .marquee-track { display:flex; animation:marquee 20s linear infinite; width:max-content; }
        input, textarea { outline:none; }
        input:focus, textarea:focus { border-color:#DC2626 !important; }
        @media (max-width:900px) {
          .desktop-nav { display:none !important; }
          .hero-cols { flex-direction:column !important; }
          .hero-cards { display:none !important; }
          .services-grid { grid-template-columns:1fr 1fr !important; }
          .phones-grid   { grid-template-columns:1fr !important; max-width:360px; margin:0 auto; }
          .trade-cols    { flex-direction:column !important; }
          .steps-grid    { grid-template-columns:repeat(3,1fr) !important; }
          .acc-grid      { grid-template-columns:1fr 1fr !important; }
          .test-grid     { grid-template-columns:1fr !important; }
          .footer-grid   { grid-template-columns:1fr 1fr !important; gap:32px !important; }
          .footer-brand  { grid-column:1/-1 !important; }
          .cta-btns      { flex-direction:column; align-items:center; }
        }
        @media (max-width:520px) {
          .services-grid { grid-template-columns:1fr !important; }
          .acc-grid      { grid-template-columns:1fr !important; }
          .steps-grid    { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position:"sticky", top:0, zIndex:100, background:"#fff", borderBottom:"1px solid #E5E7EB", boxShadow:"0 2px 8px rgba(0,0,0,.06)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:72 }}>

          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:52, height:52, borderRadius:"50%", background:"#111", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Image src="/techfix-logo.png" alt="TechFix" width={42} height={42} style={{ objectFit:"contain" }} />
            </div>
            <div>
              <div style={{ fontWeight:800, fontSize:20, letterSpacing:"-0.02em", color:DARK }}>TechFix</div>
              <div style={{ fontSize:11, color:"#6B7280", fontWeight:500 }}>Assistência Técnica & Venda</div>
            </div>
          </div>

          <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:2 }}>
            {navLinks.map(({ id, label, icon }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{
                background:"none", border:"none", cursor:"pointer", padding:"8px 14px",
                fontSize:14, fontWeight:500, fontFamily:"inherit",
                color: activeSection === id ? PRIMARY : "#374151",
                borderBottom: activeSection === id ? `2px solid ${PRIMARY}` : "2px solid transparent",
                display:"flex", alignItems:"center", gap:6,
              }}>
                <Icon icon={icon} width={16} />
                {label}
              </button>
            ))}
          </div>

          <button className="btn-red" onClick={() => scrollTo("contato")} style={{
            background:PRIMARY, color:"#fff", border:"none", padding:"10px 20px",
            borderRadius:999, fontWeight:700, fontSize:14, cursor:"pointer",
            display:"flex", alignItems:"center", gap:8, fontFamily:"inherit",
          }}>
            <Icon icon="mdi:whatsapp" width={18} />
            Orçamento
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" className="hero-animated-bg" style={{ padding:"60px 24px" }}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-conic" />
        <div className="hero-scanline" />
        <div className="hero-flicker" />
        <div className="hero-cols" style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", gap:48, minHeight:340, position:"relative", zIndex:1 }}>
          <div style={{ flex:1 }}>
            <div className="fu1" style={{ background:"rgba(255,255,255,.15)", borderRadius:999, padding:"6px 16px", display:"inline-flex", alignItems:"center", gap:8, marginBottom:20 }}>
              <Icon icon="mdi:lightning-bolt" width={16} color="#FEF08A" />
              <span style={{ color:"#FEF08A", fontWeight:700, fontSize:13 }}>ASSISTÊNCIA TÉCNICA ESPECIALIZADA</span>
            </div>
            <h1 className="fu2" style={{ color:"#fff", fontSize:"clamp(32px,5vw,60px)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:16 }}>
              TUDO EM<br />
              <span style={{ color:"#FEF08A" }}>CONSERTO DE</span><br />
              CELULAR É NA
            </h1>
            <div className="fu3" style={{ marginBottom:28 }}>
              <div style={{ fontSize:"clamp(40px,7vw,80px)", fontWeight:900, color:"#fff", lineHeight:1, letterSpacing:"-0.03em" }}>TechFix</div>
              <div style={{ fontSize:16, color:"rgba(255,255,255,.85)", fontWeight:500, marginTop:8 }}>Celulares e Assistência</div>
            </div>
            <button className="fu4 btn-red" onClick={() => scrollTo("servicos")} style={{
              background:"#fff", color:PRIMARY, border:"none", padding:"14px 32px",
              borderRadius:999, fontWeight:800, fontSize:15, cursor:"pointer", fontFamily:"inherit",
              boxShadow:"0 8px 24px rgba(0,0,0,.2)", display:"inline-flex", alignItems:"center", gap:8,
            }}>
              VER NOSSOS SERVIÇOS
              <Icon icon="mdi:arrow-right" width={20} />
            </button>
          </div>

          <div className="hero-cards si" style={{ flex:1, display:"flex", gap:16, justifyContent:"center" }}>
            {[
              [
                { icon:"mdi:cellphone-screenshot", label:"Troca de Tela",    color:"#FEF08A" },
                { icon:"mdi:battery-charging",      label:"Troca de Bateria", color:"#BBF7D0" },
                { icon:"mdi:power-plug-outline",    label:"Conector",         color:"#BFDBFE" },
              ],
              [
                { icon:"mdi:camera-outline",        label:"Câmera",           color:"#FBCFE8" },
                { icon:"mdi:cpu-64-bit",            label:"Placa Mãe",        color:"#FDE68A" },
                { icon:"mdi:tools",                 label:"Limpeza",          color:"#C4B5FD" },
              ],
            ].map((col, ci) => (
              <div key={ci} style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {col.map((item) => (
                  <div key={item.label} style={{
                    background:"rgba(255,255,255,.12)", backdropFilter:"blur(8px)",
                    borderRadius:16, padding:"18px 24px", display:"flex", alignItems:"center", gap:14,
                    border:"1px solid rgba(255,255,255,.2)", minWidth:190,
                  }}>
                    <Icon icon={item.icon} width={28} color={item.color} />
                    <span style={{ color:item.color, fontWeight:700, fontSize:15 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background:DARK, overflow:"hidden", padding:"14px 0" }}>
        <div className="marquee-track">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:32, paddingRight:32 }}>
              {[
                { icon:"mdi:cellphone-screenshot", text:"Troca de Tela" },
                { icon:"mdi:battery-charging",      text:"Troca de Bateria" },
                { icon:"mdi:power-plug-outline",    text:"Conserto de Conector" },
                { icon:"mdi:camera-outline",        text:"Câmera e Microfone" },
                { icon:"mdi:cpu-64-bit",            text:"Reparo de Placa" },
                { icon:"mdi:tools",                 text:"Manutenção Geral" },
                { icon:"mdi:headphones",            text:"Acessórios" },
                { icon:"mdi:swap-horizontal",       text:"Aceitamos Trocas" },
              ].map((t) => (
                <span key={t.text} style={{ display:"inline-flex", alignItems:"center", gap:8, whiteSpace:"nowrap" }}>
                  <Icon icon={t.icon} width={16} color={PRIMARY} />
                  <span style={{ color:"#fff", fontWeight:600, fontSize:13 }}>{t.text}</span>
                  <span style={{ color:"#374151", margin:"0 4px" }}>•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ background:"#F9FAFB", padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>NOSSOS SERVIÇOS</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8 }}>Especialistas em Conserto de Celular</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Tudo que seu smartphone precisa em um só lugar</p>
          </div>

          <div className="services-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[
              { icon:"mdi:cellphone-screenshot", label:"Troca de Tela",        desc:"Tela nova com garantia de 6 meses. Substituição profissional para todos os modelos.", popular:true },
              { icon:"mdi:battery-charging",      label:"Troca de Bateria",     desc:"Bateria original com maior duração. Recupere a autonomia do seu aparelho.", popular:false },
              { icon:"mdi:power-plug-outline",    label:"Conserto de Conector", desc:"Problemas com carga? Reparo especializado de entrada de carregador.", popular:false },
              { icon:"mdi:cpu-64-bit",            label:"Reparo de Placa",      desc:"Diagnóstico e reparo de problemas na placa-mãe do smartphone.", popular:false },
              { icon:"mdi:camera-outline",        label:"Câmera e Microfone",   desc:"Problemas com câmera ou áudio? Conserto especializado.", popular:false },
              { icon:"mdi:tools",                 label:"Manutenção Geral",     desc:"Limpeza interna, troca de peças e ajustes para prolongar a vida útil.", popular:false },
            ].map((s) => (
              <div key={s.label} className="service-card" style={{
                background:"#fff", borderRadius:16, padding:28, border:"1px solid #E5E7EB",
                boxShadow:"0 2px 12px rgba(0,0,0,.06)", position:"relative",
              }}>
                {s.popular && (
                  <div style={{
                    position:"absolute", top:-12, left:20, background:"#16A34A",
                    color:"#fff", borderRadius:999, padding:"4px 14px", fontSize:11, fontWeight:700,
                  }}>Mais Procurado</div>
                )}
                <div style={{
                  width:64, height:64, background:PRIMARY, borderRadius:16,
                  display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16,
                }}>
                  <Icon icon={s.icon} width={30} color="#fff" />
                </div>
                <h3 style={{ fontWeight:800, fontSize:18, marginBottom:10 }}>{s.label}</h3>
                <p style={{ color:"#6B7280", fontSize:14, lineHeight:1.65, marginBottom:20 }}>{s.desc}</p>
                <button
                  onClick={() => window.open("https://wa.me/5519999999999?text=Olá! Gostaria de um orçamento para " + s.label, "_blank")}
                  className="btn-red"
                  style={{
                    background:PRIMARY, color:"#fff", border:"none", padding:"10px 20px",
                    borderRadius:999, fontWeight:700, fontSize:13, cursor:"pointer",
                    width:"100%", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                  }}
                >
                  <Icon icon="mdi:whatsapp" width={16} />
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CELULARES ── */}
      <section id="celulares" style={{ background:"#fff", padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>CELULARES À VENDA</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8 }}>Smartphones Novos e Seminovos</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Qualidade garantida com os melhores preços da cidade</p>
          </div>

          <div className="phones-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28 }}>
            {[
              { brand:"APPLE",    name:"iPhone 14 Pro Max", specs:["256GB","5G","Câmera 48MP"],       bg:"#1a1a2e", iconColor:"#E5E7EB" },
              { brand:"SAMSUNG",  name:"Galaxy S23 Ultra",  specs:["512GB","S-Pen","200MP"],          bg:"#0f2027", iconColor:"#BFDBFE" },
              { brand:"MOTOROLA", name:"Edge 40 Pro",       specs:["128GB","144Hz","Carreg. Rápido"], bg:"#2c3e50", iconColor:"#FDE68A" },
            ].map((p) => (
              <div key={p.name} className="phone-card" style={{
                background:"#fff", borderRadius:20, overflow:"hidden",
                border:"1px solid #E5E7EB", boxShadow:"0 4px 16px rgba(0,0,0,.06)",
              }}>
                <div style={{ background:p.bg, height:240, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon icon="mdi:cellphone" width={100} color={p.iconColor} />
                </div>
                <div style={{ padding:"20px 24px 24px" }}>
                  <div style={{ color:PRIMARY, fontWeight:800, fontSize:11, letterSpacing:"0.08em", marginBottom:6 }}>{p.brand}</div>
                  <h3 style={{ fontWeight:800, fontSize:22, letterSpacing:"-0.01em", marginBottom:12 }}>{p.name}</h3>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:20 }}>
                    {p.specs.map((s) => (
                      <span key={s} style={{ background:"#F3F4F6", padding:"4px 10px", borderRadius:999, fontSize:12, fontWeight:600, color:"#374151" }}>{s}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open("https://wa.me/5519999999999?text=Olá! Tenho interesse no " + p.name, "_blank")}
                    className="btn-red"
                    style={{
                      background:PRIMARY, color:"#fff", border:"none", padding:"12px 0",
                      borderRadius:999, fontWeight:700, fontSize:14, cursor:"pointer",
                      width:"100%", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                    }}
                  >
                    <Icon icon="mdi:whatsapp" width={18} />
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:40 }}>
            <button
              onClick={() => window.open("https://wa.me/5519999999999?text=Olá! Quero ver o catálogo completo de celulares.", "_blank")}
              style={{
                background:"none", border:`2px solid ${PRIMARY}`, color:PRIMARY,
                padding:"12px 32px", borderRadius:999, fontWeight:700, fontSize:14,
                cursor:"pointer", fontFamily:"inherit", display:"inline-flex", alignItems:"center", gap:8,
              }}
            >
              Ver Todos os Celulares
              <Icon icon="mdi:arrow-right" width={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TROCAS ── */}
      <section id="trocas" style={{ background:DARK, padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>FAÇA UMA TROCA</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8, color:"#fff" }}>Aceitamos Seu Celular como Entrada</h2>
            <p style={{ color:"#9CA3AF", marginTop:12, fontSize:16 }}>Dê um upgrade no seu smartphone sem burocracia</p>
          </div>

          <div className="trade-cols" style={{ display:"flex", gap:40, alignItems:"flex-start" }}>
            <div style={{ flex:1 }}>
              <h3 style={{ color:"#fff", fontWeight:700, fontSize:20, marginBottom:28 }}>Como funciona a troca?</h3>
              {[
                { n:1, icon:"mdi:cellphone-arrow-down", title:"Traga seu celular",  desc:"Faremos avaliação do estado e valor do seu aparelho" },
                { n:2, icon:"mdi:cellphone-check",      title:"Escolha o novo",     desc:"Selecione entre nossos modelos novos ou seminovos" },
                { n:3, icon:"mdi:cash-check",           title:"Complete o valor",   desc:"Pague apenas a diferença e leve seu novo smartphone" },
              ].map((step) => (
                <div key={step.n} style={{ display:"flex", gap:20, marginBottom:28 }}>
                  <div style={{
                    width:44, height:44, background:PRIMARY, borderRadius:"50%",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                  }}>
                    <Icon icon={step.icon} width={22} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color:"#fff", fontWeight:700, fontSize:16, marginBottom:4 }}>{step.title}</div>
                    <div style={{ color:"#9CA3AF", fontSize:14, lineHeight:1.6 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ flex:1, background:"#1F2937", borderRadius:20, padding:32, border:"1px solid #374151" }}>
              <h3 style={{ color:"#fff", fontWeight:800, fontSize:22, marginBottom:24 }}>Benefícios da Troca</h3>
              <ul style={{ listStyle:"none", marginBottom:28 }}>
                {[
                  "Desconto especial na compra",
                  "Processo rápido e seguro",
                  "Avaliação justa do seu aparelho",
                  "Possibilidade de parcelamento",
                  "Garantia em todos os produtos",
                ].map((b) => (
                  <li key={b} style={{ color:"#D1D5DB", fontSize:15, padding:"10px 0", borderBottom:"1px solid #374151", display:"flex", alignItems:"center", gap:10 }}>
                    <Icon icon="mdi:check-circle" width={18} color="#22C55E" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open("https://wa.me/5519999999999?text=Olá! Quero simular uma troca de celular.", "_blank")}
                className="btn-red"
                style={{
                  background:PRIMARY, color:"#fff", border:"none", padding:"14px 0",
                  borderRadius:12, fontWeight:700, fontSize:15, cursor:"pointer",
                  width:"100%", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                }}
              >
                <Icon icon="mdi:swap-horizontal" width={20} />
                Simular Troca
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section style={{ background:"#F9FAFB", padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>COMO FUNCIONA</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8 }}>Processo de Atendimento</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Da sua solicitação até a entrega do serviço</p>
          </div>

          <div className="steps-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:20 }}>
            {[
              { n:1, icon:"mdi:message-text-outline",   title:"Orçamento",  desc:"Entre em contato e receba um orçamento sem compromisso" },
              { n:2, icon:"mdi:magnify",                 title:"Análise",    desc:"Diagnóstico preciso do problema do seu aparelho" },
              { n:3, icon:"mdi:clipboard-check-outline", title:"Aprovação",  desc:"Aprovação do orçamento antes de iniciar o serviço" },
              { n:4, icon:"mdi:wrench-outline",          title:"Execução",   desc:"Reparo executado por técnicos especializados" },
              { n:5, icon:"mdi:package-variant-closed",  title:"Entrega",    desc:"Testes e entrega com garantia documentada" },
            ].map((step) => (
              <div key={step.n} style={{
                background:"#fff", borderRadius:16, padding:"28px 16px",
                border:"1px solid #E5E7EB", textAlign:"center",
                boxShadow:"0 2px 12px rgba(0,0,0,.04)",
              }}>
                <div style={{
                  width:52, height:52, background:PRIMARY, borderRadius:"50%",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  margin:"0 auto 16px",
                }}>
                  <span style={{ color:"#fff", fontWeight:800, fontSize:20 }}>{step.n}</span>
                </div>
                <Icon icon={step.icon} width={32} color={PRIMARY} style={{ marginBottom:10 }} />
                <h4 style={{ fontWeight:800, fontSize:15, marginBottom:8 }}>{step.title}</h4>
                <p style={{ color:"#6B7280", fontSize:13, lineHeight:1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACESSÓRIOS ── */}
      <section id="acessorios" style={{ background:"#fff", padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>ACESSÓRIOS</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8 }}>Complete seu Smartphone</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Películas, capinhas, carregadores e muito mais</p>
          </div>

          <div className="acc-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {[
              { icon:"mdi:shield-phone-outline",    name:"Capinha Protetora",        desc:"Proteção completa para seu smartphone",      bg:"#F3F4F6", iconColor:"#374151" },
              { icon:"mdi:cellphone-nfc-tap",       name:"Película Vidro Temperado", desc:"Proteção anti-riscos e impacto",              bg:"#EDE9FE", iconColor:"#7C3AED" },
              { icon:"mdi:lightning-bolt",          name:"Carregador Rápido",        desc:"20W com tecnologia de carga rápida",          bg:"#FEF3C7", iconColor:"#D97706" },
              { icon:"mdi:headphones",              name:"Fone Bluetooth",           desc:"Qualidade de áudio premium",                  bg:"#FCE7F3", iconColor:"#BE185D" },
            ].map((a) => (
              <div key={a.name} className="acc-card" style={{
                background:"#fff", borderRadius:20, overflow:"hidden",
                border:"1px solid #E5E7EB", boxShadow:"0 2px 12px rgba(0,0,0,.05)",
              }}>
                <div style={{ background:a.bg, height:160, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon icon={a.icon} width={72} color={a.iconColor} />
                </div>
                <div style={{ padding:"16px 20px 20px" }}>
                  <h4 style={{ fontWeight:800, fontSize:15, marginBottom:6 }}>{a.name}</h4>
                  <p style={{ color:"#6B7280", fontSize:13, marginBottom:16, lineHeight:1.5 }}>{a.desc}</p>
                  <button
                    onClick={() => window.open("https://wa.me/5519999999999?text=Olá! Quero comprar " + a.name, "_blank")}
                    className="btn-red"
                    style={{
                      background:PRIMARY, color:"#fff", border:"none", padding:"10px 0",
                      borderRadius:999, fontWeight:700, fontSize:13, cursor:"pointer",
                      width:"100%", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:6,
                    }}
                  >
                    <Icon icon="mdi:cart-outline" width={16} />
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA URGÊNCIA ── */}
      <section style={{ background:PRIMARY, padding:"60px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:40, opacity:.1 }}>
          <Icon icon="mdi:lightning-bolt" width={160} color="#fff" />
        </div>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ color:"#fff", fontSize:"clamp(28px,4vw,44px)", fontWeight:900, letterSpacing:"-0.02em", marginBottom:12 }}>
            Problema com seu celular?
          </h2>
          <p style={{ color:"rgba(255,255,255,.9)", fontSize:16, marginBottom:16 }}>
            Não perca tempo! Nossa equipe está pronta para atender você agora mesmo.
          </p>
          <div style={{ color:"#FEF08A", fontWeight:800, fontSize:"clamp(20px,3vw,34px)", marginBottom:32, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
            <Icon icon="mdi:clock-fast" width={32} color="#FEF08A" />
            Atendimento em até 2h
          </div>
          <div className="cta-btns" style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <button
              onClick={() => window.open("https://wa.me/5519999999999", "_blank")}
              style={{
                background:"rgba(255,255,255,.15)", border:"2px solid #fff",
                color:"#fff", padding:"14px 28px", borderRadius:999,
                fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"inherit",
                display:"flex", alignItems:"center", gap:8,
              }}
            >
              <Icon icon="mdi:whatsapp" width={20} />
              WhatsApp Imediato
            </button>
            <button
              onClick={() => window.open("tel:+5519999999999")}
              style={{
                background:"#fff", border:"2px solid #fff",
                color:PRIMARY, padding:"14px 28px", borderRadius:999,
                fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"inherit",
                display:"flex", alignItems:"center", gap:8,
              }}
            >
              <Icon icon="mdi:phone" width={20} />
              Ligar Agora
            </button>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" style={{ background:"#F9FAFB", padding:"80px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ color:PRIMARY, fontWeight:700, fontSize:13, letterSpacing:"0.08em", textTransform:"uppercase" }}>O QUE DIZEM</span>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em", marginTop:8 }}>Depoimentos de Clientes</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Veja a experiência de quem já confiou na TechFix</p>
          </div>

          <div className="test-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[
              { name:"Tamirez Leon",   text:"Levei meu celular para trocar a tela e saí de lá com o celular praticamente novo, pois limparam até a parte do áudio, carregador e laterais. Super recomendo!", avatar:"TL" },
              { name:"Marcelo Bastos", text:"Estou muito satisfeito com o atendimento e aquisição do aparelho que comprei. Muito bom mesmo. Obrigado!", avatar:"MB" },
              { name:"Laura Naileth",  text:"Comprei meu telefone com eles super recomendo. Atendimento excelente e produto de qualidade!", avatar:"LN" },
            ].map((t) => (
              <div key={t.name} style={{
                background:"#fff", borderRadius:16, padding:28,
                border:"1px solid #E5E7EB", boxShadow:"0 2px 12px rgba(0,0,0,.05)",
              }}>
                <div style={{ display:"flex", gap:4, marginBottom:16 }}>
                  {Array(5).fill(null).map((_, i) => (
                    <Icon key={i} icon="mdi:star" width={20} color="#FBBF24" />
                  ))}
                </div>
                <p style={{ color:"#374151", fontSize:15, lineHeight:1.7, fontStyle:"italic", marginBottom:24 }}>"{t.text}"</p>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{
                    width:44, height:44, borderRadius:"50%", background:PRIMARY,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:"#fff", fontWeight:700, fontSize:14,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:15 }}>{t.name}</div>
                    <div style={{ color:"#6B7280", fontSize:13 }}>Cliente TechFix</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" style={{ background:"#fff", padding:"80px 24px" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:900, letterSpacing:"-0.02em" }}>Contato</h2>
            <p style={{ color:"#6B7280", marginTop:12, fontSize:16 }}>Entre em contato conosco para um orçamento ou tire suas dúvidas</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/5519999999999?text=Nome: ${formData.nome}%0ATelefone: ${formData.telefone}%0AEmail: ${formData.email}%0AMensagem: ${formData.mensagem}`, "_blank");
          }}>
            {[
              { key:"nome",     placeholder:"Nome Completo", type:"text",  icon:"mdi:account-outline" },
              { key:"telefone", placeholder:"Telefone",      type:"tel",   icon:"mdi:phone-outline" },
              { key:"email",    placeholder:"E-mail",        type:"email", icon:"mdi:email-outline" },
            ].map((f) => (
              <div key={f.key} style={{ position:"relative", marginBottom:16 }}>
                <Icon icon={f.icon} width={18} color="#9CA3AF" style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)" }} />
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={formData[f.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                  style={{
                    width:"100%", padding:"16px 16px 16px 44px",
                    border:"1px solid #E5E7EB", borderRadius:12,
                    fontSize:15, fontFamily:"inherit", background:"#F9FAFB",
                  }}
                />
              </div>
            ))}
            <textarea
              placeholder="Descrição do problema ou dúvida..."
              rows={4}
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              style={{
                width:"100%", padding:"16px", border:"1px solid #E5E7EB",
                borderRadius:12, fontSize:15, marginBottom:24,
                fontFamily:"inherit", background:"#F9FAFB", resize:"vertical",
              }}
            />
            <button type="submit" className="btn-red" style={{
              background:PRIMARY, color:"#fff", border:"none", padding:"16px 36px",
              borderRadius:999, fontWeight:700, fontSize:16, cursor:"pointer",
              fontFamily:"inherit", display:"inline-flex", alignItems:"center", gap:8,
            }}>
              <Icon icon="mdi:whatsapp" width={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:DARK, padding:"60px 24px 30px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:48 }}>
            <div className="footer-brand">
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ width:52, height:52, borderRadius:"50%", background:"#fff", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Image src="/techfix-logo.png" alt="TechFix" width={42} height={42} style={{ objectFit:"contain" }} />
                </div>
                <div>
                  <div style={{ color:"#fff", fontWeight:800, fontSize:20 }}>TechFix</div>
                  <div style={{ color:"#9CA3AF", fontSize:12 }}>Assistência Técnica & Venda</div>
                </div>
              </div>
              <p style={{ color:"#9CA3AF", fontSize:14, lineHeight:1.7, maxWidth:280 }}>
                Especialistas em assistência técnica de celulares. Conserto rápido com garantia e os melhores preços da cidade.
              </p>
              <div style={{ display:"flex", gap:12, marginTop:20 }}>
                {[
                  { href:"https://instagram.com", icon:"mdi:instagram" },
                  { href:"https://wa.me/5519999999999", icon:"mdi:whatsapp" },
                  { href:"https://facebook.com", icon:"mdi:facebook" },
                ].map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noreferrer" style={{
                    background:"#374151", color:"#fff", width:40, height:40,
                    borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
                    textDecoration:"none",
                  }}>
                    <Icon icon={s.icon} width={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color:"#fff", fontWeight:700, fontSize:15, marginBottom:20 }}>Links Rápidos</h4>
              {[
                { label:"Início",      id:"inicio" },
                { label:"Serviços",    id:"servicos" },
                { label:"Celulares",   id:"celulares" },
                { label:"Trocas",      id:"trocas" },
                { label:"Acessórios",  id:"acessorios" },
              ].map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                  display:"block", background:"none", border:"none", color:"#9CA3AF",
                  fontSize:14, padding:"5px 0", cursor:"pointer", fontFamily:"inherit",
                }}>{l.label}</button>
              ))}
            </div>

            <div>
              <h4 style={{ color:"#fff", fontWeight:700, fontSize:15, marginBottom:20 }}>Serviços</h4>
              {["Troca de Tela","Troca de Bateria","Reparo de Placa","Conserto de Conector","Manutenção Geral"].map((s) => (
                <div key={s} style={{ color:"#9CA3AF", fontSize:14, padding:"5px 0" }}>{s}</div>
              ))}
            </div>

            <div>
              <h4 style={{ color:"#fff", fontWeight:700, fontSize:15, marginBottom:20 }}>Contato</h4>
              {[
                { icon:"mdi:map-marker-outline", text:"Campinas, SP" },
                { icon:"mdi:phone-outline",      text:"(19) 99999-9999" },
                { icon:"mdi:clock-outline",      text:"Seg–Sex 9h–18h" },
                { icon:"mdi:clock-outline",      text:"Sáb 9h–14h" },
              ].map((c, i) => (
                <div key={i} style={{ color:"#9CA3AF", fontSize:14, padding:"5px 0", display:"flex", alignItems:"center", gap:8 }}>
                  <Icon icon={c.icon} width={16} color="#6B7280" />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop:"1px solid #374151", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <p style={{ color:"#6B7280", fontSize:13 }}>© 2024 TechFix — Todos os direitos reservados</p>
            <p style={{ color:"#6B7280", fontSize:13 }}>Desenvolvido por <span style={{ color:PRIMARY, fontWeight:700 }}>TenTech</span></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a href="https://wa.me/5519999999999" target="_blank" rel="noreferrer" style={{
        position:"fixed", bottom:24, right:24, width:60, height:60,
        background:"#22C55E", borderRadius:"50%", display:"flex",
        alignItems:"center", justifyContent:"center",
        boxShadow:"0 8px 24px rgba(34,197,94,.4)", textDecoration:"none", zIndex:999,
      }}>
        <Icon icon="mdi:whatsapp" width={30} color="#fff" />
      </a>

      {/* Voltar ao catálogo */}
      <Link href="/" style={{
        position:"fixed", bottom:24, left:24, background:"#fff",
        border:"1px solid #E5E7EB", padding:"10px 16px", borderRadius:999,
        fontSize:13, fontWeight:600, color:"#374151", textDecoration:"none",
        boxShadow:"0 4px 12px rgba(0,0,0,.1)", zIndex:999,
        display:"inline-flex", alignItems:"center", gap:6,
      }}>
        <Icon icon="mdi:arrow-left" width={16} />
        Catálogo
      </Link>
    </div>
  );
}
