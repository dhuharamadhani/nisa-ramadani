'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MobileLinkProps } from 'types';
import { Menu } from 'lucide-react';
import siteMetadata from '@/data/siteMetadata'
import { navigationLinks } from 'lib/navigation-links';
import { cn } from 'lib/utils';
import { Button } from '@/components/button';
import { ScrollArea } from '@/components/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet';

export default function NewMobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen} aria-label="Go to Home">
          <span className="text-3xl font-bold">{siteMetadata.headerTitle}</span>
        </MobileLink>
        <ScrollArea className="text-2xl my-4 max-h-96 overflow-y-scroll pb-10 items">
          <div className="flex flex-col h-full space-y-3">
            {navigationLinks?.map((item) =>
              item.content ? (
                <div className="order-1 mt-3 flex flex-col space-y-3" key={item.title.trim()}>
                  <p className="text-2xl font-bold">{item.title}</p>
                  {item.content.map((subItem) => (
                    <MobileLink key={subItem.href} href={subItem.href} onOpenChange={setOpen}>
                      - {subItem.title}
                    </MobileLink>
                  ))}
                </div>
              ) : (
                <MobileLink key={item.href} href={item.href as string} onOpenChange={setOpen}>
                  {item.title}
                </MobileLink>
              )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const pathname = usePathname();
  if (href.toString().startsWith("http")) {
    return (
      <a
        href={href.toString()}
        onClick={() => {
          onOpenChange?.(false);
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={cn(
        className,
        href.toString() !== "/" &&
          pathname.substring(2).startsWith(href.toString().substring(2)) &&
          "font-semibold text-accent-foreground"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}