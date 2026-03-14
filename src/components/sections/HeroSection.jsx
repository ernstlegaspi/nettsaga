import React from "react";
import { includedPackages, topHighlights } from "../../data/siteContent";

function HeroSection() {
  return (
    <section id="forside" className="section-shell py-14 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="eyebrow">Profesjonell pelspleie i Kristiansand</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-pine sm:text-6xl lg:text-7xl">
            Jeg har en brennende lidenskap for hunder og hos oss er en god
            opplevelse garantert. Velkommen innom!
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest/80">
            Skånsom pelspleie, trygge behandlinger og tydelig informasjon om
            priser, tjenester og kontakt samlet på ett sted.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#kontakt" className="btn-primary">
              Kontakt oss
            </a>
            <a href="#prisliste" className="btn-secondary">
              Les mer ...
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {includedPackages.map((item) => (
              <article key={item.title} className="card-surface p-6">
                <p className="eyebrow">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-forest/85">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:160ms]">
          <div className="absolute -right-6 top-8 hidden h-24 w-24 rounded-full border border-white/60 bg-white/60 lg:block" />
          <div className="absolute -left-6 bottom-20 hidden h-20 w-20 rounded-full bg-coral/20 blur-xl lg:block" />

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/40 p-4 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80"
              alt="Nystelt hund i salongmiljø"
              className="h-[28rem] w-full rounded-[1.75rem] object-cover object-center sm:h-[36rem]"
            />

            <div className="absolute left-8 top-8 max-w-xs rounded-[1.5rem] border border-white/60 bg-mist/90 p-5 shadow-soft backdrop-blur">
              <p className="eyebrow">Noen av våre anmeldelser</p>
              <p className="mt-3 font-display text-2xl text-pine">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </p>
              <p className="mt-3 text-sm leading-7 text-forest/85">
                &quot;Kjempe fint lokale! Hund og eier er super fornøyd med
                sommerklippen☀️❤️&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-coral">
                Julie Sletten
              </p>
            </div>

            <div className="absolute -bottom-2 right-6 rounded-[1.5rem] border border-forest/10 bg-pine p-5 text-mist shadow-soft sm:right-8 sm:w-80">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {topHighlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/8 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-sand">
                      Klar vei til
                    </p>
                    <p className="mt-2 text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
