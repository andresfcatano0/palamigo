import React from "react";

// instead of passing-in props as an argument, destructuring can be used within 
// the parameters of the function.
const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
      <img alt="people" src={`https://robohash.org/${id}?set=set2`} />
      <div>
        {/* javascript expressions have to be wrapped in curly brakets */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
 
export default Card; 