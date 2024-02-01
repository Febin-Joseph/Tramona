import { FC, useState } from "react";

interface RefCodeInput {
  onContinue: () => void;
}

const RefCodeInput: FC<RefCodeInput> = () => {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...code];
      newOtp[index] = value;
      setCode(newOtp);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-14 h-16 text-4xl text-center border-2 border-gray-20 rounded-md uppercase"
          />
        ))}
      </div>
    </div>
  );
};

export default RefCodeInput;