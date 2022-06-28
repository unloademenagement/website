import * as React from "react";
import { MdMail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Title } from "./Title";

export const Contact = () => (
  <section id="contact" className="flex flex-col gap-5">
    <Title>Contactez-nous</Title>
    <p className="text-center text-gray-700 text-sm">
      Nous vous offrons plusieurs méthodes pour nous contacter: par e-mail,
      numéro de téléphone, WhatsApp et plateformes de réseaux sociaux comme Instagram et
      Facebook.
    </p>
    <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
      <Solution
        color="red"
        icon={MdMail}
        href="mailto:contact@unload.ma"
        text="contact@unload.ma"
      />
      <Solution
        color="indigo"
        icon={MdPhone}
        href="tel:+212646464190"
        text="+212 646-464190"
      />
      <Solution
        color="green"
        icon={FaWhatsapp}
        href="https://wa.me/+212646464190"
        text="+212 646-464190"
      />
      <Solution
        color="violet"
        icon={FaInstagram}
        href="https://www.instagram.com/unload.ma"
        text="unload.ma"
      />
    </div>
  </section>
);

const Solution = ({ color, icon: Icon, href, text }) => (
  <a
    href={href}
    className={`flex flex-col gap-2 justify-center items-center bg-gray-50 p-4 border-solid border-${color}-500 border-2 border-opacity-20 cursor-pointer rounded-md flex-1`}
  >
    <Icon className={`text-4xl text-${color}-500`} />
    <h3 className="text-sm text-gray-800">{text}</h3>
  </a>
);
