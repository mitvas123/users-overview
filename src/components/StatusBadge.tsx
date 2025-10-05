interface StatusBadgeProps {
  label: string;
  variant?: "enabled" | "tuning" | "stable" | "warning" | "restricted";
}

export const StatusBadge = ({ label, variant = "enabled" }: StatusBadgeProps) => {
  const variants = {
    enabled: "bg-foreground text-card",
    tuning: "bg-foreground text-card",
    stable: "bg-foreground text-card",
    warning: "bg-warning text-warning-foreground",
    restricted: "bg-destructive text-destructive-foreground",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} transition-all duration-200`}>
      {label}
    </span>
  );
};
