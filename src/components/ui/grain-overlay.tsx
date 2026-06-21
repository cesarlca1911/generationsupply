// SVG fractal-noise grain overlay — zero dependencies, pure CSS technique.
// Fixed behind all content (z-0), blends with the dark background via overlay
// blend mode at 3% opacity to produce a fine, tactile paper-grain texture.
const GRAIN_SVG = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">',
  '<filter id="n">',
  '<feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"/>',
  '<feColorMatrix type="saturate" values="0"/>',
  '</filter>',
  '<rect width="300" height="300" filter="url(#n)"/>',
  '</svg>',
].join("");

const GRAIN_URL = `data:image/svg+xml;base64,${btoa(GRAIN_SVG)}`;

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("${GRAIN_URL}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        animation: "grain 8s steps(10) infinite",
      }}
    />
  );
}
