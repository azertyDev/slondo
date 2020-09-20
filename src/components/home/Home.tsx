import React from "react"
import {gql} from "@apollo/client"
import {Typography} from "@material-ui/core"
import {useStyle} from './useStyle'


export const Home = ({data}) => {
    const {name} = data.viewer;

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Typography>{name}</Typography>
        </div>
    )
};

export const query = gql`
query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;