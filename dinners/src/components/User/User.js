import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { addFavorite, removeFavorite } from "../../actions/user";

import PastDinnerList from "./PastDinnerList";

const mapStateToProps = state => {
  //Reshape dinners
  let dinnersWithDates = [];
  state.user.dinners.forEach(user_d => {
    const full_dinner = state.dinners.filter(d => d.id === user_d.id)[0];
    user_d.dates.forEach(date => {
      dinnersWithDates = dinnersWithDates.concat({
        id: full_dinner.id,
        name: full_dinner.name,
        favorited: state.user.favorites.map(d => d.id).includes(full_dinner.id),
        date: date
      });
    });
  });

  const props = {
    ...state.user,
    dinners: dinnersWithDates
  };
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: (dinner, date) =>
      dinner.favorited
        ? dispatch(removeFavorite(dinner.id))
        : dispatch(addFavorite(dinner.id))
  };
};

const User = props => {
  return (
    <div>
      <Typography variant="display2">Previous Dinners</Typography>
      <PastDinnerList
        dinners={props.dinners}
        toggleFavorite={props.toggleFavorite}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
