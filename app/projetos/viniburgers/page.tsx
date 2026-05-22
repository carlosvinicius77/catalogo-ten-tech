"use client";
import Link from "next/link";
import { useState } from "react";

const ORANGE = "#E8500A";
const ORANGE_DARK = "#C43D00";
const CREAM = "#FDF6EE";
const DARK = "#1A1208";
const MUTED = "#6B5744";
const LIGHT_BROWN = "#F5E6D3";
const GOLD = "#F5A623";

const menu = [
  { name: "Vini Smash Classic", desc: "Blend angus fresco, queijo americano derretido, molho secreto da casa, picles e cebola crocante no brioche artesanal.", price: "R$ 38", tag: "MAIS PEDIDO" },
  { name: "Vini Double Stack", desc: "Dois smash patties, cheddar duplo, bacon defumado, cebola caramelizada e maionese trufada.", price: "R$ 52", tag: "PREMIUM" },
  { name: "Vini Crispy Chicken", desc: "Frango empanado artesanal, coleslaw da casa, molho ranch e queijo prato no brioche.", price: "R$ 36", tag: "CROCANTE" },
  { name: "Vini Veggie", desc: "Blend de grão-de-bico artesanal, queijo derretido, tomate, rúcula e molho de ervas frescas.", price: "R$ 34", tag: "VEGETARIANO" },
];

const reviews = [
  { name: "Mariana S.", stars: 5, text: "Melhor hambúrguer que já comi em Campinas. O pão brioche chegou quentinho e perfeito. Virei cliente fixa!" },
  { name: "Rafael T.", stars: 5, text: "Pedi às 20h numa sexta, chegou em 28 minutos. Carne suculenta, molho incrível. Perfeito demais." },
  { name: "Lucas M.", stars: 5, text: "Finalmente um smash burger de verdade aqui em Campinas. Crust perfeito, blend equilibrado. Vale muito." },
  { name: "Cláudia O.", stars: 5, text: "Minha família inteira amou. Pedimos toda semana agora. O Vini Double Stack é absurdo de bom." },
];

const faqs = [
  { q: "Qual é a área de entrega?", a: "Entregamos em toda Campinas e região. Digite seu CEP no pedido para confirmar cobertura." },
  { q: "Qual o tempo médio de entrega?", a: "Em média 25 minutos. Garantimos até 30 min — se passar, o próximo hambúrguer é por nossa conta." },
  { q: "Os ingredientes são realmente frescos?", a: "Sim. Compramos diariamente de fornecedores locais de Campinas. Nada fica estocado mais de 24h." },
  { q: "Tem opção vegetariana?", a: "Sim! O Vini Veggie é feito com blend de grão-de-bico artesanal e não abre mão do sabor." },
  { q: "Posso personalizar meu hambúrguer?", a: "Claro. Basta informar no pedido ou mandar mensagem no WhatsApp que a gente ajusta tudo." },
  { q: "Como posso pagar?", a: "Cartão, Pix ou dinheiro na entrega. Pagamento online também disponível." },
];

const steps = [
  { step: "1", title: "Escolha seu burguer", desc: "Acesse o cardápio online ou chame no WhatsApp", time: "menos de 2 min" },
  { step: "2", title: "A gente prepara na hora", desc: "Sua carne vai pra chapa assim que o pedido chega", time: "cerca de 15 min" },
  { step: "3", title: "Receba em casa quentinho", desc: "Entrega própria, sem terceirizar, sem atraso", time: "até 30 min" },
];

