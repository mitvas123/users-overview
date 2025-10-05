import { AlertCircle, AlertTriangle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AlertCardProps {
  title: string;
  description: string;
  severity: "high" | "medium" | "critical" | "low";
}

export const AlertCard = ({ title, description, severity }: AlertCardProps) => {
  const severityConfig = {
    critical: {
      icon: XCircle,
      bgColor: "bg-destructive/10",
      iconColor: "text-destructive",
      badgeColor: "bg-destructive text-destructive-foreground",
    },
    high: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      iconColor: "text-destructive",
      badgeColor: "bg-destructive text-destructive-foreground",
    },
    medium: {
      icon: AlertTriangle,
      bgColor: "bg-warning/10",
      iconColor: "text-warning",
      badgeColor: "bg-foreground text-card",
    },
    low: {
      icon: AlertCircle,
      bgColor: "bg-muted/50",
      iconColor: "text-muted-foreground",
      badgeColor: "bg-muted text-muted-foreground",
    },
  };

  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <Card className="p-4 flex items-center gap-4 shadow-glass backdrop-blur-sm border-card-border bg-card/60 hover:bg-card/80 transition-all duration-300 hover:scale-[1.005] group">
      <div className={`p-2 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-200`}>
        <Icon className={`h-5 w-5 ${config.iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.badgeColor} whitespace-nowrap`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    </Card>
  );
};
