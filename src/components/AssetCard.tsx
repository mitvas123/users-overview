import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";

interface AssetCardProps {
  name: string;
  icon: LucideIcon;
  count: string;
  variant?: "enabled" | "stable" | "warning" | "restricted";
}

export const AssetCard = ({ name, icon: Icon, count, variant = "stable" }: AssetCardProps) => {
  return (
    <Card className="p-4 flex items-center justify-between shadow-glass backdrop-blur-sm border-card-border bg-card/60 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-muted/50">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <StatusBadge label={count} variant={variant} />
    </Card>
  );
};
