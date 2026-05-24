"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── Constantes ──────────────────────────────────── */
const NAVY   = "#0f1f3d";
const NAVY2  = "#1a3060";
const DARK   = "#090f1e";
const GOLD   = "#c9a96e";
const GOLD2  = "#b8943a";
const CREAM  = "#F8F7F4";
const WA_NUM = "5511999999999"; // ← altere para o número real
const WA_URL = (msg: string) =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

/* ─── Dados ───────────────────────────────────────── */
const navLinks = [
  { label: "Início",           href: "#inicio" },
  { label: "Sobre Nós",        href: "#sobre"  },
  { label: "Áreas de Atuação", href: "#areas"  },
  { label: "Como Atuamos",     href: "#processo" },
  { label: "Contato",          href: "#contato" },
];

const pilares = [
  { emoji: "🤝", title: "Ética e Transparência",      desc: "Atuamos com integridade absoluta. Você recebe informações claras e honestas em cada etapa." },
  { emoji: "👤", title: "Atendimento Personalizado",   desc: "Cada caso é único. Dedicamos atenção individual para construir a melhor estratégia jurídica." },
  { emoji: "🔒", title: "Sigilo Absoluto",             desc: "Todas as informações são protegidas pelo sigilo profissional garantido pelo Código de Ética da OAB." },
  { emoji: "🎯", title: "Foco em Resultados",          desc: "Buscamos as melhores soluções jurídicas com rigor técnico, comprometimento e responsabilidade." },
];

const areas = [
  { emoji: "👨‍👩‍👧", title: "Direito de Família",       desc: "Divórcios, guarda, pensão alimentícia, inventários e partilha de bens." },
  { emoji: "🏗️",  title: "Direito Trabalhista",       desc: "Rescisões indevidas, horas extras, assédio moral, FGTS e reclamações trabalhistas." },
  { emoji: "🏥",  title: "Previdenciário (INSS)",      desc: "Aposentadorias, auxílio-doença, BPC/LOAS e revisão de benefícios negados pelo INSS." },
  { emoji: "💼",  title: "Direito Empresarial",        desc: "Constituição de empresas, contratos comerciais, recuperação judicial e assessoria contínua." },
  { emoji: "🏠",  title: "Direito Civil",              desc: "Contratos, indenizações, responsabilidade civil, questões imobiliárias e usucapião." },
  { emoji: "🛡️", title: "Direito do Consumidor",      desc: "Cobranças indevidas, cancelamentos abusivos, danos morais e materiais em relações de consumo." },
];

const passos = [
  { num: "01", title: "Primeiro Contato",      desc: "Você nos conta sua situação e nós ouvimos com atenção. Esclarecemos dúvidas iniciais e compreendemos o contexto completo do seu caso." },
  { num: "02", title: "Análise Estratégica",   desc: "Nossa equipe jurídica examina cada detalhe, pesquisa legislação e jurisprudência aplicáveis e elabora a estratégia mais sólida." },
  { num: "03", title: "Ação e Acompanhamento", desc: "Tomamos as medidas jurídicas necessárias e mantemos você informado em cada etapa, com total transparência sobre o andamento." },
];

const contatos = [
  { emoji: "📍", label: "Endereço",              value: "Av. Paulista, 1000 — Conj. 201\nBela Vista, São Paulo — SP" },
  { emoji: "📞", label: "Telefone",              value: "(11) 3000-0000" },
  { emoji: "✉️", label: "E-mail",               value: "contato@alvesassociados.adv.br" },
  { emoji: "🕐", label: "Horário de Atendimento", value: "Seg–Sex: 9h às 18h\nSábados: 9h às 12h" },
];

