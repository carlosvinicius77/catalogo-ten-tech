"use client";
import { useState } from "react";
import Link from "next/link";

/* ── ui-ux-pro-max: Fitness/Gym palette ── */
const C = {
  bg:      "#0F172A",
  bg2:     "#1E293B",
  card:    "#1E2A3A",
  border:  "#374151",
  orange:  "#F97316",
  orange2: "#FB923C",
  green:   "#22C55E",
  red:     "#EF4444",
  fg:      "#F8FAFC",
  muted:   "#94A3B8",
};

const workouts = [
  { emoji:"🔥", cat:"HIIT", title:"Queima Total",    time:"45 min", cal:"520 kcal", level:"Avançado",   color:C.red,    img:"/fit-workout1.jpg" },
  { emoji:"💪", cat:"Força", title:"Upper Body",     time:"60 min", cal:"380 kcal", level:"Intermediário", color:C.orange, img:"/fit-workout2.jpg" },
  { emoji:"🧘", cat:"Yoga",  title:"Flex & Restore", time:"30 min", cal:"180 kcal", level:"Iniciante",   color:C.green,  img:"/fit-workout3.jpg" },
];

const trainers = [
  { name:"Rafael Costa",   role:"HIIT & Cardio",     rating:"4.9", students:"2.4K", img:"/fit-trainer1.jpg", color:C.orange },
  { name:"Ana Beatriz",    role:"Yoga & Mobilidade",  rating:"4.8", students:"1.8K", img:"/fit-trainer2.jpg", color:C.green  },
  { name:"Lucas Mendes",   role:"Musculação & Força", rating:"5.0", students:"3.1K", img:"/fit-trainer3.jpg", color:C.red    },
];

const plans = [
  { name:"Starter",  price:"R$ 49",  period:"/mês",  features:["20 treinos/mês","1 Personal","App mobile","Suporte básico"], hot:false, color:C.border },
  { name:"Pro",      price:"R$ 99",  period:"/mês",  features:["Treinos ilimitados","3 Personals","Plano alimentar","Suporte 24h","Analytics avançado"], hot:true,  color:C.orange },
  { name:"Elite",    price:"R$ 179", period:"/mês",  features:["Tudo do Pro","Personal exclusivo","Consulta nutri","Acesso VIP","Sem anúncios"], hot:false, color:C.green  },
];

const stats = [
  { label:"Treinos feitos",  val:247,  unit:"",   color:C.orange },
  { label:"Calorias queimadas", val:48200, unit:"kcal", color:C.red   },
  { label:"Horas ativas",    val:186,  unit:"h",  color:C.green  },
  { label:"Sequência atual", val:21,   unit:"dias",color:C.orange2},
];

