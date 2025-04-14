import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export type FooterProps = {
  logo?: React.ReactNode;
  middleContent?: React.ReactNode;
  backgroundColor: string;
  socialLinks?: {
    email?: string;
    facebook?: string;
    instagram?: string;
  };
  className?: string;
};

const EloFooter: React.FC<FooterProps> = ({
  backgroundColor = "footer",
  logo,
  socialLinks,
  className,
}) => {
  return (
    <footer className={`bg-${backgroundColor} text-white py-4 px-6 flex justify-between items-center ${className}`}>
      <div className="flex items-center gap-2">{logo}</div>
      <div className="flex items-center gap-4">
        <div className="max-h-[58px]">
          <img src="lmts-logo.png" alt="LMTS Logo" className="max-h-[58px]" />
        </div> 
      </div>
      <div className="flex items-center gap-4">
        {socialLinks?.email && (
          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <Mail className="text-white hover:opacity-80" />
          </a>
        )}
        {socialLinks?.facebook && (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="text-white hover:opacity-80" />
          </a>
        )}
        {socialLinks?.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="text-white hover:opacity-80" />
          </a>
        )}
      </div>
    </footer>
  );
};

export default EloFooter;
