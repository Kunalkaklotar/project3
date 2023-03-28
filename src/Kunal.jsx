import React from "react";
import './App.css';
function Kunal(app){
    console.log(app.skills)
    return(
        <>
            <h1>{app.name}</h1>
            {app.skills.map((v,i)=>{
                
                return<h2>{v}</h2>
            })}
        </>


        
    )
}
export default Kunal;