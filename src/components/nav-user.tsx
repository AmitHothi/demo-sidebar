import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/hooks/use-sidebar';

export function NavUser({
  user,
  isMobileNav = false,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  isMobileNav?: boolean;
}) {
  const { isMinimized } = useSidebar();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={` border-t px-2.5 py-2 outline-none ${
          isMobileNav ? 'w-full p-0 ' : 'w-full '
        }`}
      >
        <div className='text-sm py-1 flex text-left transition-all rounded-md hover:bg-muted-foreground data-[state=open]:bg-gray-500'>
          {isMinimized ? (
            <Avatar className='h-7 w-7 rounded-md border'>
              <AvatarImage
                src={user.avatar}
                alt={user.name}
                className='animate-in fade-in-50 zoom-in-90'
              />
              <AvatarFallback className='rounded-md'>
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className='flex rounded-md w-full items-center gap-2'>
              <Avatar className='h-7 w-7 rounded-md border'>
                <AvatarImage
                  src={user.avatar}
                  alt={user.name}
                  className='animate-in fade-in-50 zoom-in-90'
                />
                <AvatarFallback className='rounded-md'>
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='grid flex-1 leading-none'>
                <div>{user.name}</div>
                <div className='overflow-hidden text-xs'>
                  <div className='line-clamp-1'>{user.email}</div>
                </div>
              </div>
              <ChevronsUpDown className='ml-auto mr-0.5 h-4 w-4' />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 top-2'
        align={'end'}
        side={'right'}
        sideOffset={4}
      >
        <DropdownMenuLabel className='p-0 font-normal'>
          <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all'>
            <Avatar className='h-7 w-7 rounded-md'>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='grid flex-1'>
              <div className='font-medium'>{user.name}</div>
              <div className='overflow-hidden text-xs text-muted-foreground'>
                <div className='line-clamp-1'>{user.email}</div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='gap-2'>
            <BadgeCheck className='h-4 w-4 text-muted-foreground' />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className='gap-2'>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className='gap-2'>
            <Bell className='h-4 w-4 text-muted-foreground' />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='gap-2'>
          <LogOut className='h-4 w-4 text-muted-foreground' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
