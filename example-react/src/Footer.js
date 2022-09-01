import { useState } from "react"


function Footer() {
    const [value, nextValue]=useState(0);
    function increment(){
    nextValue(value+1);
    }
    return(
         
         <div onClick={increment}>
            {value}
         </div>

    );
}

export default Footer;