"use client";
import { useState } from "react";
import Link from "next/link";

const dests=[
  {city:"Bali",country:"Indonésia",price:"R$ 8.900",days:10,img:"/dest1.jpg",tag:"Mais vendido",color:"#F97316"},
  {city:"Santorini",country:"Grécia",price:"R$ 12.400",days:12,img:"/dest2.jpg",tag:"Luxo",color:"#3B82F6"},
  {city:"Maldivas",country:"Ilhas Maldivas",price:"R$ 18.000",days:8,img:"/dest3.jpg",tag:"Premium",color:"#10B981"},
  {city:"Tóquio",country:"Japão",price:"R$ 11.200",days:14,img:"/dest4.jpg",tag:"Cultural",color:"#EC4899"},
];
const reviews=[
  {name:"Mariana Costa",dest:"Bali · 2024",text:"Experiência incrível! A viagem foi organizada perfeitamente do início ao fim. Voltarei com certeza.",stars:5,avatar:"🌺"},
  {name:"Pedro Alves",dest:"Santorini · 2024",text:"Melhor agência que já usei. Hospedagem 5 estrelas, transfers pontuais e guia excelente.",stars:5,avatar:"⛵"},
  {name:"Letícia Martins",dest:"Maldivas · 2023",text:"Lua de mel dos sonhos! Cada detalhe foi cuidado com muito carinho. Obrigada!",stars:5,avatar:"🏖️"},
];

