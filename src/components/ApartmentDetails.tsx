import { useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { UserIcon } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import type { Apartment } from '@/types/apartment'
import ApartmentInfoTab from './tabs/ApartmentInfoTab'
import IssuesTab from './tabs/IssuesTab'
import EconomyTab from './tabs/EconomyTab'
import HistoryTab from './tabs/HistoryTab'
import { cn } from '@/lib/utils'

export default function ApartmentDetails({
  apartment,
}: {
  apartment: Apartment
}) {
  const tenant = apartment.tenants.length > 0 ? apartment.tenants[0] : null // Hantera fallet där det inte finns några hyresgäster

  return (
    <div className="">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Hem</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/properties">Fastigheter</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/area/${apartment.city}`}>
              {apartment.city}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/properties/${apartment.propertyId}/${apartment.address}`}
            >
              {apartment.address}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{apartment.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2">
          <div className="text-xl font-bold mb-2">
            {apartment.rooms} rum och kök, {apartment.id}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <UserIcon className="h-4 w-4" />
            <span>Bostadslägenhet</span>
          </div>
          <div className="flex gap-4">
            <div>{apartment.size} m²</div>
            <div>{apartment.rent} kr/månad</div>
          </div>
        </div>
        <Card className="p-4">
          {tenant && (
            <>
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">{tenant.name}</div>
                <a href={`/tenants/${tenant.id}`} className="text-blue-600">
                  Gå till kund
                </a>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                Nyttjare / Gällande kontrakt
              </div>
              <div className="text-sm mb-2">ID: {tenant.id}</div>
              <div className="text-sm mb-2">{tenant.email}</div>
              <div className="text-sm mb-2">
                {new Date(tenant.leases[0]?.leaseStart).toLocaleDateString()} -{' '}
                {tenant.leases[0]?.leaseEnd
                  ? new Date(tenant.leases[0]?.leaseEnd).toLocaleDateString()
                  : 'Pågående'}
              </div>
              <button className="mt-2 border rounded-md px-4 py-1">
                Förvaltare
              </button>
            </>
          )}
        </Card>
      </div>

      <div className="p-4 bg-white rounded-md shadow-sm">
        <Tabs defaultValue="apartmentInfo" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="apartmentInfo">
              Lägenhetsinformation
            </TabsTrigger>
            <TabsTrigger value="economy">Ekonomi</TabsTrigger>
            <TabsTrigger value="history">Historik</TabsTrigger>
            <TabsTrigger value="issues">Ärenden</TabsTrigger>
          </TabsList>
          <TabsContent value="apartmentInfo">
            <ApartmentInfoTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="issues">
            <IssuesTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="economy">
            <EconomyTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="history">
            <HistoryTab apartment={apartment} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
