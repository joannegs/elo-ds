import React from "react";
import Typography from "../Typography/Typography";

export type TextBoxProps = {
  title?: string;
  titleSize: "xl" | "title1" | "title2" | "title3";
  content: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TextBox = ({ title, content, className, titleSize, ...rest }: TextBoxProps) => {
  return (
    <div
      className={`bg-light-surface p-5 rounded-md shadow-md ${className}`}
      {...rest}
    >
      {title && (
        <Typography
          element="h2"
          variant="primary"
          size={titleSize}
          className="font-bold mb-4"
        >
          {title}
        </Typography>
      )}
      <Typography element="p" variant="primary">
        {content}
      </Typography>
    </div>
  );
};

export default TextBox;
