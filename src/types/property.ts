import type { Apartment } from './apartment'

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
