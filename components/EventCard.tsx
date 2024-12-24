interface Event {
    title: string;
    description: string;
    date: string;
    location: string;
}

const EventCard = ({ event }: { event: Event }) => (
    <div className="border rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p>{event.description}</p>
        <p>{new Date(event.date).toLocaleString()}</p>
        <p>{event.location}</p>
    </div>
);

export default EventCard;
