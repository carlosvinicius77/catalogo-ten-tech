"use client";
import { useState } from "react";
import Link from "next/link";

const BLUE   = "#1A56C4";
const YELLOW = "#F5C424";
const RED    = "#E02D1B";
const DARK   = "#0F1010";
const CREAM  = "#FFF8EC";
const WHITE  = "#FFFFFF";

const sections = ["Todos", "Clássicos", "Especiais", "Combos"];

const menu = [
  { name: "Super Smash",      price: "R$ 45", tag: "CLÁSSICO",    color: YELLOW,    img: "/super-burger-card.jpg", section: "Clássicos" },
  { name: "Kryptonita Burger",price: "R$ 58", tag: "PICANTE",     color: RED,       img: "/super-burger-card.jpg", section: "Clássicos" },
  { name: "Capitão Frango",   price: "R$ 42", tag: "CROCANTE",    color: BLUE,      img: "/super-burger-card.jpg", section: "Clássicos" },
  { name: "Double Power",     price: "R$ 72", tag: "PREMIUM",     color: "#9333EA", img: "/super-burger-card.jpg", section: "Especiais" },
  { name: "Bacon Supremo",    price: "R$ 52", tag: "ESPECIAL",    color: "#EA580C", img: "/super-burger-card.jpg", section: "Especiais" },
  { name: "Veggie Hero",      price: "R$ 46", tag: "VEGETARIANO", color: "#16A34A", img: "/super-burger-card.jpg", section: "Especiais" },
  { name: "Combo Heroico",    price: "R$ 69", tag: "COMBO",       color: "#16A34A", img: "/super-burger-card.jpg", section: "Combos" },
  { name: "Combo Família",    price: "R$ 119",tag: "FAMÍLIA",     color: BLUE,      img: "/super-burger-card.jpg", section: "Combos" },
  { name: "Combo Duplo",      price: "R$ 89", tag: "DUPLO",       color: RED,       img: "/super-burger-card.jpg", section: "Combos" },
];

const coupons = [
  { code: "SUPER10", desc: "10% OFF em qualquer pedido acima de R$40", label: "Desconto Heroico", color: BLUE },
  { code: "FRETE0",  desc: "Frete grátis para pedidos acima de R$60 no delivery", label: "Frete Herói", color: RED },
  { code: "DUPLA65", desc: "2 burgers à escolha + 2 fritas por apenas R$65", label: "Dupla de Heróis", color: "#16A34A" },
];

const powers = {
  base:   ["Pão Brioche", "Pão Australiano", "Pão Sem Glúten"],
  carne:  ["Smash Angus 180g", "Blend Premium 200g", "Frango Crispy"],
  queijo: ["Queijo Americano", "Cheddar Derretido", "Provolone Defumado"],
  extras: ["Bacon Crocante", "Jalapeño", "Cebola Caramelizada", "Ovo Caipira", "Pepperoni"],
};

const reviews = [
  { name: "Rafael M.",  stars: 5, text: "Melhor hambúrguer da cidade! Parece mesmo um super poder em cada mordida. O Super Smash é surreal." },
  { name: "Juliana K.", stars: 5, text: "O Kryptonita Burger me derrubou! Picante na medida certa. Delivery chegou em 25 minutos ainda quente." },
  { name: "Diego P.",   stars: 5, text: "Voltei três vezes essa semana. Os caras são de verdade uns heróis. Combo Heroico vale cada centavo!" },
];

