import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-8 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 ">
          {children}
        </div>

        <div className="ml-4 px-3">
          <h4 className="text-title-3xl text-3xl font-bold text-black dark:text-white py-2">
            {total}
          </h4>
          <span className="text-md font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
