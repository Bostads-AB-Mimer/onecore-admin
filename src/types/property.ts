export type Property = {
  id: number
  name: string
  address: string
  floors: Floor[]
}

export type Floor = {
  id: number
  name: string
  apartments: Apartment[]
}

export type Apartment = {
  id: number
  status: string
  propertyId: string
  floor: string
  address: string
  city: string
  rooms: number
  bathrooms: number
  size: number
  rent: number
  images: { id: number; url: string }[]
  tenants: { id: number; name: string; email: string; leaseStart: Date }[]
  description: string
  issues: any[]
}
