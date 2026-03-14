import React from "react";
import { navigation } from "../../data/siteContent";

function Footer() {
  return (
    <footer
      id="personvern"
      className="relative border-t border-forest/10 bg-pine text-mist"
    >
      <div className="section-shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">Kristiansand Hundefrisør AS</p>
          <p className="mt-2 text-sm text-mist/75">
            Utviklet av Hjemmesidehuset | Personvern
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 text-mist/85 transition hover:border-sand/40 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
