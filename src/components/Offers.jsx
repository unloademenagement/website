import * as React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Title } from "./Title";

const Offer = ({ bg, type }) => (
  <div className={`shadow-md rounded-xl bg-${bg}-600 flex-1 md:flex-none`}>
    <div className="h-16 flex justify-center items-center">
      <h3 className="text-white font-bold text-lg">{type}</h3>
    </div>
    <ul className="bg-white rounded-t-xl flex flex-col gap-1">
      {items &&
        items.map((item, i) => (
          <li
            key={i}
            className="text-center py-3 text-gray-900 text-sm flex items-center gap-3 px-6"
          >
            {check(item, type)}
          </li>
        ))}
    </ul>
  </div>
);

const check = (item, type) => {
  const silver = [1, 2];
  const golden = [0, 1, 2];
  if (type === "Silver" && silver.includes(items.indexOf(item))) {
    return (
      <>
        <FaCheck className="text-base text-green-500" /> {item}
      </>
    );
  }

  if (type === "Golden" && golden.includes(items.indexOf(item))) {
    return (
      <>
        <FaCheck className="text-base text-green-500" /> {item}
      </>
    );
  }

  if (type === "Platinum") {
    return (
      <>
        <FaCheck className="text-base text-green-500" /> {item}
      </>
    );
  }

  return (
    <>
      <FaTimes className="text-base text-red-500" />
      {item}
    </>
  );
};

const items = [
  "Emballage",
  "Transport",
  "Manutention",
  "Démontage et Remontage",
  "Mise en place",
];

export const Offers = () => (
  <section id="offers" className="flex flex-col gap-10 items-center md:items-stretch">
    <Title>Nos offres</Title>
    <div className="flex flex-col md:flex-row gap-8 justify-between">
      <Offer bg="gray" type="Silver" />
      <Offer bg="yellow" type="Golden" />
      <Offer bg="indigo" type="Platinum" />
    </div>
  </section>
);
