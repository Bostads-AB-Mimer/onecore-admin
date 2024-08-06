import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Apartment } from '@/types/apartment'

export default function EconomyTab({ apartment }: { apartment: Apartment }) {
  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle>Ekonomi</CardTitle>
        <CardDescription>
          Ekonomisk information om lägenheten.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid gap-3">
          <div className="font-semibold">Hyra och deposition</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span>Hyra</span>
              <span>{apartment.rent} kr/månad</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Deposition</span>
              <span>20 000 kr</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
