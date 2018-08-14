import React, { Component } from 'react'

export default function Ingredient(props) {
    console.log(props.num)
    return (
        <tr key={props.num}>
            <td>
                {props.name}
            </td>
            <td>
                {props.quantity}
            </td>
        </tr>
    );
}