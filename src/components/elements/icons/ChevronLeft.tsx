import React from 'react';

export const ChevronLeft = () => {
    return (
        // <svg width='30px' height='20px' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //      stroke="#ffffff">
        //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        // </svg>
        <svg width='30px' height='20px' viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M19 5H4.83L8.41 1.41L7 0L1 6L7 12L8.41 10.59L4.83 7H19V5Z" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="20" height="14" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>

    );
};
