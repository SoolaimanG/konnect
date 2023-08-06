import React from "react";

type buttonTwoProps = {
  disabled: boolean;
  text: string;
  rounded: boolean;
  hover: boolean;
  filled: boolean;
  icon?: React.ReactElement;
};

const ButtonTwo = (props: buttonTwoProps) => {
  const { disabled, text, rounded, filled, icon, hover } = props;
  return (
    <button
      className={`w-full flex h-[3rem] gap-2 text-lg items-center justify-center ${
        rounded && "rounded-md"
      } ${hover && "hover:-translate-y-2 transition-all delay-150"} ${
        filled
          ? "bg-blue-600 text-white"
          : "border-blue-600 rounded-md border-solid border-[1.5px]"
      }`}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default ButtonTwo;
