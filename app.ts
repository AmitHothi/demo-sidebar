
import { MainMenuItem } from '@/constants/data';
import metadata from '@/constants/metadata';

// import { slugify } from "@/utils/reliverse/string";

export type FooterItem = {
    items: {
      external?: boolean;
      href: string;
      title: string;
    }[];
    title: string;
  };

// Define available icon names as a union type
type IconName =
  | "billing"
  | "discord"
  | "dollarSign"
  | "laptop"
  | "settings"
  | "store"
  | "terminal"
  | "user"
  | "view";

  export const productCategories = [
    {
      image: "/images/skateboard-one.webp",
      subcategories: [
        {
          description: "The board itself.",
          image: "/images/deck-one.webp",
          slug: "decks",
          title: "Decks",
        },
        {
          description: "The wheels that go on the board.",
          image: "/images/wheel-one.webp",
          slug: "wheels",
          title: "Wheels",
        },
        {
          description: "The trucks that go on the board.",
          image: "/images/truck-one.webp",
          slug: "trucks",
          title: "Trucks",
        },
        {
          description: "The bearings that go in the wheels.",
          image: "/images/bearing-one.webp",
          slug: "bearings",
          title: "Bearings",
        },
        {
          description: "The griptape that goes on the board.",
          image: "/images/griptape-one.webp",
          slug: "griptape",
          title: "Griptape",
        },
        {
          description: "The hardware that goes on the board.",
          image: "/images/hardware-one.webp",
          slug: "hardware",
          title: "Hardware",
        },
        {
          description: "The tools that go with the board.",
          image: "/images/tool-one.webp",
          slug: "tools",
          title: "Tools",
        },
      ],
      title: "furniture",
    },
    {
      image: "/images/clothing-one.webp",
      subcategories: [
        {
          description: "Cool and comfy tees for effortless style.",
          slug: "t-shirts",
          title: "T-shirts",
        },
        {
          description: "Cozy up in trendy hoodies.",
          slug: "hoodies",
          title: "Hoodies",
        },
        {
          description: "Relaxed and stylish pants for everyday wear.",
          slug: "pants",
          title: "Pants",
        },
        {
          description: "Stay cool with casual and comfortable shorts.",
          slug: "shorts",
          title: "Shorts",
        },
        {
          description: "Top off the look with stylish and laid-back hats.",
          slug: "hats",
          title: "Hats",
        },
      ],
      title: "clothing",
    },
    {
      image: "/images/shoe-one.webp",
      subcategories: [
        {
          description: "Rad low tops shoes for a stylish low-profile look.",
          slug: "low-tops",
          title: "Low Tops",
        },
        {
          description: "Elevate the style with rad high top shoes.",
          slug: "high-tops",
          title: "High Tops",
        },
        {
          description: "Effortless style with rad slip-on shoes.",
          slug: "slip-ons",
          title: "Slip-ons",
        },
        {
          description: "Performance-driven rad shoes for the pros.",
          slug: "pros",
          title: "Pros",
        },
        {
          description: "Timeless style with rad classic shoes.",
          slug: "classics",
          title: "Classics",
        },
      ],
      title: "tech",
    },
    {
      image: "/images/backpack-one.webp",
      subcategories: [
        {
          description: "Essential tools for maintaining the skateboard, all rad.",
          slug: "skate-tools",
          title: "Skate Tools",
        },
        {
          description: "Upgrade the ride with our rad selection of bushings.",
          slug: "bushings",
          title: "Bushings",
        },
        {
          description:
            "Enhance the skateboard's performance with rad shock and riser pads.",
          slug: "shock-riser-pads",
          title: "Shock & Riser Pads",
        },
        {
          description:
            "Add creativity and style to the tricks with our rad skate rails.",
          slug: "skate-rails",
          title: "Skate Rails",
        },
        {
          description: "Keep the board gliding smoothly with our rad skate wax.",
          slug: "wax",
          title: "Wax",
        },
        {
          description: "Keep the feet comfy and stylish with our rad socks.",
          slug: "socks",
          title: "Socks",
        },
        {
          description: "Carry the gear in style with our rad backpacks.",
          slug: "backpacks",
          title: "Backpacks",
        },
      ],
      title: "accessories",
    },
  ] satisfies {
    subcategories: {
      description?: string;
      image?: string;
      slug: string;
      title: string;
      url?: string;
    }[];
    image: string;
    title: string;
  }[];

