// src/components/layout/Footer.tsx
// Amazon-style multi-column footer

import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  {
    title: "Get to Know Us",
    links: ["About AmaZone", "Careers", "Press Releases", "Science"],
  },
  {
    title: "Make Money with Us",
    links: ["Sell products", "Sell on Business", "Associates", "Advertise"],
  },
  {
    title: "Payment Products",
    links: ["Reloadable Balance", "Gift Cards", "Pay on Delivery", "EMI"],
  },
  {
    title: "Let Us Help You",
    links: ["COVID-19", "Your Account", "Returns", "Help"],
  },
];

function Footer() {
  return (
    <footer className="mt-auto">
      {/* Back to top */}
      <div
        className="bg-az-nav dark:bg-dk-surface text-white text-center py-3 text-sm cursor-pointer hover:bg-opacity-90 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Links section */}
      <div className="bg-az-dark dark:bg-dk-bg py-10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold text-sm mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-gray-400 text-xs hover:text-az-orange transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-az-dark dark:bg-dk-bg border-t border-white/10 py-4">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-az-orange font-black text-lg">amazone</span>
          <p className="text-gray-500 text-xs text-center">
            © 2024 AmaZone. Built with React + Vite + Tailwind + MUI
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-gray-500 text-xs hover:text-az-orange transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
