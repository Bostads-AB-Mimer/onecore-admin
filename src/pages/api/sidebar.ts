import { APIRoute } from 'astro'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const get: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const propertyCode = url.searchParams.get('propertyCode');

    if (!propertyCode) {
      return new Response(JSON.stringify({ error: 'propertyCode is required' }), { status: 400 });
    }

    const result = await prisma.realEstateStructure.findMany({
      select: {
        propertyName: true,
        propertyCode: true,
        buildingCode: true,
        buildingName: true,
        component: {
          select: {
            code: true, // Lägenhetskoden
            name: true, // Lägenhetsnamnet eller beskrivningen
          },
        },
      },
      where: {
        propertyCode, // Use the propertyCode from the request
      },
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
