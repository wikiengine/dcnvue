import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, Clock, MessageSquareText } from 'lucide-react'
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
    { href: "/RecentChanges", label: "최근 변경", icon: <Clock/> },
    { href: "/RecentDiscuss", label: "최근 토론", icon: <MessageSquareText/> },
]

function UserMenu() {
    const session = window.session;
    let isLoggedIn;
    if (session.account.type == 1) {
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                {session.gravatar_url ?
                <Avatar className="h-8 w-8">
                    <AvatarImage src={session.gravatar_url} alt={session.account.name} />
                    <AvatarFallback>🔄</AvatarFallback>
                </Avatar>
                :
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://avatar.iran.liara.run/public" alt={session.account.name} />
                    <AvatarFallback>🔄</AvatarFallback>
                </Avatar>
                }   
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>
                {isLoggedIn ?
                <>{session.account.name}<br/>Member</>
                :
                <>{session.account.name}<br/>IP</>
                }
            </DropdownMenuLabel>
            {isLoggedIn ?
            <>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a href="/member/mypage">내정보</a>
                </DropdownMenuItem>
            </>
            :
            null
            }
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                {isLoggedIn ?
                    <a href="/member/logout">로그아웃</a>
                :
                    <a href="/member/login">로그인</a>
                }
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function Header() {
    return (
      <header className="border-b bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">{window.CONFIG.site_name}</a>
            <NavItems/>
          </div>
          <div className="flex items-center space-x-4">
            <DarkToggle />
            <UserMenu />
            <NavSheet />
          </div>
        </nav>
      </div>
    </header>
    )
}

function NavItems() {
    return (
        <div className="hidden md:flex ml-6 space-x-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-md font-medium hover:text-primary flex gap-1">
                    {link.icon}{link.label}
                  </a>
                ))}
        </div>
    )
}

function NavSheet() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <SheetHeader>
                    <SheetTitle>메뉴</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium hover:text-primary flex gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        {link.icon}
                        {link.label}
                        </a>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

function DarkToggle() {
    function toDark() {
        console.log("changed");
        window.Alpine.store("state").setLocalConfig("wiki.theme", "dark");
    }
    function toLight() {
        console.log("changed");
        window.Alpine.store("state").setLocalConfig("wiki.theme", "light");
    }
    return (
        <>
        <Button variant="ghost" size="icon" x-show="$store.state.currentTheme == 'light'" onClick={toDark}>
            <Moon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" x-show="$store.state.currentTheme == 'dark'" onClick={toLight}>
            <Sun className="h-5 w-5" />
        </Button>
        </>
    )
}