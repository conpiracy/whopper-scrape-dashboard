import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg",
    quote: "Info Radar has transformed how we make marketing decisions. The real-time insights are invaluable.",
  },
  {
    name: "Michael Chen",
    role: "Growth Lead",
    company: "StartupX",
    image: "/placeholder.svg",
    quote: "The data visualization tools have made it so much easier to present results to stakeholders.",
  },
  {
    name: "Emma Davis",
    role: "Content Strategist",
    company: "MediaPro",
    image: "/placeholder.svg",
    quote: "Finally, a platform that gives us actionable insights we can trust. Game-changer!",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Trusted by Marketing Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about Info Radar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover-card-animation border-none"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};