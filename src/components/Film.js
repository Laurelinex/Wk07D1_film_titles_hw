import React from "react";

const Film = ({url, children}) => {
    return (
        <div className="film">
            <ul>
                <li><a href={url}>{children}</a></li>
            </ul>
        </div>
    )
};

export default Film;