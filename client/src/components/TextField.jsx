import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex-col flex md:w-[25vw] w-[70vw] my-3">
      <label htmlFor={field.name} className="text-lg font-semibold">
        {label}
      </label>
      <input
        type={props.type}
        placeholder={label}
        className={`p-2 text-black font-semibold outline-none rounded-lg  border-2
        ${meta.touched && meta.error && "border-red-500 border-2"}
        `}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-sm text-red-500 "
      />
    </div>
  );
};

export default TextField;