export default function ViniBurgers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeUp   { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn  { from { opacity:0; transform:scale(.96) } to { opacity:1; transform:scale(1) } }
        @keyframes pulse    { 0%,100% { opacity:1 } 50% { opacity:.6 } }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: ${CREAM}; color: ${DARK}; }

        .hero-badge    { animation: fadeIn  .6s ease both; animation-delay: .1s }
        .hero-title    { animation: fadeUp  .7s ease both; animation-delay: .2s }
        .hero-subtitle { animation: fadeUp  .7s ease both; animation-delay: .35s }
        .hero-points   { animation: fadeUp  .7s ease both; animation-delay: .45s }
        .hero-cta      { animation: fadeUp  .7s ease both; animation-delay: .55s }
        .hero-img      { animation: scaleIn .9s ease both; animation-delay: .25s }

        .btn-primary {
          background: ${ORANGE};
          color: #fff;
          border: none;
          padding: 16px 36px;
          border-radius: 999px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s, background .2s;
          display: inline-block;
          text-decoration: none;
          letter-spacing: .01em;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(232,80,10,.35); background: ${ORANGE_DARK}; }

        .btn-secondary {
          background: transparent;
          color: ${ORANGE};
          border: 2px solid ${ORANGE};
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s;
          display: inline-block;
          text-decoration: none;
        }
        .btn-secondary:hover { background: ${ORANGE}; color: #fff; }

        .section { padding: 96px 24px; max-width: 1100px; margin: 0 auto; }
        .section-full { padding: 96px 24px; }
        .section-title {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: ${DARK};
        }

        .card {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,.07);
          transition: transform .25s, box-shadow .25s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,.13); }

        .tag {
          background: ${ORANGE};
          color: #fff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          display: inline-block;
        }

        .star { color: ${GOLD}; font-size: 16px; }

        .faq-item {
          border-bottom: 1px solid ${LIGHT_BROWN};
          padding: 20px 0;
          cursor: pointer;
        }
        .faq-question {
          font-weight: 600;
          font-size: 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${DARK};
        }
        .faq-answer {
          margin-top: 12px;
          color: ${MUTED};
          line-height: 1.7;
          font-size: 15px;
        }

        .compare-table { width: 100%; border-collapse: collapse; }
        .compare-table th, .compare-table td {
          padding: 14px 20px;
          text-align: center;
          border-bottom: 1px solid ${LIGHT_BROWN};
          font-size: 15px;
        }
        .compare-table th { font-weight: 700; background: ${LIGHT_BROWN}; }
        .compare-table td:first-child { text-align: left; font-weight: 500; }
        .compare-table tr:last-child td { border-bottom: none; }

        .avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: ${LIGHT_BROWN};
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 18px; color: ${ORANGE};
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .section { padding: 64px 20px; }
          .hide-mobile { display: none !important; }
          .stack-mobile { flex-direction: column !important; }
          .full-mobile { width: 100% !important; }
        }
        @media (max-width: 640px) {
          .section { padding: 48px 16px; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: `1px solid ${LIGHT_BROWN}`, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,.06)" }}>
        <Link href="/" style={{ color: MUTED, textDecoration: "none", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
          ← Catálogo
        </Link>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: DARK }}>
          ViniBurgers
        </span>
        <a href="#pedir" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Peça Agora</a>
      </nav>

      {/* ── 1. HERO ── */}
      <section style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2D1A0A 100%)`, color: "#fff", padding: "100px 24px 80px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,80,10,.2)", border: `1px solid rgba(232,80,10,.4)`, borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: ORANGE, animation: "pulse 1.5s infinite", display: "inline-block" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: ORANGE, letterSpacing: ".05em" }}>CAMPINAS, SP — ENTREGA EM 30 MIN</span>
            </div>

            <h1 className="hero-title" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 6vw, 66px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 20 }}>
              O Hambúrguer Artesanal que Vicia de&nbsp;
              <em style={{ color: ORANGE }}>Verdade.</em>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: 18, lineHeight: 1.65, color: "#C4A882", marginBottom: 32, maxWidth: 480, textWrap: "pretty" as "pretty" }}>
              Carne fresca moída todo dia, pão brioche artesanal e entrega garantida em até 30 minutos — ou o próximo é por nossa conta.
            </p>

            <ul className="hero-points" style={{ listStyle: "none", marginBottom: 40, display: "flex", flexDirection: "column", gap: 10 }}>
              {["🥩 Carne fresca, nunca congelada", "🍞 Pão brioche assado diariamente", "⏱ Entrega em até 30 min garantida"].map(p => (
                <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, color: "#E8D5BE" }}>{p}</li>
              ))}
            </ul>

            <div className="hero-cta" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="#pedir" className="btn-primary" style={{ fontSize: 18, padding: "18px 40px" }}>Peça Agora</a>
              <a href="#cardapio" className="btn-secondary" style={{ borderColor: "#C4A882", color: "#C4A882" }}>Ver Cardápio</a>
            </div>

            <p style={{ marginTop: 16, color: "#8A7260", fontSize: 14 }}>Sem taxa mínima · Entrega grátis no 1º pedido</p>

            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: -4 }}>
                {["M","R","L","C","D"].map((l,i) => (
                  <div key={l} style={{ width: 36, height: 36, borderRadius: "50%", background: `hsl(${20+i*15},60%,${45+i*5}%)`, border: "2px solid #2D1A0A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", marginLeft: i ? -8 : 0 }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(s => <span key={s} className="star">★</span>)}</div>
                <p style={{ fontSize: 13, color: "#8A7260" }}>+4.800 pedidos · nota 4,9 no Google</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-img hide-mobile" style={{ flex: "0 0 380px", height: 380, borderRadius: 24, background: `radial-gradient(circle at 40% 40%, ${ORANGE}33 0%, transparent 70%), radial-gradient(circle at 70% 70%, ${GOLD}22 0%, transparent 60%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 160, border: `1px solid rgba(232,80,10,.2)` }}>
            🍔
          </div>
        </div>
      </section>

      {/* ── 2. INTRODUÇÃO ── */}
      <section style={{ background: LIGHT_BROWN }}>
        <div className="section" style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 12 }}>POR QUE A VINIBURGERS</p>
          <h2 className="section-title" style={{ marginBottom: 20, maxWidth: 640, margin: "0 auto 20px" }}>
            Chega de hambúrguer sem graça pagando caro por isso.
          </h2>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 16px", textWrap: "pretty" as "pretty" }}>
            Você já pediu delivery e recebeu aquele disco de borracha empapado, sem charme nenhum? Nós também ficamos cansados disso.
          </p>
          <p style={{ fontSize: 18, color: DARK, lineHeight: 1.7, maxWidth: 580, margin: "0 auto", fontWeight: 500, textWrap: "pretty" as "pretty" }}>
            A ViniBurgers nasceu para acabar com o hambúrguer sem graça em Campinas. Ingredientes frescos, processo artesanal e entrega rápida — do jeito que tem que ser.
          </p>
        </div>
      </section>

      {/* ── 3. PROVA SOCIAL ── */}
      <section style={{ background: "#fff" }}>
        <div className="section">
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>DEPOIMENTOS</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>O que nossos clientes dizem</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {reviews.map(r => (
              <div key={r.name} className="card">
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {[1,2,3,4,5].map(s => <span key={s} className="star">★</span>)}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: MUTED, marginBottom: 16, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="avatar">{r.name[0]}</div>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40, padding: "20px", background: LIGHT_BROWN, borderRadius: 16 }}>
            <p style={{ fontSize: 16, color: MUTED }}>
              <strong style={{ color: DARK }}>Nota 4,9 ★ no Google</strong> · +4.800 pedidos entregues · Eleita melhor hambúrguer artesanal de Campinas
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. CARDÁPIO ── */}
      <section id="cardapio" style={{ background: CREAM }}>
        <div className="section">
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>CARDÁPIO</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Feito pra viciar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {menu.map(item => (
              <div key={item.name} className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="tag">{item.tag}</span>
                  <span style={{ fontWeight: 800, fontSize: 20, color: ORANGE }}>{item.price}</span>
                </div>
                <div style={{ fontSize: 64, textAlign: "center", padding: "8px 0" }}>🍔</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.2 }}>{item.name}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BENEFÍCIOS + DIFERENCIADORES ── */}
      <section style={{ background: DARK, color: "#fff" }}>
        <div className="section">
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>POR QUE NOS ESCOLHER</p>
          <h2 className="section-title" style={{ color: "#fff", marginBottom: 48 }}>
            O que faz a ViniBurgers diferente
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
            {[
              { icon: "🥩", title: "Carne fresca, nunca congelada", desc: "Blend exclusivo moído todo dia. Garantido por contrato com fornecedor local de Campinas." },
              { icon: "🍞", title: "Pão brioche próprio", desc: "Assado na casa diariamente. Não comprado de terceiros. Macio por fora, firme por dentro." },
              { icon: "⏱", title: "30 min ou o próximo é grátis", desc: "Entrega própria, sem terceirizar. Se atrasar, o próximo hambúrguer é por nossa conta." },
              { icon: "📦", title: "Embalagem térmica exclusiva", desc: "Chega quente e crocante. Não encharcado. Desenvolvida especialmente para manter o ponto." },
              { icon: "💬", title: "Atendimento humano no WhatsApp", desc: "Sem robô, sem chatbot. Uma pessoa real para tirar sua dúvida e personalizar seu pedido." },
              { icon: "🌱", title: "Sem conservantes", desc: "Sem aditivos artificiais. Ingredientes selecionados toda manhã diretamente de produtores locais." },
            ].map(b => (
              <div key={b.title} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: 28, transition: "background .2s" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#fff" }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "#A88F7A", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Tabela comparativa */}
          <div style={{ background: "rgba(255,255,255,.05)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)" }}>
            <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#fff" }}>ViniBurgers vs. a concorrência</h3>
            </div>
            <table className="compare-table" style={{ color: "#C4A882" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", color: "#fff" }}>Critério</th>
                  <th style={{ color: ORANGE }}>ViniBurgers</th>
                  <th style={{ color: "#8A7260" }}>Fast food apps</th>
                  <th style={{ color: "#8A7260" }}>Outras hamburguerias</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Carne fresca", "✅", "❌", "Às vezes"],
                  ["Pão artesanal próprio", "✅", "❌", "❌"],
                  ["Entrega garantida 30 min", "✅", "❌", "❌"],
                  ["Nota Google 4,9+", "✅", "—", "Raramente"],
                  ["Sem conservantes", "✅", "❌", "Às vezes"],
                ].map(row => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} style={{ color: i === 0 ? "#E8D5BE" : i === 1 ? "#7FD99A" : "#8A7260", borderBottom: "1px solid rgba(255,255,255,.07)", background: i === 1 ? "rgba(232,80,10,.07)" : "transparent" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. COMO FUNCIONA ── */}
      <section style={{ background: LIGHT_BROWN }}>
        <div className="section">
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>COMO FUNCIONA</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Do pedido ao seu prato em 3 passos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{ position: "relative" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: ORANGE, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, marginBottom: 20 }}>{s.step}</div>
                {i < steps.length - 1 && (
                  <div className="hide-mobile" style={{ position: "absolute", top: 28, left: 60, right: -32, height: 2, background: `linear-gradient(to right, ${ORANGE}, ${LIGHT_BROWN})`, opacity: .4 }} />
                )}
                <h3 style={{ fontWeight: 700, fontSize: 19, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 8 }}>{s.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: ORANGE }}>⏱ {s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. OFERTA ── */}
      <section id="pedir" style={{ background: ORANGE }}>
        <div className="section" style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: "rgba(255,255,255,.7)", marginBottom: 12 }}>OFERTA ESPECIAL</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 20 }}>
            Combo Primeira Vez — Conheça e se Apaixone
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
            {["🍔 1 Hambúrguer Clássico da Casa", "🍟 1 Porção de Fritas Crocantes", "🥤 1 Bebida 350ml", "🚚 Entrega grátis no 1º pedido"].map(item => (
              <div key={item} style={{ background: "rgba(255,255,255,.15)", borderRadius: 12, padding: "12px 20px", color: "#fff", fontWeight: 600, fontSize: 15 }}>{item}</div>
            ))}
          </div>
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 42, fontWeight: 900, color: "#fff" }}>R$ 49</span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,.7)", marginLeft: 8 }}>no combo</span>
          </div>
          <a href="https://wa.me/5519999999999?text=Quero%20o%20Combo%20Primeira%20Vez%20ViniBurgers!" target="_blank" rel="noopener" style={{ background: "#fff", color: ORANGE, padding: "18px 48px", borderRadius: 999, fontSize: 18, fontWeight: 800, textDecoration: "none", display: "inline-block", boxShadow: "0 8px 32px rgba(0,0,0,.2)", transition: "transform .2s, box-shadow .2s" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,.3)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.transform = ""; (e.target as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,.2)"; }}>
            Quero Meu Combo Agora →
          </a>
          <p style={{ marginTop: 16, color: "rgba(255,255,255,.7)", fontSize: 14 }}>
            Sem taxa mínima · Pagamento no recebimento ou online · Campinas e região
          </p>
        </div>
      </section>

      {/* ── 8. SOBRE ── */}
      <section style={{ background: "#fff" }}>
        <div className="section" style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 160px", textAlign: "center" }} className="hide-mobile">
            <div style={{ width: 160, height: 160, borderRadius: "50%", background: LIGHT_BROWN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, margin: "0 auto" }}>👨‍🍳</div>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>SOBRE NÓS</p>
            <h2 className="section-title" style={{ marginBottom: 20 }}>A obsessão por hambúrguer que virou negócio em Campinas</h2>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, marginBottom: 16, textWrap: "pretty" as "pretty" }}>
              A ViniBurgers nasceu da frustração de não encontrar em Campinas um hambúrguer que realmente valesse o preço cobrado. Decidimos criar o que sempre quisemos comer — com carne fresca, pão próprio e processo artesanal de verdade.
            </p>
            <p style={{ fontSize: 17, color: DARK, lineHeight: 1.75, fontWeight: 500, textWrap: "pretty" as "pretty" }}>
              Hoje somos uma equipe unida por uma missão simples: <strong>entregar o melhor hambúrguer da sua vida, toda vez que você pedir.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. AVATARES / PROVA SOCIAL ── */}
      <section style={{ background: CREAM }}>
        <div className="section">
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>A QUEM AJUDAMOS</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Feito pra quem leva comida a sério</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {[
              { emoji: "💼", tipo: "O Executivo Ocupado", desc: "Jornada corrida, sem tempo pra sair. Quer algo gostoso, rápido e sem decepção.", depo: '"Peço toda semana no horário de almoço. Chega antes da reunião acabar."', nome: "André F." },
              { emoji: "👨‍👩‍👧‍👦", tipo: "A Família no Fim de Semana", desc: "Quer agradar todo mundo sem sair de casa. Opções para todos os gostos.", depo: '"Pedimos 6 hambúrgueres diferentes. Cada um saiu do jeito que a família pediu."', nome: "Patrícia N." },
              { emoji: "🎯", tipo: "O Foodie Exigente", desc: "Conhece o mercado, já provou tudo, difícil de impressionar — mas ficou fã.", depo: '"Finalmente um smash burger técnico de verdade em Campinas. Crust perfeito."', nome: "Thiago R." },
            ].map(a => (
              <div key={a.tipo} className="card">
                <div style={{ fontSize: 40, marginBottom: 16 }}>{a.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: DARK }}>{a.tipo}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, marginBottom: 20 }}>{a.desc}</p>
                <div style={{ borderTop: `1px solid ${LIGHT_BROWN}`, paddingTop: 16 }}>
                  <p style={{ fontSize: 14, color: MUTED, fontStyle: "italic", lineHeight: 1.6, marginBottom: 8 }}>{a.depo}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: DARK }}>— {a.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQs ── */}
      <section style={{ background: "#fff" }}>
        <div className="section" style={{ maxWidth: 720 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", color: ORANGE, marginBottom: 8 }}>DÚVIDAS</p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>Perguntas frequentes</h2>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-question">
                <span>{f.q}</span>
                <span style={{ color: ORANGE, fontSize: 22, fontWeight: 400, transition: "transform .2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
              </div>
              {openFaq === i && <p className="faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. PONTO FINAL ── */}
      <section style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2D1A0A 100%)`, color: "#fff", textAlign: "center" }}>
        <div className="section">
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 32 }}>
            Pronto para o melhor hambúrguer<br /><em style={{ color: ORANGE }}>de Campinas?</em>
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            {["🥩 Carne fresca, nunca congelada", "🍞 Pão brioche artesanal feito hoje", "⏱ Entrega garantida em 30 min", "⭐ +4.800 clientes satisfeitos", "🚚 Entrega grátis no 1º pedido"].map(b => (
              <span key={b} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "#E8D5BE" }}>{b}</span>
            ))}
          </div>
          <a href="https://wa.me/5519999999999?text=Quero%20pedir%20na%20ViniBurgers!" target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 20, padding: "20px 52px", boxShadow: `0 8px 40px rgba(232,80,10,.5)` }}>
            Peça Agora via WhatsApp
          </a>
          <p style={{ marginTop: 16, color: "#8A7260", fontSize: 14 }}>Sem taxa mínima · Pagamento facilitado · Campinas e região</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,.08)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#fff", marginBottom: 8 }}>ViniBurgers</p>
        <p style={{ fontSize: 14, color: "#6B5744" }}>Campinas, SP · CEP 13061-371</p>
        <p style={{ fontSize: 13, color: "#4A3828", marginTop: 16 }}>© 2025 ViniBurgers · Todos os direitos reservados</p>
      </footer>
    </>
  );
}
