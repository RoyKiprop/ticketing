import React from "react";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">FAQ</h2>
        <p className="text-gray-600 mb-6">
          Find answers to your questions about our events, ticketing, and
          payment options here.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
          Contact Us
        </button>
      </div>
      <div className="md:w-2/3 md:pl-12">
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">What if I need help?</h3>
          </div>
          <div className="hidden">
            <p className="text-gray-600 mt-2">
              If you need help, our customer support team is available 24/7. You
              can reach us through our contact page or live chat.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">How do I buy tickets?</h3>
          </div>
          <div className="hidden">
            <p className="text-gray-600 mt-2">
              You can purchase tickets directly through our website. Simply
              select the event you're interested in and follow the prompts to
              complete your purchase.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Can I pay later?</h3>
          </div>
          <div className="hidden">
            <p className="text-gray-600 mt-2">
              We currently don't offer a pay-later option. All tickets must be
              paid for at the time of purchase to secure your spot at the event.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Are tickets refundable?</h3>
          </div>
          <div className="hidden">
            <p className="text-gray-600 mt-2">
              Our refund policy varies depending on the event. Generally,
              tickets are non-refundable, but may be transferable. Please check
              the specific event details for more information.
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              What payment methods are accepted?
            </h3>
          </div>
          <div className="hidden">
            <p className="text-gray-600 mt-2">
              We accept various payment methods including credit/debit cards,
              PayPal, and mobile payment options. The available methods will be
              displayed at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
