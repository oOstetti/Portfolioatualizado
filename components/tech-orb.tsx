export default function TechOrb() {
  return (
    <div className="orb-scene" aria-hidden="true">
      <div className="orb-halo orb-halo-a" />
      <div className="orb-halo orb-halo-b" />
      <div className="orb-grid" />
      <div className="orb-glow" />
      <div className="orb-assembly">
        <div className="orb-ring orb-ring-one" />
        <div className="orb-ring orb-ring-two" />
        <div className="orb-ring orb-ring-three" />
        <div className="orb-ring orb-ring-four" />
        <svg viewBox="0 0 460 460" className="orb-wireframe" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wire" x1="40" y1="10" x2="420" y2="450" gradientUnits="userSpaceOnUse"><stop stopColor="#9ddaff"/><stop offset="0.4" stopColor="#377ce6"/><stop offset="1" stopColor="#1654b5"/></linearGradient>
          </defs>
          <g stroke="url(#wire)" strokeWidth="1.15" strokeLinejoin="round">
            <path d="M230 55 366 117 410 230 357 354 230 410 100 350 50 230 98 112Z"/>
            <path d="m230 55 0 355M50 230h360M98 112l259 242M366 117 100 350M230 55 50 230l180 180 180-180Z" opacity=".65"/>
            <path d="m98 112 132 74 136-69M100 350l130-70 127 74M230 186l180 44-180 50-180-50 180-44Z" opacity=".6"/>
            <path d="m230 55-82 176 82 179 82-179-82-176M50 230l180-44 180 44-180 50-180-50Z" opacity=".45"/>
            <path d="M136 89q-96 143 0 282M324 89q96 143 0 282" opacity=".55"/>
          </g>
          <g fill="#a8e8ff"><circle cx="230" cy="55" r="3"/><circle cx="410" cy="230" r="3"/><circle cx="50" cy="230" r="3"/><circle cx="230" cy="410" r="3"/><circle cx="230" cy="186" r="3"/><circle cx="230" cy="280" r="3"/></g>
        </svg>
        <div className="orb-core"><span /></div>
      </div>
      <div className="orb-info orb-info-top"><span className="orb-dot"/> SYSTEM ONLINE <span>●</span></div>
      <div className="orb-info orb-info-bottom">&lt; CODE / CREATE / SOLVE &gt;</div>
      <span className="orb-marker orb-marker-one"/><span className="orb-marker orb-marker-two"/>
    </div>
  );
}
