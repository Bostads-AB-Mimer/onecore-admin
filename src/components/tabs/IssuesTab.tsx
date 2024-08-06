import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Apartment } from '@/types/apartment'

export default function IssuesTab({ apartment }: { apartment: Apartment }) {
  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle>Ärenden</CardTitle>
        <CardDescription>
          Lista över aktuella och tidigare ärenden.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid gap-4">
          {apartment.issues.map((issue) => (
            <div key={issue.id} className="flex items-center justify-between">
              <div className="font-medium">{issue.title}</div>
              <Badge variant={issue.status === 'open' ? 'secondary' : 'outline'} className="text-xs">
                {issue.status === 'open' ? 'Öppen' : 'Stängd'}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
