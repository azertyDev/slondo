import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/Cabinet';
import {useStyles} from './useStyles';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {useTranslation} from 'react-i18next';

type CabinetCardPropsType = {
    cardData: CardDataType,
    handleModalOpen?: (id: number, index?: number) => () => void,
    handleOpenDialog?: () => void,
    fetchAuctionNotifications?: (post) => () => void
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {t} = useTranslation('common');
    const {
        cardData,
        handleModalOpen,
        handleOpenDialog,
        fetchAuctionNotifications
    } = props;

    const {
        category,
        adsable,
        ads_type,
        id,
        status
    } = cardData;

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mb={1}>
                <div className='breadcrumbs'>
                    <BreadcrumbsComponent
                        category={category.name}
                        subcategory={adsable?.sub_category.name}
                        type={adsable?.type?.name}
                    />
                    <Box display='flex' alignItems='center'>
                        <Typography variant="subtitle1" color="initial">
                        <span className={ads_type}>
                            {t(`common:${ads_type}`)} №:&nbsp;
                        </span>
                            {id}
                        </Typography>
                        <div className='status'>
                            <Typography variant='subtitle2'>
                                {getStatus(status)}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box >
                <ListCard cardData={cardData} />
            </Box>
        </Box>
    );
    function getStatus(postStatus: string): string {
        switch (postStatus) {
            case 'new':
                return 'new';
            case 'suspend':
                return 'suspend';
            case 'success':
                return 'success';
            case 'accepted':
                return 'accepted';
            case 'reject':
                return 'reject';
            case 'sold':
                return 'sold';
            default:
                return postStatus;
        }
    }
};
