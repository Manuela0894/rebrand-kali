
import './style.css';

export default function ToolsSection() {
  const categories = [
    {
      title: "Information Gathering",
      desc: "Identify assets, map networks, and gather open-source intelligence (OSINT)."
    },
    {
      title: "Vulnerability Analysis",
      desc: "Scan and detect security flaws across target systems and networks."
    },
    {
      title: "Web Applications",
      desc: "Audit, exploit, and secure modern web apps and database architectures."
    },
    {
      title: "Exploitation Tools",
      desc: "Deploy payloads, weaponize access, and execute advanced penetration tests."
    },
    {
      title: "Wireless Attacks",
      desc: "Audit wireless networks, crack WPA protocols, and simulate rogue APs."
    },
    {
      title: "Forensics & Reverse",
      desc: "Analyze malware, decompile binaries, and investigate digital evidence."
    }
  ];

  return (
    <section className="tools-section">
      <div className="tools-header">
        <h2 className="tools-subtitle">SYSTEM ECOSYSTEM</h2>
        <h1 className="tools-title">All the tools you need.</h1>
        <p className="tools-description">
          A curated collection of industry-leading utilities pre-configured for security research and advanced penetration testing operations.
        </p>
      </div>

      <div className="tools-grid">
        {categories.map((cat, index) => (
          <div key={index} className="tool-card">
            <h3 className="card-title">{cat.title}</h3>
            <p className="card-desc">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}