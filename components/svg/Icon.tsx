import React from "react";

type LogoIconProps = {
  size?: number; // controls width & height
  color?: string; // stroke & fill color
  className?: string; // optional tailwind/custom classes
};

const Icon: React.FC<LogoIconProps> = ({
  size = 40,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 68 51"
      width={size}
      height={size * (51 / 68)} // keeps correct aspect ratio
      className={className}
      style={{ color }}
    >
      <g fill="currentColor" stroke="currentColor">
        <path
          strokeWidth="1.426"
          d="M15.169 19.969 16.25 4.562a.143.143 0 0 0-.192-.143L5.818 8.285a.143.143 0 0 0-.06.222l9.157 11.54c.08.102.245.052.254-.078Z"
        ></path>
        <path
          strokeWidth="1.131"
          d="m28.177 23.874 7.75-9.337a.143.143 0 0 0-.072-.229l-8.306-2.225a.143.143 0 0 0-.18.145l.556 11.562c.006.13.169.184.252.084Z"
        ></path>
        <path
          strokeWidth="1.094"
          d="m39.656 31.665 5.979-10.068a.143.143 0 0 1 .24-.008l4.71 6.83c.055.08.017.19-.076.218l-10.69 3.237a.143.143 0 0 1-.163-.21ZM49.412 43.175l10.797-4.531a.142.142 0 0 1 .197.136l-.28 8.292a.143.143 0 0 1-.19.13L49.42 43.44a.143.143 0 0 1-.008-.266Z"
        ></path>
      </g>
    </svg>
  );
};

export default Icon;
