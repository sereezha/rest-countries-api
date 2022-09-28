import React from "react";

interface MoonProps
  extends Omit<React.SVGAttributes<SVGElement>, "width" | "height"> {
  size?: number | string;
}

export const Moon: React.FunctionComponent<MoonProps> = (props) => {
  const {
    size = 20,
    strokeWidth = 1.25,
    stroke = "white",
    fill,
    ...restProps
  } = props;
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.55 13.81c-3.88 0-7.03-2.88-7.03-6.44 0-1.34.45-2.59 1.21-3.62C4.7 4.7 2.5 7.33 2.5 10.44c0 3.9 3.45 7.06 7.7 7.06 3.4 0 6.27-2 7.3-4.8a7.46 7.46 0 0 1-3.95 1.12Z"
      />
    </svg>
  );
};
