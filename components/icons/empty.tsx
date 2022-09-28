import React from "react";

interface EmptyProps
  extends Omit<React.SVGAttributes<SVGElement>, "width" | "height"> {
  size?: number | string;
}

export const Empty: React.FunctionComponent<EmptyProps> = (props) => {
  const { size = 64, ...restProps } = props;
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 64 41"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <g transform="translate(0 1)" fill="currentColor" fillRule="evenodd">
        <ellipse fill="currentColor" cx="32" cy="33" rx="32" ry="7" />
        <g fillRule="nonzero" stroke="currentColor">
          <path d="M55 12.76 44.85 1.26C44.37.47 43.65 0 42.91 0H21.09c-.75 0-1.46.47-1.94 1.26L9 12.76V22h46v-9.24z" />
          <path
            data-id="body"
            d="M41.61 15.93c0-1.6 1-2.93 2.23-2.93H55v18.14c0 2.12-1.32 3.86-2.95 3.86h-40.1C10.32 35 9 33.26 9 31.14V13h11.16c1.23 0 2.23 1.32 2.23 2.93v.02c0 1.6 1 2.9 2.23 2.9h14.76c1.23 0 2.23-1.3 2.23-2.91z"
          />
        </g>
      </g>
    </svg>
  );
};
