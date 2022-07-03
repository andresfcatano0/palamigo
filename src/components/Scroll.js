import React from "react";

 const Scroll = (props) => {
   return (
     // Double curly brakets for css styles
     <div style={{ overflowY: 'scroll', borderTop: "1px solid white", height: '800px' }}>
      {props.children}
     </div>
   );
 };


export default Scroll; 