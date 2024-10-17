import React from "react";

const Discover = () => {
  return (
    <section class="bg-[#7FC7FF] py-24">
      <div class="container mx-28 flex space-x-56 space-y-6 md:space-y-0">
        {/* Left Section*/}
        <div class="text-center md:text-left">
          <h2 class="text-2xl md:text-3xl font-bold text-black">
            Discover Your Next Event
          </h2>
        </div>

        {/*  Right Section */}
        <div className="space-y-4">
          <p class=" text-[#525560] text-lg  max-w-2xl">
            Explore a variety of exciting events tailored just for you. Don't
            miss out on the chance to secure your tickets today!
          </p>
          <div class="flex space-x-4 text-sm">
            <a
              href="#"
              class="px-6 py-3 bg-[#333333] text-white rounded-full hover:bg-gray-800"
            >
              Buy Tickets
            </a>
            <a
              href="#"
              class="px-6 py-3 border-[2px] border-black text-[#333333] rounded-full hover:bg-gray-100"
            >
              View Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
