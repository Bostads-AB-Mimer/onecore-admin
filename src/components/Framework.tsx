import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  PanelLeftIcon,
  BuildingIcon,
  HomeIcon,
  LayoutPanelLeftIcon,
} from 'lucide-react'

export default function Framework({ children, selectedApartment }) {
  return (
    <div className={cn('flex min-h-screen w-full flex-col bg-gray-200')}>
      <Sidebar selectedApartment={selectedApartment} />
      <Header />
      <div
        className={cn(
          'flex flex-col sm:gap-4 sm:py-4 sm:pl-64 bg-content text-content-foreground'
        )}
      >
        <header
          className={cn(
            'sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-header px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'
          )}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className={cn('sm:hidden')}>
                <PanelLeftIcon className="h-5 w-5" />
                <span className="sr-only">Växla Meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className={cn('sm:max-w-xs')}>
              <nav className={cn('grid gap-6 text-lg font-medium')}>
                <a
                  href="#"
                  className={cn(
                    'group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
                  )}
                >
                  <BuildingIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Fastigheter</span>
                </a>
                <a
                  href="#"
                  className={cn(
                    'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <HomeIcon className="h-5 w-5" />
                  Fastigheter
                </a>
                <a
                  href="#"
                  className={cn(
                    'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <LayoutPanelLeftIcon className="h-5 w-5" />
                  Våningar
                </a>
                <a
                  href="#"
                  className={cn(
                    'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Lägenheter
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main
          className={cn(
            'grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2  bg-gray-200'
          )}
        >
          <div
            className={cn(
              'grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
