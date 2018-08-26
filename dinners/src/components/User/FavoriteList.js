import React from "react";
import { Grid, List, ListItem, Typography, Icon, IconButton } from "@material-ui/core";

function FavoriteList(props) {
  console.log(props.favorites);
  const favorites = props.favorites.map(d => {
    return (
      <ListItem key={"favorite-" + d.id}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            {d.name}
          </Grid>
          <Grid item xs={3}>
            <IconButton>
                <Icon>star</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    );
  }) || (
    <ListItem key={"no-favorites"}>
      <Typography variant="body2">No favorites</Typography>
    </ListItem>
  );
  return (
    <List>
      <ListItem key={"favorite-heading"}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            Name
          </Grid>
          <Grid item xs={3}>
            Favorited
          </Grid>
        </Grid>
      </ListItem>
      {favorites}
    </List>
  );
}

export default FavoriteList;
