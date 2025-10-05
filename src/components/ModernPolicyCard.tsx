import { Check, Clock, Shield } from "lucide-react";

interface ModernPolicyCardProps {
  title: string;
  status: "enabled" | "tuning" | "active";
}

export const ModernPolicyCard = ({ title, status }: ModernPolicyCardProps) => {
  const statusConfig = {
    enabled: {
      icon: Check,
      color: "text-success",
      bgColor: "bg-success/10",
      label: "Enabled",
    },
    tuning: {
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning/10",
      label: "Tuning",
    },
    active: {
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10",
      label: "Active",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="group relative rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-border">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-2 rounded-xl ${config.bgColor} transition-transform duration-300 group-hover:scale-110`}>
            <Icon className={`h-4 w-4 ${config.color}`} />
          </div>
          <span className="text-base font-semibold text-foreground">{title}</span>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${config.bgColor} ${config.color}`}>
          {config.label}
        </span>
      </div>
    </div>
  );
};
