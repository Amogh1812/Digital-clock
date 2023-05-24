import React from "react";
import { useState } from "react";
function Time(){
let time = new Date();
let currentTime = time.toLocaleTimeString();

const [ctime, setCtime ]= useState(currentTime);

function updateTime(){
    let time = new Date();
    let currentTime = time.toLocaleTimeString();
    setCtime(currentTime);
}
setInterval(updateTime,1000)

    return(
        <>
        <br/>
        <h1>Digital Clock</h1>
          <h1>{ctime}</h1>

        </>
    );

}
export default Time;