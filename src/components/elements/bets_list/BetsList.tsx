import {FC, useState} from 'react';
import {Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {useStyles} from './useStyles';
import {useTranslation} from 'react-i18next';

type BetsListPropsType = {
    bets
}

export const BetsList: FC<BetsListPropsType> = (props) => {
    const {
        bets
    } = props;
    const {t} = useTranslation(['auction', 'main']);

    const [showAll, setShowAll] = useState(false);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                variant="subtitle1" color="initial"
            >
                Текущие ставки
            </Typography>
            <div
                className="participants"
                style={{
                    height: showAll ? 400 : 200,
                    overflow: showAll ? 'auto' : 'hidden'
                }}
            >
                <ul>
                    {bets.map((item) => (
                        <li key={item.id}>
                            <div>
                                <div className="participant-name">
                                    <Typography variant="subtitle1" noWrap>
                                        {item.user.name}
                                        {item.number_of_bets && <span>({item.number_of_bets})</span>}
                                    </Typography>
                                </div>
                                <div className="dateAndTime">
                                    <Typography
                                        noWrap
                                        variant="subtitle1"
                                        className="bet-time"
                                    >
                                        {item.created_at?.slice(11, 16)}
                                    </Typography>
                                    <Typography
                                        noWrap
                                        variant="subtitle1"
                                        className="bet-date"
                                    >
                                        {item.created_at?.slice(0, 10)}
                                    </Typography>
                                </div>
                            </div>
                            <div className="bet">
                                <Typography
                                    noWrap
                                    variant="subtitle1"
                                    className="final-bet"
                                >
                                    {numberPrettier(item.bet)}
                                </Typography>
                                <Typography
                                    noWrap
                                    variant="subtitle1"
                                    className="per-bet"
                                >
                                    {item.outbid === 0
                                        ? <span className='started-price'>Стартовая цена</span>
                                        : `+ ${numberPrettier(item.outbid)}`}
                                </Typography>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Typography
                variant="subtitle1"
                color="initial"
                style={{cursor: 'pointer'}}
                onClick={() => setShowAll(!showAll)}
            >
                {!showAll
                    ?
                    <Typography variant="subtitle1" className="show-hide-all-bet">
                        {t('auction:allBets')}
                        <svg width="13" height="8" viewBox="0 0 13 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H13L6.5 6L0 0Z" fill="#675EAA" />
                        </svg>
                    </Typography>
                    :
                    <Typography variant="subtitle1" className="show-hide-all-bet">
                        {t('main:hide')}
                        <svg width="13" height="8" viewBox="0 0 13 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6H0L6.5 0L13 6Z" fill="#675EAA" />
                        </svg>
                    </Typography>
                }
            </Typography>
        </div>
    );
};
