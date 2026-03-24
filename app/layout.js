import "./globals.css";

export const metadata = {
  title: "AniMate Universe",
  description: "Landing page for AniMate Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
