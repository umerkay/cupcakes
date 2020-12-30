import React from "react";
import "./index.scss";
import Faq from "react-faq-component";
import data from "./questions.json";

export default function index() {
  return (
    <div>
      <Faq data={data} />
    </div>
  );
}
