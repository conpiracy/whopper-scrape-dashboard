import { Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyResources = [
  {
    id: 1,
    title: "Documentation",
    description: "Access comprehensive guides and documentation.",
    links: [
      { title: "Getting Started Guide", url: "#" },
      { title: "API Documentation", url: "#" },
      { title: "Best Practices", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Tools",
    description: "Essential tools to help you succeed.",
    links: [
      { title: "Analytics Dashboard", url: "#" },
      { title: "Revenue Calculator", url: "#" },
      { title: "Performance Tracker", url: "#" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Resources</h1>
        </div>
        <div className="grid gap-6">
          {dummyResources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {resource.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-primary">{link.title}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;