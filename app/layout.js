import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1766774864"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1766774864');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}