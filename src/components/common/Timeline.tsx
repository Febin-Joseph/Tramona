import React from 'react';
import { check } from '../../constant';

interface TimelineProps {
  data: number; // number of completed steps
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const renderTimeline = () => {
    const timelineItems = [];// store timeline step components

    for (let i = 1; i <= 6; i++) {
      const isActive = i <= data;// Check if the step is active (completed)
      const isNextActive = i === data + 1;// Check if the next step is active

      timelineItems.push(
        <div
          key={i}
          className={`relative flex flex-col justify-center items-center w-[58px] lg:w-16  ${isActive ? 'active' : ''} ${isActive ? 'complete' : ''}`}// active and complete are two custom styles in index.css
        >
          {i !== 1 && (// Checking the step is not the first one
            // Renders connecting line between steps 
            <div className={`bg-gray-20 absolute w-full h-[3px] items-center justify-center right-2/4 
            ${isActive ? 'border-2 border-blue-10' : ''} 
            ${isNextActive ? 'border-2 border-blue-10' : ''}
            `}>
            </div>
          )}

          <div className={`flex items-center justify-center z-10 relative step ${isNextActive ? 'border-2 border-blue-10' : 'border-gray-30'}`}>
            {isActive ? <img src={check} alt="check" /> : ''}
            {!isActive && isNextActive ? <div className='bg-blue-10 w-[6px] h-[6px] rounded-full'></div> : ''}
          </div>
        </div>
      );
    }
    return timelineItems;// Returning the stored components
  };

  return (
    <div className="flex justify-between">
      {renderTimeline()}
    </div>
  );
};

export default Timeline;