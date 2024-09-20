import {
  Atom,
  Box,
  Boxes,
  ChartArea,
  ClipboardPenLine,
  Eclipse,
  Factory,
  Frame,
  Grid2X2,
  Layers,
  LifeBuoy,
  LucideIcon,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  ShoppingBag,
  SquareTerminal,
  Truck,
  User,
  Warehouse,
} from 'lucide-react';

interface ISubItems {
  title: string;
  url: string;
  icon?: LucideIcon;
  description?: string;
}

export interface HeaderItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: ISubItems[];
}
export interface INavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  description?: string;
  items?: ISubItems[];
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

type NavItemWithChildren = {
  items: NavItemWithChildren[];
} & INavItem;

type NavItemWithOptionalChildren = {
  items?: NavItemWithChildren[];
} & INavItem;

export type MainMenuItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export const navItems = {
  teams: [
    {
      name: 'Acme Inc',
      logo: Atom,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: Eclipse,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Rabbit,
      plan: 'Free',
    },
  ],
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: ChartArea,
    },
    {
      title: 'Inventory',
      url: '#',
      icon: Layers,
      items: [
        {
          title: 'Inventories',
          url: '/inventories',
          icon: Layers,
          description: 'Our fastest model for general use cases.',
        },
        {
          title: 'Inventory Order',
          url: '/inventories/inventoryOrders',
          icon: ClipboardPenLine,
          description: 'Performance and speed for efficiency.',
        },
        {
          title: 'Inventory Order Items',
          url: '/inventories/inventoryOrderItems',
          icon: ShoppingBag,
          description: 'The most powerful model for complex computations.',
        },
      ],
    },
    {
      title: 'Manufacturer',
      url: '/manufacturer',
      icon: Factory,
    },
    {
      title: 'Suppliers',
      url: '/supplier',
      icon: Truck,
    },
    {
      title: 'Warehouse',
      url: '/warehouse',
      icon: Warehouse,
    },
    {
      title: 'Users',
      url: '/user',
      icon: User,
    },
    {
      title: 'Master',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Master-product',
          url: '/master-product',
          icon: Box,
          description: 'View your recent prompts',
        },
        {
          title: 'Category',
          url: '/category',
          icon: Grid2X2,
          description: 'Browse your starred prompts',
        },
      ],
    },
    {
      title: 'Products',
      url: '/sub-product',
      icon: Boxes,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: 'Routing Fundamentals',
      teaser:
        'The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.',
      url: '#',
    },
    {
      title: 'Layouts and Templates',
      teaser:
        'The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.',
      url: '#',
    },
    {
      title: 'Data Fetching, Caching, and Revalidating',
      teaser:
        'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
      url: '#',
    },
    {
      title: 'Server and Client Composition Patterns',
      teaser:
        'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ',
      url: '#',
    },
    {
      title: 'Server Actions and Mutations',
      teaser:
        'Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.',
      url: '#',
    },
  ],
};

