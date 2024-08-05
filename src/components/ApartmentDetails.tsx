import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Apartment } from '@/types/apartment'
import { Label } from '@radix-ui/react-dropdown-menu'

export default function ApartmentDetails({
  apartment,
}: {
  apartment: Apartment
}) {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>Lägenhet {apartment.number}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed text-foreground">
              {apartment.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 lg:gap-x-6">
        <Card className="w-full" x-chunk="dashboard-05-chunk-4">
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Lägenhetsinformation</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <Label>Adress</Label>
                  <span>
                    {apartment.address}, {apartment.city}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <Label>Storlek</Label>
                  <span>{apartment.size} m²</span>
                </li>
                <li className="flex items-center justify-between">
                  <Label>Sovrum</Label>
                  <span>{apartment.rooms}</span>
                </li>
                <li className="flex items-center justify-between">
                  <Label>Badrum</Label>
                  <span>{apartment.bathrooms}</span>
                </li>
                <li className="flex items-center justify-between">
                  <Label>Hyra</Label>
                  <span>{apartment.rent} kr/månad</span>
                </li>
                <li className="flex items-center justify-between">
                  <Label>Deposition</Label>
                  <span>20 000 kr</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Hyresgästinformation</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted" />
                </div>
              </dl>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full p-6" x-chunk="dashboard-05-chunk-0">
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Detaljer</TabsTrigger>
              <TabsTrigger value="issues">Ärenden</TabsTrigger>
              <TabsTrigger value="tenants">Hyresgäster</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <div className="grid gap-4 p-5">
                <div className="grid grid-cols-2 gap-4 lg:gap-x-6">
                  <div>
                    <Label>Adress</Label>
                    <div>
                      {apartment.address}, {apartment.city}
                    </div>
                  </div>
                  <div>
                    <Label>Storlek</Label>
                    <div>{apartment.size} m²</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-x-6">
                  <div>
                    <Label>Antal rum</Label>
                    <div>{apartment.rooms}</div>
                  </div>
                  <div>
                    <Label>Antal badrum</Label>
                    <div>{apartment.bathrooms}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-x-6">
                  <div>
                    <Label>Hyra</Label>
                    <div>{apartment.rent} kr/månad</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Deposition
                    </div>
                    <div>20 000 kr</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="issues">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Läckande kran</div>
                  <Badge variant="secondary" className="text-xs">
                    Öppen
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Trasigt fönster</div>
                  <Badge variant="secondary" className="text-xs">
                    Öppen
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Igensatt avlopp</div>
                  <Badge variant="outline" className="text-xs">
                    Stängd
                  </Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tenants">
              <div className="grid gap-4">
                {apartment.tenants.map((tenant) => (
                  <div
                    key={tenant.id}
                    className="flex items-center justify-between"
                  >
                    <div className="font-medium">{tenant.name}</div>
                    <div className="text-sm text-muted">
                      Hyresavtal utgår:{' '}
                      {tenant.leaseEnd
                        ? new Date(tenant.leaseEnd).toLocaleDateString('sv-SE')
                        : 'Ingen slutdatum'}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </>
  )
}
