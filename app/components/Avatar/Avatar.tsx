import classNames from "classnames";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
import React from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  avatarName?: string;
  avatarDescription?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "size-5",
  sm: "size-6",
  md: "size-",
  lg: "sixe-9",
};

const EloAvatar = ({
  size = "xs",
  image,
  avatarName,
  avatarDescription,
  className,
  ...rest
}: AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size];

  const avatarComponent = image ? (
    <AvatarImage src={image} altDescription={avatarDescription} />
  ) : (
    <AvatarIcon />
  );

  const avatarInfoComponent =
    avatarName && (
      <div
      className={classNames(
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
    <div className="flex items-center gap-4xs">
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

export default EloAvatar;