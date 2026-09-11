import { ArrowDown, Asterisk, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { AmbientScene } from "./AmbientScene";
import { CustomCursor, Loader, MagneticLink, ScrollProgress } from "./Interactions";
import { ProjectCard } from "./ProjectCard";

const projects = [
  { index: "01", title: "Nexus Intelligence", category: "AI PRODUCT · 2026", description: "A decision workspace that turns scattered operational data into clear, explainable actions.", tags: ["React", "AI", "Systems"], visual: "signal" as const },
  { index: "02", title: "Orbit Finance", category: "FINTECH · 2025", description: "A high-trust wealth dashboard built around speed, clarity, and calm financial decisions.", tags: ["TypeScript", "Motion", "API"], visual: "orbital" as const },
  { index: "03", title: "Archive Zero", category: "CREATIVE DEV · 2025", description: "An immersive digital archive where stories, artifacts, and sound unfold spatially.", tags: ["WebGL", "Three.js", "UX"], visual: "archive" as const },
];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
  const [pulse, setPulse] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "p" && !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)) {
        setPulse(true); window.setTimeout(() => setPulse(false), 900);
      }
    };
    addEventListener("keydown", shortcut); return () => removeEventListener("keydown", shortcut);
  }, []);

  return (
    <main className={pulse ? "portfolio is-pulsing" : "portfolio"}>
      <Loader /><CustomCursor /><ScrollProgress /><AmbientScene />
      <div className="atmosphere" aria-hidden="true"><div className="noise" /><div className="cursor-light" /></div>
      <header className="site-header">
        <a href="#top" className="monogram" data-cursor="link" onClick={() => { setPulse(true); window.setTimeout(() => setPulse(false), 900); }} aria-label="Back to top">PH<span>®</span></a>
        <nav aria-label="Primary navigation"><a href="#about">ABOUT</a><a href="#projects">WORK</a><a href="#contact">CONTACT</a></nav>
        <span className="availability"><i /> AVAILABLE FOR OPPORTUNITIES</span>
      </header>

      <section className="hero" id="top">
        <motion.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="hero-meta"><span>CREATIVE DEVELOPER</span><span>BASED IN INDIA · 2026</span></div>
          <h1 aria-label="Pratham Hapani"><span>PRATHAM</span><span className="hero-outline">HAPANI</span></h1>
          <div className="hero-bottom"><p>I engineer memorable digital products where <strong>design precision</strong> meets <strong>technical depth.</strong></p><div className="hero-actions"><MagneticLink href="#contact">LET’S CONNECT</MagneticLink><MagneticLink href="#projects" tone="outline">VIEW MY WORK</MagneticLink></div></div>
        </motion.div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></a>
      </section>

      <section className="statement" id="about">
        <div className="section-index"><span>01</span><span>ABOUT</span></div>
        <motion.p initial={{ opacity: 0.15 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.6 }} transition={{ duration: 0.9 }}>I turn complex ideas into <em>sharp, human experiences</em> — obsessing over the invisible details that make software feel inevitable.</motion.p>
        <div className="capability-row"><span>PRODUCT THINKING</span><Asterisk /><span>FRONTEND ENGINEERING</span><Asterisk /><span>INTERACTION DESIGN</span></div>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading"><div className="section-index"><span>02</span><span>SELECTED WORK</span></div><h2>Built to be<br /><span>remembered.</span></h2><p>Selected explorations in intelligent products, digital systems, and expressive interfaces.</p></div>
        <div className="project-list">{projects.map((project) => <ProjectCard key={project.index} {...project} />)}</div>
      </section>

      <section className="journey" id="journey">
        <div className="section-index"><span>03</span><span>TRAJECTORY</span></div>
        <div className="journey-grid"><h2>Always in<br />motion.</h2><div className="timeline">
          <div className="timeline-item"><span>2026</span><div><h3>Building at the edge</h3><p>Exploring spatial interfaces, intelligent tools, and high-performance web experiences.</p></div></div>
          <div className="timeline-item"><span>2025</span><div><h3>Full-stack systems</h3><p>Shipped end-to-end products while developing a rigorous eye for interaction and craft.</p></div></div>
          <div className="timeline-item"><span>2024</span><div><h3>The first commit</h3><p>Turned curiosity into a practice: learning by building, breaking, and rebuilding.</p></div></div>
        </div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="section-index"><span>04</span><span>CONTACT</span></div>
        <div className="contact-intro"><span>HAVE AN IDEA?</span><h2>LET’S MAKE<br /><em>IT REAL.</em></h2><p>Open to internships, ambitious collaborations, and conversations with people building what’s next.</p></div>
        <div className="contact-layout">
          <div className="contact-links"><a href="https://www.linkedin.com/in/pratham-hapani" target="_blank" rel="noreferrer" data-cursor="link"><Linkedin />LinkedIn<span>↗</span></a><a href="mailto:hello@prathamhapani.dev" data-cursor="link"><Mail />Email<span>↗</span></a><a href="https://github.com/prathamhapani" target="_blank" rel="noreferrer" data-cursor="link"><Github />GitHub<span>↗</span></a></div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>YOUR NAME<input required name="name" placeholder="Jane Smith" /></label><label>YOUR EMAIL<input required type="email" name="email" placeholder="jane@company.com" /></label><label>TELL ME ABOUT IT<textarea required name="message" rows={3} placeholder="A product, an idea, a challenge…" /></label><button type="submit" data-cursor="link"><span>{sent ? "MESSAGE READY" : "SEND MESSAGE"}</span><Send size={17} /></button>{sent && <p className="form-note" role="status">Thanks — connect this form to your preferred inbox before publishing.</p>}</form>
        </div>
      </section>

      <footer><a href="#top" className="monogram" data-cursor="link">PH<span>®</span></a><p>DESIGNED & ENGINEERED WITH INTENTION.</p><p>© 2026 PRATHAM HAPANI</p></footer>
    </main>
  );
}
