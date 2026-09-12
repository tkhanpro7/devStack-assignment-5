import Logo from "../assets/logo-text.png";

export default function Footer() {
  const footerLinks = [
    {
      title: "PRODUCT",
      links: [
        { name: "Home", url: "#" },
        { name: "Technologies", url: "#" },
        { name: "Projects", url: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About", url: "#" },
        { name: "Contact", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid w-full grid-cols-5 gap-10 py-16 text-slate-500">
          <aside className="col-span-2 max-w-sm">
            <div>
              <img src={Logo} alt="DevStack Logo" className="w-44" />
            </div>

            <p className="mt-4 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex gap-5 font-medium text-slate-700">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="hover:text-slate-950 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </aside>

          {footerLinks.map((item, index) => (
            <nav key={index} className="flex flex-col gap-3">
              <h6 className="text-sm font-bold text-slate-950">
                {item.title}
              </h6>
              {item.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  className="text-slate-500 hover:text-slate-950 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-slate-200">
        <div className="container mx-auto px-4 flex items-center justify-between py-6 text-sm text-slate-400">
          <p>© {currentYear} Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
