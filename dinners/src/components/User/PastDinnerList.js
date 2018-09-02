import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableBody,
  TableRow,
  Icon,
  IconButton,
  FormControlLabel,
  Switch
} from "@material-ui/core";

// Should be a list of dinners sorted by date and
// filterable by favorites only

class PastDinnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites_only: false
    };
  }

  toggleFilter() {
    this.setState({
      favorites_only: !this.state.favorites_only
    });
  }

  render() {
    const filtered_dinners = this.state.favorites_only
      ? this.props.dinners.filter(d => d.favorited)
      : this.props.dinners.slice();

    const dinners = filtered_dinners.map(d => {
      return (
        <TableRow key={"dinner-" + d.id}>
          <TableCell>{d.name}</TableCell>
          <TableCell>{d.date}</TableCell>
          <TableCell>
            <IconButton
              onClick={e => {
                console.log("favorited", d.favorited);
                e.stopPropagation();
                this.props.toggleFavorite(d);
              }}
            >
              {d.favorited ? <Icon>star</Icon> : <Icon>star_border</Icon>}
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
    return (
      <Paper>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.favorites_only}
              onChange={e => this.toggleFilter()}
              color="primary"
            />
          }
          label="Favorites Only"
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dinner Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{dinners}</TableBody>
        </Table>
      </Paper>
    );
  }
}

export default PastDinnerList;
