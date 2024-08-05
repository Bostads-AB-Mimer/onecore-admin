import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
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
import { CopyIcon, FileIcon, MoveVerticalIcon } from 'lucide-react'
import type { Apartment } from '@/types/apartment'

export default function ApartmentDetails({
  apartment,
}: {
  apartment: Apartment
}) {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-3">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>Lägenhet {apartment.number}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {apartment.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="sm:col-span-1 p-6" x-chunk="dashboard-05-chunk-0">
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
                    <div>12 000 kr/månad</div>
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
                    Hyresavtal utgår: 31/12/2023
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
      <div>
        <Card
          className="overflow-hidden lg:col-span-2"
          x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Lägenhet 101
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <CopyIcon className="h-3 w-3" />
                  <span className="sr-only">Kopiera Lägenhetsnummer</span>
                </Button>
              </CardTitle>
              <CardDescription>Acme Lägenheter</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <FileIcon className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Visa Problem
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoveVerticalIcon className="h-3.5 w-3.5" />
                    <span className="sr-only">Mer</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Redigera</DropdownMenuItem>
                  <DropdownMenuItem>Hyresgäster</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Ta bort</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Lägenhetsinformation</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Adress</span>
                  <span>Huvudgatan 123, Västerås</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Storlek</span>
                  <span>111 m²</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sovrum</span>
                  <span>2</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Badrum</span>
                  <span>1.5</span>
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
      </div>
    </>
  )
}
