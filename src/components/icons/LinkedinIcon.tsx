import React from "react";
import { IconProps } from ".";

const LinkedinIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = '#000000' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_38)">
        <path
          d="M15.8333 0H4.16667C1.86583 0 0 1.86583 0 4.16667V15.8333C0 18.1342 1.86583 20 4.16667 20H15.8333C18.135 20 20 18.1342 20 15.8333V4.16667C20 1.86583 18.135 0 15.8333 0ZM6.66667 15.8333H4.16667V6.66667H6.66667V15.8333ZM5.41667 5.61C4.61167 5.61 3.95833 4.95167 3.95833 4.14C3.95833 3.32833 4.61167 2.67 5.41667 2.67C6.22167 2.67 6.875 3.32833 6.875 4.14C6.875 4.95167 6.2225 5.61 5.41667 5.61ZM16.6667 15.8333H14.1667V11.1633C14.1667 8.35667 10.8333 8.56917 10.8333 11.1633V15.8333H8.33333V6.66667H10.8333V8.1375C11.9967 5.9825 16.6667 5.82333 16.6667 10.2008V15.8333Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_38">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;