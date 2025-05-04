import React from "react";

export type HeaderProps = {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

const EloHeader: React.FC<HeaderProps> = ({ logo, navigation, className, backgroundColor = '' }) => {
  return (
    <header data-testid="elo-header"
      className={`bg-${backgroundColor} shadow-md py-4 px-10 flex justify-between items-center ${className}`}>
      <div className="flex items-center gap-2">{logo}</div>
      <nav className="flex items-center gap-6">{navigation}</nav>
    </header>
  );
};

export default EloHeader;