import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  color: string;
}

const Button: FC<ButtonProps> = ({ onClick, label, color }) => {
  return (
    <button
      className={`min-w-[150px] h-[44px] ${color} rounded-full p-1 cursor-pointer text-white-10 font-semibold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;