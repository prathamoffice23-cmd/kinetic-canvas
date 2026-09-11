import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export function MagneticLink({ href, children, tone = "solid" }: { href: string; children: ReactNode; tone?: "solid" | "outline" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  return (
    <a ref={ref} href={href} onMouseMove={move} onMouseLeave={reset} data-cursor="link" className={`magnetic-link magnetic-link--${tone}`}>
      <span>{children}</span><ArrowDownRight size={18} aria-hidden="true" />
    </a>
  );
}

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    let x = 0, y = 0, rx = 0, ry = 0;
    const tick = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      frame = requestAnimationFrame(tick);
    };
    const move = (event: globalThis.MouseEvent) => { x = event.clientX; y = event.clientY; };
    const over = (event: globalThis.MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor === "project" ? "VIEW" : target ? "↗" : "");
    };
    window.addEventListener("mousemove", move); window.addEventListener("mouseover", over); frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); cancelAnimationFrame(frame); };
  }, []);
  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className={`cursor-ring ${label ? "is-active" : ""}`}><span>{label}</span></div></>;
}

export function ScrollProgress() {
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (line.current) line.current.style.transform = `scaleY(${max > 0 ? scrollY / max : 0})`;
    };
    update(); addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  return <div className="scroll-track" aria-hidden="true"><div ref={line} className="scroll-progress" /></div>;
}

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const id = window.setTimeout(() => setVisible(false), 1050); return () => clearTimeout(id); }, []);
  if (!visible) return null;
  return <div className="loader" aria-label="Loading portfolio"><div className="loader-mark">PH<span>®</span></div><div className="loader-line"><i /></div></div>;
}
