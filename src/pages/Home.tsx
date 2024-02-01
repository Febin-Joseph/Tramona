//DEFAULT PAGE (HOME PAGE)
import { FC } from "react";
import { Button, Timeline } from "../components";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/step2');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* Default page so the Timeline step is set to 0  any steps didn't completed*/}
      <Timeline data={0}/>
      <div className="mt-80">
        <Button
          label="Continue"
          color="bg-blue-10"
          onClick={handleContinue}// Will Navigates to the next page as per in the AppRoutes.tsx
        />
      </div>
    </div>
  );
};

export default Home;