import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiTiktokLine,
  RiTwitchLine,
  RiDiscordLine,
} from "@remixicon/react";

function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-400 px-6 lg:px-16 pt-16">
      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-16 border-b border-white/10">

        {/* SHOP */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">RazerStores</li>
            <li className="hover:text-white cursor-pointer">RazerCafe</li>
            <li className="hover:text-white cursor-pointer">Store Locator</li>
            <li className="hover:text-white cursor-pointer">Purchase Programs</li>
            <li className="hover:text-white cursor-pointer">Education</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Technology</li>
            <li className="hover:text-white cursor-pointer">Chroma RGB</li>
            <li className="hover:text-white cursor-pointer">Esports</li>
            <li className="hover:text-white cursor-pointer">Concepts</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Get Help</li>
            <li className="hover:text-white cursor-pointer">Registration & Warranty</li>
            <li className="hover:text-white cursor-pointer">RazerCare</li>
            <li className="hover:text-white cursor-pointer">Support Videos</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Newsroom</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex flex-col gap-3">
            {[
              RiFacebookFill,
              RiInstagramLine,
              RiTwitterXLine,
              RiYoutubeLine,
              RiTiktokLine,
              RiTwitchLine,
              RiDiscordLine,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* SLOGAN */}
        <div className="flex items-start justify-end">
          <p className="text-green-500 font-semibold text-sm tracking-wide">
            FOR GAMERS. BY GAMERS.™
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm">
        <p className="text-gray-500">
          Copyright © 2025 Razer Inc. All rights reserved.
        </p>

        <div className="flex gap-4 text-gray-400">
          <span className="hover:text-white cursor-pointer">Site Map</span>
          <span className="hover:text-white cursor-pointer">Legal Terms</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Cookie Settings</span>
        </div>

        <div className="text-white cursor-pointer hover:text-green-500 transition">
          Morocco | Ouarzazate
        </div>
      </div>
    </footer>
  );
}
export default Footer;