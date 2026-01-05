import React, { useEffect } from "react";
import { Footer } from "./Index";
import charan from "../assets/charan.jpeg";
import govind from "../assets/govind.jpeg";
import prudhvi from "../assets/prudhvi.jpeg";
import santhosh from "../assets/santhosh.jpeg";
import venkat from "../assets/venkat.jpeg";
import viadocsLogo from "../assets/viadoclog.png";
import knowraLogo from "../assets/knowralog.png";
import wwi from "../assets/wwi.png";

const AboutPage = () => {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
          html, body {
      overflow-x: hidden;
      max-width: 100vw;
    }
:root{
  --bg:#ffffff;
  --card:#f9f9f9;
  --border:#eaeaea;
  --text:#111;
  --muted:#666;
  --accent:#000;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Inter,system-ui,Arial;
}
body{
  background:var(--bg);
  color:var(--text);
  line-height:1.75;
}
section{
  padding:100px 8%;
  opacity:0;
  transform:translateY(35px);
  transition:1s ease;
}
section.show{
  opacity:1;
  transform:none;
}
h1{font-size:3rem;font-weight:700;}
h2{font-size:2.2rem;margin-bottom:24px;}
h3{font-size:1.3rem;margin-bottom:10px;}
p{color:var(--muted);max-width:1100px;}
.hero{
  text-align:center;
  padding-top:140px;
}
.hero img{
  width:90px;
  margin-bottom:25px;
}
.hero p{
  margin-top:16px;
  font-size:1.05rem;
}
.grid{
  display:grid;
  gap:35px;
}
.two{
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
}
.three{
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
}
.card{
  background:var(--card);
  padding:40px;
  border-radius:18px;
  border:1px solid var(--border);
  transition:.4s ease;
}
.card:hover{
  transform:translateY(-6px);
}
.team img{
  width:100%;
  border-radius:16px;
  margin-bottom:20px;
}
.role{
  font-size:.9rem;
  font-weight:600;
  margin-bottom:12px;
}
.products img{
  width:120px;
  margin-bottom:15px;
}
.badge{
  display:inline-block;
  padding:6px 14px;
  border-radius:20px;
  background:#eee;
  font-size:.8rem;
  margin-bottom:12px;
}
.values li{
  margin-bottom:16px;
  color:var(--muted);
}
footer{
  background:#fafafa;
  border-top:1px solid var(--border);
  padding:80px 8%;
}
footer a{
  color:#000;
  text-decoration:none;
}
footer a:hover{
  text-decoration:underline;
}
@media(max-width:768px){
  h1{font-size:2.3rem;}
  /* Founder & Leadership: stack image under text on mobile */
  .ssamr > .card.team {
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: left !important;
  }
  .ssamr > .card.team img {
    margin: 0 0 20px 0 !important;
    width: 100% !important;
    max-width: 300px;
    height: auto !important;
    align-self: center;
  }
}
      `}</style>

      {/* HERO */}
      <section className="hero show">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "380px" }}>
          <img src={wwi} alt="WWI Logo" style={{ width: 300, height: 300, objectFit: "contain" }} draggable="false" onContextMenu={e => e.preventDefault()} />
          <h1 style={{ marginTop: 24 }}>Work Wizards Innovations</h1>
          <p style={{ marginTop: 10, fontSize: '1.15rem', color: '#666' }}>
            Innovating Web, Apps & Beyond
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Work Wizards Innovations</h2>
        <p>
          WORK WIZARDS INNOVATIONS (WWI) is an innovation-driven technology startup established in 2024,
          headquartered in Eluru, Andhra Pradesh, India. Registered as an MSME, WWI operates with a clear
          mission: to transform ideas into impactful, scalable, and future-ready digital solutions.
        </p>
        <br />
        <p>
          At WWI, innovation is the outcome of structured thinking, research-driven development,
          and disciplined execution. Every solution we build is aligned with real-world usability,
          long-term scalability, and ethical responsibility.
        </p>
      </section>

      {/* COMPANY OVERVIEW */}
      <section>
        <h2>Company Overview</h2>
        <p>
          WWI delivers end-to-end web and application development services, ongoing maintenance,
          technical support, and develops in-house digital products. We serve businesses,
          institutions, colleges, trusts, and students through AI-enabled, automation-driven platforms.
        </p>
        <br />
        <p>
          Our service-first, long-term partnership approach ensures sustainable value creation
          beyond short-term project delivery.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="grid two">
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To build high-value, widely usable technology products and establish Work Wizards Innovations
            as a globally recognized technology brand over the next 5–10 years.
          </p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To deliver dependable technology services and purposeful products with trust,
            accountability, ethical branding, and long-term partnerships at the core.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section>
        <h2>Our Core Values</h2>
        <ul className="values">
          <li><strong>Purpose-Driven Innovation</strong> — Technology with intent and impact.</li>
          <li><strong>Trust, Transparency & Ethics</strong> — Long-term credibility.</li>
          <li><strong>User-First Thinking</strong> — Practical, efficient solutions.</li>
          <li><strong>Quality & Ownership</strong> — End-to-end accountability.</li>
          <li><strong>Continuous Learning</strong> — Research-led adaptability.</li>
          <li><strong>Collaboration & Responsibility</strong> — Shared goals, clear ownership.</li>
        </ul>
      </section>

      {/* LEADERSHIP */}
      <section>
        <div className="ssamr" style={{ display: "flex", flexDirection: "column", gap: 36, maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ alignSelf: 'flex-start', marginBottom: 0, marginLeft: 0 }}>Founder & Leadership</h2>
          {/* Venkat: Image Left, Text Right */}
          <div className="card team ssamr" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "nowrap", flexDirection: "row", minHeight: 180, background: '#fafbfc', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32, border: '1px solid #eee', width: '100%' }}>
            <img src={venkat} alt="Nalla Venkat" style={{ width: 200, height: 200, borderRadius: 12, flexShrink: 0, objectFit: "cover", background: '#fff', border: '2px solid #eaeaea', marginRight: 24 }} draggable="false" onContextMenu={e => e.preventDefault()} />
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 8 }}>Nalla Venkat</h3>
              <div className="role" style={{ fontWeight: 700, marginBottom: 12 }}>Founder & Chief Executive Officer (CEO)</div>
              <p style={{ marginBottom: 0 }}>
                As Founder and CEO, Venkat leads WWI’s vision, innovation roadmap, research-driven product development, and strategic collaborations. He ensures ethical execution, scalability, and long-term relevance across all initiatives.
              </p>
            </div>
          </div>
          {/* Santhosh: Text Left, Image Right */}
          <div className="card team ssamr" style={{ display: "flex", alignItems: "center", gap: 32, flexDirection: "row-reverse", flexWrap: "nowrap", minHeight: 180, background: '#fafbfc', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32, border: '1px solid #eee', width: '100%' }}>
            <img src={santhosh} alt="Boppudi Santhosh" style={{ width: 200, height: 200, borderRadius: 12, flexShrink: 0, objectFit: "cover", background: '#fff', border: '2px solid #eaeaea', marginLeft: 24 }} draggable="false" onContextMenu={e => e.preventDefault()} />
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ marginBottom: 8 }}>Boppudi Santhosh</h3>
              <div className="role" style={{ fontWeight: 700, marginBottom: 12 }}>Co-Founder</div>
              <p style={{ marginBottom: 0 }}>
                Santhosh forms the technical backbone of WWI, architecting scalable systems, backend infrastructure, APIs, and production-ready platforms with reliability and performance at the core.
              </p>
            </div>
          </div>
          {/* Govind: Image Left, Text Right */}
          <div className="card team ssamr" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "nowrap", flexDirection: "row", minHeight: 180, background: '#fafbfc', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32, border: '1px solid #eee', width: '100%' }}>
            <img src={govind} alt="Thamisetty Govinda Sai Ram" style={{ width: 200, height: 200, borderRadius: 12, objectFit: 'cover', flexShrink: 0, background: '#fff', border: '2px solid #eaeaea', marginRight: 24 }} draggable="false" onContextMenu={e => e.preventDefault()} />
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 8 }}>Thamisetty Govinda Sai Ram</h3>
              <div className="role" style={{ fontWeight: 700, marginBottom: 12 }}>Chief Operating Officer (COO)</div>
              <p style={{ marginBottom: 0 }}>
                As COO, Govind oversees day-to-day operations, internal coordination, and execution workflows. He ensures that strategic plans are translated into efficient processes, maintaining delivery consistency and operational discipline across teams.
              </p>
            </div>
          </div>
          {/* Charan: Text Left, Image Right */}
          <div className="card team ssamr" style={{ display: "flex", alignItems: "center", gap: 32, flexDirection: "row-reverse", flexWrap: "nowrap", minHeight: 180, background: '#fafbfc', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32, border: '1px solid #eee', width: '100%' }}>
            <img src={charan} alt="Rajanala Charan Teja" style={{ width: 200, height: 200, borderRadius: 12, objectFit: 'cover', flexShrink: 0, background: '#fff', border: '2px solid #eaeaea', marginLeft: 24 }} draggable="false" onContextMenu={e => e.preventDefault()} />
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 8 }}>Rajanala Charan Teja</h3>
              <div className="role" style={{ fontWeight: 700, marginBottom: 12 }}>Managing Director</div>
              <p style={{ marginBottom: 0 }}>
                Charan Teja focuses on organizational alignment, leadership coordination, and execution oversight—bridging strategic intent with on-ground execution to ensure project efficiency and governance.
              </p>
            </div>
          </div>
          {/* Prudhvi: Image Left, Text Right */}
          <div className="card team ssamr" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "nowrap", flexDirection: "row", minHeight: 180, background: '#fafbfc', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 32, border: '1px solid #eee', width: '100%' }}>
            <img src={prudhvi} alt="Prudhvi Raj" style={{ width: 200, height: 200, borderRadius: 12, objectFit: 'cover', flexShrink: 0, background: '#fff', border: '2px solid #eaeaea', marginRight: 24 }} draggable="false" onContextMenu={e => e.preventDefault()} />
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 8 }}>Prudhvi Raj</h3>
              <div className="role" style={{ fontWeight: 700, marginBottom: 12 }}>Director, Frontend Engineering</div>
              <p style={{ marginBottom: 0 }}>
                Prudhvi leads the frontend engineering efforts at WWI, ensuring seamless user experiences, modern UI/UX, and robust client-side architecture for all digital products and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section>
        <h2>Our Products</h2>
        <div className="grid two products">
          <div className="card">
            <img src={viadocsLogo} alt="ViaDocs Logo" draggable="false" onContextMenu={e => e.preventDefault()} />
            <span className="badge">Live Product</span>
            <h3>ViaDocs</h3>
            <p>
              An all-in-one PDF tools platform simplifying document workflows
              for students, professionals, and institutions.
            </p>
            <a href="https://viadocs.in" target="_blank">Visit Website →</a>
          </div>
          <div className="card">
            <img src={knowraLogo} alt="KNORA Logo" draggable="false" onContextMenu={e => e.preventDefault()} />
            <span className="badge">Coming Soon</span>
            <h3>KNORA</h3>
            <p>
              A student-centric digital platform unifying academic resources,
              smart assistance, and productivity tools.
            </p>
            <a href="https://knowra.netlify.app" target="_blank">Preview →</a>
          </div>
        </div>
      </section>

      {/* MEDIA & CREDIBILITY */}
      <section>
        <h2>News, Media & Online Presence</h2>
        <p>
          WWI maintains verifiable public references through recognized press platforms
          and official business listings to strengthen transparency and credibility.
        </p>
        <div className="grid two">
          <div className="card">
            <h3>Press & Media Coverage (PRLog)</h3>
            <p>
              <a href="https://www.prlog.org/13118615-work-wizards-innovations-introduces-student-led-technology-initiative-focused-on-education.html" target="_blank">
                Company Introduction – Student-led Technology Initiative
              </a>
            </p>
            <br />
            <p>
              <a href="https://www.prlog.org/13118705-nalla-venkat-leads-work-wizards-innovations-as-founder-and-chief-executive-officer.html" target="_blank">
                Leadership Announcement – Founder & CEO
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Google Business Profile</h3>
            <p>
              <a href="https://share.google/T76mz0D5W3uCZ93wc" target="_blank">
                View Official Google Business Listing →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutPage;
