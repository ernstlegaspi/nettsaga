import React from "react";
import {
  extraServices,
  priceNotes,
  pricingColumns,
} from "../../data/siteContent";

function PricingSection() {
  return (
    <section id="prisliste" className="section-shell py-12 sm:py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Prisliste</p>
          <h2 className="mt-3 font-display text-4xl text-pine sm:text-5xl">
            Velg pakken som passer hundens behov
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-forest/80">
          Vanlig pakke, full pakke og enkeltbehandlinger er samlet her, så det
          blir enklere å finne riktig nivå før du bestiller time.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1.1fr_0.9fr]">
        {pricingColumns.map((column) => (
          <article key={column.title} className="card-surface p-7">
            <p className="eyebrow">{column.title}</p>
            <div className="mt-6 space-y-4">
              {column.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] bg-sand/35 p-5 transition hover:bg-sand/55"
                >
                  <p className="text-sm leading-7 text-forest/85">
                    {item.name}
                  </p>
                  <p className="mt-3 font-display text-3xl text-pine">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}

        <article className="card-surface p-7">
          <p className="eyebrow">Ekstra tjenester</p>
          <div className="mt-6 space-y-3">
            {extraServices.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 rounded-[1.4rem] border border-forest/10 bg-white/80 p-4"
              >
                <span className="text-sm leading-6 text-forest/85">
                  {item.name}
                </span>
                <span className="font-display text-2xl text-pine">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[1.75rem] bg-pine p-6 text-mist">
            <p className="eyebrow text-sand">Viktig å vite</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-mist/90">
              {priceNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PricingSection;
