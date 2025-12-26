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
