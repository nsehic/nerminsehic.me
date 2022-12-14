import React, { useState } from "react";
import { IconProps } from ".";

const TwitterIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = '#000000', onHoverFill = '#000000' }) => {
    const [color, setColor] = useState(fill);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={e => setColor(onHoverFill)}
      onMouseLeave={e => setColor(fill)}
    >
      <g clipPath="url(#clip0_3_7)">
        <path
          d="M17.9539 5.92151C17.9622 6.09684 17.9663 6.27275 17.9663 6.45103C17.9663 11.8743 13.8388 18.1269 6.29042 18.1269C3.97164 18.1269 1.8158 17.4487 -0.000610352 16.2834C0.321704 16.3206 0.64815 16.3395 0.978138 16.3395C2.90258 16.3395 4.66999 15.686 6.07377 14.5839C4.27979 14.5496 2.76385 13.3648 2.24201 11.7338C2.49231 11.7822 2.7485 11.8076 3.01415 11.8076C3.389 11.8076 3.75087 11.758 4.09443 11.6635C2.21899 11.2863 0.802813 9.62813 0.802813 7.64052C0.802813 7.6234 0.802813 7.60628 0.802813 7.58916C1.35712 7.89672 1.98935 8.0809 2.66232 8.10215C1.56196 7.36721 0.837642 6.10983 0.837642 4.68598C0.837642 3.93391 1.04012 3.22966 1.39254 2.62281C3.41556 5.10569 6.44095 6.73911 9.85004 6.9103C9.78097 6.60983 9.74378 6.29755 9.74378 5.97523C9.74378 3.70959 11.5809 1.87311 13.8483 1.87311C15.0277 1.87311 16.0944 2.37134 16.8412 3.16709C17.7751 2.9835 18.6546 2.6417 19.448 2.17181C19.1405 3.13049 18.4911 3.9345 17.6434 4.44099C18.4734 4.343 19.2644 4.12222 19.9994 3.79637C19.4504 4.61986 18.755 5.34241 17.9539 5.92151Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_7">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
