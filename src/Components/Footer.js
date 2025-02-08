import footerLogo from "../images/doctor2.jpg";

const socialLinks = [
  { href: "https://www.instagram.com", icon: "ri-instagram-fill" },
  { href: "https://www.youtube.com", icon: "ri-youtube-fill" },
  { href: "https://www.linkedin.com", icon: "ri-linkedin-fill" },
  { href: "https://www.twitter.com", icon: "ri-twitter-fill" },
];

const footerLinks1 = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const footerLinks2 = [
  { href: "#imprint", label: "Imprint" },
  { href: "#privacy", label: "Privacy" },
  { href: "#credits", label: "Credits" },
];

export default function Footer() {
  return (
    <footer className="bg-cyan-800">
      <div className="container mx-auto flex flex-col-reverse text-white px-5 py-12 justify-between space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
          <img src={footerLogo} alt="Logo" className="h-28 mb-8" />
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${link.icon} text-3xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-around space-x-32">
          {[footerLinks1, footerLinks2].map((links, idx) => (
            <div key={idx} className="flex flex-col space-y-6">
              {links.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-slate-300">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Subscription and Copyright */}
        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="flex-1 py-2 px-6 rounded-full"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-300 hover:to-cyan-600 rounded-full px-4 py-2">
                Go
              </button>
            </div>
          </form>
          <div className="text-center text-white mt-6 md:mt-4">
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
