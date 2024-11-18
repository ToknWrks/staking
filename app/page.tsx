"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { RewardsChart } from "@/components/dashboard/rewards-chart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CoinsIcon,
  DollarSignIcon,
  PercentIcon,
  RefreshCcwIcon,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const [autoConvertPercentage, setAutoConvertPercentage] = useState("50");
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: `Auto-convert percentage set to ${autoConvertPercentage}%`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Staked OSMO"
            value="15,231.45"
            icon={<CoinsIcon className="h-4 w-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Unclaimed Rewards"
            value="$1,234.56"
            icon={<DollarSignIcon className="h-4 w-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Auto-Convert Rate"
            value="50%"
            icon={<PercentIcon className="h-4 w-4 text-muted-foreground" />}
          />
          <StatsCard
            title="Total USDC Converted"
            value="$12,345.67"
            icon={<RefreshCcwIcon className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <RewardsChart />
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Auto-Convert Settings</CardTitle>
              <CardDescription>
                Configure what percentage of rewards to automatically convert to USDC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="percentage">Auto-Convert Percentage</Label>
                  <Input
                    id="percentage"
                    type="number"
                    min="0"
                    max="100"
                    value={autoConvertPercentage}
                    onChange={(e) => setAutoConvertPercentage(e.target.value)}
                  />
                </div>
                <Button onClick={handleSaveSettings}>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}