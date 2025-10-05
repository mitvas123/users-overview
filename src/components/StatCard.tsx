import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: "up" | "down";
  variant?: "default" | "warning" | "success" | "danger";
}

export const StatCard = ({ label, value, icon: Icon, trend, variant = "default" }: StatCardProps) => {
  const variantStyles = {
    default: "hover:shadow-glass-lg",
    warning: "hover:shadow-glass-lg border-warning/20",
    success: "hover:shadow-glass-lg border-success/20",
    danger: "hover:shadow-glass-lg border-destructive/20",
  };

  return (
    <Card className={`p-6 shadow-glass backdrop-blur-sm border-card-border bg-card/80 transition-all duration-300 hover:scale-[1.02] ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-semibold tracking-tight text-foreground">{value}</h3>
            {trend && (
              <span className={`text-sm ${trend === "up" ? "text-success" : "text-destructive"}`}>
                {trend === "up" ? "↗" : "↘"}
              </span>
            )}
          </div>
        </div>
        {Icon && (
          <div className="p-2.5 rounded-xl bg-muted/50">
            <Icon className="h-5 w-5 text-muted-foreground" />
          </div>
        )}
      </div>
    </Card>
  );
};
