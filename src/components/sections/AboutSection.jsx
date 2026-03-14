import React from "react";
import { contactDetails, includedPackages } from "../../data/siteContent";

function AboutSection() {
  return (
    <section id="om-oss" className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card-surface p-8 sm:p-10">
          <p className="eyebrow">Om oss</p>
          <h2 className="mt-4 font-display text-4xl text-pine sm:text-5xl">
            Personlig hundestell med varme, ro og faglig presisjon
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest/85">
            Kristiansand Hundefrisør AS er bygget rundt personlig omsorg, presis
            klipp og en trygg opplevelse for både hund og eier. Her får du en
            rolig salonghverdag, tydelige pakker og behandlinger tilpasset
            behovet til hver enkelt hund.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {includedPackages.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-sand/45 p-5">
                <p className="font-semibold text-pine">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-forest/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="card-surface relative overflow-hidden p-8 sm:p-10">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blush/45 blur-2xl" />
          <p className="eyebrow">Våre ansatte</p>
          <div className="mt-5 flex items-start gap-5">
            <div className="flex h-20 w-20 animate-float items-center justify-center rounded-[1.75rem] bg-pine font-display text-3xl text-mist">
              CW
            </div>
            <div>
              <h3 className="font-display text-3xl text-pine">
                Christina Wehus
              </h3>
              <p className="mt-2 text-lg font-semibold text-coral">
                Daglig Leder / Eier
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-forest/85">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-[1.5rem] border border-forest/10 bg-white/75 p-4"
              >
                <span className="eyebrow !text-[0.65rem]">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="font-semibold text-pine transition hover:text-coral"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-semibold text-pine">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
