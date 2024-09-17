'use client';

import { useState } from 'react';
import { Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export function StorageCard({ isCollapsed }: { isCollapsed?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const StorageIcon = () => (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md  text-accent-foreground,${
        isCollapsed ? 'hover:bg-gray-500' : 'hover:bg-none'
      } `}
    >
      <Database className='h-5 w-5 text-gray-500' />
    </div>
  );

  const StorageContent = () => (
    <div className='grid flex-1 gap-1'>
      <p className='font-medium'>Running out of space?</p>
      <p className='text-gray-500'>79.2 GB / 100 GB used</p>
      <Progress
        value={79.2}
        className='mt-1'
        aria-label='79.2 GB / 100 GB used'
      />
    </div>
  );

  if (isCollapsed) {
    return (
      <HoverCard open={isOpen} onOpenChange={setIsOpen}>
        <HoverCardTrigger asChild>
          <button
            className='p-0 m-0 bg-transparent border-none cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <StorageIcon />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className='w-full p-0'>
          <Card className='rounded-md text-xs shadow-sm'>
            <CardContent className='flex items-start gap-2.5 p-2.5'>
              <StorageIcon />
              <StorageContent />
            </CardContent>
          </Card>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <Card className='rounded-md text-xs shadow-sm'>
      <CardContent className='flex items-start gap-2.5 p-2.5'>
        <StorageIcon />
        <StorageContent />
      </CardContent>
    </Card>
  );
}
