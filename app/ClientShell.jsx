"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function ClientShell({ children }) {
  const path = usePathname();

  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
      mobile: true,
    });
    wow.init();
  }, [path]);

  return (
    <>
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
    </>
  );
}
