"use client"

import React from 'react';

const cardsData = [
  {
    logo: "https://mechanalyticgroup.com/wp-content/uploads/2023/12/bis-certification-service-500x500-1.webp", 
    title: "BIS Certification",
    text: "We are India’s leading BIS Certification consultant offering fast and seamless assistance for obtaining BIS-ISI certificates, FMCS certificates, and CRS registrations for your products.",
  },
  {
    logo: "https://www.certification-india.com/wp-content/uploads/india-telecommunication-engineering-center-logo.png", 
    title: "TEC-MTCTE Approvals",
    text: "We specialize in TEC-MTCTE approvals ensuring quick, efficient compliance with technical and regulatory standards, helping products meet Indian market requirements seamlessly.",
  },
  {
    logo: "https://www.certification-india.com/wp-content/uploads/WPC-Logo.png", 
    title: "Wireless Approvals",
    text: "Offering expert assistance with wireless approvals and helping businesses secure WPC (Wireless Planning and Coordination) certifications for their wireless products.",
  },
  {
    logo: "https://lh6.googleusercontent.com/proxy/l3S3xFMw6wmXacSzik036p8wQWV4w0PtlI9rbCDVINqpZ-tZjCHUpGToH0aVG1w0VTn1Wn7aCkeR6ZevZDJG3t5C_uwD5MMuB_smifZBXS_6N3DnHb2iH1-d", 
    title: "ISI Mark Certification",
    text: "We are not only the best BIS consultants but also renowned for our reliable and credible BIS-ISI certification services. Our team of professionals ensures accurate documentation and thorough evaluations, enabling successful market entry in India.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-n1SMRnLWl111_ciwuYIloK6Z9CBdywwMg&s", 
    title: "STQC Certification",
    text: "STQC (Standardization, Testing, and Quality Certification) is a key certification that ensures products and services meet Indian government standards for quality, security, and performance.",
  },
  {
    logo: "https://5.imimg.com/data5/SELLER/Default/2023/3/YJ/HI/TO/186248474/bee-certification-services.jpg", 
    title: "BEE Certificate",
    text: "The Bureau of Energy Efficiency (BEE), established by the Government of India in 2002 under the Ministry of Power, works to reduce the energy intensity of the economy by developing policies and strategies for energy efficiency across various sectors.",
  },
];

const Card = ({ logo, title, text }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 h-96 mx-auto mb-3">
    <img src={logo} alt={`${title} logo`} className="w-12 h-12 mx-auto mb-4" />
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
    <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
      Read More
    </button>
  </div>
);

const CardComponent = () => {
    return (
      <div
        className="bg-gradient-to-b from-purple-100 to-purple-200 min-h-screen w-full  "
        style={{ overflow: "hidden" }}
      >
        <h2 className="text-center text-2xl font-bold my-8">
          Learn how VINCULAR Supports your Industry
        </h2>
        <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-6 px-60 justify-center">
          {cardsData.map((card, index) => (
            <Card key={index} logo={card.logo} title={card.title} text={card.text} />
          ))}
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-6 px-4">
          {cardsData.map((card, index) => (
            <Card key={index} logo={card.logo} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    );
  };
  
  
  
export default CardComponent;
 

