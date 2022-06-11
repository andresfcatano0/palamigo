import React from "react";

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="people" src="https://robohash.org/test?size=200x200" />
            <div>
                <h2>Andres Catano</h2>
                <p>andresfcatano0@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;