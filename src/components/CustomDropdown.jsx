import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function CustomDropdown(props) {
  const { label, name, options, defaultValue, ...rest } = props;

  return (
    <div className="mt-2 space-y-1 w-full">
      <label htmlFor={name} className="text-[11px] lg:text-[12px] block">
        {label}
      </label>
      <Field
        as="select"
        name={name}
        className="md:max-w-[392px] w-full  py-2 px-3  placeholder:text-[11px] text-[11px] border rounded-md border-[#d9dce1] bg-[#FAFAFA] text-gray-500"
        {...rest}
      >
        <option value="" disabled>
          {defaultValue || "select option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CustomDropdown;
