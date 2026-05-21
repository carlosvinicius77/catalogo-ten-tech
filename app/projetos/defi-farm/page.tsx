"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

/* ── Design tokens (ui-ux-pro-max cyberpunk search) ── */
const T = {
  bg:     "#0A0A0F",
  card:   "#12121A",
  card2:  "#1A1A26",
  border: "#2A2A3A",
  green:  "#00FF88",
  cyan:   "#00D4FF",
  pink:   "#FF00FF",
  orange: "#F7931A",
  red:    "#FF3366",
  fg:     "#E0E0E0",
  muted:  "#6B7280",
};

const pools = [
  { pair:"ETH / USDC", apy:"124.8%", tvl:"R$ 48.2M", vol:"R$ 3.1M", color:T.cyan,   gain:true  },
  { pair:"BTC / ETH",  apy:"89.4%",  tvl:"R$ 31.7M", vol:"R$ 2.4M", color:T.orange, gain:true  },
  { pair:"FARM/ USDT", apy:"312.6%", tvl:"R$ 12.9M", vol:"R$ 890K", color:T.green,  gain:true  },
  { pair:"SOL / USDC", apy:"67.2%",  tvl:"R$ 22.1M", vol:"R$ 1.8M", color:T.pink,   gain:false },
];

const tokenomics = [
  { label:"Farming Rewards", pct:40, color:T.green  },
  { label:"Liquidez",        pct:25, color:T.cyan   },
  { label:"Equipe",          pct:15, color:T.pink   },
  { label:"Tesouro",         pct:12, color:T.orange },
  { label:"Marketing",       pct:8,  color:"#A78BFA" },
];

const tickers = [
  "FARM +312.6% APY","ETH $3,842","BTC $67,420","SOL $182","TVL $114.9M",
  "FARM +312.6% APY","ETH $3,842","BTC $67,420","SOL $182","TVL $114.9M",
];

