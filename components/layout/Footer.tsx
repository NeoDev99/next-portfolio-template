import React from "react";

import ArrowUpRightIcon from "@/public/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com',
  },
  {
    title: 'X',
    href: 'https://www.twitter.com', // Formerly Twitter, now X
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com',
  },
]

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between border-t border-white/15 items-center py-6 text-sm gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
