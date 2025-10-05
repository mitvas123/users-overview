import { LucideIcon } from "lucide-react";

interface ModernAssetCardProps {
  name: string;
  icon: LucideIcon;
  count: string;
  status: "stable" | "warning" | "critical" | "info";
}

export const ModernAssetCard = ({ name, icon: Icon, count, status }: ModernAssetCardProps) => {
  const statusConfig = {
    stable: {
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
    },
    warning: {
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
    },
    critical: {
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
    },
    info: {
      color: "text-info",
      bgColor: "bg-info/10",
      borderColor: "border-info/20",
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`
      group relative rounded-2xl border bg-card p-5 
      transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
      ${config.borderColor} hover:border-opacity-50
    `}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-2.5 rounded-xl ${config.bgColor} transition-transform duration-300 group-hover:scale-110`}>
            <Icon className={`h-5 w-5 ${config.color}`} />
          </div>
          <span className="text-base font-semibold text-foreground">{name}</span>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${config.bgColor} ${config.color}`}>
          {count}
        </span>
      </div>
    </div>
  );
};
