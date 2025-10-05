import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";

interface PolicyCardProps {
  title: string;
  status: "enabled" | "tuning" | "stable";
}

export const PolicyCard = ({ title, status }: PolicyCardProps) => {
  return (
    <Card className="p-4 flex items-center justify-between shadow-glass backdrop-blur-sm border-card-border bg-card/60 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-muted/50">
          <Check className="h-4 w-4 text-success" />
        </div>
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <StatusBadge label={status.charAt(0).toUpperCase() + status.slice(1)} variant={status} />
    </Card>
  );
};
