"use client";

import { useState, useMemo } from "react";
import { categories, projects, type ProjectItem } from "../data";

const categoryIcons: Record<string, string> = {
  sites: "🌐",
  google: "🔍",
  maps: "📍",
  gestao: "📊",
  automacoes: "⚡",
};

const categoryGradients: Record<string, string> = {
  sites: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
  google: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  maps: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
  gestao: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
  automacoes: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
};

function FeaturedCard({ project }: { project: ProjectItem }) {
  const [hovered, setHovered] = useState(false);
  const cat = categories.find((c) => c.id === project.category);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: hovered ? "2px solid #d97706" : "2px solid #fbbf24",
        boxShadow: hovered
          ? "0 16px 48px rgba(217,119,6,0.18)"
          : "0 4px 20px rgba(217,119,6,0.10)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: 32,
        minHeight: 220,
      }}
    >
      {/* Left: visual */}
      <div
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 60%, #fbbf24 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: project.image ? 0 : 32,
          gap: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        )}
        {/* Destaque badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "#d97706",
            color: "#fff",
            fontSize: 11,
            fontWeight: 800,
            padding: "4px 12px",
            borderRadius: 999,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          ⭐ Destaque
        </div>
        <span style={{ fontSize: 72 }}>📊</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#92400e",
            background: "#fef3c7",
            padding: "4px 12px",
            borderRadius: 999,
            border: "1px solid #fbbf24",
          }}
        >
          {cat?.label}
        </span>
      </div>

      {/* Right: content */}
      <div
        style={{
          padding: "28px 28px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: 10,
              letterSpacing: "-0.3px",
            }}
          >
            {project.title}
          </h2>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 14 }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  background: "#fef3c7",
                  color: "#92400e",
                  padding: "3px 10px",
                  borderRadius: 6,
                  fontWeight: 600,
                  border: "1px solid #fde68a",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            padding: "11px 22px",
            borderRadius: 10,
            background: hovered
              ? "linear-gradient(135deg, #b45309, #d97706)"
              : "linear-gradient(135deg, #d97706, #f59e0b)",
            transition: "all 0.2s",
            alignSelf: "flex-start",
            boxShadow: "0 2px 8px rgba(217,119,6,0.25)",
          }}
        >
          Acessar projeto →
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [hovered, setHovered] = useState(false);
  const cat = categories.find((c) => c.id === project.category);
  const isPlaceholder = project.link === "#";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: hovered ? "1.5px solid #6c63ff" : "1.5px solid #e8eaf0",
        boxShadow: hovered
          ? "0 8px 32px rgba(108,99,255,0.13)"
          : "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 150,
          background: categoryGradients[project.category] || "#f5f6fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <span style={{ fontSize: 48 }}>{categoryIcons[project.category]}</span>
        )}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: cat?.bg || "#ede9ff",
            color: cat?.color || "#6c63ff",
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          {cat?.label || project.category}
        </div>
      </div>

      <div style={{ padding: "16px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#1a1a2e",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6b7280",
            lineHeight: 1.5,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                background: "#f5f6fa",
                color: "#4b5563",
                padding: "3px 8px",
                borderRadius: 6,
                fontWeight: 500,
                border: "1px solid #e8eaf0",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target={isPlaceholder ? undefined : "_blank"}
          rel="noopener noreferrer"
          onClick={(e) => isPlaceholder && e.preventDefault()}
          style={{
            marginTop: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: isPlaceholder ? "#9ca3af" : "#6c63ff",
            textDecoration: "none",
            padding: "8px 14px",
            borderRadius: 9,
            background: isPlaceholder ? "#f9fafb" : hovered ? "#ede9ff" : "#f5f3ff",
            border: `1px solid ${isPlaceholder ? "#e8eaf0" : "#d4d0ff"}`,
            transition: "all 0.15s",
            alignSelf: "flex-start",
            cursor: isPlaceholder ? "default" : "pointer",
          }}
        >
          {isPlaceholder ? "Em breve" : "Ver projeto →"}
        </a>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [search, setSearch] = useState("");

  const featuredProject = projects.find((p) => p.featured);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (p.featured) return false;
      const matchCat = activeCategory === "todos" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const showFeatured =
    featuredProject &&
    (activeCategory === "todos" ||
      activeCategory === featuredProject.category) &&
    (!search ||
      featuredProject.title.toLowerCase().includes(search.toLowerCase()) ||
      featuredProject.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 60px" }}>
      {/* Search + Filter bar */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1.5px solid #e8eaf0",
          padding: "18px 20px",
          marginBottom: 32,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#f5f6fa",
            borderRadius: 10,
            padding: "10px 14px",
            border: "1.5px solid #e8eaf0",
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 16, color: "#9ca3af" }}>🔎</span>
          <input
            type="text"
            placeholder="Buscar projeto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              outline: "none",
              fontSize: 15,
              color: "#1a1a2e",
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9ca3af",
                fontSize: 18,
                padding: 0,
                lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 999,
                  border: active ? `2px solid ${cat.color}` : "2px solid #e8eaf0",
                  background: active ? cat.bg : "#fff",
                  color: active ? cat.color : "#6b7280",
                  fontWeight: active ? 700 : 500,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured card */}
      {showFeatured && featuredProject && (
        <FeaturedCard project={featuredProject} />
      )}

      {/* Results count */}
      <div style={{ marginBottom: 20, color: "#6b7280", fontSize: 14 }}>
        {filtered.length + (showFeatured ? 1 : 0)} projeto
        {filtered.length + (showFeatured ? 1 : 0) !== 1 ? "s" : ""} encontrado
        {filtered.length + (showFeatured ? 1 : 0) !== 1 ? "s" : ""}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : !showFeatured ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#9ca3af" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p style={{ fontSize: 16 }}>Nenhum projeto encontrado</p>
        </div>
      ) : null}
    </main>
  );
}
