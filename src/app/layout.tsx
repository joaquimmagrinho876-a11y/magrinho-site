import { Metadata } from "next";
import "./globals.css";

// Metadados para indexação do Google
export const metadata: Metadata = {
  title: "Magrinho Solutions | Sistemas, automação e gestão digital",
  description: "Soluções estratégicas em tecnologia, automação e gestão para empresas que querem crescer com mais eficiência e controlo.",
  keywords: ["Magrinho Solutions", "Joaquim Magrinho", "Automação", "Sistemas", "Gestão digital", "RH digital", "Benguela", "Angola"],
  authors: [{ name: "Joaquim Magrinho" }],
  creator: "Joaquim Magrinho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Magrinho Solutions",
              "url": "https://magrinho-site.vercel.app",
              "logo": "https://magrinho-site.vercel.app/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Joaquim Magrinho",
                "jobTitle": "CEO & Diretor de Arte Digital",
                "image": "https://magrinho-site.vercel.app/joaquim-magrinho-executive.png",
                "knowsAbout": ["Recursos Humanos", "Tecnologia da Informação", "Artes Visuais", "Design de Interfaces"]
              },
              "sameAs": [
                "https://www.linkedin.com/in/joaquims-magrinho",
                "https://www.facebook.com/profile.php?id=61585934075599",
                "https://www.facebook.com/share/17k2QRu64j/",
                "https://www.instagram.com/magrinhosolutions",
                "https://www.instagram.com/joaquimmagrinho"
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}