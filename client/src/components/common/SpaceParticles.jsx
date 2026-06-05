import React, { useEffect, useRef } from 'react';

export default function SpaceParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    const count = 220;

    // Mouse coordinates
    const mouse = { x: null, y: null, radius: 150 };

    // Dynamic drifting nebulas config
    const nebulas = [
      { x: 0.2, y: 0.3, rx: 0.15, ry: 0.25, radius: 350, color: 'rgba(188, 59, 240, 0.04)', speedX: 0.0001, speedY: 0.00008 }, // Purple
      { x: 0.7, y: 0.4, rx: 0.6, ry: 0.5, radius: 450, color: 'rgba(0, 240, 255, 0.03)', speedX: -0.00008, speedY: 0.00005 }, // Cyan
      { x: 0.4, y: 0.7, rx: 0.35, ry: 0.8, radius: 320, color: 'rgba(34, 197, 94, 0.025)', speedX: 0.00005, speedY: -0.00006 }, // Green
      { x: 0.8, y: 0.2, rx: 0.85, ry: 0.15, radius: 280, color: 'rgba(255, 180, 80, 0.02)', speedX: -0.00004, speedY: -0.00004 }  // Orange/Yellow
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.3;
        this.baseOpacity = Math.random() * 0.7 + 0.3;
        this.opacity = this.baseOpacity;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;

        // Match colorful deep-space background distribution (Cyan, Purple, Orange/Yellow, Green, Red, White)
        const rand = Math.random();
        if (rand < 0.25) {
          this.color = 'rgba(0, 240, 255, '; // Cyan
        } else if (rand < 0.45) {
          this.color = 'rgba(188, 59, 240, '; // Purple
        } else if (rand < 0.60) {
          this.color = 'rgba(255, 220, 110, '; // Orange/Yellow
        } else if (rand < 0.72) {
          this.color = 'rgba(34, 197, 94, '; // Cosmic Green
        } else if (rand < 0.80) {
          this.color = 'rgba(239, 68, 68, '; // Soft Red
        } else {
          this.color = 'rgba(255, 255, 255, '; // Pure White
        }

        // Twinkle factor
        this.twinkleSpeed = Math.random() * 0.015 + 0.003;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Twinkle effect (fade in and out)
        this.opacity += this.twinkleSpeed * this.twinkleDir;
        if (this.opacity > 1 || this.opacity < this.baseOpacity * 0.2) {
          this.twinkleDir *= -1;
        }

        // Mouse hover interaction: pull stars slightly towards cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.4;
            this.y += (dy / dist) * force * 0.4;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';

        // Add subtle glow to larger stars
        if (this.size > 1.6) {
          ctx.shadowBlur = 8;
          if (this.color.includes('188')) ctx.shadowColor = '#bc3bf0';
          else if (this.color.includes('240')) ctx.shadowColor = '#00f0ff';
          else if (this.color.includes('220')) ctx.shadowColor = '#ffdc6e';
          else if (this.color.includes('34')) ctx.shadowColor = '#22c55e';
          else ctx.shadowColor = '#ffffff';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }
    }

    const initStars = () => {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    };

    const drawNebulas = () => {
      ctx.globalCompositeOperation = 'screen';
      nebulas.forEach(n => {
        // Move coordinates
        n.rx += n.speedX;
        n.ry += n.speedY;

        // Bounce percentages
        if (n.rx < 0.05 || n.rx > 0.95) n.speedX *= -1;
        if (n.ry < 0.05 || n.ry > 0.95) n.speedY *= -1;

        const xPos = n.rx * canvas.width;
        const yPos = n.ry * canvas.height;

        // Draw gaseous radial gradient
        const grad = ctx.createRadialGradient(xPos, yPos, 0, xPos, yPos, n.radius);
        grad.addColorStop(0, n.color);
        grad.addColorStop(0.3, n.color.replace('0.', '0.05')); // Fade mid
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade completely

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(xPos, yPos, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
    };

    const animate = () => {
      // Clear canvas every frame to keep it fully transparent so background video shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render drifting space dust nebulas
      drawNebulas();

      // Render starfield
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Draw subtle orbital light at cursor
      if (mouse.x !== null && mouse.y !== null) {
        ctx.shadowBlur = 40;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="space-video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="space-video-bg"
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ display: 'block' }}
      />
    </div>
  );
}
