import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface AgentStatusProps {
  isActive: boolean;
  currentAgent?: string;
}

const AGENTS = ["Orchestrator", "Travel & Culture", "Logistics"];

export default function AgentStatus({ isActive, currentAgent }: AgentStatusProps) {
  const [displayedAgent, setDisplayedAgent] = useState<string | undefined>(currentAgent);
  const [animatingAgent, setAnimatingAgent] = useState<string | undefined>();

  useEffect(() => {
    if (currentAgent && currentAgent !== displayedAgent) {
      setAnimatingAgent(currentAgent);
      const timer = setTimeout(() => {
        setDisplayedAgent(currentAgent);
        setAnimatingAgent(undefined);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentAgent, displayedAgent]);

  if (!isActive) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Agent Pipeline Active
          </h3>
        </div>

        <div className="space-y-3">
          {AGENTS.map((agent) => {
            const isActive = agent === displayedAgent;
            const isAnimating = agent === animatingAgent;

            return (
              <div key={agent} className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 transition-all duration-300 ${
                    isActive
                      ? "bg-accent scale-125 shadow-lg shadow-accent/50"
                      : isAnimating
                        ? "bg-muted-foreground animate-pulse"
                        : "bg-muted"
                  }`}
                />
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-accent font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {agent}
                </span>
                {isActive && (
                  <span className="text-xs text-muted-foreground ml-auto">
                    thinking...
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Orchestrating multi-agent travel planning system
          </p>
        </div>
      </div>
    </Card>
  );
}
