import React from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  Typography,
  withStyles
} from "@material-ui/core";
import { updateName } from "../../actions/user";


import FavoriteList from './FavoriteList'


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

const mapDispatchToProps = dispatch => {
  return {
    onSubmitName: name => dispatch(updateName(name))
  };
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

  return (
    <div>
      <Typography variant="display2">{`Hello ${props.name}!`}</Typography>
      <Typography variant="headline">Favorites</Typography>
      <FavoriteList favorites={props.favorites}/>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
