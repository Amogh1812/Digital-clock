import React from "react";
function Alarm(){
    return(
        <>
        <center>
            <br/>
            <h1>Set an Alarm</h1>
            <label for="appt">Select a time for your alarm: </label>
<input type="time" id="appt" name="appt"></input>
        </center>
        </>
    )
}
export default Alarm;