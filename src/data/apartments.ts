import type { Apartment } from '@/types/apartment';

export const apartments: Apartment[] = [
  {
    id: 101,
    property: 'Fastighet 1',
    floor: 'Våning 1',
    address: 'Storgatan 1',
    city: 'Västerås',
    rooms: 3,
    bathrooms: 1,
    size: 75,
    rent: 10000,
    images: [{ id: 1, url: '/storgatan.jpg' }],
    tenants: [{
        id: 1, name: 'Alice', email: 'alice@example.com',
        leaseStart: new Date('2021-01-01'),
    },
    {
        id: 3, name: 'Charlie', email: 'charlie@example.com',
        leaseStart: new Date('2023-03-01'),
    }],
    description: 'En fin lägenhet på Storgatan 1 i Stockholm. Lägenheten har 3 rum och är 75 kvadratmeter stor. Hyran är 10000 kr per månad.',
    number: '101',
    issues: []
  },
  {
    id: 102,
    property: 'Fastighet 1',
    floor: 'Våning 2',
    address: 'Lillgatan 2',
    city: 'Västerås',
    rooms: 2,
    bathrooms: 1,
    size: 60,
    rent: 8000,
    images: [{ id: 2, url: '/lillgatan.jpg' }],
    tenants: [{
        id: 2, name: 'Bob', email: 'bob@example.com',
        leaseStart: new Date('2022-02-01'),
    }],
    description: 'En mysig lägenhet på Lillgatan 2 i Göteborg. Lägenheten har 2 rum och är 60 kvadratmeter stor. Hyran är 8000 kr per månad.',
    number: '102',
    issues: []
  }
];
