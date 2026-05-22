"use client";
import { useState } from "react";
import Link from "next/link";

const C={bg:"#0A0F1E",card:"rgba(255,255,255,0.06)",border:"rgba(255,255,255,0.12)",gold:"#D4AF37",blue:"#3B82F6",fg:"#F1F5F9",muted:"#94A3B8"};

const listings=[
  {title:"Cobertura Duplex",local:"Itaim Bibi, SP",price:"R$ 4.800.000",area:"320m²",rooms:"4",park:"3",img:"/imovel1.jpg",tag:"Exclusivo"},
  {title:"Casa de Alto Padrão",local:"Alphaville, SP",price:"R$ 3.200.000",area:"580m²",rooms:"5",park:"4",img:"/imovel2.jpg",tag:"Novo"},
  {title:"Penthouse Vista Mar",local:"Leblon, RJ",price:"R$ 8.500.000",area:"450m²",rooms:"4",park:"3",img:"/imovel3.jpg",tag:"Premium"},
];

const agents=[
  {name:"Beatriz Ferreira",role:"Corretora Sênior",creci:"CRECI 45.821",deals:"280+",img:"/jur-adv2.jpg"},
  {name:"Ricardo Alves",role:"Especialista em Luxo",creci:"CRECI 38.104",deals:"420+",img:"/jur-adv3.jpg"},
];

