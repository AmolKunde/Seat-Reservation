import { React, useState, useEffect } from 'react'
import { url } from "../../constants";


const AvlSeats = () => {

  const [TicketData, setTicketData] = useState({}) 
  const [layout,setLayout] = useState([])
  var count=1
  useEffect(() => { //getting data from the database
    fetch(`${url}/getData`)
      .then((response) => response.json())
      .then((data) => {
        setTicketData(data[0])
        setLayout(data[0].ticketList)     
      })
  }, [])


  if (layout.length===0) { 
    return <h1>Loading</h1>
  } else {
    return (
      <div className="container">
        <h1 className="text-center color-white" style={{ pendingTop: "30%" }}>
          Available Seats : {TicketData.ticketsAvailable}
        </h1>
        <br />
        <div className="flex">

          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Occupied</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Available</small>
            </li>

          </ul>
        </div>
        <br />
        <div className="container flex-column">
          { 
            layout.map((outerList) => ( //Generating seat layout dynamically
              <div className="row">
                {
                  outerList.map((innerList) =>
                    innerList === 0 ?
                      <div className="seat occupied flex">{count++}</div> :
                      <div className="seat flex">{count++}</div>
                  )
                }
              </div>
            ))
          }

          
        </div>
        <br /><br />
      </div>
    );
  }
};
export default AvlSeats;
