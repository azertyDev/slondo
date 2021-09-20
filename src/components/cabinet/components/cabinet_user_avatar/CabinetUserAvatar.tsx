import {FC, useContext} from 'react';
import {AuthCtx} from "@src/context";
import {Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {CustomBadge} from "@src/components/elements/custom_budge/CustomBadge";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

type CabinetUserAvatarProps = {
    page: string,
    selectedClass: string,
    onButtonClick: (url) => () => void,
}

export const CabinetUserAvatar: FC<CabinetUserAvatarProps> = (props) => {
    const {page, onButtonClick, selectedClass} = props;
    const {t} = useTranslation('cabinet');
    const {user} = useContext(AuthCtx);

    const classes = useStyles();
    return (
        <List
            disablePadding
            component="nav"
            aria-label="cabinet menu"
            className={classes.root}
        >
            <div className='user-info-wrapper'>
                <UserInfoWithAvatar user={user}/>
            </div>
            <Grid
                container
                spacing={1}
            >
                <Grid item xs={4}>
                    <CustomBadge badgeContent={user.observer.number_of_reviews}>
                        <ListItem
                            disableGutters
                            selected={page === 'rating'}
                            onClick={onButtonClick('rating')}
                            classes={{selected: selectedClass}}
                        >
                            <ListItemText primary={t('cabinet:rating')}/>
                        </ListItem>
                    </CustomBadge>
                </Grid>
                <Grid item xs={8}>
                    <ListItem
                        disableGutters
                        selected={page === 'subs'}
                        onClick={onButtonClick('subs')}
                        classes={{selected: selectedClass}}
                    >
                        <ListItemText primary={t('cabinet:subs')}/>
                    </ListItem>
                </Grid>
            </Grid>
        </List>
    );
};
