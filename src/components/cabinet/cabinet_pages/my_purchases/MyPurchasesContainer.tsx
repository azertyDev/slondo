import {FC} from 'react';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';

const MyPurchasesContainer: FC = () => {
    return (
        <div>My products</div>
    )
};

export default withAuthRedirect(MyPurchasesContainer)
