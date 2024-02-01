import React from 'react';
import { check } from '../../constant';

interface TimelineProps {
  data: number;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const renderTimeline = () => {
    const timelineItems = [];

    for (let i = 1; i <= 6; i++) {
      const isActive = i <= data;
      const isNextActive = i === data + 1;

      timelineItems.push(
        <div
          key={i}
          className={`relative flex flex-col justify-center items-center w-[58px] lg:w-16  ${isActive ? 'active' : ''} ${isActive ? 'complete' : ''}`}
        >
          {i !== 1 && (
            <div className={`bg-gray-20 absolute w-full h-[3px] items-center justify-center right-2/4 ${isActive ? 'border-2 border-blue-10' : ''} ${isNextActive ? 'border-2 border-blue-10' : ''}`}></div>
          )}

          <div className={`flex items-center justify-center z-10 relative step ${isNextActive ? 'border-2 border-blue-10' : 'border-gray-30'}`}>
            {isActive ? <img src={check} alt="check" /> : ''}
            {!isActive && isNextActive ? <div className='bg-blue-10 w-[6px] h-[6px] rounded-full'></div> : ''}
          </div>
        </div>
      );
    }
    return timelineItems;
  };

  return (
    <div className="flex justify-between">
      {renderTimeline()}
    </div>
  );
};

export default Timeline;
