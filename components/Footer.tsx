import React from "react";

function Footer() {
  return (
    <footer
      className="py-6 md:py-7 px-4 sm:px-6 -mt-2 relative z-10"
      style={{
        backgroundImage: 'url("/assets/footer.svg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs sm:text-sm font-poppins mt-2">
        <p className="text-center md:text-left">&copy; 2025 Anshita Rathore</p>
        <p className="text-center md:text-right">
          Designed and built with care.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
