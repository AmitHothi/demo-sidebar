// 'use client';

// import {
//   Atom,
//   Box,
//   Boxes,
//   ChartArea,
//   ClipboardPenLine,
//   Eclipse,
//   Factory,
//   Frame,
//   Grid2X2,
//   Layers,
//   LifeBuoy,
//   Map,
//   PieChart,
//   Rabbit,
//   Send,
//   Settings2,
//   ShoppingBag,
//   SquareTerminal,
//   Truck,
//   User,
//   Warehouse,
// } from 'lucide-react';

// import { NavMain } from '@/components/nav-main';
// // import { NavProjects } from "@/components/nav-projects"
// // import { NavSecondary } from "@/components/nav-secondary"
// import { NavUser } from '@/components/nav-user';
// import { StorageCard } from '@/components/storage-card';
// import { TeamSwitcher } from '@/components/team-switcher';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarItem,
//   SidebarLabel,
// } from '@/components/ui/sidebar';
// const data = {
//   teams: [
//     {
//       name: 'Acme Inc',
//       logo: Atom,
//       plan: 'Enterprise',
//     },
//     {
//       name: 'Acme Corp.',
//       logo: Eclipse,
//       plan: 'Startup',
//     },
//     {
//       name: 'Evil Corp.',
//       logo: Rabbit,
//       plan: 'Free',
//     },
//   ],
//   user: {
//     name: 'shadcn',
//     email: 'm@example.com',
//     avatar: '/avatars/shadcn.jpg',
//   },
//   navMain: [
//     {
//       title: 'Dashboard',
//       url: '/dashboard',
//       icon: ChartArea,
//     },
//     {
//       title: 'Inventory',
//       url: '#',
//       icon: Layers,
//       items: [
//         {
//           title: 'Inventories',
//           url: '/inventories',
//           icon: Layers,
//           description: 'Our fastest model for general use cases.',
//         },
//         {
//           title: 'Inventory Order',
//           url: '/inventories/inventoryOrders',
//           icon: ClipboardPenLine,
//           description: 'Performance and speed for efficiency.',
//         },
//         {
//           title: 'Inventory Order Items',
//           url: '/inventories/inventoryOrderItems',
//           icon: ShoppingBag,
//           description: 'The most powerful model for complex computations.',
//         },
//       ],
//     },
//     {
//       title: 'Manufacturer',
//       url: '/manufacturer',
//       icon: Factory,
//     },
//     {
//       title: 'Suppliers',
//       url: '/supplier',
//       icon: Truck,
//     },
//     {
//       title: 'Warehouse',
//       url: '/warehouse',
//       icon: Warehouse,
//     },
//     {
//       title: 'Users',
//       url: '/user',
//       icon: User,
//     },
//     {
//       title: 'Master',
//       url: '#',
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: 'Master-product',
//           url: '/master-product',
//           icon: Box,
//           description: 'View your recent prompts',
//         },
//         {
//           title: 'Category',
//           url: '/category',
//           icon: Grid2X2,
//           description: 'Browse your starred prompts',
//         },
//       ],
//     },
//     {
//       title: 'Products',
//       url: '/sub-product',
//       icon: Boxes,
//     },
//     {
//       title: 'Settings',
//       url: '#',
//       icon: Settings2,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//   ],

//   navSecondary: [
//     {
//       title: 'Support',
//       url: '#',
//       icon: LifeBuoy,
//     },
//     {
//       title: 'Feedback',
//       url: '#',
//       icon: Send,
//     },
//   ],
//   projects: [
//     {
//       name: 'Design Engineering',
//       url: '#',
//       icon: Frame,
//     },
//     {
//       name: 'Sales & Marketing',
//       url: '#',
//       icon: PieChart,
//     },
//     {
//       name: 'Travel',
//       url: '#',
//       icon: Map,
//     },
//   ],
//   searchResults: [
//     {
//       title: 'Routing Fundamentals',
//       teaser:
//         'The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.',
//       url: '#',
//     },
//     {
//       title: 'Layouts and Templates',
//       teaser:
//         'The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.',
//       url: '#',
//     },
//     {
//       title: 'Data Fetching, Caching, and Revalidating',
//       teaser:
//         'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
//       url: '#',
//     },
//     {
//       title: 'Server and Client Composition Patterns',
//       teaser:
//         'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ',
//       url: '#',
//     },
//     {
//       title: 'Server Actions and Mutations',
//       teaser:
//         'Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.',
//       url: '#',
//     },
//   ],
// };

// export function AppSidebar({ isCollapsed=false }: { isCollapsed?: boolean }) {
//   return (
//     <Sidebar>
//       <SidebarHeader>
//         <TeamSwitcher isCollapsed={isCollapsed} teams={data.teams} />
//       </SidebarHeader>
//       <SidebarContent className='overflow-x-hidden overflow-y-auto  justify-between'>
//         <SidebarItem>
//           {!isCollapsed && <SidebarLabel>Platform</SidebarLabel>}
//           <NavMain
//             items={data.navMain}
//             isCollapsed={isCollapsed}
//             searchResults={data.searchResults}
//           />
//         </SidebarItem>
//         {/* <SidebarItem>
//           <SidebarLabel>Projects</SidebarLabel>
//           <NavProjects projects={data.projects} />
//         </SidebarItem>
//         <SidebarItem className="mt-auto">
//           <SidebarLabel>Help</SidebarLabel>
//           <NavSecondary items={data.navSecondary} />
//         </SidebarItem> */}
//         <SidebarItem>
//           <StorageCard isCollapsed={isCollapsed}/>
//         </SidebarItem>
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser isCollapsed={isCollapsed} user={data.user} />
//       </SidebarFooter>
//     </Sidebar>
//   );
// }
