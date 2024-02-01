import { FC } from "react";

interface ButtonProps {// Props
  onClick?: () => void;
  label: string;
  color?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, className, label, color }) => {
  return (
    <button
      className={`min-w-[150px] h-[44px] ${color} ${className} rounded-full p-1 cursor-pointer text-white-10 font-semibold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;