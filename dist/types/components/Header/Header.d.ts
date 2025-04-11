import React from "react";
export type HeaderProps = {
    logo?: React.ReactNode;
    navigation?: React.ReactNode;
    className?: string;
    backgroundColor: string;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
