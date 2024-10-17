const Footer = () => {
  return (
    <footer class="bg-blue-200 py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left text-sm text-gray-800">
        {/* Eventick Logo and Description */}
        <div>
          <h2 class="text-2xl font-bold flex items-center space-x-2 text-blue-900">
            <span class="text-3xl">📅</span>
            <span>Eventick</span>
          </h2>
          <p class="mt-2 max-w-xs text-gray-700">
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find, and attend
            events that fuel their passions and enrich their lives.
          </p>

          {/* <!-- Social Links --> */}
          <div class="flex mt-4 space-x-4">
            <a href="#" class="text-blue-700 hover:text-blue-500">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-400">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-blue-700 hover:text-blue-500">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-blue-900">Eventick</h3>
          <ul class="mt-2 space-y-2">
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
          <h3 class="text-lg font-semibold text-blue-900">Contact Us</h3>
          <ul class="mt-2 space-y-2">
            <li>Telephone: +254741363084</li>
            <li>
              Email:{" "}
              <a href="mailto:example@gmail.com" class="hover:underline">
                example@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 class="text-lg font-semibold text-blue-900">Social</h3>
          <div class="flex mt-2 space-x-4">
            <a href="#" class="text-blue-900 hover:text-blue-700">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-black hover:text-gray-600">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-red-500 hover:text-red-300">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom  */}
      <div class="border-t border-gray-300 mt-8 pt-4 text-center text-gray-700">
        <p>Copyright © 2024 Pyrus group</p>
      </div>
    </footer>
  );
};

export default Footer;
