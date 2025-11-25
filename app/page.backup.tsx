'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    router.push('/dashboard');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src="/landing-cat.jpg"
        alt="Serene cat on chair"
        fill
        style={{ objectFit: 'cover' }}
        priority
        quality={100}
      />

      {/* Enter button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-12 py-3 text-2xl font-normal rounded-full backdrop-blur-3xl transition-all duration-300 hover:scale-[1.01] font-[family-name:var(--font-cormorant)]"
          style={{
            color: '#2E3837',
            background: isHovered
              ? 'radial-gradient(circle at center, rgba(192, 211, 194, 0.35) 0%, rgba(192, 211, 194, 0.18) 50%, rgba(255, 255, 255, 0.15) 100%)'
              : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.18))',
            border: isHovered
              ? '1px solid rgba(192, 211, 194, 0.4)'
              : '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow: isHovered
              ? `
                inset 0 1px 2px rgba(192, 211, 194, 0.08),
                inset 0 -1px 1px rgba(255, 255, 255, 0.3),
                0 3px 8px rgba(0, 0, 0, 0.05),
                0 6px 16px rgba(0, 0, 0, 0.03)
              `
              : `
                inset 0 1px 2px rgba(0, 0, 0, 0.04),
                inset 0 -1px 1px rgba(255, 255, 255, 0.25),
                0 2px 6px rgba(0, 0, 0, 0.04),
                0 4px 12px rgba(0, 0, 0, 0.02)
              `
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
