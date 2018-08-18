import React, { Component } from "react";

export default function Ingredient(props) {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
          onKeyDown={props.onKeyPress}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={props.quantity}
          onChange={props.handleChange}
          onKeyDown={props.onKeyPress}
        />
      </td>
    </tr>
  );
}
