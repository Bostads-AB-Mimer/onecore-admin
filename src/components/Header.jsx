import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import SearchBar from './SearchBar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { CircleUserIcon, MenuIcon, Package2Icon } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 flex-1">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          prefetch={false}
        >
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Lägenheter
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Annonser
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Hyresgäster
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Underhåll
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          Analys
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Växla navigeringsmeny</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Lägenheter
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Annonser
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Hyresgäster
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Underhåll
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Analys
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <SearchBar />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUserIcon className="h-5 w-5" />
              <span className="sr-only">Växla användarmeny</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mitt konto</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Inställningar</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logga ut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
