import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import ApartmentMap from '@/components/ApartmentMap';
import type { Tenant } from '@/types/tenant'

export function TenantDetails({ tenant }: { tenant: Tenant }) {
  return (
    <div className="p-6">
      <header className="flex items-center justify-between border-b pb-4 mb-6">
        <nav className="flex gap-6">
          <a href="#" className="text-lg font-medium">
            Översikt
          </a>
          <a href="#" className="text-lg font-medium">
            Kösystem
          </a>
          <a href="#" className="text-lg font-medium">
            Ekonomi
          </a>
        </nav>
      </header>
      <section className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-muted-foreground">{tenant.id}</p>
            <h1 className="text-2xl font-bold">{tenant.name}, {tenant.customerNumber}</h1>
            <p className="text-muted-foreground">Kundnummer: {tenant.customerNumber}</p>
            <p className="text-muted-foreground">
              Senaste inloggning på mina sidor: {tenant.lastLogin}
            </p>
            <div className="mt-4">
              {tenant.gdprBlocked && (
                <Badge variant="default" className="ml-2">
                  Spärrad från GDPR rensning: Ja
                </Badge>
              )}
              {tenant.phoneNumber && (
                <Badge variant="default" className="ml-2">
                  Telefon: {tenant.phoneNumber}
                </Badge>
              )}
              {tenant.email && (
                <Badge variant="default" className="ml-2">
                  Email: {tenant.email}
                </Badge>
              )}
            </div>
            <div className="mt-6">
              <p className="font-bold">GDPR</p>
              <p className="text-muted-foreground">
                Spärrad från GDPR rensning: {tenant.gdprBlocked ? 'Ja' : 'Nej'}
              {tenant.gdprBlocked && (
                <p className="text-muted-foreground">
                  Rensning spärr t. o. m. {tenant.gdprBlocked.toISOString().split('T')[0]}
                </p>
              )}
              </p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <p className="font-bold">Kontaktuppgifter</p>
            <p className="mt-2">{tenant.phoneNumber}</p>
            <p className="mt-2">{tenant.email}</p>
            <Button variant="outline" className="mt-4">
              Föredraget kontaktsätt
            </Button>
            <Button variant="default" className="mt-4">
              Ändra kundinformation i CRM{' '}
              <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 bg-muted p-4 rounded-md">
          <p>2023-09-31 4500 kr</p>
          <Button variant="default">
            Förfallen <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Hyreskontrakt</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Adress</TableHead>
                  <TableHead />
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenant.leases.map((lease) => (
                  <TableRow key={lease.id}>
                    <TableCell>
                      <ApartmentMap
                        address={lease.address || 'Ingen adress'}
                        latitude={59.3293}  // Exempelkoordinater, ersätt med riktiga data
                        longitude={18.0686} // Exempelkoordinater, ersätt med riktiga data
                      />
                      {lease.status === 'Gällande' ? (
                        <HomeIcon className="h-4 w-4" />
                      ) : (
                        <CarIcon className="h-4 w-4" />
                      )}{' '}
                      {lease.status}
                    </TableCell>
                    <TableCell>{lease.address}</TableCell>
                    <TableCell>
                      {lease.pdfUrl ? (
                        <a href={lease.pdfUrl}>
                          Avtal.pdf
                        </a>
                      ) : (
                        'Ingen PDF'
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline">
                        Till hyressystem{' '}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Felanmälningar</CardTitle>
            <Select>
              <SelectTrigger className="text-muted-foreground">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Datum</TableHead>
                  <TableHead>Plats</TableHead>
                  <TableHead>Beskrivning</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rapporterad av</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenant.issues?.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell>{issue.date}</TableCell>
                    <TableCell>{issue.room}</TableCell>
                    <TableCell>{issue.description}</TableCell>
                    <TableCell>Påbörjad</TableCell>
                    <TableCell>av AIC439 – Tobias Mattson</TableCell>
                    <TableCell>
                      <Button variant="outline">
                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ExternalLinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
