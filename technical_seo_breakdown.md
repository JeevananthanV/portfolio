# TECHNICAL SEO BREAKDOWN — JEEVANANTHAN V
**Target Entity:** Jeevananthan V (Full Stack Developer, Salem, Tamil Nadu)  
**Corporate Affiliation:** Ethiroli Private Limited, Salem  
**Production Year:** 2026  
**Domain:** https://jeevananthan.dev  

---

## 1. CURRENT ARCHITECTURE AUDIT

### What's Already Good
- **Next.js 16 App Router** — SSR/SSG capable, not a pure CSR SPA trap
- **TypeScript** — clean codebase
- **Semantic HTML sections** — About, Experience, Projects, Skills, Education, Contact
- **Single H1 per page** — Hero name heading is the primary H1
- **Local keyword present** — "Salem, Tamil Nadu, India" in hero copy

### Critical Gaps Identified
| Gap | Impact | Priority |
|-----|--------|----------|
| No `sitemap.ts` | Search engines can't discover all routes programmatically | HIGH |
| No `robots.txt` | Crawl budget wasted on private routes | HIGH |
| Metadata missing Open Graph tags | No rich previews on LinkedIn/Twitter/WhatsApp | HIGH |
| Metadata missing Twitter Card tags | Same as above | HIGH |
| No JSON-LD structured data | No entity resolution, no Knowledge Graph eligibility | HIGH |
| No `canonical` URL | Duplicate content risk if URLs vary | MEDIUM |
| Keywords array too short | Limited long-tail capture | MEDIUM |
| No `alternates` in metadata | Language/region hints missing | LOW |
| `force-dynamic` on all pages | Prevents static generation, increases TTFB | MEDIUM |
| No `Image` component usage | External Unsplash URLs, no native optimization | MEDIUM |
| Missing alt text audit | Some images may have weak or missing alt attributes | MEDIUM |

---

## 2. FIXED METADATA ARCHITECTURE

### 2.1 Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeevananthan.dev"),
  title: {
    default: "Jeevananthan V | Full Stack Developer Salem, Tamil Nadu",
    template: "%s | Jeevananthan V",
  },
  description:
    "Full Stack Developer based in Salem, Tamil Nadu — specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex. Building scalable web applications at Ethiroli Pvt Ltd.",
  keywords: [
    "Full Stack Developer Salem",
    "React Developer Salem Tamil Nadu",
    "Node.js Developer Salem",
    "Web Developer Salem India",
    "MERN Stack Developer Tamil Nadu",
    "Next.js Developer Salem",
    "Salesforce Developer Salem",
    "Full Stack Engineer Ethiroli",
    "Freelance Web Developer Salem",
    "Jeevananthan V Portfolio",
  ],
  authors: [{ name: "Jeevananthan V" }],
  creator: "Jeevananthan V",
  publisher: "Ethiroli Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jeevananthan.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevananthan.dev",
    siteName: "Jeevananthan V | Full Stack Developer Salem",
    title: "Jeevananthan V | Full Stack Developer Salem, Tamil Nadu",
    description:
      "Full Stack Developer based in Salem, Tamil Nadu — specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevananthan V - Full Stack Developer Salem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevananthan V | Full Stack Developer Salem",
    description:
      "Full Stack Developer in Salem, Tamil Nadu — React, Node.js, MySQL, Salesforce Apex.",
    images: ["/og-image.png"],
  },
};
```

### 2.2 JSON-LD Structured Data

Add a reusable `JsonLd` component or inject inline in layout:

```html
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://jeevananthan.dev/#person",
          name: "Jeevananthan V",
          jobTitle: "Full Stack Developer",
          description:
            "Full Stack Developer based in Salem, Tamil Nadu, specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex.",
          url: "https://jeevananthan.dev",
          sameAs: [
            "https://in.linkedin.com/in/jeevananthan-vediyappan",
            "https://github.com/JeevananthanV",
          ],
          knowsAbout: [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "Salesforce Apex",
            "Next.js",
            "TypeScript",
            "MERN Stack",
            "Full Stack Development",
          ],
          worksFor: {
            "@type": "Organization",
            "@id": "https://ethiroli.in/#organization",
            name: "Ethiroli Private Limited",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Salem",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          },
        },
        {
          "@type": "ProfilePage",
          "@id": "https://jeevananthan.dev/#webpage",
          url: "https://jeevananthan.dev",
          name: "Jeevananthan V - Full Stack Developer Portfolio",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://jeevananthan.dev/#website",
            name: "Jeevananthan V Portfolio",
            url: "https://jeevananthan.dev",
          },
          mainEntity: {
            "@id": "https://jeevananthan.dev/#person",
          },
        },
      ],
    }),
  }}
