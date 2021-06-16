import {FC, useState} from 'react';
import {useStyles} from './useStyles';

type ShowHide = {
    showTxt: string,
    className?: string
};

export const ShowHide: FC<ShowHide> = (props) => {
    const {
        showTxt,
        children,
        className = ''
    } = props;

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className}`}>
            <div className='show-hide-txt'>
                <span onClick={handleShow}>
                    {showTxt}
                </span>
            </div>
            {show && children}
        </div>
    );
};
