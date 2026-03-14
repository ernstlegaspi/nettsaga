import React from "react";
import { services } from "../../data/siteContent";

function ServicesSection() {
  return (
    <section id="tjenester" className="section-shell py-12 sm:py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Våre tjenester</p>
          <h2 className="mt-3 font-display text-4xl text-pine sm:text-5xl">
            Alt fra komplett hundestell til raske enkelttjenester
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-forest/80">
          Behandlingene er satt opp slik at du raskt ser hva salongen tilbyr,
          enten du trenger full stelltime eller en mindre oppfriskning.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service}
            className={`card-surface p-6 ${
              index % 3 === 0 ? "bg-white/85" : "bg-mist/90"
            }`}
          >
            <p className="eyebrow">Tjeneste</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-pine">
              {service}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
