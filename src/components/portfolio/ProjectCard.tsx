import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";

interface ProjectCardProps {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual: "signal" | "orbital" | "archive";
}

export function ProjectCard({ index, title, category, description, tags, visual }: ProjectCardProps) {
  const card = useRef<HTMLElement>(null);
  const move = (event: MouseEvent<HTMLElement>) => {
    if (!card.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    card.current.style.setProperty("--mx", `${px * 100}%`);
    card.current.style.setProperty("--my", `${py * 100}%`);
    card.current.style.transform = `perspective(1100px) rotateX(${(0.5 - py) * 4}deg) rotateY(${(px - 0.5) * 5}deg) translateY(-6px)`;
  };
  const leave = () => { if (card.current) card.current.style.transform = ""; };
  return (
    <article ref={card} onMouseMove={move} onMouseLeave={leave} className="project-card" data-cursor="project">
      <div className={`project-visual project-visual--${visual}`} aria-hidden="true">
        <div className="visual-grid" />
        <div className="visual-core"><span /></div>
        <span className="visual-code">{index}</span>
      </div>
      <div className="project-copy">
        <div className="project-kicker"><span>{category}</span><span>{index}</span></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-footer"><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight aria-hidden="true" /></div>
      </div>
    </article>
  );
}
