import type { SVGProps } from "react"

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number
  showText?: boolean
}

export function JesusDelgadoLogo({ size = 48, showText = false, ...props }: LogoProps) {
  return (
    <svg
      width={showText ? size * 4.5 : size}
      height={size}
      viewBox={showText ? "0 0 216 48" : "0 0 48 48"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jesus Delgado logo"
      {...props}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow" x="0" y="0" width="130%" height="130%">
          <feDropShadow dx="3" dy="3" stdDeviation="0" floodColor="#00ff41" floodOpacity="1" />
        </filter>
      </defs>

      {/* Outer border — pixel-style double frame */}
      <rect x="1" y="1" width="46" height="46" stroke="#00ff41" strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="3" y="3" width="42" height="42" stroke="#00ff41" strokeWidth="1.5" fill="#0d0d0d" />

      {/* Corner brackets */}
      <path d="M3 10 L3 3 L10 3" stroke="#00ff41" strokeWidth="2" fill="none" />
      <path d="M38 3 L45 3 L45 10" stroke="#00ff41" strokeWidth="2" fill="none" />
      <path d="M3 38 L3 45 L10 45" stroke="#00ff41" strokeWidth="2" fill="none" />
      <path d="M38 45 L45 45 L45 38" stroke="#00ff41" strokeWidth="2" fill="none" />

      {/* Python-inspired snake — two curves as subtle background element */}
      <path
        d="M12 20 Q18 14 24 20 Q30 26 36 20"
        stroke="#00ff41"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
        strokeDasharray="2 2"
      />
      <path
        d="M12 28 Q18 22 24 28 Q30 34 36 28"
        stroke="#00ff41"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
        strokeDasharray="2 2"
      />

      {/* Letter J */}
      <text
        x="9"
        y="34"
        fontFamily="'Space Mono', 'Courier New', monospace"
        fontSize="22"
        fontWeight="700"
        fill="#00ff41"
        filter="url(#glow)"
      >
        J
      </text>

      {/* Letter D */}
      <text
        x="26"
        y="34"
        fontFamily="'Space Mono', 'Courier New', monospace"
        fontSize="22"
        fontWeight="700"
        fill="#ffffff"
        filter="url(#glow)"
      >
        D
      </text>

      {/* Blinking cursor dot */}
      <rect x="40" y="37" width="3" height="3" fill="#00ff41" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Optional name text */}
      {showText && (
        <>
          <text
            x="58"
            y="20"
            fontFamily="'Space Mono', 'Courier New', monospace"
            fontSize="13"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="1"
          >
            JESUS
          </text>
          <text
            x="58"
            y="36"
            fontFamily="'Space Mono', 'Courier New', monospace"
            fontSize="13"
            fontWeight="700"
            fill="#00ff41"
            letterSpacing="1"
          >
            DELGADO
          </text>
          <line x1="58" y1="40" x2="210" y2="40" stroke="#00ff41" strokeWidth="1" opacity="0.3" />
          <text
            x="58"
            y="47"
            fontFamily="'Space Mono', 'Courier New', monospace"
            fontSize="7"
            fill="#666666"
            letterSpacing="2"
          >
            PYTHON DEVELOPER
          </text>
        </>
      )}
    </svg>
  )
}
