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
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {apartment.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2">
        <Card className="w-full" x-chunk="dashboard-05-chunk-4">
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Lägenhetsinformation</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Adress</span>
                  <span>
                    {apartment.address}, {apartment.city}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Storlek</span>
                  <span>{apartment.size} m²</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sovrum</span>
                  <span>{apartment.rooms}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Badrum</span>
                  <span>{apartment.bathrooms}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Hyra</span>
                  <span>12 000 kr/månad</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Deposition</span>
                  <span>20 000 kr</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Hyresgästinformation</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-m" />
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Adress
                    </div>
                    <div>
                      {apartment.address}, {apartment.city}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Storlek
                    </div>
                    <div>{apartment.size} m²</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Antal rum
                    </div>
                    <div>{apartment.rooms}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Antal badrum
                    </div>
                    <div>{apartment.bathrooms}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Hyra
                    </div>
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
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Hyresavtal utgår: 30/06/2024
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">
                    Hyresavtal utgår: {new Date(apartment.tenants.find(tenant => tenant.name === "Jane Smith")?.leaseEnd || apartment.leaseEndDate).toLocaleDateString('sv-SE')}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </>
  )
}
