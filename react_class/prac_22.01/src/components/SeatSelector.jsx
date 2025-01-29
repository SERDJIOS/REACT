export default function SeatSelector({seats}) {
    return (
        <div>
            {seats.map((seat) => (
                <button key={seat.id}>{seat.label}</button>
            ))}
        </div>
    )
}