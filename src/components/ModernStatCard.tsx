import { LucideIcon } from "lucide-react";
import React from "react";

interface ModernStatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: "up" | "down";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
  style?: React.CSSProperties;
}

export const ModernStatCard = ({ 
  label, 
  value, 
  icon: Icon, 
  trend, 
  variant = "default",
  className = "",
  style
}: ModernStatCardProps) => {
  const variantStyles = {
    default: "bg-card hover:shadow-xl border-border/50",
    primary: "bg-gradient-primary text-primary-foreground hover:shadow-glow-primary border-0",
    success: "bg-gradient-success text-success-foreground hover:shadow-glow-success border-0",
    warning: "bg-gradient-warning text-warning-foreground hover:shadow-glow-warning border-0",
    danger: "bg-gradient-danger text-destructive-foreground hover:shadow-glow-danger border-0",
  };

  const textStyles = {
    default: "text-foreground",
    primary: "text-white",
    success: "text-white",
    warning: "text-white",
    danger: "text-white",
  };

  const mutedTextStyles = {
    default: "text-muted-foreground",
    primary: "text-white/80",
    success: "text-white/80",
    warning: "text-white/80",
    danger: "text-white/80",
  };

  return (
    <div
      style={style}
      className={`
        group relative rounded-3xl border p-8 
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        ${variantStyles[variant]} ${className}
      `}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <span className={`text-sm font-medium tracking-wide uppercase ${mutedTextStyles[variant]}`}>
            {label}
          </span>
          {Icon && (
            <div className={`
              p-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-110
              ${variant === 'default' ? 'bg-muted/50' : 'bg-white/10'}
            `}>
              <Icon className={`h-5 w-5 ${variant === 'default' ? 'text-muted-foreground' : 'text-white'}`} />
            </div>
          )}
        </div>
        <div className="flex items-baseline gap-3">
          <h3 className={`text-5xl font-bold tracking-tight ${textStyles[variant]}`}>
            {value}
          </h3>
          {trend && (
            <span className={`text-2xl font-semibold ${trend === "up" ? "text-success" : "text-destructive"}`}>
              {trend === "up" ? "↗" : "↘"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
