import React from 'react';
import Image from 'next/image';

export const CustomImageTag = (props) => {
    return <Image {...props} unsized />;
};
