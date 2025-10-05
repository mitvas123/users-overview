import { Zap } from "lucide-react";

export const ModernRiskChart = () => {
  return (
    <div className="relative rounded-3xl border border-border/50 bg-gradient-subtle p-12 shadow-xl overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* AI Assistant prompt */}
        <div className="w-full flex justify-center animate-fade-in">
          <div className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-card/80 backdrop-blur-sm shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-base font-medium text-foreground">
              Hey there, I'm here to help you take actions!
            </span>
          </div>
        </div>

        {/* Enhanced circular visualization */}
        <div className="relative w-80 h-80 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
          <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
            <defs>
              <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--destructive))" />
                <stop offset="100%" stopColor="hsl(var(--destructive-light))" />
              </linearGradient>
              <linearGradient id="warningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--warning))" />
                <stop offset="100%" stopColor="hsl(var(--warning-light))" />
              </linearGradient>
              <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--success))" />
                <stop offset="100%" stopColor="hsl(var(--success-light))" />
              </linearGradient>
              
              {/* Glow filters */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Outer ring - Risk */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#riskGradient)"
              strokeWidth="14"
              strokeDasharray="100 434"
              strokeLinecap="round"
              filter="url(#glow)"
              className="transition-all duration-1000"
            />
            
            {/* Outer ring - Warning */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#warningGradient)"
              strokeWidth="14"
              strokeDasharray="80 454"
              strokeDashoffset="-100"
              strokeLinecap="round"
              filter="url(#glow)"
              className="transition-all duration-1000"
            />
            
            {/* Outer ring - Success */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#successGradient)"
              strokeWidth="14"
              strokeDasharray="254 280"
              strokeDashoffset="-180"
              strokeLinecap="round"
              filter="url(#glow)"
              className="transition-all duration-1000"
            />
            
            {/* Middle ring */}
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#riskGradient)"
              strokeWidth="10"
              strokeDasharray="80 328"
              strokeLinecap="round"
              style={{ opacity: 0.4 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#warningGradient)"
              strokeWidth="10"
              strokeDasharray="100 308"
              strokeDashoffset="-80"
              strokeLinecap="round"
              style={{ opacity: 0.4 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#successGradient)"
              strokeWidth="10"
              strokeDasharray="228 180"
              strokeDashoffset="-180"
              strokeLinecap="round"
              style={{ opacity: 0.4 }}
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-card/60 backdrop-blur-sm">
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Risk 76
              </p>
              <div className="text-sm text-muted-foreground font-medium space-y-1">
                <p>Assets 38 • Users 120</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 text-sm font-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-danger shadow-glow-danger" />
            <span className="text-foreground">Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-warning shadow-glow-warning" />
            <span className="text-foreground">Assets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-success shadow-glow-success" />
            <span className="text-foreground">Users</span>
          </div>
        </div>
      </div>
    </div>
  );
};