export default function DeFiFarm() {
  const [amount, setAmount]   = useState("1000");
  const [period, setPeriod]   = useState("365");
  const [selApy, setSelApy]   = useState("124.8");
  const [walletConnected, setWalletConnected] = useState(false);
  const [glitch, setGlitch]   = useState(false);

  const apy    = parseFloat(selApy) / 100;
  const days   = parseInt(period);
  const invest = parseFloat(amount) || 0;
  const earned = invest * apy * (days / 365);
  const total  = invest + earned;

  useEffect(() => {
    const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 200); }, 4000);
    return () => clearInterval(t);
  }, []);

  const neon = (color: string, size = 10) =>
    `0 0 ${size}px ${color}, 0 0 ${size * 3}px ${color}40`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; background:${T.bg}; }
        ::-webkit-scrollbar-thumb { background:${T.green}40; border-radius:2px; }

        .df { font-family:'Space Grotesk',sans-serif; background:${T.bg}; color:${T.fg}; overflow-x:hidden; }
        .df a { text-decoration:none; color:inherit; }
        .mono { font-family:'JetBrains Mono',monospace; }
        .orbit { font-family:'Orbitron',monospace; }

        /* scanlines overlay */
        .df::before {
          content:''; position:fixed; inset:0; z-index:1; pointer-events:none;
          background:repeating-linear-gradient(transparent 0,transparent 2px,rgba(0,255,136,.02) 2px,rgba(0,255,136,.02) 4px);
        }

        /* huashu animations */
        @keyframes fadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes glow-pulse { 0%,100%{box-shadow:0 0 8px ${T.green}60} 50%{box-shadow:0 0 24px ${T.green}} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes glitch  {
          0%{transform:translateX(0) skewX(0)}
          20%{transform:translateX(-3px) skewX(-2deg)}
          40%{transform:translateX(3px) skewX(2deg)}
          60%{transform:translateX(-2px)}
          80%{transform:translateX(2px)}
          100%{transform:translateX(0) skewX(0)}
        }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        /* NAV */
        .df-nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 72px; height:68px;
          background:rgba(10,10,15,.8); backdrop-filter:blur(20px);
          border-bottom:1px solid ${T.border};
        }
        .df-logo { display:flex; align-items:center; gap:10px; }
        .df-logo-icon {
          width:36px; height:36px;
          background:linear-gradient(135deg,${T.green},${T.cyan});
          clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
          display:flex; align-items:center; justify-content:center; font-size:18px;
        }
        .df-logo-text { font-size:18px; font-weight:900; letter-spacing:2px; color:${T.green}; }
        .df-nav-links { display:flex; gap:36px; }
        .df-nav-links a { font-size:14px; font-weight:500; color:${T.muted}; letter-spacing:1px; text-transform:uppercase; transition:color .2s; }
        .df-nav-links a:hover { color:${T.green}; text-shadow:${neon(T.green, 8)}; }
        .df-wallet-btn {
          background:transparent; border:1.5px solid ${T.green};
          padding:10px 24px; color:${T.green}; font-size:13px; font-weight:700;
          font-family:'Orbitron',monospace; letter-spacing:2px; cursor:pointer;
          clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);
          transition:all .25s; animation:glow-pulse 3s ease-in-out infinite;
        }
        .df-wallet-btn:hover, .df-wallet-btn.connected {
          background:${T.green}15; box-shadow:${neon(T.green)};
          color:#fff;
        }

        /* HERO */
        .df-hero {
          position:relative; min-height:100vh;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding:100px 72px 60px; text-align:center; overflow:hidden;
        }
        .df-hero::before {
          content:''; position:absolute; inset:0; z-index:0;
          background:
            radial-gradient(ellipse 60% 50% at 50% 40%, ${T.green}08 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, ${T.cyan}06 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 20%, ${T.pink}06 0%, transparent 60%);
        }
        /* grid lines */
        .df-hero::after {
          content:''; position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:
            linear-gradient(${T.green}08 1px,transparent 1px),
            linear-gradient(90deg,${T.green}08 1px,transparent 1px);
          background-size:48px 48px;
        }
        .df-hero > * { position:relative; z-index:2; }

        .df-hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid ${T.green}40; background:${T.green}08;
          padding:6px 16px; font-size:12px; font-weight:700;
          color:${T.green}; letter-spacing:2px; text-transform:uppercase;
          margin-bottom:24px; clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);
          animation:fadeIn .8s ease .2s both;
        }
        .df-dot { width:6px; height:6px; border-radius:50%; background:${T.green}; animation:pulse 1.5s ease-in-out infinite; }

        .df-h1 {
          font-size:clamp(36px,5.5vw,76px); font-weight:900; line-height:1.0;
          letter-spacing:-1px; margin-bottom:20px;
          animation:fadeUp .8s ease .3s both;
        }
        .df-h1 .g { color:${T.green}; text-shadow:${neon(T.green, 12)}; }
        .df-h1 .c { color:${T.cyan};  text-shadow:${neon(T.cyan, 12)};  }

        .df-hero-sub {
          font-size:clamp(15px,1.3vw,18px); color:${T.muted}; max-width:560px;
          line-height:1.7; margin:0 auto 40px;
          animation:fadeUp .8s ease .45s both;
        }

        .df-hero-btns { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; animation:fadeUp .8s ease .6s both; }
        .df-btn-primary {
          background:${T.green}; color:${T.bg}; border:none;
          padding:14px 36px; font-size:15px; font-weight:800;
          font-family:'Orbitron',monospace; letter-spacing:2px; cursor:pointer;
          clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
          transition:all .25s; box-shadow:0 0 20px ${T.green}40;
        }
        .df-btn-primary:hover { box-shadow:${neon(T.green)}; transform:translateY(-2px); }
        .df-btn-outline {
          background:transparent; color:${T.cyan}; border:1.5px solid ${T.cyan}60;
          padding:14px 36px; font-size:15px; font-weight:700;
          font-family:'Orbitron',monospace; letter-spacing:2px; cursor:pointer;
          clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
          transition:all .25s;
        }
        .df-btn-outline:hover { background:${T.cyan}10; box-shadow:${neon(T.cyan, 8)}; transform:translateY(-2px); }

        .df-hero-stats {
          display:flex; gap:48px; justify-content:center; margin-top:56px; flex-wrap:wrap;
          animation:fadeUp .8s ease .75s both;
        }
        .df-stat { text-align:center; }
        .df-stat-val { font-size:clamp(22px,2.5vw,32px); font-weight:900; color:${T.green}; text-shadow:${neon(T.green, 8)}; }
        .df-stat-lbl { font-size:12px; color:${T.muted}; letter-spacing:2px; text-transform:uppercase; margin-top:4px; }

        /* TICKER */
        .df-ticker {
          background:${T.card}; border-top:1px solid ${T.green}30; border-bottom:1px solid ${T.green}30;
          padding:12px 0; overflow:hidden; white-space:nowrap;
        }
        .df-ticker-inner { display:inline-block; animation:marquee 20s linear infinite; }
        .df-ticker-item { display:inline-block; margin-right:56px; font-size:13px; font-weight:700; color:${T.green}; letter-spacing:1px; font-family:'JetBrains Mono',monospace; }
        .df-ticker-item::before { content:"⬤ "; font-size:8px; margin-right:6px; opacity:.6; }

        /* SECTION wrapper */
        .df-section { padding:80px 72px; }
        .df-section-head { margin-bottom:48px; }
        .df-section-label { font-size:11px; font-weight:700; color:${T.green}; letter-spacing:4px; text-transform:uppercase; margin-bottom:8px; }
        .df-section-title { font-size:clamp(24px,2.8vw,38px); font-weight:900; letter-spacing:-0.5px; }

        /* POOLS */
        .df-pools-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .df-pool-card {
          background:${T.card}; border:1px solid ${T.border};
          padding:24px 28px; cursor:pointer;
          clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);
          transition:all .25s;
        }
        .df-pool-card:hover { border-color:var(--c); box-shadow:0 0 20px var(--c)20; transform:translateY(-3px); }
        .df-pool-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px; }
        .df-pool-pair { font-size:18px; font-weight:800; letter-spacing:1px; }
        .df-pool-apy { font-size:26px; font-weight:900; color:var(--c); text-shadow:0 0 12px var(--c)80; font-family:'JetBrains Mono',monospace; }
        .df-pool-apy-label { font-size:10px; color:${T.muted}; letter-spacing:2px; text-align:right; }
        .df-pool-stats { display:flex; gap:24px; }
        .df-pool-stat-label { font-size:11px; color:${T.muted}; letter-spacing:1px; text-transform:uppercase; margin-bottom:4px; }
        .df-pool-stat-val   { font-size:15px; font-weight:700; font-family:'JetBrains Mono',monospace; }
        .df-btn-sm {
          background:var(--c)15; border:1px solid var(--c)60; color:var(--c);
          padding:8px 20px; font-size:12px; font-weight:700; letter-spacing:1px;
          font-family:'Orbitron',monospace; cursor:pointer; margin-top:20px;
          clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);
          transition:all .2s;
        }
        .df-btn-sm:hover { background:var(--c)30; box-shadow:0 0 12px var(--c)50; }

        /* CALCULATOR */
        .df-calc-wrap {
          background:${T.card}; border:1px solid ${T.border};
          padding:40px; max-width:800px; margin:0 auto;
          clip-path:polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px);
        }
        .df-calc-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; margin-bottom:32px; }
        .df-input-group { display:flex; flex-direction:column; gap:8px; }
        .df-input-label { font-size:11px; color:${T.muted}; letter-spacing:2px; text-transform:uppercase; }
        .df-input {
          background:${T.bg}; border:1px solid ${T.border};
          padding:12px 16px; font-size:15px; font-weight:700;
          color:${T.fg}; font-family:'JetBrains Mono',monospace;
          outline:none; clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);
          transition:border-color .2s; width:100%;
        }
        .df-input:focus { border-color:${T.green}; box-shadow:inset 0 0 8px ${T.green}10; }
        .df-calc-result {
          display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
          padding:24px; background:${T.bg}; border:1px solid ${T.green}30;
          clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
        }
        .df-result-item { text-align:center; }
        .df-result-val { font-size:clamp(18px,2vw,26px); font-weight:900; color:${T.green}; text-shadow:${neon(T.green, 8)}; font-family:'JetBrains Mono',monospace; }
        .df-result-label { font-size:11px; color:${T.muted}; letter-spacing:2px; text-transform:uppercase; margin-top:4px; }

        /* TOKENOMICS */
        .df-token-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        .df-token-visual { position:relative; }
        .df-donut { width:280px; height:280px; border-radius:50%; margin:0 auto; position:relative; animation:float 4s ease-in-out infinite; }
        .df-token-list { display:flex; flex-direction:column; gap:14px; }
        .df-token-item { display:flex; align-items:center; gap:14px; }
        .df-token-bar-wrap { flex:1; background:${T.border}; height:6px; border-radius:999px; overflow:hidden; }
        .df-token-bar { height:100%; border-radius:999px; transition:width 1s ease; }
        .df-token-pct { font-size:14px; font-weight:700; font-family:'JetBrains Mono',monospace; width:40px; text-align:right; }
        .df-token-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }

        /* HOW IT WORKS */
        .df-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
        .df-step {
          background:${T.card}; border:1px solid ${T.border};
          padding:32px 28px; text-align:center;
          clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);
          transition:all .25s;
        }
        .df-step:hover { border-color:${T.green}50; transform:translateY(-4px); box-shadow:0 0 24px ${T.green}10; }
        .df-step-num { font-size:42px; font-weight:900; color:${T.green}20; font-family:'Orbitron',monospace; margin-bottom:16px; }
        .df-step-ico { font-size:36px; margin-bottom:14px; }
        .df-step h3 { font-size:18px; font-weight:700; margin-bottom:10px; }
        .df-step p { font-size:14px; color:${T.muted}; line-height:1.7; }

        /* FOOTER */
        .df-footer { background:${T.card}; border-top:1px solid ${T.border}; padding:48px 72px 28px; }
        .df-footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:36px; }
        .df-footer-col h4 { font-size:13px; font-weight:700; color:${T.green}; letter-spacing:2px; text-transform:uppercase; margin-bottom:16px; }
        .df-footer-col a { display:block; font-size:14px; color:${T.muted}; margin-bottom:10px; transition:color .2s; }
        .df-footer-col a:hover { color:${T.green}; }
        .df-footer-bottom { border-top:1px solid ${T.border}; padding-top:20px; display:flex; justify-content:space-between; align-items:center; }

        /* RESPONSIVE */
        @media (max-width:1024px){
          .df-nav,.df-hero,.df-section,.df-footer{ padding-left:32px; padding-right:32px; }
          .df-pools-grid { grid-template-columns:1fr; }
          .df-calc-grid { grid-template-columns:1fr; }
          .df-calc-result { grid-template-columns:1fr 1fr; }
          .df-token-grid { grid-template-columns:1fr; }
          .df-footer-grid { grid-template-columns:1fr 1fr; gap:28px; }
        }
        @media (max-width:640px){
          .df-nav { padding:0 20px; height:58px; }
          .df-nav-links { display:none; }
          .df-hero { padding:80px 20px 48px; }
          .df-hero-stats { gap:28px; }
          .df-section { padding:52px 20px; }
          .df-steps { grid-template-columns:1fr; }
          .df-calc-result { grid-template-columns:1fr; }
          .df-footer { padding:40px 20px 24px; }
          .df-footer-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="df">

        {/* voltar */}
        <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:"rgba(10,10,15,.95)", borderBottom:`1px solid ${T.border}`, padding:"5px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Link href="/" style={{ color:T.green, fontSize:10, letterSpacing:2, fontFamily:"'Orbitron',monospace", fontWeight:700 }}>← CATÁLOGO</Link>
          <span style={{ fontSize:10, color:T.muted, fontFamily:"'JetBrains Mono',monospace" }}>TENTECH_DEFI_v1.0.0</span>
        </div>

        {/* ══ NAV ══ */}
        <nav className="df-nav" style={{ top:28 }}>
          <div className="df-logo">
            <div className="df-logo-icon">⚡</div>
            <span className="df-logo-text orbit">YIELD<span style={{ color:T.cyan }}>X</span></span>
          </div>
          <div className="df-nav-links">
            {["Pools","Farming","Analytics","Governança"].map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <button
            className={`df-wallet-btn${walletConnected ? " connected" : ""}`}
            onClick={() => setWalletConnected(v => !v)}
          >
            {walletConnected ? "0x4F...3a2c" : "CONECTAR WALLET"}
          </button>
        </nav>

        {/* ══ HERO ══ */}
        <section className="df-hero" style={{ paddingTop:140 }}>
          <div className="df-hero-badge">
            <span className="df-dot"/>
            PROTOCOLO AUDITADO — TVL $114.9M
          </div>

          <h1 className={`df-h1 orbit${glitch ? " glitch" : ""}`} style={{ animation:glitch ? "glitch .3s steps(2)" : "fadeUp .8s ease .3s both" }}>
            <span className="g">MAXIMIZE</span><br/>
            <span className="c">SEUS YIELDS</span><br/>
            COM DEFI
          </h1>

          <p className="df-hero-sub">
            A plataforma de yield farming mais avançada da web3. APY de até 312% com pools auditados, segurança multicamada e liquidez profunda.
          </p>

          <div className="df-hero-btns">
            <button className="df-btn-primary orbit">⚡ COMEÇAR FARMING</button>
            <button className="df-btn-outline orbit">EXPLORAR POOLS</button>
          </div>

          <div className="df-hero-stats">
            {[["$114.9M","Total Value Locked"],["312%","APY Máximo"],["48K+","Usuários Ativos"],["$2.8M","Rewards Pagos"]].map(([v,l]) => (
              <div key={l} className="df-stat">
                <div className="df-stat-val mono">{v}</div>
                <div className="df-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ TICKER ══ */}
        <div className="df-ticker">
          <div className="df-ticker-inner">
            {[...tickers,...tickers].map((t,i) => (
              <span key={i} className="df-ticker-item">{t}</span>
            ))}
          </div>
        </div>

        {/* ══ POOLS ══ */}
        <section className="df-section">
          <div className="df-section-head">
            <p className="df-section-label">Liquidez</p>
            <h2 className="df-section-title orbit">POOLS DE <span style={{ color:T.cyan, textShadow:neon(T.cyan,10) }}>LIQUIDEZ</span></h2>
          </div>
          <div className="df-pools-grid">
            {pools.map(p => (
              <div key={p.pair} className="df-pool-card" style={{ "--c":p.color } as React.CSSProperties}>
                <div className="df-pool-top">
                  <div>
                    <div className="df-pool-pair">{p.pair}</div>
                    <div style={{ fontSize:12, color:T.muted, marginTop:4 }}>
                      <span style={{ color:p.gain ? T.green : T.red }}>{p.gain ? "▲" : "▼"}</span>
                      {" "}Pool ativo
                    </div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div className="df-pool-apy">{p.apy}</div>
                    <div className="df-pool-apy-label">APY</div>
                  </div>
                </div>
                <div className="df-pool-stats">
                  <div>
                    <div className="df-pool-stat-label">TVL</div>
                    <div className="df-pool-stat-val">{p.tvl}</div>
                  </div>
                  <div>
                    <div className="df-pool-stat-label">Vol 24h</div>
                    <div className="df-pool-stat-val">{p.vol}</div>
                  </div>
                </div>
                <button className="df-btn-sm">DEPOSITAR →</button>
              </div>
            ))}
          </div>
        </section>

        {/* ══ APY CALCULATOR ══ */}
        <section className="df-section" style={{ background:T.card, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}` }}>
          <div className="df-section-head" style={{ textAlign:"center" }}>
            <p className="df-section-label">Simulação</p>
            <h2 className="df-section-title orbit">CALCULADORA <span style={{ color:T.green, textShadow:neon(T.green,10) }}>APY</span></h2>
          </div>
          <div className="df-calc-wrap">
            <div className="df-calc-grid">
              <div className="df-input-group">
                <label className="df-input-label">Valor investido (R$)</label>
                <input className="df-input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="1000" />
              </div>
              <div className="df-input-group">
                <label className="df-input-label">APY (%)</label>
                <select className="df-input" value={selApy} onChange={e => setSelApy(e.target.value)}
                  style={{ cursor:"pointer" }}>
                  <option value="124.8">124.8% — ETH/USDC</option>
                  <option value="89.4">89.4% — BTC/ETH</option>
                  <option value="312.6">312.6% — FARM/USDT</option>
                  <option value="67.2">67.2% — SOL/USDC</option>
                </select>
              </div>
              <div className="df-input-group">
                <label className="df-input-label">Período (dias)</label>
                <select className="df-input" value={period} onChange={e => setPeriod(e.target.value)}
                  style={{ cursor:"pointer" }}>
                  <option value="30">30 dias</option>
                  <option value="90">90 dias</option>
                  <option value="180">180 dias</option>
                  <option value="365">365 dias</option>
                </select>
              </div>
            </div>
            <div className="df-calc-result">
              <div className="df-result-item">
                <div className="df-result-val">R$ {invest.toLocaleString("pt-BR", {minimumFractionDigits:2,maximumFractionDigits:2})}</div>
                <div className="df-result-label">Investido</div>
              </div>
              <div className="df-result-item">
                <div className="df-result-val" style={{ color:T.cyan, textShadow:neon(T.cyan,8) }}>
                  +R$ {earned.toLocaleString("pt-BR", {minimumFractionDigits:2,maximumFractionDigits:2})}
                </div>
                <div className="df-result-label">Lucro estimado</div>
              </div>
              <div className="df-result-item">
                <div className="df-result-val" style={{ color:T.pink, textShadow:neon(T.pink,8) }}>
                  R$ {total.toLocaleString("pt-BR", {minimumFractionDigits:2,maximumFractionDigits:2})}
                </div>
                <div className="df-result-label">Total final</div>
              </div>
            </div>
            <p style={{ fontSize:11, color:T.muted, marginTop:16, textAlign:"center", letterSpacing:1 }}>
              * Estimativa baseada em APY atual. Rendimentos passados não garantem retornos futuros.
            </p>
          </div>
        </section>

        {/* ══ TOKENOMICS ══ */}
        <section className="df-section">
          <div className="df-section-head">
            <p className="df-section-label">Token</p>
            <h2 className="df-section-title orbit">TOKENOMICS <span style={{ color:T.orange, textShadow:neon(T.orange,10) }}>FARM</span></h2>
          </div>
          <div className="df-token-grid">
            <div className="df-token-visual">
              {/* CSS donut chart */}
              <div style={{ position:"relative", width:260, height:260, margin:"0 auto" }}>
                <svg viewBox="0 0 100 100" style={{ width:"100%", height:"100%", transform:"rotate(-90deg)", animation:"float 4s ease-in-out infinite" }}>
                  {(() => {
                    let offset = 0;
                    return tokenomics.map(item => {
                      const dash = item.pct;
                      const gap = 100 - dash;
                      const el = (
                        <circle key={item.label}
                          cx="50" cy="50" r="40"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="18"
                          strokeDasharray={`${dash} ${gap}`}
                          strokeDashoffset={-offset}
                          style={{ filter:`drop-shadow(0 0 4px ${item.color})` }}
                        />
                      );
                      offset += dash;
                      return el;
                    });
                  })()}
                </svg>
                <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                  <div className="orbit" style={{ fontSize:28, fontWeight:900, color:T.green, textShadow:neon(T.green,10) }}>FARM</div>
                  <div style={{ fontSize:12, color:T.muted, letterSpacing:2 }}>TOKEN</div>
                </div>
              </div>
            </div>
            <div className="df-token-list">
              {tokenomics.map(item => (
                <div key={item.label} className="df-token-item">
                  <div className="df-token-dot" style={{ background:item.color, boxShadow:`0 0 8px ${item.color}` }}/>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14, fontWeight:600, marginBottom:6 }}>{item.label}</div>
                    <div className="df-token-bar-wrap">
                      <div className="df-token-bar" style={{ width:`${item.pct}%`, background:item.color, boxShadow:`0 0 8px ${item.color}40` }}/>
                    </div>
                  </div>
                  <div className="df-token-pct mono" style={{ color:item.color }}>{item.pct}%</div>
                </div>
              ))}
              <div style={{ marginTop:24, padding:"20px", background:T.bg, border:`1px solid ${T.border}`, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
                {[["1B","Supply Total"],["120M","Circulante"],["$2.40","Preço"]].map(([v,l]) => (
                  <div key={l} style={{ textAlign:"center" }}>
                    <div className="mono" style={{ fontSize:18, fontWeight:700, color:T.orange }}>{v}</div>
                    <div style={{ fontSize:11, color:T.muted, marginTop:4, letterSpacing:1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="df-section" style={{ background:T.card, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}` }}>
          <div className="df-section-head" style={{ textAlign:"center" }}>
            <p className="df-section-label">Processo</p>
            <h2 className="df-section-title orbit">COMO <span style={{ color:T.green, textShadow:neon(T.green,10) }}>FUNCIONA</span></h2>
          </div>
          <div className="df-steps">
            {[
              { n:"01", ico:"🔗", t:"Conecte a Wallet", d:"Conecte MetaMask, WalletConnect ou qualquer carteira Web3 compatível." },
              { n:"02", ico:"💧", t:"Adicione Liquidez", d:"Escolha um pool, deposite seus tokens e receba LP tokens como comprovante." },
              { n:"03", ico:"⚡", t:"Farm & Colha", d:"Seus tokens trabalham automaticamente gerando FARM rewards a cada bloco." },
            ].map(s => (
              <div key={s.n} className="df-step">
                <div className="df-step-num orbit">{s.n}</div>
                <div className="df-step-ico">{s.ico}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="df-footer">
          <div className="df-footer-grid">
            <div>
              <div className="df-logo" style={{ marginBottom:14 }}>
                <div className="df-logo-icon">⚡</div>
                <span className="df-logo-text orbit">YIELD<span style={{ color:T.cyan }}>X</span></span>
              </div>
              <p style={{ fontSize:14, color:T.muted, lineHeight:1.7, maxWidth:260 }}>
                Protocolo DeFi de nova geração. Seguro, auditado e descentralizado.
              </p>
            </div>
            {[
              ["Produto",    ["Pools","Farming","Analytics","Governança"]],
              ["Recursos",   ["Documentação","Whitepaper","Auditorias","FAQ"]],
              ["Comunidade", ["Discord","Twitter/X","Telegram","GitHub"]],
            ].map(([title,links]) => (
              <div key={title as string} className="df-footer-col">
                <h4>{title as string}</h4>
                {(links as string[]).map(l => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <div className="df-footer-bottom">
            <span style={{ fontSize:12, color:T.muted, fontFamily:"'JetBrains Mono',monospace" }}>© 2025 YieldX Protocol. Todos os direitos reservados.</span>
            <span style={{ fontSize:12, color:T.green, fontFamily:"'JetBrains Mono',monospace" }}>REDE: ETHEREUM MAINNET ●</span>
          </div>
        </footer>

      </div>
    </>
  );
}
