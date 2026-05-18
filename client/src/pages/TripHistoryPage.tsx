import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Trash2, Eye } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function TripHistoryPage() {
  const [, setLocation] = useLocation();
  const { data: trips, isLoading, refetch } = trpc.trips.list.useQuery();
  const deleteTrip = trpc.trips.delete.useMutation();

  const handleDelete = async (tripId: number) => {
    if (confirm("Are you sure you want to delete this trip?")) {
      try {
        await deleteTrip.mutateAsync({ id: tripId });
        toast.success("Trip deleted successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to delete trip");
      }
    }
  };

  const handleView = (tripId: number) => {
    setLocation(`/trip/${tripId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
          <p className="text-muted-foreground">Loading your trips...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground mb-2">
            Your Trips
          </h1>
          <div className="w-24 h-1.5 bg-accent" />
        </div>

        {!trips || trips.length === 0 ? (
          <Card className="p-12 bg-card border-border text-center">
            <p className="text-lg text-muted-foreground mb-6">
              You haven't planned any trips yet.
            </p>
            <Button
              onClick={() => setLocation("/")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold uppercase tracking-wider py-6 px-8 transition-all duration-200 active:scale-95"
            >
              Plan Your First Trip
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Card
                key={trip.id}
                className="p-6 bg-card border-border hover:bg-muted/50 transition-colors duration-200 flex flex-col"
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-black uppercase tracking-wide text-foreground mb-2">
                    {trip.destination}
                  </h2>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Duration:</span> {trip.duration} days
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Budget:</span> {trip.budget.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Created:</span>{" "}
                      {new Date(trip.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {trip.weatherOverview && (
                    <p className="text-xs text-muted-foreground italic mb-4 line-clamp-2">
                      {trip.weatherOverview}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button
                    onClick={() => handleView(trip.id)}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold uppercase tracking-wider py-2 text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    onClick={() => handleDelete(trip.id)}
                    variant="outline"
                    className="flex-1 bg-transparent border-border text-foreground hover:bg-destructive/10 hover:text-destructive font-semibold uppercase tracking-wider py-2 text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border">
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="bg-transparent border-border text-foreground hover:bg-muted font-semibold uppercase tracking-wider py-6 px-8 transition-all duration-200 active:scale-95"
          >
            ← Back to Planner
          </Button>
        </div>
      </div>
    </div>
  );
}
