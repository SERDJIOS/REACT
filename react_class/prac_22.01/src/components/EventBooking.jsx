import EventDetails from './EventDetails';
import SeatSelector from './SeatSelector';
import { useState } from 'react';
export default function EventBooking() {
    const [isBooked, setIsBooked] = useState([])
    const seats = [
        { id: 1, label: "1A" },
        { id: 2, label: "1B" },
        { id: 3, label: "1C" },
        { id: 4, label: "1D" },
        { id: 5, label: "1E" },
        { id: 6, label: "1F" },
        { id: 7, label: "1G" },
    ];
    function handleBookSeat(seat) {
        if (isBooked.includes(seat)) {
            setIsBooked(isBooked.filter((s) => s !== seat));
        } else {
            setIsBooked([...isBooked, seat]);
        }
    }
    return (
        <div>
         
            <EventDetails />
            <SeatSelector seats={seats}/>
            <p>Selected seats: {isBooked.map((seat) => seat.label).join(", ")}</p>
            <button onClick={() => console.log(isBooked)}>Booked Seats</button>
            
        </div>
    );
}
