import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from "@material-ui/core";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";

type PostInfoProps = {
    author,
    price: number,
    disable: boolean,
    createP2P: () => void,
}

export const PostInfo: FC<PostInfoProps> = (props) => {
    const {
        author,
        price,
        createP2P,
        disable
    } = props;

    const {t} = useTranslation('cabinet');

    return (
        <div>
            <Typography>
                {t('cabinet:seller')}:&nbsp;
                {`${author.name} ${author.surname ?? ''}`}
            </Typography>
            <Typography>
                {t('filters:price')}:&nbsp;
                {price}&nbsp;
                {t('common:sum')}
            </Typography>
            <Typography>
                {t('safe_deal_payment_text')}
            </Typography>
            <CustomButton
                disabled={disable}
                onClick={createP2P}
            >
                {t('common:buy')}
            </CustomButton>
        </div>
    );
};
