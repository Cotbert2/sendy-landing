"use client";

import { useState } from "react";
import { dictionaries, type Locale } from "@/i18n";
import {
  WindowsIcon,
  PlayStoreIcon,
  AppleIcon,
  GitHubIcon,
  CoffeeIcon,
  featureIcons,
} from "@/components/Icons";

const LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=com.example.sendy",
  windows: "#", // TODO: replace with actual Windows download link
  macos: "#", // TODO: replace with actual macOS download link
  github: "https://github.com/Cotbert2/sendy",
  coffee: "https://buymeacoffee.com/cotbert",
};

export default function Landing() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = dictionaries[locale];

  return (
    <>
      {/* Language switcher */}
      <div className="lang-switch">
        <button
          className={`lang-switch__btn ${locale === "en" ? "lang-switch__btn--active" : ""}`}
          onClick={() => setLocale("en")}
        >
          EN
        </button>
        <button
          className={`lang-switch__btn ${locale === "es" ? "lang-switch__btn--active" : ""}`}
          onClick={() => setLocale("es")}
        >
          ES
        </button>
      </div>

      {/* Hero */}
      <section className="hero">
        <img src="/logo.png" alt="Sendy" className="hero__logo-img" />
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__buttons">
          <a
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <PlayStoreIcon />
            {t.hero.playStore}
          </a>
          <a
            href={LINKS.windows}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <WindowsIcon />
            {t.hero.windows}
          </a>
          <a
            href={LINKS.macos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <AppleIcon />
            {t.hero.macos}
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features__inner">
          <h2 className="features__heading">{t.features.heading}</h2>
          <div className="features__grid">
            {t.features.items.map((f, i) => {
              const Icon = featureIcons[f.icon];
              return (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{Icon ? <Icon /> : null}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how">
        <div className="how__inner">
          <h2 className="how__heading">{t.how.heading}</h2>
          <div className="how__steps">
            {t.how.steps.map((s, i) => (
              <div key={i} className="step">
                <div className="step__number">{i + 1}</div>
                <div className="step__content">
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="cta__heading">{t.cta.heading}</h2>
        <p className="cta__sub">{t.cta.subtitle}</p>
        <div className="cta__buttons">
          <a
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <PlayStoreIcon />
            {t.cta.playStore}
          </a>
          <a
            href={LINKS.windows}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <WindowsIcon />
            {t.cta.windows}
          </a>
          <a
            href={LINKS.macos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <AppleIcon />
            {t.cta.macos}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__links">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> {t.footer.github}
          </a>
          <a href={LINKS.coffee} target="_blank" rel="noopener noreferrer">
            <CoffeeIcon /> {t.footer.coffee}
          </a>
        </div>
        <p className="footer__copy">{t.footer.copy}</p>
      </footer>
    </>
  );
}
