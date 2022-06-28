import * as React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Role } from "../components/Role";
import { Offers } from "../components/Offers";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const HomePage = () => (
  <Layout>
    <Header />
    <div className="px-8 lg:px-32 flex flex-col gap-16">
      <Role />
      <Services />
      <Offers />
      <Contact />
    </div>

    <div id="fb-root"></div>

    <div
      className="fb-customerchat"
      attribution="biz_inbox"
      page_id="102672321905924"
    ></div>

    <Footer />
  </Layout>
);

export default HomePage;
