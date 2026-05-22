"use client";
import { useState } from "react";
import Link from "next/link";

const NAVY="#0F2851",GOLD="#C9A84C",GOLD2="#E8C97A",BG="#F8F6F1",WHITE="#FFFFFF";
const areas=[{icon:"⚖️",title:"Direito Civil",desc:"Contratos, família, herança e responsabilidade civil."},{icon:"🏢",title:"Direito Empresarial",desc:"Constituição de empresas, fusões e contencioso comercial."},{icon:"🏠",title:"Direito Imobiliário",desc:"Compra, venda, locação e regularização de imóveis."},{icon:"👷",title:"Direito Trabalhista",desc:"Rescisões, assédio, acordos coletivos e CLT."},{icon:"🛡️",title:"Direito Penal",desc:"Defesa criminal, habeas corpus e recursos."},{icon:"💻",title:"Direito Digital",desc:"LGPD, crimes cibernéticos e contratos digitais."}];
const attorneys=[{name:"Dr. Eduardo Matos",oab:"OAB/SP 142.380",area:"Direito Civil e Família",exp:"22 anos",cases:"1.200+",img:"/jur-adv1.jpg"},{name:"Dra. Camila Sousa",oab:"OAB/SP 198.754",area:"Direito Empresarial",exp:"16 anos",cases:"850+",img:"/jur-adv2.jpg"},{name:"Dr. Felipe Andrade",oab:"OAB/SP 211.092",area:"Direito Trabalhista e Penal",exp:"19 anos",cases:"2.100+",img:"/jur-adv3.jpg"}];
const results=[{tag:"Trabalhista",title:"Indenização por demissão indevida",value:"R$ 480.000",desc:"Empresa de logística · SP"},{tag:"Civil",title:"Rescisão contratual com danos",value:"R$ 1.2M",desc:"Incorporadora · RJ"},{tag:"Empresarial",title:"Acordo em fusão societária",value:"R$ 4.8M",desc:"Grupo industrial · MG"}];

