import React from "react";
import { reviews } from "../../data/siteContent";

function ReviewsSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="card-surface overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-pine p-8 text-mist sm:p-12">
            <p className="eyebrow text-sand">Besøk oss på facebook</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Noen av våre anmeldelser
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-mist/85">
              Tilbakemeldingene fra kundene viser hva som betyr mest: trygg
              håndtering, god omsorg og et resultat både hund og eier blir
              fornøyd med.
            </p>
            <a
              href="https://nb-no.facebook.com/kristiansandhundefrisor"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-mist px-6 py-3 font-semibold text-pine transition hover:bg-white"
            >
              Besøk oss på facebook
            </a>
          </div>

          <div className="grid gap-5 bg-gradient-to-br from-white via-mist to-sand/70 p-8 sm:p-12">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-soft"
              >
                <p className="text-lg text-coral">⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p className="mt-4 text-base leading-8 text-forest/85">
                  &quot;{review.quote}&quot;
                </p>
                <p className="mt-4 font-semibold text-pine">
                  - {review.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
