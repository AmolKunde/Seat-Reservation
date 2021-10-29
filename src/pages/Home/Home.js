import Select from "react-select";
import { React, useState } from 'react'
import { url } from "../../constants";
import axios from 'axios';

const Home = () => {
  let numberOfSeatsArray = [1, 2, 3, 4, 5, 6, 7]
  const [numberOfSeats, setSeats] = useState(0)
  const [ticketsBooked, setTicketBooked] = useState([])
  const [success,setSuccess]=useState(false)
  const bookTickets = (e) => {
    axios.post(`${url}/bookticket/${numberOfSeats}`) //Posting number of tickets to be booked to the backend
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data)
          setTicketBooked(response.data)
          setSuccess(true)
        }
        else if (response.status === 201) {
          return alert("Sorry No Tickets Available")
        }
        else {
          return alert("Something Went Wrong")
        }
      });
    e.preventDefault();
  }
 
  return (
    <div className="container mainContainer">
      <br />
      <h1 className="text-center color-white" style={{ pendingTop: "30%" }}>
        Book Tickets Now!
      </h1>
      <br /><br /><br /><br />
      <Select
        className="select"
        placeholder="Select Number of Tickets"
        options={numberOfSeatsArray.map((item) => ({
          value: item,
          label: item,
        }))}
        onChange={(e) => {
          setSeats(e.value)
        }}
      />
      <br /><br />
      <button type="submit" id="bookTicketButton" className="btn btn-info" disabled={numberOfSeats === 0 ? true : false} onClick={bookTickets}>Book Tickets</button>
      {success && 
      <div className="color-white">
        <br/><br/>
        <h1>Congratulations Tickets Booked</h1>
          <br />
          {/* Showing user their seat numbers  */}
        <h2 className="flex">Your Seat Number are : {ticketsBooked.map((item) => (item.toString()+"  "))}</h2> 
      </div>}
    </div>
  )
}
export default Home;