export default function Juridico(){
  const [form,setForm]=useState({nome:"",email:"",tel:"",area:"",msg:""});
  return(<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      .jd{font-family:'Inter',sans-serif;background:${BG};color:${NAVY};overflow-x:hidden;}
      .jd a{text-decoration:none;color:inherit;}
      .serif{font-family:'Playfair Display',serif;}
      @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      .jd-nav{position:fixed;top:28px;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 72px;height:68px;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,.2);box-shadow:0 2px 20px rgba(15,40,81,.06);}
      .jd-logo{display:flex;align-items:center;gap:10px;}
      .jd-logo-line{width:3px;height:36px;background:linear-gradient(to bottom,${GOLD},${NAVY});}
      .jd-links{display:flex;gap:32px;}
      .jd-links a{font-size:14px;font-weight:500;color:${NAVY}99;transition:color .2s;}
      .jd-links a:hover{color:${NAVY};}
      .jd-cta-btn{background:${NAVY};border:none;border-radius:4px;padding:11px 24px;color:${GOLD};font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .2s;}
      .jd-cta-btn:hover{background:#1a3a6e;box-shadow:0 6px 18px ${NAVY}40;transform:translateY(-1px);}
      .jd-hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;}
      .jd-hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;}
      .jd-hero-overlay{position:absolute;inset:0;background:linear-gradient(105deg,rgba(15,40,81,.93) 45%,rgba(15,40,81,.55) 100%);}
      .jd-hero-content{position:relative;z-index:2;padding:120px 72px 60px;max-width:760px;}
      .jd-section{padding:80px 72px;}
      .jd-divider{width:48px;height:3px;background:linear-gradient(90deg,${GOLD},${GOLD2});border-radius:2px;margin-bottom:14px;}
      .jd-section-tag{font-size:11px;font-weight:600;color:${GOLD};letter-spacing:4px;text-transform:uppercase;margin-bottom:10px;}
      .jd-section-title{font-size:clamp(28px,3vw,44px);font-weight:700;line-height:1.1;margin-bottom:14px;}
      .jd-areas-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
      .jd-area-card{background:${WHITE};border-radius:6px;padding:28px 24px;border:1px solid rgba(201,168,76,.15);transition:all .25s;cursor:pointer;}
      .jd-area-card:hover{border-color:${GOLD};transform:translateY(-3px);box-shadow:0 12px 32px rgba(15,40,81,.08);}
      .jd-attys-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .jd-atty-card{background:${WHITE};border-radius:8px;overflow:hidden;border:1px solid rgba(201,168,76,.15);transition:all .25s;}
      .jd-atty-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(15,40,81,.1);}
      .jd-results-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
      .jd-result-card{background:${NAVY};border-radius:8px;padding:28px 24px;position:relative;overflow:hidden;transition:all .25s;}
      .jd-result-card:hover{transform:translateY(-3px);box-shadow:0 16px 40px rgba(15,40,81,.3);}
      .jd-result-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${GOLD},${GOLD2});}
      .jd-input{border:1.5px solid #E2E8F0;border-radius:6px;padding:13px 16px;font-size:14px;font-family:inherit;color:${NAVY};outline:none;transition:border-color .2s;width:100%;background:#fff;}
      .jd-input:focus{border-color:${GOLD};}
      .jd-footer{background:${NAVY};color:#fff;padding:52px 72px 28px;}
      .jd-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .jd-footer-col h4{font-size:11px;color:${GOLD};letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;}
      .jd-footer-col a{display:block;font-size:14px;color:rgba(255,255,255,.5);margin-bottom:9px;transition:color .2s;}
      .jd-footer-col a:hover{color:${GOLD};}
      @media(max-width:1024px){.jd-nav,.jd-hero-content,.jd-section,.jd-footer{padding-left:32px;padding-right:32px;}.jd-areas-grid,.jd-attys-grid,.jd-results-grid{grid-template-columns:1fr 1fr;}.jd-footer-grid{grid-template-columns:1fr 1fr;}}
      @media(max-width:640px){.jd-nav{padding:0 20px;}.jd-links{display:none;}.jd-hero-content,.jd-section{padding-left:20px;padding-right:20px;}.jd-areas-grid,.jd-attys-grid,.jd-results-grid{grid-template-columns:1fr;}.jd-footer{padding:40px 20px 24px;}.jd-footer-grid{grid-template-columns:1fr;}}
    `}</style>
    <div className="jd">
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(255,255,255,.97)",borderBottom:"1px solid rgba(201,168,76,.15)",padding:"5px 24px"}}>
        <Link href="/" style={{color:NAVY,fontSize:11,letterSpacing:2,fontWeight:700}}>← CATÁLOGO TENTECH</Link>
      </div>
      <nav className="jd-nav">
        <div className="jd-logo">
          <div className="jd-logo-line"/>
          <div><div style={{fontSize:18,fontWeight:700,letterSpacing:2,fontFamily:"'Playfair Display',serif",color:NAVY}}>MATOS &amp; SOUSA</div><div style={{fontSize:10,color:GOLD,letterSpacing:3,textTransform:"uppercase"}}>Advocacia</div></div>
        </div>
        <div className="jd-links">{["Áreas","Advogados","Resultados","Contato"].map(l=><a key={l} href="#">{l}</a>)}</div>
        <button className="jd-cta-btn">CONSULTA GRATUITA</button>
      </nav>
      <section className="jd-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/jur-hero.jpg" alt="" className="jd-hero-img"/>
        <div className="jd-hero-overlay"/>
        <div className="jd-hero-content">
          <p style={{fontSize:11,fontWeight:600,color:GOLD,letterSpacing:4,textTransform:"uppercase",marginBottom:20,animation:"fadeIn .8s ease .2s both"}}>Advocacia de Excelência — desde 1998</p>
          <h1 style={{fontSize:"clamp(38px,5vw,68px)",fontWeight:700,lineHeight:1.1,color:"#fff",marginBottom:20,fontFamily:"'Playfair Display',serif",animation:"fadeUp .8s ease .3s both"}}>Seus direitos<br/>defendidos com <span style={{color:GOLD}}>precisão.</span></h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,.72)",lineHeight:1.7,maxWidth:500,marginBottom:36,animation:"fadeUp .8s ease .45s both"}}>Mais de 25 anos protegendo pessoas e empresas. Atendimento personalizado, estratégia jurídica sólida e resultados comprovados.</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",animation:"fadeUp .8s ease .6s both"}}>
            <button style={{background:GOLD,border:"none",borderRadius:4,padding:"15px 36px",color:NAVY,fontSize:15,fontWeight:700,fontFamily:"inherit",cursor:"pointer",transition:"all .25s",boxShadow:`0 6px 20px ${GOLD}50`}}>AGENDAR CONSULTA</button>
            <button style={{background:"transparent",border:"2px solid rgba(255,255,255,.4)",borderRadius:4,padding:"15px 36px",color:"#fff",fontSize:15,fontWeight:500,fontFamily:"inherit",cursor:"pointer",transition:"all .25s"}}>NOSSAS ÁREAS →</button>
          </div>
          <div style={{display:"flex",gap:40,marginTop:52,flexWrap:"wrap",animation:"fadeUp .8s ease .75s both"}}>
            {[["25+","Anos de atuação"],["4.200+","Casos resolvidos"],["98%","Taxa de sucesso"]].map(([v,l])=>(
              <div key={l}><div style={{fontSize:30,fontWeight:700,color:GOLD,fontFamily:"'Playfair Display',serif"}}>{v}</div><div style={{fontSize:12,color:"rgba(255,255,255,.6)",marginTop:3}}>{l}</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="jd-section">
        <div className="jd-divider"/><p className="jd-section-tag">Especialidades</p>
        <h2 className="jd-section-title serif">Áreas de <span style={{color:GOLD}}>Atuação</span></h2>
        <p style={{fontSize:16,color:"#64748B",lineHeight:1.7,maxWidth:480,marginBottom:48}}>Expertise jurídica abrangente para proteger seus interesses.</p>
        <div className="jd-areas-grid">
          {areas.map(a=>(
            <div key={a.title} className="jd-area-card">
              <div style={{fontSize:32,marginBottom:14}}>{a.icon}</div>
              <h3 style={{fontSize:17,fontWeight:700,color:NAVY,marginBottom:8}}>{a.title}</h3>
              <p style={{fontSize:14,color:"#64748B",lineHeight:1.6}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="jd-section" style={{background:WHITE,borderTop:`1px solid rgba(201,168,76,.1)`,borderBottom:`1px solid rgba(201,168,76,.1)`}}>
        <div className="jd-divider"/><p className="jd-section-tag">Equipe</p>
        <h2 className="jd-section-title serif">Nossos <span style={{color:GOLD}}>Advogados</span></h2>
        <p style={{fontSize:16,color:"#64748B",lineHeight:1.7,maxWidth:480,marginBottom:48}}>Profissionais certificados com décadas de experiência.</p>
        <div className="jd-attys-grid">
          {attorneys.map(a=>(
            <div key={a.name} className="jd-atty-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.name} style={{width:"100%",height:260,objectFit:"cover",objectPosition:"top",display:"block"}}/>
              <div style={{padding:"20px 22px 24px"}}>
                <div style={{fontSize:11,color:GOLD,fontWeight:600,letterSpacing:2,marginBottom:6}}>{a.oab}</div>
                <div style={{fontSize:19,fontWeight:700,marginBottom:4,fontFamily:"'Playfair Display',serif"}}>{a.name}</div>
                <div style={{fontSize:13,color:"#64748B",marginBottom:14}}>{a.area}</div>
                <div style={{display:"flex",gap:20,paddingTop:14,borderTop:`1px solid rgba(201,168,76,.15)`}}>
                  <div><div style={{fontSize:16,fontWeight:700,color:NAVY}}>{a.exp}</div><div style={{fontSize:11,color:"#94A3B8",marginTop:2}}>Experiência</div></div>
                  <div><div style={{fontSize:16,fontWeight:700,color:NAVY}}>{a.cases}</div><div style={{fontSize:11,color:"#94A3B8",marginTop:2}}>Casos</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="jd-section" style={{background:"#0a1f3d"}}>
        <div className="jd-divider"/><p className="jd-section-tag">Resultados</p>
        <h2 className="jd-section-title serif" style={{color:"#fff"}}>Casos de <span style={{color:GOLD}}>Sucesso</span></h2>
        <p style={{fontSize:16,color:"rgba(255,255,255,.55)",maxWidth:480,marginBottom:48}}>Resultados reais conquistados para nossos clientes.</p>
        <div className="jd-results-grid">
          {results.map(r=>(
            <div key={r.title} className="jd-result-card">
              <div style={{fontSize:11,fontWeight:600,color:GOLD,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>{r.tag}</div>
              <div style={{fontSize:16,fontWeight:600,color:"#fff",marginBottom:10,lineHeight:1.4}}>{r.title}</div>
              <div style={{fontSize:32,fontWeight:700,color:GOLD,fontFamily:"'Playfair Display',serif",marginBottom:8}}>{r.value}</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,.5)"}}>{r.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="jd-section">
        <div style={{textAlign:"center",marginBottom:48}}>
          <div className="jd-divider" style={{margin:"0 auto 14px"}}/>
          <p className="jd-section-tag" style={{textAlign:"center"}}>Contato</p>
          <h2 className="jd-section-title serif" style={{textAlign:"center"}}>Agende sua <span style={{color:GOLD}}>Consulta</span></h2>
          <p style={{fontSize:16,color:"#64748B",marginTop:8}}>Primeira consulta gratuita. Resposta em até 24h úteis.</p>
        </div>
        <div style={{background:WHITE,borderRadius:12,padding:48,border:`1px solid rgba(201,168,76,.2)`,boxShadow:`0 8px 40px rgba(15,40,81,.08)`,maxWidth:760,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <input className="jd-input" placeholder="Nome completo" value={form.nome} onChange={e=>setForm(f=>({...f,nome:e.target.value}))}/>
            <input className="jd-input" placeholder="E-mail" type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <input className="jd-input" placeholder="Telefone" value={form.tel} onChange={e=>setForm(f=>({...f,tel:e.target.value}))}/>
            <select className="jd-input" value={form.area} onChange={e=>setForm(f=>({...f,area:e.target.value}))}>
              <option value="">Área jurídica</option>
              {areas.map(a=><option key={a.title}>{a.title}</option>)}
            </select>
          </div>
          <textarea className="jd-input" style={{minHeight:100,resize:"vertical",marginBottom:0}} placeholder="Descreva brevemente sua situação..." value={form.msg} onChange={e=>setForm(f=>({...f,msg:e.target.value}))}/>
          <button style={{width:"100%",background:NAVY,border:"none",borderRadius:6,padding:16,color:GOLD,fontSize:16,fontWeight:700,fontFamily:"inherit",cursor:"pointer",letterSpacing:.5,marginTop:8,transition:"all .25s"}}>SOLICITAR CONSULTA GRATUITA →</button>
          <p style={{textAlign:"center",fontSize:12,color:"#94A3B8",marginTop:12}}>🔒 Suas informações são confidenciais.</p>
        </div>
      </section>
      <footer className="jd-footer">
        <div className="jd-footer-grid">
          <div>
            <p style={{fontSize:14,color:"rgba(255,255,255,.45)",lineHeight:1.7,maxWidth:240}}>Defendendo seus direitos com ética, competência e dedicação desde 1998.</p>
          </div>
          {[["Áreas",["Civil","Empresarial","Imobiliário","Trabalhista"]],["Escritório",["Sobre nós","Equipe","Blog"]],["Contato",["📍 São Paulo, SP","📞 (11) 3456-7890"]]].map(([t,ls])=>(
            <div key={t as string} className="jd-footer-col">
              <h4>{t as string}</h4>
              {(ls as string[]).map(l=><a key={l} href="#">{l}</a>)}
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
          <span style={{fontSize:12,color:"rgba(255,255,255,.35)"}}>© 2025 Matos &amp; Sousa Advocacia. OAB/SP.</span>
          <span style={{fontSize:12,color:GOLD}}>Feito por TenTech</span>
        </div>
      </footer>
    </div>
  </>);
}
