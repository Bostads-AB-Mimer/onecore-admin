import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import type { Apartment } from '@/types/apartment'
import ApartmentInfoTab from './tabs/ApartmentInfoTab'
import IssuesTab from './tabs/IssuesTab'
import EconomyTab from './tabs/EconomyTab'
import HistoryTab from './tabs/HistoryTab'

export default function ApartmentDetails({
  apartment,
}: {
  apartment: Apartment
}) {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Lägenhet {apartment.number}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed text-foreground">
              {apartment.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
        <Tabs defaultValue="apartmentInfo">
          <TabsList>
            <TabsTrigger value="apartmentInfo">
              Lägenhetsinformation
            </TabsTrigger>
            <TabsTrigger value="economy">Ekonomi</TabsTrigger>
            <TabsTrigger value="history">Historik</TabsTrigger>
            <TabsTrigger value="issues">Ärenden</TabsTrigger>
          </TabsList>
          <TabsContent value="apartmentInfo">
            <ApartmentInfoTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="issues">
            <IssuesTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="economy">
            <EconomyTab apartment={apartment} />
          </TabsContent>
          <TabsContent value="history">
            <HistoryTab apartment={apartment} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
