export const metadata = {
  title: "Menchi's Touch",
  description: "Doudous & couvertures cousus main avec amour",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
