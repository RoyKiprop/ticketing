import React from "react";
import checkout from "../assets/checkout.svg";
import tickets from "../assets/tickets.svg";
import upcoming from "../assets/upcoming.svg";

const Purchase = () => {
  return (
    <section class="bg-white py-12">
      <div class="container mx-28">
        <h2 class="text-2xl text-center md:text-3xl font-bold text-black">
          Your Guide to Hassle-Free Ticket Purchasing
        </h2>
        <p class="text-[#525560] text-center mt-4 w-[35%] mx-auto">
          Buying tickets has never been simpler. With our pay later option, you
          can secure your spot now and worry about payment later.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <img
              src={upcoming}
              alt="Browse Upcoming Events"
              class="h-64 mb-4"
            />
            <h3 class="text-lg font-bold text-[#242565]">
              Step 1: Browse Upcoming Events
            </h3>
            <p class="text-[#525560] mt-2">
              Explore our diverse range of events tailored for you.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <img src={tickets} alt="Select Your Tickets" class="h-72 mb-4" />
            <h3 class="text-lg font-bold text-[#242565]">
              Step 2: Select Your Tickets
            </h3>
            <p class="text-[#525560] mt-2">
              Choose the tickets that best fit your needs.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <img
              src={checkout}
              alt="Checkout with Pay Later"
              class="h-64 mb-4"
            />
            <h3 class="text-lg font-bold text-[#242565]">
              Step 3: Checkout with Pay Later Option
            </h3>
            <p class="text-[#525560] mt-2">
              Complete your purchase now and pay later with ease.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <a
            href="#"
            class="px-8 py-3 border border-black rounded-lg text-black hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
