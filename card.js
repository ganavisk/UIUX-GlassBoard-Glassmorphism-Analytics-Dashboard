import React from "react";

function Card({title,value}){

return(

<div style={{

backdropFilter:"blur(10px)",
background:"rgba(255,255,255,0.2)",
padding:"30px",
borderRadius:"20px",
width:"200px",
color:"white",
boxShadow:"0 8px 32px rgba(0,0,0,0.2)"

}}>

<h3>{title}</h3>
<h2>{value}</h2>

</div>

)

}

export default Card;
