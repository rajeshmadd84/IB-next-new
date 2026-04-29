"use client";
import { useEffect } from "react";
import "../public/assets/css/main.css";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const path = usePathname();
  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: true,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/images/icon.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FGXD9YJ7EX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FGXD9YJ7EX');
          `}
        </Script>
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
