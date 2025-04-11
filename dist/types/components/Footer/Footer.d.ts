import React from "react";
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
declare const Footer: React.FC<FooterProps>;
export default Footer;
