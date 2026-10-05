export function Logo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#18252F"/>
      <rect x="2" y="2" width="116" height="116" rx="14" stroke="#2D404C" strokeWidth="2"/>
      {/* Layered contour line / route path */}
      <path d="M 24 92 L 48 68 L 68 84 L 96 32" stroke="#405A78" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Primary forward delivery corridor (Teal Steel) */}
      <path d="M 28 82 L 48 58 L 74 72 L 92 40" stroke="#0C7C83" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Subtle negative space 'P' loop & forward arrow */}
      <path d="M 38 30 L 38 88 M 38 30 L 70 30 C 82 30 84 52 70 52 L 38 52" stroke="#EDF2EF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Forward arrowhead */}
      <polygon points="96,28 82,34 90,42" fill="#D68A2C"/>
      {/* Supply node / depot point */}
      <circle cx="70" cy="52" r="6" fill="#0C7C83" stroke="#EDF2EF" strokeWidth="2.5"/>
      <circle cx="92" cy="40" r="4.5" fill="#D68A2C"/>
    </svg>
  );
}