/* ─── Componente principal ────────────────────────── */
export default function AdvocaciaAlves() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════════════ ESTILOS ══════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .adv-root { font-family: 'Inter', system-ui, sans-serif; color: #1a1a1a; background: #fff; -webkit-font-smoothing: antialiased; scroll-behavior: smooth; }
        .adv-root * { box-sizing: border-box; }
        .adv-root a { text-decoration: none; color: inherit; }

        .serif { font-family: 'Playfair Display', Georgia, serif; }

        /* Animações */
        @keyframes fadeUp  { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(.97); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounce  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

        .anim-fi  { animation: fadeIn  .7s ease both; }
        .anim-fu  { animation: fadeUp  .7s ease both; }
        .anim-si  { animation: scaleIn .9s ease both; }
        .d1{animation-delay:.10s} .d2{animation-delay:.20s} .d3{animation-delay:.30s}
        .d4{animation-delay:.40s} .d5{animation-delay:.50s} .d6{animation-delay:.60s}
        .bounce { animation: bounce 2s ease-in-out infinite; }

        /* Linha dourada */
        .gold-rule::before { content:""; display:block; width:52px; height:3px; background:${GOLD}; margin-bottom:1.25rem; }

        /* Nav */
        .adv-header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; transition: background .3s, box-shadow .3s; }
        .adv-header.scrolled { background: rgba(15,31,61,.96); backdrop-filter: blur(12px); box-shadow: 0 2px 24px rgba(0,0,0,.3); }
        .adv-header.top      { background: transparent; }

        /* Cards hover */
        .card-hover { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,.15); }

        /* Botão primário */
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:${GOLD}; color:${NAVY}; font-weight:600; padding:14px 32px; border-radius:4px; font-family:'Inter',sans-serif; font-size:15px; transition: all .2s ease; cursor:pointer; border:none; }
        .btn-gold:hover { background:${GOLD2}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.2); }

        .btn-outline { display:inline-flex; align-items:center; gap:8px; border:1.5px solid rgba(255,255,255,.3); color:#fff; font-weight:500; padding:14px 32px; border-radius:4px; font-size:15px; transition: all .2s ease; }
        .btn-outline:hover { border-color:${GOLD}; color:${GOLD}; }

        /* Scrollbar */
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:${DARK}; }
        ::-webkit-scrollbar-thumb { background:${GOLD}; border-radius:3px; }

        /* Responsivo básico */
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hero-grid  { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .step-grid  { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: clamp(2rem, 8vw, 3rem) !important; }
        }
        @media (max-width: 640px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
          .areas-grid  { grid-template-columns: 1fr !important; }
          .contact-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="adv-root">

        {/* ══════════════ HEADER ══════════════ */}
        <header className={`adv-header ${scrolled ? "scrolled" : "top"}`}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Logo */}
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚖️</div>
              <div>
                <div className="serif" style={{ color: "#fff", fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>Alves &amp; Associados</div>
                <div style={{ color: GOLD, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 300 }}>Advocacia</div>
              </div>
            </a>

            {/* Nav desktop */}
            <nav className="hide-mobile" style={{ display: "flex", gap: 32 }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,.75)", fontSize: 13, fontWeight: 400, letterSpacing: ".02em", transition: "color .2s" }}
                   onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                   onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.75)")}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <a href={WA_URL("Olá, gostaria de agendar uma consulta.")} target="_blank" rel="noopener noreferrer"
               className="hide-mobile btn-gold" style={{ padding: "10px 22px", fontSize: 13 }}>
              📱 Agendar Consulta
            </a>

            {/* Hamburger mobile */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", padding: 8, display: "none" }}
                    className="show-mobile" aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Menu mobile */}
          {menuOpen && (
            <div style={{ background: NAVY, borderTop: `1px solid ${GOLD}30`, padding: "16px 24px 24px" }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                   style={{ display: "block", padding: "12px 0", color: "rgba(255,255,255,.8)", fontSize: 14, borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                  {l.label}
                </a>
              ))}
              <a href={WA_URL("Olá, gostaria de agendar uma consulta.")} target="_blank" rel="noopener noreferrer"
                 className="btn-gold" style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
                📱 Agendar Consulta
              </a>
            </div>
          )}
        </header>

        {/* ══════════════ HERO ══════════════ */}
        <section id="inicio" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: NAVY, overflow: "hidden" }}>
          {/* Imagem de fundo */}
          <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
                 alt="Escritório de advocacia" fill style={{ objectFit: "cover", opacity: 0.18 }} priority sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${NAVY} 40%, ${NAVY}99 70%, ${NAVY}44 100%)` }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

              {/* Texto */}
              <div>
                <span className="anim-fi d1" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 24, border: `1px solid ${GOLD}44`, padding: "6px 16px", borderRadius: 999 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, animation: "bounce 1.5s infinite" }} />
                  Escritório de Advocacia Especializado
                </span>

                <h1 className="serif hero-title anim-fu d2" style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                  Defendendo seus{" "}
                  <em style={{ color: GOLD }}>direitos</em>{" "}
                  com excelência, ética e segurança jurídica.
                </h1>

                <p className="anim-fu d3" style={{ color: "rgba(255,255,255,.75)", fontSize: 17, lineHeight: 1.7, marginBottom: 40, maxWidth: 520 }}>
                  Há mais de <strong style={{ color: "#fff" }}>10 anos</strong>, a Alves &amp; Associados atua com rigor técnico
                  e atendimento humanizado em Direito de Família, Trabalhista, Previdenciário e Empresarial.
                </p>

                <div className="anim-fu d4" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
                  <a href={WA_URL("Olá, gostaria de falar com um especialista.")} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    📱 Fale com um Especialista Agora
                  </a>
                  <a href="#areas" className="btn-outline">Nossas Especialidades</a>
                </div>

                {/* Stats */}
                <div className="anim-fu d5" style={{ display: "flex", gap: 40, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.1)" }}>
                  {[["10+", "Anos de Experiência"], ["500+", "Casos Concluídos"], ["4", "Especialidades"]].map(([num, lbl]) => (
                    <div key={lbl}>
                      <div className="serif" style={{ fontSize: 30, fontWeight: 700, color: GOLD }}>{num}</div>
                      <div style={{ color: "rgba(255,255,255,.5)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foto lateral (desktop) */}
              <div className="hide-mobile anim-si d3" style={{ position: "relative" }}>
                <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,.5)" }}>
                  <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                         alt="Advogado" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="600px" />
                  <div style={{ position: "absolute", inset: 0, boxShadow: `inset 0 0 0 1px ${GOLD}44`, borderRadius: 16 }} />
                </div>
                {/* Cartão flutuante */}
                <div style={{ position: "absolute", bottom: -20, left: -16, background: NAVY2, color: "#fff", padding: "20px 24px", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,.4)", maxWidth: 200, borderTop: `3px solid ${GOLD}` }}>
                  <div className="serif" style={{ fontSize: 28, fontWeight: 700, color: GOLD }}>10+</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", lineHeight: 1.5, marginTop: 4 }}>Anos defendendo direitos com ética</div>
                </div>
              </div>
            </div>
          </div>

          {/* Seta bounce */}
          <a href="#pilares" className="bounce" style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", color: `${GOLD}88`, fontSize: 22, zIndex: 2 }}>↓</a>
        </section>

        {/* ══════════════ PILARES ══════════════ */}
        <section id="pilares" style={{ background: NAVY, padding: "88px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>Nossos Pilares</p>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#fff", fontWeight: 700 }}>
                O compromisso que norteia nossa atuação
              </h2>
            </div>

            <div className="pillar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {pilares.map(({ emoji, title, desc }) => (
                <div key={title} className="card-hover"
                     style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 16, padding: 32 }}
                     onMouseEnter={e => (e.currentTarget.style.borderColor = `${GOLD}55`)}
                     onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.09)")}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `${GOLD}18`, border: `1px solid ${GOLD}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>{emoji}</div>
                  <div style={{ width: 32, height: 3, background: GOLD, marginBottom: 16 }} />
                  <h3 className="serif" style={{ color: "#fff", fontSize: 17, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ÁREAS DE ATUAÇÃO ══════════════ */}
        <section id="areas" style={{ background: CREAM, padding: "88px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 56, maxWidth: 560 }}>
              <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>Especialidades</p>
              <h2 className="serif gold-rule" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: NAVY, fontWeight: 700, marginBottom: 16 }}>
                Áreas de Atuação
              </h2>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: 15 }}>
                Contamos com equipe multidisciplinar preparada para as principais demandas jurídicas com expertise e dedicação.
              </p>
            </div>

            <div className="areas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {areas.map(({ emoji, title, desc }) => (
                <div key={title} className="card-hover"
                     style={{ background: "#fff", border: "1px solid #e8e4dc", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}
                     onMouseEnter={e => (e.currentTarget.style.borderColor = `${GOLD}55`)}
                     onMouseLeave={e => (e.currentTarget.style.borderColor = "#e8e4dc")}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20, transition: "background .3s" }}>{emoji}</div>
                  <h3 className="serif" style={{ color: NAVY, fontSize: 17, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
                  <a href={WA_URL(`Olá, gostaria de saber mais sobre ${title}.`)} target="_blank" rel="noopener noreferrer"
                     style={{ color: GOLD, fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, transition: "color .2s" }}
                     onMouseEnter={e => (e.currentTarget.style.color = GOLD2)}
                     onMouseLeave={e => (e.currentTarget.style.color = GOLD)}>
                    Consultar esta área →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ SOBRE ══════════════ */}
        <section id="sobre" style={{ background: "#fff", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

              {/* Foto */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.15)", maxWidth: 420 }}>
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                         alt="Dr. Carlos Alves" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="500px" />
                </div>
                {/* Cartão de credencial */}
                <div style={{ position: "absolute", bottom: -20, right: 0, background: NAVY, color: "#fff", padding: "20px 24px", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,.2)", maxWidth: 200, borderTop: `3px solid ${GOLD}` }}>
                  <div className="serif" style={{ fontSize: 28, fontWeight: 700, color: GOLD }}>10+</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", lineHeight: 1.5, marginTop: 4 }}>Anos de dedicação à advocacia</div>
                </div>
                {/* Canto dourado decorativo */}
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, borderLeft: `2px solid ${GOLD}44`, borderTop: `2px solid ${GOLD}44`, borderRadius: "8px 0 0 0", pointerEvents: "none" }} />
              </div>

              {/* Texto */}
              <div>
                <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>Sobre o Escritório</p>
                <h2 className="serif gold-rule" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: NAVY, fontWeight: 700, marginBottom: 28 }}>
                  Tradição, técnica e comprometimento jurídico
                </h2>

                <div style={{ color: "#555", lineHeight: 1.75, fontSize: 15 }}>
                  <p style={{ marginBottom: 18 }}>
                    Fundado em 2014, o escritório <strong style={{ color: NAVY }}>Alves &amp; Associados Advocacia</strong> nasceu do desejo de oferecer serviço jurídico de alto padrão com a sensibilidade e proximidade que todo cliente merece.
                  </p>
                  <p style={{ marginBottom: 18 }}>
                    Nossa missão: ser o parceiro jurídico de confiança de pessoas físicas e empresas, assegurando seus direitos com estratégia, rigor técnico e total transparência em cada etapa do processo.
                  </p>
                  <p>
                    Acreditamos que o Direito é, acima de tudo, uma ferramenta de justiça e equilíbrio. Por isso, tratamos cada caso como único, com a atenção individualizada que sua situação exige.
                  </p>
                </div>

                {/* Destaques */}
                <div style={{ margin: "28px 0" }}>
                  {["Membros ativos da OAB com inscrição regular", "Pós-graduação em áreas de especialidade", "Atualização constante em legislação e jurisprudência", "Compromisso irrestrito com o Código de Ética da OAB"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                      <span style={{ color: GOLD, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ color: "#555", fontSize: 14 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* OAB badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 12, border: `1px solid ${NAVY}18`, borderRadius: 10, padding: "12px 20px", background: CREAM }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: GOLD, fontSize: 10, fontWeight: 700 }}>OAB</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: NAVY, fontSize: 13 }}>OAB/SP nº 000.000</div>
                    <div style={{ color: "#888", fontSize: 12 }}>Inscrição regular e ativa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ PROCESSO ══════════════ */}
        <section id="processo" style={{ background: NAVY, padding: "88px 24px", overflow: "hidden" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>Nossa Metodologia</p>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>Como Atuamos</h2>
              <p style={{ color: "rgba(255,255,255,.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
                Um processo simples, transparente e centrado em você — para que saiba exatamente o que esperar desde o primeiro momento.
              </p>
            </div>

            <div className="step-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, position: "relative" }}>
              {/* Linha conectora */}
              <div className="hide-mobile" style={{ position: "absolute", top: 48, left: "20%", right: "20%", height: 1, background: `linear-gradient(to right, transparent, ${GOLD}50, transparent)` }} />

              {passos.map(({ num, title, desc }) => (
                <div key={num} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "inline-block", marginBottom: 28 }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", border: `2px solid ${GOLD}44`, background: `${GOLD}14`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                      {num === "01" ? "💬" : num === "02" ? "🔍" : "📋"}
                    </div>
                    <div style={{ position: "absolute", top: -8, right: -8, width: 22, height: 22, borderRadius: "50%", background: GOLD, color: NAVY, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {parseInt(num)}
                    </div>
                  </div>
                  <h3 className="serif" style={{ color: "#fff", fontSize: 19, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 64 }}>
              <a href={WA_URL("Olá, gostaria de iniciar meu atendimento.")} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Iniciar meu atendimento
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ CONTATO ══════════════ */}
        <section id="contato" style={{ background: CREAM, padding: "88px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>Fale Conosco</p>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: NAVY, fontWeight: 700, marginBottom: 16 }}>Contato e Localização</h2>
              <p style={{ color: "#666", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                Estamos disponíveis para ouvi-lo. Entre em contato e agende sua consulta com um dos nossos especialistas.
              </p>
            </div>

            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

              {/* Infos */}
              <div>
                <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                  {contatos.map(({ emoji, label, value }) => (
                    <div key={label} style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #e8e4dc", boxShadow: "0 2px 12px rgba(0,0,0,.04)" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 14 }}>{emoji}</div>
                      <p style={{ color: GOLD, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{label}</p>
                      <p style={{ color: "#444", fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</p>
                    </div>
                  ))}
                </div>

                <a href={WA_URL("Olá, gostaria de agendar uma consulta.")} target="_blank" rel="noopener noreferrer"
                   style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "#25D366", color: "#fff", fontWeight: 600, padding: "16px 24px", borderRadius: 14, fontSize: 15, transition: "all .2s", width: "100%" }}
                   onMouseEnter={e => { e.currentTarget.style.background = "#1da851"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                   onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: 22 }}>📱</span>
                  Agendar Consulta pelo WhatsApp
                </a>
              </div>

              {/* Mapa */}
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.1)", border: "1px solid #e8e4dc", height: 440 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754945447745!2d-46.65560368502143!3d-23.561437684682435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer style={{ background: DARK, padding: "56px 24px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,.08)", marginBottom: 32 }}>

              {/* Logo + desc */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${GOLD}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚖️</div>
                  <div>
                    <div className="serif" style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Alves &amp; Associados</div>
                    <div style={{ color: GOLD, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}>Advocacia</div>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,.4)", fontSize: 12, lineHeight: 1.7 }}>
                  Escritório especializado em Direito de Família, Trabalhista, Previdenciário e Empresarial. Ética, técnica e comprometimento.
                </p>
              </div>

              {/* Links */}
              <div>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, marginBottom: 16, letterSpacing: ".04em" }}>Navegação</p>
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,.4)", fontSize: 12, marginBottom: 10, transition: "color .2s" }}
                     onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                     onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.4)")}>
                    {l.label}
                  </a>
                ))}
              </div>

              {/* OAB */}
              <div>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, marginBottom: 16, letterSpacing: ".04em" }}>Registro Profissional</p>
                <p style={{ color: "rgba(255,255,255,.4)", fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>
                  <span style={{ color: GOLD }}>OAB/SP</span> nº 000.000 — Inscrição regular e ativa
                </p>
                <p style={{ color: "rgba(255,255,255,.3)", fontSize: 11, lineHeight: 1.65 }}>
                  Este site tem caráter estritamente informativo, em conformidade com o Código de Ética da OAB e o Provimento nº 205/2021 do CFOAB.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <p style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>
                © {new Date().getFullYear()} Alves &amp; Associados Advocacia. Todos os direitos reservados.
              </p>
              <div style={{ display: "flex", gap: 24 }}>
                {["Política de Privacidade", "Termos de Uso"].map(l => (
                  <a key={l} href="#" style={{ color: "rgba(255,255,255,.3)", fontSize: 12, transition: "color .2s" }}
                     onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                     onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.3)")}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* ══════════════ BOTÃO WHATSAPP FLUTUANTE ══════════════ */}
        <a href={WA_URL("Olá, gostaria de agendar uma consulta jurídica.")} target="_blank" rel="noopener noreferrer"
           aria-label="WhatsApp" title="Fale conosco pelo WhatsApp"
           style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", alignItems: "center", gap: 10, background: NAVY, color: "#fff", padding: "12px 20px 12px 14px", borderRadius: 999, boxShadow: "0 4px 24px rgba(0,0,0,.3)", transition: "all .2s ease", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14 }}
           onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,.4)"; }}
           onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,.3)"; }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>📱</div>
          <span>Fale Conosco</span>
        </a>

        {/* ══════════════ BOTÃO VOLTAR ══════════════ */}
        <div style={{ position: "fixed", top: 88, left: 16, zIndex: 99 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(15,31,61,.85)", color: "rgba(255,255,255,.7)", fontSize: 12, padding: "8px 14px", borderRadius: 999, backdropFilter: "blur(8px)", transition: "color .2s" }}>
            ← Catálogo
          </Link>
        </div>

      </div>
    </>
  );
}
