"use client";

import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";

const Events = () => {
    const [events, setEvents] = useState<
        { id: string; title: string; description: string; date: string; location: string }[]
    >([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch("/api/events");
            const data = await response.json();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
