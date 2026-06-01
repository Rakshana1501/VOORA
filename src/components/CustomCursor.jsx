// src/components/CustomCursor.jsx
import { useEffect } from "react";

/**
 * Premium Custom Cursor
 *
 * Features:
 * • Replaces the native pointer with fav.png (desktop only)
 * • Smooth lerp‑eased movement (≈60 fps)
 * • Hover: 1.3× scale + subtle purple glow
 * • Click: brief 0.9× shrink → bounce back
 * • Auto‑disable on touch devices
 */
export default function CustomCursor() {
  useEffect(() => {
    // -----------------------------------------------------------------
    // 1️⃣ Create the floating cursor element
    // -----------------------------------------------------------------
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    // -----------------------------------------------------------------
    // 2️⃣ Detect if we are on a touch device – if so, hide everything
    // -----------------------------------------------------------------
    const isTouch = ("ontouchstart" in window) || navigator.maxTouchPoints > 0;
    if (isTouch) {
      cursor.style.display = "none";
      document.body.style.cursor = "auto";
      return; // early exit – no listeners needed on touch devices
    }

    // -----------------------------------------------------------------
    // 3️⃣ Mouse tracking state
    // -----------------------------------------------------------------
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    const ease = 0.12; // tweak for snappier / smoother feel

    // -----------------------------------------------------------------
    // 4️⃣ Event listeners
    // -----------------------------------------------------------------
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onMouseEnterHover = () => cursor.classList.add("hovered");
    const onMouseLeaveHover = () => cursor.classList.remove("hovered");
    const onMouseDown = () => cursor.classList.add("clicked");
    const onMouseUp = () => cursor.classList.remove("clicked");

    window.addEventListener("mousemove", onMouseMove);
    // Hover targets – add/remove .hovered class
    const hoverSelector = "a, button, .card, img, [data-cursor-hover]";
    document.querySelectorAll(hoverSelector).forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterHover);
      el.addEventListener("mouseleave", onMouseLeaveHover);
    });
    // Click feedback
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // -----------------------------------------------------------------
    // 5️⃣ Animation loop (requestAnimationFrame)
    // -----------------------------------------------------------------
    const animate = () => {
      posX += (mouseX - posX) * ease;
      posY += (mouseY - posY) * ease;
      cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();

    // -----------------------------------------------------------------
    // 6️⃣ Cleanup on component unmount
    // -----------------------------------------------------------------
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.querySelectorAll(hoverSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterHover);
        el.removeEventListener("mouseleave", onMouseLeaveHover);
      });
      cursor.remove();
    };
  }, []);

  // This component renders nothing – it only injects the cursor div.
  return null;
}
