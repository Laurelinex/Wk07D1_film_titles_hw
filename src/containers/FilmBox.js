import React from "react";
import FilmList from "../components/FilmList"
import More from "../components/More"

const FilmBox = () => {
    return (
        <div className="film-box">
            <h1>Upcoming Film realeases for UK</h1>
            <FilmList/>
            <More/>
        </div>
    )
};

export default FilmBox;