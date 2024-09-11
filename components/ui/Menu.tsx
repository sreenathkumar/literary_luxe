'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@shadcn/navigation-menu';

// MenuItem component, assuming it exists and properly renders a menu item
import Link from "next/link";
import { AlignRight, X } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { Button } from "../shadcn/button";


function Menu() {
  const [screenWidth, setScreenWidth] = useState<null | number>(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {screenWidth ? screenWidth < 768 ? (
        <MobileMenu />
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href='/'>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/contact'>
                Contact us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/about'>
                About us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/books'>
                Books
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-10 gap-4 flex">
              <Button variant={'outline'}>
                <Link href='/signup'>Signup</Link>
              </Button>
              <Button variant={'default'}>
                <Link href='/login'>Login</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <AlignRight onClick={toggleMenu} className="cursor-pointer text-neutral z-40" />
      <motion.div
        id="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 w-64 px-6 py-4 h-full flex flex-col bg-accent-100 shadow-lg z-50"
      >
        <X onClick={toggleMenu} className="ml-auto mb-10 cursor-pointer text-neutral-800" aria-label="close" />

        {/* menu items */}
        <NavigationMenu className="w-full items-start">
          <NavigationMenuList className={'flex flex-col items-start'} >
            <NavigationMenuItem>
              <NavigationMenuLink href='/'>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/contact'>Contact us</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/about'>About us</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/books'>Books</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-col">
          <div className="w-full flex gap-4 justify-between py-6">
            <Button variant={'outline'} className="w-1/2">
              <Link href='/signup'>Signup</Link>
            </Button>
            <Button className="w-1/2">
              <Link href='/login' >Login</Link>
            </Button>
          </div>
          <SocialIcons className="flex mt-auto gap-4 justify-center text-neutral" />
        </div>

      </motion.div>
    </div>
  );
}

export default Menu;
