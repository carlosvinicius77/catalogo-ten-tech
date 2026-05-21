"use client";
import { useState } from "react";
import Link from "next/link";

const CATS = ["Todas", "Mexicana", "Hamburguesas", "Pizza", "Sushi", "Vegetariana", "Tailandesa"];

const ITEMS = [
  { id: 1, name: "La Taqueria Mexicana", time: "20-30 min", price: "$$", cat: "Mexicana", rating: 4.8, img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=320&fit=crop", color: "#F97316", bg: "#FFF7ED" },
  { id: 2, name: "Burger Palace", time: "25-35 min", price: "$$$", cat: "Hamburguesas", rating: 4.5, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=320&fit=crop", color: "#EA580C", bg: "#FFF7ED" },
  { id: 3, name: "Sushi Express", time: "30-40 min", price: "$$$$", cat: "Sushi", rating: 4.9, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=320&fit=crop", color: "#DC2626", bg: "#FEF2F2" },
  { id: 4, name: "Pizza Napoletana", time: "20-25 min", price: "$$", cat: "Pizza", rating: 4.6, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=320&fit=crop", color: "#D97706", bg: "#FFFBEB" },
  { id: 5, name: "Veggie Garden", time: "15-25 min", price: "$$", cat: "Vegetariana", rating: 4.7, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=320&fit=crop", color: "#16A34A", bg: "#F0FDF4" },
  { id: 6, name: "Thai Spice", time: "30-35 min", price: "$$$", cat: "Tailandesa", rating: 4.4, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=320&fit=crop", color: "#EA580C", bg: "#FFF7ED" },
];

export default function FoodApp() {
  const [activeCat, setActiveCat] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = ITEMS.filter((r) => {
    const matchCat = activeCat === "Todas" || r.cat === activeCat;
    const matchSearch = !search || r.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Topbar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "10px 24px" }}>
        <Link href="/" style={{ color: "#6c63ff", textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
          ← Voltar ao catálogo
        </Link>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 60px" }}>
        {/* Logo */}
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 24 }}>FoodApp</h1>

        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1.5px solid #e0e0e0", borderRadius: 12, padding: "12px 18px", marginBottom: 18 }}>
          <span style={{ color: "#aaa", fontSize: 17 }}>🔍</span>
          <input
            type="text"
            placeholder="Buscar restaurantes o comida..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, border: "none", outline: "none", fontSize: 15, color: "#333", background: "transparent" }}
          />
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: activeCat === cat ? "none" : "1.5px solid #ddd",
                background: activeCat === cat ? "#111" : "#fff",
                color: activeCat === cat ? "#fff" : "#444",
                fontWeight: activeCat === cat ? 700 : 400,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section title */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 20 }}>Restaurantes cercanos</h2>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {filtered.map((r) => (
            <div
              key={r.id}
              style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.13)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}
            >
              <div style={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.name} style={{ width: "100%", height: 190, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 12, right: 12, background: "#fff", borderRadius: 999, padding: "5px 11px", display: "flex", alignItems: "center", gap: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 13, fontWeight: 700 }}>
                  <span>⭐</span><span>{r.rating}</span>
                </div>
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 6 }}>{r.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, color: "#777", fontSize: 13 }}>
                  <span>⏱ {r.time}</span>
                  <span>$ {r.price}</span>
                </div>
                <span style={{ display: "inline-block", background: r.bg, color: r.color, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999 }}>
                  {r.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🍽️</div>
            <p>Nenhum restaurante encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
