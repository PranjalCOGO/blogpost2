import { useState } from "react";

function Flashcard()
{
    const [img1, nextimg] =useState("./dog.webp")
    nextimg(previmg=>{
        if(previmg==="./dog.webp")
        {
            previmg="./logo.svg";
        }
        else{
            previmg="./dog.webp";
        }
    })

    return(
        <div>
            <img src={img1}>
            </img>
        </div>

    );

}

export default Flashcard;