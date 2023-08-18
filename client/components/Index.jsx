import React, { useEffect, useState } from "react";
import axios from "axios";

function Index() {

    let [flights, setFlights] = useState([])

    useEffect(() => {
    async function getFlights(){
        const response = await axios.get('/flights')
        console.log(response.data)
        setFlights(response.data)
    }
    getFlights()        
    }, [])

    return ( 
        <div>
        <h1>All flights</h1>
            <table>
                <thead>
                <tr>
                    <th>Airline</th>
                    <th>Flight #</th>
                    <th>Departs</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                 {flights.map((flight) => 
                    <tr key={flight._id}>
                         {console.log(flight.departs)}
                        <td>{flight.airline}</td>
                        <td>{flight.flightNo}</td>
                        <td>{flight.departs.toString()}</td>
                        <td><a href={`/flights/${flight._id}`}><button>Info</button></a></td>
                    
                    </tr> 
                 )}
                 </tbody>
            </table>



             <a href="/new"><button>New</button></a>
           
        </div>
    )
}

export default Index;