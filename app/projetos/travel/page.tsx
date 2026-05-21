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
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#14183E", background: "#fff" }}>
      {/* Back */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "10px 24px" }}>
        <Link href="/" style={{ color: "#6c63ff", textDecoration: "none", fontSize: 13, fontWeight: 600 }}>← Voltar ao catálogo</Link>
      </div>

      {/* HEADER */}
      <header style={{ background: "#fff", padding: "0 60px", borderBottom: "1px solid #f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, #FF7B54, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>J</div>
            <span style={{ fontSize: 22, fontWeight: 800 }}>Jadoo</span>
          </div>
          <nav style={{ display: "flex", gap: 36 }}>
            {["Destinos", "Serviços", "Galeria", "Blog", "Contato"].map((item) => (
              <a key={item} href="#" style={{ textDecoration: "none", color: "#5E6282", fontSize: 15, fontWeight: 500 }}>{item}</a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ padding: "9px 22px", borderRadius: 8, border: "2px solid #FF7B54", background: "transparent", color: "#FF7B54", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>Entrar</button>
            <button style={{ padding: "9px 22px", borderRadius: 8, border: "none", background: "#FF7B54", color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>Cadastrar</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #FEF4EA 0%, #FFF8F3 100%)", padding: "80px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ color: "#FF7B54", fontWeight: 700, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Melhor Agência de Viagens</p>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, color: "#14183E", marginBottom: 20 }}>
              Viaje, curta e viva uma vida nova e plena
            </h1>
            <p style={{ color: "#5E6282", fontSize: 16, lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
              Descubra destinos incríveis ao redor do mundo. Planejamos cada detalhe da sua viagem para que você só precise se preocupar em aproveitar.
            </p>
            <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
              <button style={{ padding: "14px 32px", borderRadius: 10, border: "none", background: "#FF7B54", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 20px rgba(255,123,84,0.35)" }}>
                Explorar agora
              </button>
              <button style={{ padding: "14px 24px", borderRadius: 10, border: "none", background: "transparent", color: "#14183E", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 38, height: 38, borderRadius: "50%", background: "#FF7B54", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>▶</span>
                Assistir vídeo
              </button>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 40 }}>
              {[["500+", "Destinos"], ["1.2k+", "Viajantes"], ["15+", "Anos de exp."]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#14183E" }}>{n}</div>
                  <div style={{ fontSize: 14, color: "#5E6282" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 420, height: 480, borderRadius: "50% 50% 50% 50%", overflow: "hidden", background: "linear-gradient(135deg, #FFD4C2, #FFB080)", boxShadow: "0 20px 60px rgba(255,123,84,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&h=600&fit=crop&auto=format" alt="Viajante" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 60px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#5E6282", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>O que oferecemos</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#14183E", marginBottom: 50 }}>Nossos Melhores Serviços</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "#F5F5F5", borderRadius: 18, padding: "32px 20px", textAlign: "center", transition: "all 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#FEF4EA"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#F5F5F5"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#14183E", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#5E6282", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding: "80px 60px", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <p style={{ color: "#5E6282", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>Explore o mundo</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#14183E" }}>Principais Destinos</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {destinations.map((d) => (
              <div key={d.name} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.name} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#14183E" }}>{d.name}</h3>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#FF7B54" }}>⭐ {d.rating}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ color: "#5E6282", fontSize: 14 }}>{d.country}</p>
                    <span style={{ fontWeight: 700, color: "#14183E", fontSize: 15 }}>{d.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section style={{ padding: "80px 60px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ color: "#5E6282", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>Fácil e Rápido</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#14183E", marginBottom: 40 }}>Reserve sua próxima viagem em 3 passos</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {steps.map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "#FEF4EA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, color: "#FF7B54", fontSize: 16 }}>{s.num}</div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#14183E", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ color: "#5E6282", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #FEF4EA, #FFE8D6)", borderRadius: 24, padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 80, marginBottom: 20 }}>🌍</div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#14183E", marginBottom: 12 }}>Pronto para partir?</h3>
            <p style={{ color: "#5E6282", marginBottom: 24, lineHeight: 1.6 }}>Mais de 500 destinos esperando por você. Planejamos tudo.</p>
            <button style={{ padding: "13px 30px", borderRadius: 10, border: "none", background: "#FF7B54", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>Começar agora</button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: "linear-gradient(135deg, #FF7B54, #FF9A6C)", padding: "70px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Receba ofertas exclusivas</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, marginBottom: 30 }}>Cadastre seu e-mail e receba as melhores promoções de viagem.</p>
          <div style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
            <input type="email" placeholder="Seu e-mail" style={{ flex: 1, padding: "14px 20px", border: "none", outline: "none", fontSize: 15 }} />
            <button style={{ padding: "14px 28px", background: "#14183E", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", fontSize: 15 }}>Inscrever</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#14183E", color: "#fff", padding: "50px 60px 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#FF7B54", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>J</div>
                <span style={{ fontSize: 20, fontWeight: 800 }}>Jadoo</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>Sua agência de viagens de confiança. Realizamos sonhos ao redor do mundo.</p>
            </div>
            {[["Empresa", ["Sobre nós", "Carreiras", "Imprensa"]], ["Destinos", ["Europa", "Ásia", "Américas"]], ["Suporte", ["FAQ", "Contato", "Política"]]].map(([title, links]) => (
              <div key={title as string}>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{title as string}</h4>
                {(links as string[]).map((l) => (
                  <div key={l} style={{ marginBottom: 10 }}><a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{l}</a></div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
            © 2025 Jadoo Travel. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
