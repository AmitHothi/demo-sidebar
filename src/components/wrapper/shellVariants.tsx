import type { ElementType, HTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";


import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils';

const shellVariants = cva(
  `
    grid items-center gap-8 pb-8 pt-6

    md:py-8
  `,
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        centered: "mr-auto ml-auto flex h-dvh max-w-2xl flex-col justify-center",
        default: "mr-auto ml-auto",
        markdown: `
          mr-auto ml-auto max-w-3xl gap-0 py-8

          lg:py-10

          md:py-10
        `,
        sidebar: "",
      },
    },
  },
);

type ShellProps = {
  as?: ElementType;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof shellVariants>;

function Shell({
  as: Comp = "main",
  className,
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp
      className={cn(
        shellVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Shell };
