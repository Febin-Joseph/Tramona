import { FC } from "react";
import { Button, Timeline } from "../components";
import { useNavigate } from "react-router-dom";

const InviteFrnd: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/code');
  };

  return (
    <div className="max-container padding-container mb-5">
      <div className="flex flex-col items-center justify-center pt-10">
        <Timeline />
        <div className="mt-8 text-center max-w-[400px]">
          <h6 className="font-bold text-[32px]">Invite your friends</h6>
          <p className="text-[14px] font-medium mt-14 lg:mt-16 px-6">
            We offer a generou<span className="bg-yellow-300">s 30%</span> base profit split with people you bring to the platform.
          </p>
          <div className="mt-14 flex flex-col items-center justify-center gap-[18px]">
            <h5 className="text-gray-10 font-medium text-[14px] tracking-wider">Your referral code</h5>
            <div className="border-2 border-gray-20 w-[285px] h-[60px] rounded-1xl">
              <h1 className="text-[40px] font-medium text-gray-10 tracking-[12px]">FHJENX</h1>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:mt-24 mb-10 flex flex-col">
          <Button
            label="Share"
            color="bg-blue-10"
            onClick={handleContinue}
          />
          <Button
            label="Skip"
            className="text-[14px] font-medium text-[#787878]"
          />
        </div>
      </div>
    </div>
  )
}

export default InviteFrnd