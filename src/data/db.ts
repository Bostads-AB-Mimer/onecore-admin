import type { Property } from '@/types/property'
import type { Tenant } from '@/types/tenant'

const properties: Property[] = [
  {
    id: 1,
    name: 'Fastighet 1',
    address: 'Storgatan 1, Västerås',
    floors: [
      {
        id: 1,
        name: 'Våning 1',
        apartments: [
          {
            id: 101,
            status: 'Spärrad',
            propertyId: '1',
            floor: 'Våning 1',
            address: 'Storgatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 75,
            rent: 10000,
            images: [
              { id: 1, url: '/storgatan.jpg' },
              { id: 7, url: '/new-image.jpg' },
            ],
            tenants: [
              {
                id: 1,
                name: 'Anna Svensson',
                email: 'anna.svensson@example.com',
                leases: [
                  {
                    id: 1,
                    status: 'Gällande',
                    address: 'Storgatan 1, Västerås',
                    leaseStart: new Date('2021-01-01'),
                    pdfUrl: '/leases/alice_lease.pdf',
                  },
                ],

                invoices: [
                  {
                    id: 1,
                    date: '2023-08-01',
                    amount: 4500,
                    status: 'Betald',
                  },
                  {
                    id: 2,
                    date: '2023-09-01',
                    amount: 4500,
                    status: 'Obetald',
                  },
                ],
              },
            ],
            description:
              'En fin lägenhet på Storgatan 1 i Stockholm. Lägenheten har 3 rum och är 75 kvadratmeter stor. Hyran är 10000 kr per månad.',
            issues: [],
          },
          {
            id: 102,
            status: 'Spärrad',
            propertyId: '1',
            floor: 'Våning 1',
            address: 'Lillgatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 60,
            rent: 8000,
            images: [{ id: 2, url: '/lillgatan.jpg' }],
            tenants: [
              {
                id: 2,
                name: 'Björn Andersson',
                email: 'bjorn.andersson@example.com',
                leases: [
                  {
                    id: 2,
                    status: 'Gällande',
                    address: 'Lillgatan 2, Västerås',
                    leaseStart: new Date('2022-02-01'),
                    pdfUrl: '/leases/bob_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En mysig lägenhet på Lillgatan 2 i Göteborg. Lägenheten har 2 rum och är 60 kvadratmeter stor. Hyran är 8000 kr per månad.',
            issues: [],
          },
        ],
      },
      {
        id: 2,
        name: 'Våning 2',
        apartments: [
          {
            id: 201,
            status: 'Spärrad',
            propertyId: '1',
            floor: 'Våning 2',
            address: 'Storgatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 75,
            rent: 10000,
            images: [{ id: 1, url: '/storgatan.jpg' }],
            tenants: [
              {
                id: 1,
                name: 'Eva Karlsson',
                email: 'eva.karlsson@example.com',

                leases: [
                  {
                    id: 3,
                    status: 'Gällande',
                    address: 'Storgatan 1, Västerås',
                    leaseStart: new Date('2023-03-01'),
                    pdfUrl: '/leases/charlie_lease.pdf',
                  },
                ],
              },
              {
                id: 3,
                name: 'Carl Johansson',
                email: 'carl.johansson@example.com',

                leases: [
                  {
                    id: 4,
                    status: 'Gällande',
                    address: 'Kungsgatan 1, Stockholm',
                    leaseStart: new Date('2020-05-01'),
                    pdfUrl: '/leases/david_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En fin lägenhet på Storgatan 1 i Stockholm. Lägenheten har 3 rum och är 75 kvadratmeter stor. Hyran är 10000 kr per månad.',
            issues: [],
          },
          {
            id: 202,
            status: 'Ledig',
            propertyId: '1',
            floor: 'Våning 2',
            address: 'Lillgatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 60,
            rent: 8000,
            images: [{ id: 2, url: '/lillgatan.jpg' }],
            tenants: [
              {
                id: 2,
                name: 'David Eriksson',
                email: 'david.eriksson@example.com',

                leases: [
                  {
                    id: 5,
                    status: 'Gällande',
                    address: 'Vasagatan 1, Västerås',
                    leaseStart: new Date('2019-07-01'),
                    pdfUrl: '/leases/eva_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En mysig lägenhet på Lillgatan 2 i Göteborg. Lägenheten har 2 rum och är 60 kvadratmeter stor. Hyran är 8000 kr per månad.',
            issues: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Fastighet 2',
    address: 'Sveavägen 4, Västerås',
    floors: [
      {
        id: 3,
        name: 'Våning 1',
        apartments: [
          {
            id: 301,
            status: 'Uthyrd',
            propertyId: '2',
            floor: 'Våning 1',
            address: 'Kungsgatan 1',
            city: 'Stockholm',
            rooms: 4,
            bathrooms: 2,
            size: 120,
            rent: 15000,
            images: [{ id: 3, url: '/kungsgatan.jpg' }],
            tenants: [
              {
                id: 4,
                name: 'Fredrik Nilsson',
                email: 'fredrik.nilsson@example.com',

                leases: [
                  {
                    id: 1,
                    status: 'Gällande',
                    address: 'Storgatan 1, Västerås',
                    leaseStart: new Date('2021-01-01'),
                    pdfUrl: '/leases/alice_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En lyxig lägenhet på Kungsgatan 1 i Stockholm. Lägenheten har 4 rum och är 120 kvadratmeter stor. Hyran är 15000 kr per månad.',
            issues: [],
          },
          {
            id: 302,
            status: 'Ledig',
            propertyId: '2',
            floor: 'Våning 1',
            address: 'Drottninggatan 2',
            city: 'Stockholm',
            rooms: 2,
            bathrooms: 1,
            size: 65,
            rent: 9000,
            images: [{ id: 4, url: '/drottninggatan.jpg' }],
            tenants: [],
            description:
              'En modern lägenhet på Drottninggatan 2 i Stockholm. Lägenheten har 2 rum och är 65 kvadratmeter stor. Hyran är 9000 kr per månad.',
            issues: [],
          },
        ],
      },
      {
        id: 4,
        name: 'Våning 2',
        apartments: [
          {
            id: 401,
            status: 'Uthyrd',
            propertyId: '2',
            floor: 'Våning 2',
            address: 'Kungsgatan 1',
            city: 'Stockholm',
            rooms: 4,
            bathrooms: 2,
            size: 120,
            rent: 15000,
            images: [{ id: 3, url: '/kungsgatan.jpg' }],
            tenants: [
              {
                id: 4,
                name: 'Gustav Larsson',
                email: 'gustav.larsson@example.com',

                leases: [
                  {
                    id: 2,
                    status: 'Gällande',
                    address: 'Lillgatan 2, Västerås',
                    leaseStart: new Date('2022-02-01'),
                    pdfUrl: '/leases/bob_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En lyxig lägenhet på Kungsgatan 1 i Stockholm. Lägenheten har 4 rum och är 120 kvadratmeter stor. Hyran är 15000 kr per månad.',
            issues: [],
          },
          {
            id: 402,
            status: 'Ledig',
            propertyId: '2',
            floor: 'Våning 2',
            address: 'Drottninggatan 2',
            city: 'Stockholm',
            rooms: 2,
            bathrooms: 1,
            size: 65,
            rent: 9000,
            images: [{ id: 4, url: '/drottninggatan.jpg' }],
            tenants: [],
            description:
              'En modern lägenhet på Drottninggatan 2 i Stockholm. Lägenheten har 2 rum och är 65 kvadratmeter stor. Hyran är 9000 kr per månad.',
            issues: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Fastighet 3',
    floors: [
      {
        id: 5,
        name: 'Våning 1',
        apartments: [
          {
            id: 501,
            status: 'Uthyrd',
            propertyId: '3',
            floor: 'Våning 1',
            address: 'Vasagatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 85,
            rent: 11000,
            images: [{ id: 5, url: '/vasagatan.jpg' }],
            tenants: [
              {
                id: 5,
                name: 'Hanna Persson',
                email: 'hanna.persson@example.com',
                leaseStart: new Date('2019-07-01'),
              },
            ],
            description:
              'En rymlig lägenhet på Vasagatan 1 i Västerås. Lägenheten har 3 rum och är 85 kvadratmeter stor. Hyran är 11000 kr per månad.',
            issues: [],
          },
          {
            id: 502,
            status: 'Ledig',
            propertyId: '3',
            floor: 'Våning 1',
            address: 'Östergatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 70,
            rent: 8500,
            images: [{ id: 6, url: '/ostergatan.jpg' }],
            tenants: [],
            description:
              'En charmig lägenhet på Östergatan 2 i Västerås. Lägenheten har 2 rum och är 70 kvadratmeter stor. Hyran är 8500 kr per månad.',
            issues: [],
          },
        ],
      },
      {
        id: 6,
        name: 'Våning 2',
        apartments: [
          {
            id: 601,
            status: 'Uthyrd',
            propertyId: '3',
            floor: 'Våning 2',
            address: 'Vasagatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 85,
            rent: 11000,
            images: [{ id: 5, url: '/vasagatan.jpg' }],
            tenants: [
              {
                id: 5,
                name: 'Ingrid Olsson',
                email: 'ingrid.olsson@example.com',

                leases: [
                  {
                    id: 3,
                    status: 'Gällande',
                    address: 'Storgatan 1, Västerås',
                    leaseStart: new Date('2023-03-01'),
                    pdfUrl: '/leases/charlie_lease.pdf',
                  },
                ],
              },
            ],
            description:
              'En rymlig lägenhet på Vasagatan 1 i Västerås. Lägenheten har 3 rum och är 85 kvadratmeter stor. Hyran är 11000 kr per månad.',
            issues: [],
          },
          {
            id: 602,
            status: 'Ledig',
            propertyId: '3',
            floor: 'Våning 2',
            address: 'Östergatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 70,
            rent: 8500,
            images: [{ id: 6, url: '/ostergatan.jpg' }],
            tenants: [],
            description:
              'En charmig lägenhet på Östergatan 2 i Västerås. Lägenheten har 2 rum och är 70 kvadratmeter stor. Hyran är 8500 kr per månad.',
            issues: [],
          },
        ],
      },
    ],
    address: 'Östergatan 2, Västerås',
  },
]

export function getProperties() {
  return properties;
}
  // Mocked data structure similar to the Prisma query result
  const realEstateStructure = [
    {
      propertyName: 'Fastighet 1',
      propertyCode: '1',
      buildingCode: '807-030',
      buildingName: 'Byggnad 1',
      component: [
        { code: 'A101', name: 'Lägenhet 101' },
        { code: 'A102', name: 'Lägenhet 102' },
      ],
    },
    {
      propertyName: 'Fastighet 2',
      propertyCode: '2',
      buildingCode: '807-031',
      buildingName: 'Byggnad 2',
      component: [
        { code: 'B201', name: 'Lägenhet 201' },
        { code: 'B202', name: 'Lägenhet 202' },
      ],
    },
  ];

  return realEstateStructure.filter(
    (structure) => structure.propertyCode === propertyCode
  );
}

export function getProperty(id: number) {
  return properties.find((property) => property.id === id)
}

export function getApartments(propertyId?: number) {
  if (propertyId !== undefined) {
    const property = properties.find((p) => p.id === propertyId)
    if (property) {
      return property.floors.flatMap((floor) => floor.apartments)
    } else {
      return []
    }
  }
  return properties.flatMap((property) =>
    property.floors.flatMap((floor) => floor.apartments)
  )
}

export function getApartment(id: number) {
  return getApartments().find((apartment) => apartment.id === id)
}

export function getTenant(id: number): Tenant | undefined {
  return getTenants().find((tenant) => tenant.id === id)
}

export function getTenants(): Tenant[] {
  return properties.flatMap((property) =>
    property.floors.flatMap((floor) =>
      floor.apartments.flatMap((apartment) => apartment.tenants)
    )
  )
}
