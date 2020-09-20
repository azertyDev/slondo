import React from "react"
import {gql} from "@apollo/client"
import {Typography} from "@material-ui/core"

export const Home = ({data}) => {
    const {name} = data.viewer;
    return (
        <div>
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