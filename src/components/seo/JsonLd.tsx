import { contact, socialLinks } from "@/data/site";
import { absoluteUrl, faqItems, pageSeo, SeoRoute, siteUrl } from "@/data/seo";

type JsonLdProps = {
  data: Record<string, unknown>;
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "BKids",
        alternateName: "BKids Stay and Play",
        url: `${siteUrl}/`,
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "https://schema.org/Playground",
        name: "BKids Stay and Play",
        alternateName: "BKids",
        url: `${siteUrl}/`,
        logo: absoluteUrl("/images/logo-bkids.png"),
        image: absoluteUrl("/images/seo/og-bkids.jpg"),
        description:
          "BKids es un espacio de juegos infantiles, cumpleaños y talleres para niños en Las Condes.",
        telephone: "+56987117154",
        email: contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Camino El Alba 12620, Local 16B",
          addressLocality: "Las Condes",
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        sameAs: [socialLinks.instagram, socialLinks.facebook],
      }}
    />
  );
}

export function BreadcrumbJsonLd({ route }: { route: Exclude<SeoRoute, "/"> }) {
  const seo = pageSeo[route];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: seo.breadcrumb,
            item: absoluteUrl(seo.path),
          },
        ],
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
