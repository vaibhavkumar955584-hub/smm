"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlatformIcon } from "@/components/shared/PlatformIcon";
import { landingContent } from "@/content/landing";
import { motion } from "framer-motion";

export function SocialProofSection() {
  const platforms = landingContent.platforms;
  const [isPaused, setIsPaused] = useState(false);

  // 4 sets to guarantee a seamless loop on any screen resolution up to 4K
  const repeatedSets = [0, 1, 2, 3];

  return (
    <section className="w-full py-6 sm:py-7 border-y border-border bg-surface-glass overflow-hidden relative select-none">
      {/* Theme-aware edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10 pointer-events-none" />

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 32,
          }}
          className="flex items-center gap-4 sm:gap-6 w-max will-change-transform"
        >
          {repeatedSets.map((setIdx) => (
            <React.Fragment key={`set-${setIdx}`}>
              {platforms.map((platform) => (
                <Link
                  key={`platform-${setIdx}-${platform.id}`}
                  href={`/services?platform=${platform.id}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-surface border border-border flex-shrink-0 hover:border-accent/40 hover:bg-surface-raised hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs group"
                  title={`View ${platform.name} Growth Services`}
                >
                  <PlatformIcon platform={platform.id} size={18} useBrandColor={true} />
                  <span className="text-xs sm:text-sm font-medium text-fg group-hover:text-accent-text transition-colors">
                    {platform.name}
                  </span>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
