'use client';
import { DashboardNav } from '@/components/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { TeamSwitcher } from '../team-switcher';
import { NavUser } from '../nav-user';
import { ScrollArea } from '../ui/scroll-area';

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent   side='left' className='!px-0 p-1 w-72'>
          <div>
            <div className='px-2.5 py-2 h-screen flex flex-col justify-between'>
              <div className='text-lg font-semibold tracking-tight'>
                <TeamSwitcher teams={navItems.teams} />
              </div>

              <ScrollArea>
                <DashboardNav
                  items={navItems.navMain}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </ScrollArea>
              <div className='mt-auto'>
                <NavUser user={navItems.user} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
