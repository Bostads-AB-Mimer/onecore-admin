export type Property = {
  id: number;
  name: string;
  floors: Floor[];
};

export type Floor = {
  id: number;
  name: string;
  apartments: Apartment[];
};

export type Apartment = {
  id: number;
  number: string;
  status: string;
  property: string;
  floor: string;
  address: string;
  city: string;
  rooms: number;
  bathrooms: number;
  size: number;
  rent: number;
  images: { id: number; url: string }[];
  tenants: { id: number; name: string; email: string; leaseStart: Date }[];
  description: string;
  issues: any[];
};

const properties: Property[] = [
  {
    id: 1,
    name: 'Fastighet 1',
    floors: [
      {
        id: 1,
        name: 'Våning 1',
        apartments: [
          {
            id: 101,
            number: '101',
            status: 'Uthyrd',
            property: 'Fastighet 1',
            floor: 'Våning 1',
            address: 'Storgatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 75,
            rent: 10000,
            images: [{ id: 1, url: '/storgatan.jpg' }],
            tenants: [
              { id: 1, name: 'Alice', email: 'alice@example.com', leaseStart: new Date('2021-01-01') },
              { id: 3, name: 'Charlie', email: 'charlie@example.com', leaseStart: new Date('2023-03-01') },
            ],
            description: 'En fin lägenhet på Storgatan 1 i Stockholm. Lägenheten har 3 rum och är 75 kvadratmeter stor. Hyran är 10000 kr per månad.',
            issues: [],
          },
          {
            id: 102,
            number: '102',
            status: 'Ledig',
            property: 'Fastighet 1',
            floor: 'Våning 1',
            address: 'Lillgatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 60,
            rent: 8000,
            images: [{ id: 2, url: '/lillgatan.jpg' }],
            tenants: [
              { id: 2, name: 'Bob', email: 'bob@example.com', leaseStart: new Date('2022-02-01') },
            ],
            description: 'En mysig lägenhet på Lillgatan 2 i Göteborg. Lägenheten har 2 rum och är 60 kvadratmeter stor. Hyran är 8000 kr per månad.',
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
            number: '201',
            status: 'Uthyrd',
            property: 'Fastighet 1',
            floor: 'Våning 2',
            address: 'Storgatan 1',
            city: 'Västerås',
            rooms: 3,
            bathrooms: 1,
            size: 75,
            rent: 10000,
            images: [{ id: 1, url: '/storgatan.jpg' }],
            tenants: [
              { id: 1, name: 'Alice', email: 'alice@example.com', leaseStart: new Date('2021-01-01') },
              { id: 3, name: 'Charlie', email: 'charlie@example.com', leaseStart: new Date('2023-03-01') },
            ],
            description: 'En fin lägenhet på Storgatan 1 i Stockholm. Lägenheten har 3 rum och är 75 kvadratmeter stor. Hyran är 10000 kr per månad.',
            issues: [],
          },
          {
            id: 202,
            number: '202',
            status: 'Ledig',
            property: 'Fastighet 1',
            floor: 'Våning 2',
            address: 'Lillgatan 2',
            city: 'Västerås',
            rooms: 2,
            bathrooms: 1,
            size: 60,
            rent: 8000,
            images: [{ id: 2, url: '/lillgatan.jpg' }],
            tenants: [
              { id: 2, name: 'Bob', email: 'bob@example.com', leaseStart: new Date('2022-02-01') },
            ],
            description: 'En mysig lägenhet på Lillgatan 2 i Göteborg. Lägenheten har 2 rum och är 60 kvadratmeter stor. Hyran är 8000 kr per månad.',
            issues: [],
          },
        ],
      },
    ],
  },
];

export function getProperties() {
  return properties;
}

export function getApartments() {
  return properties.flatMap(property => property.floors.flatMap(floor => floor.apartments));
}

export function searchApartments(query: string) {
  const lowerCaseQuery = query.toLowerCase();
  return getApartments().filter(apartment => 
    apartment.address.toLowerCase().includes(lowerCaseQuery) ||
    apartment.city.toLowerCase().includes(lowerCaseQuery) ||
    apartment.number.includes(query)
  );
}
