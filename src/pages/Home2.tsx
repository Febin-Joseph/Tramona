import { FC } from "react";
import { Button, Timeline } from "../components";
import { useNavigate } from "react-router-dom";

const Home2: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/social');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <Timeline />
      <div className="mt-80">
        <Button
          label="Continue"
          color="bg-blue-10"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default Home2;