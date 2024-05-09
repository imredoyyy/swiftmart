import React from "react";
import { mergeClasses } from "../../lib/utils";

const IconButton = ({ onClick, className, children, ariaLabel }) => {
  return (
    <button
      className={mergeClasses(
        "hover:[&_svg]:stroke-color-50 inline-flex items-center justify-center rounded-md p-1.5 transition-colors duration-200 hover:bg-neutral-100",
        className || "",
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default IconButton;
