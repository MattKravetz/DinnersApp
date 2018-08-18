import React, { Component } from "react";
import {Button} from "@material-ui/core";
export default function Dinner(props) {
  return (
    <Button onClick={e => props.onClick(props.dinner.id)}>{props.dinner.name}</Button>
  );
}
