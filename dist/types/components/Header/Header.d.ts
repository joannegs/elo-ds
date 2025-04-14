import React from "react";
export type HeaderProps = {
    logo?: React.ReactNode;
    navigation?: React.ReactNode;
    className?: string;
    backgroundColor: string;
};
declare const EloHeader: React.FC<HeaderProps>;
export default EloHeader;
