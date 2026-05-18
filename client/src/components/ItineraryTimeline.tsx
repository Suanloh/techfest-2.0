import { Card } from "@/components/ui/card";
import { MapPin, Utensils, FileText } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  notes: string;
}

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <div className="w-full space-y-4">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
          Your Itinerary
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
      </div>

      <div className="space-y-6">
        {itinerary.map((day, index) => (
          <div key={day.day} className="relative">
            {/* Timeline connector */}
            {index !== itinerary.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-24 bg-border" />
            )}

            {/* Day card */}
            <Card className="p-6 bg-card border-border hover:bg-muted/50 transition-colors duration-200">
              <div className="flex gap-4">
                {/* Day indicator */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-none bg-accent text-accent-foreground flex items-center justify-center font-black text-lg">
                    {day.day}
                  </div>
                </div>

                {/* Day content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4">
                    {day.title}
                  </h3>

                  {/* Activities */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Activities
                      </span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meals */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Utensils className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Dining
                      </span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {day.meals.map((meal, idx) => (
                        <li key={idx} className="text-sm text-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{meal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Notes */}
                  {day.notes && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Notes
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6 italic">
                        {day.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Additional recommendations section */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4">
          Pro Tips
        </h3>
        <div className="bg-muted/30 border border-border p-4 space-y-2">
          <p className="text-sm text-foreground">
            • Arrive early at popular attractions to avoid crowds
          </p>
          <p className="text-sm text-foreground">
            • Keep some flexibility in your schedule for spontaneous discoveries
          </p>
          <p className="text-sm text-foreground">
            • Download offline maps and transportation apps before your trip
          </p>
        </div>
      </div>
    </div>
  );
}
