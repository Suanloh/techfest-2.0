import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";
import { Compass, Sparkles, Waves, MapPin, CloudSun, Wallet } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Atlas AI</p>
              <p className="text-lg font-semibold">Smart Trip Planner</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <span>Agents</span>
            <span>How it works</span>
            <span>Pricing</span>
          </div>
          {isAuthenticated ? (
            <Button
              onClick={() => setLocation("/plan")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6"
            >
              Plan a trip
            </Button>
          ) : (
            <a href={getLoginUrl()}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
                Get started
              </Button>
            </a>
          )}
        </div>
      </header>

      <section className="container py-16 md:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm text-accent">
            <Sparkles className="h-4 w-4" /> AI-powered, always personalized
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Travel planning that feels effortless, curated, and calm.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Atlas AI coordinates expert agents to design itineraries, select stays, and balance budgets
            so every journey feels intentional — from weekend escapes to long adventures.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {isAuthenticated ? (
              <Button
                onClick={() => setLocation("/plan")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base"
              >
                Start planning
              </Button>
            ) : (
              <a href={getLoginUrl()}>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base">
                  Sign in to begin
                </Button>
              </a>
            )}
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-border/70"
            >
              View sample itinerary
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              4.9/5 traveler satisfaction
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              120+ destinations covered
            </div>
          </div>
        </div>
        <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Trip Snapshot</p>
          <h3 className="mt-4 text-2xl font-semibold">Kyoto • 6 Days</h3>
          <p className="mt-2 text-muted-foreground">Boutique stays, temple walks, tea tastings.</p>
          <div className="mt-6 grid gap-4">
            {["Morning: Arashiyama + café", "Afternoon: Fushimi Inari", "Evening: Kiyamachi dining"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div className="mt-8 rounded-2xl bg-secondary/10 px-4 py-3 text-sm text-secondary">
            Budget balance: 22% under target.
          </div>
        </div>
      </section>

      <section className="container py-16 border-t border-border/60">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">AI agents</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">A calm team of specialists</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each agent focuses on one part of your trip, so the plan feels cohesive, relaxed, and highly
            tailored.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Orchestrator",
              text: "Aligns your goals, timing, and pace into a balanced itinerary.",
            },
            {
              icon: <Waves className="h-5 w-5" />,
              title: "Culture + Local",
              text: "Finds immersive stays, food, and experiences that feel authentic.",
            },
            {
              icon: <CloudSun className="h-5 w-5" />,
              title: "Logistics",
              text: "Optimizes weather windows, transit, and day-to-day flow.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="h-11 w-11 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 border-t border-border/60">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Why travelers love it</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Thoughtful planning, beautiful outcomes.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us your destination, budget, and travel style. Atlas AI returns a polished itinerary,
              budget breakdown, and booking-ready suggestions in minutes.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Personalized schedules for every day of your trip.",
                "Hotel and experience recommendations that fit your vibe.",
                "Clear budget breakdowns with built-in flexibility.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: <Wallet className="h-5 w-5" />, label: "Budget Smart", value: "+18% savings" },
              { icon: <Sparkles className="h-5 w-5" />, label: "Personalized", value: "Tailored days" },
              { icon: <Compass className="h-5 w-5" />, label: "Guided Flow", value: "No planning stress" },
              { icon: <MapPin className="h-5 w-5" />, label: "Local Gems", value: "Handpicked" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 text-secondary">
                  {stat.icon}
                  <span className="text-sm uppercase tracking-[0.3em]">{stat.label}</span>
                </div>
                <p className="mt-4 text-2xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 border-t border-border/60">
        <div className="rounded-3xl bg-accent/10 border border-accent/20 p-10 md:p-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Ready for a calmer trip?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Start with your destination and budget. Atlas AI will assemble the rest.
            </p>
          </div>
          {isAuthenticated ? (
            <Button
              onClick={() => setLocation("/plan")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base"
            >
              Plan my trip
            </Button>
          ) : (
            <a href={getLoginUrl()}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base">
                Get started
              </Button>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
