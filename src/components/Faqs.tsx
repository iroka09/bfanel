"use client"

import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@/components/Card"


const faqs = [
  { question: "What types of pipes do you manufacture?", answer: "We manufacture plumbing pipes and electrical conduit pipes for various applications." },
  { question: "Where are you located?", answer: "We are located in Amaebu, Orsu LGA, Imo State, Nigeria." },
  { question: "What materials are used for your pipes?", answer: "Our pipes are made from high-quality PVC, Calcium, and other durable materials." },
  { question: "Do you offer custom pipe designs?", answer: "Yes, we provide custom designs to meet unique client requirements." },
  { question: "Are your pipes environmentally friendly?", answer: "Yes, our pipes are designed to be recyclable and environmentally sustainable." },
  { question: "Do you provide delivery services?", answer: "Yes, we offer delivery services across Nigeria." },
  { question: "How can I place a bulk order?", answer: "You can contact us via email or phone to discuss bulk order requirements." },
  { question: "Do you provide installation support?", answer: "We offer consultancy services for installation to ensure proper usage." },
  { question: "What sizes of pipes do you manufacture?", answer: "We produce pipes ranging from 20mm to 160mm in diameter." },
  { question: "Are your pipes resistant to chemicals?", answer: "Yes, our pipes are chemically resistant and suitable for industrial use." },
  { question: "Do you offer wholesale pricing for distributors?", answer: "Absolutely! We provide competitive wholesale pricing for bulk purchases." },
  { question: "What is the maximum temperature your pipes can withstand?", answer: "Our pipes can handle temperatures up to 60°C." },
  { question: "Can I visit your factory for product inspection?", answer: "Yes, factory visits are welcome. Kindly schedule an appointment in advance." },
  { question: "How long does delivery take?", answer: "Delivery usually takes 3-7 business days depending on the location." },
  { question: "Do you produce pipes for industrial use?", answer: "Yes, we manufacture pipes for both residential and industrial applications." },
  { question: "What is your refund policy?", answer: "Refunds are processed within 7 days for unused products in original condition." },
  { question: "Can your pipes be used for underground installations?", answer: "Yes, our pipes are designed to withstand underground conditions." },
  { question: "Do you offer technical support for your products?", answer: "Yes, we provide full technical support for all our products." },
];



export default function FAQs() {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false)
  const handleExpand = (index) => {
    setExpanded((prev) => (prev === index ? false : index));
  };
  return (<>
    <div className="max-w-4xl mx-auto py-5 mb-7">
      {faqs.slice(0, showAll ? undefined : 4).map((faq, index) => (
        <Card
          key={index}
          className="mb-2"
        >
          <div
            onClick={() => handleExpand(index)}
            className="flex justify-between gap-3"
          >
            <h2 className="text-slate-800 font-bold text-lg">{faq.question}</h2>
            <span className="*:text-slate-900 text-3xl">
              {expanded === index ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
            </span>
          </div>
          <Collapse in={expanded === index} unmountOnExit>
            <span className="block mt-4 text-slate-900/80">{faq.answer}</span>
          </Collapse>
        </Card>
      ))}
    </div>
    <button className="text-slate-800 border border-slate-900/20 py-2 px-3 rounded-md bg-transparent" onClick={() => setShowAll(x => !x)}>
      {showAll ? "Show Less" : "Show All"}
    </button>
  </>);
};