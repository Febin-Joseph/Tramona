import { FC } from "react";
import { Button, Timeline } from "../components";
import { useNavigate } from "react-router-dom";
import { social } from "../constant";

const SocialFeed: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/invite');
  };

  return (
    <div className="max-container padding-container mb-5">
      <div className="flex flex-col items-center justify-center pt-10">
        <Timeline />
        <div className="mt-8 text-center max-w-[500px]">
          <h6 className="font-semibold text-[18px]">We have a social feed.</h6>
          <p className="text-[14px] font-medium mt-14 lg:mt-16 px-6">
            Check it out if you need some inspiration on where to go, or just if
            you want to see the deals other people are getting.
          </p>
          <div className="mt-14 padding-container px-20">
            <img src={social} alt="social" />
          </div>
        </div>
        <div className="mt-20 lg:mt-24 mb-10">
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

export default SocialFeed