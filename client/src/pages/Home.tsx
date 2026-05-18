import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";
import { MapPin, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-6">
            Plan Your Perfect Trip
          </h1>
          <div className="w-32 h-2 bg-accent mb-8" />
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Powered by AI agents that orchestrate your entire travel experience. Get personalized
            itineraries, hotel recommendations, local food suggestions, and smart budget breakdowns—all
            in seconds.
          </p>

          {isAuthenticated ? (
            <Button
              onClick={() => setLocation("/plan")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-black uppercase tracking-wider py-8 px-12 text-lg transition-all duration-200 active:scale-95"
            >
              Start Planning
            </Button>
          ) : (
            <a href={getLoginUrl()}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-black uppercase tracking-wider py-8 px-12 text-lg transition-all duration-200 active:scale-95">
                Sign In to Begin
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-20 border-t border-border">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground mb-2">
            How It Works
          </h2>
          <div className="w-24 h-1.5 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-card border border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-foreground mb-3">
              Orchestrator Agent
            </h3>
            <p className="text-muted-foreground">
              Coordinates your entire trip planning process, delegating tasks to specialized agents for
              comprehensive coverage.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-card border border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-foreground mb-3">
              Travel & Culture Agent
            </h3>
            <p className="text-muted-foreground">
              Generates detailed itineraries, recommends hotels, suggests local foods, and highlights
              must-see attractions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-card border border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-foreground mb-3">
              Logistics Agent
            </h3>
            <p className="text-muted-foreground">
              Provides weather insights and intelligently allocates your budget across accommodation,
              food, transport, and activities.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground mb-6">
            Ready to Explore?
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you're planning a weekend getaway or a month-long adventure, our AI-powered system
            will create a trip tailored to your preferences and budget.
          </p>

          {isAuthenticated ? (
            <Button
              onClick={() => setLocation("/plan")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-black uppercase tracking-wider py-8 px-12 text-lg transition-all duration-200 active:scale-95"
            >
              Plan Your Trip Now
            </Button>
          ) : (
            <a href={getLoginUrl()}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-black uppercase tracking-wider py-8 px-12 text-lg transition-all duration-200 active:scale-95">
                Get Started
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
