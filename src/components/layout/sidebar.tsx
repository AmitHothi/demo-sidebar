'use client';
import React from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { useSidebar } from '@/hooks/use-sidebar';
import { TeamSwitcher } from '../team-switcher';
import { NavUser } from '../nav-user';
import { ScrollArea } from '../ui/scroll-area';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative  hidden h-screen  border-r bg-background dark:bg-background transition-[width]  md:flex flex-col`,
        !isMinimized ? 'w-72' : 'w-[58px]',
        className
      )}
    >
      <div className='hidden lg:block'>
        <TeamSwitcher teams={navItems.teams} />
      </div>
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-1/2 z-20  cursor-pointer rounded-full border bg-red-500 dark:bg-white text-3xl',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <ScrollArea>
        <DashboardNav items={navItems.navMain} />
      </ScrollArea>
      {/* <div className='hidden lg:block mt-auto'>
        <NavUser user={navItems.user} />
      </div> */}
    </aside>
  );
}
