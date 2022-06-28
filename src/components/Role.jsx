import * as React from "react";
import image from "../images/heavy_box.svg";
import { Title } from "./Title";

export const Role = () => (
  <section className="flex items-center flex-col md:flex-row gap-6 md:gap-20">
    <img src={image} alt="" width="401" height="313" />
	<div className="flex flex-col gap-4">
      <Title left>Déménagement rapide et facile comme jamais</Title>
      <p className="text-sm md:text-base font-base text-gray-700">
        Alors vous déménagez dans une autre maison, n'est-ce pas? mais vous avez
        beaucoup de choses de votre réfrigérateur à votre télévision. <br />
        Entrez <span className="font-normal uppercase">Unload</span>, un service
        de déménagement pour faciliter ce processus pour vous.
      </p>
    </div>
  </section>
);
