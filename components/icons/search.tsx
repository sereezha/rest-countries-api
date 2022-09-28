import React from "react";

interface SearchProps
  extends Omit<React.SVGAttributes<SVGElement>, "width" | "height"> {
  size?: number | string;
}

export const Search: React.FunctionComponent<SearchProps> = (props) => {
  const { size = 18, fill = "inherit", ...restProps } = props;

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5 11Z"
      />
    </svg>
  );
};
