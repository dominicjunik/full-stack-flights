import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function New() {
    let [inputs, setInputs] = useState({airline: '', flightNo: '', departs: null, airport: ''})
    const navigate = useNavigate()

    // function handleChange(event){
    //     setInput(event.target.value)
    // }
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    async function addAirline(){
        console.log(inputs)
        await axios.post('/flights', inputs)
        navigate('/')
    }
    return (
        <div >
            <h1>Add new flight</h1>
            <form onSubmit={addAirline}>
                <label htmlFor="airline">Airline:</label>
                <input type="text" required id="airline" value={inputs.airline} name='airline' onChange={handleChange}/>

                <label htmlFor="flightNo">Flight #:</label>
                <input type="number" id="flightNo"  name='flightNo' onChange={handleChange}/>

                <label htmlFor="departs">Departs:</label> 
                <input type='datetime-local' id='departs' name='departs' onChange={handleChange}></input>

                <label htmlFor="airport">Choose an Airport:</label>
                    <div>
                        <select name="airport" id="airport" onChange={handleChange}>
                            <option value="AUS">AUS</option>
                            <option value="DAL">DAL</option>
                            <option value="LAX">LAX</option>
                            <option value="SAN">SAN</option>
                            <option value="SEA">SEA</option>
                        </select>
                    </div>
                
                <button>Submit</button>
            </form>
           

            <Link to='/'><button>Back</button></Link>
        </div>
    )
}