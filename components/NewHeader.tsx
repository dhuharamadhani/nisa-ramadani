"use client";

import * as React from "react";
import Link from "next/link";
import siteMetadata from '@/data/siteMetadata'
import NewMobileNav from './NewMobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { navigationLinks } from 'lib/navigation-links';
import { cn } from 'lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from 'components/navigation-menu';

export default function NewHeader() {
  return (
    <header className="flex items-center justify-between py-10">
<div>
<Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className=" h-6 text-xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
    <NavigationMenu className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block">
      <NavigationMenuList>
        {navigationLinks?.map((item) => (
          <NavigationMenuItem key={item.title.trim()}>
            {item.content ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.content.map((subItem) => (
                      <ListItem
                        key={subItem.href.trim()}
                        title={subItem.title}
                        href={subItem.href}
                        target={subItem.href.startsWith("http") ? "_blank" : "_self"}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href as string} legacyBehavior passHref>
                <NavigationMenuLink
                  target={item?.href?.startsWith("http") ? "_blank" : "_self"}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
        <NewMobileNav />
      </div>    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          {/* TODO: Figure out how to type this */}
          {/* @ts-expect-error */}
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug italic text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";