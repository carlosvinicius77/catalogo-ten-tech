import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e8eaf0",
        padding: "24px 24px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
        <Image
          src="/logo.png"
          alt="TenTech Logo"
          width={48}
          height={48}
          style={{ objectFit: "contain" }}
          priority
        />
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px" }}>
          Ten<span style={{ color: "#6c63ff" }}>Tech</span>
        </h1>
      </div>
      <p style={{ color: "#6b7280", fontSize: 15 }}>
        Soluções digitais para o seu negócio crescer
      </p>
    </header>
  );
}
