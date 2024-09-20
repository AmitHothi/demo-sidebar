'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/use-sidebar';

export function TeamSwitcher({
  teams,
  isMobileNav = false,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
  isMobileNav?: boolean;
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  const { isMinimized } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none w-full rounded-md'>
        <div
          className={`flex border-b border-b-gray-300 px-2.5 py-2  items-center
           text-sm `}
          //  ${ isMobileNav || isMinimized ? 'justify-center' : 'justify-between w-full'}
        >
          <div
            className={cn(
              'flex items-center justify-between text-foreground rounded-md w-full px-2 py-1.5 gap-2 dark:hover:bg-gray-500 hover:bg-muted-foreground data-[state=open]:bg-gray-500',
              isMinimized ? 'w-fit' : 'w-full'
            )}
          >
            <div className='flex gap-2 items-center'>
              <div className='flex h-5 w-5 items-center justify-center bg-background border'>
                <activeTeam.logo className='h-3.5 w-3.5 shrink-0' />
              </div>
              {/* {!isMinimized && (
              <span className='font-medium text-white'>{activeTeam.name}</span>
            )} */}
              {!isMinimized || isMobileNav ? (
                <span className='mr-2 truncate'>{activeTeam.name}</span>
              ) : (
                ''
              )}
            </div>
            {!isMinimized && (
              <ChevronsUpDown className='size-4' />
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn('w-64 ', {
          'ml-4': isMobileNav === true,
          'mt-4': isMobileNav === false,
        })}
        align={isMobileNav ? 'center' : 'end'}
        side={isMobileNav ? 'bottom' : 'right'}
        sideOffset={isMobileNav ? 8 : 4}
      >
        <DropdownMenuLabel className='text-xs text-muted-foreground'>
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className='flex items-center gap-2 px-1.5 py-2'
          >
            <div className='flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground'>
              <team.logo className='h-5 w-5 shrink-0' />
            </div>
            <div className='grid flex-1 leading-none'>
              <div className='font-medium'>{team.name}</div>
              <div className='text-xs text-muted-foreground'>{team.plan}</div>
            </div>
            <span className='ml-auto text-xs text-muted-foreground'>
              ⌘{index + 1}
            </span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex items-center gap-2 px-1.5 py-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-md border bg-background'>
            <Plus className='h-5 w-5' />
          </div>
          <div className='font-medium text-muted-foreground'>Add workspace</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
