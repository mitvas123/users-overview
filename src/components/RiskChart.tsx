import { Card } from "@/components/ui/card";

export const RiskChart = () => {
  return (
    <Card className="p-8 shadow-glass-lg backdrop-blur-sm border-card-border bg-card/80 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      
      <div className="relative flex flex-col items-center justify-center space-y-6">
        {/* AI Assistant bubble */}
        <div className="w-full flex justify-center mb-4 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-card shadow-glass border border-card-border backdrop-blur-sm">
            <div className="p-1.5 rounded-full bg-primary/10">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm text-foreground">Hey there, I'm here to help you take actions!</span>
          </div>
        </div>

        {/* Circular chart visualization */}
        <div className="relative w-72 h-72 animate-scale-in">
          <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
            {/* Risk ring (red) */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="12"
              strokeDasharray="100 434"
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{ opacity: 0.8 }}
            />
            {/* Warning ring (yellow) */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="hsl(var(--warning))"
              strokeWidth="12"
              strokeDasharray="80 454"
              strokeDashoffset="-100"
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{ opacity: 0.8 }}
            />
            {/* Success ring (green) */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="hsl(var(--success))"
              strokeWidth="12"
              strokeDasharray="254 280"
              strokeDashoffset="-180"
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{ opacity: 0.8 }}
            />
            
            {/* Inner rings with transparency */}
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="10"
              strokeDasharray="80 328"
              strokeLinecap="round"
              style={{ opacity: 0.5 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="hsl(var(--warning))"
              strokeWidth="10"
              strokeDasharray="100 308"
              strokeDashoffset="-80"
              strokeLinecap="round"
              style={{ opacity: 0.5 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="hsl(var(--success))"
              strokeWidth="10"
              strokeDasharray="228 180"
              strokeDashoffset="-180"
              strokeLinecap="round"
              style={{ opacity: 0.5 }}
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center space-y-1">
              <p className="text-4xl font-bold text-foreground">Risk 76</p>
              <div className="text-sm text-muted-foreground space-y-0.5">
                <p>Assets 38 • Users 120</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legend labels */}
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span>Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span>Assets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span>Users</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
