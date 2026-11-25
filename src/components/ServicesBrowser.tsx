// src/components/ServicesBrowser.tsx
"use client";

import { useEffect, useState } from "react";
import { serviceAreas } from "@/data/services";
import AreaIcon from "@/components/AreaIcon";

export default function ServicesBrowser() {
  const [activeKey, setActiveKey] = useState(serviceAreas[0].key);
  const active =
    serviceAreas.find((area) => area.key === activeKey) ?? serviceAreas[0];

  // As paradas do hero ("Do zero ao deploy") abrem a aba da área clicada.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const key = (e as CustomEvent<string>).detail;
      if (serviceAreas.some((area) => area.key === key)) setActiveKey(key);
    };
    window.addEventListener("labub:service-area", onSelect);
    return () => window.removeEventListener("labub:service-area", onSelect);
  }, []);

  return (
    <section id="servicos" className="px-4 md:px-12 py-16 md:py-[120px]">
      <p className="text-eyebrow text-accent-text uppercase tracking-[2px] font-semibold mb-3">
        O que fazemos
      </p>
      <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-text mb-8 md:mb-12">
        Serviços <span className="text-text-faint">prestados.</span>
      </h2>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-fill-1 border-b border-divider">
          <div className="flex items-center gap-3.5 px-4 py-2.5">
            <div className="flex items-center gap-[5px] flex-shrink-0">
              <span className="w-[10px] h-[10px] rounded-full bg-border-strong" />
              <span className="w-[10px] h-[10px] rounded-full bg-border-strong" />
              <span className="w-[10px] h-[10px] rounded-full bg-border-strong" />
            </div>
            <div className="flex-1 flex items-center gap-1.5 bg-fill-2 border border-border rounded-md px-3 py-1.5 font-mono text-eyebrow overflow-hidden">
              <span className="text-micro" aria-hidden="true">
                🔒
              </span>
              <span className="text-text-muted whitespace-nowrap">
                labub.dev/servicos/
              </span>
              <span className="text-text-soft whitespace-nowrap">
                {active.slug}
              </span>
            </div>
          </div>

          {/* Area tabs */}
          <div className="flex gap-1 px-3 overflow-x-auto">
            {serviceAreas.map((area) => (
              <button
                key={area.key}
                type="button"
                onClick={() => setActiveKey(area.key)}
                aria-pressed={area.key === activeKey}
                className={`flex items-center gap-1.5 h-11 px-3.5 text-caption font-semibold border-b-2 rounded-t-md whitespace-nowrap transition-colors duration-[250ms] hover:duration-150 active:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                  area.key === activeKey
                    ? "text-text border-accent"
                    : "text-text-muted border-transparent hover:bg-tint-hover hover:text-text-soft active:bg-tint-pressed"
                }`}
              >
                <AreaIcon name={area.icon} />
                {area.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading bar (remounts on tab change to replay the animation) */}
        <div
          key={`loadbar-${activeKey}`}
          className="h-[2px] bg-accent shadow-[var(--glow-accent)] animate-load-bar motion-reduce:animate-none"
        />

        {/* Page content */}
        <div
          key={`page-${activeKey}`}
          className="px-6 md:px-10 py-8 md:py-11 animate-fade-in-up motion-reduce:animate-none"
        >
          <p className="flex items-center gap-2 text-eyebrow text-accent-text uppercase tracking-[1.8px] font-bold mb-2.5">
            <AreaIcon name={active.icon} />
            Serviços / {active.label}
          </p>
          <h3 className="text-[24px] md:text-[30px] font-extrabold tracking-[-1px] text-text mb-3">
            {active.label}
          </h3>
          <p className="text-[14px] leading-[1.75] text-text-muted max-w-[60ch] mb-8">
            {active.summary}
          </p>

          <div className="flex flex-col">
            {active.items.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[24px_1fr] gap-4 py-4 border-t border-border last:border-b last:border-border"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mt-[7px]" />
                <div>
                  <h4 className="text-[14.5px] font-bold text-text tracking-tight mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-body-sm leading-[1.7] text-text-muted max-w-[62ch]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