export default function FitnessPage() {
  const [activeWorkout, setActiveWorkout] = useState(0);
  const [activePlan, setActivePlan]       = useState(1);

  return (
    <>
      <style>{`
        /* ui-ux-pro-max: Sports/Fitness font pairing */
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; background:${C.bg}; }
        ::-webkit-scrollbar-thumb { background:${C.orange}60; border-radius:2px; }

        .ft { font-family:'Barlow',sans-serif; background:${C.bg}; color:${C.fg}; overflow-x:hidden; }
        .ft a { text-decoration:none; color:inherit; }
        .cond { font-family:'Barlow Condensed',sans-serif; }

        /* huashu animations */
        @keyframes fadeUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.5} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes bar     { from{width:0} to{width:var(--w)} }
        @keyframes countUp { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }

        /* ── NAV ── */
        .ft-nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 72px; height:68px;
          background:rgba(15,23,42,.9); backdrop-filter:blur(20px);
          border-bottom:1px solid ${C.border};
          animation:fadeIn .6s ease both;
        }
        .ft-logo { display:flex; align-items:center; gap:10px; }
        .ft-logo-ico { width:38px; height:38px; border-radius:10px; background:linear-gradient(135deg,${C.orange},${C.orange2}); display:flex; align-items:center; justify-content:center; font-size:20px; }
        .ft-logo-txt { font-size:20px; font-weight:800; letter-spacing:-0.5px; font-family:'Barlow Condensed',sans-serif; }
        .ft-logo-txt span { color:${C.orange}; }
        .ft-links { display:flex; gap:32px; }
        .ft-links a { font-size:15px; font-weight:500; color:${C.muted}; transition:color .2s; }
        .ft-links a:hover { color:${C.fg}; }
        .ft-nav-cta { background:${C.orange}; border:none; border-radius:8px; padding:10px 24px; color:#fff; font-size:14px; font-weight:700; font-family:inherit; cursor:pointer; transition:all .2s; }
        .ft-nav-cta:hover { background:${C.orange2}; transform:translateY(-1px); box-shadow:0 6px 18px ${C.orange}40; }

        /* ── HERO ── */
        .ft-hero { position:relative; min-height:100vh; display:flex; align-items:center; overflow:hidden; }
        .ft-hero-bg { position:absolute; inset:0; }
        .ft-hero-bg img { width:100%; height:100%; object-fit:cover; object-position:center; }
        .ft-hero-bg::after { content:''; position:absolute; inset:0; background:linear-gradient(105deg,rgba(15,23,42,.95) 40%,rgba(15,23,42,.5) 100%); }
        .ft-hero-content { position:relative; z-index:2; padding:0 72px; max-width:700px; }
        .ft-hero-badge { display:inline-flex; align-items:center; gap:8px; background:${C.orange}15; border:1px solid ${C.orange}40; border-radius:999px; padding:6px 16px; font-size:13px; font-weight:600; color:${C.orange}; margin-bottom:20px; animation:fadeIn .7s ease .2s both; }
        .ft-dot { width:7px; height:7px; border-radius:50%; background:${C.orange}; animation:pulse 1.5s ease-in-out infinite; }
        .ft-h1 { font-size:clamp(48px,7vw,96px); font-weight:900; line-height:.95; letter-spacing:-1px; margin-bottom:20px; text-transform:uppercase; animation:fadeUp .8s ease .3s both; }
        .ft-h1 .or { color:${C.orange}; }
        .ft-hero-sub { font-size:clamp(16px,1.4vw,19px); color:${C.muted}; line-height:1.7; max-width:460px; margin-bottom:36px; animation:fadeUp .8s ease .45s both; }
        .ft-hero-btns { display:flex; gap:14px; flex-wrap:wrap; animation:fadeUp .8s ease .6s both; }
        .ft-btn-main { background:${C.orange}; border:none; border-radius:10px; padding:15px 36px; color:#fff; font-size:16px; font-weight:700; font-family:inherit; cursor:pointer; transition:all .25s; box-shadow:0 6px 20px ${C.orange}40; }
        .ft-btn-main:hover { background:${C.orange2}; transform:translateY(-3px); box-shadow:0 12px 30px ${C.orange}55; }
        .ft-btn-ghost { background:transparent; border:2px solid ${C.border}; border-radius:10px; padding:15px 36px; color:${C.fg}; font-size:16px; font-weight:600; font-family:inherit; cursor:pointer; transition:all .25s; }
        .ft-btn-ghost:hover { border-color:${C.orange}; color:${C.orange}; transform:translateY(-2px); }
        .ft-hero-numbers { display:flex; gap:40px; margin-top:52px; animation:fadeUp .8s ease .75s both; flex-wrap:wrap; }
        .ft-num-val { font-size:clamp(26px,3vw,38px); font-weight:900; font-family:'Barlow Condensed',sans-serif; color:${C.orange}; }
        .ft-num-lbl { font-size:13px; color:${C.muted}; margin-top:2px; }

        /* ── SECTIONS ── */
        .ft-section { padding:80px 72px; }
        .ft-section-tag { font-size:12px; font-weight:700; color:${C.orange}; letter-spacing:3px; text-transform:uppercase; margin-bottom:8px; }
        .ft-section-title { font-size:clamp(28px,3.5vw,48px); font-weight:900; text-transform:uppercase; letter-spacing:-0.5px; line-height:1; margin-bottom:12px; }
        .ft-section-sub { font-size:16px; color:${C.muted}; max-width:480px; line-height:1.7; margin-bottom:48px; }

        /* ── WORKOUTS ── */
        .ft-workouts-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .ft-workout-card {
          border-radius:16px; overflow:hidden; cursor:pointer;
          border:2px solid transparent; transition:all .25s; position:relative;
        }
        .ft-workout-card.active, .ft-workout-card:hover { border-color:var(--c); transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.4); }
        .ft-workout-img { width:100%; height:200px; object-fit:cover; display:block; }
        .ft-workout-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.85) 40%,transparent 100%); }
        .ft-workout-badge { position:absolute; top:14px; left:14px; background:var(--c); border-radius:6px; padding:4px 12px; font-size:12px; font-weight:700; color:#fff; }
        .ft-workout-body { position:absolute; bottom:0; left:0; right:0; padding:18px; }
        .ft-workout-title { font-size:20px; font-weight:800; font-family:'Barlow Condensed',sans-serif; margin-bottom:8px; }
        .ft-workout-meta { display:flex; gap:14px; font-size:13px; color:rgba(255,255,255,.7); }
        .ft-workout-level { margin-top:8px; display:inline-block; background:rgba(255,255,255,.15); border-radius:999px; padding:3px 10px; font-size:11px; font-weight:600; }

        /* ── PROGRESS ── */
        .ft-progress-wrap { background:${C.bg2}; border-radius:20px; padding:40px; border:1px solid ${C.border}; max-width:900px; margin:0 auto; }
        .ft-progress-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:32px; }
        .ft-avatar { width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg,${C.orange},${C.red}); display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0; }
        .ft-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:32px; }
        .ft-stat-card { background:${C.bg}; border-radius:12px; padding:18px; border:1px solid ${C.border}; transition:all .2s; }
        .ft-stat-card:hover { border-color:var(--c); transform:translateY(-2px); }
        .ft-stat-card-val { font-size:28px; font-weight:800; font-family:'Barlow Condensed',sans-serif; color:var(--c); }
        .ft-stat-card-lbl { font-size:12px; color:${C.muted}; margin-top:4px; }
        .ft-bar-label { display:flex; justify-content:space-between; font-size:13px; color:${C.muted}; margin-bottom:6px; }
        .ft-bar-track { background:${C.border}; border-radius:999px; height:8px; margin-bottom:14px; overflow:hidden; }
        .ft-bar-fill { height:100%; border-radius:999px; animation:bar 1.5s ease .5s both; }
        .ft-week-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:8px; margin-top:24px; }
        .ft-week-day { text-align:center; }
        .ft-week-bar-wrap { height:60px; display:flex; align-items:flex-end; justify-content:center; }
        .ft-week-bar { width:20px; border-radius:4px 4px 0 0; transition:height .3s ease; }
        .ft-week-lbl { font-size:11px; color:${C.muted}; margin-top:6px; }

        /* ── TRAINERS ── */
        .ft-trainers-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .ft-trainer-card { background:${C.card}; border-radius:20px; overflow:hidden; border:1px solid ${C.border}; transition:all .25s; cursor:pointer; }
        .ft-trainer-card:hover { border-color:var(--c); transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,.3); }
        .ft-trainer-img { width:100%; height:260px; object-fit:cover; object-position:top; display:block; }
        .ft-trainer-body { padding:20px 22px 24px; }
        .ft-trainer-name { font-size:20px; font-weight:800; font-family:'Barlow Condensed',sans-serif; margin-bottom:4px; }
        .ft-trainer-role { font-size:13px; color:${C.muted}; margin-bottom:14px; }
        .ft-trainer-stats { display:flex; gap:20px; margin-bottom:16px; }
        .ft-trainer-stat-val { font-size:16px; font-weight:700; color:var(--c); }
        .ft-trainer-stat-lbl { font-size:11px; color:${C.muted}; }
        .ft-btn-trainer { width:100%; background:var(--c)15; border:1.5px solid var(--c)60; border-radius:8px; padding:10px; color:var(--c); font-size:14px; font-weight:700; font-family:inherit; cursor:pointer; transition:all .2s; }
        .ft-btn-trainer:hover { background:var(--c)30; }

        /* ── PLANS ── */
        .ft-plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:1000px; margin:0 auto; }
        .ft-plan-card { background:${C.card}; border-radius:20px; padding:32px; border:2px solid var(--c); position:relative; transition:all .25s; }
        .ft-plan-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.3); }
        .ft-plan-card.hot { background:${C.orange}08; border-width:2px; }
        .ft-plan-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:${C.orange}; color:#fff; font-size:11px; font-weight:800; padding:4px 16px; border-radius:999px; letter-spacing:1px; white-space:nowrap; }
        .ft-plan-name { font-size:14px; font-weight:700; color:${C.muted}; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px; }
        .ft-plan-price { font-size:clamp(36px,4vw,52px); font-weight:900; font-family:'Barlow Condensed',sans-serif; color:var(--c); line-height:1; }
        .ft-plan-period { font-size:15px; color:${C.muted}; }
        .ft-plan-features { list-style:none; margin:24px 0; display:flex; flex-direction:column; gap:10px; }
        .ft-plan-features li { display:flex; align-items:center; gap:10px; font-size:14px; color:${C.fg}; }
        .ft-plan-features li::before { content:"✓"; color:var(--c); font-weight:700; font-size:14px; flex-shrink:0; }
        .ft-plan-btn { width:100%; background:var(--c); border:none; border-radius:10px; padding:14px; color:#fff; font-size:16px; font-weight:700; font-family:inherit; cursor:pointer; transition:all .25s; }
        .ft-plan-btn:hover { filter:brightness(1.1); transform:translateY(-2px); }

        /* ── FOOTER ── */
        .ft-footer { background:${C.bg2}; border-top:1px solid ${C.border}; padding:48px 72px 28px; }
        .ft-footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:36px; }
        .ft-footer-col h4 { font-size:13px; font-weight:700; color:${C.orange}; letter-spacing:2px; text-transform:uppercase; margin-bottom:14px; }
        .ft-footer-col a { display:block; font-size:14px; color:${C.muted}; margin-bottom:9px; transition:color .2s; }
        .ft-footer-col a:hover { color:${C.fg}; }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px){
          .ft-nav,.ft-hero-content,.ft-section,.ft-footer{ padding-left:32px; padding-right:32px; }
          .ft-workouts-grid,.ft-trainers-grid { grid-template-columns:1fr 1fr; }
          .ft-stats-grid { grid-template-columns:1fr 1fr; }
          .ft-plans-grid { grid-template-columns:1fr; max-width:440px; }
          .ft-footer-grid { grid-template-columns:1fr 1fr; gap:28px; }
        }
        @media (max-width:640px){
          .ft-nav { padding:0 20px; height:58px; }
          .ft-links { display:none; }
          .ft-hero-content { padding:0 20px; }
          .ft-section { padding:52px 20px; }
          .ft-workouts-grid,.ft-trainers-grid { grid-template-columns:1fr; }
          .ft-stats-grid { grid-template-columns:1fr 1fr; }
          .ft-week-grid { grid-template-columns:repeat(7,1fr); gap:4px; }
          .ft-hero-numbers { gap:24px; }
          .ft-footer { padding:40px 20px 24px; }
          .ft-footer-grid { grid-template-columns:1fr 1fr; gap:20px; }
        }
      `}</style>

      <div className="ft">

        {/* voltar */}
        <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:"rgba(15,23,42,.95)", borderBottom:`1px solid ${C.border}`, padding:"5px 24px" }}>
          <Link href="/" style={{ color:C.orange, fontSize:11, letterSpacing:2, fontWeight:700 }}>← CATÁLOGO TENTECH</Link>
        </div>

        {/* ══ NAV ══ */}
        <nav className="ft-nav" style={{ top:28 }}>
          <div className="ft-logo">
            <div className="ft-logo-ico">⚡</div>
            <span className="ft-logo-txt cond">FIT<span>ZONE</span></span>
          </div>
          <div className="ft-links">
            {["Treinos","Instrutores","Planos","App"].map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <button className="ft-nav-cta">COMEÇAR GRÁTIS</button>
        </nav>

        {/* ══ HERO ══ */}
        <section className="ft-hero">
          <div className="ft-hero-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fit-hero.jpg" alt="Fitness" />
          </div>
          <div className="ft-hero-content" style={{ paddingTop:100 }}>
            <div className="ft-hero-badge"><span className="ft-dot"/>&nbsp;+50.000 ALUNOS ATIVOS</div>
            <h1 className="ft-h1 cond">
              TREINE<br/>
              <span className="or">MAIS FORTE.</span><br/>
              EVOLUA MAIS<br/>RÁPIDO.
            </h1>
            <p className="ft-hero-sub">
              Treinos personalizados, acompanhamento em tempo real e os melhores instrutores do Brasil. Sua transformação começa hoje.
            </p>
            <div className="ft-hero-btns">
              <button className="ft-btn-main">⚡ COMEÇAR AGORA</button>
              <button className="ft-btn-ghost">▶ VER COMO FUNCIONA</button>
            </div>
            <div className="ft-hero-numbers">
              {[["500+","Treinos"],["50K+","Alunos"],["98%","Satisfação"],["4.9★","Avaliação"]].map(([v,l]) => (
                <div key={l}>
                  <div className="ft-num-val cond">{v}</div>
                  <div className="ft-num-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WORKOUTS ══ */}
        <section className="ft-section">
          <p className="ft-section-tag">Programas</p>
          <h2 className="ft-section-title cond">TREINOS EM <span style={{ color:C.orange }}>DESTAQUE</span></h2>
          <p className="ft-section-sub">Programas criados por especialistas para todos os níveis. Do iniciante ao atleta avançado.</p>
          <div className="ft-workouts-grid">
            {workouts.map((w,i) => (
              <div key={w.title} className={`ft-workout-card${activeWorkout===i?" active":""}`}
                style={{ "--c":w.color } as React.CSSProperties}
                onClick={() => setActiveWorkout(i)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.img} alt={w.title} className="ft-workout-img" />
                <div className="ft-workout-overlay"/>
                <div className="ft-workout-badge">{w.emoji} {w.cat}</div>
                <div className="ft-workout-body">
                  <div className="ft-workout-title">{w.title}</div>
                  <div className="ft-workout-meta">
                    <span>⏱ {w.time}</span>
                    <span>🔥 {w.cal}</span>
                  </div>
                  <span className="ft-workout-level">{w.level}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROGRESS TRACKING ══ */}
        <section className="ft-section" style={{ background:C.bg2, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
          <p className="ft-section-tag">Dashboard</p>
          <h2 className="ft-section-title cond">ACOMPANHE SEU <span style={{ color:C.green }}>PROGRESSO</span></h2>
          <p className="ft-section-sub">Visualize sua evolução em tempo real. Dados que motivam, resultados que transformam.</p>
          <div className="ft-progress-wrap">
            {/* Header */}
            <div className="ft-progress-header">
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <div className="ft-avatar">💪</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:17 }}>Carlos Vinicius</div>
                  <div style={{ fontSize:13, color:C.muted }}>Plano Pro · Semana 12</div>
                </div>
              </div>
              <div style={{ background:`${C.orange}15`, border:`1px solid ${C.orange}40`, borderRadius:8, padding:"8px 16px", fontSize:13, fontWeight:700, color:C.orange }}>
                🔥 21 dias seguidos!
              </div>
            </div>

            {/* Stats */}
            <div className="ft-stats-grid">
              {stats.map(s => (
                <div key={s.label} className="ft-stat-card" style={{ "--c":s.color } as React.CSSProperties}>
                  <div className="ft-stat-card-val">{s.val.toLocaleString("pt-BR")}<span style={{ fontSize:16 }}> {s.unit}</span></div>
                  <div className="ft-stat-card-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Bars */}
            <div>
              {[
                { label:"Força",    pct:78, color:C.orange },
                { label:"Cardio",   pct:62, color:C.red    },
                { label:"Flexibilidade", pct:45, color:C.green },
              ].map(b => (
                <div key={b.label}>
                  <div className="ft-bar-label"><span>{b.label}</span><span style={{ color:b.color, fontWeight:700 }}>{b.pct}%</span></div>
                  <div className="ft-bar-track">
                    <div className="ft-bar-fill" style={{ "--w":`${b.pct}%`, width:`${b.pct}%`, background:`linear-gradient(90deg,${b.color}80,${b.color})` } as React.CSSProperties}/>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly chart */}
            <div>
              <div style={{ fontSize:13, color:C.muted, marginBottom:12, fontWeight:600 }}>ATIVIDADE SEMANAL</div>
              <div className="ft-week-grid">
                {[
                  { d:"SEG", h:40, active:true  },
                  { d:"TER", h:65, active:true  },
                  { d:"QUA", h:30, active:true  },
                  { d:"QUI", h:80, active:true  },
                  { d:"SEX", h:55, active:true  },
                  { d:"SAB", h:20, active:false },
                  { d:"DOM", h:0,  active:false },
                ].map(day => (
                  <div key={day.d} className="ft-week-day">
                    <div className="ft-week-bar-wrap">
                      <div className="ft-week-bar" style={{ height:`${day.h}%`, background:day.active ? `linear-gradient(to top,${C.orange},${C.orange2})` : C.border }}/>
                    </div>
                    <div className="ft-week-lbl">{day.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ TRAINERS ══ */}
        <section className="ft-section">
          <p className="ft-section-tag">Equipe</p>
          <h2 className="ft-section-title cond">NOSSOS <span style={{ color:C.orange }}>INSTRUTORES</span></h2>
          <p className="ft-section-sub">Especialistas certificados prontos para guiar sua evolução. Escolha o seu e comece hoje.</p>
          <div className="ft-trainers-grid">
            {trainers.map(t => (
              <div key={t.name} className="ft-trainer-card" style={{ "--c":t.color } as React.CSSProperties}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="ft-trainer-img" />
                <div className="ft-trainer-body">
                  <div className="ft-trainer-name">{t.name}</div>
                  <div className="ft-trainer-role">{t.role}</div>
                  <div className="ft-trainer-stats">
                    <div><div className="ft-trainer-stat-val">⭐ {t.rating}</div><div className="ft-trainer-stat-lbl">Avaliação</div></div>
                    <div><div className="ft-trainer-stat-val">{t.students}</div><div className="ft-trainer-stat-lbl">Alunos</div></div>
                  </div>
                  <button className="ft-btn-trainer">VER PERFIL →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PLANS ══ */}
        <section className="ft-section" style={{ background:C.bg2, borderTop:`1px solid ${C.border}`, textAlign:"center" }}>
          <p className="ft-section-tag" style={{ textAlign:"center" }}>Preços</p>
          <h2 className="ft-section-title cond" style={{ textAlign:"center" }}>ESCOLHA SEU <span style={{ color:C.orange }}>PLANO</span></h2>
          <p className="ft-section-sub" style={{ margin:"0 auto 48px", textAlign:"center" }}>Sem contratos. Cancele quando quiser. Resultados garantidos ou devolvemos seu dinheiro.</p>
          <div className="ft-plans-grid">
            {plans.map((p,i) => (
              <div key={p.name}
                className={`ft-plan-card${p.hot?" hot":""}`}
                style={{ "--c":p.hot ? C.orange : p.color, cursor:"pointer" } as React.CSSProperties}
                onClick={() => setActivePlan(i)}
              >
                {p.hot && <div className="ft-plan-badge">🔥 MAIS POPULAR</div>}
                <div className="ft-plan-name">{p.name}</div>
                <div className="ft-plan-price cond">{p.price}<span className="ft-plan-period">{p.period}</span></div>
                <ul className="ft-plan-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <button className="ft-plan-btn">COMEÇAR AGORA</button>
              </div>
            ))}
          </div>
          <p style={{ marginTop:28, fontSize:13, color:C.muted }}>✓ 7 dias grátis · ✓ Sem cartão de crédito · ✓ Cancele quando quiser</p>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section style={{ background:`linear-gradient(135deg,${C.orange},#EA580C)`, padding:"60px 72px", textAlign:"center" }}>
          <h2 className="ft-section-title cond" style={{ color:"#fff", marginBottom:12 }}>COMECE SUA TRANSFORMAÇÃO <span style={{ color:"#fff9" }}>HOJE</span></h2>
          <p style={{ color:"rgba(255,255,255,.85)", fontSize:17, marginBottom:28, maxWidth:500, margin:"0 auto 28px" }}>Primeira semana grátis. Sem compromisso. Resultados reais.</p>
          <button className="ft-btn-main" style={{ background:"#fff", color:C.orange, fontSize:17, padding:"16px 48px" }}>⚡ EXPERIMENTE GRÁTIS</button>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="ft-footer">
          <div className="ft-footer-grid">
            <div>
              <div className="ft-logo" style={{ marginBottom:14 }}>
                <div className="ft-logo-ico">⚡</div>
                <span className="ft-logo-txt cond">FIT<span style={{ color:C.orange }}>ZONE</span></span>
              </div>
              <p style={{ fontSize:14, color:C.muted, lineHeight:1.7, maxWidth:240 }}>Transformando vidas através do fitness desde 2020. Mais de 50.000 alunos satisfeitos.</p>
            </div>
            {[["Treinos",["HIIT","Força","Yoga","Cardio"]],["Empresa",["Sobre nós","Blog","Carreiras","Parceiros"]],["Suporte",["FAQ","Contato","Política","Termos"]]].map(([t,ls]) => (
              <div key={t as string} className="ft-footer-col">
                <h4>{t as string}</h4>
                {(ls as string[]).map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
            <span style={{ fontSize:12, color:C.muted }}>© 2025 FitZone. Todos os direitos reservados.</span>
            <span style={{ fontSize:12, color:C.muted }}>Feito com 💪 por TenTech</span>
          </div>
        </footer>

      </div>
    </>
  );
}
