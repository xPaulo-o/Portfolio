"use client";

import dynamic from "next/dynamic";

const Certificate = dynamic(() => import("./certificates"), {
  ssr: false,
});

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

export default function LazySections() {
  return (
    <>
      <div id="certificates">
        <Certificate />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
