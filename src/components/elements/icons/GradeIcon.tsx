import React from 'react';

export const GradeIcon = () => {
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.41481 12.8395L3.2 16L4.58272 10.0741L0 6.08395L6.04444 5.57037L8.41481 0L10.7852 5.57037L16.8296 6.08395L12.2469 10.0741L13.6296 16L8.41481 12.8395Z"
                fill="url(#gradeLinear)" />
            <defs>
                <linearGradient
                    id="gradeLinear"
                    x1="-1.02472e-06"
                    y1="9.33333"
                    x2="9.33361"
                    y2="1.0792"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4e4e4e" />
                    <stop offset="1" stopColor="#4e4e4e" />
                </linearGradient>
            </defs>
        </svg>

    );
};
