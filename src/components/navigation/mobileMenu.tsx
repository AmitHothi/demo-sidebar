'use client';

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { siteConfig } from '../../../app';
import { cn } from '@/lib/utils';
import { MainMenuItem, SidebarNavItem } from '@/constants/data';

type MobileMenuProps = {
  MainMenuItems?: MainMenuItem[];
  sidebarNavItems: SidebarNavItem[];
};

export function MobileMenu({
  MainMenuItems,
  sidebarNavItems,
}: MobileMenuProps) {
  // const t = useTranslations();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button
          className={`
            mr-2 px-0 text-base

            focus-visible:bg-transparent focus-visible:ring-0
            focus-visible:ring-offset-0

            hover:bg-transparent

            lg:hidden
          `}
          variant='ghost'
        >
          <Menu className='size-6' />
          <span className='sr-only'>{'MobileMenu.toggleMenu'}</span>
          <span
            className={`
              ml-2 hidden font-medium tracking-wide

              sm:flex
            `}
          >
            {siteConfig.name}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className='pl-1 pr-0 w-72' side='left'>
        <div className='px-7'>
          <Link
            aria-label='Home'
            className='flex items-center'
            href='/'
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className='font-medium'>{siteConfig.name}</span>
          </Link>
        </div>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-0 pl-6'>
          <div className='pl-1 pr-7'>
            <Accordion className='w-full' collapsible type='single'>
              {MainMenuItems?.map((item, index) => (
                <AccordionItem key={index} value={item.title}>
                  <AccordionTrigger className='text-sm capitalize'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col space-y-2'>
                      {item.items?.map((subItem, index) =>
                        subItem.url ? (
                          <MobileLink
                            disabled={subItem.disabled}
                            href={String(subItem.url)}
                            key={index}
                            pathname={pathname}
                            setIsOpen={setIsOpen}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            className='text-foreground/70 transition-colors'
                            key={index}
                          >
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem value='sidebar'>
                <AccordionTrigger className='text-sm'>
                  Sidebar Menu
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col space-y-2'>
                    {sidebarNavItems?.map((item, index) => {
                      if (item.items) {
                        return (
                          <>
                            <Accordion
                              type='single'
                              collapsible
                              className='w-full'
                            >
                              <AccordionItem
                                className='border-b-0'
                                value='item-1'
                              >
                                <AccordionTrigger className='py-0'>
                                  <div className='flex gap-2 items-center'>
                                    {item.icon && (
                                      <item.icon className='size-4' />
                                    )}
                                    {item.title}
                                  </div>
                                </AccordionTrigger>
                                {item.items.map((subItem) => (
                                  <AccordionContent
                                    className='px-4 py-2 flex gap-2 items-center'
                                    key={subItem.title}
                                  >
                                    <MobileLink
                                      disabled={subItem.disabled}
                                      href={String(subItem.url)}
                                      key={subItem.title}
                                      pathname={pathname}
                                      className='flex gap-2 items-center'
                                      setIsOpen={setIsOpen}
                                    >
                                      {subItem.icon && (
                                        <subItem.icon className='size-4' />
                                      )}
                                      {subItem.title}
                                    </MobileLink>
                                  </AccordionContent>
                                ))}
                              </AccordionItem>
                            </Accordion>
                          </>
                        );
                      }
                      return item.url ? (
                        <MobileLink
                          disabled={item.disabled}
                          href={String(item.url)}
                          key={index}
                          pathname={pathname}
                          className='flex gap-2 items-center'
                          setIsOpen={setIsOpen}
                        >
                          {item.icon && <item.icon className='size-4' />}
                          {item.title}
                        </MobileLink>
                      ) : (
                        <div
                          className='text-foreground/70 transition-colors'
                          key={index}
                        >
                          {item.title}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

type MobileLinkProps = {
  children?: ReactNode;
  disabled?: boolean;
  href: null | string;
  pathname: null | string;
  className?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function MobileLink({
  children,
  disabled,
  href,
  pathname,
  className,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      className={
        (cn(
          `
          text-foreground/70 transition-colors

          hover:text-foreground
        `,
          pathname === href && 'text-foreground',
          disabled && 'pointer-events-none opacity-60'
        ),
        className)
      }
      href={String(href)}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      {children}
    </Link>
  );
}
