import React from "react";

export default function Home() {
  return (
    <>
      <body class="py-10">
        <div>
          <h1 class="text-6xl text-center">Producten</h1>
          <div class="lg:grid lg:grid-cols-3 justify-items-center py-7">
            <p class="font-semibold text-2xl text-center">
              Web Design
              <p class="font-normal text-base text-center py-2">
                IK MAAK WEBSITES
              </p>
            </p>
            <p class="font-semibold text-2xl text-center">
              Fotografie
              <p class="font-normal text-base text-center py-2">
                IK MAAK FOTOS
              </p>
            </p>
            <p class="font-semibold text-2xl text-center">
              Rebranding
              <p class="font-normal text-base text-center py-2">
                IK REBRAND SHIT
              </p>
            </p>
          </div>
        </div>
      </body>
    </>
  );
}
