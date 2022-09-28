import React from "react";

interface CallMadeProps
  extends Omit<React.SVGAttributes<SVGElement>, "width" | "height"> {
  size?: number | string;
}

export const CallMade: React.FunctionComponent<CallMadeProps> = (props) => {
  const { size = 20, ...restProps } = props;
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46 4.1 7.64 5.3 3.75 9.18H18.6v1.64H3.75l3.9 3.9-1.19 1.17L.57 10l5.9-5.9Z"
      />
    </svg>
  );
};
