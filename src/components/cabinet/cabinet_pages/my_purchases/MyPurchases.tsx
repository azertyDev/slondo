import {FC, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useTranslation} from 'react-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {TabsDataType} from '@root/interfaces/Cabinet';


const MyPurchases: FC = () => {
    const {t} = useTranslation('cabinet');
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const purchases = (
        <div>Purchases</div>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            total: 0,
            title: t('purchases'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: () => console.log(),
            component: purchases
        }
    ];

    const title = t('myPurchases');

    return (
        <TabsContent
            title={title}
            headerTitle={title}
            tabIndex={tabIndex}
            tabsData={tabsData}
            handleTabChange={handleTabChange}
        />
    );
};

export default withAuthRedirect(MyPurchases);