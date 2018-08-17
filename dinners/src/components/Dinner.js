import React, { Component } from 'react'

export default function Dinner(props) {
    return (<div onClick={(e) => props.onClick(props.dinner.id)}>{props.dinner.name}</div>)
}


