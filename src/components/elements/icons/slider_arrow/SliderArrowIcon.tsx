import React, {FC} from 'react';


export const SliderArrowIcon: FC<{ className: string }> = ({className}) => {
    const iconId = Math.random();
    return (
        <svg
            className={className}
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 2.34375L7.65625 10L0 17.6562L2.34375 20L12.3438 10L2.34375 0L0 2.34375Z"
                fill={`url(#${iconId})`}
            />
            <defs>
                <linearGradient
                    id={iconId.toString()}
                    x1="-7.51585e-07"
                    y1="8.33333"
                    x2="9.61161"
                    y2="13.3208"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#675EAA"/>
                    <stop offset="1" stopColor="#AD66D5"/>
                </linearGradient>
            </defs>
        </svg>
    );
};
