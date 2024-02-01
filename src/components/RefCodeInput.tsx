//ReferralCode Input button
import { FC, useState } from "react";

const RefCodeInput: FC = () => {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));// state to manage the entered referral code initially set array of empty strings

  // Fnction to handle changes in the input values
  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {// Checking the entered character length is 1 or less

      // Create a new array with the updated value at the specified index
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
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
            onChange={(e) => handleChange(index, e.target.value)}// Handling change in input any datas can be passed but the length should be one
            className="w-12 h-14 lg:w-14 lg:h-16 text-4xl text-center border-2 border-gray-20 rounded-md uppercase"
          />
        ))}
      </div>
    </div>
  );
};

export default RefCodeInput;