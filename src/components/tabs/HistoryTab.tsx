import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Apartment } from '@/types/apartment'
import type { Apartment } from '@/types/apartment'

export default function HistoryTab({ apartment }: { apartment: Apartment }) {
  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle>Historik</CardTitle>
        <CardDescription>
          Historisk information om lägenheten.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid gap-4">
          {apartment.tenants.map((tenant) => (
            <div key={tenant.id} className="flex items-center justify-between">
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
      </CardContent>
    </Card>
  )
}
