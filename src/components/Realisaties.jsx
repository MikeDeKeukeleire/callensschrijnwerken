import React from "react";
import ImageSliderAlg from "../components/ImageSliderAlg";
import ImageSliderRdp from "../components/ImageSliderRdp";

export default function Realisaties() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 text-center text-2xl">
          <h1>Algemene timmer- en schrijnwerken</h1>
          <div className="text-center text-2xl">
            <ImageSliderAlg />
          </div>
          <h1 className="mt-8">Ramen, deuren & poorten</h1>
          <div className="text-center text-2xl">
            <ImageSliderRdp />
          </div>
          <div className="mt-8">
            <a href="/#contact" className="bg-tcprimary rounded p-4">
              Neem contact op!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
