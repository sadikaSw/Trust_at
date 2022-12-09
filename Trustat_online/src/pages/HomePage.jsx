import React from "react";
import { Hero, Activities, Services, Contact, Form } from "../components";

function HomePage() {

  localStorage.setItem(
    "email",
    JSON.stringify({ data:{result:"sadikabada"} })
  );





  return (
    <main>
      <Hero />
      <Activities />
      <Services />
      <Form />
      <Contact />
    </main>
  );
}

export default HomePage;
