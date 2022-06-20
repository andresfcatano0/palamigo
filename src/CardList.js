import React from "react";
import Card from "./Card";

// Use destructuring to pass- in xxx instead of props
const CardList = ({robots}) => {
  return (
    <div>
      {
        // second parameter in map is the index
        robots.map((user, i) => {
          return ( 
            <Card 
            // Each child in an array should have an unique key prop beacuse if a 
            // card is deleted wihtout one, react will change the entire DOM vs just 
            // removing one card if there is key prop, minimizing the amout of work. 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;   