import React from "react";

export interface IndexCardProps {
  name: string;
  time: string;
  health: "healthy" | "issues";
  status: "Running" | "Completed" | "Failed";
  performance: string;
  onHistoryClick?: () => void;
}

const IndexCard: React.FC<IndexCardProps> = ({
  name,
  time,
  health,
  status,
  performance,
  onHistoryClick
}) => {
  const performanceValue = parseFloat(performance);

  // Performance color logic
  const performanceColor =
    performanceValue >= 50 ? "text-green-600" : "text-red-600";

  // Bottom bar color logic
  const barColor =
    performanceValue >= 50 ? "bg-green-500" : "bg-red-500";

  // Status badge color logic
  const statusStyles = {
    Running: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    Failed: "bg-red-100 text-red-600"
  }[status];

  return (
    <div
      className="
        group relative p-6 border border-gray-200 rounded-xl
        hover:border-sgx-lightBlue-500 hover:shadow-md
        transition-all duration-300
      "
    >
      {/* View History Button (hover only) */}
      <button
        onClick={onHistoryClick}
        className="
          absolute top-4 right-4 opacity-0 group-hover:opacity-100
          transition-opacity duration-300 text-sgx-lightBlue-500
          border border-sgx-lightBlue-500 px-3 py-1 rounded-lg text-sm
          flex items-center gap-1 bg-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        View History
      </button>

      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Left part: name + health */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium text-gray-900">{name}</h3>
            <span
              className={`w-2 h-2 rounded-full ${
                health === "healthy" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </div>

          <p className="text-sm text-gray-500">Last run {time}</p>
        </div>
      </div>

        <div className="flex items-start justify-between">
            <span
                className={`px-3 py-1 text-sm rounded-md ${statusStyles}`}
            >
                {status}
            </span>
            {/* Performance */}
            <div className="text-right">

                {/* Right: Status Badge */}

                <div className={`text-lg font-semibold ${performanceColor}`}>
                    {performance}
                </div>
                <div className="text-xs text-gray-500">Performance</div>
            </div>
        </div>
      

      {/* Bottom progress bar */}
      <div className="mt-4 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all`}
          style={{ width: `${performanceValue}%` }}
        ></div>
      </div>
    </div>
  );
};

export default IndexCard;
