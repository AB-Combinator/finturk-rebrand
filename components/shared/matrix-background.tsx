"use client";

import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン$¥£€∑∏∫∂√∞≈≠±÷×";
const FONT_SIZE = 14;
const FADE_ALPHA = 0.06;
const PRIMARY_R = 59;
const PRIMARY_G = 130;
const PRIMARY_B = 246;

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number;
    let drops: number[];
    let speeds: number[];
    let brightness: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / FONT_SIZE);
      drops = Array.from({ length: columns }, () =>
        Math.random() * -100
      );
      speeds = Array.from({ length: columns }, () =>
        0.3 + Math.random() * 0.7
      );
      brightness = Array.from({ length: columns }, () =>
        0.15 + Math.random() * 0.35
      );
    }

    resize();
    window.addEventListener("resize", resize);

    // Tron grid state
    let gridOffset = 0;

    function draw() {
      // Fade the canvas
      ctx!.fillStyle = `rgba(10, 15, 26, ${FADE_ALPHA})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      // --- Tron perspective grid (bottom third) ---
      const gridStartY = canvas!.height * 0.65;
      const horizonY = canvas!.height * 0.5;
      const gridLines = 20;
      const verticalLines = 30;

      // Horizontal lines (with perspective)
      for (let i = 0; i < gridLines; i++) {
        const t = i / gridLines;
        const y = horizonY + (canvas!.height - horizonY) * (t * t); // quadratic for perspective
        const alpha = 0.02 + t * 0.06;
        ctx!.strokeStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${alpha})`;
        ctx!.lineWidth = 0.5;
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(canvas!.width, y);
        ctx!.stroke();
      }

      // Vertical lines (converge to center horizon)
      const centerX = canvas!.width / 2;
      for (let i = 0; i < verticalLines; i++) {
        const t = (i / (verticalLines - 1)) * 2 - 1; // -1 to 1
        const bottomX = centerX + t * canvas!.width * 0.7;
        const topX = centerX + t * canvas!.width * 0.05;
        const alpha = 0.015 + (1 - Math.abs(t)) * 0.04;
        ctx!.strokeStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${alpha})`;
        ctx!.lineWidth = 0.5;
        ctx!.beginPath();
        ctx!.moveTo(topX, horizonY);
        ctx!.lineTo(bottomX, canvas!.height);
        ctx!.stroke();
      }

      // Traveling grid pulse (horizontal scan line)
      gridOffset = (gridOffset + 0.3) % (canvas!.height - horizonY);
      const scanY = horizonY + gridOffset;
      const scanAlpha = 0.12 * (1 - gridOffset / (canvas!.height - horizonY));
      ctx!.strokeStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${scanAlpha})`;
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(0, scanY);
      ctx!.lineTo(canvas!.width, scanY);
      ctx!.stroke();

      // --- Matrix rain ---
      ctx!.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Head character — brighter
        const headAlpha = Math.min(brightness[i] + 0.3, 0.7);
        ctx!.fillStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${headAlpha})`;
        ctx!.fillText(char, x, y);

        // Occasional bright white flash on the head
        if (Math.random() < 0.02) {
          ctx!.fillStyle = `rgba(200, 220, 255, 0.6)`;
          ctx!.fillText(char, x, y);
        }

        drops[i] += speeds[i];

        // Reset when off screen, with random restart
        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
          speeds[i] = 0.3 + Math.random() * 0.7;
          brightness[i] = 0.15 + Math.random() * 0.35;
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
