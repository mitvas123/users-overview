import { Shield, TrendingDown, Award, AlertTriangle, Cloud, Package, Droplet, Database, Github, User } from "lucide-react";
import { ModernStatCard } from "@/components/ModernStatCard";
import { ModernPolicyCard } from "@/components/ModernPolicyCard";
import { ModernAssetCard } from "@/components/ModernAssetCard";
import { ModernAlertCard } from "@/components/ModernAlertCard";
import { ModernRiskChart } from "@/components/ModernRiskChart";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-[1800px] mx-auto p-8 lg:p-12 space-y-12">
        {/* Header Section */}
        <header className="space-y-8">
          {/* Brand and User Profile Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow-primary">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                NeoTrust
              </h1>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Avatar className="h-11 w-11 border-2 border-primary/20">
                <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                  M
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-foreground">Mike Johnson</p>
                <p className="text-xs text-muted-foreground">mike@neotrust.ai</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModernStatCard 
              label="Overall Risk" 
              value={76} 
              icon={TrendingDown}
              trend="down"
              variant="danger"
              className="animate-fade-in"
            />
            <ModernStatCard 
              label="Security Reward" 
              value={2500} 
              icon={Award}
              trend="up"
              variant="success"
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" } as React.CSSProperties}
            />
            <ModernStatCard 
              label="Pending Actions" 
              value={3} 
              icon={AlertTriangle}
              variant="warning"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" } as React.CSSProperties}
            />
            <ModernStatCard 
              label="Active Policies" 
              value={12} 
              icon={Shield}
              variant="primary"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" } as React.CSSProperties}
            />
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Sidebar - Policies */}
          <aside className="xl:col-span-3 space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground px-2">Policies Applied</h2>
              <div className="space-y-4">
                <ModernPolicyCard title="MFA Required" status="enabled" />
                <ModernPolicyCard title="Sensitive Sharing Prevention" status="tuning" />
                <ModernPolicyCard title="Geo-fenced Logins" status="enabled" />
                <ModernPolicyCard title="Admin Approval Workflow" status="active" />
              </div>
            </div>
          </aside>

          {/* Center - Chart */}
          <main className="xl:col-span-6 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            <ModernRiskChart />
          </main>

          {/* Right Sidebar - Assets */}
          <aside className="xl:col-span-3 space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground px-2">Assets Affected</h2>
              <div className="space-y-4">
                <ModernAssetCard name="Google Drive" icon={Cloud} count="54 affected" status="warning" />
                <ModernAssetCard name="Box" icon={Package} count="Stable" status="stable" />
                <ModernAssetCard name="Dropbox" icon={Droplet} count="7 policies" status="info" />
                <ModernAssetCard name="Snowflake" icon={Database} count="2 restricted" status="critical" />
                <ModernAssetCard name="GitHub" icon={Github} count="12 repos" status="stable" />
              </div>
            </div>
          </aside>
        </div>

        {/* Security Alerts Section */}
        <section className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-foreground px-2">Security Alerts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ModernAlertCard
              title="Public Share Detected"
              description="File exposed via link in Google Drive. Auto-revoke pending to prevent unauthorized access."
              severity="high"
            />
            <ModernAlertCard
              title="Unusual Login Location"
              description="Login from new country for user Mike. Verification required before access is granted."
              severity="medium"
            />
            <ModernAlertCard
              title="Data Exfiltration Suspected"
              description="Large download detected from Snowflake warehouse NT_PROD. Investigating potential security breach."
              severity="critical"
            />
            <ModernAlertCard
              title="OAuth App Risk"
              description="Third-party application requested elevated access permissions on GitHub repository."
              severity="medium"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
