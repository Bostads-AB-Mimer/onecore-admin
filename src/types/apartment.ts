import type { Tenant } from './tenant'

export type Apartment = {
  id: number
  propertyId: string
  floor: string
  city: string
  address: string
  status: 'Ledig' | 'Uthyrd'
  size: number
  rooms: number
  bathrooms: number
  rent: number
  description: string
  images: {
    id: number
    url: string
  }[]
  leaseEndDate?: Date
  issues: {
    id: number
    title: string
    status: 'open' | 'closed'
  }[]
  tenants: Tenant[]
}
