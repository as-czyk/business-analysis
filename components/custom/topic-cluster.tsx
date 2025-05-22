import React from "react";

interface TopicClusterProps {
  children: React.ReactNode;
  color?: string; // e.g. 'bg-purple-200'
  borderColor?: string; // e.g. 'border-purple-400'
  className?: string;
}

export const TopicCluster: React.FC<TopicClusterProps> = ({
  children,
  color = "bg-purple-200",
  borderColor = "border-purple-400",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full w-24 h-24 text-center text-base font-semibold border-4 ${color} ${borderColor} ${className}`}
      style={{ minWidth: 96, minHeight: 96 }}
    >
      <span className="w-full px-2 break-words">{children}</span>
    </div>
  );
};
