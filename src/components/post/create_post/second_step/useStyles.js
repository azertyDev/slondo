import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.categories-menu, & div.subcategories-menu': {
            '& > ul': {
                background: '#F2F2F2',
                borderRadius: '10px',
                padding: 15,
                '& > li': {
                    height: 38,
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    marginBottom: 5,
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                    boxSizing: 'border-box',
                    borderRadius: '5px',
                    '& > svg': {
                        margin: '0 15px'
                    },
                    '&.selected-category': {
                        border: '1px solid #845CAB',
                        '& > h6.MuiTypography-subtitle1': {
                            color: theme.palette.primary.secondary
                        },
                        '& > svg': {
                            '& > path': {
                                fill: '#845CAB'
                            }
                        }
                    }
                }
            }
        },
        '& div.search-block': {
            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: 10,
            marginBottom: 10,
            '& > div.MuiInputBase-root': {
                border: 0,
                '& > svg': {
                    margin: '0 20px 0 30px'
                },
                '& > input.MuiInputBase-input': {
                    padding: '10px 0'
                }
            }
        },
        '& div.categories-menu': {
            paddingRight: 20,
            [theme.breakpoints.down('sm')]: {
                paddingRight: 0
            }
        },
        '& div.subcategories-menu': {
            '& h6.subcategories-list-item': {
                [theme.breakpoints.down('xs')]: {
                    maxWidth: '220px'
                }
            },
            '& button.back-btn': {
                color: theme.palette.primary.white,
                background: 'none',
                padding: 0,
                '& svg': {
                    marginRight: '15px'
                },
                '& h6.MuiTypography-subtitle1': {
                    fontWeight: 600
                }
            },
            '& ul': {
                '& > li:hover': {
                    backgroundColor: theme.palette.primary.gray
                }
            },
            '& > div.subcategory-bg': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                minHeight: '500px',
                background: '#F2F2F2',
                borderRadius: '10px',
                backgroundImage: `url('/img/category-bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom left',
                opacity: 0.8,
                [theme.breakpoints.down('md')]: {
                    height: '454px'
                },
                '& > h2.MuiTypography-h2': {
                    width: '50%',
                    fontSize: '4vw',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: theme.palette.common.tab
                }
            }
        }
    }
}));
