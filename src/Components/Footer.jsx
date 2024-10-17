const Footer = () => {
  return (
    <footer class="bg-blue-200 py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left text-sm text-gray-800">
        {/* Eventick Logo and Description */}
        <div>
          <div className="flex items-center">
            <img src="./assets/Event_tick.svg" />
            <h2 class="text-2xl font-bold flex items-center space-x-2 text-[#4C4D8B]">
              Eventick
            </h2>
          </div>
          <p class="mt-2 max-w-xs text-[#4C4D8B]">
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find, and attend
            events that fuel their passions and enrich their lives.
          </p>

          {/* <!-- Social Links --> */}
          <div class="flex mt-4 space-x-4">
            <a
              href="#"
              class="flex items-center justify-center text-white rounded-full h-8 w-8 bg-[#3b5599]"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center text-white rounded-full h-8 w-8 bg-[#5caff0]"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class=" flex items-center justify-center text-white rounded-full h-8 w-8 bg-[#0177a7]"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-[#4C4D8B]">Eventick</h3>
          <ul class="mt-2 space-y-2 text-[#4C4D8B]">
            <li>
              <a href="#" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details  */}
        <div>
          <h3 class="text-lg font-semibold text-[#4C4D8B]">Contact Us</h3>
          <ul class="mt-2 space-y-2 text-[#4C4D8B]">
            <li>
              Telephone: <span className="font-semibold">+254741363084</span>{" "}
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:example@gmail.com"
                class="text-[#4C4D8B] hover:underline"
              >
                <span className="font-semibold">example@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 class="text-lg font-semibold text-[#4C4D8B]">Social</h3>
          <div class="flex mt-2 space-x-4">
            <a href="#" class="text-[#4C4D8B]">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-[#4C4D8B]">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-[#4C4D8B]">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-[#4C4D8B]">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom  */}
      <div class="border-t border-gray-400 mx-40 mt-8 pt-4 text-center text-[#4C4D8B]">
        <p>Copyright © 2024 Pyrus group</p>
      </div>
    </footer>
  );
};

export default Footer;
