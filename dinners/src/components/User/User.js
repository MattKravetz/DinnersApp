import React from "react";
import { connect } from "react-redux";
import { List, ListItem, Typography } from "@material-ui/core";

const mapStateToProps = state => {
  const props = {
    ...state.user,
    dinners: state.dinners.filter(d =>
      state.user.dinners.map(d => d.id).includes(d.id)
    ),
    favorites: state.dinners.filter(d =>
      state.user.favorites.map(d => d.id).includes(d.id)
    )
  };
  return props;
};

const User = props => {
  const dinners = props.dinners.map(d => {
    return (
      <ListItem key={"dinner-" + d.id}>
        <Typography variant="body2">{d.name}</Typography>
      </ListItem>
    );
  }) || (
    <ListItem key={"no-dinner"}>
      <Typography variant="body2">No dinners</Typography>
    </ListItem>
  );
  const favorites = props.favorites.map(d => {
    return (
      <ListItem key={"favorite-" + d.id}>
        <Typography variant="body2">{d.name}</Typography>
      </ListItem>
    );
  }) || (
    <ListItem key={"no-favorites"}>
      <Typography variant="body2">No favorites</Typography>
    </ListItem>
  );
  console.log(favorites)
  return (
    <div>
      <Typography variant="display2">Hello {props.name}!</Typography>
      <Typography variant="headline">Dinners</Typography>
      <List>{dinners}</List>
      <Typography variant="headline">Favorites</Typography>
      <List>{favorites}</List>
    </div>
  );
};

export default connect(mapStateToProps)(User);
