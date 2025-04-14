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
declare const EloFooter: React.FC<FooterProps>;
export default EloFooter;
