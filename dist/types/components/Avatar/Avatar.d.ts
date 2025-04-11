import React from "react";
export type AvatarProps = {
    size?: "xs" | "sm" | "md" | "lg";
    image?: string;
    avatarName?: string;
    avatarDescription?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Avatar: ({ size, image, avatarName, avatarDescription, className, ...rest }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
