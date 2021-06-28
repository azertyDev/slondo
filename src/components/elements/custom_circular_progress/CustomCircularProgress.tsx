import {FC} from 'react';
import {CircularProgress} from '@material-ui/core';

type CustomCircularProgressProps = {
    color?: 'primary' | 'secondary' | 'inherit'
}

export const CustomCircularProgress: FC<CustomCircularProgressProps> = ({color = 'primary'}) => {
    return (
        <CircularProgress color={color}/>
    );
};
