import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Extras from "@/components/Extras";
import RevealFx from "@/components/Motion";
import { brand } from "@/data/site";

const SITE_URL = "https://stackwell.studio";

/** Light is the intended default; only a saved toggle can override it. */
const themeInit = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("sw-theme");if(t==="dark"||t==="light"){d.setAttribute("data-theme",t);}}catch(e){}})();`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — Websites, software, AI automation & Meta ads`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Stackwell builds fast websites, custom web apps, AI chatbots and automation, plus Facebook & Instagram ads for growing businesses. Fixed price, live in weeks, you own everything.",
  keywords: [
    "website development",
    "web application development",
    "AI chatbot development India",
    "WhatsApp automation",
    "n8n workflow automation",
    "Meta ads agency",
    "CRM development",
    "SEO ready website",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Websites, business software, AI automation and paid ads for growing businesses. 44 services, one senior team, fixed prices.",
    images: [{ url: "/media/work-saas.jpg", width: 1200, height: 800, alt: "A dashboard built by Stackwell" }],
  },
  twitter: { card: "summary_large_image", title: `${brand.name} — ${brand.tagline}`, description: "Websites, software, AI automation and Meta ads for growing businesses." },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#06090f" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        precedence="default"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">
        <a
          href="#services"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[90] focus:top-4 focus:left-4 focus:rounded-full focus:bg-panel focus:border focus:border-line focus:px-5 focus:py-3 focus:text-sm focus:font-semibold"
        >
          Skip to services
        </a>
        <RevealFx />
        <Header />
        <main>{children}</main>
        <Footer />
        <Extras />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: brand.legal,
              description: metadata.description,
              url: SITE_URL,
              email: brand.email,
              telephone: brand.phone,
              areaServed: "IN",
              address: { "@type": "PostalAddress", addressLocality: "Gorakhpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
              openingHours: "Mo-Sa 10:00-19:00",
              makesOffer: [
                { "@type": "Offer", name: "Website Development" },
                { "@type": "Offer", name: "Web & Application Development" },
                { "@type": "Offer", name: "AI Solutions & Automation" },
                { "@type": "Offer", name: "Facebook & Instagram Ads" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
