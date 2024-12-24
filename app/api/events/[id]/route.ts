import { prisma } from "@/lib/prisma";

export async function GET(req: { query: { id: any; }; }) {
    const { id } = req.query;
    const event = await prisma.event.findUnique({ where: { id: Number(id) } });
    return new Response(JSON.stringify(event), { status: 200 });
}
