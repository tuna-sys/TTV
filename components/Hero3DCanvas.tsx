'use client';

import React, { useEffect, useRef } from 'react';

type NetworkPoint = {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
};

type ProjectedPoint = NetworkPoint & {
  scale: number;
};

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | undefined;
    let width = 400;
    let height = 340;
    let isInViewport = true;
    let isDocumentVisible = !document.hidden;
    let isAnimating = false;
    let lastDrawTime = 0;
    let pointerFrameId: number | undefined;
    let pendingPointer: { clientX: number; clientY: number } | undefined;
    const container = containerRef.current;
    const isSmallViewport = window.matchMedia('(max-width: 767px)').matches;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const frameInterval = 1000 / (isSmallViewport ? 24 : 30);

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 3D Nodes generation
    const numPoints = isSmallViewport ? 18 : 24;
    const points: NetworkPoint[] = [];

    const colors = ['#1d4ed8', '#10b981', '#f97316', '#3b82f6', '#059669'];

    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 110 + Math.random() * 15;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        radius: 3.5 + Math.random() * 2.5,
        color: colors[i % colors.length],
      });
    }

    // Mouse tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      pendingPointer = { clientX: e.clientX, clientY: e.clientY };
      if (pointerFrameId !== undefined) return;
      pointerFrameId = requestAnimationFrame(() => {
        if (!pendingPointer) return;
        const rect = canvas.getBoundingClientRect();
        const x = pendingPointer.clientX - rect.left - width / 2;
        const y = pendingPointer.clientY - rect.top - height / 2;
        targetRotY = (x / (width / 2)) * 0.4;
        targetRotX = -(y / (height / 2)) * 0.4;
        pendingPointer = undefined;
        pointerFrameId = undefined;
      });
    };

    container?.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    // Render loop
    const render = (timestamp: number, force = false) => {
      const elapsed = lastDrawTime ? timestamp - lastDrawTime : frameInterval;
      if (!force && elapsed < frameInterval) {
        if (!reduceMotionQuery.matches && isInViewport && isDocumentVisible) {
          animationFrameId = requestAnimationFrame(render);
        }
        return;
      }
      lastDrawTime = timestamp;
      angle += 0.008 * Math.min(2, elapsed / (1000 / 60));
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D to 2D
      const projected: ProjectedPoint[] = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * Math.cos(angle + rotY) - p.z * Math.sin(angle + rotY);
        const z1 = p.z * Math.cos(angle + rotY) + p.x * Math.sin(angle + rotY);

        // Rotate around X
        const y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = z1 * Math.cos(rotX) + p.y * Math.sin(rotX);

        const fov = 350;
        const scale = fov / (fov + z2);
        const x2D = centerX + x1 * scale;
        const y2D = centerY + y1 * scale;

        return { x: x2D, y: y2D, z: z2, scale, color: p.color, radius: p.radius };
      });

      // Sort by Z for proper depth
      projected.sort((a, b) => a.z - b.z);

      // Draw connecting 3D arcs / lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const alpha = (1 - dist / 65) * 0.35 * Math.max(0.1, projected[i].scale);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Orbit Rings in 3D
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 130 * Math.cos(rotX), 50 * Math.sin(rotY + 1), angle, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(249, 115, 22, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 140 * Math.cos(rotY), 60 * Math.sin(rotX + 1), -angle * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      // Draw 3D Spheres / Nodes
      projected.forEach((p) => {
        if (p.scale <= 0) return;
        const alpha = Math.min(1, Math.max(0.2, (p.z + 130) / 260));

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * p.scale * 2.5);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.scale * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Core Node
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Core Glowing Hologram Center
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      coreGrad.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
      coreGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.1)');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      if (!reduceMotionQuery.matches && isInViewport && isDocumentVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = undefined;
        isAnimating = false;
      }
    };

    const stopAnimation = () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = undefined;
      isAnimating = false;
    };

    const startAnimation = () => {
      if (reduceMotionQuery.matches || !isInViewport || !isDocumentVisible || isAnimating) return;
      isAnimating = true;
      lastDrawTime = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting;
        if (isInViewport) startAnimation();
        else stopAnimation();
      },
      { threshold: 0.05 },
    );
    if (container) intersectionObserver.observe(container);

    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible) startAnimation();
      else stopAnimation();
    };
    const handleMotionPreferenceChange = () => {
      if (reduceMotionQuery.matches) {
        stopAnimation();
        render(performance.now(), true);
      } else {
        startAnimation();
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reduceMotionQuery.addEventListener('change', handleMotionPreferenceChange);
    resizeCanvas();
    if (reduceMotionQuery.matches) render(performance.now(), true);
    else startAnimation();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reduceMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
      container?.removeEventListener('mousemove', handleMouseMove);
      if (pointerFrameId !== undefined) cancelAnimationFrame(pointerFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Mô hình 3D tương tác minh họa mạng lưới kết nối doanh nghiệp và người lao động"
      className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl group"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Depth Badges */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="px-3 py-1.5 rounded-xl bg-slate-800/90 backdrop-blur-md border border-blue-500/40 text-blue-300 text-[11px] font-bold shadow-lg flex items-center gap-1.5 animate-float">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>Mô Hình 3D Mạng Lưới Sourcing</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <div className="px-3 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
          Kết nối Doanh Nghiệp FDI
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <div className="px-3 py-1 rounded-lg bg-orange-950/80 backdrop-blur-md border border-orange-500/30 text-orange-300 text-[10px] font-semibold">
          Đồng hành Người Lao Động
        </div>
      </div>
    </div>
  );
};