export const productCategories = [
  {
    image: '/images/skateboard-one.webp',
    subcategories: [
      {
        description: 'The board itself.',
        image: '/images/deck-one.webp',
        slug: 'decks',
        title: 'Decks',
      },
      {
        description: 'The wheels that go on the board.',
        image: '/images/wheel-one.webp',
        slug: 'wheels',
        title: 'Wheels',
      },
      {
        description: 'The trucks that go on the board.',
        image: '/images/truck-one.webp',
        slug: 'trucks',
        title: 'Trucks',
      },
      {
        description: 'The bearings that go in the wheels.',
        image: '/images/bearing-one.webp',
        slug: 'bearings',
        title: 'Bearings',
      },
      {
        description: 'The griptape that goes on the board.',
        image: '/images/griptape-one.webp',
        slug: 'griptape',
        title: 'Griptape',
      },
      {
        description: 'The hardware that goes on the board.',
        image: '/images/hardware-one.webp',
        slug: 'hardware',
        title: 'Hardware',
      },
      {
        description: 'The tools that go with the board.',
        image: '/images/tool-one.webp',
        slug: 'tools',
        title: 'Tools',
      },
    ],
    title: 'furniture',
  },
  {
    image: '/images/clothing-one.webp',
    subcategories: [
      {
        description: 'Cool and comfy tees for effortless style.',
        slug: 't-shirts',
        title: 'T-shirts',
      },
      {
        description: 'Cozy up in trendy hoodies.',
        slug: 'hoodies',
        title: 'Hoodies',
      },
      {
        description: 'Relaxed and stylish pants for everyday wear.',
        slug: 'pants',
        title: 'Pants',
      },
      {
        description: 'Stay cool with casual and comfortable shorts.',
        slug: 'shorts',
        title: 'Shorts',
      },
      {
        description: 'Top off the look with stylish and laid-back hats.',
        slug: 'hats',
        title: 'Hats',
      },
    ],
    title: 'clothing',
  },
  {
    image: '/images/shoe-one.webp',
    subcategories: [
      {
        description: 'Rad low tops shoes for a stylish low-profile look.',
        slug: 'low-tops',
        title: 'Low Tops',
      },
      {
        description: 'Elevate the style with rad high top shoes.',
        slug: 'high-tops',
        title: 'High Tops',
      },
      {
        description: 'Effortless style with rad slip-on shoes.',
        slug: 'slip-ons',
        title: 'Slip-ons',
      },
      {
        description: 'Performance-driven rad shoes for the pros.',
        slug: 'pros',
        title: 'Pros',
      },
      {
        description: 'Timeless style with rad classic shoes.',
        slug: 'classics',
        title: 'Classics',
      },
    ],
    title: 'tech',
  },
  {
    image: '/images/backpack-one.webp',
    subcategories: [
      {
        description: 'Essential tools for maintaining the skateboard, all rad.',
        slug: 'skate-tools',
        title: 'Skate Tools',
      },
      {
        description: 'Upgrade the ride with our rad selection of bushings.',
        slug: 'bushings',
        title: 'Bushings',
      },
      {
        description:
          "Enhance the skateboard's performance with rad shock and riser pads.",
        slug: 'shock-riser-pads',
        title: 'Shock & Riser Pads',
      },
      {
        description:
          'Add creativity and style to the tricks with our rad skate rails.',
        slug: 'skate-rails',
        title: 'Skate Rails',
      },
      {
        description: 'Keep the board gliding smoothly with our rad skate wax.',
        slug: 'wax',
        title: 'Wax',
      },
      {
        description: 'Keep the feet comfy and stylish with our rad socks.',
        slug: 'socks',
        title: 'Socks',
      },
      {
        description: 'Carry the gear in style with our rad backpacks.',
        slug: 'backpacks',
        title: 'Backpacks',
      },
    ],
    title: 'accessories',
  },
] satisfies {
  subcategories: {
    description?: string;
    image?: string;
    slug: string;
    title: string;
  }[];
  image: string;
  title: string;
}[];

export function slugify(string_: string) {
  return string_
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-{2,}/g, '-');
}

export const mainNav = [
  {
    title: 'Catalogue',
    url: '/',
    items: [
      {
        description: 'All the products we have to offer.',
        title: 'Products',
        url: '/products',
        // items: [],
      },
      {
        description: 'Build the own custom clothes.',
        title: 'Build a Look',
        url: '/custom/clothing',
        // items: [],
      },
      {
        description: 'Read our latest blog posts.',
        title: 'Blog',
        url: '/blog',
        // items: [],
      },
    ],
  },
  ...productCategories.map((category) => ({
    title: category.title,
    url: `/categories/${slugify(category.title)}`,
    items: [
      {
        description: `All ${category.title}.`,
        title: 'All',
        url: `/categories/${slugify(category.title)}`,
        items: [],
      },
      ...category.subcategories.map((subcategory) => ({
        description: subcategory.description,
        title: subcategory.title,
        url: `/categories/${slugify(category.title)}/${subcategory.slug}`,
        items: [],
      })),
    ],
  })),
] satisfies HeaderItem[];
