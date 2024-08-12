/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZE12fYoVBat
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  BuildingIcon,
  CircleUserIcon,
  MenuIcon,
  Package2Icon,
  SearchIcon,
  UsersIcon,
  WrenchIcon,
  HomeIcon,
  ArrowUpRightIcon,
} from 'lucide-react'
import { getApartments } from '@/data/db'

export function Statistics() {
  const blockedApartments = getApartments().filter(
    (apartment) => apartment.status === 'Spärrad'
  )

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Totalt antal lägenheter
              </CardTitle>
              <BuildingIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +20.1% från förra månaden
              </p>
              <Button asChild size="sm" className="mt-2">
                <a href="/apartments/latest">Visa senaste lägenheten</a>
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Uthyrda lägenheter
              </CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,050</div>
              <p className="text-xs text-muted-foreground">
                +180.1% från förra månaden
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vakanser</CardTitle>
              <HomeIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">184</div>
              <p className="text-xs text-muted-foreground">
                +19% från förra månaden
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3" className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Spärrade lägenheter
              </CardTitle>
              <HomeIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50</div>
              <p className="text-xs text-muted-foreground">
                +5% från förra månaden
              </p>
              <div className="grid gap-8 mt-4">
                {blockedApartments.map((apartment) => (
                  <div key={apartment.id} className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>
                        {apartment.tenants[0]?.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">
                        {apartment.tenants[0]?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {apartment.tenants[0]?.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
                      <a href={`/apartments/${apartment.propertyId}-${apartment.id}`} className="text-blue-500 hover:underline">
                        {apartment.address}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Underhållsförfrågningar
              </CardTitle>
              <WrenchIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">
                +201 sedan förra timmen
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Senaste lägenhetsannonser i Västerås</CardTitle>
                <CardDescription>
                  Nya lägenhetsannonser som har lagts till på plattformen.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  Visa alla
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lägenhet</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Typ
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Annonserad
                    </TableHead>
                    <TableHead className="text-right">Hyra</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">123 Huvudgatan</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        2 rum, 1 bad
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Lägenhet
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Ledig
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">15 000 kr/mån</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">456 Ekvägen</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        3 rum, 2 bad
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Radhus
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Reserverad
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">22 000 kr/mån</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">789 Elmgatan</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        1 rum, 1 bad
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Lägenhet
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Ledig
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">12 000 kr/mån</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">321 Tallgatan</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        2 rum, 1.5 bad
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Radhus
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Ledig
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">18 000 kr/mån</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">159 Lönnvägen</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        3 rum, 2 bad
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Lägenhet
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Reserverad
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">25 000 kr/mån</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Senaste hyresgästanmälningar i Västerås</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">Lägenhet 123</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">Radhus 456</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Ingrid Nilsson
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