const socialLinks = {
  discord: "https://discord.gg/Pb8uKbwpsJ",
  facebook: "https://facebook.com/groups/bleverse",
  github: "https://github.com/blefnk/relivator-nextjs-template",
  githubAccount: "https://github.com/blefnk",
  twitter: "https://x.com/blefnk",
};

// Did you know that you can edit some settings of this file headlessly?
// Just run pnpm reli:setup and configure the advanced settings. Perfect!
export const siteConfig = {
  name: metadata.name,
  appNameDesc: metadata.appNameDesc,
  appPublisher: metadata.appPublisher,
  appVersion: metadata.appVersion,
  author: {
    email: metadata.author.email,
    fullName: metadata.author.fullName,
    handle: metadata.author.handle,
    handleAt: metadata.author.handleAt,
    url: metadata.author.url,
  },
  footerNav: [
    {
      items: [
        {
          external: false,
          href: "/contact",
          title: "Contact",
        },
        {
          external: false,
          href: "/privacy",
          title: "Privacy",
        },
        {
          external: false,
          href: "/terms",
          title: "Terms",
        },
        {
          external: false,
          href: "/about",
          title: "About",
        },
      ],
      title: "Help",
    },
    {
      items: [
        {
          external: true,
          href: socialLinks.githubAccount,
          title: "Github",
        },
        {
          external: true,
          href: socialLinks.discord,
          title: "Discord",
        },
        {
          external: true,
          href: socialLinks.twitter,
          title: "Twitter",
        },
        {
          external: true,
          href: socialLinks.facebook,
          title: "Facebook",
        },
      ],
      title: "Social",
    },
    {
      items: [
        {
          external: true,
          href: "https://github.com/orgs/reliverse/repositories",
          title: "@reliverse",
        },
        {
          external: true,
          href: socialLinks.githubAccount,
          title: "@blefnk",
        },
        {
          external: true,
          href: socialLinks.github,
          title: "Relivator",
        },
        {
          external: true,
          href: "https://github.com/blefnk/reliverse-website-builder",
          title: "Reliverse",
        },
      ],
      title: "Github",
    },
    {
      items: [
        {
          external: true,
          href: "https://github.com/sponsors/blefnk",
          title: "GitHub Sponsors",
        },
        {
          external: true,
          href: "https://buymeacoffee.com/blefnk",
          title: "Buy Me a Coffee",
        },
        {
          external: true,
          href: "https://patreon.com/blefnk",
          title: "Patreon",
        },
        {
          external: true,
          href: "https://paypal.me/blefony",
          title: "PayPal",
        },
      ],
      title: "Support",
    },
  ] satisfies FooterItem[],
  images: [
    {
      alt: "Shows the cover image of Relivator Next.js template",
      url: "/og.png",
    },
  ],
  keywords: ["next js shadcn ecommerce template"] as string[],
  links: socialLinks,
  mainNav: [
    {
      url: "/",
      items: [
        {
          description: "All the products we have to offer",
          url: "/products",
          items: [],
          title: "Products",
        },
        {
          description: "Build your own custom clothes",
          url: "/custom/clothing",
          items: [],
          title: "Build a Look",
        },
        {
          description: "Read our latest blog posts",
          url: "/blog",
          items: [],
          title: "Blog",
        },
      ],
      title: "Catalogue",
    },
    ...productCategories.map((category) => ({
      url: `/categories/${(category.title)}`,
      items: [
        {
          description: `All ${category.title}.`,
          url: `/categories/${(category.title)}`,
          items: [],
          title: "All",
        },
        ...category.subcategories.map((subcategory) => ({
          description: subcategory.description,
          url: `/categories/${(category.title)}/${subcategory.slug}`,
          items: [],
          title: subcategory.title,
        })),
      ],
      title: category.title,
    })),
  ] satisfies MainMenuItem[],
  socialLinks: {
    discord: "https://discord.gg/Pb8uKbwpsJ",
    facebook: "https://facebook.com/groups/bleverse",
    github: "https://github.com/blefnk/relivator-nextjs-template",
    githubAccount: "https://github.com/blefnk",
    twitter: "https://x.com/blefnk",
  },
  themeToggleEnabled: true,
} as const;

export const oauthProvidersClerk = [
  {
    name: "Google",
    icon: "view",
    strategy: "oauth_google",
  },
  {
    name: "Discord",
    icon: "discord",
    strategy: "oauth_discord",
  },
] satisfies {
  strategy:
    | "oauth_discord"
    | "oauth_facebook"
    | "oauth_github"
    | "oauth_google"
    | "oauth_microsoft";
  icon: IconName;
  name: string;
}[];
