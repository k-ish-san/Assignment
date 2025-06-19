import React, { useState } from "react";
import productImg from "../assets/prod3.jpg"; // adjust path to image
import headsetIcon from "../assets/headset.svg"; // replace with your SVG

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes! Our products are dermatologically tested and safe for sensitive skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy. Please refer to our return section for more info.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide with tracked delivery. Shipping times may vary based on location.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Use our product finder quiz or reach out to our skincare experts via support.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // 2nd FAQ open by default

  return (
    <section className="bg-[#FEFFF4] py-16 px-6 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image with Badge */}
        <div className="relative">
          <img
            src={productImg}
            alt="Skincare Product"
            className="rounded-3xl w-[850px] object-cover"
          />
          <div className="absolute bottom-6 left-1/3 bg-[#ECF3E4] text-[#2D3B36] rounded-full px-4 py-2 flex items-center gap-3 shadow-md">
            <div className="w-8 h-8 rounded-full border border-dashed bg-[#2D3B36]  flex items-center justify-center">
              <img src={headsetIcon} alt="Support" className="w-8 h-8 m-2 rounded-full " />
            </div>
            <p className="text-sm font-medium leading-tight">
              24/7 We're Here <br /> to Help You
            </p>
          </div>
        </div>

        {/* Right FAQ */}
        <div>
          <button className="mb-4 border border-[#2D3B36] text-sm px-4 py-1 rounded-full text-[#2D3B36] font-medium transition ">
            <span className="inline-block w-3 h-3 bg-black rounded-full mr-2"></span>
            Frequently Asked Question
          </button>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D3B36] mb-8">
            Answers to Your <br />
            Skincare Questions, All <br />
            in One Place.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-md p-4 transition ${
                  openIndex === index ? "bg-white" : "bg-transparent"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <p className="text-sm font-medium text-[#2D3B36]">
                    {faq.question}
                  </p>
                  <span className="text-xl text-[#2D3B36]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-xs text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
