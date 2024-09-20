import type { ElementType } from "react";
import { Balancer } from "react-wrap-balancer";

import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Files,
  LayoutDashboard,
  PlaneTakeoff,
  QrCode,
  Server,
  ShoppingBag,
  ToggleRight,
} from "lucide-react";
import { cn } from '@/lib/utils';

export function Features() {
//   const t = useTranslations("landing");

  return (
    <div
      className={`
        mx-auto grid justify-center gap-4

        lg:grid-cols-4

        md:grid-cols-2

        sm:grid-cols-2
      `}
    >
      <FeatureCard
        description={("features.devtools.ambitions-description")}
        icon={Clock}
        title={("features.devtools.title")}
      />
      <FeatureCard
        description={("features.nextjs.description")}
        icon={PlaneTakeoff}
        title={("features.nextjs.title")}
      />
      <FeatureCard
        description={("features.database.description")}
        icon={QrCode}
        title={("features.database.title")}
      />
      <FeatureCard
        description={("features.text.description")}
        icon={ToggleRight}
        title={("features.text.title")}
      />
      <FeatureCard
        description={("features.auth.description")}
        icon={Files}
        title={("features.auth.title")}
      />
      <FeatureCard
        description={("features.database.description")}
        icon={Server}
        title={("features.database.title")}
      />
      <FeatureCard
        description={("features.interface.description")}
        icon={LayoutDashboard}
        title={("features.interface.title")}
      />
      <FeatureCard
        description={("features.devtools.description")}
        icon={ShoppingBag}
        title={("features.devtools.title")}
      />
    </div>
  );
}

type FeatureCardProps = {
  description: string;
  icon: ElementType;
  title: string;
};

function FeatureCard({ description, icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background p-2 text-left">
      <div className="flex flex-col justify-between rounded-lg p-6">
        <div className="flex min-h-[64px] items-center space-x-4">
          <Icon aria-hidden className="size-8" />
          <Balancer
            as="h2"
            className={cn(`
              text-lg font-medium tracking-tight text-muted-foreground

              sm:text-xl
            `)}
          >
            {title}
          </Balancer>
        </div>
        <Separator className="my-4" />
        <Balancer as="p" className="flex text-muted-foreground">
          {description}
        </Balancer>
      </div>
    </div>
  );
}
