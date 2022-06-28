import * as React from "react";
import { FcAssistant, FcCheckmark, FcAutomotive } from "react-icons/fc";
import { Title } from "./Title";

const Service = ({ icon: Icon, title, text }) => (
  <div className="border-gray-50 border-solid border-2 flex flex-col flex-1 bg-white shadow-md px-8 py-6 rounded-md gap-2 items-center text-center">
    <Icon className="text-4xl" />
    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    <p className="font-base text-sm text-gray-700">{text}</p>
  </div>
);

export const Services = () => (
  <section className="flex flex-col gap-10 items-center md:items-stretch">
    <Title>Comment ça fonctionne?</Title>
    <div className="flex flex-col md:flex-row gap-8 justify-between">
      <Service
        icon={FcAssistant}
        title="Appelez nous"
        text="Un de nos employés vous posera des questions de base concernant notamment votre ville et la quantité de choses que vous devez déménager."
      />
      <Service
        icon={FcCheckmark}
        title="Vérification"
        text="Si vous habitez à Casablanca, nous pourrons envoyer un des nos déménageurs pour vérification, sinon, il vous suffira de nous envoyer des photos de vos objets."
      />
      <Service
        icon={FcAutomotive}
        title="Nous commençons"
        text="Notre équipe commencera à déménager vos affaires dans les plus brefs délais."
      />
    </div>
  </section>
);
