import classNames from "classnames";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
import React from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  descricao?: string;
  avatarName?: string;
  avatarDescription?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({
  size = "xs",
  image,
  descricao = "",
  avatarName,
  avatarDescription,
  className,
  ...rest
}: AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size];

  const avatarComponent = image ? (
    <AvatarImage src={image} altDescription={descricao} />
  ) : (
    <AvatarIcon />
  );

  const avatarInfoComponent =
    avatarName && (
      <div
      className={classNames(
        "mt-1",
        !avatarDescription && "flex"
      )}
      >
        <p className="text-sm font-semibold text-title">{avatarName}</p>
        {avatarDescription && (
          <p className="text-xs text-subtitle">{avatarDescription}</p>
        )}
      </div>
    );

  return (
    <div className="flex gap-4xs">
      <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeClass,
        className
      )}
      {...rest}
    >
      {avatarComponent}
      </div>
      {avatarInfoComponent}
    </div>
    
  );
};

export default Avatar;