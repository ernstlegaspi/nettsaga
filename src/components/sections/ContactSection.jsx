import React from "react";
import { contactDetails } from "../../data/siteContent";

function ContactSection() {
  return (
    <section id="kontakt" className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="card-surface p-8 sm:p-10">
          <p className="eyebrow">Kontakt oss</p>
          <h2 className="mt-4 font-display text-4xl text-pine sm:text-5xl">
            Ta kontakt for timebestilling eller spørsmål
          </h2>
          <p className="mt-6 text-base leading-8 text-forest/85">
            Bruk skjemaet eller kontakt oss direkte på telefon og e-post. Du
            finner også adresse og organisasjonsnummer samlet her.
          </p>

          <div className="mt-8 grid gap-4">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-forest/10 bg-white/80 p-5"
              >
                <p className="eyebrow !text-[0.65rem]">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="mt-2 block text-lg font-semibold text-pine transition hover:text-coral"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-pine">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-sand/50 p-6">
            <p className="font-semibold text-pine">
              Vennligst godta markedsføringsinformasjonskapsler for å se dette
              kartet.
            </p>
            <button
              type="button"
              className="mt-4 rounded-full border border-forest/15 bg-white px-5 py-3 font-semibold text-pine transition hover:border-coral/40 hover:text-coral"
            >
              Accept cookies
            </button>
          </div>
        </article>

        <article className="card-surface p-8 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Skjema</p>
              <h3 className="mt-2 font-display text-3xl text-pine sm:text-4xl">
                Send en forespørsel
              </h3>
            </div>
            <span className="rounded-full bg-pine px-4 py-2 text-sm font-semibold text-mist">
              Spam protection
            </span>
          </div>

          <form className="mt-8 grid gap-4" action="#">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-pine">
                Ditt navn*
              </span>
              <input
                type="text"
                placeholder="Ditt navn*"
                className="rounded-[1.25rem] border border-forest/10 bg-white px-4 py-4 outline-none transition focus:border-coral/40 focus:ring-2 focus:ring-coral/15"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-pine">
                  Din epost*
                </span>
                <input
                  type="email"
                  placeholder="Din epost*"
                  className="rounded-[1.25rem] border border-forest/10 bg-white px-4 py-4 outline-none transition focus:border-coral/40 focus:ring-2 focus:ring-coral/15"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-pine">
                  Ditt telefonnummer
                </span>
                <input
                  type="tel"
                  placeholder="Ditt telefonnummer"
                  className="rounded-[1.25rem] border border-forest/10 bg-white px-4 py-4 outline-none transition focus:border-coral/40 focus:ring-2 focus:ring-coral/15"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-pine">
                Din forespørsel...*
              </span>
              <textarea
                rows="6"
                placeholder="Din forespørsel...*"
                className="rounded-[1.25rem] border border-forest/10 bg-white px-4 py-4 outline-none transition focus:border-coral/40 focus:ring-2 focus:ring-coral/15"
              />
            </label>

            <label className="mt-2 flex items-start gap-3 rounded-[1.25rem] border border-forest/10 bg-sand/35 p-4">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-pine" />
              <span className="text-sm leading-7 text-forest/85">
                Jeg godtar at opplysningene brukes til kontakt *
              </span>
            </label>

            <div className="rounded-[1.25rem] border border-dashed border-forest/20 bg-white/70 p-5 text-sm text-forest/85">
              <p className="font-semibold text-pine">hCaptcha</p>
              <p className="mt-2 leading-7">
                Dette nettstedet er beskyttet af hCaptcha. Tjenestens
                <a
                  href="https://hcaptcha.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 text-coral underline decoration-coral/40 underline-offset-4"
                >
                  personvernerklæring
                </a>{" "}
                og
                <a
                  href="https://hcaptcha.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 text-coral underline decoration-coral/40 underline-offset-4"
                >
                  vilkår for bruk
                </a>{" "}
                gjelder.
              </p>
            </div>

            <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
              Kontakt oss
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default ContactSection;
