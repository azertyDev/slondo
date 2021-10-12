export const SERVER_URL = `${process.env.SERVER_URL || 'http://localhost:3317'}`;
export const DEV_URL = 'http://192.168.100.60';
export const PRODUCTION_URL = 'https://backend.slondo.uz';
export const INNER_URLS = {
    create_post: '/create',
    create_post_guide: '/help/post/create',
    create_auc_guide: '/help/auction/create_auction'
};
export const MESSAGES_PER_PAGE = 25;
export const ITEMS_PER_PAGE = 16;
export const HOME_ITEMS_PER_PAGE = 32;
export const BETS_PER_PAGE = 10;
export const SUBS_PER_PAGE = 10;
export const ITEMS_PER_PAGE_SEARCH = 40;
export const UPLOAD_FILES_LIMIT = 8;
export const CONFIRM_SECONDS = 120;
export const TITLE_LIMIT = 70;
export const TITLE_MIN = 7;
export const TEXT_LIMIT = 3000;
export const DESC_MIN = 10;
export const SAFE_DEAL_LIMIT = 4000;
export const SAFE_DEAL_PERCENT = 3;
export const INCOGNITO_IDS = [10, 11];
export const INCOGNITO_PHONES = ['998940330716', '998900443605'];
export const INCOGNITO_NAMES = ['user1627903931948', 'user16279078839239'];
