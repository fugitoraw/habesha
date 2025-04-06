import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import { useState } from "react";
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
  import { useIsMobile } from "@/hooks/UseIsmobile";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
  
    const NavLinks = () => (
      <>
        {/* <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/blog">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Users className="w-4 h-4 mr-2" />
            Collaboration Tools
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[200px]">
              <ul className="space-y-2">
                <li><Link href="/tools/code-sharing" className="block hover:text-[#8B0000]">Code Sharing</Link></li>
                <li><Link href="/tools/project-collab" className="block hover:text-[#8B0000]">Project Collaboration</Link></li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/support">
            Support Us
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/guidelines">
            Community Guidelines
          </NavigationMenuLink>
        </NavigationMenuItem>
      </>
    );
  
    const MobileNav = () => (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="cursor-pointer md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {/* <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 p-2">
                <Users className="w-4 h-4" />
                Collaboration Tools
              </span>
              <Link href="/tools/code-sharing" className="pl-8 p-2 hover:bg-accent rounded-md">Code Sharing</Link>
              <Link href="/tools/project-collab" className="pl-8 p-2 hover:bg-accent rounded-md">Project Collaboration</Link>
            </div> */}
            <Link href="/about" className="p-2 hover:bg-accent rounded-md">About Us</Link>
            {/* <Link href="/support" className="p-2 hover:bg-accent rounded-md">Support Us</Link> */}
            <Link href="/guidelines" className="p-2 hover:bg-accent rounded-md">Community Guidelines</Link>
          </nav>
        </SheetContent>
      </Sheet>
    );
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image alt="jhkjasdh" src="/assets/logo.png" width={40} height={40}/>
          {isMobile ? (
            <MobileNav />
          ) : (
            <NavigationMenu>
              <NavigationMenuList>
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </nav>

  )
}
