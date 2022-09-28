import React, { memo, useId } from "react";
import { GroupBase, Props } from "react-select";
import ReactSelect, { ActionMeta, MultiValue, SingleValue } from "react-select";
import { Theme, useTheme } from "../../context/theme";
import { customStyles } from "./styles";
import { Option } from "./types";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    customTheme?: Theme;
  }
}

type ChangeHandler = (
  newValue: SingleValue<Option> | MultiValue<Option>,
  actionMeta: ActionMeta<Option>
) => void;

const components = {
  IndicatorSeparator: null,
};

interface SelectProps {
  customTheme?: string;
  options: Option[];
  onChange: (value: string) => void;
}

export function CustomSelect<
  Opt = Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Opt> = GroupBase<Opt>
>(
  props: Omit<Props<Opt, IsMulti, Group>, "onChange" | "options"> & SelectProps
) {
  const { theme } = useTheme();
  const { options, placeholder, isDisabled = false, onChange } = props;

  const handleChange: ChangeHandler = (newValue) => {
    const { value } = newValue as Option;
    onChange(value);
  };

  return (
    <ReactSelect
      customTheme={theme}
      isDisabled={isDisabled}
      instanceId={useId()}
      styles={customStyles}
      components={components}
      placeholder={placeholder}
      isSearchable={false}
      options={options}
      onChange={handleChange}
    />
  );
}

export const Select = memo(CustomSelect);

Select.displayName = "Select";
