# Forza Legal Defense, PC — Website
## forzalegaldefense.com

---

## File Structure

```
forzalegaldefense/
├── index.html               ← Homepage
├── css/
│   └── style.css            ← Full site stylesheet
├── js/
│   └── main.js              ← Navigation, animations, interactions
├── images/
│   ├── README.md            ← Image replacement instructions
│   ├── hero-bg.jpg          ← REPLACE: Dark courthouse/justice background
│   ├── attorney-headshot.jpg← REPLACE: Professional attorney headshot
│   ├── attorney-office.jpg  ← REPLACE: Law office or attorney photo
│   └── dui-defense.jpg      ← REPLACE: DUI/courthouse imagery
└── pages/
    ├── about.html           ← About the firm & attorney bio
    ├── practice-areas.html  ← All practice areas overview
    ├── dui-defense.html     ← Dedicated DUI defense page
    ├── criminal-defense.html← Criminal defense overview
    └── contact.html         ← Contact + consultation form
```

---

## Before Launch Checklist

### Content to Personalize
- [ ] **Michael Athari** — Replace all `[Attorney Name]` with actual name
- [ ] **(840) 977-8784** — Replace `(909) 555-0100` with real number
- [ ] **mike@forzalegaldefense.com** — Replace `info@forzalegaldefense.com`
- [ ] **9431 Haven Avenue, Suite 100, Rancho Cucamonga, CA 91730** — Replace `[Office Address]` / `[Street Address]`
- [ ] **Attorney Michael Keon Athari is an accomplished criminal defense with a profound dedication to advocating for the underrepresented. Since obtaining his California law license in 2017, Michael’s career has been defined by an unwavering commitment to protecting the rights of his community, with a specialized focus on safeguarding vulnerable youth and families.
A Foundation in the Courtroom
Michael’s journey in law began at the University of California, Irvine, before he earned his law degree from Trinity Law School. His vision for making a tangible impact took shape during his time as a law clerk for the Los Angeles District Attorney’s Office, which gave him early, vital exposure to the intricacies of the criminal justice system.
He further honed his formidable litigation skills serving as a Deputy District Attorney for San Bernardino County. In this high-stakes environment, Michael navigated complex legal challenges with strategic finesse, handling extensive jury trials, motion hearings, and plea negotiations. This prosecutorial background equips him with a critical tactical advantage, allowing him to anticipate the opposing side's strategies when defending his clients today.
Fierce Advocacy for Families and the Accused
Prior to launching Forza Legal Defense, Michael built a robust track record as a Senior Associate at My Rights Law Group and the Matian Law Firm. He is particularly recognized for his impactful work with the Juvenile Defenders, where he fought vigorously to protect parents' rights and prevent unwarranted suspensions of custody by the county. His expertise extends into civil and family courts, where he has achieved strong results petitioning for and defending against restraining orders—always emphasizing restoration and justice.
Committed to Justice
Today, at Forza Legal Defense, Michael continues to champion the rights of his clients through a deep understanding of the law and a heartfelt commitment to securing the best possible outcomes. He is more than just an attorney; he is a tireless defender of rights and a beacon of hope for individuals navigating the daunting waters of the legal system.** — Fill in actual background, credentials, bar admissions
- [ ] **Photos** — Replace all placeholder images (see images/README.md)
- [ ] **he** — Replace `[he/she]` in about.html bio

### Technical Setup
- [ ] Add Google Analytics or similar tracking
- [ ] Set up Google Search Console and submit sitemap
- [ ] Create `sitemap.xml` for SEO
- [ ] Add `robots.txt`
- [ ] Connect contact forms to email (Formspree, Netlify Forms, etc.)
- [ ] Add Google Maps embed to contact page
- [ ] Add real favicon (images/favicon.ico)
- [ ] Set up SSL certificate (HTTPS)

### SEO
- [ ] Update meta descriptions with attorney name and real location
- [ ] Add schema markup (LocalBusiness, Attorney, LegalService)
- [ ] Set up Google Business Profile
- [ ] Register on AVVO, Martindale, Lawyers.com, Yelp

### Optional Enhancements
- [ ] Add a blog section for legal content (SEO boost)
- [ ] Add video testimonials or attorney intro video
- [ ] Add live chat widget (e.g., LawDroid, Tidio)
- [ ] Add click-to-call tracking for phone numbers

---

## Design Notes

**Color Palette:**
- Navy Dark: `#071529`
- Navy: `#0D1F3C`
- Gold: `#C9A84C`
- Gold Light: `#E2C47C`

**Fonts (loaded from Google Fonts):**
- Display: Cormorant Garamond (headings, firm name)
- Body: Montserrat (navigation, body copy, buttons)

**Icons:** Font Awesome 6.5 (loaded via CDN)

---

## Form Integration

The contact forms currently have placeholder `<a>` tags. To make them functional:

**Option A — Formspree (free tier available):**
1. Sign up at formspree.io
2. Create a form and get your endpoint URL
3. Change `<a href="#" onclick="return false;">` buttons to proper `<form action="https://formspree.io/f/YOUR_ID" method="POST">` tags

**Option B — Netlify Forms (if hosting on Netlify):**
Add `netlify` attribute to `<form>` elements — forms work automatically.

**Option C — Custom backend:**
Point form actions to your own server-side handler.

---

© 2025 Forza Legal Defense, PC
