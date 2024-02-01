import { FC } from "react";
import { Button, Timeline } from "../components";
import { useNavigate } from "react-router-dom";

const LastPage: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* last step */}
      <Timeline data={5} /> 
      <div className="mt-80">
        <Button
          label="Back to Start"
          color="bg-blue-10"
          onClick={handleContinue}// Handles navigation to the first page
        />
      </div>
    </div>
  );
};

export default LastPage;