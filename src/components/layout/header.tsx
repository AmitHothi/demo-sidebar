"use client"
// import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
// import { MobileSidebar } from './mobile-sidebar';
import { Coffee, ShoppingCart, Sun } from 'lucide-react';
import { MainMenu } from '../navigation/mainMenu';
import { mainNav, navItems } from '@/constants/data';
import { MobileMenu } from '../navigation/mobileMenu';
// import { UserNav } from './user-nav';

export default function Header() {
  return (
    <header
      className='sticky px-2.5 top-0 z-40 mb-2 flex h-16 w-full justify-between
        border-b-2 bg-background/90 backdrop-blur-md duration-slow items-center
        animate-in fade-in slide-in-from-top-full'
    >
      {/* <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div> */}
      <MainMenu items={mainNav} />
      <MobileMenu MainMenuItems={mainNav} sidebarNavItems={navItems.navMain} />
      <nav className='flex flex-1 space-x-2 justify-end items-center'>
        <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-9 relative border'>
          <ShoppingCart className='h-4 w-4' />
        </div>
        {/* <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 space-x-1'>
          <Coffee className='size-4' />
          <span className='md:flex hidden'>Donut</span>
        </div> */}
        <div className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground size-9 rounded-lg border'>
          <Sun className='h-4 w-4' />
        </div>
        <button className='inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs font-twemoji'>
          <div className='flex items-center space-x-2'>
            <span aria-hidden>GB</span>
            <span className='hidden 2xl:flex lg:hidden md:flex'>English</span>
          </div>
        </button>
        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2'>
          Sign In
        </button>
      </nav>
      {/* <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div> */}
    </header>
  );
}
