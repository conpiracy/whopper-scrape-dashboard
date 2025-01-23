import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyTrainings = [
  {
    id: 1,
    title: "Getting Started",
    description: "Learn the basics of our platform and how to maximize your earnings.",
    modules: ["Platform Overview", "Account Setup", "First Steps"],
    duration: "2 hours"
  },
  {
    id: 2,
    title: "Advanced Techniques",
    description: "Master advanced strategies for better performance.",
    modules: ["Advanced Analytics", "Growth Strategies", "Optimization"],
    duration: "4 hours"
  }
];

const Training = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Training</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {dummyTrainings.map((training) => (
            <Card key={training.id}>
              <CardHeader>
                <CardTitle>{training.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{training.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Modules:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {training.modules.map((module) => (
                      <li key={module}>{module}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Duration: {training.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;