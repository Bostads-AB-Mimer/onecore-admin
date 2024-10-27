import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma' // Adjust the import path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
        buildingCode: '807-030', // Justera efter specifika fastighetskriterier
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
