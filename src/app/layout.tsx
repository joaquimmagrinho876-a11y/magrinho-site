import { Metadata } from "next";
import "./globals.css";

// Metadados atualizados para HR Tech + PONTE_MS
export const metadata: Metadata = {
  title: "Magrinho Solutions | HR Tech - Método PONTE_MS™",
  description: "HR Tech angolana. Transformamos processos de RH informais em sistemas organizados com o Método PONTE_MS™. Diagnóstico, implementação e automação para empresas.",
  keywords: [
    "Magrinho Solutions", 
    "Joaquim Magrinho", 
    "HR Tech Angola", 
    "Recursos Humanos", 
    "Método PONTE_MS", 
    "Automação RH", 
    "Diagnóstico RH", 
    "Organização de processos",
    "Benguela", 
    "Angola"
  ],
  authors: [{ name: "Joaquim Magrinho" }],
  creator: "Joaquim Magrinho",
  openGraph: {
    title: "Magrinho Solutions | HR Tech - Método PONTE_MS™",
    description: "Transformamos processos de RH em sistemas eficientes. Diagnóstico em 45min + plano de ação em 24h.",
    url: "https://magrinho-site.vercel.app",
    siteName: "Magrinho Solutions",
    locale: "pt_AO",
    type: "website",
  },
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
              "description": "Empresa de HR Tech focada em organizar processos de RH através do Método PONTE_MS™",
              "url": "https://magrinho-site.vercel.app",
              "logo": "https://magrinho-site.vercel.app/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Joaquim Magrinho",
                "jobTitle": "CEO & Especialista em Processos de RH",
                "image": "https://magrinho-site.vercel.app/joaquim-magrinho-executive.png",
                "knowsAbout": ["Recursos Humanos", "Método PONTE_MS", "Automação de Processos", "Gestão de Pessoas", "Tecnologia para RH"]
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
