import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Header changes style after scrolling (works even with reduced motion)
const header = document.getElementById("site-header");
const onScroll = () => header?.toggleAttribute("data-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn?.addEventListener("click", () => {
  const open = menu?.classList.toggle("hidden") === false;
  btn.setAttribute("aria-expanded", String(open));
});

if (!reduce) {
  // Smooth scrolling
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // <div data-reveal data-delay="0.2"> fades/slides up when scrolled into view
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 1, ease: "power3.out",
      delay: Number(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });

  // <img data-clip> reveals with a cinematic mask wipe
  gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
    gsap.fromTo(el, { clipPath: "inset(100% 0 0 0)", scale: 1.15 },
      { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.6, ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  });

  // <span data-count="250" data-suffix="+"> counts up from 0
  gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count), suffix = el.dataset.suffix || "", dec = Number(el.dataset.decimals || 0);
    const fmt = (v: number) => v.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    const o = { v: 0 };
    el.textContent = fmt(0);
    gsap.to(o, { v: target, duration: 2.2, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => (el.textContent = fmt(o.v)) });
  });

  // <img data-parallax="12"> moves slowly against scroll (needs overflow-hidden parent)
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax || 12), ease: "none",
      scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}
