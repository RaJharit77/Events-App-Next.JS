import { prisma } from '@/lib/prisma';

export async function GET() {
    const events = await prisma.event.findMany();
    return new Response(JSON.stringify(events), {status: 200});
}
