import React from "react";
import ImageSlider from "../components/ImageSlider";
import rea from "../media/realisaties.png";
import con from "../media/contact.png";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 text-center text-2xl">
          <ImageSlider />
          <h1 className="mt-8">Algemene timmer- en schrijnwerken</h1>
          <h1>Ramen, deuren & poorten</h1>
        </div>
        <div className="mt-8 flex justify-center gap-16">
          <a href="/realisaties" className="max-w-cust">
            <img src={rea} className="w-full rounded-xl shadow mx-auto" />
          </a>
          <a href="/contact" className="max-w-cust">
            <img src={con} className="w-full rounded-xl shadow mx-auto" />
          </a>
        </div>
      </div>
    </>
  );
}