export default function Viagens(){
  const [adults,setAdults]=useState(2);
  const [dest,setDest]=useState("");
  const [date,setDate]=useState("");
  return(<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      .tv{font-family:'Inter',sans-serif;background:#050A18;color:#F1F5F9;overflow-x:hidden;}
      .tv a{text-decoration:none;color:inherit;}
      .syne{font-family:'Syne',sans-serif;}
      @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
      @keyframes aurora{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
      /* aurora gradient */
      .aurora-bg{background:linear-gradient(-45deg,#0d1b4b,#0a2a1a,#1a0a3d,#0d2a3a,#1a1a0d);background-size:400% 400%;animation:aurora 12s ease infinite;}
      /* NAV */
      .tv-nav{position:fixed;top:28px;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 72px;height:68px;background:rgba(5,10,24,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08);}
      .tv-links{display:flex;gap:32px;}
      .tv-links a{font-size:14px;color:rgba(255,255,255,.6);transition:color .2s;}
      .tv-links a:hover{color:#fff;}
      .tv-cta{background:linear-gradient(135deg,#F97316,#FB923C);border:none;border-radius:999px;padding:11px 26px;color:#fff;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:all .2s;box-shadow:0 4px 16px #F9731640;}
      .tv-cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px #F9731660;}
      /* HERO */
      .tv-hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;}
      .tv-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;}
      .tv-hero-overlay{position:absolute;inset:0;background:linear-gradient(100deg,rgba(5,10,24,.92) 40%,rgba(5,10,24,.55) 100%);}
      /* aurora glow blobs */
      .tv-blob1{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(59,130,246,.15),transparent 70%);top:-100px;right:-100px;pointer-events:none;}
      .tv-blob2{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.1),transparent 70%);bottom:-50px;left:-100px;pointer-events:none;}
      .tv-hero-content{position:relative;z-index:2;padding:120px 72px 0;max-width:780px;}
      /* BOOKING CARD */
      .tv-booking{position:relative;z-index:2;margin:40px 72px 0;background:rgba(255,255,255,.07);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:28px 32px;display:grid;grid-template-columns:1fr 1fr 1fr auto auto;gap:16px;align-items:flex-end;}
      /* DESTS */
      .tv-section{padding:80px 72px;}
      .tv-tag{font-size:11px;font-weight:600;color:#F97316;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;}
      .tv-title{font-size:clamp(28px,3vw,48px);font-weight:800;line-height:1.05;margin-bottom:14px;}
      .tv-dests-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
      .tv-dest-card{border-radius:16px;overflow:hidden;cursor:pointer;transition:all .3s;position:relative;}
      .tv-dest-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,0,0,.5);}
      .tv-dest-card img{width:100%;height:280px;object-fit:cover;display:block;transition:transform .4s;}
      .tv-dest-card:hover img{transform:scale(1.06);}
      .tv-dest-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.85) 40%,transparent 100%);}
      /* REVIEWS */
      .tv-reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
      .tv-review-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:28px 24px;transition:all .25s;}
      .tv-review-card:hover{border-color:rgba(249,115,22,.3);transform:translateY(-3px);}
      /* INPUT */
      .tv-input{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:12px 16px;font-size:14px;font-family:inherit;color:#fff;outline:none;transition:border-color .2s;width:100%;}
      .tv-input:focus{border-color:#F97316;}
      .tv-input::placeholder{color:rgba(255,255,255,.4);}
      .tv-input option{background:#0F172A;}
      /* RESPONSIVE */
      @media(max-width:1024px){.tv-nav,.tv-hero-content,.tv-booking,.tv-section{padding-left:32px;padding-right:32px;}.tv-dests-grid{grid-template-columns:1fr 1fr;}.tv-booking{grid-template-columns:1fr 1fr;}.tv-reviews-grid{grid-template-columns:1fr 1fr;}}
      @media(max-width:640px){.tv-nav{padding:0 20px;}.tv-links{display:none;}.tv-hero-content,.tv-booking,.tv-section{padding-left:20px;padding-right:20px;}.tv-dests-grid,.tv-reviews-grid{grid-template-columns:1fr;}.tv-booking{grid-template-columns:1fr;}}
    `}</style>
    <div className="tv">
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(5,10,24,.95)",borderBottom:"1px solid rgba(255,255,255,.07)",padding:"5px 24px"}}>
        <Link href="/" style={{color:"#F97316",fontSize:11,letterSpacing:2,fontWeight:700}}>← CATÁLOGO TENTECH</Link>
      </div>
      <nav className="tv-nav">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#F97316,#FB923C)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>✈️</div>
          <span style={{fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"}}>Aurora<span style={{color:"#F97316"}}>Travel</span></span>
        </div>
        <div className="tv-links">{["Destinos","Pacotes","Depoimentos","Contato"].map(l=><a key={l} href="#">{l}</a>)}</div>
        <button className="tv-cta">PLANEJAR VIAGEM</button>
      </nav>
      <section className="tv-hero aurora-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/travel-hero.jpg" alt="" className="tv-hero-bg"/>
        <div className="tv-hero-overlay"/>
        <div className="tv-blob1"/><div className="tv-blob2"/>
        <div className="tv-hero-content">
          <p style={{fontSize:11,fontWeight:600,color:"#F97316",letterSpacing:4,textTransform:"uppercase",marginBottom:20,animation:"fadeIn .8s ease .2s both"}}>✈️ Sua próxima aventura começa aqui</p>
          <h1 style={{fontSize:"clamp(38px,5.5vw,80px)",fontWeight:800,lineHeight:1,color:"#fff",marginBottom:20,fontFamily:"'Syne',sans-serif",animation:"fadeUp .8s ease .3s both"}}>O mundo<br/><span style={{backgroundImage:"linear-gradient(135deg,#F97316,#FB923C,#FBBF24)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>está esperando</span><br/>por você.</h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,.65)",lineHeight:1.7,maxWidth:480,marginBottom:36,animation:"fadeUp .8s ease .45s both"}}>Pacotes personalizados para os destinos mais incríveis do mundo. Viaje com segurança, conforto e memórias inesquecíveis.</p>
          <div style={{display:"flex",gap:14,animation:"fadeUp .8s ease .6s both"}}>
            <button style={{background:"linear-gradient(135deg,#F97316,#FB923C)",border:"none",borderRadius:999,padding:"15px 36px",color:"#fff",fontSize:15,fontWeight:700,fontFamily:"inherit",cursor:"pointer",boxShadow:"0 6px 20px #F9731650",transition:"all .25s"}}>EXPLORAR DESTINOS</button>
            <button style={{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",borderRadius:999,padding:"15px 32px",color:"#fff",fontSize:15,fontWeight:500,fontFamily:"inherit",cursor:"pointer",backdropFilter:"blur(8px)"}}>▶ VER DEPOIMENTOS</button>
          </div>
          <div style={{display:"flex",gap:40,marginTop:52,animation:"fadeUp .8s ease .75s both"}}>
            {[["50K+","Viajantes felizes"],["120+","Destinos"],["4.9★","Avaliação média"]].map(([v,l])=>(
              <div key={l}><div style={{fontSize:28,fontWeight:800,color:"#F97316",fontFamily:"'Syne',sans-serif"}}>{v}</div><div style={{fontSize:12,color:"rgba(255,255,255,.5)",marginTop:3}}>{l}</div></div>
            ))}
          </div>
        </div>
        {/* BOOKING CARD */}
        <div className="tv-booking">
          <div>
            <div style={{fontSize:11,color:"rgba(255,255,255,.5)",letterSpacing:2,marginBottom:6}}>DESTINO</div>
            <select className="tv-input" value={dest} onChange={e=>setDest(e.target.value)}>
              <option value="">Onde quer ir?</option>
              {dests.map(d=><option key={d.city}>{d.city}, {d.country}</option>)}
            </select>
          </div>
          <div>
            <div style={{fontSize:11,color:"rgba(255,255,255,.5)",letterSpacing:2,marginBottom:6}}>DATA DE IDA</div>
            <input type="date" className="tv-input" value={date} onChange={e=>setDate(e.target.value)}/>
          </div>
          <div>
            <div style={{fontSize:11,color:"rgba(255,255,255,.5)",letterSpacing:2,marginBottom:6}}>ADULTOS</div>
            <div style={{display:"flex",alignItems:"center",gap:0}}>
              <button onClick={()=>setAdults(a=>Math.max(1,a-1))} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:"8px 0 0 8px",padding:"12px 16px",color:"#fff",cursor:"pointer",fontSize:16,fontFamily:"inherit"}}>−</button>
              <div style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderLeft:"none",borderRight:"none",padding:"12px 20px",fontSize:15,fontWeight:600,color:"#fff"}}>{adults}</div>
              <button onClick={()=>setAdults(a=>a+1)} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:"0 8px 8px 0",padding:"12px 16px",color:"#fff",cursor:"pointer",fontSize:16,fontFamily:"inherit"}}>+</button>
            </div>
          </div>
          <div style={{gridColumn:"span 2"}}>
            <button style={{width:"100%",background:"linear-gradient(135deg,#F97316,#FB923C)",border:"none",borderRadius:8,padding:"13px 32px",color:"#fff",fontSize:15,fontWeight:700,fontFamily:"inherit",cursor:"pointer",boxShadow:"0 4px 16px #F9731640",transition:"all .25s",whiteSpace:"nowrap"}}>🔍 BUSCAR PACOTES</button>
          </div>
        </div>
      </section>
      {/* DESTINOS */}
      <section className="tv-section">
        <p className="tv-tag">Destinos</p>
        <h2 className="tv-title syne">Onde você quer <span style={{color:"#F97316"}}>ir?</span></h2>
        <p style={{fontSize:16,color:"#94A3B8",maxWidth:480,marginBottom:48,lineHeight:1.7}}>Descubra os destinos mais desejados com pacotes completos e preços exclusivos.</p>
        <div className="tv-dests-grid">
          {dests.map(d=>(
            <div key={d.city} className="tv-dest-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.city}/>
              <div className="tv-dest-overlay"/>
              <div style={{position:"absolute",top:14,left:14,background:d.color,color:"#fff",fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:4,letterSpacing:1}}>{d.tag}</div>
              <div style={{position:"absolute",bottom:20,left:20,right:20}}>
                <div style={{fontSize:24,fontWeight:800,color:"#fff",fontFamily:"'Syne',sans-serif"}}>{d.city}</div>
                <div style={{fontSize:13,color:"rgba(255,255,255,.65)",marginBottom:10}}>📍 {d.country} · {d.days} dias</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:18,fontWeight:700,color:d.color}}>a partir de {d.price}</div>
                  <button style={{background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.25)",borderRadius:999,padding:"7px 16px",color:"#fff",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",backdropFilter:"blur(8px)"}}>VER →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* REVIEWS */}
      <section className="tv-section" style={{background:"rgba(255,255,255,.02)",borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <p className="tv-tag" style={{textAlign:"center"}}>Depoimentos</p>
        <h2 className="tv-title syne" style={{textAlign:"center"}}>O que nossos <span style={{color:"#F97316"}}>viajantes</span> dizem</h2>
        <p style={{fontSize:16,color:"#94A3B8",maxWidth:480,margin:"0 auto 48px",textAlign:"center",lineHeight:1.7}}>Mais de 50.000 viajantes satisfeitos. Veja o que eles falam.</p>
        <div className="tv-reviews-grid">
          {reviews.map(r=>(
            <div key={r.name} className="tv-review-card">
              <div style={{fontSize:36,marginBottom:14}}>{r.avatar}</div>
              <div style={{display:"flex",gap:3,marginBottom:12}}>{[...Array(r.stars)].map((_,i)=><span key={i} style={{color:"#F97316",fontSize:16}}>★</span>)}</div>
              <p style={{fontSize:14,color:"#CBD5E1",lineHeight:1.7,marginBottom:18}}>{r.text}</p>
              <div style={{fontWeight:600,fontSize:15}}>{r.name}</div>
              <div style={{fontSize:12,color:"#94A3B8",marginTop:2}}>{r.dest}</div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA BANNER */}
      <section style={{background:"linear-gradient(135deg,#0d1b4b,#1a0a3d,#0a2a1a)",padding:"72px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(249,115,22,.12),transparent 70%)",pointerEvents:"none"}}/>
        <h2 style={{fontSize:"clamp(28px,4vw,56px)",fontWeight:800,color:"#fff",fontFamily:"'Syne',sans-serif",marginBottom:14,position:"relative"}}>Pronto para a sua<br/><span style={{color:"#F97316"}}>próxima aventura?</span></h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,.65)",marginBottom:32,maxWidth:480,margin:"0 auto 32px",lineHeight:1.7}}>Fale com nossos especialistas e monte o pacote dos seus sonhos.</p>
        <button style={{background:"linear-gradient(135deg,#F97316,#FB923C)",border:"none",borderRadius:999,padding:"16px 48px",color:"#fff",fontSize:17,fontWeight:700,fontFamily:"inherit",cursor:"pointer",boxShadow:"0 8px 28px #F9731650",transition:"all .25s"}}>✈️ PLANEJAR MINHA VIAGEM</button>
      </section>
      <footer style={{background:"rgba(255,255,255,.03)",borderTop:"1px solid rgba(255,255,255,.07)",padding:"40px 72px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <span style={{fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"}}>Aurora<span style={{color:"#F97316"}}>Travel</span></span>
        <span style={{fontSize:12,color:"#94A3B8"}}>© 2025 AuroraTravel. Feito por TenTech</span>
      </footer>
    </div>
  </>);
}
