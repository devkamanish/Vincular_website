
"use client"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I contact Vincular?",
      answer: "You can contact Vincular via email at support@vincular.com or by calling us at (123) 456-7890.",
    },
    {
      question: "What services does Vincular offer?",
      answer: "Vincular provides testing services, regulatory compliance support, and customized testing solutions.",
    },
    {
      question: "How do I book a testing service?",
      answer: "To book a testing service, visit our website and navigate to the 'Services' section to complete the booking form.",
    },
    {
      question: "Can I get a customized testing solution?",
      answer: "Yes, we offer customized testing solutions tailored to your specific project requirements.",
    },
    {
      question: "How long does it take to get the test results?",
      answer: "Test results are typically available within 5-7 business days, depending on the complexity of the testing.",
    },
    {
      question: "How can I access my test results?",
      answer: "Test results are accessible through your account on our website. You will also receive an email notification once they're ready.",
    },
    {
      question: "Can I get technical support for my testing project?",
      answer: "Yes, our team provides technical support to help you navigate your testing project effectively.",
    },
    {
      question: "Do you offer after-service consultation?",
      answer: "We offer after-service consultation to address any concerns or additional needs you may have.",
    },
    {
      question: "Are Vincular's testing services accredited?",
      answer: "Yes, our testing services are accredited by recognized industry standards organizations.",
    },
    {
      question: "Can you help with regulatory compliance?",
      answer: "Yes, Vincular specializes in helping clients achieve regulatory compliance for their products and services.",
    },
    {
      question: "What should I do if I face issues with a report or service?",
      answer: "If you face any issues, please contact our support team immediately to resolve your concerns.",
    },
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-6 ">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4 bg-gradient-to-b from-purple-100 to-white">
          {faqs.map((faq, index) => (     
            <div key={index} className="border-none rounded-lg">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span
                  className={`ml-2 transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                <IoIosArrowDown />

                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
