import React from "react";
import {
  contactDetails,
  navigation,
  socialLinks,
} from "../../data/siteContent";

function Header() {
  return (
    <header className="relative border-b border-forest/10">
      <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3 text-sm text-forest/80">
          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href ?? undefined}
              className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/70 px-3 py-2 transition hover:border-coral/30 hover:text-coral"
            >
              <span className="font-semibold">{item.label}</span>
              <span>{item.value}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm font-semibold text-forest">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-forest/10 bg-white/70 px-4 py-2 transition hover:border-coral/30 hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="sticky top-0 z-20 border-t border-forest/10 bg-cream/80 backdrop-blur-lg">
        <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#forside" className="max-w-xs">
            <span className="text-sm uppercase tracking-[0.35em] text-forest/70">
              Home / Forside
            </span>
            <div className="font-display text-2xl text-pine">
              Kristiansand Hundefrisør AS
            </div>
          </a>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-forest">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/80 hover:text-coral"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
