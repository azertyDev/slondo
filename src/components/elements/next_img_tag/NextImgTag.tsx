import React from 'react';
import Image from 'next/image';

export const NextImgTag = (props) => {
    return <Image {...props} unsized/>;
};