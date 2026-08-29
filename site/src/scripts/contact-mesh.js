// Maillage cyan interactif de la section "Nous contacter" (pack
// "BOPA-Nous-Contacter-Exact-V1", 2026-08-29). Canvas 2D pur, aucune
// librairie externe. Lit --bopa-cyan sur l'élément racine pour rester
// sur le vrai token du site plutôt qu'une couleur codée en dur.
export function initBopaContactMesh(root) {
  if (!root || root.dataset.meshInit) return;
  root.dataset.meshInit = '1';
  const canvas = root.querySelector('[data-bopa-contact-mesh]');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  let w = 0, h = 0, dpr = 1, pts = [], raf = 0, visible = true;
  const pointer = { x: -9999, y: -9999, active: false };

  const cyan = () => getComputedStyle(root).getPropertyValue('--bopa-cyan').trim() || '#168cff';
  const rgba = (hex, a) => {
    if (!hex.startsWith('#')) return `color-mix(in srgb, ${hex} ${Math.round(a * 100)}%, transparent)`;
    let s = hex.slice(1); if (s.length === 3) s = s.split('').map((c) => c + c).join('');
    const n = parseInt(s, 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  };

  function build() {
    const count = Math.max(14, Math.min(coarse ? 26 : 40, Math.round((w * h) / 17000)));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: h * (0.25 + Math.pow(Math.random(), 0.72) * 0.75),
      bx: Math.random() * w, by: h * (0.25 + Math.pow(Math.random(), 0.72) * 0.75),
      vx: (Math.random() - 0.5) * 0.08, vy: (Math.random() - 0.5) * 0.06,
      r: 1 + Math.random() * 1.2, p: Math.random() * Math.PI * 2,
    }));
    pts.forEach((p) => { p.x = p.bx; p.y = p.by; });
  }

  function resize() {
    const r = canvas.getBoundingClientRect(); w = Math.max(1, r.width); h = Math.max(1, r.height);
    dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); build(); draw();
  }

  function update(t) {
    if (reduced) return;
    for (const p of pts) {
      p.p += 0.0025; p.bx += p.vx; p.by += p.vy;
      if (p.bx < 0 || p.bx > w) p.vx *= -1;
      if (p.by < h * 0.18 || p.by > h) p.vy *= -1;
      let tx = p.bx + Math.cos(p.p + t * 0.00018) * 2.2;
      let ty = p.by + Math.sin(p.p + t * 0.00015) * 1.8;
      if (pointer.active) {
        const dx = tx - pointer.x, dy = ty - pointer.y, d = Math.hypot(dx, dy), rad = Math.min(150, w * 0.22);
        if (d > 0 && d < rad) { const f = (1 - d / rad) * 7; tx += (dx / d) * f; ty += (dy / d) * f; }
      }
      p.x += (tx - p.x) * 0.06; p.y += (ty - p.y) * 0.06;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h); const c = cyan(), max = Math.min(120, w * 0.17);
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < max) {
        let alpha = (1 - d / max) * 0.12;
        if (pointer.active) {
          const pd = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y);
          if (pd < 120) alpha += (1 - pd / 120) * 0.09;
        }
        ctx.strokeStyle = rgba(c, alpha); ctx.lineWidth = 0.7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    for (const p of pts) {
      let a = 0.28;
      if (pointer.active) { const d = Math.hypot(p.x - pointer.x, p.y - pointer.y); if (d < 120) a += (1 - d / 120) * 0.3; }
      ctx.fillStyle = rgba(c, Math.min(a, 0.58)); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function tick(t = 0) { if (!visible) return; update(t); draw(); raf = requestAnimationFrame(tick); }

  if (!coarse && !reduced) {
    root.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
      pointer.active = pointer.x >= 0 && pointer.x <= r.width && pointer.y >= 0 && pointer.y <= r.height;
    }, { passive: true });
    root.addEventListener('pointerleave', () => (pointer.active = false), { passive: true });
  }

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver((es) => {
    visible = es.some((e) => e.isIntersecting); cancelAnimationFrame(raf);
    if (visible && !reduced) raf = requestAnimationFrame(tick); else if (visible) draw();
  }, { threshold: 0.01 }).observe(root);

  resize(); if (!reduced) raf = requestAnimationFrame(tick);
}
