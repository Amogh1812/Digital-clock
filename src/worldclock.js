import React from "react";
import { useState } from "react";

function WC() {
   var usa;
   var india;
   var china;
       const[cusa,setUsa] = useState(usa)
       const[cindia,setIndia] = useState(india)
       const[cchina,setChina] = useState(china)
   
    const updTime = ()=>{
       
    let d = new Date();
    usa= d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      }).split(", ")[1]
      setUsa(usa)
    india= d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
      }).split(", ")[1]
      setIndia(india)
    china= d.toLocaleString('en-US', {
        timeZone: 'Asia/Shanghai',
      }).split(", ")[1]
      setChina(china)
    
    }
    setInterval(updTime,1000);
    return(
        <>
        <div className="container my-3">
        <main className="my-3">
            <h1>Welcome to World Clock</h1>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 border-primary">
            <h4 className="my-0 fw-normal">India <i class="bi bi-clock"></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{cindia}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              {/* <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li> */}
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">United States<i class="bi bi-clock"></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title" >{cusa}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              {/* <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li> */}
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm ">
          <div className="card-header py-3  ">
            <h4 className="my-0 fw-normal">China<i class="bi bi-clock"></i></h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{cchina}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              {/* <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li> */}
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">More about this zone</button>
          </div>
        </div>
      </div>
    </div>

    

 
  </main>
        </div>
        </>
    );
    
}
export default WC;