import { FC } from "react";
import { Button, RefCodeInput, Timeline } from "../components";
import { useNavigate } from "react-router-dom";

const ReferralCode: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/last');
  };

  return (
    <div className="max-container padding-container mb-5">
      <div className="flex flex-col items-center justify-center pt-10">
        <Timeline data={4} />
        <div className="mt-8 text-center max-w-[400px]">
          <h6 className="font-bold text-[32px]">Enter referral code</h6>
          <div className="mt-32">
            <RefCodeInput onContinue={handleContinue} />
          </div>
        </div>

        <div className="mt-20 lg:mt-24 mb-10 flex flex-col">
          <Button
            label="Continue"
            color="bg-blue-10"
            onClick={handleContinue}
          />
        </div>

      </div>
    </div>
  )
}

export default ReferralCode