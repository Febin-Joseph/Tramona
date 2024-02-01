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
      timelineItems.push(
        <div
          key={i}
          className={`border-2 w-[22px] h-[22px] rounded-full ${isActive ? 'bg-blue-10 border-blue-10' : ''} relative `}
        >
          {isActive && 
            <div className="absolute inset-1/2 w-3 h-3 bg-white rounded-full"></div>
          }
          {isActive && isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={check} alt="check" />
            </div>
          )}
        </div>
      );
    }
    return timelineItems;
  };

  // const renderConnectorLines = () => {
  //   const connectorLines = [];

  //   for (let i = 1; i < 6; i++) {
  //     connectorLines.push(
  //       <div
  //         key={i}
  //         className={`flex h-[3px] w-[25px] bg-black self-stretch`}
  //       ></div>
  //     );
  //   }
  //   return connectorLines;
  // };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="flex space-x-7 items-center justify-center">
        {renderTimeline()}
      <div className="flex items-center space-x-10">
        {/* {renderConnectorLines()} */}
      </div>
    </div>
      </div>
  );
};

export default Timeline;