import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const { eventId, userId } = await req.json();
    const reservation = await prisma.reservation.create({
        data: { 
            eventId, 
            userId, 
            User: { connect: { id: userId } },
            Event: { connect: { id: eventId } }
        },
    });
    return new Response(JSON.stringify(reservation));
}
