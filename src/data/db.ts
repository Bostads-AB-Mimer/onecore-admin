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
  {
    id: 2,
    name: 'Fastighet 2',
    floors: [
      {
        id: 3,
        name: 'Våning 1',
        apartments: [
          {
            id: 301,
            number: '301',
            status: 'Uthyrd',
            property: 'Fastighet 2',
            floor: 'Våning 1',
            address: 'Kungsgatan 1',
            city: 'Stockholm',
            rooms: 4,
            bathrooms: 2,
            size: 120,
            rent: 15000,
            images: [{ id: 3, url: '/kungsgatan.jpg' }],
            tenants: [
              { id: 4, name: 'David', email: 'david@example.com', leaseStart: new Date('2020-05-01') },
            ],
            description: 'En lyxig lägenhet på Kungsgatan 1 i Stockholm. Lägenheten har 4 rum och är 120 kvadratmeter stor. Hyran är 15000 kr per månad.',
            issues: [],
          },
          {
            id: 302,
            number: '302',
            status: 'Ledig',
            property: 'Fastighet 2',
            floor: 'Våning 1',
            address: 'Drottninggatan 2',
            city: 'Stockholm',
            rooms: 2,
            bathrooms: 1,
            size: 65,
            rent: 9000,
            images: [{ id: 4, url: '/drottninggatan.jpg' }],
            tenants: [],
            description: 'En modern lägenhet på Drottninggatan 2 i Stockholm. Lägenheten har 2 rum och är 65 kvadratmeter stor. Hyran är 9000 kr per månad.',
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
            number: '401',
            status: 'Uthyrd',
            property: 'Fastighet 2',
            floor: 'Våning 2',
            address: 'Kungsgatan 1',
            city: 'Stockholm',
            rooms: 4,
            bathrooms: 2,
            size: 120,
            rent: 15000,
            images: [{ id: 3, url: '/kungsgatan.jpg' }],
            tenants: [
              { id: 4, name: 'David', email: 'david@example.com', leaseStart: new Date('2020-05-01') },
            ],
            description: 'En lyxig lägenhet på Kungsgatan 1 i Stockholm. Lägenheten har 4 rum och är 120 kvadratmeter stor. Hyran är 15000 kr per månad.',
            issues: [],
          },
          {
            id: 402,
            number: '402',
            status: 'Ledig',
            property: 'Fastighet 2',
            floor: 'Våning 2',
            address: 'Drottninggatan 2',
            city: 'Stockholm',
            rooms: 2,
            bathrooms: 1,
            size: 65,
            rent: 9000,
            images: [{ id: 4, url: '/drottninggatan.jpg' }],
            tenants: [],
            description: 'En modern lägenhet på Drottninggatan 2 i Stockholm. Lägenheten har 2 rum och är 65 kvadratmeter stor. Hyran är 9000 kr per månad.',
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
            number: '501',
            status: 'Uthyrd',
            property: 'Fastighet 3',
            floor: 'Våning 1',
            address: 'Vasagatan 1',
            city: 'Malmö',
            rooms: 3,
            bathrooms: 1,
            size: 85,
            rent: 11000,
            images: [{ id: 5, url: '/vasagatan.jpg' }],
            tenants: [
              { id: 5, name: 'Eva', email: 'eva@example.com', leaseStart: new Date('2019-07-01') },
            ],
            description: 'En rymlig lägenhet på Vasagatan 1 i Malmö. Lägenheten har 3 rum och är 85 kvadratmeter stor. Hyran är 11000 kr per månad.',
            issues: [],
          },
          {
            id: 502,
            number: '502',
            status: 'Ledig',
            property: 'Fastighet 3',
            floor: 'Våning 1',
            address: 'Östergatan 2',
            city: 'Malmö',
            rooms: 2,
            bathrooms: 1,
            size: 70,
            rent: 8500,
            images: [{ id: 6, url: '/ostergatan.jpg' }],
            tenants: [],
            description: 'En charmig lägenhet på Östergatan 2 i Malmö. Lägenheten har 2 rum och är 70 kvadratmeter stor. Hyran är 8500 kr per månad.',
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
            number: '601',
            status: 'Uthyrd',
            property: 'Fastighet 3',
            floor: 'Våning 2',
            address: 'Vasagatan 1',
            city: 'Malmö',
            rooms: 3,
            bathrooms: 1,
            size: 85,
            rent: 11000,
            images: [{ id: 5, url: '/vasagatan.jpg' }],
            tenants: [
              { id: 5, name: 'Eva', email: 'eva@example.com', leaseStart: new Date('2019-07-01') },
            ],
            description: 'En rymlig lägenhet på Vasagatan 1 i Malmö. Lägenheten har 3 rum och är 85 kvadratmeter stor. Hyran är 11000 kr per månad.',
            issues: [],
          },
          {
            id: 602,
            number: '602',
            status: 'Ledig',
            property: 'Fastighet 3',
            floor: 'Våning 2',
            address: 'Östergatan 2',
            city: 'Malmö',
            rooms: 2,
            bathrooms: 1,
            size: 70,
            rent: 8500,
            images: [{ id: 6, url: '/ostergatan.jpg' }],
            tenants: [],
            description: 'En charmig lägenhet på Östergatan 2 i Malmö. Lägenheten har 2 rum och är 70 kvadratmeter stor. Hyran är 8500 kr per månad.',
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

export function getApartments(propertyId?: number) {
  if (propertyId !== undefined) {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
      return property.floors.flatMap(floor => floor.apartments);
    } else {
      return [];
    }
  }
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
