import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <center>
            <div className="nav">
                <Link to="/">Time</Link>
                <Link to="/stopwatch">Stopwatch</Link>
                <Link to="/worldclock">World Clock</Link>
                <Link to="/alarm">Alarm</Link>

            </div>
        </center>
        </>
    );
}
export default Navbar;