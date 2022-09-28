import { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { Theme } from "../../context/theme";
import { Option } from "./types";

const sharedControlMenuStyles: CSSObjectWithLabel = {
  border: "none",
  backgroundColor: "var(--elements-bg)",
  borderRadius: "var(--border-radius)",
  boxShadow: "0px 0.2rem 0.9rem var(--clr-blue-450)",
};

export const customStyles: StylesConfig<Option, boolean, GroupBase<Option>> = {
  container: (provided) => ({
    ...provided,
    pointerEvents: "auto",
  }),
  control: (provided, { isDisabled }) => ({
    ...provided,
    ...sharedControlMenuStyles,
    padding: "1.8rem 1.8rem 1.8rem 2.4rem",
    cursor: isDisabled ? "not-allowed" : "default",
    opacity: isDisabled ? 0.5 : 1,
    transition: "none",
  }),
  menu: (provided) => ({
    ...provided,
    ...sharedControlMenuStyles,
    paddingBlock: "1.6rem",
    marginBlock: "0.4rem",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingBlock: 0,
  }),
  option: (
    provided,
    { selectProps: { customTheme }, isSelected, isFocused }
  ) => {
    const colorStyles =
      customTheme === Theme.DARK
        ? {
            color:
              isFocused && !isSelected
                ? "var(--clr-blue-800)"
                : "var(--text-color)",
          }
        : {};

    return {
      ...provided,
      padding: "1rem 2.4rem",
      ...colorStyles,
    };
  },
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
    color: "var(--text-color)",
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    color: "var(--text-color)",
    fontSize: "1.4rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    color: "var(--color-text)",
    fontSize: "1.4rem",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: "var(--text-color)",
    transition: "none",
    "&:hover": {
      color: "var(--text-color)",
    },
  }),
};
