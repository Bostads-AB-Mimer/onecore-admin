'use client'

import { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import ApartmentMap from '@/components/ApartmentMap'
import type { Tenant } from '@/types/tenant'
import {
  ArrowRightIcon,
  CarIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  HomeIcon,
} from 'lucide-react'

export function TenantDetails({ tenant }: { tenant: Tenant }) {
  const [taxIncome, setTaxIncome] = useState(tenant.taxIncome)
  const [lastEmployment, setLastEmployment] = useState(tenant.lastEmployment)
  const [employer, setEmployer] = useState(tenant.employer)
  const [paymentRemarks, setPaymentRemarks] = useState(tenant.paymentRemarks)
  const [lastInvoiceStatus, setLastInvoiceStatus] = useState(
    tenant.lastInvoiceStatus
  )
  const [creditCheck, setCreditCheck] = useState(tenant.creditCheck)
  const chartData = tenant.invoices?.map((invoice) => ({
    date: new Date(invoice.date).toLocaleDateString(),
    amount: invoice.amount,
    status: invoice.status,
  }))

  const getStatusColor = (status) => {
    switch (status) {
      case 'Betald':
        return 'green'
      case 'Skickad':
        return 'black'
      case 'Obetald':
        return 'red'
      default:
        return 'gray'
    }
  }

  const PaymentChart = () => (
    <Card>
      <CardHeader>
        <CardTitle>Senaste Fakturor</CardTitle>
        <CardDescription>Belopp och betalningsstatus</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
          {chartData.map((entry, index) => (
            <Bar
              key={`bar-${index}`}
              dataKey="amount"
              fill={getStatusColor(entry.status)}
            />
          ))}
        </BarChart>
      </CardContent>
    </Card>
  )

  return (
    <div>
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
            <h1 className="text-2xl font-bold">
              {tenant.name}, {tenant.customerNumber}
            </h1>
            <p className="text-muted-foreground">
              Kundnummer: {tenant.customerNumber}
            </p>
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
                  <span className="text-muted-foreground">
                    Rensning spärr t. o. m.{' '}
                    {tenant.gdprBlocked.toISOString().split('T')[0]}
                  </span>
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
        <Tabs defaultValue="leases">
          <TabsList>
            <TabsTrigger value="leases">Hyreskontrakt</TabsTrigger>
            <TabsTrigger value="map">Karta</TabsTrigger>
            <TabsTrigger value="credit">Kreditupplysning</TabsTrigger>
          </TabsList>
          <TabsContent value="leases">
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
                            <a href={lease.pdfUrl}>Avtal.pdf</a>
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
          </TabsContent>
          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Karta</CardTitle>
              </CardHeader>
              <CardContent>
                {tenant.leases.map((lease) => (
                  <ApartmentMap
                    key={lease.id}
                    address={lease.address || 'Ingen adress'}
                    latitude={59.3293} // Exempelkoordinater, ersätt med riktiga data
                    longitude={18.0686} // Exempelkoordinater, ersätt med riktiga data
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="credit">
            <Card>
              <CardHeader>
                <CardTitle>Kreditupplysning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Taxerad lön:</p>
                    <input
                      type="text"
                      value={taxIncome}
                      onChange={(e) => setTaxIncome(e.target.value)}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Senaste anställning:</p>
                    <input
                      type="text"
                      value={lastEmployment}
                      onChange={(e) => setLastEmployment(e.target.value)}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Arbetsgivare:</p>
                    <input
                      type="text"
                      value={employer}
                      onChange={(e) => setEmployer(e.target.value)}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">
                      Eventuella betalningsanmärkningar:
                    </p>
                    <input
                      type="text"
                      value={paymentRemarks}
                      onChange={(e) => setPaymentRemarks(e.target.value)}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">
                      Senaste fakturans betalningsstatus:
                    </p>
                    <input
                      type="text"
                      value={lastInvoiceStatus}
                      onChange={(e) => setLastInvoiceStatus(e.target.value)}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                </div>
                {creditCheck && (
                  <div className="mt-6">
                    <p className="font-bold">Kreditupplysning</p>
                    <p className="text-muted-foreground">
                      Datum: {new Date(creditCheck.date).toLocaleDateString()}
                    </p>
                    <p className="text-muted-foreground">
                      Score: {creditCheck.score}
                    </p>
                    <p className="text-muted-foreground">
                      Leverantör: {creditCheck.provider}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            <PaymentChart />
          </TabsContent>
        </Tabs>
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
