import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import type { Apartment } from '@/types/apartment'

export default function ApartmentInfoTab({
  apartment,
}: {
  apartment: Apartment
}) {
  const [apartmentStatus, setApartmentStatus] = useState(apartment.status)

  const handleBlockApartment = () => {
    setApartmentStatus('Spärrad')
    setApartmentStatus('Spärrad')
  }

  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle>Lägenhetsinformation</CardTitle>
        <CardDescription>Detaljerad information om lägenheten.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
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
        <div className="flex items-center space-x-2 mt-4">
          <Switch
            id="block-apartment"
            checked={apartmentStatus === 'Spärrad'}
            onCheckedChange={(checked) => setApartmentStatus(checked ? 'Spärrad' : 'Ej Spärrad')}
          />
          <Label htmlFor="block-apartment">
            {apartmentStatus === 'Spärrad' ? 'Spärrad' : 'Ej Spärrad'}
          </Label>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Hyresgästinformation</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className={cn('text-muted')} />
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}
