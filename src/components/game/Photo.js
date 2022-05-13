import React from "react";

export const Photo = ({image}) => {
    const host = "http://localhost:8000"

    return <img src={`${host}${image.image}`}></img>
}