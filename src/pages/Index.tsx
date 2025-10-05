import { Shield, TrendingDown, Award, AlertTriangle, Cloud, Package, Droplet, Database, Github, User } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { PolicyCard } from "@/components/PolicyCard";
import { AssetCard } from "@/components/AssetCard";
import { AlertCard } from "@/components/AlertCard";
import { RiskChart } from "@/components/RiskChart";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header with stats */}
        <header className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Brand card */}
            <Card className="p-6 shadow-glass backdrop-blur-sm border-card-border bg-card/80 flex items-center justify-center">
              <h1 className="text-2xl font-bold text-foreground">NeoTrust</h1>
            </Card>

            {/* Stat cards */}
            <StatCard 
              label="Overall Risk" 
              value={76} 
              icon={TrendingDown}
              trend="down"
              variant="warning"
            />
            <StatCard 
              label="Security Reward" 
              value={2500} 
              icon={Award}
              trend="up"
              variant="success"
            />
            <StatCard 
              label="Pending Actions" 
              value={3} 
              icon={AlertTriangle}
              variant="danger"
            />

            {/* User profile card */}
            <Card className="p-4 shadow-glass backdrop-blur-sm border-card-border bg-card/80 flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
              <Avatar className="h-10 w-10 border-2 border-card-border">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">Mike</p>
                <p className="text-xs text-muted-foreground truncate">mike@neotrust.ai</p>
              </div>
            </Card>
          </div>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar - Policies */}
          <aside className="lg:col-span-3 space-y-4 animate-slide-in">
            <Card className="p-6 shadow-glass-lg backdrop-blur-sm border-card-border bg-card/80">
              <h2 className="text-lg font-semibold text-foreground mb-4">Policies Applied</h2>
              <div className="space-y-3">
                <PolicyCard title="MFA Required" status="enabled" />
                <PolicyCard title="Sensitive Sharing Prevention" status="tuning" />
                <PolicyCard title="Geo-fenced Logins" status="enabled" />
                <PolicyCard title="Admin Approval Workflow" status="enabled" />
              </div>
            </Card>
          </aside>

          {/* Center - Chart */}
          <main className="lg:col-span-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <RiskChart />
          </main>

          {/* Right sidebar - Assets */}
          <aside className="lg:col-span-3 space-y-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
            <Card className="p-6 shadow-glass-lg backdrop-blur-sm border-card-border bg-card/80">
              <h2 className="text-lg font-semibold text-foreground mb-4">Assets Affected</h2>
              <div className="space-y-3">
                <AssetCard name="Google Drive" icon={Cloud} count="54 affected" variant="warning" />
                <AssetCard name="Box" icon={Package} count="Stable" variant="stable" />
                <AssetCard name="Dropbox" icon={Droplet} count="7 policies" variant="stable" />
                <AssetCard name="Snowflake" icon={Database} count="2 restricted" variant="restricted" />
                <AssetCard name="GitHub" icon={Github} count="12 repos" variant="stable" />
              </div>
            </Card>
          </aside>
        </div>

        {/* Security Alerts */}
        <section className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Card className="p-6 shadow-glass-lg backdrop-blur-sm border-card-border bg-card/80">
            <h2 className="text-lg font-semibold text-foreground mb-4">Security Alerts</h2>
            <div className="space-y-3">
              <AlertCard
                title="Public Share Detected"
                description="File exposed via link in Google Drive, auto-revoke pending."
                severity="high"
              />
              <AlertCard
                title="Unusual Login Location"
                description="Login from new country for user Mike — verification required."
                severity="medium"
              />
              <AlertCard
                title="Data Exfiltration Suspected"
                description="Large download from Snowflake warehouse NT_PROD."
                severity="critical"
              />
              <AlertCard
                title="OAuth App Risk"
                description="Third-party app requested high access on GitHub repo."
                severity="medium"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
