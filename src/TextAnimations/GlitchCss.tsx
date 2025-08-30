'use client';

export default function GlitchText({ children, className }: { children: string, className?: string }) {
    return (
      <span className={`glitch ${className}`} aria-label={children} data-text={children}>
        {children}
        <style jsx>{`
          .glitch {
            position: relative;
            display: inline-block;
            font-weight: 800;
            letter-spacing: 0.5px;
          }
  
          /* duplicate layers with color offsets */
          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            clip-path: inset(0 0 0 0);
            pointer-events: none;
          }
  
          /* magenta layer */
          .glitch::before {
            transform: translate(2px, 0);
            text-shadow: -2px 0 #ff00ea;
            animation: glitch-slice 1.8s infinite steps(24),
              glitch-shift 0.9s infinite;
            mix-blend-mode: screen;
          }
  
          /* cyan layer */
          .glitch::after {
            transform: translate(-2px, 0);
            text-shadow: 2px 0 #00fff9;
            animation: glitch-slice 2.2s infinite steps(24) reverse,
              glitch-shift 1.1s infinite reverse;
            mix-blend-mode: screen;
          }
  
          /* subtle “scanline” slice changes */
          @keyframes glitch-slice {
            0% { clip-path: inset(80% 0 0 0); }
            5% { clip-path: inset(10% 0 60% 0); }
            10% { clip-path: inset(40% 0 20% 0); }
            15% { clip-path: inset(20% 0 55% 0); }
            20% { clip-path: inset(70% 0 5% 0); }
            25% { clip-path: inset(0 0 85% 0); }
            30% { clip-path: inset(60% 0 10% 0); }
            35% { clip-path: inset(30% 0 35% 0); }
            40% { clip-path: inset(65% 0 6% 0); }
            45% { clip-path: inset(15% 0 50% 0); }
            50% { clip-path: inset(45% 0 25% 0); }
            55% { clip-path: inset(5% 0 75% 0); }
            60% { clip-path: inset(25% 0 40% 0); }
            65% { clip-path: inset(75% 0 0 0); }
            70% { clip-path: inset(35% 0 30% 0); }
            75% { clip-path: inset(55% 0 12% 0); }
            80% { clip-path: inset(12% 0 58% 0); }
            85% { clip-path: inset(38% 0 28% 0); }
            90% { clip-path: inset(8% 0 70% 0); }
            95% { clip-path: inset(50% 0 18% 0); }
            100% { clip-path: inset(0 0 82% 0); }
          }
  
          /* tiny jitter */
          @keyframes glitch-shift {
            0%, 100% { transform: translate(0, 0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(1px, 0); }
            80% { transform: translate(-1px, 0); }
          }
  
          /* boost the effect on hover/focus */
          .glitch:hover::before,
          .glitch:focus::before {
            transform: translate(3px, 0);
          }
          .glitch:hover::after,
          .glitch:focus::after {
            transform: translate(-3px, 0);
          }
  
          /* accessibility */
          @media (prefers-reduced-motion: reduce) {
            .glitch::before,
            .glitch::after {
              animation: none;
              text-shadow: none;
              transform: none;
            }
          }
        `}</style>
      </span>
    );
  }
  