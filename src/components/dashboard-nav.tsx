'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/use-sidebar';
import { LucideIcon, Search } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';

interface ISubItems {
  title: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: ISubItems[];
}

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
}: // isMobileNav = false,
DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<NavItem[]>([]);

  if (!items?.length) {
    return null;
  }

  const handleSearch = (query: string) => {
    const results = items.flatMap((item) =>
      [item, ...(item.items || [])].filter((subItem) =>
        subItem.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(results);
  };

  return (
    <nav className='grid h-full items-start gap-2 px-2.5 py-2'>
      <TooltipProvider>
        <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <PopoverTrigger asChild>
            <button
              className='flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm dark:hover:bg-gray-500 hover:bg-muted-foreground'
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className='size-5 shrink-0' />
              {!isMinimized && <span>Search</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent className='w-64 p-0'>
            <Input
              type='search'
              placeholder='Search...'
              className='border-0 focus-visible:ring-0'
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchResults.map((result) => (
              <Link
                key={result.url}
                href={result.url}
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setIsSearchOpen(false)}
              >
                {result.title}
              </Link>
            ))}
          </PopoverContent>
        </Popover>

        {items.map((item, index) => (
          <div key={index}>
            {item.items && !isMinimized ? (
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value={item.title} className='border-b-0'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AccordionTrigger
                        className={cn(
                          'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm dark:hover:bg-gray-500 hover:bg-muted-foreground hover:no-underline',
                          path.startsWith(item.url)
                            ? 'dark:bg-gray-500 bg-neutral-200'
                            : 'transparent'
                        )}
                      >
                        <div className='flex gap-2 items-center'>
                          <item.icon className='size-5  shrink-0' />
                          {!isMinimized && <span>{item.title}</span>}
                        </div>
                      </AccordionTrigger>
                    </TooltipTrigger>
                    {isMinimized && (
                      <TooltipContent side='right'>{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                  <AccordionContent className='px-2.5 py-1.5 pb-0 flex flex-col gap-2'>
                    {!isMinimized &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.url}
                          href={subItem.url}
                          className={cn(
                            'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm dark:hover:bg-gray-500 hover:bg-muted-foreground',
                            path === subItem.url ? 'dark:bg-gray-500 bg-muted-foreground' : 'transparent'
                          )}
                          onClick={() => {
                            if (setOpen) setOpen(false);
                          }}
                        >
                          {subItem.icon && (
                            <subItem.icon className='size-4 shrink-0' />
                          )}
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.url}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm dark:hover:bg-gray-500 hover:bg-muted-foreground',
                      path === item.url ? 'dark:bg-gray-500 bg-muted-foreground' : 'transparent',
                      isMinimized ? 'w-fit' : 'w-full'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <item.icon className='size-5 shrink-0' />
                    {!isMinimized && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {isMinimized && (
                  <TooltipContent side='right'>{item.title}</TooltipContent>
                )}
              </Tooltip>
            )}
          </div>
        ))}
      </TooltipProvider>
    </nav>
  );
}
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';
// // import { NavItem } from '@/types';
// import { Dispatch, SetStateAction } from 'react';
// import { useSidebar } from '@/hooks/use-sidebar';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from './ui/tooltip';
// import { LucideIcon } from 'lucide-react';
// // import { Item } from '@radix-ui/react-accordion';

// interface ISubItems {
//   title: string;
//   url: string;
//   icon?: LucideIcon;
//   description?: string;
// }

// export interface NavItem {
//   title: string;
//   url: string;
//   icon: LucideIcon;
//   isActive?: boolean;
//   items?: ISubItems[];
// }

// interface DashboardNavProps {
//   items: NavItem[];
//   setOpen?: Dispatch<SetStateAction<boolean>>;
//   isMobileNav?: boolean;
// }

// export function DashboardNav({
//   items,
//   setOpen,
//   isMobileNav = false,
// }: DashboardNavProps) {
//   const path = usePathname();
//   const { isMinimized } = useSidebar();

//   if (!items?.length) {
//     return null;
//   }

//   console.log('isActive', isMobileNav, isMinimized);

//   return (
//     <nav className='grid items-start gap-2 px-2.5 py-2'>
//       <TooltipProvider>
//         {items.map((item, index) => {
//           //   const Icon = Icons[item.icon || 'arrowRight'];
//           return (
//             item.url && (
//               <Tooltip key={index}>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href={item.url}
//                     className={cn(
//                       'flex items-center gap-2 overflow-hidden rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500',
//                       path === item.url ? 'bg-gray-500' : 'transparent',
//                       isMinimized ?'w-fit' :'w-full'
//                       //   item.disabled && 'cursor-not-allowed opacity-80'
//                     )}
//                     onClick={() => {
//                       if (setOpen) setOpen(false);
//                     }}
//                   >
//                     <item.icon className={`h-5 w-5 shrink-0 text-white`} />

//                     {isMobileNav || (!isMinimized && !isMobileNav) ? (
//                       <span className='mr-2 truncate'>{item.title}</span>
//                     ) : (
//                       ''
//                     )}
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent
//                   align='center'
//                   side='right'
//                   sideOffset={8}
//                   className={!isMinimized ? 'hidden' : 'inline-block'}
//                 >
//                   {item.title}
//                 </TooltipContent>
//               </Tooltip>
//             )
//           );
//         })}
//       </TooltipProvider>
//     </nav>
//   );
// }

//   return (
//     <ul data-collapsed={isCollapsed} className={cn('grid gap-0.5', className)}>
//       {isCollapsed ? (
//         <Tooltip delayDuration={0}>
//           <TooltipTrigger asChild>
//             <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
//               <PopoverTrigger asChild>
//                 <button
//                   className='h-9 w-9 flex justify-center items-center rounded-md hover:bg-gray-500 hover:text-white'
//                   onClick={() => setIsSearchOpen(true)}
//                 >
//                   <Search className='h-5 w-5' />
//                   <span className='sr-only'>Search</span>
//                 </button>
//               </PopoverTrigger>
//               <PopoverContent
//                 side='right'
//                 align='center'
//                 sideOffset={10}
//                 className='w-96 p-0'
//               >
//                 <SidebarSearch results={searchResults} />
//               </PopoverContent>
//             </Popover>
//           </TooltipTrigger>
//         </Tooltip>
//       ) : (
//         <Popover>
//           <PopoverTrigger className='min-w-8 flex h-8 w-full flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2 data-[state=open]:bg-gray-500 data-[state=open]:text-accent-foreground'>
//             <Search className='h-4 w-4 shrink-0 text-white' />
//             <div className='flex flex-1 overflow-hidden'>
//               <div className='line-clamp-1 pr-6  text-white'>Search</div>
//             </div>
//           </PopoverTrigger>
//           <PopoverContent
//             side='right'
//             align='start'
//             sideOffset={4}
//             className='w-96 p-0'
//           >
//             <SidebarSearch results={searchResults} />
//           </PopoverContent>
//         </Popover>
//       )}

//       {items.map((item) =>
//         !isCollapsed ? (
//           <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
//             <li>
//               <div className='relative flex items-center'>
//                 {/* <Link
//                 href={item.url}
//                 className='min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2'
//               > */}
//                 {item.items ? (
//                   <Accordion
//                     key={item.title}
//                     type='single'
//                     className='p-0 w-full font-normal'
//                     collapsible
//                   >
//                     <AccordionItem
//                       value='item-1'
//                       className='m-0 p-0 border-none font-normal'
//                     >
//                       <AccordionTrigger className='py-0 h-8 hover:no-underline min-w-8 flex justify-start font-normal bg-background px-1.5 items-center hover:bg-gray-500 hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md'>
//                         <a
//                           key={item.title}
//                           className='w-full flex gap-2 justify-start font-normal bg-background items-center'
//                         >
//                           {/* <div
//                           className={cn(
//                             'flex gap-2 justify-between w-full [&[data-state=open]>svg]:rotate-90'
//                           )}
//                         > */}
//                           <item.icon className='h-4 w-4 shrink-0 text-white' />
//                           <div className='line-clamp-1 pr-0 text-white'>
//                             {item.title}
//                           </div>
//                           {/* {item.items && (
//                           <ChevronRight
//                             className={cn(
//                               'h-4 w-4 text-gray-300 transition-transform duration-300 ',
//                               {
//                                 'rotate-0': !item.isActive,
//                                 'rotate-90': item.isActive,
//                               }
//                             )}
//                           />
//                         )} */}

//                           {/* <ChevronRightIcon className='h-4 w-4 shrink-0 text-gray-300 transition-transform duration-200' /> */}
//                           {/* </div> */}
//                         </a>
//                       </AccordionTrigger>
//                       <AccordionContent className='pb-0 px-4 overflow-x-hidden'>
//                         {item.items.map((subItem) => (
//                           <Link
//                             key={subItem.title}
//                             href={subItem.url}
//                             className='min-w-8 flex h-8 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium text-gray-300 ring-ring transition-all hover:bg-gray-500 hover:text-white focus-visible:ring-2'
//                           >
//                             {subItem.icon && (
//                               <div className='w-6'>
//                                 <subItem.icon className='h-4 w-4' />
//                               </div>
//                             )}
//                             {subItem.title}
//                           </Link>
//                         ))}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 ) : (
//                   <Link
//                     href={item.url}
//                     className='min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-gray-500 hover:text-accent-foreground focus-visible:ring-2'
//                   >
//                     <item.icon className='h-4 w-4 shrink-0 text-white' />
//                     <div className='flex flex-1 overflow-hidden'>
//                       <div className='line-clamp-1 pr-6 text-white'>
//                         {item.title}
//                       </div>
//                     </div>
//                   </Link>
//                 )}
//               </div>
//             </li>
//           </Collapsible>
//         ) : (
//           <Tooltip key={item.title} delayDuration={0}>
//             <TooltipTrigger asChild>
//               <Link
//                 href={item.url}
//                 className={cn(
//                   // buttonVariants({ variant: link.variant, size: 'icon' }),
//                   'h-9 w-9 flex justify-center items-center rounded-md',
//                   // link.variant === 'default' &&
//                   'dark:bg-muted dark:text-muted-foreground hover:bg-gray-500 hover:text-white'
//                 )}
//               >
//                 <item.icon className='h-5 w-5' />
//                 <span className='sr-only'>{item.title}</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side='right' className='flex items-center gap-4'>
//               {item.title}
//             </TooltipContent>
//           </Tooltip>
//         )
//       )}
//     </ul>
//   );
// }

// function SidebarSearch({
//   results,
// }: {
//   results: {
//     title: string;
//     teaser: string;
//     url: string;
//   }[];
// }) {
//   return (
//     <div>
//       <form>
//         <div className='border-b p-2.5'>
//           <Input
//             type='search'
//             placeholder='Search...'
//             className='h-8 rounded-sm shadow-none focus-visible:ring-0'
//           />
//         </div>
//       </form>
//       <div className='grid gap-1 p-1.5 text-sm'>
//         {results?.map((result) => (
//           <Link
//             href={result.url}
//             key={result.title}
//             className='rounded-md p-2.5 outline-none ring-ring hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
//           >
//             <div className='font-medium'>{result.title}</div>
//             <div className='line-clamp-2 text-muted-foreground'>
//               {result.teaser}
//             </div>
//           </Link>
//         ))}
//         <Separator className='my-1.5' />
//         <Link
//           href='#'
//           className='rounded-md px-2.5 py-1 text-muted-foreground outline-none ring-ring hover:text-foreground focus-visible:ring-2'
//         >
//           See all results
//         </Link>
//       </div>
//     </div>
//   );
// }
