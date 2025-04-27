import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import classNames from "classnames";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  avatarName?: string;
  avatarDescription?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
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
    <div className="overflow-hidden rounded-full w-full h-full">
      <img
        src={image}
        alt={avatarDescription || ""}
        className="rounded-full object-cover w-full h-full"
        width={100}
        height={100}
      />
    </div>
  ) : (
    <UserIcon className="absolute w-1/2 h-1/2" />
  );

  const avatarInfoComponent =
    avatarName && (
      <div className={classNames(!avatarDescription && "flex")}>
        <p className="text-sm font-semibold text-title">{avatarName}</p>
        {avatarDescription && (
          <p className="text-xs text-subtitle">{avatarDescription}</p>
        )}
      </div>
    );

  return (
    <div data-testid="elo-avatar"
    className="flex items-center gap-4xs" {...rest}>
      <div data-testid="elo-avatar-container"
        className={classNames(
          "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
          avatarSizeClass,
          className
        )}
      >
        {avatarComponent}
      </div>
      {avatarInfoComponent}
    </div>
  );
};

export default EloAvatar;
