import { useState } from "react";
import { Zap, MessageCircle } from "lucide-react";
import hummingbirdIcon from "@/assets/hummingbird-ai.png";

type MetricType = "risk" | "assets" | "users" | null;

export const InteractiveRiskChart = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>(null);
  const [isAiHovered, setIsAiHovered] = useState(false);

  const metrics = [
    { 
      id: "risk" as MetricType, 
      label: "Risk", 
      value: 76, 
      color: "hsl(var(--destructive))",
      gradient: "url(#riskGradient)",
      arc: { start: 0, length: 100 }
    },
    { 
      id: "assets" as MetricType, 
      label: "Assets", 
      value: 38, 
      color: "hsl(var(--warning))",
      gradient: "url(#warningGradient)",
      arc: { start: 100, length: 80 }
    },
    { 
      id: "users" as MetricType, 
      label: "Users", 
      value: 120, 
      color: "hsl(var(--success))",
      gradient: "url(#successGradient)",
      arc: { start: 180, length: 254 }
    },
  ];

  const getOpacity = (metricId: MetricType) => {
    if (selectedMetric === null) return 1;
    return selectedMetric === metricId ? 1 : 0.2;
  };

  const getScale = (metricId: MetricType) => {
    if (selectedMetric === null) return 1;
    return selectedMetric === metricId ? 1.05 : 0.98;
  };

  return (
    <div className="relative rounded-3xl border border-border/50 bg-gradient-subtle p-12 shadow-xl overflow-hidden">
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-primary/30 animate-float" />
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-success/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 rounded-full bg-warning/30 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* AI Assistant prompt */}
        <div className="w-full flex justify-center animate-fade-in">
          <div className="group flex items-center gap-3 px-6 py-4 rounded-3xl bg-card/80 backdrop-blur-sm shadow-lg border border-border/50 hover:shadow-glow-primary hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="p-2 rounded-xl bg-gradient-primary animate-pulse-subtle">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-base font-medium text-foreground">
              Hey there, I'm here to help you take actions!
            </span>
          </div>
        </div>

        {/* Metric selector tabs */}
        <div className="flex items-center gap-3 p-2 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-md">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              className={`
                px-6 py-3 rounded-xl font-semibold text-sm
                transition-all duration-300 hover:scale-105
                ${selectedMetric === metric.id 
                  ? 'bg-gradient-primary text-white shadow-glow-primary' 
                  : 'bg-transparent text-foreground hover:bg-muted'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ 
                    background: selectedMetric === metric.id ? 'white' : metric.color,
                    boxShadow: selectedMetric === metric.id ? '0 0 8px rgba(255,255,255,0.8)' : 'none'
                  }} 
                />
                <span>{metric.label}</span>
                <span className={`
                  px-2 py-0.5 rounded-full text-xs
                  ${selectedMetric === metric.id ? 'bg-white/20' : 'bg-muted'}
                `}>
                  {metric.value}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Enhanced circular visualization */}
        <div className="relative w-[400px] h-[400px] animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
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
              
              {/* Enhanced glow filters */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glowActive">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Outer rings with interactive highlighting */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#riskGradient)"
              strokeWidth="16"
              strokeDasharray="100 434"
              strokeLinecap="round"
              filter={selectedMetric === "risk" ? "url(#glowActive)" : "url(#glow)"}
              className="transition-all duration-500 cursor-pointer"
              style={{ 
                opacity: getOpacity("risk"),
                transform: `scale(${getScale("risk")})`,
                transformOrigin: 'center'
              }}
              onClick={() => setSelectedMetric(selectedMetric === "risk" ? null : "risk")}
            />
            
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#warningGradient)"
              strokeWidth="16"
              strokeDasharray="80 454"
              strokeDashoffset="-100"
              strokeLinecap="round"
              filter={selectedMetric === "assets" ? "url(#glowActive)" : "url(#glow)"}
              className="transition-all duration-500 cursor-pointer"
              style={{ 
                opacity: getOpacity("assets"),
                transform: `scale(${getScale("assets")})`,
                transformOrigin: 'center'
              }}
              onClick={() => setSelectedMetric(selectedMetric === "assets" ? null : "assets")}
            />
            
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#successGradient)"
              strokeWidth="16"
              strokeDasharray="254 280"
              strokeDashoffset="-180"
              strokeLinecap="round"
              filter={selectedMetric === "users" ? "url(#glowActive)" : "url(#glow)"}
              className="transition-all duration-500 cursor-pointer"
              style={{ 
                opacity: getOpacity("users"),
                transform: `scale(${getScale("users")})`,
                transformOrigin: 'center'
              }}
              onClick={() => setSelectedMetric(selectedMetric === "users" ? null : "users")}
            />
            
            {/* Middle rings */}
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#riskGradient)"
              strokeWidth="12"
              strokeDasharray="80 328"
              strokeLinecap="round"
              className="transition-all duration-500"
              style={{ opacity: getOpacity("risk") * 0.5 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#warningGradient)"
              strokeWidth="12"
              strokeDasharray="100 308"
              strokeDashoffset="-80"
              strokeLinecap="round"
              className="transition-all duration-500"
              style={{ opacity: getOpacity("assets") * 0.5 }}
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="url(#successGradient)"
              strokeWidth="12"
              strokeDasharray="228 180"
              strokeDashoffset="-180"
              strokeLinecap="round"
              className="transition-all duration-500"
              style={{ opacity: getOpacity("users") * 0.5 }}
            />
          </svg>
          
          {/* Center content with dynamic values */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center space-y-3 p-8 rounded-2xl bg-card/70 backdrop-blur-md border border-border/30 shadow-xl transition-all duration-500">
              {selectedMetric ? (
                <div className="animate-fade-in-scale">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {metrics.find(m => m.id === selectedMetric)?.label}
                  </p>
                  <p 
                    className="text-6xl font-bold mb-2"
                    style={{ 
                      color: metrics.find(m => m.id === selectedMetric)?.color,
                      filter: 'drop-shadow(0 0 8px currentColor)'
                    }}
                  >
                    {metrics.find(m => m.id === selectedMetric)?.value}
                  </p>
                  <p className="text-xs text-muted-foreground">Active metric</p>
                </div>
              ) : (
                <div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-3">
                    Risk 76
                  </p>
                  <div className="text-sm text-muted-foreground font-medium space-y-1">
                    <p>Assets 38 • Users 120</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Hummingbird Assistant - Bottom Right */}
          <div 
            className="absolute bottom-4 right-4 cursor-pointer group"
            onMouseEnter={() => setIsAiHovered(true)}
            onMouseLeave={() => setIsAiHovered(false)}
          >
            <div className="relative">
              {/* Pulsing background glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse-subtle" />
              
              {/* Hummingbird icon container */}
              <div className={`
                relative p-4 rounded-2xl bg-gradient-primary shadow-glow-primary
                transition-all duration-500 hover:scale-110 hover:rotate-6
                ${isAiHovered ? 'animate-float' : ''}
              `}>
                <img 
                  src={hummingbirdIcon} 
                  alt="AI Assistant" 
                  className="w-8 h-8 relative z-10"
                />
                
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </div>

              {/* "Talk to me" tooltip */}
              <div className={`
                absolute bottom-full right-0 mb-3 whitespace-nowrap
                transition-all duration-300 origin-bottom-right
                ${isAiHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
              `}>
                <div className="px-4 py-2 rounded-xl bg-gradient-primary text-white font-semibold text-sm shadow-glow-primary flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk to me</span>
                </div>
                {/* Arrow */}
                <div className="absolute top-full right-6 -mt-1">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend with animations */}
        <div className="flex items-center justify-center gap-8 text-sm font-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {metrics.map((metric, index) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-xl
                transition-all duration-300 hover:scale-110 hover:shadow-lg
                ${selectedMetric === metric.id ? 'bg-card shadow-md' : 'hover:bg-card/50'}
              `}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div 
                className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${selectedMetric === metric.id ? 'animate-pulse-subtle' : ''}
                `}
                style={{ 
                  background: `linear-gradient(135deg, ${metric.color}, ${metric.color})`,
                  boxShadow: selectedMetric === metric.id ? `0 0 12px ${metric.color}` : `0 0 8px ${metric.color}`
                }}
              />
              <span className={`
                transition-all duration-300
                ${selectedMetric === metric.id ? 'text-foreground font-bold' : 'text-muted-foreground'}
              `}>
                {metric.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
