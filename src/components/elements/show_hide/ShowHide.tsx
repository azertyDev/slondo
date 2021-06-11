import {FC, useState} from 'react';
import {useStyles} from './useStyles';

type ShowHide = {
    showTxt: string,
    hideTxt: string,
    className?: string
};

export const ShowHide: FC<ShowHide> = (props) => {
    const {
        showTxt,
        hideTxt,
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
                    {show ? hideTxt : showTxt}
                </span>
            </div>
            {show && children}
        </div>
    );
};