export default function HamburgueriaSuperPage() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeSection, setActiveSection]   = useState("Todos");
  const [selectedBase, setSelectedBase]     = useState(0);
  const [selectedCarne, setSelectedCarne]   = useState(0);
  const [selectedQueijo, setSelectedQueijo] = useState(0);
  const [extras, setExtras]                 = useState<Set<string>>(new Set());
  const [copiedCoupon, setCopiedCoupon]     = useState<string | null>(null);

  const toggleExtra = (e: string) => {
    setExtras(prev => { const n = new Set(prev); n.has(e) ? n.delete(e) : n.add(e); return n; });
  };

  const toggleMobile = (val: boolean) => {
    setMobileOpen(val);
    if (typeof document !== "undefined") document.body.style.overflow = val ? "hidden" : "";
  };

  const copyCoupon = (code: string) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  const totalCustom = 38 + [0,5,8][selectedBase] + [0,8,4][selectedCarne] + extras.size * 5;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:6px; background:${DARK}; }
        ::-webkit-scrollbar-thumb { background:${YELLOW}; border-radius:3px; }
        .hs { font-family:'Poppins',sans-serif; background:${CREAM}; color:${DARK}; overflow-x:hidden; }
        .hs a { text-decoration:none; color:inherit; }
        .hs a.btn-secondary { color:${WHITE}; }
        .bangers { font-family:'Bangers',cursive; letter-spacing:.03em; }
        .halftone-blue { background-image:radial-gradient(${BLUE}18 1.5px,transparent 1.5px); background-size:20px 20px; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        .anim-title { animation:fadeUp .7s ease both .2s }
        .anim-sub   { animation:fadeUp .7s ease both .35s }
        .anim-btns  { animation:fadeUp .7s ease both .5s }

        /* NAV */
        .hs-nav { position:sticky; top:0; z-index:100; background:${DARK}; border-bottom:3px solid ${YELLOW}; padding:0 clamp(20px,5vw,80px); display:flex; align-items:center; justify-content:space-between; height:68px; }
        .hs-logo { display:flex; align-items:center; gap:12px; }
        .hs-logo img { height:54px; width:54px; object-fit:contain; filter:drop-shadow(0 2px 8px rgba(0,0,0,.5)); }
        .hs-logo-text { font-family:'Bangers',cursive; font-size:1.5rem; color:${WHITE}; letter-spacing:.04em; line-height:1; }
        .hs-logo-text span { color:${YELLOW}; }
        .hs-nav-links { display:flex; gap:32px; }
        .hs-nav-links a { font-size:.9rem; font-weight:500; color:rgba(255,255,255,.75); transition:color .2s; }
        .hs-nav-links a:hover { color:${YELLOW}; }
        .hs-nav-cta { background:${YELLOW}; color:${DARK}; font-weight:700; font-size:.9rem; padding:10px 22px; border-radius:10px; border:none; cursor:pointer; transition:transform .2s,box-shadow .2s; }
        .hs-nav-cta:hover { transform:translateY(-2px); box-shadow:0 6px 20px ${YELLOW}60; }
        .hs-back { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.08); color:rgba(255,255,255,.7); font-size:.82rem; font-weight:500; padding:6px 14px; border-radius:8px; border:1px solid rgba(255,255,255,.12); transition:all .2s; }
        .hs-back:hover { background:rgba(255,255,255,.15); color:${WHITE}; }

        /* HERO */
        .hs-hero { min-height:92vh; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:40px; padding:clamp(40px,8vw,100px) clamp(20px,6vw,100px); position:relative; overflow:hidden; background:url('/super-hero-burger.jpg') center center/cover no-repeat; }
        .hs-hero::before { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(to right,rgba(10,10,10,.96) 0%,rgba(10,10,10,.88) 40%,rgba(10,10,10,.45) 65%,rgba(10,10,10,.10) 100%); }
        .hs-hero-diagonal { position:absolute; bottom:-2px; left:0; right:0; height:80px; background:${CREAM}; clip-path:polygon(0 100%,100% 0,100% 100%); }
        .hs-hero-title { font-family:'Bangers',cursive; font-size:clamp(3.5rem,7vw,6rem); color:${WHITE}; line-height:1; letter-spacing:.02em; }
        .hs-hero-title em   { color:${YELLOW}; font-style:normal; display:block; }
        .hs-hero-title .red { color:${RED}; }
        .hs-hero-sub { color:rgba(255,255,255,.65); font-size:clamp(.95rem,2vw,1.15rem); line-height:1.65; margin:20px 0 36px; text-wrap:pretty; max-width:480px; }
        .hs-hero-buttons { display:flex; gap:14px; flex-wrap:wrap; }
        .btn-primary { background:${RED}; color:${WHITE}; font-weight:700; font-size:1rem; padding:14px 32px; border-radius:10px; border:none; cursor:pointer; transition:transform .2s,box-shadow .2s; font-family:'Poppins',sans-serif; }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:0 10px 30px ${RED}60; }
        .btn-secondary { background:transparent; color:${WHITE}; font-weight:700; font-size:1rem; padding:14px 28px; border-radius:10px; border:2px solid ${WHITE}; cursor:pointer; transition:all .2s; display:inline-flex; align-items:center; font-family:'Poppins',sans-serif; }
        .btn-secondary:hover,.hs a.btn-secondary:hover { border-color:${YELLOW}; color:${YELLOW}; transform:translateY(-2px); }

        /* STATS */
        .hs-stats { background:${BLUE}; color:${WHITE}; display:flex; justify-content:center; gap:clamp(16px,5vw,80px); padding:28px clamp(20px,5vw,80px); flex-wrap:wrap; }
        .hs-stat { text-align:center; flex:1; min-width:100px; }
        .hs-stat-num   { font-family:'Bangers',cursive; font-size:2.2rem; color:${YELLOW}; letter-spacing:.04em; }
        .hs-stat-label { font-size:.8rem; opacity:.8; letter-spacing:.08em; text-transform:uppercase; }

        /* MAP */
        .hs-map { display:block; width:100%; height:400px; border:none; }

        /* SECTION */
        .hs-section { padding:clamp(60px,10vw,120px) clamp(20px,6vw,100px); }
        .hs-section-header { text-align:center; margin-bottom:56px; }
        .hs-tag { display:inline-block; background:${YELLOW}; color:${DARK}; font-weight:700; font-size:.75rem; letter-spacing:.12em; text-transform:uppercase; padding:5px 14px; border-radius:10px; margin-bottom:12px; }
        .hs-tag.red  { background:${RED};  color:${WHITE}; }
        .hs-tag.blue { background:${BLUE}; color:${WHITE}; }
        .hs-section-title { font-family:'Bangers',cursive; font-size:clamp(2.2rem,5vw,3.8rem); letter-spacing:.02em; line-height:1.05; }
        .hs-section-title span { color:${RED}; }
        .hs-section-sub { color:#555; font-size:1rem; margin-top:10px; max-width:500px; margin-left:auto; margin-right:auto; }

        /* MENU */
        .hs-menu { background:${DARK}; }
        .hs-menu .hs-section-title { color:${WHITE}; }
        .hs-menu .hs-section-sub   { color:rgba(255,255,255,.5); }
        .hs-section-tabs { display:flex; justify-content:flex-start; gap:8px; margin-bottom:28px; flex-wrap:nowrap; overflow-x:auto; padding-bottom:4px; padding-left:4px; scrollbar-width:none; }
        .hs-section-tabs::-webkit-scrollbar { display:none; }
        .hs-stab { flex-shrink:0; padding:9px 22px; border-radius:10px; border:2px solid rgba(255,255,255,.15); color:rgba(255,255,255,.6); background:transparent; cursor:pointer; font-weight:600; font-size:.88rem; transition:all .2s; font-family:'Poppins',sans-serif; }
        .hs-stab.active { background:${YELLOW}; border-color:${YELLOW}; color:${DARK}; }
        .hs-stab:hover:not(.active) { border-color:rgba(255,255,255,.4); color:${WHITE}; }
        .hs-menu-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:860px; margin:0 auto; align-items:stretch; }
        .hs-menu-card { background:#F5F0E8; border-radius:16px; overflow:hidden; transition:transform .2s,box-shadow .2s; box-shadow:0 2px 12px rgba(0,0,0,.08); display:flex; flex-direction:column; align-items:center; padding:20px 16px 16px; height:100%; }
        .hs-menu-card:hover { transform:translateY(-5px); box-shadow:0 12px 32px rgba(0,0,0,.15); }
        .hs-menu-card-img-wrap { width:100%; height:160px; overflow:hidden; display:flex; align-items:center; justify-content:center; }
        .hs-menu-card-img { width:100%; height:100%; object-fit:contain; object-position:center; display:block; transform:scale(1.6); transform-origin:center center; }
        .hs-menu-card-body { width:100%; padding:6px 0 2px; text-align:left; flex:1; }
        .hs-menu-tag-card { display:inline-block; font-size:.6rem; font-weight:700; letter-spacing:.1em; padding:2px 8px; border-radius:6px; margin-bottom:6px; }
        .hs-menu-name { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:${DARK}; line-height:1.3; }
        .hs-menu-footer { width:100%; padding:3px 0 0; border-top:1px solid rgba(0,0,0,.08); display:flex; align-items:center; justify-content:space-between; }
        .hs-menu-price { font-family:'Bangers',cursive; font-size:1.4rem; letter-spacing:.04em; white-space:nowrap; }
        .btn-pedido { background:${RED}; color:${WHITE}; font-weight:700; font-size:.75rem; padding:7px 14px; border-radius:8px; border:none; cursor:pointer; transition:transform .2s,box-shadow .2s; font-family:'Poppins',sans-serif; }
        .btn-pedido:hover { transform:translateY(-2px); box-shadow:0 6px 16px ${RED}60; }

        /* COUPONS */
        .hs-coupons { background:${CREAM}; }
        .hs-coupons-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }
        .hs-coupon { border-radius:20px; overflow:hidden; border:2px solid transparent; transition:transform .25s,box-shadow .25s; cursor:pointer; }
        .hs-coupon:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(0,0,0,.15); }
        .hs-coupon-top { padding:28px; color:${WHITE}; display:flex; align-items:center; gap:16px; }
        .hs-coupon-label { font-family:'Bangers',cursive; font-size:1.8rem; letter-spacing:.04em; }
        .hs-coupon-desc  { font-size:.85rem; opacity:.85; margin-top:4px; line-height:1.4; }
        .hs-coupon-bottom { background:${WHITE}; padding:16px 28px; display:flex; align-items:center; justify-content:space-between; }
        .hs-coupon-code { font-family:'Bangers',cursive; font-size:1.5rem; letter-spacing:.1em; }
        .btn-copy { font-size:.8rem; font-weight:700; padding:8px 18px; border-radius:10px; border:2px solid currentColor; cursor:pointer; background:transparent; transition:all .2s; font-family:'Poppins',sans-serif; }

        /* CUSTOMIZER */
        .hs-custom { background:${BLUE}; }
        .hs-custom .hs-section-title { color:${WHITE}; }
        .hs-custom .hs-section-sub   { color:rgba(255,255,255,.65); }
        .hs-custom-grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; max-width:900px; margin:0 auto; }
        .hs-custom-group { background:rgba(255,255,255,.1); border-radius:16px; padding:24px; }
        .hs-custom-group-title { font-family:'Bangers',cursive; font-size:1.5rem; color:${YELLOW}; letter-spacing:.06em; margin-bottom:16px; }
        .hs-custom-options { display:flex; flex-direction:column; gap:10px; }
        .hs-custom-opt { display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:10px; cursor:pointer; border:2px solid rgba(255,255,255,.15); background:rgba(255,255,255,.05); transition:all .2s; }
        .hs-custom-opt:hover { border-color:${YELLOW}40; background:rgba(255,255,255,.1); }
        .hs-custom-opt.selected { border-color:${YELLOW}; background:${YELLOW}20; }
        .hs-custom-opt input { accent-color:${YELLOW}; width:16px; height:16px; }
        .hs-custom-opt-label { color:${WHITE}; font-size:.9rem; font-weight:500; flex:1; }
        .hs-custom-opt-price { color:${YELLOW}; font-size:.8rem; font-weight:700; }
        .hs-custom-result { grid-column:1/-1; background:${YELLOW}; border-radius:16px; padding:28px 32px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
        .hs-custom-result-label { font-family:'Bangers',cursive; font-size:1.8rem; letter-spacing:.04em; }
        .hs-custom-result-total { font-family:'Bangers',cursive; font-size:3rem; color:${DARK}; letter-spacing:.04em; }
        .btn-custom-pedido { background:${RED}; color:${WHITE}; font-weight:700; font-size:1.05rem; padding:16px 36px; border-radius:10px; border:none; cursor:pointer; box-shadow:4px 4px 0 ${DARK}40; transition:transform .2s,box-shadow .2s; white-space:nowrap; font-family:'Poppins',sans-serif; }
        .btn-custom-pedido:hover { transform:translateY(-3px); box-shadow:6px 6px 0 ${DARK}60; }

        /* REVIEWS */
        .hs-reviews { background:${WHITE}; }
        .hs-reviews-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:24px; }
        .hs-review-card { background:${CREAM}; border-radius:16px; padding:28px; border:2px solid transparent; transition:all .25s; }
        .hs-review-card:hover { border-color:${YELLOW}; transform:translateY(-4px); box-shadow:0 12px 36px rgba(0,0,0,.08),4px 4px 0 ${YELLOW}; }
        .hs-review-stars  { color:${YELLOW}; font-size:1.2rem; margin-bottom:14px; }
        .hs-review-text   { color:#333; line-height:1.7; font-size:.95rem; margin-bottom:20px; text-wrap:pretty; }
        .hs-review-author { font-weight:700; font-size:.9rem; }

        /* CTA */
        .hs-cta-section { background:${RED}; padding:80px clamp(20px,6vw,100px); text-align:center; position:relative; overflow:hidden; }
        .hs-cta-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(${WHITE}10 1.5px,transparent 1.5px); background-size:20px 20px; }
        .hs-cta-title { font-family:'Bangers',cursive; font-size:clamp(2.5rem,6vw,5rem); color:${WHITE}; letter-spacing:.04em; margin-bottom:12px; }
        .hs-cta-sub   { color:rgba(255,255,255,.8); font-size:1.1rem; margin-bottom:36px; }
        .btn-wpp { display:inline-flex; align-items:center; gap:12px; background:${WHITE}; color:${DARK}; font-weight:800; font-size:1.1rem; padding:16px 40px; border-radius:10px; border:none; cursor:pointer; transition:transform .2s,box-shadow .2s; text-decoration:none; box-shadow:0 8px 32px rgba(0,0,0,.25); font-family:'Poppins',sans-serif; }
        .btn-wpp:hover { transform:translateY(-3px); box-shadow:0 16px 48px rgba(0,0,0,.3); }

        /* FOOTER */
        .hs-footer { background:${DARK}; color:rgba(255,255,255,.5); padding:48px clamp(20px,6vw,100px); text-align:center; }
        .hs-footer-logo { font-family:'Bangers',cursive; font-size:2rem; color:${WHITE}; margin-bottom:8px; letter-spacing:.04em; }
        .hs-footer-logo span { color:${YELLOW}; }
        .hs-footer-links { display:flex; justify-content:center; gap:24px; flex-wrap:wrap; margin:20px 0; }
        .hs-footer-links a { font-size:.85rem; transition:color .2s; }
        .hs-footer-links a:hover { color:${YELLOW}; }
        .hs-footer-copy { font-size:.8rem; }

        /* FLOAT WPP */
        .hs-float-wpp { position:fixed; bottom:28px; right:28px; z-index:200; background:#25D366; color:${WHITE}; width:58px; height:58px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 8px 24px rgba(37,211,102,.45); cursor:pointer; animation:pulse 2.5s ease-in-out infinite; text-decoration:none; }

        /* HAMBURGER */
        .hs-hamburger { display:none; flex-direction:column; justify-content:center; gap:5px; width:40px; height:40px; background:transparent; border:none; cursor:pointer; padding:4px; z-index:200; }
        .hs-hamburger span { display:block; height:3px; background:${WHITE}; border-radius:2px; transition:transform .3s,opacity .3s,width .3s; transform-origin:center; }
        .hs-hamburger.open span:nth-child(1) { transform:translateY(8px) rotate(45deg); }
        .hs-hamburger.open span:nth-child(2) { opacity:0; width:0; }
        .hs-hamburger.open span:nth-child(3) { transform:translateY(-8px) rotate(-45deg); }

        /* MOBILE OVERLAY */
        .hs-mobile-overlay { display:none; position:fixed; inset:0; z-index:98; background:rgba(0,0,0,.5); }
        .hs-mobile-overlay.open { display:block; }

        /* MOBILE MENU */
        .hs-mobile-menu { display:none; position:fixed; top:68px; left:0; right:0; z-index:99; background:${DARK}; border-top:2px solid ${YELLOW}; flex-direction:column; padding:16px 24px 24px; gap:4px; animation:fadeIn .2s ease both; }
        .hs-mobile-menu.open { display:flex; }
        .hs-mobile-menu a { color:rgba(255,255,255,.8); font-size:1.1rem; font-weight:500; padding:14px 0; border-bottom:1px solid rgba(255,255,255,.08); transition:color .2s; }
        .hs-mobile-menu a:hover { color:${YELLOW}; }
        .hs-mobile-cta { margin-top:12px; background:${YELLOW}; color:${DARK}; font-family:'Bangers',cursive; font-size:1.2rem; letter-spacing:.06em; padding:14px; border-radius:10px; text-align:center; font-weight:700; border:none; cursor:pointer; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hs-hero { grid-template-columns:1fr; text-align:center; min-height:auto; padding-top:60px; padding-bottom:100px; }
          .hs-hero::before { background:rgba(10,10,10,.85); }
          .hs-hero-sub { margin-left:auto; margin-right:auto; }
          .hs-hero-buttons { justify-content:center; }
          .hs-custom-grid { grid-template-columns:1fr; }
          .hs-nav-links { display:none; }
          .hs-nav-cta  { display:none; }
          .hs-hamburger { display:flex; }
        }
        @media (max-width: 640px) {
          .hs-hero-title { font-size:3rem; }
          .hs-menu-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
          .hs-menu-footer { flex-direction:column; gap:8px; align-items:stretch; }
          .hs-menu-footer .hs-menu-price { text-align:left; }
          .btn-pedido { width:100%; padding:10px; font-size:.85rem; }
          .hs-custom-result { flex-direction:column; text-align:center; }
          .hs-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:0; padding:20px 16px; }
          .hs-stat { padding:8px 4px; border-right:1px solid rgba(255,255,255,.15); }
          .hs-stat:last-child { border-right:none; }
          .hs-stat-num { font-size:1.6rem; }
          .hs-stat-label { font-size:.65rem; }
          .hs-map { height:280px; }
        }
      `}</style>

      <div className="hs">

        {/* NAV */}
        <nav className="hs-nav">
          <div className="hs-logo">
            <img src="/super-logo.png" alt="Logo" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            <div className="hs-logo-text bangers">Hamburgueria <span>do Super</span></div>
          </div>
          <div className="hs-nav-links">
            <Link href="/" className="hs-back">← Catálogo</Link>
            <a href="#cardapio">Cardápio</a>
            <a href="#cupons">Cupons</a>
            <a href="#monte">Monte seu Burger</a>
            <a href="#avaliacoes">Avaliações</a>
          </div>
          <button className="hs-nav-cta bangers" style={{fontSize:"1.1rem",letterSpacing:".04em"}}>FAZER PEDIDO</button>
          <button className={`hs-hamburger${mobileOpen?" open":""}`} onClick={() => toggleMobile(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>

        <div className={`hs-mobile-overlay${mobileOpen?" open":""}`} onClick={() => toggleMobile(false)} />
        <div className={`hs-mobile-menu${mobileOpen?" open":""}`}>
          <a href="#cardapio"   onClick={() => toggleMobile(false)}>Cardápio</a>
          <a href="#cupons"     onClick={() => toggleMobile(false)}>Cupons</a>
          <a href="#monte"      onClick={() => toggleMobile(false)}>Monte seu Burger</a>
          <a href="#avaliacoes" onClick={() => toggleMobile(false)}>Avaliações</a>
          <button className="hs-mobile-cta" onClick={() => toggleMobile(false)}>FAZER PEDIDO</button>
        </div>

        {/* HERO */}
        <section className="hs-hero">
          <div style={{position:"relative",zIndex:1}}>
            <h1 className="hs-hero-title anim-title">
              HAMBÚRGUERS<em>COM PODER</em><span className="red">HEROICO!</span>
            </h1>
            <p className="hs-hero-sub anim-sub">Cada mordida é uma missão. Ingredientes premium, carne grelhada no fogo e combinações que vão te dar poderes. Entrega rápida ou retire no balcão!</p>
            <div className="hs-hero-buttons anim-btns">
              <button className="btn-primary">Ativar Super Delivery</button>
              <a href="#cardapio" className="btn-secondary">Ver Cardápio</a>
            </div>
          </div>
          <div style={{position:"absolute",bottom:"-2px",left:0,right:0,height:"80px",background:CREAM,clipPath:"polygon(0 100%,100% 0,100% 100%)"}} />
        </section>

        {/* STATS */}
        <div className="hs-stats halftone-blue">
          {[{num:"4.9★",label:"Avaliação no Google"},{num:"25min",label:"Entrega Média"},{num:"+2mil",label:"Heróis Satisfeitos"}].map(s => (
            <div key={s.label} className="hs-stat">
              <div className="hs-stat-num bangers">{s.num}</div>
              <div className="hs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* MENU */}
        <section id="cardapio" className="hs-section hs-menu">
          <div className="hs-section-header">
            <div className="hs-tag red">CARDÁPIO HEROICO</div>
            <h2 className="hs-section-title" style={{color:WHITE}}>Escolha seu <span style={{color:YELLOW}}>Poder</span></h2>
            <p className="hs-section-sub">Cada item foi desenvolvido para maximizar sua experiência.</p>
          </div>
          <div className="hs-section-tabs">
            {sections.map(s => (
              <button key={s} className={`hs-stab${activeSection===s?" active":""}`} onClick={() => setActiveSection(s)}>{s}</button>
            ))}
          </div>
          <div className="hs-menu-grid">
            {menu.filter(item => activeSection==="Todos" || item.section===activeSection).map(item => (
              <div key={item.name} className="hs-menu-card">
                <div className="hs-menu-card-img-wrap">
                  <img src={item.img} alt={item.name} className="hs-menu-card-img" />
                </div>
                <div className="hs-menu-card-body">
                  <div className="hs-menu-tag-card" style={{background:item.color+"22",color:item.color,border:`1.5px solid ${item.color}40`}}>{item.tag}</div>
                  <div className="hs-menu-name">{item.name}</div>
                </div>
                <div className="hs-menu-footer">
                  <div className="hs-menu-price" style={{color:item.color}}>{item.price}</div>
                  <button className="btn-pedido">Pedir Agora</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COUPONS */}
        <section id="cupons" className="hs-section hs-coupons">
          <div className="hs-section-header">
            <div className="hs-tag blue">CUPÕES HEROICOS</div>
            <h2 className="hs-section-title">Resgate seu <span>Super Poder</span></h2>
            <p className="hs-section-sub">Promoções exclusivas para os verdadeiros heróis. Copie o código e economize!</p>
          </div>
          <div className="hs-coupons-grid">
            {coupons.map(c => (
              <div key={c.code} className="hs-coupon" onClick={() => copyCoupon(c.code)}>
                <div className="hs-coupon-top" style={{background:c.color}}>
                  <div>
                    <div className="hs-coupon-label bangers">{c.label}</div>
                    <p className="hs-coupon-desc">{c.desc}</p>
                  </div>
                </div>
                <div className="hs-coupon-bottom">
                  <div className="hs-coupon-code" style={{color:c.color}}>{c.code}</div>
                  <button className="btn-copy" style={{color:c.color}} onClick={(e)=>{e.stopPropagation();copyCoupon(c.code);}}>
                    {copiedCoupon===c.code?"✓ Copiado!":"Copiar Código"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOMIZER */}
        <section id="monte" className="hs-section hs-custom">
          <div className="hs-section-header">
            <div className="hs-tag">MONTE SEU SUPER BURGER</div>
            <h2 className="hs-section-title" style={{color:WHITE}}>Crie seu <span style={{color:YELLOW}}>Próprio Poder</span></h2>
          </div>
          <div className="hs-custom-grid">
            <div className="hs-custom-group">
              <div className="hs-custom-group-title">A Base (Pão)</div>
              <div className="hs-custom-options">
                {powers.base.map((b,i) => (
                  <label key={b} className={`hs-custom-opt${selectedBase===i?" selected":""}`} onClick={() => setSelectedBase(i)}>
                    <input type="radio" name="base" checked={selectedBase===i} onChange={() => setSelectedBase(i)} />
                    <span className="hs-custom-opt-label">{b}</span>
                    <span className="hs-custom-opt-price">{i===0?"Incluso":`+R$${[0,5,8][i]}`}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="hs-custom-group">
              <div className="hs-custom-group-title">O Poder (Carne)</div>
              <div className="hs-custom-options">
                {powers.carne.map((c,i) => (
                  <label key={c} className={`hs-custom-opt${selectedCarne===i?" selected":""}`} onClick={() => setSelectedCarne(i)}>
                    <input type="radio" name="carne" checked={selectedCarne===i} onChange={() => setSelectedCarne(i)} />
                    <span className="hs-custom-opt-label">{c}</span>
                    <span className="hs-custom-opt-price">{i===0?"Incluso":`+R$${[0,8,4][i]}`}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="hs-custom-group">
              <div className="hs-custom-group-title">A Capa (Queijo)</div>
              <div className="hs-custom-options">
                {powers.queijo.map((q,i) => (
                  <label key={q} className={`hs-custom-opt${selectedQueijo===i?" selected":""}`} onClick={() => setSelectedQueijo(i)}>
                    <input type="radio" name="queijo" checked={selectedQueijo===i} onChange={() => setSelectedQueijo(i)} />
                    <span className="hs-custom-opt-label">{q}</span>
                    <span className="hs-custom-opt-price">Incluso</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="hs-custom-group">
              <div className="hs-custom-group-title">Os Aliados (Extras)</div>
              <div className="hs-custom-options">
                {powers.extras.map(e => (
                  <label key={e} className={`hs-custom-opt${extras.has(e)?" selected":""}`} onClick={() => toggleExtra(e)}>
                    <input type="checkbox" checked={extras.has(e)} onChange={() => toggleExtra(e)} />
                    <span className="hs-custom-opt-label">{e}</span>
                    <span className="hs-custom-opt-price">+R$5</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="hs-custom-result">
              <div>
                <div className="hs-custom-result-label bangers">Seu Super Burger está pronto!</div>
                <div className="hs-custom-result-total bangers">R$ {totalCustom}</div>
              </div>
              <button className="btn-custom-pedido">Pedir Meu Super Burger</button>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="avaliacoes" className="hs-section hs-reviews">
          <div className="hs-section-header">
            <div className="hs-tag">DEPOIMENTOS</div>
            <h2 className="hs-section-title">Heróis que <span>Aprovam</span></h2>
          </div>
          <div className="hs-reviews-grid">
            {reviews.map(r => (
              <div key={r.name} className="hs-review-card">
                <div className="hs-review-stars">{"★".repeat(r.stars)}</div>
                <p className="hs-review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="hs-review-author">{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="hs-cta-section">
          <h2 className="hs-cta-title bangers">PRONTO PARA A MISSÃO?</h2>
          <p className="hs-cta-sub">Chame o Super Delivery agora e receba em menos de 30 minutos.</p>
          <a href="https://wa.me/5500000000000" className="btn-wpp"><span>💬</span> Ativar o Super Delivery</a>
        </section>

        {/* MAP */}
        <iframe className="hs-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197583!2d-46.6588!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknMzEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" title="Localização" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        {/* FOOTER */}
        <footer className="hs-footer">
          <div className="hs-footer-logo bangers">Hamburgueria <span>do Super</span></div>
          <div className="hs-footer-links">
            <a href="#cardapio">Cardápio</a>
            <a href="#cupons">Cupons</a>
            <a href="#monte">Monte seu Burger</a>
            <a href="#avaliacoes">Avaliações</a>
          </div>
          <p className="hs-footer-copy">© 2025 Hamburgueria do Super. Feito com muito fogo e carne grelhada.</p>
        </footer>

        <a href="https://wa.me/5500000000000" className="hs-float-wpp" title="WhatsApp">💬</a>

      </div>
    </>
  );
}
