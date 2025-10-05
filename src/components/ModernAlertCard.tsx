import { AlertCircle, AlertTriangle, XCircle, Info } from "lucide-react";

interface ModernAlertCardProps {
  title: string;
  description: string;
  severity: "high" | "medium" | "critical" | "low";
}

export const ModernAlertCard = ({ title, description, severity }: ModernAlertCardProps) => {
  const severityConfig = {
    critical: {
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      badge: "bg-destructive text-destructive-foreground",
    },
    high: {
      icon: AlertCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      badge: "bg-destructive text-destructive-foreground",
    },
    medium: {
      icon: AlertTriangle,
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/30",
      badge: "bg-warning text-warning-foreground",
    },
    low: {
      icon: Info,
      color: "text-info",
      bgColor: "bg-info/10",
      borderColor: "border-info/30",
      badge: "bg-info text-info-foreground",
    },
  };

  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <div
      className={`
        group relative rounded-2xl border p-6 bg-card
        transition-all duration-300 hover:shadow-lg hover:scale-[1.01]
        ${config.borderColor}
      `}
    >
      <div className="flex items-start gap-5">
        <div className={`
          p-3 rounded-2xl ${config.bgColor}
          transition-transform duration-300 group-hover:scale-110
        `}>
          <Icon className={`h-6 w-6 ${config.color}`} />
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <h4 className="text-base font-bold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${config.badge}`}>
          {severity.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
