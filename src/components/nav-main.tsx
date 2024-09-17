'use client';

import Link from 'next/link';
import { Search, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useState } from 'react';

export function NavMain({
  className,
  items,
  searchResults,
  isCollapsed,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
  isCollapsed?: boolean;
  searchResults?: React.ComponentProps<typeof SidebarSearch>['results'];
} & React.ComponentProps<'ul'>) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <ul data-collapsed={isCollapsed} className={cn('grid gap-0.5', className)}>
      {isCollapsed ? (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <button
                  className='h-9 w-9 flex justify-center items-center rounded-md hover:bg-gray-500 hover:text-white'
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className='h-5 w-5' />
                  <span className='sr-only'>Search</span>
                </button>
              </PopoverTrigger>
              <PopoverContent
                side='right'
                align='center'
                sideOffset={10}
                className='w-96 p-0'
              >
                <SidebarSearch results={searchResults} />
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
        </Tooltip>
      ) : (
        <Popover>
          <PopoverTrigger className='min-w-8 flex h-8 w-full flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2 data-[state=open]:bg-gray-500 data-[state=open]:text-accent-foreground'>
            <Search className='h-4 w-4 shrink-0 text-white' />
            <div className='flex flex-1 overflow-hidden'>
              <div className='line-clamp-1 pr-6  text-white'>Search</div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            side='right'
            align='start'
            sideOffset={4}
            className='w-96 p-0'
          >
            <SidebarSearch results={searchResults} />
          </PopoverContent>
        </Popover>
      )}

      {items.map((item) =>
        !isCollapsed ? (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <li>
              <div className='relative flex items-center'>
                {/* <Link
                href={item.url}
                className='min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2'
              > */}
                {item.items ? (
                  <Accordion
                    key={item.title}
                    type='single'
                    className='p-0 w-full font-normal'
                    collapsible
                  >
                    <AccordionItem
                      value='item-1'
                      className='m-0 p-0 border-none font-normal'
                    >
                      <AccordionTrigger className='py-0 h-8 hover:no-underline min-w-8 flex justify-start font-normal bg-background px-1.5 items-center hover:bg-gray-500 hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md'>
                        <a
                          key={item.title}
                          className='w-full flex gap-2 justify-start font-normal bg-background items-center'
                        >
                          {/* <div
                          className={cn(
                            'flex gap-2 justify-between w-full [&[data-state=open]>svg]:rotate-90'
                          )}
                        > */}
                          <item.icon className='h-4 w-4 shrink-0 text-white' />
                          <div className='line-clamp-1 pr-0 text-white'>
                            {item.title}
                          </div>
                          {/* {item.items && (23
                          <ChevronRight
                            className={cn(
                              'h-4 w-4 text-gray-300 transition-transform duration-300 ',
                              {
                                'rotate-0': !item.isActive,
                                'rotate-90': item.isActive,
                              }
                            )}
                          />
                        )} */}

                          {/* <ChevronRightIcon className='h-4 w-4 shrink-0 text-gray-300 transition-transform duration-200' /> */}
                          {/* </div> */}
                        </a>
                      </AccordionTrigger>
                      <AccordionContent className='pb-0 px-4 overflow-x-hidden'>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.url}
                            className='min-w-8 flex h-8 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium text-gray-300 ring-ring transition-all hover:bg-gray-500 hover:text-white focus-visible:ring-2'
                          >
                            {subItem.icon && (
                              <div className='w-6'>
                                <subItem.icon className='h-4 w-4' />
                              </div>
                            )}
                            {subItem.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    href={item.url}
                    className='min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2'
                  >
                    <item.icon className='h-4 w-4 shrink-0 text-white' />
                    <div className='flex flex-1 overflow-hidden'>
                      <div className='line-clamp-1 pr-6 text-white'>
                        {item.title}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </li>
          </Collapsible>
        ) : (
          <Tooltip key={item.title} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={item.url}
                className={cn(
                  // buttonVariants({ variant: link.variant, size: 'icon' }),
                  'h-9 w-9 flex justify-center items-center rounded-md',
                  // link.variant === 'default' &&
                  'dark:bg-muted dark:text-muted-foreground hover:bg-gray-500 hover:text-white'
                )}
              >
                <item.icon className='h-5 w-5' />
                <span className='sr-only'>{item.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right' className='flex items-center gap-4'>
              {item.title}
            </TooltipContent>
          </Tooltip>
        )
      )}
    </ul>
  );
}

function SidebarSearch({
  results,
}: {
  results: {
    title: string;
    teaser: string;
    url: string;
  }[];
}) {
  return (
    <div>
      <form>
        <div className='border-b p-2.5'>
          <Input
            type='search'
            placeholder='Search...'
            className='h-8 rounded-sm shadow-none focus-visible:ring-0'
          />
        </div>
      </form>
      <div className='grid gap-1 p-1.5 text-sm'>
        {results?.map((result) => (
          <Link
            href={result.url}
            key={result.title}
            className='rounded-md p-2.5 outline-none ring-ring hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
          >
            <div className='font-medium'>{result.title}</div>
            <div className='line-clamp-2 text-muted-foreground'>
              {result.teaser}
            </div>
          </Link>
        ))}
        <Separator className='my-1.5' />
        <Link
          href='#'
          className='rounded-md px-2.5 py-1 text-muted-foreground outline-none ring-ring hover:text-foreground focus-visible:ring-2'
        >
          See all results
        </Link>
      </div>
    </div>
  );
}