export default function Imoveis(){
  const [form,setForm]=useState({nome:"",email:"",tel:"",tipo:"",msg:""});
  return(<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      ::-webkit-scrollbar{width:4px;background:#0A0F1E;}
      ::-webkit-scrollbar-thumb{background:#D4AF3760;border-radius:2px;}
      .im{font-family:'Inter',sans-serif;background:${C.bg};color:${C.fg};overflow-x:hidden;}
      .im a{text-decoration:none;color:inherit;}
      .gara{font-family:'Cormorant Garamond',serif;}
      @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      /* glass card */
      .glass{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.12);border-radius:16px;}
      /* NAV */
      .im-nav{position:fixed;top:28px;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 72px;height:68px;background:rgba(10,15,30,.8);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08);}
      .im-links{display:flex;gap:32px;}
      .im-links a{font-size:14px;color:${C.muted};transition:color .2s;}
      .im-links a:hover{color:#fff;}
      .im-cta-btn{background:${C.gold};border:none;border-radius:6px;padding:11px 24px;color:#000;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:all .2s;}
      .im-cta-btn:hover{background:#e8c840;transform:translateY(-1px);box-shadow:0 6px 18px ${C.gold}50;}
      /* HERO */
      .im-hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;}
      .im-hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
      .im-hero-overlay{position:absolute;inset:0;background:linear-gradient(100deg,rgba(10,15,30,.95) 40%,rgba(10,15,30,.55) 100%);}
      .im-hero-content{position:relative;z-index:2;padding:120px 72px 60px;max-width:700px;}
      /* CARDS */
      .im-listings-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
      .im-card{border-radius:16px;overflow:hidden;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);transition:all .3s;cursor:pointer;}
      .im-card:hover{transform:translateY(-6px);border-color:${C.gold}60;box-shadow:0 20px 50px rgba(0,0,0,.4);}
      .im-card-img{width:100%;height:220px;object-fit:cover;display:block;transition:transform .4s;}
      .im-card:hover .im-card-img{transform:scale(1.04);}
      .im-card-body{padding:20px 22px 24px;background:rgba(255,255,255,.04);backdrop-filter:blur(10px);}
      /* AGENTS */
      .im-agents-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:800px;margin:0 auto;}
      .im-agent-card{border-radius:16px;overflow:hidden;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;gap:0;transition:all .25s;}
      .im-agent-card:hover{border-color:${C.gold}60;transform:translateY(-3px);}
      /* FORM */
      .im-input{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:13px 16px;font-size:14px;font-family:inherit;color:${C.fg};outline:none;transition:border-color .2s;width:100%;}
      .im-input:focus{border-color:${C.gold};}
      .im-input::placeholder{color:${C.muted};}
      /* SECTION */
      .im-section{padding:80px 72px;}
      .im-tag{font-size:11px;font-weight:600;color:${C.gold};letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;}
      .im-title{font-size:clamp(28px,3vw,48px);font-weight:600;line-height:1.1;margin-bottom:14px;}
      /* STATS GLASS */
      .im-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:900px;margin:0 auto;}
      .im-stat-glass{padding:24px;text-align:center;}
      /* RESPONSIVE */
      @media(max-width:1024px){.im-nav,.im-hero-content,.im-section{padding-left:32px;padding-right:32px;}.im-listings-grid{grid-template-columns:1fr 1fr;}.im-stats{grid-template-columns:1fr 1fr;}}
      @media(max-width:640px){.im-nav{padding:0 20px;}.im-links{display:none;}.im-hero-content,.im-section{padding-left:20px;padding-right:20px;}.im-listings-grid,.im-agents-grid{grid-template-columns:1fr;}.im-stats{grid-template-columns:1fr 1fr;}}
    `}</style>
    <div className="im">
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(10,15,30,.96)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"5px 24px"}}>
        <Link href="/" style={{color:C.gold,fontSize:11,letterSpacing:2,fontWeight:700}}>← CATÁLOGO TENTECH</Link>
      </div>
      <nav className="im-nav">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:34,height:34,borderRadius:8,background:`linear-gradient(135deg,${C.gold},#F0C040)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🏠</div>
          <span style={{fontSize:19,fontWeight:700,fontFamily:"'Cormorant Garamond',serif",color:"#fff",letterSpacing:.5}}>Élite Imóveis</span>
        </div>
        <div className="im-links">{["Imóveis","Corretores","Avaliação","Contato"].map(l=><a key={l} href="#">{l}</a>)}</div>
        <button className="im-cta-btn">AGENDAR VISITA</button>
      </nav>
      <section className="im-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/imovel-hero.jpg" alt="" className="im-hero-img"/>
        <div className="im-hero-overlay"/>
        <div className="im-hero-content">
          <p style={{fontSize:11,fontWeight:600,color:C.gold,letterSpacing:4,textTransform:"uppercase",marginBottom:20,animation:"fadeIn .8s ease .2s both"}}>Imóveis de Alto Padrão</p>
          <h1 style={{fontSize:"clamp(38px,5vw,70px)",fontWeight:600,lineHeight:1.05,color:"#fff",marginBottom:20,fontFamily:"'Cormorant Garamond',serif",animation:"fadeUp .8s ease .3s both"}}>Seu próximo lar<br/>te espera <span style={{color:C.gold}}>aqui.</span></h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,.65)",lineHeight:1.7,maxWidth:460,marginBottom:36,animation:"fadeUp .8s ease .45s both"}}>Curadoria exclusiva de imóveis premium. Do apartamento ideal ao patrimônio dos seus sonhos — encontramos o seu.</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",animation:"fadeUp .8s ease .6s both"}}>
            <button style={{background:C.gold,border:"none",borderRadius:8,padding:"15px 36px",color:"#000",fontSize:15,fontWeight:700,fontFamily:"inherit",cursor:"pointer",boxShadow:`0 6px 20px ${C.gold}40`,transition:"all .25s"}}>VER IMÓVEIS</button>
            <button style={{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:8,padding:"15px 36px",color:"#fff",fontSize:15,fontWeight:500,fontFamily:"inherit",cursor:"pointer",backdropFilter:"blur(8px)",transition:"all .25s"}}>TOUR VIRTUAL →</button>
          </div>
        </div>
      </section>
      {/* STATS */}
      <section style={{padding:"52px 72px",background:"rgba(255,255,255,.02)",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <div className="im-stats">
          {[["1.200+","Imóveis disponíveis"],["R$ 2B+","Em transações"],["98%","Satisfação"],["15 anos","De experiência"]].map(([v,l])=>(
            <div key={l} className="im-stat-glass glass">
              <div style={{fontSize:26,fontWeight:700,color:C.gold,fontFamily:"'Cormorant Garamond',serif"}}>{v}</div>
              <div style={{fontSize:12,color:C.muted,marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
      </section>
      {/* LISTINGS */}
      <section className="im-section">
        <p className="im-tag">Destaques</p>
        <h2 className="im-title gara">Imóveis em <span style={{color:C.gold}}>Destaque</span></h2>
        <p style={{fontSize:16,color:C.muted,maxWidth:480,marginBottom:48,lineHeight:1.7}}>Seleção exclusiva dos imóveis mais premium do mercado.</p>
        <div className="im-listings-grid">
          {listings.map(l=>(
            <div key={l.title} className="im-card">
              <div style={{position:"relative",overflow:"hidden"}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.img} alt={l.title} className="im-card-img"/>
                <div style={{position:"absolute",top:14,left:14,background:C.gold,color:"#000",fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:4,letterSpacing:1}}>{l.tag}</div>
              </div>
              <div className="im-card-body">
                <div style={{fontSize:20,fontWeight:600,fontFamily:"'Cormorant Garamond',serif",marginBottom:4}}>{l.title}</div>
                <div style={{fontSize:13,color:C.muted,marginBottom:12}}>📍 {l.local}</div>
                <div style={{display:"flex",gap:16,fontSize:13,color:C.muted,marginBottom:16}}>
                  <span>📐 {l.area}</span><span>🛏 {l.rooms} quartos</span><span>🚗 {l.park} vagas</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:22,fontWeight:700,color:C.gold,fontFamily:"'Cormorant Garamond',serif"}}>{l.price}</div>
                  <button style={{background:`${C.gold}15`,border:`1px solid ${C.gold}60`,borderRadius:6,padding:"8px 16px",color:C.gold,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>VER MAIS →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* AGENTS */}
      <section className="im-section" style={{background:"rgba(255,255,255,.02)",borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <p className="im-tag" style={{textAlign:"center"}}>Especialistas</p>
        <h2 className="im-title gara" style={{textAlign:"center"}}>Nossos <span style={{color:C.gold}}>Corretores</span></h2>
        <p style={{fontSize:16,color:C.muted,maxWidth:480,margin:"0 auto 48px",textAlign:"center",lineHeight:1.7}}>Profissionais dedicados a encontrar o imóvel ideal para você.</p>
        <div className="im-agents-grid">
          {agents.map(a=>(
            <div key={a.name} className="im-agent-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.name} style={{width:130,height:160,objectFit:"cover",objectPosition:"top",flexShrink:0}}/>
              <div style={{padding:"20px 22px"}}>
                <div style={{fontSize:11,color:C.gold,fontWeight:600,letterSpacing:2,marginBottom:6}}>{a.creci}</div>
                <div style={{fontSize:19,fontWeight:600,fontFamily:"'Cormorant Garamond',serif",marginBottom:4}}>{a.name}</div>
                <div style={{fontSize:13,color:C.muted,marginBottom:14}}>{a.role}</div>
                <div style={{fontSize:16,fontWeight:700,color:C.gold}}>{a.deals} <span style={{fontSize:12,color:C.muted,fontWeight:400}}>negócios</span></div>
                <button style={{marginTop:16,background:`${C.gold}15`,border:`1px solid ${C.gold}60`,borderRadius:6,padding:"8px 18px",color:C.gold,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>CONTATO →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FORM */}
      <section className="im-section">
        <div style={{textAlign:"center",marginBottom:48}}>
          <p className="im-tag" style={{textAlign:"center"}}>Contato</p>
          <h2 className="im-title gara" style={{textAlign:"center"}}>Agende uma <span style={{color:C.gold}}>Visita</span></h2>
        </div>
        <div style={{background:"rgba(255,255,255,.04)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.1)",borderRadius:16,padding:48,maxWidth:700,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <input className="im-input" placeholder="Nome" value={form.nome} onChange={e=>setForm(f=>({...f,nome:e.target.value}))}/>
            <input className="im-input" placeholder="E-mail" type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <input className="im-input" placeholder="Telefone" value={form.tel} onChange={e=>setForm(f=>({...f,tel:e.target.value}))}/>
            <select className="im-input" value={form.tipo} onChange={e=>setForm(f=>({...f,tipo:e.target.value}))}>
              <option value="">Tipo de imóvel</option>
              {["Apartamento","Casa","Cobertura","Terreno"].map(t=><option key={t}>{t}</option>)}
            </select>
          </div>
          <textarea className="im-input" style={{minHeight:100,resize:"vertical",marginBottom:16}} placeholder="Como posso ajudar?" value={form.msg} onChange={e=>setForm(f=>({...f,msg:e.target.value}))}/>
          <button style={{width:"100%",background:C.gold,border:"none",borderRadius:8,padding:16,color:"#000",fontSize:16,fontWeight:700,fontFamily:"inherit",cursor:"pointer",transition:"all .25s"}}>AGENDAR VISITA →</button>
        </div>
      </section>
      <footer style={{background:"rgba(255,255,255,.03)",borderTop:"1px solid rgba(255,255,255,.06)",padding:"40px 72px 24px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
          <span style={{fontSize:19,fontWeight:600,fontFamily:"'Cormorant Garamond',serif",color:"#fff"}}>Élite <span style={{color:C.gold}}>Imóveis</span></span>
          <span style={{fontSize:12,color:C.muted}}>© 2025 Élite Imóveis. CRECI-SP J24.892. Feito por TenTech</span>
        </div>
      </footer>
    </div>
  </>);
}
