# Čisté Auto Expres – Web (Landing Page)

Moderná prezentačná stránka pre detailing / čistenie áut.  
Cieľ: rýchlo vysvetliť služby, ukázať ukážky práce a umožniť jednoduchý kontakt/objednanie.

---

## Čo stránka obsahuje

- **Hero + CTA** (rýchla orientácia návštevníka)
- **Služby / benefity** (prehľadná ponuka)
- **Galéria / Pred–Po** (dôkaz kvality)
- **Kontakt (Form + Mapa)** – dopyt/objednávka na pár klikov
- **FAQ** – najčastejšie otázky (bez “skákania” layoutu)

---

## Kontakt a objednanie

### Adresa + mapa
- **Kežmarská cesta 63, 054 01 Levoča**
- V sekcii Kontakt je vložený Google Maps embed na presnú adresu.

### Formulár (odosielanie bez backendu)
Formulár je napojený cez **Formspree** (dočasné riešenie bez servera):
- Endpoint: `https://formspree.io/f/mlgedloy`

Poznámka: prvé maily môžu skončiť v **Spam** (najmä Gmail). Odporúčame označiť “Not spam” a vytvoriť filter “Never send to spam”.

---

## Preview / Spustenie lokálne

Najjednoduchšie:
- otvoriť `index.html` v prehliadači

Odporúčané:
- VS Code → extension **Live Server** → “Go Live”

---

## Štruktúra projektu (rýchla orientácia)

- `index.html` – hlavná stránka
- `assets/css/cisteautoexpres.css` – hlavné custom štýly
- `assets/js/cisteautoexpres.js` – hlavná logika (FAQ, Form submit, drobné UI)
- `assets/images/` – obrázky
- `vendor/` – knižnice (Bootstrap, pluginy)

---

## Spolupráca / workflow (2+ ľudí na projekte)

Aby sa zmeny navzájom neovplyvňovali:
- štýly píšeme ideálne **scopované** (napr. `#contact ...` alebo `.cae-*`)
- vyhýbame sa globálnym selektorom, ktoré môžu rozbiť iné sekcie
- každú úpravu kontrolujeme aspoň na:
  - desktop (≥ 1200px)
  - mobil (≈ 375px)

---

## Deploy

Ide o statický web – deploy je možný prakticky kdekoľvek:
- GitHub Pages / Netlify / Vercel / klasický hosting (FTP)

---

## Roadmap (krátko)

- doladiť finálne texty a obsah sekcií
- prejsť responsívne detaily (spacing, typografia)
- po dohode vyčistiť staršie/duplicitné CSS bloky
- neskôr: presun formu na finálny email / vlastný backend

--------------------------------------------------------------------------
# Čisté Auto Expres – Web (Landing Page)

A modern static website for car detailing / car cleaning services.  
Goal: quickly explain services, showcase results, and make it easy for visitors to contact or request an appointment.

---

## What the website includes

- **Hero + CTA** (clear first impression, quick action)
- **Services / Benefits** (simple, scannable offering)
- **Gallery / Before–After** (proof of quality)
- **Contact (Form + Map)** – quick enquiry / booking
- **FAQ** – common questions (with stable layout)

---

## Contact & booking

### Address + map
- **Kežmarská cesta 63, 054 01 Levoča**
- The Contact section contains a Google Maps embed for the exact address.

### Contact form (no backend required)
The form currently uses **Formspree** as a backend-less solution:
- Endpoint: `https://formspree.io/f/mlgedloy`

Note: first messages may land in **Spam** (especially Gmail). Mark as “Not spam” and optionally create a filter to always allow Formspree emails.

---

## Preview / Run locally

Quickest:
- open `index.html` in your browser

Recommended:
- VS Code → install **Live Server** extension → click “Go Live”

---

## Project structure (quick orientation)

- `index.html` – main page
- `assets/css/cisteautoexpres.css` – main custom styles
- `assets/js/cisteautoexpres.js` – main logic (FAQ, form submit, small UI)
- `assets/images/` – images
- `vendor/` – libraries (Bootstrap, plugins)

---

## Collaboration / workflow (2+ contributors)

To avoid changes affecting each other:
- keep CSS **scoped** whenever possible (e.g. `#contact ...` or `.cae-*`)
- avoid global selectors that could impact other sections
- test changes at minimum on:
  - desktop (≥ 1200px)
  - mobile (≈ 375px)

---

## Deploy

This is a static website, so it can be deployed anywhere:
- GitHub Pages / Netlify / Vercel / traditional hosting (FTP)

---

## Roadmap (short)

- finalize section copy and content
- review responsive details (spacing, typography)
- cleanup unused/duplicate CSS blocks after alignment
- later: switch form to the final email / custom backend

----------------------------------------------------------------------------------

