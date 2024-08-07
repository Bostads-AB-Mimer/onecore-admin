export type Tenant = {
  id: number
  name: string
  customerNumber: string
  lastLogin: string
  gdprBlocked: Date | null
  phoneNumber: string
  email: string
  leases: {
    id: number
    status: 'Gällande' | 'Uppsagt'
    address: string
    leaseStart: Date
    leaseEnd?: Date
    pdfUrl: string
  }[]
  issues: {
    id: number
    date: string
    room: string
    description: string
  }[]
}
