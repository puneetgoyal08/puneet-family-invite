import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { wedding } from "@/config/wedding";
import botanical from "@/assets/botanical.png";
import { Reveal, SectionHeading } from "./ui";

const POLAROID_TILT = [-4, 3, 2.5, -3];

export function Gallery() {
  const imgs = wedding.gallery;
  const [idx, setIdx] = useState<number | null>(null);
  const go = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + imgs.length) % imgs.length)), [imgs.length]);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setIdx(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [idx, go]);
  const [tx, setTx] = useState(0);
  return (
    <section id="gallery" className="py-24 md:py-32 px-4 bg-muted/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Moments" title={wedding.galleryTitle} />
        <Reveal className="max-w-2xl mx-auto text-center -mt-4 mb-12 md:mb-16 font-serif text-lg md:text-xl leading-relaxed text-balance">
          {wedding.galleryNote.map((p) => <p key={p} className="mb-4">{p}</p>)}
          <p className="mt-6 italic text-muted-foreground">With love,</p>
          <p className="text-2xl md:text-3xl mt-1">{wedding.host.from}</p>
        </Reveal>
        <div className="relative max-w-2xl mx-auto rounded-sm bg-card px-4 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-20 shadow-[0_18px_50px_-20px_oklch(0.3_0.03_80/0.45)] ring-1 ring-gold/20">
          <img src={botanical} alt="" aria-hidden className="pointer-events-none absolute -top-6 -right-6 w-28 sm:w-36 opacity-70 rotate-12" loading="lazy" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-0 sm:gap-x-8">
            {imgs.map((im, i) => (
              <Reveal key={i} delay={(i % 2) * 120} className={i >= 2 ? "-mt-4 sm:-mt-2" : ""}>
                <div className={i % 2 ? "translate-y-10 sm:translate-y-14" : ""}>
                <button
                  onClick={() => setIdx(i)}
                  style={{ transform: `rotate(${POLAROID_TILT[i % POLAROID_TILT.length]}deg)` }}
                  className="relative block w-full bg-white p-2 pb-7 sm:p-3 sm:pb-10 shadow-[0_10px_24px_-6px_oklch(0.2_0.02_80/0.35)] transition duration-500 hover:z-10 hover:scale-[1.04] focus-visible:z-10"
                  aria-label={`Open photo: ${im.alt}`}
                >
                  <span aria-hidden className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff,#e8e2d6_55%,#b9b0a0)] shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
                  <img src={im.src} alt={im.alt} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      {idx !== null && (
        <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center animate-in fade-in" role="dialog" aria-modal="true" aria-label="Photo viewer"
          onTouchStart={(e) => setTx(e.touches[0]?.clientX ?? 0)} onTouchEnd={(e) => { const d = (e.changedTouches[0]?.clientX ?? tx) - tx; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); }}>
          <button onClick={() => setIdx(null)} className="absolute top-4 right-4 h-12 w-12 text-on-image flex items-center justify-center" aria-label="Close"><X /></button>
          <button onClick={() => go(-1)} className="absolute left-2 h-12 w-12 text-on-image hidden sm:flex items-center justify-center" aria-label="Previous"><ChevronLeft /></button>
          <img key={idx} src={imgs[idx]?.src} alt={imgs[idx]?.alt ?? ""} className="max-h-[85vh] max-w-[92vw] object-contain animate-in fade-in zoom-in-95 duration-300" />
          <button onClick={() => go(1)} className="absolute right-2 h-12 w-12 text-on-image hidden sm:flex items-center justify-center" aria-label="Next"><ChevronRight /></button>
          <p className="absolute bottom-5 text-on-image opacity-80 text-xs tracking-[0.2em]">{idx + 1} / {imgs.length}</p>
        </div>
      )}
    </section>
  );
}
