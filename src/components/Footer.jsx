const Footer = () => {
  return (
    <section className="pt-10 pb-6 sm:pt-12 px-2 sm:pb-12">
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row  justify-evenly">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="flex items-center gap-1">
            <img
              src="./assets/logo-footer.svg"
              alt="logo"
              className="w-12 h-12"
            />
            <span className="text-[#707070] text-lg">Learning Exp.</span>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="./assets/facebook.svg"
              alt="social icon"
              className="w-9 h-9"
            />
            <img
              src="./assets/linkedin.svg"
              alt="social icon"
              className="w-9 h-9"
            />
            <img
              src="./assets/twitter.svg"
              alt="social icon"
              className="w-9 h-9"
            />
            <img
              src="./assets/pinterest.svg"
              alt="social icon"
              className="w-9 h-9"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-32">
          <div className="flex flex-col gap-6 sm:gap-5">
            <span className="text-xl">Links</span>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <li className="text-lg text-[#8A8A8A]">Home</li>
              <li className="text-lg text-[#8A8A8A]">Pricing</li>
              <li className="text-lg text-[#8A8A8A]">Download</li>
              <li className="text-lg text-[#8A8A8A]">About</li>
              <li className="text-lg text-[#8A8A8A]">Service</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 sm:gap-5">
            <span className="text-xl">Support</span>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <li className="text-lg text-[#8A8A8A]">FAQ</li>
              <li className="text-lg text-[#8A8A8A]">How it Works</li>
              <li className="text-lg text-[#8A8A8A]">Features</li>
              <li className="text-lg text-[#8A8A8A]">Contact</li>
              <li className="text-lg text-[#8A8A8A]">Reporting</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 sm:gap-5">
            <span className="text-xl">Contact Us</span>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <li className="text-lg text-[#8A8A8A]">+880 12345678</li>
              <li className="text-lg text-[#8A8A8A]">youremail@gmail.com</li>
              <li className="text-lg text-[#8A8A8A]">Pune City</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-32 pt-8 sm:pt-12">
        <span className="text-[#677294] text-xs sm:text-sm">
          Copyright & Design By @Learning Exp.
        </span>
        <div className="flex gap-2 sm:gap-4">
          <span className="text-[#677294] text-xs sm:text-sm">
            Terms of use
          </span>
          <span className="text-[#677294] text-xs sm:text-sm">|</span>
          <span className="text-[#677294] text-xs sm:text-sm">
            Privacy Policy
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