/>
```

---

## 3. CRAWL MANIFESTS

### 3.1 Sitemap (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://jeevananthan.dev";

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/freelancing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
```

### 3.2 Robots (`public/robots.txt`)

```text
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /static/
Disallow: /api/

Sitemap: https://jeevananthan.dev/sitemap.xml
```

---

## 4. SALEM LOCAL SEO ENHANCEMENTS

### 4.1 Keyword Density Targets
| Keyword Variant | Placement |
|-----------------|-----------|
| "Full Stack Developer Salem" | `<title>`, `<h1>`, meta description, JSON-LD |
| "Web Developer Salem Tamil Nadu" | Meta keywords, About section copy |
| "React Node.js Developer Salem" | Skills section, Experience section |
| "Salem based developer" | Hero subtitle, About intro |
| "Freelance Developer Salem" | Freelance page title, meta description |
| "Ethiroli Pvt Ltd Salem" | Experience section, JSON-LD worksFor |

### 4.2 Local Business Signals
- Add **NAP** (Name, Address, Phone) in footer in schema format
- Salem address in JSON-LD `PostalAddress`
- Phone number `+91 63742 30015` visible and marked up
- Email `jeevananthanjeeva170902@gmail.com` visible

### 4.3 Content Recommendations
- Add a "Salem Projects" or "Tamil Nadu Clients" subsection in ProjectsGrid
- Add client testimonials mentioning Salem/Tamil Nadu
- Blog/Dev.to posts targeting Salem + tech stack keywords

---

## 5. PERFORMANCE & CWV CHECKS

| Metric | Target | Current Status |
|--------|--------|----------------|
| LCP | < 2.5s | Unknown — needs Lighthouse run |
| FID | < 100ms | Unknown — needs Lighthouse run |
| CLS | < 0.1 | Unknown — needs Lighthouse run |
| Image formats | WebP/AVIF | Mixed — external Unsplash URLs used |
| Lazy loading | Native `loading="lazy"` | Partially implemented |

### Image Optimization Actions
1. Convert `public/` images to `.webp`
2. Use `next/image` with `fill` + `sizes` attributes
3. Add `priority` to above-the-fold hero image only
4. Set explicit `width`/`height` or `aspect-ratio` on all image containers

---

## 6. IMPLEMENTATION CHECKLIST

- [ ] Create `app/sitemap.ts`
- [ ] Create `public/robots.txt`
- [ ] Update `app/layout.tsx` metadata with OG + Twitter + canonical
- [ ] Inject JSON-LD Person + ProfilePage schema
- [ ] Update `app/page.tsx` — ensure `<h1>` contains primary keyword
- [ ] Update `app/freelancing/page.tsx` — add metadata export
- [ ] Create `/og-image.png` (1200x630) for social sharing
- [ ] Audit all `<img>` tags for descriptive `alt` text
- [ ] Replace external `<img>` with `next/image` where possible
- [ ] Add `sitemap.xml` and `robots.txt` to Google Search Console
- [ ] Run `npm run build` and verify output
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for root domain

---

## 7. OFF-PAGE ACCELERATION (PARALLEL)

| Platform | Action | Expected Timeline |
|----------|--------|-------------------|
| LinkedIn | Update headline to "Full Stack Developer Salem \| React & Node.js" | Immediate |
| GitHub README | Add Salem keywords in profile README | 1-2 weeks |
| Dev.to / Medium | Publish 2-3 Salem + tech case studies | 1-2 weeks |
| Google Business Profile | Verify business, add NAP, collect reviews | 1-2 weeks |
| Local citations | List on JustDial, Sulekha, Clutch | 2-4 weeks |

---

*Last updated: 2026-08-11*  
*Owner: Jeevananthan V | Ethiroli Private Limited, Salem*
