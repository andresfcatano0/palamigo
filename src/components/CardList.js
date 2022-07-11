import React from "react";
import Card from "./Card";

// Use destructuring to pass- in xxx instead of props
const CardList = ({amigos}) => {
  return (
    <div>
      {
        // second parameter in map is the index
        amigos.map((user, i) => {
          return ( 
            <Card 
            // Each child in an array should have an unique key prop beacuse if a 
            // card is deleted wihtout one, react will change the entire DOM vs just 
            // removing one card if there is key prop, minimizing the amout of work. 
            key={i} 
            id={amigos[i].id} 
            name={amigos[i].name} 
            email={amigos[i].email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;   