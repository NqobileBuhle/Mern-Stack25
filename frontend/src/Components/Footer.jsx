import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "New",
      items: [
        "Velvet Veil Elegance Serum",
        "Diamond Dew Radiance Mist",
        "Enchanted Essence Elixir",
        "Opulent Orchid Renewal Cream",
      ],
    },
    {
      title: "Make Up",
      items: [
        "Velvet Glow Essentials",
        "Radiant Glow Foundation",
        "Crystal Clear Complexion",
        "Silk Touch Skincare",
      ],
    },
    {
      title: "Collections",
      items: [
        "Renewed Radiance",
        "Zen Radiance Apothecary",
        "Serene Spa Secrets",
        "Blossom Bliss",
      ],
    },
    {
      title: "About",
      items: ["Academy", "History", "Careers", "Journal"],
    },
    {
      title: "Follow",
      items: ["TikTok", "Instagram", "Facebook", "Snapchat"],
    },
  ];

  return (
    <footer className="bg-pink-100 py-12 border-t border-pink-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold uppercase mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold uppercase">Nqobile Biyela</h1>
      </div>
      <hr className="border-t border-pink-300 my-8 w-full"/>
    </footer>
  );
};

export default Footer;
