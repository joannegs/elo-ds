import React from "react";
export type CardContainerProps = {
    hideHover?: boolean;
    className?: string;
    shadow?: boolean;
    customBackground?: string;
    border?: boolean;
    fixedDimensions?: {
        width: number;
        height: number;
    };
    children: React.ReactNode;
};
declare const CardContainer: React.FC<CardContainerProps>;
export default CardContainer;
