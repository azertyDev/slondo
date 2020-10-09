import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

// styles
import { useStyles } from './useStyles'

function handleClick(event) {
  event.preventDefault();
  console.info(event.value);
}

export const BreadcrumbsComponent = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#" onClick={handleClick}>
          Электроника
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          Телефоны и планшеты
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          Мобильные телефоны
        </Link>
        <Typography color="primary">Продаю Samsung A5 в отличном состоянии.</Typography>
      </Breadcrumbs>
    </div>
    
  );
}
   