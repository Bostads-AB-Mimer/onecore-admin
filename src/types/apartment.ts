export type Apartment = {
  id: number
  number: string
  city: string
  address: string
  size: number
  rooms: number
  bathrooms: number
  rent: number
  description: string
  images: {
    id: number
    url: string
  }[]
  leaseEndDate: Date
  issues: {
    id: number
    title: string
    status: 'open' | 'closed'
  }[]
  tenants: {
    id: number
    name: string
    email: string
    leaseStart: Date
    leaseEnd?: Date
  }[]
}
