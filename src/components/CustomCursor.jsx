import { useEffect } from "react";
import "./CustomCursor.css";

/**
 * Premium dual-element cursor
 *   • A small filled dot that snaps to the mouse
 *   • A larger ring that trails with smooth easing
 *   • Contextual states: hover / view / play / click
 *   • Auto-disables on touch devices
 */
export default function CustomCursor() {
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const dot = document.createElement("div");
    dot.className = "cc-dot";
    const ring = document.createElement("div");
    ring.className = "cc-ring";
    ring.innerHTML = `
      <span class="cc-ring__label cc-ring__label--view">VIEW</span>
      <span class="cc-ring__label cc-ring__label--play">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        PLAY
      </span>
      <span class="cc-ring__label cc-ring__label--open">OPEN</span>
    `;
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("cc-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    const ease = 0.18;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onDown = () => ring.classList.add("is-clicked");
    const onUp = () => ring.classList.remove("is-clicked");

    const setState = (name) => {
      ring.classList.remove("is-hover", "is-view", "is-play", "is-open");
      if (name) ring.classList.add(name);
    };

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;

      // News & Media section gets its own fav.png cursor
      if (t.closest(".vn-section")) {
        document.body.classList.add("cc-news");
      } else {
        document.body.classList.remove("cc-news");
      }

      if (t.closest("[data-cursor='play'], .cs-card--active, .cs-play, .video-card")) {
        setState("is-play");
      } else if (t.closest("[data-cursor='view'], img, .up-img, .cp-img, picture")) {
        setState("is-view");
      } else if (t.closest("[data-cursor='open'], .know-more-btn, .cp-view-btn, .download-btn")) {
        setState("is-open");
      } else if (t.closest("a, button, [data-cursor-hover], .card")) {
        setState("is-hover");
      } else {
        setState(null);
      }
    };

    const onLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnterWindow = () => {
      dot.style.opacity = "";
      ring.style.opacity = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      document.body.classList.remove("cc-active");
      document.body.classList.remove("cc-news");
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
