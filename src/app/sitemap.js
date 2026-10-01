const base = "https://stackwell.studio";
const sections = ["services", "work", "process", "stack", "pricing", "faq", "contact"];

export default function sitemap() {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...sections.map((s) => ({ url: `${base}/#${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
